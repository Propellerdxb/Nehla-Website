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

  return {
    html,
    head: {
      lang: 'en-AU',
      title: (helmet?.title?.toString() || '').replace(/<\/?title[^>]*>/g, ''),
      elements: new Set([
        ...(helmet?.meta?.toString() ? [{ type: 'raw', value: helmet.meta.toString() }] : []),
        ...(helmet?.link?.toString() ? [{ type: 'raw', value: helmet.link.toString() }] : []),
        ...(helmet?.script?.toString() ? [{ type: 'raw', value: helmet.script.toString() }] : []),
      ]),
    },
    links: new Set(['/about', '/privacy', '/terms']),
  }
}
