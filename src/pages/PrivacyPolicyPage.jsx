import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO'

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

const PrivacyPolicyPage = () => (
  <>
    <SEO
      title="Privacy Policy — NEHLA Strata Hub"
      description="Nehla Strata Hub privacy policy. Learn how we protect your strata management data with Australian-first data sovereignty, AI inference-only processing, and our no-training guarantee."
      path="/privacy"
    />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nehla.com.au/" },
            { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://nehla.com.au/privacy" }
          ]
        })}
      </script>
    </Helmet>
    {/* Hero */}
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
            custom={0}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-navy leading-tight tracking-tight"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="mt-4 text-brand-body text-lg"
          >
            Effective Date: 15 February 2026
          </motion.p>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-brand-body"
          >
            Jurisdiction: Australia (Commonwealth) &amp; New South Wales
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Policy content */}
    <section className="bg-white">
      <div className="section-padding">
        <motion.div
          className="max-w-3xl mx-auto prose-policy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
        >
          {/* 1. Introduction */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              1. Introduction
            </h2>
            <p className="text-brand-body leading-relaxed">
              Nehla Pty Ltd (&ldquo;Nehla&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &ldquo;our&rdquo;) is committed to protecting the privacy of your personal and
              professional information. This policy outlines our data handling practices in strict
              accordance with the <em>Privacy Act 1988 (Cth)</em> and the Australian Privacy
              Principles (APPs).
            </p>
          </motion.div>

          {/* 2. Information We Collect */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              2. Information We Collect
            </h2>
            <p className="text-brand-body leading-relaxed mb-4">
              To provide our AI-powered strata operations service (&ldquo;Digital
              Workforce&rdquo;), we collect:
            </p>
            <ul className="space-y-3 text-brand-body">
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Account Information:</strong> Names,
                  business emails, and contact details of agency staff.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Strata Records:</strong> Details of strata
                  schemes, lot owner information, and committee structures.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Financial Data:</strong> Invoices, bank
                  statements, and ledger entries uploaded for processing.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Usage Data:</strong> Metadata regarding Hub
                  utilization to improve your specific instance&rsquo;s efficiency.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* 3. The Nehla AI Privacy Guarantee */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              3. The Nehla AI Privacy Guarantee
            </h2>
            <p className="text-brand-body leading-relaxed mb-4">
              We recognize the unique privacy requirements of the strata industry regarding
              Artificial Intelligence.
            </p>
            <ul className="space-y-3 text-brand-body">
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Data Sandboxing:</strong> All Subscriber
                  Data is processed within a secured, sandboxed environment.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Inference Only:</strong> Our AI interacts
                  with your data through &ldquo;inference.&rdquo; It applies existing intelligence
                  to your tasks without &ldquo;learning&rdquo; or &ldquo;remembering&rdquo; your
                  proprietary information for use with other clients.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">No-Training Rule:</strong> We explicitly
                  guarantee that your private records and business intelligence are{' '}
                  <strong>never</strong> used to train, retune, or develop our foundational AI
                  models or any third-party models.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* 4. Use of Personal Information */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              4. Use of Personal Information
            </h2>
            <p className="text-brand-body leading-relaxed mb-4">
              We use your data solely for:
            </p>
            <ul className="space-y-3 text-brand-body">
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>Operating the Nehla Strata Hub and its AI agents.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>Ensuring compliance with New South Wales and National strata regulations.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>Providing technical support and account management.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  Communicating critical updates regarding legislative changes in the strata
                  industry.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* 5. Data Security & Storage */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              5. Data Security &amp; Storage
            </h2>
            <ul className="space-y-3 text-brand-body">
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Australian Sovereignty:</strong> We
                  prioritize the use of Australian-based data centres to ensure your data remains
                  subject to Australian privacy protections.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Encryption:</strong> Data is encrypted at
                  rest and in transit using enterprise-grade protocols.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Access Control:</strong> Internal access to
                  Subscriber Data is strictly limited to authorized personnel only when necessary
                  for technical support or security audits.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* 6. Data Ownership & Retention */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              6. Data Ownership &amp; Retention
            </h2>
            <ul className="space-y-3 text-brand-body">
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">100% Ownership:</strong> Subscribers retain
                  full ownership of all data, invoices, and records.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Retention Grace Period:</strong> If an
                  account expires or is suspended, data is kept in &ldquo;Read-Only&rdquo; mode
                  for a maximum of <strong>6 months</strong>. After this period, data may be
                  permanently deleted.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* 7. Disclosure to Third Parties */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              7. Disclosure to Third Parties
            </h2>
            <p className="text-brand-body leading-relaxed">
              Nehla does not sell, rent, or trade your data. Disclosure is limited to essential
              infrastructure providers (e.g., cloud hosts) who meet our rigorous security
              standards and are bound by confidentiality agreements consistent with Australian
              law.
            </p>
          </motion.div>

          {/* 8. Your Rights */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              8. Your Rights
            </h2>
            <p className="text-brand-body leading-relaxed mb-4">
              Under the <em>Privacy Act 1988</em>, you have the right to:
            </p>
            <ul className="space-y-3 text-brand-body">
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>Access the personal information we hold about you.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>Request the correction of inaccurate or out-of-date information.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  Request a portable copy of your data (subject to our Terms &amp; Conditions).
                </span>
              </li>
            </ul>
          </motion.div>

          {/* 9. Contact Us */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              9. Contact Us
            </h2>
            <p className="text-brand-body leading-relaxed mb-4">
              For questions regarding this policy or to lodge a privacy-related complaint, please
              contact our Privacy Officer:
            </p>
            <p className="text-brand-body">
              <strong className="text-brand-navy">Email:</strong>{' '}
              <a
                href="mailto:privacy@nehla.com.au"
                className="text-brand-cobalt font-medium hover:underline"
              >
                privacy@nehla.com.au
              </a>
            </p>
          </motion.div>

          {/* Closing note */}
          <motion.p
            variants={fadeInUp}
            className="text-sm text-gray-400 italic border-t border-gray-200 pt-8"
          >
            This policy should be read in conjunction with the Nehla Pty Ltd{' '}
            <Link to="/terms" className="text-brand-cobalt font-medium hover:underline not-italic">
              Terms &amp; Conditions
            </Link>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  </>
)

export default PrivacyPolicyPage
