// One-shot import: copy posts from src/blogData.js into the insights table.
// Idempotent — re-running just refreshes existing rows by slug.

import 'dotenv/config'
import { pool } from '../src/db.js'
import blogPosts from '../../../src/blogData.js'

const toMysqlDateTime = (dateStr) => {
  if (!dateStr) return null
  // Static posts use YYYY-MM-DD; treat them as midnight local time.
  const d = new Date(`${dateStr}T00:00:00`)
  if (isNaN(d.getTime())) return null
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

let imported = 0
for (const post of blogPosts) {
  await pool.query(
    `INSERT INTO insights
       (slug, title, excerpt, content, category, read_time, image_url, published_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       title = VALUES(title),
       excerpt = VALUES(excerpt),
       content = VALUES(content),
       category = VALUES(category),
       read_time = VALUES(read_time),
       image_url = VALUES(image_url),
       published_at = VALUES(published_at)`,
    [
      post.slug,
      post.title,
      post.excerpt,
      post.content,
      post.category,
      post.readTime,
      post.image,
      toMysqlDateTime(post.date),
    ]
  )
  imported++
  console.log(`✓ ${post.slug}`)
}

console.log(`Imported ${imported} post(s).`)
await pool.end()
