$conns = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
$pids = $conns | Select-Object -ExpandProperty OwningProcess -Unique
foreach ($p in $pids) {
    $proc = Get-Process -Id $p -ErrorAction SilentlyContinue
    if ($proc) {
        Write-Output "PID=$p Name=$($proc.ProcessName)"
    }
}
