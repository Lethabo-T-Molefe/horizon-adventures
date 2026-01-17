# Script to rename screenshot files in public/images folder
# Based on timestamp order and file size patterns

$imagesPath = "public\images"
$files = Get-ChildItem -Path $imagesPath -Filter "Screenshot*.webp" | Sort-Object LastWriteTime

# Suggested naming based on common website sections and chronological order
# You may need to adjust these names after reviewing the actual images
$renameMap = @{
    "Screenshot 2026-01-17 185629.webp" = "homepage-hero-section.webp"
    "Screenshot 2026-01-17 185655.webp" = "homepage-overview-section.webp"
    "Screenshot 2026-01-17 185720.webp" = "homepage-services-section.webp"
    "Screenshot 2026-01-17 185748.webp" = "homepage-trip-types-section.webp"
    "Screenshot 2026-01-17 185839.webp" = "tours-page-hero.webp"
    "Screenshot 2026-01-17 185921.webp" = "tours-featured-tours.webp"
    "Screenshot 2026-01-17 190013.webp" = "tours-couples-retreat.webp"
    "Screenshot 2026-01-17 190028.webp" = "tours-activities-section.webp"
    "Screenshot 2026-01-17 190051.webp" = "destinations-page.webp"
    "Screenshot 2026-01-17 190156.webp" = "testimonials-page.webp"
    "Screenshot 2026-01-17 190241.webp" = "about-page-hero.webp"
    "Screenshot 2026-01-17 190309.webp" = "about-content-section.webp"
    "Screenshot 2026-01-17 190449.webp" = "about-mission-section.webp"
    "Screenshot 2026-01-17 190508.webp" = "about-video-section.webp"
    "Screenshot 2026-01-17 190533.webp" = "contact-page-hero.webp"
    "Screenshot 2026-01-17 190608.webp" = "contact-form-section.webp"
    "Screenshot 2026-01-17 190634.webp" = "gallery-page.webp"
    "Screenshot 2026-01-17 190650.webp" = "cape-town-tour-page.webp"
    "Screenshot 2026-01-17 190754.webp" = "mpumalanga-tour-page.webp"
    "Screenshot 2026-01-17 190837.webp" = "hartbeespoort-tour-page.webp"
    "Screenshot 2026-01-17 191028.webp" = "durban-tour-page.webp"
    "Screenshot 2026-01-17 191105.webp" = "team-building-activity.webp"
    "Screenshot 2026-01-17 191132.webp" = "youth-camp-activity.webp"
    "Screenshot 2026-01-17 191229.webp" = "river-rafting-activity.webp"
    "Screenshot 2026-01-17 191333.webp" = "kloofing-activity.webp"
    "Screenshot 2026-01-17 191350.webp" = "hiking-activity.webp"
    "Screenshot 2026-01-17 191405.webp" = "quad-biking-activity.webp"
    "Screenshot 2026-01-17 191425.webp" = "hot-air-balloon-activity.webp"
    "Screenshot 2026-01-17 191449.webp" = "braai-dinner-activity.webp"
    "Screenshot 2026-01-17 191531.webp" = "panorama-route-scenic.webp"
    "Screenshot 2026-01-17 191610.webp" = "cape-town-scenic.webp"
    "Screenshot 2026-01-17 191652.webp" = "hartbeespoort-scenic.webp"
    "Screenshot 2026-01-17 192027.webp" = "group-adventure-activity.webp"
}

Write-Host "Renaming screenshot files..."
Write-Host ""

foreach ($file in $files) {
    if ($renameMap.ContainsKey($file.Name)) {
        $newName = $renameMap[$file.Name]
        $oldPath = Join-Path $imagesPath $file.Name
        $newPath = Join-Path $imagesPath $newName
        
        if (Test-Path $newPath) {
            Write-Host "SKIPPED: $($file.Name) -> $newName (file already exists)" -ForegroundColor Yellow
        } else {
            Rename-Item -Path $oldPath -NewName $newName
            Write-Host "Renamed: $($file.Name) -> $newName" -ForegroundColor Green
        }
    } else {
        Write-Host "SKIPPED: $($file.Name) (no mapping found)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Renaming complete! Please review the images and adjust names if needed." -ForegroundColor Cyan
