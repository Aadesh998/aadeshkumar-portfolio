import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Aadesh998', icon: Github },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aadesh-191105-kumar/',
    icon: Linkedin,
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#121212] text-white">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-24 md:px-10 md:pt-36">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold uppercase tracking-widest text-white/50"
        >
          Starting a new project or want to collaborate?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="font-display mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-8xl"
        >
          Let's build something reliable<span className="text-white/30">.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="mailto:kaadesh18001@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#121212] transition-transform hover:scale-[1.03]"
          >
            <Mail className="h-4 w-4" />
            kaadesh18001@gmail.com
          </a>
          <a
            href="tel:+919599134513"
            className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold transition-colors hover:bg-white hover:text-[#121212]"
          >
            <Phone className="h-4 w-4" />
            +91 95991 34513
          </a>
        </motion.div>

        <div className="mt-20 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl font-semibold tracking-tight">
              aadesh<span className="text-white/40">.</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              Backend software engineer — Go & Python, AWS & GCP. New Delhi,
              India.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Elsewhere
            </h3>
            <ul className="mt-4 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    <s.icon className="h-4 w-4" />
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Site
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                ['About', '#about'],
                ['Work', '#work'],
                ['Experience', '#experience'],
                ['Skills', '#skills'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/40">
          <span>© 2026 Aadesh Kumar. All rights reserved.</span>
          <span>Designed & built with Go-shaped curiosity.</span>
        </div>
      </div>

      {/* giant scroll-revealed wordmark */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        aria-hidden
        className="mt-16 select-none overflow-hidden px-5 md:px-10"
      >
        <div className="font-display -mb-[0.08em] whitespace-nowrap text-center text-[20vw] font-bold leading-[0.85] tracking-tighter text-white/95">
          aadesh.
        </div>
      </motion.div>
    </footer>
  )
}
