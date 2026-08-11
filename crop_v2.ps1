Add-Type -AssemblyName System.Drawing

$sourcePath = "c:\Users\Yoga\Projects\james-progressive-solutions\public\images\hero\hero-scene-final.png"
$destPath = "c:\Users\Yoga\Projects\james-progressive-solutions\public\images\hero\hero-scene-production.png"

$img = [System.Drawing.Image]::FromFile($sourcePath)

$cropX = 550
$cropY = 70
$cropW = $img.Width - $cropX
$cropH = 800

# check if height exceeds image
if ($cropY + $cropH -gt $img.Height) {
    $cropH = $img.Height - $cropY
}

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$bmp = New-Object System.Drawing.Bitmap($cropW, $cropH)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)), $rect, [System.Drawing.GraphicsUnit]::Pixel)

$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$img.Dispose()

Write-Output "Cropped image saved to $destPath"
