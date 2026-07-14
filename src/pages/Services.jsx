import Reveal from '../components/Reveal'
import TornDivider from '../components/TornDivider'
import { SectionHeading } from '../components/ui'
import { services, wa } from '../data/site'

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-deep-ink pb-16 pt-32 text-paper md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute inset-0 paper-grain opacity-[0.06]" aria-hidden="true" />
        <div className="container-x relative">
          <Reveal className="eyebrow !text-gold mb-3 block">Services & Products</Reveal>
          <Reveal as="h1" delay={0.05} className="max-w-4xl font-display text-hero uppercase">
            Everything Your Print Job Needs
          </Reveal>
          <Reveal delay={0.1} className="mt-6 max-w-2xl font-serif text-lg text-paper/85">
            From wedding cards to bill books, we handle it all under one roof. Tap “Enquire on
            WhatsApp” on any product and we'll reply with details and pricing.
          </Reveal>
        </div>
      </section>
      <TornDivider color="paper" flip />

      {/* Services grid */}
      <section className="container-x py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-deep-ink/10 bg-paper shadow-card transition-shadow hover:shadow-card-hover">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-red">
                    {s.short}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-2xl uppercase text-deep-ink">{s.name}</h2>
                  <p className="mt-2 flex-1 font-serif text-sm text-deep-ink/75">{s.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-deep-ink/60">
                      Starting from{' '}
                      <span className="text-base text-ink-red">{s.priceFrom}</span>
                    </span>
                    <a
                      href={wa(
                        `Hello Parisara Screens, I'd like to enquire about ${s.name}. Please share details and pricing.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-full bg-ink-red px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper transition-transform hover:-translate-y-0.5"
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <TornDivider color="ink-red" />

      {/* Bottom CTA */}
      <section className="bg-deep-ink py-16 text-center text-paper md:py-20">
        <div className="container-x">
          <Reveal as="h2" className="mx-auto max-w-2xl text-display">
            Don't See What You Need? Just Ask.
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-4 max-w-xl font-serif text-paper/80">
            If it can be printed, we can help. Message us and describe your requirement.
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <a
              href={wa('Hello Parisara Screens, I have a custom printing requirement.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-ink-red px-8 py-4 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-transform hover:-translate-y-0.5"
            >
              Ask on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
