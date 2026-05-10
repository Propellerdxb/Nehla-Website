// Sync the freshly-built dist/ tree onto the project root so the static-host
// pattern (committed bundles + prerendered HTML at root) reflects the latest
// build. Run automatically as part of `npm run build`.

import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')

if (!fs.existsSync(dist)) {
  console.error('sync-build: no dist/ found — did vite build run?')
  process.exit(1)
}

// Directories that come straight from the build. --delete-after removes stale
// hashed bundles + obsolete prerendered slugs.
const dirs = ['assets', 'blog', 'insights', 'about', 'privacy', 'terms']
// Top-level files to copy verbatim (no delete; we don't want to wipe other
// public assets like favicons or sitemap).
const files = ['index.html']

for (const dir of dirs) {
  const src = path.join(dist, dir)
  if (!fs.existsSync(src)) continue
  const dest = path.join(root, dir)
  fs.mkdirSync(dest, { recursive: true })
  execSync(`rsync -a --delete-after ${JSON.stringify(src + '/')} ${JSON.stringify(dest + '/')}`, {
    stdio: 'inherit',
  })
  console.log(`✓ synced ${dir}/`)
}

for (const file of files) {
  const src = path.join(dist, file)
  if (!fs.existsSync(src)) continue
  fs.copyFileSync(src, path.join(root, file))
  console.log(`✓ synced ${file}`)
}

console.log('Build synced to project root.')
