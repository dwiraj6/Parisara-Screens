import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react'

const INTERACTIVE = 'a, button, input, select, textarea, label, [data-cursor="link"]'

// Custom paintbrush / ink-nib cursor.
// - Follows the pointer with a soft spring.
// - Switches to an ink-drop "stamp" over interactive elements.
// - Bursts an ink-splatter on click.
// - Renders nothing on touch / coarse-pointer devices.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [splats, setSplats] = useState([])

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const fine =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine) return

    setEnabled(true)
    document.body.classList.add('cursor-enabled')

    let splatId = 0
    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onOver = (e) => {
      if (e.target.closest?.(INTERACTIVE)) setHovering(true)
    }
    const onOut = (e) => {
      if (e.target.closest?.(INTERACTIVE)) setHovering(false)
    }
    const onDown = (e) => {
      const id = splatId++
      setSplats((s) => [...s, { id, x: e.clientX, y: e.clientY }])
      setTimeout(() => setSplats((s) => s.filter((p) => p.id !== id)), 500)
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerover', onOver)
    window.addEventListener('pointerout', onOut)
    window.addEventListener('pointerdown', onDown)

    return () => {
      document.body.classList.remove('cursor-enabled')
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      window.removeEventListener('pointerout', onOut)
      window.removeEventListener('pointerdown', onDown)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      {/* Main nib / stamp */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          animate={{ scale: hovering ? 1.4 : 1, rotate: hovering ? 0 : -15 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          style={{ marginLeft: -3, marginTop: -3 }}
        >
          {hovering ? (
            // Ink drop / stamp
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path
                d="M13 2C13 2 5 11 5 16.5C5 20.6 8.6 24 13 24C17.4 24 21 20.6 21 16.5C21 11 13 2 13 2Z"
                fill="#B5342E"
              />
              <circle cx="10.5" cy="14" r="2.2" fill="#F3EDE1" opacity="0.7" />
            </svg>
          ) : (
            // Ink nib
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 3L13 6.5L8.5 11L3 3Z" fill="#2B211C" />
              <path d="M8.5 11L11.5 8L20 19.5L17.5 20.5L8.5 11Z" fill="#B5342E" />
              <circle cx="6.2" cy="6.2" r="1.3" fill="#C7912F" />
            </svg>
          )}
        </motion.div>
      </motion.div>

      {/* Click splatters */}
      <AnimatePresence>
        {splats.map((p) => (
          <motion.div
            key={p.id}
            className="pointer-events-none fixed z-[9998]"
            style={{ left: p.x, top: p.y }}
            initial={{ scale: 0, opacity: 0.9 }}
            animate={{ scale: 1.1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              style={{ marginLeft: -23, marginTop: -23 }}
              fill="#B5342E"
            >
              <circle cx="23" cy="23" r="6" />
              <circle cx="34" cy="17" r="2.4" />
              <circle cx="12" cy="19" r="2" />
              <circle cx="30" cy="33" r="2.6" />
              <circle cx="15" cy="31" r="1.8" />
              <circle cx="23" cy="10" r="1.6" />
              <circle cx="37" cy="28" r="1.4" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}
