# Publicar en el NUC

Destino: `daniel@192.168.1.250`, carpeta `~/reparacionespc`.
Acceso: `http://192.168.1.250:3005`.
Requiere Docker y Docker Compose, ya usados por Proyecto Alma en ese equipo.

En PowerShell, desde la raiz del proyecto, preparar la version:

```powershell
npm run build
if ($LASTEXITCODE -ne 0) { throw 'Fallo la compilacion' }
npm run check:build
if ($LASTEXITCODE -ne 0) { throw 'Fallo la verificacion' }
New-Item -ItemType Directory -Force tmp | Out-Null
tar -czf tmp/reparacionespc-nuc.tar.gz build deploy/compose.yml deploy/nginx.conf deploy/install.sh
if ($LASTEXITCODE -ne 0) { throw 'Fallo la creacion del paquete' }
```

Copiar e instalar desde PowerShell. SSH pide la contrasena en la consola:

```powershell
scp .\tmp\reparacionespc-nuc.tar.gz daniel@192.168.1.250:~/reparacionespc-nuc.tar.gz
if ($LASTEXITCODE -ne 0) { throw 'Fallo la copia al NUC' }
ssh daniel@192.168.1.250 'tar -xOf ~/reparacionespc-nuc.tar.gz deploy/install.sh | sh'
```

Se copia la web compilada y su configuracion HTTP. Docker la sirve con Nginx
y la inicia de nuevo cuando se reinicia el NUC. Las rutas desconocidas devuelven
la pagina 404 del sitio con estado HTTP 404.

Cada instalacion usa una carpeta de version limpia en `~/reparacionespc/releases`, conservando la anterior para recuperacion.

Para actualizar, repetir la preparacion, la copia y la instalacion. La primera
instalacion puede descargar la imagen de Nginx. Si otro servicio ya ocupa el
puerto 3005, Docker informa el conflicto y debe revisarse antes de continuar.

Desde una sesion SSH, consultar el estado o los registros:

```sh
cd "$(cat ~/reparacionespc/current-release)"
docker compose -p reparacionespc -f deploy/compose.yml ps
docker compose -p reparacionespc -f deploy/compose.yml logs --tail=100 web
```
