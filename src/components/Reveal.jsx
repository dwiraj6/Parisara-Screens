import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

// Scroll-triggered reveal: fade + slide-up, fires when the element scrolls into
// view. Robust by design — content is NEVER left permanently hidden:
//   • prefers-reduced-motion or no IntersectionObserver → render visible, no motion
//   • IO fires → play the entrance
//   • failsafe timer → force visible even if IO never fires (headless renderers,
//     backgrounded tabs, throttled observers). Reveal enhances; it never gates.
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 24,
  className = '',
  ...rest
}) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    io.observe(el)

    // Failsafe: content must never stay invisible.
    const failsafe = setTimeout(() => setShown(true), 1000)

    return () => {
      io.disconnect()
      clearTimeout(failsafe)
    }
  }, [reduce])

  if (reduce) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay: shown ? delay : 0, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
