$p = Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev' -RedirectStandardOutput 'C:\Users\Monzurul\Desktop\gtels-app\.freebuff\preview-6ef01ee5-b192-4bbe-8769-6db0eec2d018.log' -RedirectStandardError 'C:\Users\Monzurul\Desktop\gtels-app\.freebuff\preview-6ef01ee5-b192-4bbe-8769-6db0eec2d018.log.err' -WindowStyle Hidden -PassThru
Write-Output $p.Id
