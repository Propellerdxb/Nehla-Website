import { Router } from 'express'
import bcrypt from 'bcryptjs'
import { pool } from '../db.js'
import { signToken, requireAuth } from '../auth.js'

const router = Router()

router.post('/login', async (req, res) => {
  const { email, password } = req.body || {}
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' })

  const [rows] = await pool.query('SELECT id, email, password_hash FROM admins WHERE email = ? LIMIT 1', [email])
  const admin = rows[0]
  if (!admin) return res.status(401).json({ error: 'Invalid credentials' })

  const ok = await bcrypt.compare(password, admin.password_hash)
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' })

  const token = signToken({ sub: admin.id, email: admin.email })
  res.json({ token, user: { id: admin.id, email: admin.email } })
})

router.get('/me', requireAuth, (req, res) => {
  res.json({ user: { id: req.user.sub, email: req.user.email } })
})

export default router
