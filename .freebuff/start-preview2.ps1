$cwd = 'C:\Users\Monzurul\Desktop\gtels-app'
$log = 'C:\Users\Monzurul\Desktop\gtels-app\.freebuff\preview-6ef01ee5-b192-4bbe-8769-6db0eec2d018.log'
$logerr = 'C:\Users\Monzurul\Desktop\gtels-app\.freebuff\preview-6ef01ee5-b192-4bbe-8769-6db0eec2d018.log.err'

$p = Start-Process -FilePath 'node.exe' -ArgumentList "`"$cwd\node_modules\next\dist\bin\next`" dev -p 3000" -WorkingDirectory $cwd -RedirectStandardOutput $log -RedirectStandardError $logerr -WindowStyle Hidden -PassThru
Write-Output "PID=$($p.Id)"
