import { motion, useReducedMotion } from 'motion/react'
import Reveal from './Reveal'

// "25+ Years" trust badge
export function TrustBadge({ className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-ink-red/30 bg-ink-red/5 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-red ${className}`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink-red" />
      25+ Years of Trusted Printing
    </span>
  )
}

// Section heading — a strong display title with a short ink rule (a printer's
// registration mark, not the generic tracked-caps eyebrow).
export function SectionHeading({ title, className = '', center = false, onDark = false }) {
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : ''} ${className}`}>
      <Reveal as="h2" className={`text-balance text-display ${onDark ? 'text-paper' : 'text-deep-ink'}`}>
        {title}
      </Reveal>
      <Reveal
        delay={0.08}
        className={`mt-4 h-[3px] w-12 rounded-full bg-ink-red ${center ? 'mx-auto' : ''}`}
      />
    </div>
  )
}

// Decorative registration / crop corner marks
export function RegMarks() {
  return (
    <>
      <span className="reg-mark left-4 top-4 border-l-2 border-t-2" />
      <span className="reg-mark right-4 top-4 border-r-2 border-t-2" />
      <span className="reg-mark bottom-4 left-4 border-b-2 border-l-2" />
      <span className="reg-mark bottom-4 right-4 border-b-2 border-r-2" />
    </>
  )
}

// Ink-bleed staggered headline: each word fades + un-blurs into place.
export function InkBleedHeading({ text, className = '' }) {
  const reduce = useReducedMotion()
  const words = text.split('\n')

  if (reduce)
    return (
      <h1 className={className}>
        {words.map((l, i) => (
          <span key={i} className="block">
            {l}
          </span>
        ))}
      </h1>
    )

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="block"
          variants={{
            hidden: { opacity: 0, y: 10, filter: 'blur(8px)' },
            show: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {w}
          {i < words.length - 1 && ' '}
        </motion.span>
      ))}
    </motion.h1>
  )
}
