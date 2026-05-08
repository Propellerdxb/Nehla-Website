import { Router } from 'express'
import { pool } from '../db.js'
import { rowToPost } from '../mappers.js'

const router = Router()

// Public — only posts with a publication date in the past or now.
router.get('/insights', async (_req, res) => {
  const [rows] = await pool.query(
    `SELECT * FROM insights
       WHERE published_at IS NOT NULL AND published_at <= NOW()
       ORDER BY published_at DESC`
  )
  res.json({ posts: rows.map((r) => rowToPost(r)) })
})

router.get('/insights/:slug', async (req, res) => {
  const [rows] = await pool.query(
    `SELECT * FROM insights
       WHERE slug = ? AND published_at IS NOT NULL AND published_at <= NOW()
       LIMIT 1`,
    [req.params.slug]
  )
  if (!rows[0]) return res.status(404).json({ error: 'Not found' })
  res.json({ post: rowToPost(rows[0]) })
})

export default router
