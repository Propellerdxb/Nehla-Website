// Maps a DB row to the JSON shape the frontend expects.
// Public components use post.date as a YYYY-MM-DD string (see src/blogData.js
// and how it's parsed in BlogPage / BlogPostPage / LandingPage), so we derive
// `date` from published_at and also expose the full publishedAt for the admin UI.

export function rowToPost(row, { admin = false } = {}) {
  if (!row) return null
  const publishedAt = row.published_at ? String(row.published_at).replace(' ', 'T') : null
  const post = {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt || '',
    content: row.content || '',
    category: row.category || '',
    readTime: row.read_time || '',
    image: row.image_url || '',
    date: publishedAt ? publishedAt.slice(0, 10) : null,
    publishedAt,
  }
  if (admin) {
    post.id = row.id
    post.createdAt = row.created_at
    post.updatedAt = row.updated_at
  }
  return post
}
