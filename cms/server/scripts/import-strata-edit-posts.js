// Import posts 07–20 from the LinkedIn / The Strata Edit source folder.
// Idempotent — re-runs upsert by slug.

import 'dotenv/config'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { pool } from '../src/db.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = path.resolve(__dirname, '../../..')
const PUBLIC_BLOG_DIR = path.join(PROJECT_ROOT, 'public', 'blog')
const SOURCE_DIR = '/Users/danstevens/Desktop/Projects/Nehla/Nehla Documents/Marketing/LinkedIn/the-strata-edit'

// Post N -> publication date. Post 07 = 8 April 2026, weekly thereafter.
const startDate = new Date('2026-04-08T00:00:00')
const dateForPost = (n) => {
  const d = new Date(startDate)
  d.setDate(d.getDate() + (n - 7) * 7)
  return d
}

const toMysqlDateTime = (d) => {
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

// Inline copy of cms/admin/src/readingTime.js so we don't reach across apps.
const stripMarkdown = (md) =>
  String(md || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/^---+$/gm, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const readTimeLabel = (content) => {
  const words = stripMarkdown(content).split(' ').filter(Boolean).length
  if (!words) return null
  return `${Math.max(1, Math.round(words / 220))} min read`
}

// Parse one .md file into the post fields we care about.
const parseSourceFile = (filePath) => {
  const raw = fs.readFileSync(filePath, 'utf8')
  const lines = raw.split('\n')

  let pillar = ''
  let title = ''
  let excerpt = ''

  for (const line of lines) {
    const pillarMatch = line.match(/^\*\*Pillar:\s*(.+?)\*\*\s*$/)
    if (pillarMatch) pillar = pillarMatch[1].trim()
    const titleMatch = line.match(/^#\s*Article\s+\d+\s*[—–-]\s*(.+)$/)
    if (titleMatch) title = titleMatch[1].trim()
    const metaMatch = line.match(/^\*\*Meta description:\*\*\s*(.+)$/i)
    if (metaMatch) excerpt = metaMatch[1].trim()
  }

  // Content starts at the first "## Key Takeaways" heading.
  const contentStart = raw.indexOf('## Key Takeaways')
  const content = contentStart >= 0 ? raw.slice(contentStart).trim() : raw.trim()

  return { pillar, title, excerpt, content }
}

const baseFromFilename = (file) => file.replace(/^\d+-/, '').replace(/\.[^.]+$/, '')

let imported = 0
for (let n = 7; n <= 20; n++) {
  const prefix = String(n).padStart(2, '0')
  const mdFile = fs.readdirSync(SOURCE_DIR).find((f) => f.startsWith(`${prefix}-`) && f.endsWith('.md'))
  const svgFile = mdFile && fs.readdirSync(SOURCE_DIR).find((f) => f.startsWith(`${prefix}-`) && f.endsWith('.svg'))
  if (!mdFile || !svgFile) {
    console.warn(`! Missing files for post ${prefix}`)
    continue
  }

  const slug = baseFromFilename(mdFile)
  const { pillar, title, excerpt, content } = parseSourceFile(path.join(SOURCE_DIR, mdFile))
  if (!title) {
    console.warn(`! Could not extract title from ${mdFile}`)
    continue
  }

  // Copy the SVG into the public site so the existing /blog/<slug>.svg
  // pattern keeps working alongside the imported static posts.
  fs.mkdirSync(PUBLIC_BLOG_DIR, { recursive: true })
  fs.copyFileSync(path.join(SOURCE_DIR, svgFile), path.join(PUBLIC_BLOG_DIR, `${slug}.svg`))

  const publishedAt = toMysqlDateTime(dateForPost(n))
  const readTime = readTimeLabel(content) || ''

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
    [slug, title, excerpt, content, pillar, readTime, `/blog/${slug}.svg`, publishedAt]
  )
  imported++
  console.log(`✓ ${prefix}  ${publishedAt.slice(0, 10)}  ${readTime.padEnd(12)}  ${slug}`)
}

console.log(`Imported ${imported} post(s).`)
await pool.end()
