#!/bin/sh
set -eu
base="$HOME/reparacionespc"
release="$base/releases/$(date +%Y%m%d%H%M%S)"
keep=5
mkdir -p "$release"
tar -xzf "$HOME/reparacionespc-nuc.tar.gz" -C "$release"
test -f "$release/build/index.html"
test -f "$release/build/404.html"
test -f "$release/deploy/security-headers.conf"
cd "$release"
# HTTPS opcional: si existe https.env (con SITE_DOMAIN), se agrega Caddy delante del sitio.
if [ -f "$base/https.env" ]; then
  set -- --env-file "$base/https.env" -f deploy/compose.yml -f deploy/https/compose.https.yml
else
  set -- -f deploy/compose.yml
fi
previous="$(cat "$base/current-release" 2>/dev/null || true)"
if ! docker compose -p reparacionespc "$@" up -d --force-recreate --remove-orphans --wait; then
  echo "Error: la versión nueva no arrancó bien. Últimos registros:" >&2
  docker compose -p reparacionespc "$@" logs --tail=40 >&2 || true
  # Volver a la versión anterior para que el sitio siga en línea.
  if [ -n "$previous" ] && [ -f "$previous/deploy/compose.yml" ]; then
    echo "Volviendo a la versión anterior: $previous" >&2
    cd "$previous"
    docker compose -p reparacionespc "$@" up -d --force-recreate --remove-orphans --wait
  fi
  exit 1
fi
docker compose -p reparacionespc "$@" ps
printf '%s\n' "$release" > "$base/current-release"

# Monitoreo (Uptime Kuma) como proyecto aparte. Sin --force-recreate: se reinicia solo si cambió
# su configuración. Un fallo acá no deshace la publicación del sitio, que ya terminó.
docker compose -p reparacionespc-monitor -f deploy/monitoring/compose.yml up -d \
  || echo "Aviso: no se pudo iniciar el monitoreo (deploy/monitoring/compose.yml)." >&2

# Conservar solo las últimas versiones para poder volver atrás sin llenar el disco.
ls -1d "$base"/releases/*/ | sort -r | tail -n "+$((keep + 1))" | while read -r old; do
  [ "${old%/}" = "$release" ] || rm -rf "$old"
done
