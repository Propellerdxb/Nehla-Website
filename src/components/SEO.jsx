import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://nehla.com.au'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

const SEO = ({
  title,
  description,
  path = '/',
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  keywords,
  children,
}) => {
  const fullTitle = title.includes('NEHLA')
    ? title
    : `${title} | NEHLA | Strata Hub`
  const canonicalUrl = `${SITE_URL}${path}`
  const defaultKeywords = 'strata management, AI, compliance, NSW, QLD, VIC, document extraction, email automation, property management, strata manager, digital workforce, Australia'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-AU" href={canonicalUrl} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="NEHLA | Strata Hub" />
      <meta property="og:locale" content="en_AU" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {children}
    </Helmet>
  )
}

export default SEO
