import jwt from 'jsonwebtoken'

const SECRET = () => process.env.JWT_SECRET || 'dev-secret-change-me'

export function signToken(payload) {
  return jwt.sign(payload, SECRET(), { expiresIn: '7d' })
}

export function requireAuth(req, res, next) {
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : null
  if (!token) return res.status(401).json({ error: 'Missing token' })
  try {
    req.user = jwt.verify(token, SECRET())
    next()
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' })
  }
}
