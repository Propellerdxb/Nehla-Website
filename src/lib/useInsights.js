import { useEffect, useState } from 'react'
import { fallbackPosts, fetchInsights, fetchInsightBySlug } from './insightsApi'

export function useInsights() {
  const [posts, setPosts] = useState(fallbackPosts)
  useEffect(() => {
    let cancelled = false
    fetchInsights()
      .then((live) => { if (!cancelled) setPosts(live) })
      .catch(() => { /* keep static fallback */ })
    return () => { cancelled = true }
  }, [])
  return posts
}

export function useInsightBySlug(slug) {
  const initial = fallbackPosts.find((p) => p.slug === slug) || null
  const [state, setState] = useState({ post: initial, loading: !initial, error: null })

  useEffect(() => {
    let cancelled = false
    setState((s) => ({ ...s, loading: !s.post }))
    fetchInsightBySlug(slug)
      .then((post) => {
        if (cancelled) return
        if (post) setState({ post, loading: false, error: null })
        else setState((s) => s.post ? { ...s, loading: false } : { post: null, loading: false, error: 'not_found' })
      })
      .catch(() => {
        if (cancelled) return
        setState((s) => ({ ...s, loading: false }))
      })
    return () => { cancelled = true }
  }, [slug])

  return state
}
