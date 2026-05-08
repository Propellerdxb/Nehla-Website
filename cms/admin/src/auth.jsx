import { createContext, useContext, useEffect, useState } from 'react'
import { api, tokenStore } from './api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const token = tokenStore.get()
    if (!token) {
      setReady(true)
      return
    }
    api
      .me()
      .then((data) => setUser(data.user))
      .catch(() => tokenStore.clear())
      .finally(() => setReady(true))
  }, [])

  const login = async (email, password) => {
    const data = await api.login(email, password)
    tokenStore.set(data.token)
    setUser(data.user)
  }

  const logout = () => {
    tokenStore.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, ready, login, logout }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
