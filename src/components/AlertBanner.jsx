import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const AlertBanner = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a
      href="/#waitlist"
      onClick={handleClick}
      aria-label="Only 3 of 12 spots left in the Early Adopter program. Request your free early access now."
      className="group block bg-gradient-to-r from-status-error via-red-500 to-status-error text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-2 sm:gap-3 text-[13px] sm:text-sm">
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <span className="font-bold uppercase tracking-wider whitespace-nowrap">
          <span className="hidden sm:inline">Only </span>3 of 12 spots left
        </span>
        <span className="hidden sm:inline opacity-60" aria-hidden="true">•</span>
        <span className="font-medium">
          <span className="hidden sm:inline">Request your free Early Access now</span>
          <span className="sm:hidden">Request Early Access</span>
        </span>
        <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
      </div>
    </a>
  )
}

export default AlertBanner
