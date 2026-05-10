import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'node:path'

import authRoutes from './routes/auth.js'
import insightRoutes from './routes/insights.js'
import uploadRoutes from './routes/uploads.js'
import publicRoutes from './routes/public.js'

const app = express()

// Each CORS_ORIGINS entry is either an exact origin (https://nehla.com.au) or
// a glob with `*` (https://*.vercel.app) — useful for Vercel preview URLs
// whose hash subdomain changes every deploy.
const allowedOriginMatchers = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)
  .map((entry) => {
    if (!entry.includes('*')) return (origin) => origin === entry
    const regex = new RegExp(
      '^' + entry.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '[^.]*') + '$'
    )
    return (origin) => regex.test(origin)
  })

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true)
      if (allowedOriginMatchers.length === 0) return cb(null, true)
      if (allowedOriginMatchers.some((match) => match(origin))) return cb(null, true)
      cb(new Error(`CORS: origin ${origin} not allowed`))
    },
  })
)

app.use(express.json({ limit: '2mb' }))

app.use('/uploads', express.static(path.resolve(process.cwd(), 'uploads')))

app.get('/api/health', (_req, res) => res.json({ ok: true }))
app.use('/api/auth', authRoutes)
app.use('/api/insights', insightRoutes)
app.use('/api/uploads', uploadRoutes)
app.use('/api/public', publicRoutes)

app.use((err, _req, res, _next) => {
  console.error(err)
  res.status(err.status || 500).json({ error: err.message || 'Server error' })
})

const port = Number(process.env.PORT || 4000)
app.listen(port, () => {
  console.log(`CMS API listening on http://localhost:${port}`)
})
