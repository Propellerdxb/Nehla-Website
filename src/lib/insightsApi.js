import staticPosts from '../blogData'

// Static fallback keeps the site functional during prerender and when the CMS
// API isn't reachable. The hook below replaces this data with live results
// once the fetch succeeds.

const API_BASE = (import.meta.env?.VITE_CMS_API_URL || 'http://localhost:4000').replace(/\/$/, '')

const sortDesc = (posts) =>
  [...posts].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))

export const fallbackPosts = sortDesc(staticPosts)

export async function fetchInsights() {
  const res = await fetch(`${API_BASE}/api/public/insights`)
  if (!res.ok) throw new Error(`Failed to load insights (${res.status})`)
  const data = await res.json()
  return sortDesc(data.posts || [])
}

export async function fetchInsightBySlug(slug) {
  const res = await fetch(`${API_BASE}/api/public/insights/${encodeURIComponent(slug)}`)
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`Failed to load insight (${res.status})`)
  const data = await res.json()
  return data.post
}
