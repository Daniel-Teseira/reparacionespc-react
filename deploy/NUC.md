# Publicar en el NUC

Destino: `daniel@192.168.1.250`, carpeta `~/reparacionespc`.
Acceso: `http://192.168.1.250:3005`.
Requiere Docker y Docker Compose, ya usados por Proyecto Alma en ese equipo.
En tu PC, el script necesita Node.js 22.13 o superior (ver [README](../README.md#requisitos-y-ejecución)) y los comandos `ssh` y `scp` de OpenSSH, incluidos en Windows.

## Actualizar (un solo comando)

En PowerShell, desde la raíz del proyecto:

```powershell
powershell -ExecutionPolicy Bypass -File deploy/update-nuc.ps1
```

El script:

1. Ejecuta lint, pruebas unitarias, compilación, `check:build` y las pruebas en navegador (Playwright).
2. Empaqueta `build/` y la configuración de `deploy/`.
3. Copia el paquete al NUC y lo instala en una carpeta de versión nueva (`~/reparacionespc/releases`). Conserva las últimas 5 versiones.
4. Verifica desde tu PC: las 18 rutas responden 200, el HTML publicado es idéntico al local, `/home` y `/contact/` redirigen con 301, están las cabeceras de seguridad, se descargan los recursos y una ruta inexistente responde 404.

Opciones:

- `-SkipBuild`: publica la compilación existente sin recompilar.
- `-VerifyOnly`: solo verifica lo que está publicado.
- `-RemoteHost`, `-RemoteUser`, `-WebPort`: otro equipo, usuario o puerto.

El resultado queda en `tmp/nuc-update-result.json`.

Para correr las pruebas en navegador (Playwright) directamente contra el sitio publicado:

```powershell
$env:E2E_BASE_URL = 'http://192.168.1.250:3005'; npm run test:e2e
```

## Acceso con clave SSH (recomendado)

Sin clave, SSH pide la contraseña dos veces (copia e instalación). Para no tener que escribirla, se configura una sola vez:

```powershell
ssh-keygen -t ed25519
type $env:USERPROFILE\.ssh\id_ed25519.pub | ssh daniel@192.168.1.250 "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
```

## Qué se publica

Docker sirve `build/` con Nginx (`deploy/nginx.conf`) y lo reinicia cuando se reinicia el NUC:

- Compresión gzip para HTML, CSS, JS, SVG y JSON.
- Caché: `/assets/` un año (los nombres llevan hash), `/images/` un mes y el HTML se revalida en cada visita.
- Cabeceras de seguridad (`deploy/security-headers.conf`): CSP, `nosniff`, `X-Frame-Options`, `Referrer-Policy` y `Permissions-Policy`.
- Redirecciones 301: `/home` → `/` y barra final → sin barra (`/contact/` → `/contact`).
- Las rutas desconocidas devuelven la página 404 del sitio con estado HTTP 404.

## Dominio y HTTPS (cuando haya dominio)

La configuración está lista en `deploy/https/` (Caddy con certificados automáticos de Let's Encrypt, HSTS y redirección de `www`). Se activa sola en la próxima instalación si existe `~/reparacionespc/https.env`.

Requisitos previos:

1. El dominio apunta (registro DNS `A`) a la IP pública de tu conexión.
2. El router reenvía los puertos 80 y 443 (TCP, y 443 UDP para HTTP/3) a `192.168.1.250`.
3. Ningún otro contenedor del NUC usa los puertos 80 o 443. Revisalo con `docker ps`. Si Proyecto Alma ya tiene un proxy en esos puertos, conviene agregar el dominio a ese proxy (apuntando a `192.168.1.250:3005`) en lugar de activar este.

Activación:

```sh
# En el NUC
echo 'SITE_DOMAIN=tu-dominio.com' > ~/reparacionespc/https.env
```

```powershell
# En tu PC: el dominio también va en la compilación (sitemap, canonical y vista previa al compartir).
# ascii evita el BOM que agrega utf8 en Windows PowerShell y que rompería la variable.
Set-Content .env.local 'VITE_SITE_URL=https://tu-dominio.com' -Encoding ascii
powershell -ExecutionPolicy Bypass -File deploy/update-nuc.ps1
```

Para desactivar HTTPS, borrá `~/reparacionespc/https.env` y volvé a publicar: la instalación quita el contenedor de Caddy.

Alternativa sin abrir puertos: un túnel de Cloudflare (`cloudflared`) apuntando a `http://192.168.1.250:3005`.

## Volver a una versión anterior

```sh
cd ~/reparacionespc/releases && ls
cd ~/reparacionespc/releases/<version>
docker compose -p reparacionespc -f deploy/compose.yml up -d --force-recreate --wait
printf '%s\n' "$PWD" > ~/reparacionespc/current-release
```

Con HTTPS activo (existe `~/reparacionespc/https.env`), reemplazá `-f deploy/compose.yml` por `--env-file ~/reparacionespc/https.env -f deploy/compose.yml -f deploy/https/compose.https.yml`, igual que en `deploy/install.sh`. Lo mismo vale para los comandos de abajo.

## Estado y registros

```sh
cd "$(cat ~/reparacionespc/current-release)"
docker compose -p reparacionespc -f deploy/compose.yml ps
docker compose -p reparacionespc -f deploy/compose.yml logs --tail=100 web
```

Con HTTPS activo, los registros de Caddy (certificados incluidos) se ven con `logs --tail=100 caddy`.
