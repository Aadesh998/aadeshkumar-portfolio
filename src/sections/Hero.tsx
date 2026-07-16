import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
  const nameY = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <header
      ref={ref}
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#121212] text-white"
    >
      {/* subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-40 pt-32 md:px-10 md:pb-48"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-sm font-medium tracking-wide text-white/70">
            Open to backend & platform engineering roles
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="font-display max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-8xl"
        >
          Backend led.
          <br />
          <span className="text-white/40">Human focused.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="mt-8 max-w-xl text-base leading-relaxed text-white/60 md:text-lg"
        >
          I'm Aadesh Kumar — a software engineer who designs, ships, and operates
          production backend systems in Go and Python on AWS and GCP.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold transition-all hover:bg-white hover:text-[#121212]"
          >
            See My Work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <span className="inline-flex items-center gap-2 text-sm text-white/50">
            <MapPin className="h-4 w-4" /> New Delhi, India
          </span>
        </motion.div>
      </motion.div>

      {/* giant name */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        style={{ scale: nameScale, y: nameY }}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden origin-bottom"
      >
        <div className="font-display whitespace-nowrap text-center text-[22vw] font-bold leading-[0.85] tracking-tighter text-white/95">
          aadesh.
        </div>
      </motion.div>
    </header>
  )
}
