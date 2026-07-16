import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
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

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[#121212]"
      />

      <a
        href="#top"
        className={`font-display fixed left-5 top-6 z-50 text-xl font-semibold tracking-tight transition-colors duration-300 md:left-8 ${
          scrolled ? 'text-[#121212]' : 'text-white'
        }`}
      >
        aadesh<span className="opacity-40">.</span>
      </a>

      <nav className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
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
        className={`fixed right-5 top-6 z-50 text-sm font-semibold underline underline-offset-4 transition-colors duration-300 md:right-8 ${
          scrolled ? 'text-[#121212]' : 'text-white'
        }`}
      >
        Contact
      </a>
    </>
  )
}
