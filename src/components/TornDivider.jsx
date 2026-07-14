import { motion, useReducedMotion } from 'motion/react'

// A torn-paper section divider that "tears open" (wipes across) on scroll in.
// `flip` inverts the torn edge to sit on top of the following section.
export default function TornDivider({ color = 'ink-red', flip = false, className = '' }) {
  const reduce = useReducedMotion()

  const colorClass =
    color === 'ink-red'
      ? 'bg-ink-red'
      : color === 'gold'
      ? 'bg-gold'
      : color === 'deep-ink'
      ? 'bg-deep-ink'
      : 'bg-paper-shadow'

  return (
    <div className={`relative h-6 w-full overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        className={`h-full w-full ${colorClass} torn-bottom ${flip ? 'rotate-180' : ''}`}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={reduce ? undefined : { scaleX: 1 }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'left center' }}
      />
    </div>
  )
}
