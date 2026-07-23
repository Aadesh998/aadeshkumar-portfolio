import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

type CaseStudy = {
  id: string
  name: string
  tagline: string
  monogram: string
  color: string
  pitch: string
  links: { label: string; href: string }[]
  flow: string[]
  capabilities: string[]
  underTheHood: { title: string; detail: string }[]
  tags: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 'imaginebo',
    name: 'imagine.bo',
    tagline: "World's first outcome-based vibe coding platform",
    monogram: 'im',
    color: '#2563eb',
    pitch:
      'imagine.bo turns natural-language ideas into working web apps. A user opens a chat, describes what they want, and the platform generates a real, deployable app — frontend, optional backend, database, deployment, live URL — then keeps refining it as they chat. When AI hits its limit, a marketplace of human developers picks up the same session where the AI left off. Users get a preview subdomain instantly, a custom domain in one click, and can export the whole project to their own GitHub repo — no lock-in.',
    links: [
      { label: 'Visit imagine.bo', href: 'https://imagine.bo' },
      { label: 'Open the app', href: 'https://app.imagine.bo' },
      { label: 'Read the Handbook', href: 'https://handbook.imagine.bo' },
      { label: 'API reference (Swagger)', href: 'https://api.imagine.bo/docs' },
    ],
    flow: [
      "User sends a message — the AI interprets intent and updates the project's PRD if the scope changed.",
      'AI edits or generates code, streaming live session events (thinking, generating, status_change) to the dashboard.',
      'The build deploys to a live <slug>.preview.imagine.bo URL, and the user sees the change plus a summary of what was modified.',
      "Each meaningful pass atomically debits one spark from the user's balance; when the AI hits its limit, the session escalates to a human developer in the marketplace — same chat, no context switch.",
    ],
    capabilities: [
      'Real, deployable code from day one — not a mockup — with a live URL the moment it is generated',
      'Custom domain in one click via DomainConnect, or manual DNS — not just a subdomain',
      'A marketplace of vetted human developers picks up the same session when AI stalls',
      'Export the entire project to your own GitHub repo at any time — no lock-in',
      'Full-stack apps with authentication, a database, APIs, and business logic — not just static pages',
    ],
    underTheHood: [
      {
        title: 'Nine-state session machine',
        detail:
          'Every session moves through pending → analyzing → generating_frontend → generating_backend → building → completed (or fails at any stage), which controls exactly what the UI allows at each step.',
      },
      {
        title: 'Idempotent spark billing',
        detail:
          'Spark deduction is one atomic SET sparks = sparks - N WHERE sparks >= N update — no double-charging, no going negative — and a session can\'t be re-debited for an action it was already charged for.',
      },
      {
        title: 'One-click custom domains',
        detail:
          "A DomainConnect flow signs the request and redirects to the registrar's own one-click UI, auto-writing DNS in ~30 seconds; registrars without support fall back to manual DNS plus ACME-issued SSL, reconciled by a cron every 10 minutes.",
      },
      {
        title: 'Sparks-based pricing',
        detail:
          'Free through Enterprise plans, metered per AI action rather than per seat, with roll-over top-up packs and automatic refunds when a build fails on the platform side.',
      },
      {
        title: 'Seven enforced roles',
        detail:
          'User, Developer, Ambassador, Client, Support, Admin, and Super Admin — each gated at both the API (middleware.AuthorizeRoles) and the frontend routing layer.',
      },
      {
        title: 'GitHub-native, no lock-in',
        detail:
          "Sign in with GitHub, link or import a repo, and imagine.bo ignores its own push commits to avoid redeploy loops — export the codebase and hand it to any engineer, any time.",
      },
    ],
    tags: [
      'Go (Gin)',
      'Python',
      'AWS',
      'Docker',
      'Nginx / Caddy',
      'DomainConnect',
      'ACME / SSL',
      'RAG',
      'GitHub Integration',
    ],
  },
  {
    id: 'vnytros',
    name: 'vnytros.dev',
    tagline: 'One-click custom-domain connection for vibe-coding platforms',
    monogram: 'vn',
    color: '#ea580c',
    pitch:
      "vnytros.dev lets vibe-coding and app-builder platforms give their users real custom domains without writing a line of DNS code. A user types their domain, authorizes with their DNS provider over OAuth, and vnytros's Domain Connect integration writes every required record automatically — then verifies propagation and notifies the host app by webhook.",
    links: [
      { label: 'Visit vnytros.dev', href: 'https://vnytros.dev' },
      { label: 'Read the docs', href: 'https://docs.vnytros.dev/docs' },
      { label: 'Try the live MCP server', href: 'https://mcp.vnytros.dev/mcp' },
      {
        label: 'Domain Connect template on GitHub',
        href: 'https://github.com/Domain-Connect/Templates/blob/master/vnytros.dev.custom-domain.json',
      },
    ],
    flow: [
      'Detect — GET /v1/detect?domain=… identifies who runs the domain\'s DNS and whether it supports one-click Domain Connect setup.',
      'Connect — POST /v1/connect/auto builds a signed Domain Connect "apply" URL for that domain.',
      "Authorize — the customer approves the record changes on their provider's own consent screen (or through Vnytros's OAuth 2.1 server, for MCP and third-party clients).",
      'Verify & notify — vnytros.dev confirms the records propagated and fires a domain.connected webhook (or domain.error if the provider rejected it).',
    ],
    capabilities: [
      'Detect which DNS provider runs a domain and whether it is Domain-Connect-capable',
      'Look up live DNS records (A, AAAA, MX, TXT, NS, CNAME) for any domain',
      "Connect a domain via a one-click apply URL, or by writing records directly through a provider API",
      "Verify propagation before marking a domain as connected",
      'Manage linked domains, API keys, and webhooks from one dashboard',
    ],
    underTheHood: [
      {
        title: 'Predictable REST API',
        detail:
          'A single JSON API at api.vnytros.dev — no envelope wrapper on success, one consistent error shape ({ Code, Message, StatusCode }) across every endpoint.',
      },
      {
        title: 'Two-tier auth',
        detail:
          'Scoped API keys for server-to-server calls (detect, connect, verify) and short-lived, 15-minute JWT access tokens for account/dashboard actions.',
      },
      {
        title: 'OAuth 2.1 authorization server',
        detail:
          'Full discovery (/.well-known/oauth-authorization-server), dynamic client registration, and PKCE — the same server the MCP integration and third-party apps authenticate through.',
      },
      {
        title: 'Domain Connect service provider',
        detail:
          'vnytros.dev is itself a registered Domain Connect provider (providerId: vnytros.dev), serving the signed .well-known discovery and template endpoints that DNS registrars call directly.',
      },
      {
        title: 'Reliable webhooks',
        detail:
          'Domain lifecycle events (domain.connected, domain.error) are queued, retried, and logged — queryable by status, event type, API key, or date range.',
      },
      {
        title: 'Usage-based plans',
        detail:
          'From a free Starter tier (1 domain) up to Pro (unlimited domains, priority support, full API access) — plan data served publicly for pricing pages.',
      },
    ],
    tags: [
      'Go',
      'OAuth 2.1',
      'PKCE',
      'Domain Connect Protocol',
      'Webhooks',
      'GCP',
      'Cloudflare',
      'MCP',
      'Streamable HTTP',
    ],
  },
]

