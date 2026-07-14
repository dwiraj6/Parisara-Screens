import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Reveal from '../components/Reveal'
import TornDivider from '../components/TornDivider'
import { InkBleedHeading, TrustBadge, SectionHeading } from '../components/ui'
import { business, services, testimonials, wa } from '../data/site'

const featured = services.slice(0, 6)

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        {/* Full-bleed photo */}
        <div className="absolute inset-0">
          <img
            src="/hero.png"
            alt="Screen printing at Parisara Screens, Chamrajpet"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-ink/80 via-deep-ink/45 to-deep-ink/85" />
        </div>
        {/* Torn bottom edge revealing paper below */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-6 bg-paper torn-bottom rotate-180" />

        <div className="container-x relative z-20 pt-24 text-paper">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="eyebrow !text-gold"
          >
            {business.tagline}
          </motion.p>

          <InkBleedHeading
            text={"Parisara Screens —\nTrusted Printing Partner"}
            className="mt-4 max-w-4xl font-display text-hero uppercase text-paper"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-6 max-w-xl font-serif text-lg text-paper/85"
          >
            For over <strong className="text-gold">25 years</strong>, we've printed wedding cards,
            visiting cards, letterheads and more for families and businesses across Chamrajpet and
            all of Bengaluru.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={wa('Hello Parisara Screens, I have a printing enquiry.')}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink-red px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-transform hover:-translate-y-0.5"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/gallery"
              className="rounded-full border border-paper/40 px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-colors hover:border-gold hover:text-gold"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-10"
          >
            <TrustBadge />
          </motion.div>
        </div>
      </section>

      {/* ===== INTRO STRIP ===== */}
      <section className="container-x py-16 md:py-20">
        <Reveal as="p" className="mx-auto max-w-3xl text-center font-serif text-xl leading-relaxed text-deep-ink md:text-2xl">
          From your daughter's wedding invitation to your shop's bill books — we treat every job with
          the same care and craftsmanship we've brought to Bengaluru's printing for over two decades.
        </Reveal>
      </section>

      <TornDivider color="paper-shadow" />

      {/* ===== CATEGORY TILES ===== */}
      <section className="bg-paper-shadow/50 py-16 md:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="What We Print" title="Our Print Categories" />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[
              { name: 'Wedding Cards', slug: 'wedding-cards' },
              { name: 'Visiting Cards', slug: 'visiting-cards' },
              { name: 'Letterheads', slug: 'letterheads' },
              { name: 'More', slug: '' },
            ].map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.08}>
                <Link
                  to="/services"
                  className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-lg bg-deep-ink p-5 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <img
                    src={
                      cat.slug
                        ? services.find((s) => s.slug === cat.slug)?.image
                        : 'https://picsum.photos/seed/parisara-more/600/750'
                    }
                    alt={cat.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-ink/90 to-transparent" />
                  <h3 className="relative font-display text-lg uppercase text-paper md:text-xl">
                    {cat.name}
                  </h3>
                  <span className="relative mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    View →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED WORK STRIP ===== */}
      <section className="container-x py-16 md:py-24">
        <SectionHeading eyebrow="Recent Work" title="A Look At Our Printing" />
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <figure
                className="tape relative overflow-hidden rounded-sm bg-paper p-2 shadow-card"
                style={{ rotate: `${i % 2 === 0 ? -1.5 : 1.8}deg` }}
              >
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="aspect-square w-full rounded-sm object-cover"
                />
                <figcaption className="pb-1 pt-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-deep-ink/70">
                  {s.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <TornDivider color="ink-red" />

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-deep-ink py-16 text-paper md:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Kind Words" title="What Our Customers Say" />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <blockquote className="flex h-full flex-col rounded-lg border border-paper/10 bg-paper/[0.03] p-6">
                  <span className="font-display text-5xl leading-none text-ink-red">“</span>
                  <p className="-mt-2 flex-1 font-serif text-paper/85">{t.quote}</p>
                  <footer className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-gold">
                    {t.name} · <span className="text-paper/50">{t.role}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREA + CTA ===== */}
      <section className="container-x py-16 text-center md:py-24">
        <Reveal>
          <TrustBadge className="mb-6" />
        </Reveal>
        <Reveal as="h2" delay={0.05} className="mx-auto max-w-3xl text-display text-deep-ink">
          {business.serviceArea}
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <a
            href={wa('Hello Parisara Screens, I would like to place a printing order.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-ink-red px-8 py-4 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-transform hover:-translate-y-0.5"
          >
            Start Your Order on WhatsApp
          </a>
        </Reveal>
      </section>
    </>
  )
}
