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
docker compose -p reparacionespc -f deploy/compose.yml up -d --force-recreate --wait
docker compose -p reparacionespc -f deploy/compose.yml ps
printf '%s\n' "$release" > "$base/current-release"

# Conservar solo las últimas versiones para poder volver atrás sin llenar el disco.
ls -1d "$base"/releases/*/ | sort -r | tail -n "+$((keep + 1))" | while read -r old; do
  [ "${old%/}" = "$release" ] || rm -rf "$old"
done
