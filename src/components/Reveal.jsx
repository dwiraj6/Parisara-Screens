import { motion, useReducedMotion } from 'motion/react'

// Scroll-triggered reveal: fade + slide-up 24px, fires when element enters
// the lower 80% of the viewport. Honors prefers-reduced-motion.
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 24,
  className = '',
  once = true,
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduce) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -20% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
