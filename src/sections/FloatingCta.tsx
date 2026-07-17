import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'

export default function FloatingCta() {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 639px)').matches
    if (!isMobile) return
    // appears after the 1.6s entrance delay, then stays visible for 5s
    const timer = setTimeout(() => setOpen(false), 1600 + 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: 1.6, duration: 0.5, ease: 'easeOut' },
          }}
          exit={{
            opacity: 0,
            y: 12,
            scale: 0.96,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
          className="fixed inset-x-5 bottom-5 z-50 rounded-xl bg-[#1d1d1d] p-5 text-white shadow-2xl shadow-black/40 sm:inset-x-auto sm:right-5 sm:w-72"
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Dismiss"
            className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#121212] shadow-md transition-transform hover:scale-110"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <p className="text-sm font-medium leading-snug text-white/90">
            Starting a new project or want to collaborate?
          </p>
          <a
            href="#contact"
            className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#121212] transition-transform hover:scale-[1.02]"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
