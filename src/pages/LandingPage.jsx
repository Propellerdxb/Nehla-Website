import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO'
import {
  ArrowRight,
  Shield,
  Clock,
  Users,
  Zap,
  CheckCircle,
  FileText,
  Scale,
  Brain,
  Mail,
  Globe,
  Lock,
  Layers,
  Eye,
  TrendingUp,
  Target,
  Cpu,
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

/* ───────────────────────── HERO ───────────────────────── */
const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 gradient-hero overflow-hidden">
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
        <motion.div variants={fadeInUp} custom={0} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cobalt/10 text-brand-cobalt font-medium text-sm">
            <span className="w-2 h-2 bg-brand-mint rounded-full animate-pulse" />
            Early Adopter Program — Only 12 Spots
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          custom={1}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-navy leading-tight tracking-tight text-balance"
        >
          The Intuitive Engine for the{' '}
          <span className="gradient-text">Next Era of Strata.</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={2}
          className="mt-6 text-lg md:text-xl text-brand-body max-w-3xl mx-auto leading-relaxed italic"
        >
          Intelligence at the back-office. Leadership at the front-office.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          custom={3}
          className="mt-8 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-brand-cobalt/10 max-w-2xl mx-auto"
        >
          <p className="text-brand-navy font-medium text-lg">
            We are seeking{' '}
            <span className="text-brand-cobalt font-bold">12 visionary Strata Managers</span>{' '}
            to join our exclusive Early Adopter program. Secure your spot now to get your
            first{' '}
            <span className="text-brand-cobalt font-bold">6 months FREE</span>{' '}
            when we pre-launch in April.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} custom={4} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#waitlist" className="btn-primary text-lg gap-2">
            Request Early Access
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          custom={5}
          className="mt-6 text-sm text-brand-slate"
        >
          Only 12 spots available. No payment required to pre-register.
        </motion.p>
      </motion.div>
    </div>
  </section>
)

/* ───────────────────── WHAT IS NEHLA ────────────────────── */
const WhatIsNehla = () => (
  <section className="bg-white">
    <div className="section-padding">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <div className="max-w-3xl">
          <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-brand-cobalt mb-4">
            What is NEHLA | Strata Hub?
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight"
          >
            The AI-Powered Operations Team for the Modern Strata Manager.
          </motion.h2>
          <motion.div variants={fadeInUp} custom={2} className="w-16 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint mt-6 mb-8 rounded-full" />
          <motion.p variants={fadeInUp} custom={3} className="text-lg text-brand-body leading-relaxed mb-6">
            Strata management is drowning in admin. Managers spend more time on data entry,
            email and compliance checklists than building relationships with their communities.
          </motion.p>
          <motion.p variants={fadeInUp} custom={4} className="text-lg text-brand-body leading-relaxed">
            NEHLA changes that. We've built a digital workforce that handles the back-end —
            automating data entry, tracking compliance in real time, and processing documents
            with AI precision — so strata professionals can focus on what matters: leading
            their communities.
          </motion.p>
        </div>
      </motion.div>
    </div>
  </section>
)

/* ──────────────────── TASK-DRIVEN SYSTEM ─────────────────── */
const foundations = [
  {
    icon: Shield,
    title: 'Regulatory Requirements',
    desc: 'NSW, QLD, and VIC strata legislation encoded into automated workflows.',
  },
  {
    icon: FileText,
    title: 'Uploaded Documents',
    desc: 'Invoices, insurance certs, legal notices, meeting minutes — any document type.',
  },
  {
    icon: Mail,
    title: 'Incoming Emails',
    desc: 'Full mailbox integration captures every communication automatically.',
  },
]

