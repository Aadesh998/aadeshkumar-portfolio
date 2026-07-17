import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    restDelta: 0.001,
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const lightText = !menuOpen && !scrolled

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[#121212]"
      />

      <a
        href="#top"
        onClick={() => setMenuOpen(false)}
        className={`font-display fixed left-5 top-6 z-[70] text-xl font-semibold tracking-tight transition-colors duration-300 md:left-8 ${
          menuOpen ? 'text-white' : lightText ? 'text-white' : 'text-[#121212]'
        }`}
      >
        aadesh<span className="opacity-40">.</span>
      </a>

      {/* desktop pill nav */}
      <nav className="fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 md:block">
        <ul className="flex items-center gap-1 rounded-full bg-white/85 p-1.5 shadow-lg shadow-black/10 backdrop-blur-md">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-[#121212] transition-colors hover:bg-[#121212] hover:text-white md:px-5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a
        href="#contact"
        className={`fixed right-5 top-6 z-50 hidden text-sm font-semibold underline underline-offset-4 transition-colors duration-300 md:right-8 md:block ${
          scrolled ? 'text-[#121212]' : 'text-white'
        }`}
      >
        Contact
      </a>

      {/* mobile hamburger */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        className={`fixed right-5 top-5 z-[70] flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 md:hidden ${
          menuOpen
            ? 'bg-white text-[#121212]'
            : scrolled
              ? 'bg-[#121212] text-white'
              : 'bg-white/15 text-white backdrop-blur-md'
        }`}
      >
        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[65] bg-[#121212] md:hidden"
          >
            <nav className="flex h-full flex-col items-start justify-center gap-1 px-8">
              {[...links, { label: 'Contact', href: '#contact' }].map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05, ease: 'easeOut' }}
                  className="font-display py-2.5 text-4xl font-semibold tracking-tight text-white"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
