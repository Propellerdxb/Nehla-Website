import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: resolve(__dirname, 'src/prerender.jsx'),
      additionalPrerenderRoutes: ['/about', '/insights', '/insights/nsw-insurance-commission-ban-2026', '/insights/strata-manager-inbox-problem', '/insights/why-strata-managers-are-leaving', '/insights/strata-compliance-nsw-vic-qld-2026', '/privacy', '/terms'],
    }),
  ],
})
