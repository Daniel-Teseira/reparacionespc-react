#!/bin/sh
set -eu
base="$HOME/reparacionespc"
release="$base/releases/$(date +%Y%m%d%H%M%S)"
mkdir -p "$release"
tar -xzf "$HOME/reparacionespc-nuc.tar.gz" -C "$release"
test -f "$release/build/index.html"
test -f "$release/build/404.html"
cd "$release"
docker compose -p reparacionespc -f deploy/compose.yml up -d --force-recreate --wait
docker compose -p reparacionespc -f deploy/compose.yml ps
printf '%s\n' "$release" > "$base/current-release"
