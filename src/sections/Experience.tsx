import { motion } from 'framer-motion'
import { ArrowRight, Award } from 'lucide-react'

const highlights = [
  'Engineered and deployed imagine.bo on AWS — Go (Gin) and Python services, REST APIs, and the full production lifecycle from design to release.',
  'Architected automatic subdomain provisioning and real-time preview deployments with dynamic Nginx / Caddy reverse proxies and Docker orchestration — zero-downtime rollouts.',
  'Scaled the platform to 1,000+ paid and 7,000+ registered users; owned CI/CD pipelines, incident triage, and root-cause analysis to hold uptime SLAs.',
  'Introduced Redis caching, right-sized EC2 capacity, and OpenTelemetry + Grafana observability — measurably improving response times across the stack.',
  'Hardened security: IAM roles over static credentials, HMAC signing, token-based auth, and CloudWatch alarms.',
]

const achievements = [
  'Cloudflare template approval — vnytros.dev architecture recognized by Cloudflare',
  'Intern of the Month — Deep Learning team, RnPSoft Pvt Ltd',
  '2nd Place — ModelWiz: The ML Arena, Kaggle (2024)',
]

export default function Experience() {
  return (
    <section id="experience" className="bg-[#121212] text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-semibold tracking-tight md:text-6xl"
        >
          Designed to deliver<span className="text-white/30">.</span>
        </motion.h2>

        {/* role row */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-t border-white/15"
        >
          <div className="group flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-white/15 py-10 md:py-14">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:bg-white group-hover:text-[#121212] md:h-16 md:w-16">
              <ArrowRight className="h-5 w-5 md:h-7 md:w-7" />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-3xl font-semibold tracking-tight md:text-6xl">
                Software Development Engineer
              </h3>
              <p className="mt-3 text-base text-white/60 md:text-lg">
                Synergy Labs · Gurgaon, Haryana · May 2025 — Present
              </p>
            </div>
            <span className="rounded-full border border-emerald-400/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              Current
            </span>
          </div>

          <ul className="grid gap-x-12 gap-y-5 border-b border-white/15 py-10 md:grid-cols-2 md:py-12">
            {highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
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
            <h3 className="font-display text-3xl font-semibold tracking-tight md:text-6xl">
              B.Tech, Computer Science
            </h3>
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
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 rounded-xl border border-white/12 p-5 transition-colors hover:border-white/30"
              >
                <Award className="h-5 w-5 shrink-0 text-white/60" />
                <p className="text-sm leading-relaxed text-white/75">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
