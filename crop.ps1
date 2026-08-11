Add-Type -AssemblyName System.Drawing

$sourcePath = "c:\Users\Yoga\Projects\james-progressive-solutions\public\images\hero\hero-scene-final.png"
$destPath = "c:\Users\Yoga\Projects\james-progressive-solutions\public\images\hero\hero-scene-production.png"

$img = [System.Drawing.Image]::FromFile($sourcePath)

# We want to crop out top navigation (say, top 90px)
# and bottom stats row (say, bottom 141px -> y=800)
# and left text (say, left 672px)
$cropX = 672
$cropY = 90
$cropW = $img.Width - $cropX
$cropH = 800 - $cropY

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$bmp = New-Object System.Drawing.Bitmap($cropW, $cropH)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)), $rect, [System.Drawing.GraphicsUnit]::Pixel)

$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$img.Dispose()

Write-Output "Cropped image saved to $destPath"
