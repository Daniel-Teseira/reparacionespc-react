param([string]$ProjectRoot = (Split-Path -Parent $PSScriptRoot))

$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $ProjectRoot
$Host.UI.RawUI.WindowTitle = 'Actualizar Reparaciones PC en el NUC'
$resultFile = Join-Path $ProjectRoot 'tmp/nuc-update-result.json'
$package = Join-Path $ProjectRoot 'tmp/reparacionespc-nuc.tar.gz'

function Save-Result([string]$Status, [string]$Message) {
    @{ status = $Status; message = $Message; time = (Get-Date).ToString('o') } |
        ConvertTo-Json | Set-Content -LiteralPath $resultFile -Encoding UTF8
}

try {
    Save-Result 'authenticating' 'Esperando autenticacion SSH en la consola.'
    Write-Host 'Actualizacion de Reparaciones PC en 192.168.1.250' -ForegroundColor Cyan
    Write-Host 'Ingresa la contrasena del usuario daniel cuando SSH la solicite. No se muestra al escribir.'
    Write-Host 'Se solicita una vez para copiar y otra vez para instalar.'
    & scp -o ConnectTimeout=15 $package 'daniel@192.168.1.250:~/reparacionespc-nuc.tar.gz'
    if ($LASTEXITCODE -ne 0) { throw 'No se pudo copiar el paquete al NUC.' }
    Save-Result 'installing' 'Paquete copiado. Instalando en una carpeta de version limpia.'
    & ssh -o ConnectTimeout=15 'daniel@192.168.1.250' 'tar -xOf ~/reparacionespc-nuc.tar.gz deploy/install.sh | sh'
    if ($LASTEXITCODE -ne 0) { throw 'La instalacion remota no termino correctamente.' }
    Save-Result 'verifying' 'Verificando paginas, version publicada y respuesta 404.'
    $baseUrl = 'http://192.168.1.250:3005'
    $catalog = Get-Content -LiteralPath 'src/data/services.json' -Raw | ConvertFrom-Json
    $routes = @('/', '/home', '/contact') + @($catalog | ForEach-Object { '/' + $_.slug })
    foreach ($route in $routes) {
        $response = Invoke-WebRequest -UseBasicParsing -Uri ($baseUrl + $route) -TimeoutSec 20
        if ($response.StatusCode -ne 200) { throw "Respuesta inesperada para $route" }
    }
    $download = Join-Path $ProjectRoot 'tmp/nuc-deploy-home.html'
    Invoke-WebRequest -UseBasicParsing -Uri "$baseUrl/home" -OutFile $download -TimeoutSec 20
    if ((Get-FileHash -LiteralPath $download).Hash -ne (Get-FileHash -LiteralPath 'build/home/index.html').Hash) {
        throw 'El HTML publicado no coincide con la compilacion local.'
    }
    $missingStatus = 0
    try { $missingStatus = (Invoke-WebRequest -UseBasicParsing -Uri "$baseUrl/__verificar_ruta_inexistente__" -TimeoutSec 20).StatusCode }
    catch {
        if ($_.Exception.Response) { $missingStatus = [int]$_.Exception.Response.StatusCode }
        else { throw }
    }
    if ($missingStatus -ne 404) { throw "La ruta inexistente respondio $missingStatus en vez de 404." }
    $html = Get-Content -LiteralPath 'build/home/index.html' -Raw
    $assets = [regex]::Matches($html, '(?:src|href)="(/assets/[^" ]+)"')
    foreach ($asset in $assets) {
        $response = Invoke-WebRequest -UseBasicParsing -Uri ($baseUrl + $asset.Groups[1].Value) -TimeoutSec 20
        if ($response.StatusCode -ne 200) { throw 'No se pudo descargar un recurso de la version publicada.' }
    }
    Save-Result 'complete' 'NUC actualizado: 19 rutas, HTML identico al local, recursos y estado 404 verificados.'
    Write-Host 'Actualizacion y verificacion completadas.' -ForegroundColor Green
}
catch {
    Save-Result 'failed' $_.Exception.Message
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}
