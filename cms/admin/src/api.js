const TOKEN_KEY = 'nehla_cms_token'

export const tokenStore = {
  get: () => localStorage.getItem(TOKEN_KEY),
  set: (t) => localStorage.setItem(TOKEN_KEY, t),
  clear: () => localStorage.removeItem(TOKEN_KEY),
}

async function request(path, { method = 'GET', body, isForm = false } = {}) {
  const headers = {}
  const token = tokenStore.get()
  if (token) headers.Authorization = `Bearer ${token}`
  if (body && !isForm) headers['Content-Type'] = 'application/json'

  const res = await fetch(path, {
    method,
    headers,
    body: isForm ? body : body ? JSON.stringify(body) : undefined,
  })

  if (res.status === 401) {
    tokenStore.clear()
  }
  const data = res.headers.get('content-type')?.includes('application/json') ? await res.json() : null
  if (!res.ok) {
    throw new Error(data?.error || `Request failed (${res.status})`)
  }
  return data
}

export const api = {
  login: (email, password) => request('/api/auth/login', { method: 'POST', body: { email, password } }),
  me: () => request('/api/auth/me'),
  listInsights: () => request('/api/insights'),
  getInsight: (id) => request(`/api/insights/${id}`),
  createInsight: (payload) => request('/api/insights', { method: 'POST', body: payload }),
  updateInsight: (id, payload) => request(`/api/insights/${id}`, { method: 'PUT', body: payload }),
  deleteInsight: (id) => request(`/api/insights/${id}`, { method: 'DELETE' }),
  uploadImage: (file) => {
    const fd = new FormData()
    fd.append('file', file)
    return request('/api/uploads', { method: 'POST', body: fd, isForm: true })
  },
}
