import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO'
import { ArrowLeft, Calendar, Clock, Tag, CheckCircle, Mail } from 'lucide-react'
import blogPosts from '../blogData'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const formatDate = (dateStr) => {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

const renderMarkdown = (text) => {
  const lines = text.split('\n')
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-semibold text-brand-navy mt-10 mb-4">{line.slice(3)}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-semibold text-brand-navy mt-8 mb-3">{line.slice(4)}</h3>)
    } else if (line === '---') {
      elements.push(<hr key={i} className="my-8 border-gray-200" />)
    } else if (line.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-6 space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="text-brand-body leading-relaxed">{renderInline(item)}</li>
          ))}
        </ul>
      )
      continue
    } else if (line.match(/^\d+\.\s/)) {
      const items = []
      while (i < lines.length && lines[i].match(/^\d+\.\s/)) {
        items.push(lines[i].replace(/^\d+\.\s/, ''))
        i++
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal pl-6 space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="text-brand-body leading-relaxed">{renderInline(item)}</li>
          ))}
        </ol>
      )
      continue
    } else if (line.trim() === '') {
      // skip empty lines
    } else {
      elements.push(<p key={i} className="text-brand-body leading-relaxed my-4">{renderInline(line)}</p>)
    }
    i++
  }

  return elements
}

const renderInline = (text) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-brand-navy">{part.slice(2, -2)}</strong>
    }
    return part
  })
}

const BlogPostPage = () => {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  const [subscribed, setSubscribed] = useState(false)
  const [subscribing, setSubscribing] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setSubscribing(true)
    const formData = new FormData(e.target)
    try {
      await fetch('https://formsubmit.co/ajax/dan@nehla.com.au', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      })
      setSubscribed(true)
    } catch {
      setSubscribed(true)
    } finally {
      setSubscribing(false)
    }
  }

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-semibold text-brand-navy">Post not found</h1>
        <Link to="/insights" className="text-brand-cobalt mt-4 inline-block">Back to The Strata Edit</Link>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/insights/${post.slug}`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date,
            "author": { "@type": "Organization", "name": "NEHLA" },
            "publisher": { "@type": "Organization", "name": "NEHLA", "logo": { "@type": "ImageObject", "url": "https://nehla.com.au/logo.png" } },
            "mainEntityOfPage": `https://nehla.com.au/insights/${post.slug}`
          })}
        </script>
      </Helmet>

      <section className="pt-32 pb-20 lg:pt-40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link to="/insights" className="inline-flex items-center gap-2 text-brand-cobalt font-medium hover:underline mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back to The Strata Edit
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} custom={1} className="flex flex-wrap items-center gap-4 text-sm text-brand-slate mb-4">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cobalt/10 text-brand-cobalt font-medium">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              custom={2}
              className="text-3xl md:text-4xl font-semibold text-brand-navy leading-tight tracking-tight mb-6"
            >
              {post.title}
            </motion.h1>

            {post.image && (
              <motion.div variants={fadeInUp} custom={3} className="mb-8 rounded-2xl overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-auto" />
              </motion.div>
            )}

            {!post.image && (
              <motion.div variants={fadeInUp} custom={3} className="mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-cobalt/10 to-brand-mint/10 h-64 flex items-center justify-center">
                <span className="text-brand-cobalt/30 text-6xl font-bold">NEHLA</span>
              </motion.div>
            )}

            <motion.div variants={fadeInUp} custom={4} className="prose-nehla">
              {renderMarkdown(post.content)}
            </motion.div>

            <motion.div variants={fadeInUp} custom={5} className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-brand-slate italic">
                This article is part of The Strata Edit, an industry insights series exploring the challenges and opportunities shaping modern strata management in Australia.
              </p>
              <Link to="/insights" className="inline-flex items-center gap-2 text-brand-cobalt font-semibold hover:underline mt-4">
                <ArrowLeft className="w-4 h-4" />
                Read more articles
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="gradient-dark">
        <div className="section-padding !py-16">
          <div className="max-w-3xl mx-auto text-center">
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center"
              >
                <CheckCircle className="w-12 h-12 text-brand-mint mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">You're subscribed!</h3>
                <p className="text-gray-300">We'll send you new insights as they're published.</p>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-brand-mint" />
                  <h3 className="text-2xl font-semibold text-white">Stay across the industry</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Get The Strata Edit delivered to your inbox. No spam, just actionable insights for strata professionals.
                </p>
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <input type="hidden" name="_subject" value="New Strata Edit Subscriber" />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your work email"
                    aria-label="Email address"
                    required
                    className="flex-1 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                  <button
                    type="submit"
                    disabled={subscribing}
                    className="px-6 py-3 rounded-xl bg-brand-mint text-brand-navy font-semibold hover:bg-[#00E6AF] transition-all disabled:opacity-70"
                  >
                    {subscribing ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPostPage
