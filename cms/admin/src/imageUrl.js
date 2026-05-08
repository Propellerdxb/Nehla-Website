// Resolve an image URL stored on a post for display in the admin UI.
// Imported static posts use relative paths like "/blog/foo.svg" that live on
// the public site, not the admin origin. Absolute URLs (uploads etc.) and
// data: URIs pass through unchanged.

const PUBLIC_SITE = (import.meta.env?.VITE_PUBLIC_SITE_URL || 'http://localhost:5173').replace(/\/$/, '')

export function resolveImageUrl(url) {
  if (!url) return null
  if (/^https?:\/\//i.test(url) || url.startsWith('data:')) return url
  return `${PUBLIC_SITE}${url.startsWith('/') ? '' : '/'}${url}`
}
