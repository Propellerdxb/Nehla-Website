import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

export async function prerender(data) {
  const helmetContext = {}

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={data.url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  )

  const { helmet } = helmetContext

  // Extract clean title text without HTML tags or attributes
  const titleText = (helmet?.title?.toString() || '')
    .replace(/<title[^>]*>/g, '')
    .replace(/<\/title>/g, '')
    .trim()

  return {
    html,
    head: {
      lang: 'en-AU',
      title: titleText,
    },
    links: new Set(['/about', '/privacy', '/terms']),
  }
}
