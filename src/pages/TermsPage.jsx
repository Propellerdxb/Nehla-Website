import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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

const TermsPage = () => (
  <>
    <SEO
      title="Terms & Conditions — NEHLA Strata Hub"
      description="Terms and conditions for Nehla Strata Hub AI-powered strata operations service. Data ownership, security guarantees, and subscription terms."
      path="/terms"
    />
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
            Terms &amp; Conditions
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
            Jurisdiction: New South Wales, Australia
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Content */}
    <section className="bg-white">
      <div className="section-padding">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
        >
          {/* 1. The Nehla Service */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              1. The Nehla Service
            </h2>
            <p className="text-brand-body leading-relaxed">
              Nehla Strata Hub (&ldquo;the Service&rdquo;), operated by Nehla Pty Ltd
              (&ldquo;Nehla&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), provides an
              AI-powered operations team and digital workforce tailored for the strata industry.
              By subscribing to, accessing, or using the Service, you (the
              &ldquo;Subscriber&rdquo;) agree to be bound by these Terms and Conditions.
            </p>
          </motion.div>

          {/* 2. Digital Workforce & AI Agency */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              2. Digital Workforce &amp; AI Agency
            </h2>
            <p className="text-brand-body leading-relaxed mb-4">
              The Subscriber acknowledges that Nehla utilizes artificial intelligence to process
              data, manage compliance, and automate administrative tasks.
            </p>
            <ul className="space-y-3 text-brand-body">
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Professional Responsibility:</strong> While
                  Nehla strives for 100% precision in its output, the Service is intended to
                  support, not replace, human professional judgment.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Final Authority:</strong> The Subscriber
                  retains ultimate professional and legal responsibility for the accuracy of
                  official strata documents, financial records, and all regulatory submissions made
                  via the Service.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* 3. Data Ownership & Security */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              3. Data Ownership &amp; Security
            </h2>
            <ul className="space-y-3 text-brand-body">
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Ownership:</strong> The Subscriber retains
                  100% of all rights, title, and interest in and to all data, invoices, and strata
                  records uploaded to the Service (&ldquo;Subscriber Data&rdquo;).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Secured Environment:</strong> Nehla warrants
                  that Subscriber Data is stored in an enterprise-grade, encrypted environment. We
                  prioritize Australian-based servers to ensure jurisdictional compliance and
                  operational efficiency.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">The &ldquo;No-Training&rdquo; Rule:</strong>{' '}
                  Nehla explicitly agrees that Subscriber Data will <strong>not</strong> be used to
                  train, retune, or improve global or foundational AI models. Your business
                  intelligence remains isolated to your specific instance.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* 4. Subscription, Fees & Payments */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              4. Subscription, Fees &amp; Payments
            </h2>
            <ul className="space-y-3 text-brand-body">
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Calculation:</strong> Fees are based on your
                  selected tier (e.g., lot count, user seats, or performance-based metrics).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Account Suspension:</strong> Failure to
                  maintain a current subscription or pay fees within the agreed timeframe will
                  result in account suspension.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Data Retention Grace Period:</strong> In the
                  event of account suspension or expiration, Nehla will maintain Subscriber Data in
                  a &ldquo;Read-Only&rdquo; or archived state for a maximum period of{' '}
                  <strong>6 months</strong>.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Data Deletion:</strong> If the account
                  remains inactive or unpaid after this 6-month grace period, Nehla reserves the
                  right to permanently delete all Subscriber Data. It is the Subscriber&rsquo;s
                  responsibility to export necessary records prior to the conclusion of this
                  period.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* 5. Acceptable Use */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              5. Acceptable Use
            </h2>
            <p className="text-brand-body leading-relaxed mb-4">
              The Subscriber must not:
            </p>
            <ul className="space-y-3 text-brand-body">
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>Use the Service for any fraudulent or illegal activity.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>Attempt to reverse-engineer the AI models or proprietary algorithms.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>Circumvent the security protocols of the Hub.</span>
              </li>
            </ul>
          </motion.div>

          {/* 6. Liability & Indemnity */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              6. Liability &amp; Indemnity
            </h2>
            <p className="text-brand-body leading-relaxed mb-4">
              To the maximum extent permitted by the laws of New South Wales:
            </p>
            <ul className="space-y-3 text-brand-body">
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Liability Cap:</strong> Nehla&rsquo;s total
                  liability for any claim arising under these terms is limited to the total amount
                  paid by the Subscriber to Nehla in the <strong>12 months</strong> preceding the
                  event giving rise to the claim.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-cobalt font-bold mt-0.5">&bull;</span>
                <span>
                  <strong className="text-brand-navy">Exclusions:</strong> Nehla is not liable for
                  indirect, incidental, or consequential damages, or loss of profits.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* 7. Termination */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              7. Termination
            </h2>
            <p className="text-brand-body leading-relaxed">
              Either party may terminate the agreement with 30 days&rsquo; written notice. Upon
              termination, the 6-month data retention policy outlined in Section 4 will commence
              to facilitate data transition.
            </p>
          </motion.div>

          {/* 8. Governing Law */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              8. Governing Law
            </h2>
            <p className="text-brand-body leading-relaxed">
              These Terms and Conditions are governed by and construed in accordance with the laws
              of <strong className="text-brand-navy">New South Wales, Australia</strong>. Both
              parties submit to the non-exclusive jurisdiction of the courts of New South Wales.
            </p>
          </motion.div>

          {/* Closing note */}
          <motion.p
            variants={fadeInUp}
            className="text-sm text-gray-400 italic border-t border-gray-200 pt-8"
          >
            For information regarding data handling and AI isolation, please refer to our{' '}
            <Link to="/privacy" className="text-brand-cobalt font-medium hover:underline not-italic">
              Privacy Policy
            </Link>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  </>
)

export default TermsPage