export default function CaseStudies() {
  return (
    <section className="bg-[#121212] text-white">
      <div className="mx-auto max-w-7xl px-5 pt-28 pb-8 md:px-10 md:pt-36 md:pb-12">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-semibold tracking-tight md:text-6xl"
        >
          Under the hood<span className="text-white/30">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 max-w-xl text-white/60 md:text-lg"
        >
          Deeper look at what a couple of these products actually do and how
          they're built.
        </motion.p>

        <div className="mt-16 divide-y divide-white/15 border-t border-white/15">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              id={`case-study-${cs.id}`}
              className="py-14 md:py-20"
            >
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span
                    className="font-display flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white md:h-16 md:w-16 md:text-xl"
                    style={{ backgroundColor: cs.color }}
                  >
                    {cs.monogram}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                      {cs.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/60 md:text-base">
                      {cs.tagline}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {cs.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white underline underline-offset-4 transition-opacity hover:opacity-80"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>

              <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
                {cs.pitch}
              </p>

              <div className="mt-12 grid gap-10 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50">
                    How it works
                  </h4>
                  <ol className="mt-5 space-y-4">
                    {cs.flow.map((step, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.5, delay: i * 0.06 }}
                        className="flex gap-3 text-sm leading-relaxed text-white/70 md:text-base"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/25 text-[11px] font-semibold text-white/60">
                          {i + 1}
                        </span>
                        {step}
                      </motion.li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50">
                    What you can do with it
                  </h4>
                  <ul className="mt-5 space-y-3">
                    {cs.capabilities.map((c, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.5, delay: i * 0.06 }}
                        className="flex gap-3 text-sm leading-relaxed text-white/70 md:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                        {c}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50">
                  Under the hood
                </h4>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {cs.underTheHood.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                      className="rounded-xl border border-white/12 p-5 transition-colors hover:border-white/30"
                    >
                      <h5 className="font-display text-base font-semibold tracking-tight">
                        {item.title}
                      </h5>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">
                        {item.detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {cs.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
