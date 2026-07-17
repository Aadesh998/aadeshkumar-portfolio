import { useEffect, useRef, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'

// Blocky pixel silhouette of a running dino, inspired by the offline browser game.
const DINO_GRID = [
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
]
const CELL = 3
const DINO_W = DINO_GRID[0].length * CELL
const DINO_H = DINO_GRID.length * CELL

export default function CursorPlayground({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement | null>
}) {
  const [active, setActive] = useState(false)
  const [hopKey, setHopKey] = useState(0)
  const x = useMotionValue(-999)
  const y = useMotionValue(-999)
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.5 })
  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${springX}px ${springY}px, rgba(255,255,255,0.08), transparent 55%)`
  const lastX = useRef(0)
  const lastHop = useRef(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const relX = e.clientX - rect.left
      const relY = e.clientY - rect.top
      x.set(relX)
      y.set(relY)

      const dx = Math.abs(relX - lastX.current)
      lastX.current = relX
      const now = performance.now()
      if (dx > 24 && now - lastHop.current > 220) {
        lastHop.current = now
        setHopKey((k) => k + 1)
      }
    }
    const onEnter = () => setActive(true)
    const onLeave = () => setActive(false)

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [containerRef, x, y])

  return (
    <>
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0 z-10"
      />
      <motion.div
        aria-hidden
        style={{ x: springX, y: springY }}
        animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.6 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="pointer-events-none absolute left-0 top-0 z-40"
      >
        <motion.svg
          key={hopKey}
          width={DINO_W}
          height={DINO_H}
          viewBox={`0 0 ${DINO_W} ${DINO_H}`}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.32, ease: 'easeOut' }}
          style={{ transform: `translate(-${DINO_W / 2}px, -${DINO_H + 16}px)` }}
        >
          {DINO_GRID.map((row, ry) =>
            row.map((cell, cx) =>
              cell ? (
                <rect
                  key={`${ry}-${cx}`}
                  x={cx * CELL}
                  y={ry * CELL}
                  width={CELL}
                  height={CELL}
                  className="fill-white"
                />
              ) : null,
            ),
          )}
        </motion.svg>
      </motion.div>
    </>
  )
}
