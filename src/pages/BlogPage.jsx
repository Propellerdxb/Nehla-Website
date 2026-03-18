import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO'
import { ArrowRight, Calendar, Clock, Tag, CheckCircle, Mail } from 'lucide-react'
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

const pillars = ['All', 'Compliance & Regulation', 'Operational Efficiency', 'The Human Side', 'Technology & Innovation']

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [subscribed, setSubscribed] = useState(false)
  const [subscribing, setSubscribing] = useState(false)
  const [optIn, setOptIn] = useState(false)
  const [optInError, setOptInError] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!optIn) {
      setOptInError(true)
      return
    }
    setOptInError(false)
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

  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
  const filteredPosts = activeFilter === 'All'
    ? sortedPosts
    : sortedPosts.filter((p) => p.category === activeFilter)

  return (
    <>
      <SEO
        title="The Strata Edit - Industry Insights for Strata Managers"
        description="Expert insights on strata compliance, legislation changes, and operational best practices for Australian strata managers. NSW, VIC, and QLD coverage."
        path="/insights"
        keywords="strata management blog, strata compliance, NSW strata, VIC strata, QLD strata, strata industry insights"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "The Strata Edit",
            "description": "Industry insights for modern strata management in Australia.",
            "url": "https://nehla.com.au/insights",
            "publisher": { "@type": "Organization", "name": "NEHLA", "logo": { "@type": "ImageObject", "url": "https://nehla.com.au/logo.png" } }
          })}
        </script>
      </Helmet>

      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-cobalt/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-mint/5 rounded-full blur-3xl" />
        </div>

        <div className="relative section-padding !py-0">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-navy leading-tight tracking-tight"
            >
              The Strata Edit
            </motion.h1>
            <motion.div variants={fadeInUp} custom={1} className="w-48 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint mt-6 mb-6 rounded-full mx-auto" />
            <motion.p
              variants={fadeInUp}
              custom={2}
              className="mt-4 text-lg md:text-xl text-brand-body max-w-2xl mx-auto leading-relaxed"
            >
              Industry insights exploring the challenges and opportunities shaping modern strata management in Australia.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-padding">
          <div className="max-w-5xl mx-auto">
            {/* Filter pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {pillars.map((pillar) => (
                <button
                  key={pillar}
                  onClick={() => setActiveFilter(pillar)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === pillar
                      ? 'bg-brand-cobalt text-white shadow-lg shadow-brand-cobalt/25'
                      : 'bg-brand-offwhite text-brand-body border border-gray-200 hover:border-brand-cobalt hover:text-brand-cobalt'
                  }`}
                >
                  {pillar}
                </button>
              ))}
            </div>

            {/* Posts grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, i) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="bg-brand-offwhite rounded-2xl overflow-hidden border border-gray-100 card-hover flex flex-col"
                    >
                      <Link to={`/insights/${post.slug}`} className="block">
                        {post.image ? (
                          <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        ) : (
                          <div className="w-full h-48 bg-gradient-to-br from-brand-cobalt/10 to-brand-mint/10 flex items-center justify-center">
                            <span className="text-brand-cobalt/20 text-4xl font-bold">NEHLA</span>
                          </div>
                        )}
                      </Link>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs text-brand-slate mb-3">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.date)}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-cobalt/10 text-brand-cobalt text-xs font-medium w-fit mb-3">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                        <Link to={`/insights/${post.slug}`} className="block flex-1">
                          <h2 className="text-lg font-semibold text-brand-navy mb-2 hover:text-brand-cobalt transition-colors leading-snug">
                            {post.title}
                          </h2>
                          <p className="text-brand-body text-sm leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        </Link>
                        <Link
                          to={`/insights/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-brand-cobalt font-semibold text-sm mt-4 hover:underline"
                        >
                          Read more<span className="sr-only">: {post.title}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.article>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-16">
                    <p className="text-brand-slate text-lg">No articles in this category yet. Check back soon.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
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
                  className="max-w-lg mx-auto"
                >
                  <input type="hidden" name="_subject" value="New Strata Edit Subscriber" />
                  <input type="hidden" name="_template" value="table" />
                  <div className="flex flex-col sm:flex-row gap-3">
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
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer select-none mt-4 justify-center">
                    <input
                      type="checkbox"
                      checked={optIn}
                      onChange={(e) => { setOptIn(e.target.checked); if (e.target.checked) setOptInError(false) }}
                      className={`mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 appearance-none cursor-pointer checked:bg-brand-mint checked:border-brand-mint ${
                        optInError ? 'border-red-500' : 'border-white/40'
                      }`}
                      style={optIn ? { backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 16 16\' fill=\'%23121C2D\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z\'/%3E%3C/svg%3E")', backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : {}}
                    />
                    <span className={`text-sm ${optInError ? 'text-red-400' : 'text-white/70'}`}>
                      Opt in to receive news and updates.
                    </span>
                  </label>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
