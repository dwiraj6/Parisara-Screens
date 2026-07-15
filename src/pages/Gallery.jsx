import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Reveal from '../components/Reveal'
import TornDivider from '../components/TornDivider'
import { SectionHeading } from '../components/ui'
import { galleryCategories, galleryItems } from '../data/site'

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null) // index into `filtered`

  const filtered = useMemo(
    () => (filter === 'all' ? galleryItems : galleryItems.filter((g) => g.category === filter)),
    [filter],
  )

  const close = () => setLightbox(null)
  const prev = () => setLightbox((i) => (i - 1 + filtered.length) % filtered.length)
  const next = () => setLightbox((i) => (i + 1) % filtered.length)

  // Keyboard navigation for the lightbox
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, filtered.length])

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-deep-ink pb-16 pt-32 text-paper md:pb-20 md:pt-40">
        <div className="pointer-events-none absolute inset-0 paper-grain opacity-[0.06]" aria-hidden="true" />
        <div className="container-x relative">
          <Reveal className="eyebrow !text-gold mb-3 block">Our Work</Reveal>
          <Reveal as="h1" delay={0.05} className="font-display text-hero uppercase">
            Gallery
          </Reveal>
          <Reveal delay={0.1} className="mt-4 max-w-xl font-serif text-lg text-paper/85">
            A selection of printing we've delivered across Bengaluru. Tap any piece to view it larger.
          </Reveal>
        </div>
      </section>
      <TornDivider color="paper" flip />

      {/* Filters + grid */}
      <section className="container-x py-14 md:py-20">
        <div className="mb-10 flex flex-wrap gap-2.5">
          {galleryCategories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`inline-flex min-h-[44px] items-center rounded-full border px-5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors active:scale-[0.97] ${
                filter === c.key
                  ? 'border-ink-red bg-ink-red text-paper'
                  : 'border-deep-ink/25 text-deep-ink/75 hover:border-ink-red hover:text-ink-red'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((g, i) => (
              <motion.button
                key={g.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightbox(i)}
                className="tape group relative block overflow-hidden rounded-sm bg-paper p-2 shadow-card"
                style={{ rotate: `${i % 2 === 0 ? -1.4 : 1.6}deg` }}
                aria-label={`View ${g.alt}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-square w-full rounded-sm object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            className="fixed inset-0 z-[9500] flex items-center justify-center bg-deep-ink/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors hover:border-gold hover:text-gold"
            >
              ✕
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous"
              className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-paper/30 text-2xl text-paper transition-colors hover:border-gold hover:text-gold md:left-8"
            >
              ‹
            </button>
            <motion.figure
              key={filtered[lightbox].id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox].src.replace('/800/600', '/1200/900')}
                alt={filtered[lightbox].alt}
                className="max-h-[78vh] w-auto rounded-sm object-contain"
              />
              <figcaption className="mt-3 text-center font-mono text-xs uppercase tracking-[0.16em] text-paper/70">
                {filtered[lightbox].alt} · {lightbox + 1} / {filtered.length}
              </figcaption>
            </motion.figure>
            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next"
              className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-paper/30 text-2xl text-paper transition-colors hover:border-gold hover:text-gold md:right-8"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
