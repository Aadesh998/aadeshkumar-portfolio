import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

type Project = {
  name: string
  tagline: string
  description: string
  tags: string[]
  color: string
  windowLabel: string
  href: string
  monogram: string
}

const projects: Project[] = [
  {
    name: 'imagine.bo',
    tagline: 'Consumer AI platform — Synergy Labs',
    description:
      'Production backend for a consumer-facing AI app: Go (Gin) and Python services, auto subdomain provisioning, real-time preview deploys, zero-downtime rollouts — scaled to 7,000+ users.',
    tags: ['Go (Gin)', 'Python', 'AWS', 'Docker', 'Nginx / Caddy'],
    color: '#2563eb',
    windowLabel: 'app.imagine.bo',
    href: 'https://app.imagine.bo',
    monogram: 'im',
  },
  {
    name: 'vnytros.dev',
    tagline: 'Webhook delivery infrastructure',
    description:
      'Event-driven webhook platform built from the ground up on GCP — RabbitMQ queues, HMAC-SHA256 signed deliveries, DNS verification, and an MCP server. Officially approved as a Cloudflare template.',
    tags: ['Go', 'RabbitMQ', 'GCP', 'Cloudflare', 'MCP'],
    color: '#ea580c',
    windowLabel: 'vnytros.dev',
    href: 'https://vnytros.dev',
    monogram: 'vn',
  },
  {
    name: 'SentimentOS',
    tagline: 'AI review aggregation & sentiment analysis',
    description:
      'Multi-source review ingestion with a connector-registry ETL, SQS-driven async flows, Redis caching, and LLM-based aspect sentiment enrichment — horizontally scalable on AWS Fargate.',
    tags: ['Go', 'AWS Fargate', 'SQS', 'OpenSearch', 'Redis'],
    color: '#6d28d9',
    windowLabel: 'sentimentos.ai',
    href: 'https://github.com/Aadesh998',
    monogram: 'so',
  },
  {
    name: 'github.com/Aadesh998',
    tagline: 'Experiments, tools & open source',
    description:
      'More of what I build and break — backend services, infra experiments, and side projects in Go and Python.',
    tags: ['Open Source', 'Go', 'Python'],
    color: '#121212',
    windowLabel: 'github.com/Aadesh998',
    href: 'https://github.com/Aadesh998',
    monogram: 'gh',
  },
]

function BrowserWindow({ p }: { p: Project }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-2xl shadow-black/30 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
      <div className="flex items-center gap-2 border-b border-black/10 bg-[#f4f3f1] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex-1 truncate rounded-full bg-white px-3 py-1 text-[11px] text-black/50">
          {p.windowLabel}
        </span>
      </div>
      <div className="relative flex aspect-[16/9] items-center justify-center bg-[#0e0e0e]">
        <div
          className="font-display text-7xl font-bold tracking-tighter md:text-8xl"
          style={{ color: p.color === '#121212' ? '#ffffff' : p.color }}
        >
          {p.monogram}
          <span className="text-white/40">.</span>
        </div>
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 20%, ${p.color}, transparent 60%)`,
          }}
        />
        <div className="absolute bottom-3 left-4 right-4 flex gap-2 opacity-40">
          <div className="h-1.5 w-1/4 rounded-full bg-white/30" />
          <div className="h-1.5 w-1/6 rounded-full bg-white/20" />
          <div className="h-1.5 w-1/5 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="bg-[#f4f3f1] text-[#121212]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-semibold tracking-tight md:text-6xl"
        >
          Selected work<span className="text-[#121212]/30">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 max-w-xl text-[#121212]/60 md:text-lg"
        >
          Production systems I've designed, shipped, and operated — from consumer
          AI platforms to event-driven infrastructure.
        </motion.p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className={`group block p-6 md:p-10 ${i % 2 === 1 ? 'md:mt-16' : ''}`}
              style={{ backgroundColor: p.color }}
            >
              <BrowserWindow p={p} />
              <div className="mt-8 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wider text-white/60">
                    {p.tagline}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#121212]">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75 md:text-base">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/25 px-3 py-1 text-xs font-medium text-white/85"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
