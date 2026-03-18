import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO'
import blogPosts from '../blogData'
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
            Early Adopter Program - Only 12 Spots
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
            when we pre-launch in April 2026.
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

/* ───────────────────── PAIN POINT ────────────────────── */
const PainPoint = () => (
  <section className="bg-white">
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
          className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight"
        >
          Running a Strata Agency Shouldn't Mean Drowning in Admin
        </motion.h2>
        <motion.div variants={fadeInUp} custom={1} className="w-48 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint mt-6 mb-8 rounded-full mx-auto" />
        <motion.p variants={fadeInUp} custom={2} className="text-lg text-brand-body leading-relaxed">
          Your strata managers spend up to 70-80% of their day on repetitive back-office
          tasks - chasing compliance deadlines, manually processing levy notices, copying data
          from emails into spreadsheets, and filing documents one by one. Meanwhile, the work
          that actually grows your agency - building owner relationships, winning new buildings,
          and providing strategic advice - gets pushed to the margins.
        </motion.p>
        <motion.p variants={fadeInUp} custom={3} className="mt-6 text-xl font-semibold text-brand-navy">
          NEHLA changes that equation.
        </motion.p>
      </motion.div>
    </div>
  </section>
)

/* ───────────────────── WHAT IS NEHLA ────────────────────── */
const WhatIsNehla = () => (
  <section className="bg-brand-offwhite">
    <div className="section-padding">
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight"
        >
          Your Agency's AI-Powered Digital Workforce.
        </motion.h2>
        <motion.div variants={fadeInUp} custom={1} className="w-48 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint mt-6 mb-8 rounded-full" />
        <motion.p variants={fadeInUp} custom={2} className="text-lg text-brand-body leading-relaxed">
          NEHLA is your agency's AI-powered digital workforce. It handles the repetitive
          operational work - compliance tracking, document processing, email triage, and
          task management - so your strata managers can focus on what matters: your buildings
          and their owners. Built by a strata agency founder who lived these problems every day.
        </motion.p>
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
    desc: 'Invoices, insurance certs, legal notices, meeting minutes - any document type.',
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
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold text-white tracking-tight"
        >
          Task-Driven at the Core
        </motion.h2>
        <motion.p variants={fadeInUp} custom={2} className="mt-4 text-lg text-gray-300 leading-relaxed">
          Every piece of data that enters NEHLA flows through an automated pipeline.
          The system doesn't just store information - it understands it, processes it, and takes action.
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
            <p className="text-gray-300 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

/* ──────────────────── TASK MANAGER ────────────────────── */
const taskFeatures = [
  { icon: Cpu, text: 'AI-generated summaries for every task', color: 'text-brand-cobalt', bg: 'bg-brand-cobalt/10' },
  { icon: CheckCircle, text: 'Suggested actions ranked by priority', color: 'text-brand-mint', bg: 'bg-brand-mint/10' },
  { icon: Mail, text: 'Full trail linked to each task', color: 'text-brand-cobalt', bg: 'bg-brand-cobalt/10' },
  { icon: Layers, text: 'Board, table, calendar & timeline views', color: 'text-brand-mint', bg: 'bg-brand-mint/10' },
]

const TaskManager = () => (
  <section id="features" className="bg-white">
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
            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight"
            >
              AI That Works Your<br />Task List for You.
            </motion.h2>
            <motion.div variants={fadeInUp} custom={2} className="w-48 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint mt-6 mb-8 rounded-full" />
            <motion.p variants={fadeInUp} custom={3} className="text-lg text-brand-body leading-relaxed mb-8">
              Every email, document, and compliance event flows into a unified task board.
              NEHLA's AI reads the context, summarises the issue, and proposes the next steps -
              before you even open the task.
            </motion.p>
            <motion.div variants={fadeInUp} custom={4} className="space-y-4">
              {taskFeatures.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${f.bg} flex items-center justify-center flex-shrink-0`}>
                    <f.icon className={`w-4 h-4 ${f.color}`} />
                  </div>
                  <span className="text-brand-body">{f.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} custom={3} className="relative">
            <div className="overflow-hidden shadow-2xl border border-gray-200" style={{ borderRadius: '20px' }}>
              <img
                src="/screenshots/task-manager.webp"
                alt="NEHLA Task Manager - AI-powered Kanban board with task summaries and suggested actions"
                className="w-full h-auto"
                width={1523}
                height={1143}
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
  { num: '01', title: 'Identify', desc: 'AI recognises document type automatically - invoice, insurance cert, notice, minutes.' },
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
        <motion.h2
          variants={fadeInUp}
          custom={1}
          className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4 text-center"
        >
          Advanced Document Extraction
        </motion.h2>
        <motion.p variants={fadeInUp} custom={2} className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 text-center">
          NEHLA's AI engine doesn't just scan documents, it understands them. When a document
          enters the system, the engine automatically identifies what it is, matches it to
          regulatory requirements, and takes the right action.
        </motion.p>

        <motion.div variants={fadeInUp} custom={3} className="space-y-0 max-w-2xl mx-auto">
          {extractionSteps.map((step, i) => (
            <div key={step.num} className="flex items-start gap-6 relative">
              {/* Vertical connector */}
              {i < extractionSteps.length - 1 && (
                <div className="absolute left-6 top-14 w-0.5 h-8 bg-brand-cobalt" />
              )}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                i === extractionSteps.length - 1
                  ? 'bg-brand-mint text-brand-navy'
                  : 'bg-brand-cobalt text-white'
              }`}>
                {step.num}
              </div>
              <div className="pb-10 pt-1">
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-gray-300 mt-1">{step.desc}</p>
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
  { icon: FileText, text: 'Automated data extraction from any document', color: 'text-brand-cobalt', bg: 'bg-brand-cobalt/10' },
  { icon: Cpu, text: 'AI-powered chat for instant document Q&A', color: 'text-brand-cobalt', bg: 'bg-brand-cobalt/10' },
  { icon: CheckCircle, text: 'Extracted fields ready to approve or edit', color: 'text-brand-mint', bg: 'bg-brand-mint/10' },
  { icon: Layers, text: 'Auto-tagging and smart file naming', color: 'text-brand-mint', bg: 'bg-brand-mint/10' },
]

const ExtractionShowcase = () => (
  <section id="documents" className="bg-white">
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
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight"
            >
              Read, Extract,<br />and Ask - Instantly.
            </motion.h2>
            <motion.div variants={fadeInUp} custom={1} className="w-48 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint mt-6 mb-8 rounded-full" />
            <motion.p variants={fadeInUp} custom={3} className="text-lg text-brand-body leading-relaxed mb-4">
              Upload any document and NEHLA's AI engine extracts key data automatically -
              building details, lot entitlements, dates, parties, and compliance fields.
              No manual data entry required.
            </motion.p>
            <motion.p variants={fadeInUp} custom={4} className="text-lg text-brand-body leading-relaxed mb-8">
              Need a quick answer? Ask the built-in chat anything about the document -
              instead of scrolling through pages, just type your question and get an instant,
              contextual response.
            </motion.p>
            <motion.div variants={fadeInUp} custom={5} className="space-y-4">
              {extractionFeatures.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${f.bg} flex items-center justify-center flex-shrink-0`}>
                    <f.icon className={`w-4 h-4 ${f.color}`} />
                  </div>
                  <span className="text-brand-body">{f.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} custom={3} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="/screenshots/document-extraction.webp"
                alt="NEHLA Document Extraction - AI-powered document analysis with chat and field extraction"
                className="w-full h-auto"
                width={1550}
                height={1143}
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
  <section id="email" className="gradient-dark">
    <div className="section-padding">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4"
        >
          Your Inbox, Automated.
        </motion.h2>
        <motion.p variants={fadeInUp} custom={2} className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-12">
          Email is the biggest time sink in strata management. NEHLA integrates directly with each
          building's mailbox, analyses every incoming email and its attachments, and takes action -
          before you even open it.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeInUp}
            custom={3}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint" />
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
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint" />
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
              src="/screenshots/email-integration.webp"
              alt="NEHLA Email Integration - per-building mailbox with AI summaries and suggested actions"
              className="w-full h-auto"
              width={1523}
              height={1143}
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
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight"
        >
          Your Digital Compliance Guardrail.
        </motion.h2>
        <motion.div variants={fadeInUp} custom={1} className="w-48 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint mt-6 mb-6 rounded-full" />
        <motion.p variants={fadeInUp} custom={2} className="text-lg text-brand-body leading-relaxed max-w-3xl mb-12">
          Australian strata legislation is complex, state-specific, and constantly evolving.
          NEHLA encodes the rules of NSW, QLD, and VIC compliance into automated workflows -
          so nothing slips through the cracks.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-12 items-center">
          <motion.div
            className="space-y-6"
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
                className="bg-brand-navy rounded-2xl p-6 pt-8 overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint" />
                <h3 className="text-2xl font-bold text-white">{s.state}</h3>
                <p className="text-brand-mint text-sm font-semibold mb-3">{s.law}</p>
                <div className="space-y-2">
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

          <motion.div variants={fadeInUp} custom={3} className="relative lg:col-span-2">
            <div className="overflow-hidden shadow-2xl border border-gray-200" style={{ borderRadius: '20px' }}>
              <img
                src="/screenshots/compliance.webp"
                alt="NEHLA Regulations - compliance tracking across NSW, QLD, and VIC"
                className="w-full h-auto"
                width={1523}
                height={1143}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
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
        <motion.h2
          variants={fadeInUp}
          custom={1}
          className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight text-center"
        >
          From Manual to Intelligent
        </motion.h2>
        <motion.div variants={fadeInUp} custom={2} className="w-48 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint mt-6 mb-12 rounded-full mx-auto" />

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
  { icon: Shield, title: 'Auth0 Enterprise Login', desc: 'Industry-leading identity platform with multi-factor authentication.', color: 'text-brand-cobalt' },
  { icon: Layers, title: 'Data Isolation', desc: 'Complete separation between organisations at every level.', color: 'text-brand-mint' },
  { icon: FileText, title: 'Encrypted Storage', desc: 'All documents encrypted at rest with server-side encryption.', color: 'text-brand-cobalt' },
  { icon: Clock, title: 'Time-Limited Access', desc: 'Download links expire in 300 seconds - no permanent URLs.', color: 'text-brand-mint' },
  { icon: Users, title: 'Role-Based Access', desc: 'Four-tier permission system controls who sees what.', color: 'text-brand-cobalt' },
  { icon: Zap, title: 'AI Privacy', desc: 'Your data is never used to train any AI model.', color: 'text-brand-mint' },
]

const Security = () => (
  <section id="security" className="gradient-dark">
    <div className="section-padding">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          custom={1}
          className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4"
        >
          Enterprise-Grade Protection.
        </motion.h2>
        <motion.p variants={fadeInUp} custom={2} className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-12">
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
              <div className="mb-4">
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
)

/* ──────────────────── WHY NEHLA ──────────────────────── */
const whyNehla = [
  { icon: Target, title: 'Category Shift', desc: "We're not selling a tool - we're providing a digital workforce that does the work for you.", color: 'text-brand-cobalt' },
  { icon: Cpu, title: 'AI-Native Architecture', desc: 'Built from the ground up with AI at the core, not bolted on as an afterthought.', color: 'text-brand-cobalt' },
  { icon: Shield, title: 'Compliance First', desc: 'NSW, QLD, and VIC legislation encoded into every workflow - always audit-ready.', color: 'text-brand-cobalt' },
  { icon: TrendingUp, title: 'Scale Without Headcount', desc: 'Grow your portfolio without proportionally growing your admin team.', color: 'text-brand-mint' },
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
        <motion.h2
          variants={fadeInUp}
          custom={1}
          className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight text-center"
        >
          Not Software. An Operations Team.
        </motion.h2>
        <motion.div variants={fadeInUp} custom={2} className="w-48 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint mt-6 mb-12 rounded-full mx-auto" />

        <div className="space-y-4">
          {whyNehla.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              custom={i + 2}
              className="flex items-start gap-6 p-6 rounded-xl bg-brand-offwhite border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-cobalt/10 flex items-center justify-center flex-shrink-0">
                <item.icon className={`w-6 h-6 ${item.color}`} />
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

/* ──────────────────── THE STRATA EDIT ─────────────────── */
const formatDate = (dateStr) => {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

const allInsightCards = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))

const InsightCard = ({ post, i }) => (
  <motion.article
    key={post.slug}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: i * 0.1 }}
    className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover flex flex-col"
  >
    <Link to={`/insights/${post.slug}`} className="block">
      {post.image ? (
        <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
      ) : (
        <div className="w-full h-40 bg-gradient-to-br from-brand-cobalt/10 to-brand-mint/10 flex items-center justify-center">
          <span className="text-brand-cobalt/20 text-3xl font-bold">NEHLA</span>
        </div>
      )}
    </Link>
    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-center gap-3 text-xs text-brand-slate mb-2">
        <span>{formatDate(post.date)}</span>
        <span>{post.readTime}</span>
      </div>
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-cobalt/10 text-brand-cobalt text-xs font-medium w-fit mb-2">
        {post.category}
      </span>
      <Link to={`/insights/${post.slug}`} className="block flex-1">
        <h3 className="text-base font-semibold text-brand-navy mb-1.5 hover:text-brand-cobalt transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="text-brand-body text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </Link>
      <Link
        to={`/insights/${post.slug}`}
        className="inline-flex items-center gap-1.5 text-brand-cobalt font-semibold text-sm mt-3 hover:underline"
      >
        Read more
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </motion.article>
)

const StrataEdit = () => {
  const [carouselPage, setCarouselPage] = useState(0)
  const firstThree = allInsightCards.slice(0, 3)
  const remaining = allInsightCards.slice(3)
  const carouselPages = []
  for (let i = 0; i < remaining.length; i += 3) {
    carouselPages.push(remaining.slice(i, i + 3))
  }
  const totalDots = 1 + carouselPages.length // first page + carousel pages
  const showingFirst = carouselPage === 0
  const currentCards = showingFirst ? firstThree : carouselPages[carouselPage - 1] || []

  return (
    <section className="bg-brand-offwhite">
      <div className="section-padding">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-tight text-center"
          >
            The Strata Edit
          </motion.h2>
          <motion.div variants={fadeInUp} custom={1} className="w-48 h-1 bg-gradient-to-r from-brand-cobalt to-brand-mint mt-6 mb-4 rounded-full mx-auto" />
          <motion.p variants={fadeInUp} custom={2} className="text-lg text-brand-body text-center mb-12">
            Industry insights for modern strata management in Australia.
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={carouselPage}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              {currentCards.map((post, i) => (
                <InsightCard key={post.slug} post={post} i={i} />
              ))}

              {/* More Insights tile on last carousel page or if few posts */}
              {(carouselPage === totalDots - 1 || currentCards.length < 3) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: currentCards.length * 0.1 }}
                >
                  <Link
                    to="/insights"
                    className="bg-gradient-to-br from-brand-cobalt to-brand-mint rounded-2xl h-full min-h-[280px] flex flex-col items-center justify-center p-8 text-center card-hover"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                      <ArrowRight className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">More Insights</h3>
                    <p className="text-white/80 text-sm">
                      Explore all articles from The Strata Edit
                    </p>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          {totalDots > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalDots }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCarouselPage(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    carouselPage === i
                      ? 'bg-brand-cobalt w-8'
                      : 'bg-gray-300 hover:bg-brand-cobalt/50 w-3'
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

/* ──────────────────── WAITLIST CTA ────────────────────── */
const WaitlistCTA = () => {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    const formData = new FormData(e.target)
    try {
      await fetch('https://formsubmit.co/ajax/dan@nehla.com.au', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
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
              We'd love to show you how NEHLA will help strata agencies reclaim their time
              and lead their communities.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-10 max-w-xl mx-auto p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <CheckCircle className="w-16 h-16 text-brand-mint mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">Thank you for registering!</h3>
                <p className="text-white/80 text-lg">
                  We've received your details and will be in touch with you soon to discuss the next steps.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeInUp}
                custom={2}
                className="mt-10 max-w-xl mx-auto"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_subject" value="New Early Adopter Registration - NEHLA" />
                <input type="hidden" name="_template" value="table" />
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
                    disabled={submitting}
                    className="w-full btn-mint text-lg gap-2 disabled:opacity-70"
                  >
                    {submitting ? 'Submitting...' : 'Request Early Access'}
                    {!submitting && <ArrowRight className="w-5 h-5" />}
                  </button>
                </div>
              </motion.form>
            )}

            {!submitted && (
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
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── LANDING PAGE ────────────────────── */
const LandingPage = () => (
  <>
    <SEO
      title="NEHLA Strata Hub - The Intuitive Engine for the Next Era of Strata"
      description="The AI-powered operations team for modern strata managers. Automated compliance, document extraction, email intelligence, and task management. Join our Early Adopter program - only 12 spots, 6 months free."
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
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nehla.com.au/" }
              ]
            },
            {
              "@type": "SoftwareApplication",
              "name": "NEHLA Strata Hub",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "AI-powered digital workforce for strata management. Automates compliance, document extraction, email processing, and task management.",
              "offers": {
                "@type": "Offer",
                "name": "Early Adopter Program",
                "description": "6 months free for the first 12 strata agencies",
                "price": "0",
                "priceCurrency": "AUD",
                "availability": "https://schema.org/PreOrder"
              },
              "provider": {
                "@type": "Organization",
                "name": "Nehla Pty Ltd",
                "url": "https://nehla.com.au"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does NEHLA handle data entry?",
                  "acceptedAnswer": { "@type": "Answer", "text": "NEHLA uses AI to provide instant processing of documents, invoices, and forms - eliminating hours of manual typing." }
                },
                {
                  "@type": "Question",
                  "name": "How does NEHLA manage compliance?",
                  "acceptedAnswer": { "@type": "Answer", "text": "NEHLA encodes NSW, QLD, and VIC strata legislation into automated workflows, keeping your agency compliant on autopilot." }
                },
                {
                  "@type": "Question",
                  "name": "How does NEHLA handle emails?",
                  "acceptedAnswer": { "@type": "Answer", "text": "NEHLA integrates with each building's mailbox, reads and classifies every incoming email, and creates tasks with AI-generated summaries and suggested actions." }
                },
                {
                  "@type": "Question",
                  "name": "How does NEHLA handle documents?",
                  "acceptedAnswer": { "@type": "Answer", "text": "NEHLA's AI engine automatically identifies document types, extracts key data, cross-references against regulatory requirements, and takes action - auto-classifying and making everything searchable." }
                },
                {
                  "@type": "Question",
                  "name": "Is my data secure with NEHLA?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. NEHLA uses Auth0 enterprise login, complete data isolation between organisations, encrypted storage, time-limited download links, role-based access control, and never uses your data to train AI models." }
                }
              ]
            }
          ]
        })}
      </script>
    </Helmet>
    <Hero />
    <PainPoint />
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
    <StrataEdit />
    <WaitlistCTA />
  </>
)

export default LandingPage
