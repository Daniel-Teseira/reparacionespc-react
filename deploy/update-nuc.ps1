param(
    [string]$ProjectRoot = (Split-Path -Parent $PSScriptRoot),
    [string]$RemoteHost = '192.168.1.250',
    [string]$RemoteUser = 'daniel',
    [int]$WebPort = 3005,
    [int]$MonitorPort = 3006,
    [switch]$SkipBuild,
    [switch]$VerifyOnly
)

# Compila, empaqueta, copia e instala el sitio en el NUC y verifica la publicacion.
# Con una clave SSH configurada (ver deploy/NUC.md) no pide contrasena.

$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $ProjectRoot
$Host.UI.RawUI.WindowTitle = 'Actualizar Reparaciones PC en el NUC'
New-Item -ItemType Directory -Force 'tmp' | Out-Null
$resultFile = Join-Path $ProjectRoot 'tmp/nuc-update-result.json'
$package = Join-Path $ProjectRoot 'tmp/reparacionespc-nuc.tar.gz'
$target = "$RemoteUser@$RemoteHost"
$baseUrl = "http://${RemoteHost}:$WebPort"

function Save-Result([string]$Status, [string]$Message) {
    @{ status = $Status; message = $Message; time = (Get-Date).ToString('o') } |
        ConvertTo-Json | Set-Content -LiteralPath $resultFile -Encoding UTF8
}

function Invoke-Step([string]$Description, [scriptblock]$Command) {
    Write-Host "-> $Description" -ForegroundColor Cyan
    & $Command
    if ($LASTEXITCODE -ne 0) { throw "Fallo: $Description" }
}

# Devuelve estado HTTP, cabeceras y cuerpo sin seguir redirecciones.
function Get-Http([string]$Path, [string]$Base = $baseUrl) {
    $request = [System.Net.HttpWebRequest]::Create($Base + $Path)
    $request.AllowAutoRedirect = $false
    $request.Timeout = 20000
    $request.Accept = 'text/html'
    try { $response = $request.GetResponse() }
    catch [System.Net.WebException] {
        if (-not $_.Exception.Response) { throw }
        $response = $_.Exception.Response
    }
    $reader = New-Object System.IO.StreamReader($response.GetResponseStream())
    $result = @{ Status = [int]$response.StatusCode; Headers = $response.Headers; Body = $reader.ReadToEnd() }
    $reader.Close(); $response.Close()
    return $result
}

try {
    if (-not $VerifyOnly) {
        if (-not $SkipBuild) {
            Save-Result 'building' 'Compilando y verificando la version local.'
            Invoke-Step 'Revisando el codigo' { npm run lint }
            Invoke-Step 'Ejecutando pruebas' { npm test }
            Invoke-Step 'Compilando' { npm run build }
            Invoke-Step 'Verificando la compilacion' { npm run check:build }
            Invoke-Step 'Pruebas en navegador' { npm run test:e2e }
        }
        Invoke-Step 'Empaquetando' { tar -czf $package build deploy/compose.yml deploy/nginx.conf deploy/security-headers.conf deploy/install.sh deploy/https deploy/monitoring }

        Save-Result 'copying' "Copiando el paquete a $target."
        Invoke-Step "Copiando a $target" { scp -o ConnectTimeout=15 $package "${target}:~/reparacionespc-nuc.tar.gz" }
        Save-Result 'installing' 'Paquete copiado. Instalando en una carpeta de version limpia.'
        Invoke-Step 'Instalando en el NUC' { ssh -o ConnectTimeout=15 $target 'tar -xOf ~/reparacionespc-nuc.tar.gz deploy/install.sh | sh' }
    }

    Save-Result 'verifying' 'Verificando paginas, redirecciones, recursos y respuesta 404.'
    $catalog = Get-Content -LiteralPath 'src/data/services.json' -Raw -Encoding UTF8 | ConvertFrom-Json
    $routes = @('/', '/contact') + @($catalog | ForEach-Object { '/' + $_.slug })
    foreach ($route in $routes) {
        $response = Get-Http $route
        if ($response.Status -ne 200) { throw "Respuesta $($response.Status) para $route" }
    }
    $homePage = Get-Http '/'
    $localHome = Get-Content -LiteralPath 'build/index.html' -Raw -Encoding UTF8
    if ($homePage.Body -ne $localHome) { throw 'El HTML publicado no coincide con la compilacion local.' }
    foreach ($header in @('Content-Security-Policy', 'Cross-Origin-Opener-Policy', 'Cross-Origin-Resource-Policy')) {
        if (-not $homePage.Headers[$header]) { throw "Falta la cabecera de seguridad $header." }
    }
    foreach ($redirect in @(@('/home', '/'), @('/contact/', '/contact'))) {
        $response = Get-Http $redirect[0]
        if ($response.Status -ne 301 -or $response.Headers['Location'] -ne $redirect[1]) {
            throw "$($redirect[0]) deberia redirigir a $($redirect[1]) (respondio $($response.Status))."
        }
    }
    $missing = Get-Http '/__verificar_ruta_inexistente__'
    if ($missing.Status -ne 404) { throw "La ruta inexistente respondio $($missing.Status) en vez de 404." }
    foreach ($asset in [regex]::Matches($localHome, '(?:src|href)="(/assets/[^" ]+)"')) {
        $response = Get-Http $asset.Groups[1].Value
        if ($response.Status -ne 200) { throw "No se pudo descargar $($asset.Groups[1].Value)." }
    }
    $image = [regex]::Match($localHome, '/images/optimized/[^" ,]+').Value
    $response = Get-Http $image
    if ($response.Status -ne 200 -or $response.Headers['Cache-Control'] -notmatch 'immutable') {
        throw "La imagen $image no se sirve con cache permanente (respondio $($response.Status))."
    }
    try {
        $monitor = Get-Http '/' "http://${RemoteHost}:$MonitorPort"
        Write-Host "Monitoreo (Uptime Kuma) en http://${RemoteHost}:${MonitorPort}: respondio $($monitor.Status)." -ForegroundColor Green
    }
    catch { Write-Host "Aviso: el monitoreo no responde en http://${RemoteHost}:$MonitorPort." -ForegroundColor Yellow }

    $message = "Publicacion en $baseUrl verificada: $($routes.Count) rutas, HTML identico al local, redirecciones, cabeceras, recursos, cache de imagenes y 404 verificados."
    Save-Result 'complete' $message
    Write-Host $message -ForegroundColor Green
}
catch {
    Save-Result 'failed' $_.Exception.Message
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}
