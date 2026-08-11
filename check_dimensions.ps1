Add-Type -AssemblyName System.Drawing
$imagePath = "c:\Users\Yoga\Projects\james-progressive-solutions\public\images\hero\hero-scene-final.png"
$img = [System.Drawing.Image]::FromFile($imagePath)
Write-Output "Width: $($img.Width) Height: $($img.Height)"
$img.Dispose()
