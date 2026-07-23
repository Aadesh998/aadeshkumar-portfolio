import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Award } from 'lucide-react'

type Position = {
  title: string
  period: string
  employmentType: 'Full-time' | 'Internship'
  current?: boolean
  description?: string
  highlights?: string[]
}

type CompanyGroup = {
  company: string
  location: string
  totalDuration?: string
  positions: Position[]
}

const experience: CompanyGroup[] = [
  {
    company: 'Synergy Labs',
    location: 'Gurugram, Haryana · On-site',
    totalDuration: '1 yr 3 mos',
    positions: [
      {
        title: 'Software Engineer',
        period: 'May 2026 — Present · 3 mos',
        employmentType: 'Full-time',
        current: true,
        highlights: [
          'Solely designed, built, and deployed the complete imagine.bo backend and system architecture end-to-end — including the preview server infrastructure — without dedicated engineering support.',
          'Designed and developed REST APIs, microservices, and real-time WebSocket connections in Go, optimizing for performance, latency, and scalability.',
          'Built the imagine.bo MCP (Model Context Protocol) server, exposing platform capabilities as standardized tools for AI agents and hosts.',
          'Scaled the platform to 7,000+ active users, managing AWS infrastructure, deployments, and production monitoring.',
          'Built configurable dynamic preview generation and Railway deployment pipelines for generated backend services.',
          'Developed custom domain support (DNS automation, SSL provisioning) and the complete admin platform.',
          'Built a lightweight chatbot using SQLite and Ollama, optimized to run on resource-constrained, Arduino-class hardware.',
          "Leading development of a Shopify/Dukaan-style e-commerce platform integrated with imagine.bo's agentic generation flow.",
          'Run internal tech sessions — project updates and knowledge-sharing on emerging technologies with the engineering team.',
        ],
      },
      {
        title: 'Generative AI Engineer',
        period: 'May 2025 — May 2026 · 1 yr 1 mo',
        employmentType: 'Internship',
        highlights: [
          'Built imagine.bo (Go), an end-to-end AI-powered platform that plans, generates, and deploys full-stack applications.',
          'Owned AI orchestration alongside core platform development — designing agent planning and generation-workflow systems, with MCP support for standardized AI agent interoperability.',
          'Reduced AI code-generation latency and optimized token usage across the generation pipeline.',
          'Integrated multi-provider payments (Stripe, PayPal, Razorpay) and GitHub/Vercel OAuth integrations for automated repo creation, CI setup, and deployments.',
          'Automated the full project lifecycle — repo provisioning, environment config, preview deployments (*.preview.imagine.bo), and production releases.',
          'Developed a RAG application for the FFDC project to enhance knowledge-based responses and data retrieval.',
        ],
      },
    ],
  },
  {
    company: 'Indian Institute of Technology, Roorkee',
    location: 'New Delhi, Delhi · Hybrid',
    positions: [
      {
        title: 'Deep Learning Researcher',
        period: 'Dec 2024 — Apr 2025 · 5 mos',
        employmentType: 'Internship',
        description:
          'Focused on AI-powered healthcare solutions — X-ray image disease segmentation and ECG arrhythmia detection — building intelligent systems that assist medical professionals with earlier detection and better clinical decision-making.',
        highlights: [
          'Fine-tuned a SAM2 model for X-ray image segmentation; when it underperformed, implemented and fine-tuned a SegFormer model instead.',
          'Built the complete training pipeline for the SegFormer model, fine-tuning it across 12 disease categories.',
          'Contributing to a heart arrhythmia (ECG) detection tool — a joint project between IIT Bombay and IIT Roorkee.',
        ],
      },
    ],
  },
  {
    company: 'RnPsoft',
    location: 'Delhi, India · Hybrid',
    positions: [
      {
        title: 'Deep Learning Engineer',
        period: 'May 2024 — Aug 2024 · 4 mos',
        employmentType: 'Internship',
        highlights: [
          'OCR',
          'Vector database for similarity search',
          'LLM model integration',
          'End-to-end pipeline building',
          'Fine tuning',
        ],
      },
    ],
  },
]

