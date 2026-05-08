import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'
import { resolveImageUrl } from '../imageUrl'

const formatDate = (iso) => {
  if (!iso) return '—'
  const d = new Date(iso)
  return d.toLocaleString('en-AU', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

function statusOf(post) {
  if (!post.publishedAt) return { kind: 'draft', label: 'Draft', cls: 'badge-draft' }
  const t = new Date(post.publishedAt).getTime()
  if (t > Date.now()) return { kind: 'scheduled', label: 'Scheduled', cls: 'badge-scheduled' }
  return { kind: 'published', label: 'Published', cls: 'badge-published' }
}

function Thumbnail({ post }) {
  const [failed, setFailed] = useState(false)
  const src = resolveImageUrl(post.image)
  if (!src || failed) {
    const initial = (post.title || '?').trim().charAt(0).toUpperCase()
    return <div className="thumb thumb-placeholder" aria-hidden="true">{initial}</div>
  }
  return <img className="thumb" src={src} alt="" onError={() => setFailed(true)} />
}

export default function InsightsListPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = async () => {
    setLoading(true)
    try {
      const data = await api.listInsights()
      setPosts(data.posts)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const onDelete = async (post) => {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return
    try {
      await api.deleteInsight(post.id)
      setPosts((p) => p.filter((x) => x.id !== post.id))
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className="container">
      <div className="row-between" style={{ marginBottom: '1.25rem' }}>
        <h2>Insights</h2>
        <Link to="/insights/new" className="btn">+ New post</Link>
      </div>

      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="empty">Loading…</div>
      ) : posts.length === 0 ? (
        <div className="empty">
          No posts yet.<br />
          <Link to="/insights/new" className="btn" style={{ marginTop: '1rem' }}>Create your first post</Link>
        </div>
      ) : (
        <div className="list">
          {posts.map((post) => {
            const s = statusOf(post)
            return (
              <div key={post.id} className="list-row">
                <Link to={`/insights/${post.id}`} aria-label={`Edit ${post.title}`}>
                  <Thumbnail post={post} />
                </Link>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <h3 style={{ marginBottom: '0.35rem' }}>
                    <Link to={`/insights/${post.id}`}>{post.title}</Link>
                  </h3>
                  <div className="meta">
                    <span className={`badge ${s.cls}`}>{s.label}</span>
                    {post.category && <span>· {post.category}</span>}
                    <span>· /{post.slug}</span>
                    <span>· {formatDate(post.publishedAt)}</span>
                  </div>
                </div>
                <div className="row" style={{ gap: '0.5rem' }}>
                  <Link to={`/insights/${post.id}`} className="btn btn-secondary">Edit</Link>
                  <button className="btn btn-ghost" onClick={() => onDelete(post)}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
