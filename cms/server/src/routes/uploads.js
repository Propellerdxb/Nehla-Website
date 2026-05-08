import { Router } from 'express'
import multer from 'multer'
import path from 'node:path'
import fs from 'node:fs'
import crypto from 'node:crypto'
import { requireAuth } from '../auth.js'

const router = Router()

const uploadDir = path.resolve(process.cwd(), 'uploads')
fs.mkdirSync(uploadDir, { recursive: true })

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase()
    const id = crypto.randomBytes(8).toString('hex')
    cb(null, `${Date.now()}-${id}${ext}`)
  },
})

const ALLOWED = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'image/gif', 'image/avif'])

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!ALLOWED.has(file.mimetype)) return cb(new Error('Unsupported image type'))
    cb(null, true)
  },
})

router.post('/', requireAuth, upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' })
  const base = process.env.PUBLIC_BASE_URL || `${req.protocol}://${req.get('host')}`
  const url = `${base.replace(/\/$/, '')}/uploads/${req.file.filename}`
  res.status(201).json({ url, filename: req.file.filename, size: req.file.size })
})

export default router
