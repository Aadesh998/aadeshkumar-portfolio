import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  tagline: string;
  description: string;
  note?: string;
  tags: string[];
  color: string;
  windowLabel: string;
  href: string;
  monogram: string;
  status?: "company" | "wip";
  secondaryLinks?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    name: "imagine.bo",
    tagline: "Consumer AI platform — Synergy Labs",
    description:
      "Production backend for a consumer-facing AI app: Go (Gin) and Python services, auto subdomain provisioning, real-time preview deploys, zero-downtime rollouts — scaled to 7,000+ users.",
    tags: ["Go (Gin)", "Python", "AWS", "Docker", "Nginx / Caddy"],
    color: "#2563eb",
    windowLabel: "app.imagine.bo",
    href: "https://app.imagine.bo",
    monogram: "im",
    status: "company",
    secondaryLinks: [
      {
        label: "Read the full case study",
        href: "/case-studies#case-study-imaginebo",
      },
      { label: "Read the Handbook", href: "https://handbook.imagine.bo" },
    ],
  },
  {
    name: "vnytros.dev",
    tagline: "One-click DNS automation for vibe-coding platforms",
    description:
      "Lets vibe-coding and app-builder platforms connect a user's custom domain in one link: the user enters their domain, authorizes via OAuth with their registrar, and vnytros.dev auto-configures every DNS record (A/AAAA, CNAME, TXT, MX, DKIM, DMARC) through an accepted Domain Connect provider template — no manual DNS work. Ships with a self-built MCP server, rebuilt on the new Streamable HTTP transport: a single stateless endpoint, OAuth 2.1 with discovery, and resumable streams.",
    note: "Rebuilding the transport was the easy part — connecting my own MCP server to Claude was somehow the hardest bit of the whole project.",
    tags: ["Go", "OAuth 2.1", "Domain Connect", "GCP", "Cloudflare", "MCP", "Streamable HTTP"],
    color: "#ea580c",
    windowLabel: "vnytros.dev",
    href: "https://vnytros.dev",
    monogram: "vn",
    status: "wip",
    secondaryLinks: [
      {
        label: "Read the full case study",
        href: "/case-studies#case-study-vnytros",
      },
      { label: "Try the live MCP server", href: "https://mcp.vnytros.dev/mcp" },
    ],
  },
  {
    name: "SentimentOS",
    tagline: "AI review aggregation & sentiment analysis",
    description:
      "Multi-source review ingestion with a connector-registry ETL, SQS-driven async flows, Redis caching, and LLM-based aspect sentiment enrichment — horizontally scalable on AWS Fargate.",
    tags: ["Go", "AWS Fargate", "SQS", "OpenSearch", "Redis"],
    color: "#6d28d9",
    windowLabel: "sentimentos.ai",
    href: "https://dev.sentimentos.io",
    monogram: "so",
    status: "wip",
  },
];

const statusLabel: Record<NonNullable<Project["status"]>, string> = {
  company: "Company Project",
  wip: "In Progress",
};

const statusStyle: Record<NonNullable<Project["status"]>, string> = {
  company: "border-white/40 text-white bg-white/10",
  wip: "border-amber-300/50 text-amber-200 bg-amber-400/10",
};

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
          style={{ color: p.color === "#121212" ? "#ffffff" : p.color }}
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
  );
}

function ProjectCard({ p, featured }: { p: Project; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`group rounded-2xl p-6 md:p-10 ${
        featured ? "md:flex md:items-center md:gap-12" : ""
      }`}
      style={{ backgroundColor: p.color }}
    >
      <a
        href={p.href}
        target="_blank"
        rel="noreferrer"
        className={`block ${featured ? "md:w-1/2" : ""}`}
      >
        <BrowserWindow p={p} />
      </a>
      <div className={featured ? "mt-8 md:mt-0 md:w-1/2" : "mt-8"}>
        <div className="flex items-start justify-between gap-4">
          <a href={p.href} target="_blank" rel="noreferrer" className="block">
            <div className="flex flex-wrap items-center gap-2">
              <h3
                className={`font-display font-semibold tracking-tight text-white ${
                  featured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
                }`}
              >
                {p.name}
              </h3>
              {p.status && (
                <span
                  className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${statusStyle[p.status]}`}
                >
                  {statusLabel[p.status]}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-white/60">
              {p.tagline}
            </p>
          </a>
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#121212]"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
        <p
          className={`mt-4 text-sm leading-relaxed text-white/75 md:text-base ${
            featured ? "max-w-none" : "max-w-lg"
          }`}
        >
          {p.description}
        </p>
        {p.note && (
          <p
            className={`mt-3 text-sm italic leading-relaxed text-white/60 md:text-base ${
              featured ? "max-w-none" : "max-w-lg"
            }`}
          >
            {p.note}
          </p>
        )}
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
        {p.secondaryLinks && p.secondaryLinks.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {p.secondaryLinks.map((link) =>
              link.href.startsWith("http") ? (
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
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white underline underline-offset-4 transition-opacity hover:opacity-80"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ),
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="bg-[#f4f3f1] text-[#121212]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-semibold tracking-tight md:text-6xl"
        >
          Selected work<span className="text-[#121212]/30">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 max-w-xl text-[#121212]/60 md:text-lg"
        >
          Production systems I've designed, shipped, and operated — from
          consumer AI platforms to event-driven infrastructure.
        </motion.p>

        <div className="mt-14 space-y-6 md:space-y-8">
          <ProjectCard p={featured} featured />
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {rest.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
