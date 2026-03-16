/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cobalt:    '#2E5BFF',
          mint:      '#00FFC2',
          navy:      '#121C2D',
          slate:     '#64748B',
          body:      '#334155',
          offwhite:  '#F8FAFC',
          primary:   '#2E5BFF',
          secondary: '#121C2D',
          accent:    '#00FFC2',
          dark:      '#121C2D',
          light:     '#F8FAFC',
        },
        status: {
          success: '#00E676',
          warning: '#FFAB40',
          error:   '#FF5252',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'body':    ['1rem',     { lineHeight: '1.7' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
      },
      letterSpacing: {
        'logo':    '0.2em',
        'tagline': '0.3em',
        'body':    '-0.01em',
      },
      boxShadow: {
        'brand':    '0 4px 8px 0 rgba(18, 28, 45, 0.15)',
        'brand-lg': '0 8px 16px 0 rgba(18, 28, 45, 0.12)',
        'card':     '0 1px 3px 0 rgba(18, 28, 45, 0.08), 0 1px 2px -1px rgba(18, 28, 45, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
