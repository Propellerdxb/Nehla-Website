import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@nehla.ai' },
  ]

  return (
    <footer className="bg-brand-navy text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo-white.webp"
                alt="NEHLA Strata Hub"
                className="h-14 w-auto"
                width={400}
                height={137}
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs leading-relaxed">
              The AI-Powered Operations Team for the Modern Strata Manager.
              Automating the back-end to elevate the human-end.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/nehla-strata-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://open.spotify.com/show/7FgAszuXIsnfoXJMFUdBWE?si=qSpdzlHkSoeVI9qmx5CSuA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="Spotify"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="/#documents" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Documents
                </a>
              </li>
              <li>
                <a href="/#email" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">More</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#security" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Security
                </a>
              </li>
              <li>
                <Link to="/insights" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <a href="/#waitlist" aria-label="Secure your spot - request early access" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Secure Your Spot
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10" style={{ background: 'linear-gradient(135deg, #2E5BFF 0%, #00FFC2 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white text-sm font-medium">
              &copy; {new Date().getFullYear()} Nehla Pty Ltd. All rights reserved.
            </p>
            <span className="text-white text-sm font-medium">Made in Australia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
