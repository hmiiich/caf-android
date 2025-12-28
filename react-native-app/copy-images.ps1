# Script PowerShell pour copier les images depuis photodev vers assets/images

Write-Host "Copie des images depuis photodev..." -ForegroundColor Green

$sourceDir = Join-Path $PSScriptRoot "..\photodev"
$destDir = Join-Path $PSScriptRoot "assets\images"

# Créer le dossier de destination s'il n'existe pas
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    Write-Host "Dossier assets/images créé" -ForegroundColor Yellow
}

# Copier les images
$images = Get-ChildItem -Path $sourceDir -Filter "*.jpg" -ErrorAction SilentlyContinue

if ($images.Count -eq 0) {
    Write-Host "Aucune image .jpg trouvée dans photodev" -ForegroundColor Red
    exit
}

$count = 0
foreach ($image in $images) {
    $newName = "caftan$count.jpg"
    $destPath = Join-Path $destDir $newName
    
    try {
        Copy-Item -Path $image.FullName -Destination $destPath -Force
        Write-Host "✓ Copié: $($image.Name) -> $newName" -ForegroundColor Cyan
        $count++
    } catch {
        Write-Host "✗ Erreur lors de la copie de $($image.Name): $_" -ForegroundColor Red
    }
}

Write-Host "`n$count image(s) copiée(s) avec succès!" -ForegroundColor Green
Write-Host "Les images sont maintenant dans: $destDir" -ForegroundColor Yellow
Write-Host "`nVous pouvez maintenant utiliser require() dans App.js:" -ForegroundColor Cyan
Write-Host "  image: require('./assets/images/caftan0.jpg')" -ForegroundColor Gray


