param(
    [string]$RemoteHost = '192.168.1.250',
    [string]$RemoteUser = 'daniel'
)

# Configura una sola vez el acceso al NUC con clave SSH, para que update-nuc.ps1 no pida contrasena.
# Crea la clave si no existe y la agrega al NUC sin duplicarla. Pide la contrasena del NUC una vez.

$ErrorActionPreference = 'Continue'
$target = "$RemoteUser@$RemoteHost"
$sshDir = Join-Path $env:USERPROFILE '.ssh'
$key = Join-Path $sshDir 'id_ed25519'

function Test-KeyAccess {
    # BatchMode: falla en lugar de pedir contrasena. LogLevel QUIET: sin mensajes de error.
    ssh -o BatchMode=yes -o LogLevel=QUIET -o ConnectTimeout=10 $target 'true'
    return $LASTEXITCODE -eq 0
}

if (Test-KeyAccess) {
    Write-Host "La clave SSH ya funciona con $target. No hace falta hacer nada." -ForegroundColor Green
    exit 0
}

if (-not (Test-Path -LiteralPath $key)) {
    New-Item -ItemType Directory -Force $sshDir | Out-Null
    Write-Host '-> Creando la clave SSH (ed25519).' -ForegroundColor Cyan
    Write-Host '   Si dejas la frase de contrasena vacia (Enter dos veces), publicar no pedira nada.' -ForegroundColor Cyan
    ssh-keygen -t ed25519 -f $key -C "$env:USERNAME@$env:COMPUTERNAME"
    if ($LASTEXITCODE -ne 0) { Write-Host 'No se pudo crear la clave.' -ForegroundColor Red; exit 1 }
}

# Una clave con frase de contrasena obliga a escribirla en cada publicacion. '""' pasa una frase
# vacia (Windows PowerShell 5.1 omite los argumentos vacios al llamar a programas externos).
$null = ssh-keygen -y -P '""' -f $key 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host '-> La clave tiene frase de contrasena. Para publicar sin escribir nada hay que quitarla:' -ForegroundColor Cyan
    Write-Host '   escribi la frase actual y despues Enter dos veces (frase vacia). Ctrl+C para cancelar.' -ForegroundColor Cyan
    ssh-keygen -p -f $key
    if ($LASTEXITCODE -ne 0) { Write-Host 'No se pudo quitar la frase de contrasena.' -ForegroundColor Red; exit 1 }
}

Write-Host "-> Agregando la clave publica en $target. Escribi la contrasena del NUC cuando la pida." -ForegroundColor Cyan
$publicKey = (Get-Content -LiteralPath "$key.pub" -Raw).Trim()
$remote = "umask 077; mkdir -p ~/.ssh; touch ~/.ssh/authorized_keys; grep -qxF '$publicKey' ~/.ssh/authorized_keys || printf '%s\n' '$publicKey' >> ~/.ssh/authorized_keys"
ssh -o ConnectTimeout=15 $target $remote
if ($LASTEXITCODE -ne 0) { Write-Host 'No se pudo agregar la clave en el NUC.' -ForegroundColor Red; exit 1 }

if (Test-KeyAccess) {
    Write-Host 'Listo: deploy/update-nuc.ps1 ya no pide contrasena.' -ForegroundColor Green
}
else {
    Write-Host 'La clave quedo agregada. Si le pusiste frase de contrasena, SSH la pedira al publicar (salvo que uses ssh-agent).' -ForegroundColor Yellow
}
