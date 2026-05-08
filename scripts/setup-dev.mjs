// Reset index.html to a clean dev-mode template before `vite dev` or `vite build`.
// Two fixes, both idempotent:
//   1. Replace the production /assets/<hash> script + preload + css block with
//      the single dev tag <script type="module" src="/src/main.jsx"></script>.
//   2. Empty the prerendered DOM out of <div id="root">…</div>. Without this,
//      vite-prerender-plugin reads the previously-built body as its template
//      and inserts another full render alongside it, doubling page content
//      on every subsequent build.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const indexPath = path.resolve(__dirname, '..', 'index.html')
const html = fs.readFileSync(indexPath, 'utf8')

const DEV_TAG = '    <script type="module" src="/src/main.jsx"></script>'

let next = html

// Strip out the production /assets/<hash> block — match each tag including its
// closing </script> if present, so the next dev rewrite leaves no orphans.
next = next.replace(
  /[ \t]*<script[^>]*\/assets\/[^>]*><\/script>\s*\n?/g,
  ''
)
next = next.replace(
  /[ \t]*<link[^>]*\/assets\/[^>]*>\s*\n?/g,
  ''
)
if (!next.includes(DEV_TAG)) {
  next = next.replace(
    /([ \t]*<\/script>\s*\n?)(\s*<\/head>)/,
    `$1${DEV_TAG}\n$2`
  )
}

next = next.replace(/<div id="root">[\s\S]*?<\/div>\s*<\/body>/, '<div id="root"></div>\n  </body>')

if (next === html) {
  console.log('index.html already in clean dev mode.')
  process.exit(0)
}

fs.writeFileSync(indexPath, next)
console.log('index.html reset to clean dev template.')