const achievements = [
  {
    text: 'Domain Connect template accepted — vnytros.dev added as an official provider template, letting domains on Cloudflare, GoDaddy, and other Domain Connect–enabled registrars auto-configure DNS.',
    href: 'https://github.com/Domain-Connect/Templates/blob/master/vnytros.dev.custom-domain.json',
  },
  {
    text: 'Intern of the Month — Deep Learning team, RnPSoft Pvt Ltd',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7213222955151970304/',
  },
  {
    text: '2nd Place — ModelWiz: The ML Arena, Kaggle (2024)',
    href: 'https://www.linkedin.com/posts/aadesh-191105-kumar_machinelearning-ai-datascience-activity-7245288748437962753-7rmH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADz9CnsBypAa80l9JQz7FT2a5RF-j61CtOg',
  },
  {
    text: 'UHack 3.0, Prayagraj — built Digital Naari Suraksha, a violence-detection system for women’s safety, with team Silent Watchguards',
    href: 'http://linkedin.com/feed/update/urn:li:activity:7255589479309090816/',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-[#121212] text-white">
      <div className="mx-auto max-w-7xl px-5 pt-10 pb-24 md:px-10 md:pt-14 md:pb-36">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-semibold tracking-tight md:text-6xl"
        >
          Designed to deliver<span className="text-white/30">.</span>
        </motion.h2>

        {/* experience */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-t border-white/15"
        >
          {experience.map((group) => (
            <div
              key={group.company}
              className="border-b border-white/15 py-10 md:py-14"
            >
              {/* company header */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 md:h-16 md:w-16">
                  <ArrowRight className="h-5 w-5 md:h-7 md:w-7" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                    {group.company}
                  </h3>
                  <p className="mt-2 text-sm text-white/50 md:text-base">
                    {group.location}
                    {group.totalDuration && ` · ${group.totalDuration}`}
                  </p>
                </div>
              </div>

              {/* positions, nested under the company */}
              <div className="mt-8 space-y-8 border-l border-white/15 pl-6 md:mt-10 md:pl-10">
                {group.positions.map((position) => (
                  <div key={position.title}>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <h4 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                        {position.title}
                      </h4>
                      <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/50">
                        {position.employmentType}
                      </span>
                      {position.current && (
                        <span className="rounded-full border border-emerald-400/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-sm text-white/50">
                      {position.period}
                    </p>

                    {position.description && (
                      <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                        {position.description}
                      </p>
                    )}

                    {position.highlights && (
                      <ul className="mt-4 grid gap-x-12 gap-y-3 md:grid-cols-2">
                        {position.highlights.map((h, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                            className="flex gap-3 text-sm leading-relaxed text-white/70 md:text-base"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                            {h}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* education */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="group flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-white/15 py-10 md:py-14"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:bg-white group-hover:text-[#121212] md:h-16 md:w-16">
            <ArrowRight className="h-5 w-5 md:h-7 md:w-7" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-3xl font-semibold tracking-tight md:text-6xl">
                B.Tech, Computer Science
              </h3>
              <span className="rounded-full border border-sky-400/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300">
                Education
              </span>
            </div>
            <p className="mt-3 text-base text-white/60 md:text-lg">
              Sharda University · Greater Noida · 2022 — 2026 · CGPA 8.7
            </p>
          </div>
        </motion.div>

        {/* achievements */}
        <div className="mt-16 md:mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-widest text-white/50"
          >
            Recognition
          </motion.h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {achievements.map((a, i) => (
              <motion.a
                key={a.text}
                href={a.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex gap-4 rounded-xl border border-white/12 p-5 transition-colors hover:border-white/30"
              >
                <Award className="h-5 w-5 shrink-0 text-white/60" />
                <p className="flex-1 text-sm leading-relaxed text-white/75">
                  {a.text}
                </p>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
