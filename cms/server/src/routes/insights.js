import { Router } from 'express'
import { pool } from '../db.js'
import { requireAuth } from '../auth.js'
import { rowToPost } from '../mappers.js'

const router = Router()
router.use(requireAuth)

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

// List all posts (drafts, scheduled, and published) for the admin dashboard.
router.get('/', async (_req, res) => {
  const [rows] = await pool.query(
    'SELECT * FROM insights ORDER BY COALESCE(published_at, created_at) DESC, id DESC'
  )
  res.json({ posts: rows.map((r) => rowToPost(r, { admin: true })) })
})

router.get('/:id', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM insights WHERE id = ? LIMIT 1', [req.params.id])
  if (!rows[0]) return res.status(404).json({ error: 'Not found' })
  res.json({ post: rowToPost(rows[0], { admin: true }) })
})

router.post('/', async (req, res) => {
  const { title, slug, excerpt, content, category, readTime, image, publishedAt } = req.body || {}
  if (!title) return res.status(400).json({ error: 'Title required' })

  const finalSlug = slugify(slug || title)
  const [existing] = await pool.query('SELECT id FROM insights WHERE slug = ? LIMIT 1', [finalSlug])
  if (existing[0]) return res.status(409).json({ error: 'Slug already in use' })

  const [result] = await pool.query(
    `INSERT INTO insights (slug, title, excerpt, content, category, read_time, image_url, published_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      finalSlug,
      title,
      excerpt || null,
      content || null,
      category || null,
      readTime || null,
      image || null,
      publishedAt ? new Date(publishedAt) : null,
    ]
  )
  const [rows] = await pool.query('SELECT * FROM insights WHERE id = ?', [result.insertId])
  res.status(201).json({ post: rowToPost(rows[0], { admin: true }) })
})

router.put('/:id', async (req, res) => {
  const { title, slug, excerpt, content, category, readTime, image, publishedAt } = req.body || {}
  const [existingRows] = await pool.query('SELECT * FROM insights WHERE id = ? LIMIT 1', [req.params.id])
  const current = existingRows[0]
  if (!current) return res.status(404).json({ error: 'Not found' })

  const nextSlug = slug ? slugify(slug) : current.slug
  if (nextSlug !== current.slug) {
    const [conflict] = await pool.query('SELECT id FROM insights WHERE slug = ? AND id <> ? LIMIT 1', [nextSlug, current.id])
    if (conflict[0]) return res.status(409).json({ error: 'Slug already in use' })
  }

  await pool.query(
    `UPDATE insights
       SET slug = ?, title = ?, excerpt = ?, content = ?, category = ?, read_time = ?, image_url = ?, published_at = ?
     WHERE id = ?`,
    [
      nextSlug,
      title ?? current.title,
      excerpt ?? current.excerpt,
      content ?? current.content,
      category ?? current.category,
      readTime ?? current.read_time,
      image ?? current.image_url,
      publishedAt === undefined ? current.published_at : publishedAt ? new Date(publishedAt) : null,
      current.id,
    ]
  )
  const [rows] = await pool.query('SELECT * FROM insights WHERE id = ?', [current.id])
  res.json({ post: rowToPost(rows[0], { admin: true }) })
})

router.delete('/:id', async (req, res) => {
  const [result] = await pool.query('DELETE FROM insights WHERE id = ?', [req.params.id])
  if (result.affectedRows === 0) return res.status(404).json({ error: 'Not found' })
  res.json({ ok: true })
})

export default router
