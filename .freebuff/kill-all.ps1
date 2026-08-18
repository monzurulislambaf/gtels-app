Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "npm" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "C:\Users\Monzurul\Desktop\gtels-app\.next\dev\server" -Recurse -Force -ErrorAction SilentlyContinue
Write-Output "cleaned"
