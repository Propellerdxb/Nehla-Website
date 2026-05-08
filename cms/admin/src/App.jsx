import { Routes, Route, Navigate, NavLink, Link, useLocation } from 'react-router-dom'
import { useAuth } from './auth.jsx'
import LoginPage from './pages/LoginPage.jsx'
import InsightsListPage from './pages/InsightsListPage.jsx'
import InsightEditorPage from './pages/InsightEditorPage.jsx'

function ProtectedShell({ children }) {
  const { user, ready, logout } = useAuth()
  const location = useLocation()
  if (!ready) return <div className="container">Loading…</div>
  if (!user) return <Navigate to="/login" replace state={{ from: location }} />
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>NEHLA · CMS</Link>
        </h1>
        <nav>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Insights
          </NavLink>
          <span style={{ color: '#cbd1dc' }}>·</span>
          <span style={{ color: '#6b7280', fontSize: '0.85rem' }}>{user.email}</span>
          <button className="btn btn-ghost" onClick={logout}>Sign out</button>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/*"
        element={
          <ProtectedShell>
            <Routes>
              <Route path="/" element={<InsightsListPage />} />
              <Route path="/insights/new" element={<InsightEditorPage mode="create" />} />
              <Route path="/insights/:id" element={<InsightEditorPage mode="edit" />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ProtectedShell>
        }
      />
    </Routes>
  )
}
