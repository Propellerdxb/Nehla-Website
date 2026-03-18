import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (e, link) => {
    if (link.to.includes('#')) {
      e.preventDefault()
      const hash = link.to.split('#')[1]
      setActiveHash(hash)
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      }
      setIsOpen(false)
    } else {
      setActiveHash('')
    }
  }

  const isActive = (link) => {
    if (link.to.includes('#')) {
      const hash = link.to.split('#')[1]
      return activeHash === hash
    }
    return location.pathname === link.to
  }

  const navLinks = [
    { name: 'Features', to: '/#features' },
    { name: 'Documents', to: '/#documents' },
    { name: 'Email', to: '/#email' },
    { name: 'Security', to: '/#security' },
    { name: 'Insights', to: '/insights' },
    { name: 'About', to: '/about' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" onClick={() => { setActiveHash(''); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="flex items-center">
            <img
              src="/logo.png"
              alt="NEHLA Strata Hub"
              className="h-12 w-auto"
              width={800}
              height={274}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={(e) => handleNavClick(e, link)}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link)
                    ? 'text-brand-cobalt'
                    : 'text-brand-body hover:text-brand-cobalt'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="/#waitlist"
              onClick={(e) => {
                e.preventDefault()
                if (location.pathname !== '/') {
                  navigate('/')
                  setTimeout(() => {
                    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
                  }, 100)
                } else {
                  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-6 py-2.5 bg-brand-cobalt text-white font-semibold rounded-lg hover:bg-[#1A3FCC] transition-all duration-200 shadow-lg shadow-brand-cobalt/25 hover:shadow-xl"
            >
              Secure Your Spot
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={(e) => { handleNavClick(e, link); setIsOpen(false) }}
                  className={`block font-medium py-2 ${
                    isActive(link)
                      ? 'text-brand-cobalt'
                      : 'text-brand-body hover:text-brand-cobalt'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="/#waitlist"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(false)
                    if (location.pathname !== '/') {
                      navigate('/')
                      setTimeout(() => {
                        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    } else {
                      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="block text-center px-6 py-3 bg-brand-cobalt text-white font-semibold rounded-lg"
                >
                  Secure Your Spot
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
