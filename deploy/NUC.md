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
4. Verifica desde tu PC: las 18 rutas responden 200, el HTML publicado es idéntico al local, `/home` y `/contact/` redirigen con 301, están las cabeceras de seguridad, se descargan los recursos, las imágenes tienen caché permanente y una ruta inexistente responde 404. También avisa si el monitoreo no responde.

Opciones:

- `-SkipBuild`: publica la compilación existente sin recompilar.
- `-VerifyOnly`: solo verifica lo que está publicado.
- `-RemoteHost`, `-RemoteUser`, `-WebPort`, `-MonitorPort`: otro equipo, usuario o puertos.

El resultado queda en `tmp/nuc-update-result.json`.

Para correr las pruebas en navegador (Playwright) directamente contra el sitio publicado:

```powershell
$env:E2E_BASE_URL = 'http://192.168.1.250:3005'; npm run test:e2e
```

## Acceso con clave SSH (recomendado)

Sin clave, SSH pide la contraseña dos veces (copia e instalación). Para no tener que escribirla, se configura una sola vez:

```powershell
powershell -ExecutionPolicy Bypass -File deploy/setup-ssh-key.ps1
```

El script crea la clave `~/.ssh/id_ed25519` si no existe, la agrega en el NUC sin duplicarla (pide la contraseña del NUC una vez) y comprueba que el acceso funcione. Si ya estaba configurada, no hace nada.

## Qué se publica

Docker sirve `build/` con Nginx (`deploy/nginx.conf`) y lo reinicia cuando se reinicia el NUC:

- Compresión gzip para HTML, CSS, JS, SVG y JSON.
- Caché: `/assets/` y `/images/optimized/` un año (los nombres llevan hash), la imagen para redes un mes y el HTML se revalida en cada visita.
- Cabeceras de seguridad (`deploy/security-headers.conf`): CSP, `nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy` y `Cross-Origin-Resource-Policy`.
- Redirecciones 301: `/home` → `/` y barra final → sin barra (`/contact/` → `/contact`).
- Las rutas desconocidas devuelven la página 404 del sitio con estado HTTP 404.

El contenedor está endurecido (`deploy/compose.yml`):

- Imagen `nginx-unprivileged`: Nginx corre sin root y escucha en el puerto 8080 del contenedor (el NUC lo publica en el 3005).
- Sistema de archivos de solo lectura; Nginx escribe únicamente en `/tmp`, que vive en memoria.
- Sin capacidades de Linux (`cap_drop: ALL`) y sin posibilidad de ganar privilegios (`no-new-privileges`).
- Registros con tope: hasta 3 archivos de 10 MB por contenedor, también en Caddy y Uptime Kuma.

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

## Monitoreo de disponibilidad (Uptime Kuma)

Cada instalación también levanta [Uptime Kuma](https://github.com/louislam/uptime-kuma) (`deploy/monitoring/compose.yml`) como proyecto aparte, `reparacionespc-monitor`. Publicar o volver atrás una versión del sitio no lo reinicia ni borra su historial, que queda en un volumen de Docker.

Configuración inicial (una sola vez):

1. Abrí `http://192.168.1.250:3006` y creá el usuario administrador. Elegí SQLite como base de datos si lo pregunta.
2. Agregá un monitor de tipo **HTTP(s) - Palabra clave**: dirección `http://192.168.1.250:3005/` y palabra clave `Reparaciones PC`, cada 60 segundos.
3. En **Configuración → Notificaciones**, agregá el canal por el que quieras recibir avisos (Telegram, correo, etc.) y activalo en el monitor.
4. Cuando haya dominio, agregá otro monitor con `https://tu-dominio.com/`: además avisa antes de que venza el certificado.

Como corre en el mismo NUC, detecta caídas del sitio o de Nginx, pero no un corte de luz o de internet del NUC entero. Para eso hace falta un servicio externo (por ejemplo UptimeRobot) apuntando al dominio público.

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

Monitoreo:

```sh
cd "$(cat ~/reparacionespc/current-release)"
docker compose -p reparacionespc-monitor -f deploy/monitoring/compose.yml ps
```