const Foundation = () => (
  <section className="gradient-dark">
    <div className="section-padding">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-brand-mint mb-4">
          The Foundation
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          custom={1}
          className="text-3xl md:text-4xl font-semibold text-white tracking-tight"
        >
          Built as a Task-Driven System
        </motion.h2>
        <motion.p variants={fadeInUp} custom={2} className="mt-4 text-lg text-gray-400 leading-relaxed">
          Every piece of data that enters NEHLA flows through an automated pipeline.
          The system doesn't just store information — it understands it, processes it, and takes action.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        {foundations.map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeInUp}
            custom={i}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-cobalt/20 flex items-center justify-center mb-5">
              <item.icon className="w-6 h-6 text-brand-cobalt" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

/* ──────────────────── TASK MANAGER ────────────────────── */
const taskFeatures = [
  { icon: Brain, text: 'AI-generated summaries for every task' },
  { icon: CheckCircle, text: 'Suggested actions ranked by priority' },
  { icon: Mail, text: 'Full trail linked to each task' },
  { icon: Layers, text: 'Board, table, calendar & timeline views' },
]

const TaskManager = () => (
  <section className="bg-white">
    <div className="section-padding">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-brand-cobalt mb-4">
              Task Manager
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight"
            >
              AI That Works Your Task List for You.
            </motion.h2>
            <motion.div variants={fadeInUp} custom={2} className="w-16 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint mt-6 mb-8 rounded-full" />
            <motion.p variants={fadeInUp} custom={3} className="text-lg text-brand-body leading-relaxed mb-8">
              Every email, document, and compliance event flows into a unified task board.
              NEHLA's AI reads the context, summarises the issue, and proposes the next steps —
              before you even open the task.
            </motion.p>
            <motion.div variants={fadeInUp} custom={4} className="space-y-4">
              {taskFeatures.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-cobalt/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-4 h-4 text-brand-cobalt" />
                  </div>
                  <span className="text-brand-body">{f.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} custom={3} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="/screenshots/task-manager.png"
                alt="NEHLA Task Manager — AI-powered Kanban board with task summaries and suggested actions"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
)

/* ─────────────── DOCUMENT EXTRACTION ─────────────────── */
const extractionSteps = [
  { num: '01', title: 'Identify', desc: 'AI recognises document type automatically — invoice, insurance cert, notice, minutes.' },
  { num: '02', title: 'Extract', desc: 'Key data pulled from the document: dates, amounts, parties, clauses, deadlines.' },
  { num: '03', title: 'Match', desc: 'Cross-references extracted data against regulatory requirements.' },
  { num: '04', title: 'Act', desc: 'Creates tasks, flags compliance gaps, updates records, and notifies the right people.' },
]

const DocumentExtraction = () => (
  <section className="gradient-dark">
    <div className="section-padding">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-brand-mint mb-4">
          Intelligent Engine
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          custom={1}
          className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4"
        >
          Advanced Document Extraction
        </motion.h2>
        <motion.p variants={fadeInUp} custom={2} className="text-lg text-gray-400 leading-relaxed max-w-3xl mb-12">
          NEHLA's AI engine doesn't just scan documents — it understands them. When a document
          enters the system, the engine automatically identifies what it is, matches it to
          regulatory requirements, and takes the right action.
        </motion.p>

        <motion.div variants={fadeInUp} custom={3} className="space-y-0">
          {extractionSteps.map((step, i) => (
            <div key={step.num} className="flex items-start gap-6 relative">
              {/* Vertical connector */}
              {i < extractionSteps.length - 1 && (
                <div className="absolute left-5 top-12 w-px h-8 bg-gradient-to-b from-brand-cobalt to-brand-mint opacity-40" />
              )}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-brand-cobalt to-brand-mint flex items-center justify-center text-white text-sm font-bold">
                {step.num}
              </div>
              <div className="pb-10">
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-gray-400 mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
)

/* ─────────────── EXTRACTION UI SHOWCASE ──────────────── */
const extractionFeatures = [
  { icon: FileText, text: 'Automated data extraction from any document' },
  { icon: Globe, text: 'AI-powered chat for instant document Q&A' },
  { icon: CheckCircle, text: 'Extracted fields ready to approve or edit' },
  { icon: Layers, text: 'Auto-tagging and smart file naming' },
]

const ExtractionShowcase = () => (
  <section className="bg-white">
    <div className="section-padding">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-brand-cobalt mb-4">
              Advanced Extraction
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight"
            >
              Read, Extract, and Ask — Instantly.
            </motion.h2>
            <motion.div variants={fadeInUp} custom={2} className="w-16 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint mt-6 mb-8 rounded-full" />
            <motion.p variants={fadeInUp} custom={3} className="text-lg text-brand-body leading-relaxed mb-4">
              Upload any document and NEHLA's AI engine extracts key data automatically —
              building details, lot entitlements, dates, parties, and compliance fields.
              No manual data entry required.
            </motion.p>
            <motion.p variants={fadeInUp} custom={4} className="text-lg text-brand-body leading-relaxed mb-8">
              Need a quick answer? Ask the built-in chat anything about the document —
              instead of scrolling through pages, just type your question and get an instant,
              contextual response.
            </motion.p>
            <motion.div variants={fadeInUp} custom={5} className="space-y-4">
              {extractionFeatures.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-cobalt/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-4 h-4 text-brand-cobalt" />
                  </div>
                  <span className="text-brand-body">{f.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} custom={3} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="/screenshots/document-extraction.png"
                alt="NEHLA Document Extraction — AI-powered document analysis with chat and field extraction"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
)

/* ──────────────────── EMAIL INTEGRATION ──────────────── */
const emailHowItWorks = [
  'Full mailbox integration for every building in your portfolio',
  'AI reads and classifies every incoming email automatically',
  'Attachments are extracted and processed through the document engine',
  'Actions are created based on email content and context',
  'Pre-drafted replies and next steps proposed for your review',
]

const emailResults = [
  { highlight: 'Zero', desc: 'emails missed or forgotten' },
  { highlight: 'Instant', desc: 'classification and triage' },
  { highlight: 'Pre-built', desc: 'reply suggestions ready to send' },
  { highlight: 'Full', desc: 'audit trail of all correspondence' },
]

const EmailIntegration = () => (
  <section className="gradient-dark">
    <div className="section-padding">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-brand-mint mb-4">
          Email Intelligence
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          custom={1}
          className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4"
        >
          Your Inbox, Automated.
        </motion.h2>
        <motion.p variants={fadeInUp} custom={2} className="text-lg text-gray-400 leading-relaxed max-w-3xl mb-12">
          Email is the biggest time sink in strata management. NEHLA integrates directly with each
          building's mailbox, analyses every incoming email and its attachments, and takes action —
          before you even open it.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeInUp}
            custom={3}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-mint mb-6">How it works</p>
            <div className="space-y-4">
              {emailHowItWorks.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-mint flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            custom={4}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-mint mb-6">The result</p>
            <div className="space-y-6">
              {emailResults.map((item) => (
                <div key={item.highlight} className="flex items-baseline gap-4">
                  <span className="text-xl font-bold text-brand-mint min-w-[100px]">{item.highlight}</span>
                  <span className="text-gray-300">{item.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Email screenshot */}
        <motion.div variants={fadeInUp} custom={5} className="mt-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="/screenshots/email-integration.png"
              alt="NEHLA Email Integration — per-building mailbox with AI summaries and suggested actions"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

/* ──────────────────── COMPLIANCE ─────────────────────── */
const complianceStates = [
  {
    state: 'NSW',
    law: 'SSMA 2015',
    items: ['S-fund compliance tracking', 'Meeting notice deadlines', 'Insurance requirements', 'Levy recovery timelines'],
  },
  {
    state: 'QLD',
    law: 'BCCMA 1997',
    items: ['Body corporate obligations', 'Committee meeting rules', 'Sinking fund forecasts', 'Disclosure requirements'],
  },
  {
    state: 'VIC',
    law: 'OC Act 2006',
    items: ['Owners corporation rules', 'Special resolution tracking', 'Maintenance obligations', 'Financial reporting standards'],
  },
]

const Compliance = () => (
  <section className="bg-white">
    <div className="section-padding">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-brand-cobalt mb-4">
          Compliance
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          custom={1}
          className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight"
        >
          Your Digital Guardrail.
        </motion.h2>
        <motion.div variants={fadeInUp} custom={2} className="w-16 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint mt-6 mb-6 rounded-full" />
        <motion.p variants={fadeInUp} custom={3} className="text-lg text-brand-body leading-relaxed max-w-3xl mb-12">
          Australian strata legislation is complex, state-specific, and constantly evolving.
          NEHLA encodes the rules of NSW, QLD, and VIC compliance into automated workflows —
          so nothing slips through the cracks.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          {complianceStates.map((s, i) => (
            <motion.div
              key={s.state}
              variants={fadeInUp}
              custom={i}
              className="bg-brand-navy rounded-2xl p-8"
            >
              <div className="w-16 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint mb-6 rounded-full" />
              <h3 className="text-2xl font-bold text-white">{s.state}</h3>
              <p className="text-brand-mint text-sm font-semibold mb-4">{s.law}</p>
              <div className="space-y-3">
                {s.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-mint flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
)

/* ──────────────── TRANSFORMATION TABLE ────────────────── */
const transformations = [
  { area: 'Data Entry', old: 'Hours of manual typing', nehla: 'Instant AI processing' },
  { area: 'Compliance', old: 'Constant manual checking', nehla: 'Compliance on autopilot' },
  { area: 'Email', old: 'Reactive inbox chaos', nehla: 'AI-triaged and pre-actioned' },
  { area: 'Documents', old: 'Filing cabinets and folders', nehla: 'Auto-classified and searchable' },
  { area: 'Operations', old: 'Expensive admin staff', nehla: 'Digital elite team, 24/7' },
]

const Transformation = () => (
  <section className="bg-brand-offwhite">
    <div className="section-padding">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-brand-cobalt mb-4 text-center">
          The Transformation
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          custom={1}
          className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight text-center"
        >
          From Manual to Intelligent
        </motion.h2>
        <motion.div variants={fadeInUp} custom={2} className="w-16 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint mt-6 mb-12 rounded-full mx-auto" />

        {/* Header */}
        <motion.div variants={fadeInUp} custom={3}>
          <div className="hidden md:grid grid-cols-3 gap-4 px-6 pb-4">
            <span className="text-sm font-semibold text-brand-slate uppercase tracking-wider" />
            <span className="text-sm font-semibold text-brand-slate uppercase tracking-wider">The Old Way</span>
            <span className="text-sm font-semibold text-brand-cobalt uppercase tracking-wider">The NEHLA Way</span>
          </div>

          <div className="space-y-3">
            {transformations.map((row, i) => (
              <motion.div
                key={row.area}
                variants={fadeInUp}
                custom={i + 3}
                className="grid md:grid-cols-3 gap-4 p-6 rounded-xl bg-white border border-gray-100"
              >
                <div className="font-semibold text-brand-navy">{row.area}</div>
                <div className="text-brand-body text-sm md:text-base">{row.old}</div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-cobalt flex-shrink-0 mt-0.5" />
                  <span className="text-brand-cobalt font-semibold italic">{row.nehla}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

/* ──────────────────── SECURITY ────────────────────────── */
const securityFeatures = [
  { icon: Lock, title: 'Auth0 Enterprise Login', desc: 'Industry-leading identity platform with multi-factor authentication.' },
  { icon: Layers, title: 'Data Isolation', desc: 'Complete separation between organisations at every level.' },
  { icon: Shield, title: 'Encrypted Storage', desc: 'All documents encrypted at rest with server-side encryption.' },
  { icon: Clock, title: 'Time-Limited Access', desc: 'Download links expire in 300 seconds — no permanent URLs.' },
  { icon: Users, title: 'Role-Based Access', desc: 'Four-tier permission system controls who sees what.' },
  { icon: Zap, title: 'AI Privacy', desc: 'Your data is never used to train any AI model.' },
]

const Security = () => (
  <section className="gradient-dark">
    <div className="section-padding">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-brand-mint mb-4">
          Security & Trust
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          custom={1}
          className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4"
        >
          Enterprise-Grade Protection.
        </motion.h2>
        <motion.p variants={fadeInUp} custom={2} className="text-lg text-gray-400 leading-relaxed max-w-3xl mb-12">
          Your data is the foundation of your strata business. We protect it with the same
          security infrastructure trusted by banks and government agencies.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          {securityFeatures.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              custom={i}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-cobalt/20 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-brand-cobalt" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
)

/* ──────────────────── WHY NEHLA ──────────────────────── */
const whyNehla = [
  { icon: Target, title: 'Category Shift', desc: "We're not selling a tool — we're providing a digital workforce that does the work for you." },
  { icon: Cpu, title: 'AI-Native Architecture', desc: 'Built from the ground up with AI at the core, not bolted on as an afterthought.' },
  { icon: Shield, title: 'Compliance First', desc: 'NSW, QLD, and VIC legislation encoded into every workflow — always audit-ready.' },
  { icon: TrendingUp, title: 'Scale Without Headcount', desc: 'Grow your portfolio without proportionally growing your admin team.' },
]

const WhyNehla = () => (
  <section className="bg-white">
    <div className="section-padding">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-brand-cobalt mb-4">
          Why NEHLA
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          custom={1}
          className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight mb-12"
        >
          Not Software. An Operations Team.
        </motion.h2>

        <div className="space-y-4">
          {whyNehla.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              custom={i + 2}
              className="flex items-start gap-6 p-6 rounded-xl bg-brand-offwhite border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-cobalt/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-brand-cobalt" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
                <p className="text-brand-body mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-brand-cobalt font-semibold hover:underline text-lg"
          >
            Learn more about our story
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

/* ──────────────────── WAITLIST CTA ────────────────────── */
const WaitlistCTA = () => (
  <section id="waitlist" className="relative overflow-hidden">
    <div className="gradient-cta">
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
            Ready to See Your New Operations Team in Action?
          </motion.h2>
          <motion.p variants={fadeInUp} custom={1} className="mt-4 text-lg text-white/80 leading-relaxed">
            We'd love to show you how NEHLA is helping strata agencies reclaim their time
            and lead their communities.
          </motion.p>

          <motion.form
            variants={fadeInUp}
            custom={2}
            className="mt-10 max-w-xl mx-auto"
            onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const name = formData.get('name')
              const email = formData.get('email')
              const company = formData.get('company')
              if (name && email && company) {
                alert('Thank you for pre-registering! We will be in touch shortly.')
                e.target.reset()
              }
            }}
          >
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                aria-label="Your full name"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 text-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Work Email Address"
                aria-label="Work email address"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 text-lg"
              />
              <input
                type="text"
                name="company"
                placeholder="Agency / Company Name"
                aria-label="Agency or company name"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 text-lg"
              />
              <button
                type="submit"
                className="w-full btn-mint text-lg gap-2"
              >
                Request Early Access
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.form>

          <motion.div
            variants={fadeInUp}
            custom={3}
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/60"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              No payment required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              6 months free on launch
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Priority onboarding
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
)

/* ──────────────────── LANDING PAGE ────────────────────── */
const LandingPage = () => (
  <>
    <SEO
      title="NEHLA Strata Hub — The Intuitive Engine for the Next Era of Strata"
      description="The AI-powered operations team for modern strata managers. Automated compliance, document extraction, email intelligence, and task management. Join our Early Adopter program — only 12 spots, 6 months free."
      path="/"
    />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "name": "NEHLA",
              "legalName": "Nehla Pty Ltd",
              "url": "https://nehla.com.au",
              "logo": "https://nehla.com.au/logo.png",
              "description": "AI-powered digital workforce for Australian strata management. Automated compliance, data entry, and operations.",
              "areaServed": { "@type": "Country", "name": "Australia" },
              "contactPoint": { "@type": "ContactPoint", "email": "hello@nehla.ai", "contactType": "sales" }
            },
            {
              "@type": "WebSite",
              "name": "NEHLA Strata Hub",
              "url": "https://nehla.com.au",
              "description": "The first AI digital workforce for strata management in Australia."
            }
          ]
        })}
      </script>
    </Helmet>
    <Hero />
    <WhatIsNehla />
    <Foundation />
    <TaskManager />
    <DocumentExtraction />
    <ExtractionShowcase />
    <EmailIntegration />
    <Compliance />
    <Transformation />
    <Security />
    <WhyNehla />
    <WaitlistCTA />
  </>
)

export default LandingPage
