import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO'
import {
  ArrowRight,
  Target,
  Heart,
  Sparkles,
  Shield,
  TrendingUp,
  Users,
  Lock,
  EyeOff,
} from 'lucide-react'

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

/* ───────────────────── PAGE HERO ──────────────────────── */
const AboutHero = () => (
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
          custom={1}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-navy leading-tight tracking-tight text-balance"
        >
          The Future of Strata{' '}
          <span className="gradient-text">Leadership</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={2}
          className="mt-6 text-lg md:text-xl text-brand-body max-w-3xl mx-auto leading-relaxed"
        >
          We didn&rsquo;t set out to build another management tool. We set out to build a
          digital workforce. By combining deep industry expertise with sophisticated AI
          intelligence, we created an operations partner that doesn&rsquo;t just store your
          data&mdash;it processes it, protects it, and gives you back the time to grow
          your legacy.
        </motion.p>
      </motion.div>
    </div>
  </section>
)

/* ──────────────── OUR STORY ──────────────────────── */
const OurStory = () => (
  <section className="bg-white">
    <div className="section-padding">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight"
          >
            Our Story: Beyond the Software
          </motion.h2>

          <motion.p variants={fadeInUp} custom={1} className="mt-6 text-brand-body text-lg leading-relaxed">
            In an industry governed by complex legislation and endless administrative
            cycles, strata managers have historically been forced to choose between
            operational compliance and client relationships. We saw a market where
            talented professionals were spending 40% of their week on manual data
            entry&mdash;becoming data clerks rather than community leaders.
          </motion.p>

          <motion.p variants={fadeInUp} custom={2} className="mt-4 text-brand-navy text-lg font-medium leading-relaxed">
            Nehla Strata Hub was born from a singular vision: to bridge the gap
            between back-end complexity and front-end leadership.
          </motion.p>
        </motion.div>

        {/* Visual element */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="bg-gradient-to-br from-brand-cobalt/10 to-brand-mint/10 rounded-3xl p-10 border border-brand-cobalt/10" role="img" aria-label="Key statistics: 40% of work week spent on manual data entry, 15 hours reclaimed weekly with NEHLA's AI team, 100% compliance precision">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-16 rounded-2xl bg-brand-cobalt/10 flex items-center justify-center shrink-0 px-3 py-2">
                  <span className="text-2xl font-bold text-brand-cobalt">40%<span className="text-sm align-super">*</span></span>
                </div>
                <p className="text-brand-body">of work week spent on manual data entry</p>
              </div>
              <div className="h-px bg-gray-200" />
              <div className="flex items-center gap-4">
                <div className="w-20 h-16 rounded-2xl bg-brand-cobalt/10 flex items-center justify-center shrink-0 px-3 py-2">
                  <span className="text-2xl font-bold text-brand-cobalt">15h<span className="text-sm align-super">*</span></span>
                </div>
                <p className="text-brand-body">reclaimed weekly with Nehla Strata Hub&rsquo;s AI team</p>
              </div>
              <div className="h-px bg-gray-200" />
              <div className="flex items-center gap-4">
                <div className="w-20 h-16 rounded-2xl bg-brand-cobalt/10 flex items-center justify-center shrink-0 px-3 py-2">
                  <span className="text-2xl font-bold text-brand-cobalt">100%<span className="text-sm align-super">*</span></span>
                </div>
                <p className="text-brand-body">compliance precision, always audit-ready</p>
              </div>
            </div>
            <p className="mt-6 text-xs text-gray-400">*this is based on an average size Strata Management Agency</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

/* ──────────────── WHY WE EXIST ────────────────────── */
const WhyWeExist = () => (
  <section className="bg-brand-offwhite">
    <div className="section-padding">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="gradient-dark rounded-3xl p-10">
            <h3 className="text-white text-xl font-semibold mb-6">
              The 2026 Landscape
            </h3>
            <div className="space-y-5">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-brand-mint" />
                  <span className="text-white font-medium">NSW Reform</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Insurance commission phase-out forces transition to fee-for-service,
                  demanding proof of efficiency and transparency.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-brand-mint" />
                  <span className="text-white font-medium">Market Growth</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  $1.4 Trillion insured value. ~393,000 dwelling shortfall by 2029.
                  Demand outpaces the supply of human managers.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-brand-mint" />
                  <span className="text-white font-medium">Fee-for-Service</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Agencies must now justify value through operational excellence.
                  Nehla Strata Hub provides exactly that.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="order-1 lg:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight"
          >
            Why We Exist: The 2026 Shift
          </motion.h2>

          <motion.p variants={fadeInUp} custom={1} className="mt-6 text-brand-body text-lg leading-relaxed">
            The Australian strata landscape is evolving. With the 2026 legislative reforms
            and the transition toward fee-for-service models, the administrative burden on
            agencies has never been higher.
          </motion.p>

          <motion.p variants={fadeInUp} custom={2} className="mt-4 text-brand-body text-lg leading-relaxed">
            We exist to act as your{' '}
            <span className="text-brand-navy font-semibold">Digital Guardrail</span>.
            As regulations shift and portfolios grow, Nehla Strata Hub provides the precision and
            automation required to keep your agency 100% compliant without the overhead
            of scaling your human headcount.
          </motion.p>
        </motion.div>
      </div>
    </div>
  </section>
)

/* ──────────────── OUR APPROACH ────────────────────── */
const pillars = [
  {
    icon: Target,
    title: 'Precision Over Processing',
    desc: 'We value the "right result" over the "fastest shortcut." Our AI is trained to handle the specific nuances of NSW, VIC, and QLD strata laws with absolute accuracy.',
    color: 'brand-cobalt',
  },
  {
    icon: Heart,
    title: 'Human-First Innovation',
    desc: 'We automate the back-end so that you can elevate the human-end. Every line of code we write is designed to reclaim your billable hours.',
    color: 'brand-mint',
  },
  {
    icon: Sparkles,
    title: 'Radical Simplicity',
    desc: 'We strip away the noise of legacy systems. Nehla Strata Hub provides a streamlined, intuitive experience that feels like having an elite executive team at your fingertips.',
    color: 'brand-cobalt',
  },
]

const OurApproach = () => (
  <section className="bg-white">
    <div className="section-padding">
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight"
        >
          Our Approach: The Elite Operations Partner
        </motion.h2>
        <motion.p variants={fadeInUp} custom={1} className="mt-4 text-lg text-brand-body leading-relaxed">
          We believe that technology should be an invisible engine that empowers human
          connection. Our philosophy is anchored in three core pillars.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            variants={fadeInUp}
            custom={i}
            className="text-center p-8 rounded-2xl bg-brand-offwhite border border-gray-100 card-hover"
          >
            <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
              pillar.color === 'brand-mint'
                ? 'bg-brand-mint/15'
                : 'bg-brand-cobalt/10'
            }`}>
              <pillar.icon className={`w-7 h-7 ${
                pillar.color === 'brand-mint'
                  ? 'text-brand-cobalt'
                  : 'text-brand-cobalt'
              }`} />
            </div>
            <h3 className="text-xl font-semibold text-brand-navy mb-4">
              {pillar.title}
            </h3>
            <p className="text-brand-body leading-relaxed">{pillar.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

/* ──────────────── SECURITY & PRIVACY ────────────────── */
const securityItems = [
  {
    icon: Lock,
    title: 'Secured Environment',
    desc: 'Your data never leaves its secured, enterprise-grade environment. We employ bank-level encryption to ensure that your records remain private and protected.',
  },
  {
    icon: EyeOff,
    title: 'No Training Policy',
    desc: 'Your proprietary data and client information are never used to train our global AI models. Your business intelligence remains yours alone.',
  },
  {
    icon: Shield,
    title: 'Privacy by Design',
    desc: 'We adhere to the strictest Australian privacy standards, ensuring that our AI operations are transparent and compliant with all national data protection laws.',
  },
]

const SecurityPrivacy = () => (
  <section className="bg-brand-offwhite">
    <div className="section-padding">
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight"
        >
          Security &amp; Privacy: Your Data, Protected.
        </motion.h2>
        <motion.p variants={fadeInUp} custom={1} className="mt-4 text-lg text-brand-body leading-relaxed">
          We understand that in the era of AI, security is not just a feature&mdash;it is a
          foundation. At Nehla Strata Hub, we treat your agency&rsquo;s data with the highest level of
          professional confidentiality.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        {securityItems.map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeInUp}
            custom={i}
            className="p-8 rounded-2xl bg-white border border-gray-100 card-hover"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-cobalt/10 flex items-center justify-center mb-6">
              <item.icon className="w-7 h-7 text-brand-cobalt" />
            </div>
            <h3 className="text-xl font-semibold text-brand-navy mb-4">
              {item.title}
            </h3>
            <p className="text-brand-body leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="max-w-3xl mx-auto text-center mt-10 text-sm text-brand-body"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Detailed information regarding our security protocols and data handling can be
        found in our{' '}
        <Link to="/terms" className="text-brand-cobalt font-medium hover:underline">
          Terms &amp; Conditions
        </Link>.
      </motion.p>
    </div>
  </section>
)

/* ──────────────── THE NEHLA PROMISE ───────────────── */
const NehlaPromise = () => (
  <section className="gradient-dark">
    <div className="section-padding">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold text-white tracking-tight"
        >
          The Nehla Strata Hub Promise
        </motion.h2>

        <motion.p variants={fadeInUp} custom={1} className="mt-6 text-lg text-gray-300 leading-relaxed">
          When you choose Nehla Strata Hub, you aren&rsquo;t just &ldquo;implementing
          software.&rdquo; You are hiring an elite operations team dedicated to your
          agency&rsquo;s growth. We handle the heavy lifting of data entry and regulatory
          tracking, providing you with the intelligence you need to lead your community
          with confidence.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          custom={2}
          className="mt-8 text-2xl md:text-3xl font-semibold text-white"
        >
          Intelligence at the back-office.
          <br />
          <span className="gradient-text">Leadership at the front-office.</span>
        </motion.p>

        <motion.div variants={fadeInUp} custom={3} className="mt-10 flex justify-center">
          <Link to="/#waitlist" className="btn-mint text-lg gap-2">
            Meet Your AI Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

/* ──────────────── ABOUT PAGE ─────────────────────── */
const AboutPage = () => (
  <>
    <SEO
      title="About NEHLA — AI-Powered Strata Operations Platform"
      description="Learn how Nehla Strata Hub bridges the gap between back-end complexity and front-end leadership. AI-driven compliance automation and digital workforce for Australian strata managers."
      path="/about"
    />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "SoftwareApplication",
              "name": "NEHLA Strata Hub",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "AI-powered digital workforce for strata management. Automates compliance monitoring, invoice processing, and administrative operations for Australian strata agencies.",
              "offers": {
                "@type": "Offer",
                "description": "Early Adopter Program - 6 months free",
                "priceCurrency": "AUD",
                "availability": "https://schema.org/PreOrder"
              }
            },
            {
              "@type": "Organization",
              "name": "NEHLA",
              "legalName": "Nehla Pty Ltd",
              "url": "https://nehla.com.au",
              "logo": "https://nehla.com.au/logo.png",
              "description": "AI-powered digital workforce for Australian strata management.",
              "areaServed": { "@type": "Country", "name": "Australia" },
              "contactPoint": { "@type": "ContactPoint", "email": "hello@nehla.ai", "contactType": "sales" }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nehla.com.au/" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://nehla.com.au/about" }
              ]
            }
          ]
        })}
      </script>
    </Helmet>
    <AboutHero />
    <OurStory />
    <WhyWeExist />
    <OurApproach />
    <SecurityPrivacy />
    <NehlaPromise />
  </>
)

export default AboutPage
