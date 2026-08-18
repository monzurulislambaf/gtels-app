# GTELS App — Preview Run Doc

## Reproduce artifacts
- `node_modules` is already present. If missing: `npm install`
- No `.env` or `.env.local` required — the app runs with zero env vars.

## Run the dev server

```bash
npm run dev
```

This starts Next.js dev server on **port 3000**.

### Windows detach (PowerShell)

```powershell
powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev' -RedirectStandardOutput '.freebuff\preview.log' -RedirectStandardError '.freebuff\preview.log.err' -WindowStyle Hidden -PassThru).Id"
```

- stdout → `.freebuff\preview.log`
- stderr → `.freebuff\preview.log.err`
