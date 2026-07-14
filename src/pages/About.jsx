import Reveal from '../components/Reveal'
import TornDivider from '../components/TornDivider'
import { SectionHeading, RegMarks, TrustBadge } from '../components/ui'
import { business } from '../data/site'

const reasons = [
  {
    title: 'Quality',
    body: 'Sharp registration, consistent colours and premium stocks on every job — big or small.',
  },
  {
    title: 'Turnaround Time',
    body: 'Most standard jobs ready in 2–3 working days, with honest timelines we actually keep.',
  },
  {
    title: 'Fair Pricing',
    body: 'Transparent, competitive rates with no surprises — the same fair price for everyone.',
  },
  {
    title: 'Craftsmanship',
    body: 'Two-and-a-half decades of hands-on printing experience in every fold, cut and finish.',
  },
]

const shopPhotos = [
  { src: 'https://picsum.photos/seed/parisara-shopfront/800/600', alt: 'Parisara Screens shop front in Chamrajpet' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-deep-ink pb-16 pt-32 text-paper md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute inset-0 paper-grain opacity-[0.06]" aria-hidden="true" />
        <div className="container-x relative">
          <Reveal className="eyebrow !text-gold mb-3 block">Our Story</Reveal>
          <Reveal as="h1" delay={0.05} className="max-w-4xl font-display text-hero uppercase">
            25+ Years of Printing, One Family, One Promise
          </Reveal>
          <Reveal delay={0.1} className="mt-6 max-w-2xl font-serif text-lg text-paper/85">
            Parisara Screens began as a small family press in Chamrajpet and grew, order by order,
            into one of the neighbourhood's most trusted names in printing.
          </Reveal>
        </div>
      </section>
      <TornDivider color="paper" flip />

      {/* Story */}
      <section className="container-x py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <Reveal className="relative">
            <RegMarks />
            <div className="tape relative overflow-hidden rounded-sm bg-paper p-2 shadow-card">
              <img
                src={shopPhotos[0].src}
                alt={shopPhotos[0].alt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="A Family Business" title="Built On Trust & Ink" />
            <Reveal delay={0.1} className="mt-5 space-y-4 font-serif text-deep-ink/85">
              <p>
                What started with a single press and a simple belief — that good printing is built on
                honesty and attention to detail — has served three generations of Bengaluru families
                and businesses.
              </p>
              <p>
                From wedding invitations that mark life's biggest days to the everyday bill books that
                keep a shop running, we've been the quiet hands behind the paper for over 25 years.
              </p>
              <p>
                Today we blend that old-school craftsmanship with modern printing to deliver work
                we're proud to put our name on.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-6">
              <TrustBadge />
            </Reveal>
          </div>
        </div>
      </section>

      <TornDivider color="paper-shadow" />

      {/* Why choose us */}
      <section className="bg-paper-shadow/50 py-16 md:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Why Choose Us" title="Reasons Bengaluru Trusts Us" center />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="relative h-full rounded-lg border border-deep-ink/10 bg-paper p-6 shadow-card">
                  <span className="font-mono text-sm text-ink-red">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-xl uppercase text-deep-ink">{r.title}</h3>
                  <p className="mt-2 font-serif text-sm text-deep-ink/75">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
