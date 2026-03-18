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
            <p className="text-gray-500 mb-6 max-w-xs leading-relaxed">
              The AI-Powered Operations Team for the Modern Strata Manager.
              Automating the back-end to elevate the human-end.
            </p>
            <a
              href="https://www.linkedin.com/company/nehla-strata-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#features" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="/#documents" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Documents
                </a>
              </li>
              <li>
                <a href="/#email" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">More</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#security" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Security
                </a>
              </li>
              <li>
                <Link to="/insights" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-500 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <a href="/#waitlist" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Secure Your Spot
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">
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
