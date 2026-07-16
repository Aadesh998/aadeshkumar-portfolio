import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '1+', label: 'years of professional experience' },
  { value: '7,000+', label: 'registered users served in production' },
  { value: '3', label: 'platforms shipped end-to-end' },
  { value: '8.7', label: 'CGPA — B.Tech Computer Science' },
]

export default function Intro() {
  return (
    <section id="about" className="bg-[#f4f3f1] text-[#121212]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[240px_1fr] md:px-10 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#experience"
            className="group inline-flex items-center gap-3 rounded-full border border-[#121212]/25 px-6 py-3.5 text-sm font-semibold transition-all hover:bg-[#121212] hover:text-white"
          >
            How I Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="font-display max-w-3xl text-2xl font-semibold leading-snug tracking-tight md:text-4xl"
          >
            I build the systems behind the product — APIs, queues, caches, and
            cloud infrastructure that stay fast and upright under real traffic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-[#121212]/70 md:text-lg"
          >
            <p>
              At Synergy Labs I engineer and operate imagine.bo, a consumer-facing
              AI platform on AWS — from Go and Python services to zero-downtime
              deploys behind Nginx and Caddy. Reliability, observability, and
              clean system design aren't add-ons; they're built in from day one.
            </p>
            <p>
              I care about the full lifecycle: requirements, design, development,
              testing, deployment, and operations — translating complex problems
              into scalable, maintainable software with clear communication
              throughout.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-[#121212]/10 pt-10 md:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm leading-snug text-[#121212]/60">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
