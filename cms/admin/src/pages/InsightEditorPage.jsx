import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { api } from '../api'
import { resolveImageUrl } from '../imageUrl'
import { estimateReadTime } from '../readingTime'

const CATEGORIES = [
  'Compliance & Regulation',
  'Operational Efficiency',
  'The Human Side',
  'Technology & Innovation',
  'Technology & the Future',
  'Business Growth & Profitability',
]

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

// Convert Date -> "YYYY-MM-DDTHH:mm" (the format <input type="datetime-local"> wants).
const toLocalInput = (iso) => {
  if (!iso) return ''
  const d = new Date(iso)
  if (isNaN(d.getTime())) return ''
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

export default function InsightEditorPage({ mode }) {
  const isEdit = mode === 'edit'
  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: CATEGORIES[0],
    readTime: '',
    image: '',
    publishedAt: '',
  })
  const [slugTouched, setSlugTouched] = useState(false)
  const [loading, setLoading] = useState(isEdit)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const fileInput = useRef(null)

  useEffect(() => {
    if (!isEdit) return
    api
      .getInsight(id)
      .then(({ post }) => {
        setForm({
          title: post.title || '',
          slug: post.slug || '',
          excerpt: post.excerpt || '',
          content: post.content || '',
          category: post.category || CATEGORIES[0],
          readTime: post.readTime || '',
          image: post.image || '',
          publishedAt: toLocalInput(post.publishedAt),
        })
        setSlugTouched(true)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id, isEdit])

  const update = (patch) => setForm((f) => ({ ...f, ...patch }))

  const onTitleChange = (v) => {
    update({ title: v, slug: slugTouched ? form.slug : slugify(v) })
  }

  const onUpload = async (file) => {
    if (!file) return
    setUploading(true)
    setError('')
    try {
      const { url } = await api.uploadImage(file)
      update({ image: url })
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
      if (fileInput.current) fileInput.current.value = ''
    }
  }

  const buildPayload = (overridePublishedAt) => {
    const estimated = estimateReadTime(form.content)
    return {
      title: form.title,
      slug: form.slug || slugify(form.title),
      excerpt: form.excerpt,
      content: form.content,
      category: form.category,
      readTime: form.readTime.trim() || (estimated ? estimated.label : ''),
      image: form.image,
      publishedAt:
        overridePublishedAt !== undefined
          ? overridePublishedAt
          : form.publishedAt
          ? new Date(form.publishedAt).toISOString()
          : null,
    }
  }

  const save = async (overridePublishedAt) => {
    setError('')
    setNotice('')
    if (!form.title.trim()) {
      setError('Title is required.')
      return
    }
    setSaving(true)
    try {
      const payload = buildPayload(overridePublishedAt)
      if (overridePublishedAt !== undefined && overridePublishedAt) {
        update({ publishedAt: toLocalInput(overridePublishedAt) })
      }
      if (isEdit) {
        await api.updateInsight(id, payload)
        setNotice('Saved.')
      } else {
        const { post } = await api.createInsight(payload)
        navigate(`/insights/${post.id}`, { replace: true })
        setNotice('Created.')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const publishNow = () => {
    const now = new Date().toISOString()
    save(now)
  }

  const unpublish = () => save(null)

  if (loading) return <div className="container">Loading…</div>

  const status = !form.publishedAt
    ? { label: 'Draft', cls: 'badge-draft' }
    : new Date(form.publishedAt).getTime() > Date.now()
    ? { label: 'Scheduled', cls: 'badge-scheduled' }
    : { label: 'Published', cls: 'badge-published' }

  return (
    <div className="container">
      <div className="row-between" style={{ marginBottom: '1.25rem' }}>
        <div>
          <Link to="/" className="btn btn-ghost" style={{ paddingLeft: 0 }}>← All insights</Link>
          <h2 style={{ marginTop: '0.25rem' }}>
            {isEdit ? 'Edit insight' : 'New insight'}{' '}
            <span className={`badge ${status.cls}`} style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }}>{status.label}</span>
          </h2>
        </div>
        <div className="row" style={{ gap: '0.5rem' }}>
          <button className="btn btn-secondary" onClick={() => save()} disabled={saving}>
            {saving ? 'Saving…' : 'Save'}
          </button>
          {form.publishedAt ? (
            <button className="btn btn-secondary" onClick={unpublish} disabled={saving}>Unpublish</button>
          ) : null}
          <button className="btn" onClick={publishNow} disabled={saving}>Publish now</button>
        </div>
      </div>

      {error && <div className="error">{error}</div>}
      {notice && <div className="success">{notice}</div>}

      <div className="card"><div className="card-body">
        <div className="field">
          <label htmlFor="title">Title</label>
          <input id="title" value={form.title} onChange={(e) => onTitleChange(e.target.value)} />
        </div>

        <div className="grid-2">
          <div className="field">
            <label htmlFor="slug">Slug</label>
            <input
              id="slug"
              value={form.slug}
              onChange={(e) => { setSlugTouched(true); update({ slug: slugify(e.target.value) }) }}
            />
            <div className="hint">URL: /insights/{form.slug || 'your-slug'}</div>
          </div>
          <div className="field">
            <label htmlFor="category">Category</label>
            <select id="category" value={form.category} onChange={(e) => update({ category: e.target.value })}>
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div className="grid-2">
          <div className="field">
            <label htmlFor="readTime">Read time</label>
            <input id="readTime" placeholder="auto" value={form.readTime} onChange={(e) => update({ readTime: e.target.value })} />
            {(() => {
              const est = estimateReadTime(form.content)
              if (!est) return <div className="hint">Add content to estimate the read time automatically.</div>
              const matches = form.readTime.trim() === est.label
              return (
                <div className="hint">
                  {est.words.toLocaleString()} words · estimated {est.label}
                  {!matches && (
                    <>
                      {' '}·{' '}
                      <button type="button" className="btn-link" onClick={() => update({ readTime: est.label })}>
                        Apply
                      </button>
                    </>
                  )}
                  {' '}· leave blank to use the estimate on save
                </div>
              )
            })()}
          </div>
          <div className="field">
            <label htmlFor="publishedAt">Publication date</label>
            <input
              id="publishedAt"
              type="datetime-local"
              value={form.publishedAt}
              onChange={(e) => update({ publishedAt: e.target.value })}
            />
            <div className="hint">Leave blank to keep as a draft. Future dates schedule the post — it stays hidden until then.</div>
          </div>
        </div>

        <div className="field">
          <label>Image</label>
          <div className="image-preview" style={{ marginBottom: '0.75rem' }}>
            {form.image ? <img src={resolveImageUrl(form.image)} alt="" /> : <span style={{ color: 'var(--muted)' }}>No image</span>}
          </div>
          <div className="row" style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
            <input
              ref={fileInput}
              type="file"
              accept="image/*"
              onChange={(e) => onUpload(e.target.files?.[0])}
              style={{ width: 'auto' }}
              disabled={uploading}
            />
            {form.image && (
              <button type="button" className="btn btn-ghost" onClick={() => update({ image: '' })}>
                Remove image
              </button>
            )}
            {uploading && <span style={{ color: 'var(--muted)' }}>Uploading…</span>}
          </div>
          <input
            placeholder="Or paste an image URL"
            value={form.image}
            onChange={(e) => update({ image: e.target.value })}
            style={{ marginTop: '0.5rem' }}
          />
        </div>

        <div className="field">
          <label htmlFor="excerpt">Excerpt</label>
          <textarea id="excerpt" style={{ minHeight: '80px' }} value={form.excerpt} onChange={(e) => update({ excerpt: e.target.value })} />
          <div className="hint">Shown on the listing page and homepage carousel.</div>
        </div>

        <div className="field">
          <label htmlFor="content">Content</label>
          <textarea id="content" value={form.content} onChange={(e) => update({ content: e.target.value })} />
          <div className="hint">Markdown — use ## for headings, --- for separators, - for list items, **bold**, [link](url).</div>
        </div>
      </div></div>
    </div>
  )
}
