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

Si el sitio se publica con HTTPS detrás de un proxy, conviene agregar allí `Strict-Transport-Security`.

## Volver a una versión anterior

```sh
cd ~/reparacionespc/releases && ls
cd ~/reparacionespc/releases/<version>
docker compose -p reparacionespc -f deploy/compose.yml up -d --force-recreate --wait
printf '%s\n' "$PWD" > ~/reparacionespc/current-release
```

## Estado y registros

```sh
cd "$(cat ~/reparacionespc/current-release)"
docker compose -p reparacionespc -f deploy/compose.yml ps
docker compose -p reparacionespc -f deploy/compose.yml logs --tail=100 web
```
