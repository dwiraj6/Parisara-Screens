import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Reveal from '../components/Reveal'
import TornDivider from '../components/TornDivider'
import { SectionHeading } from '../components/ui'
import { business, services, faqs, wa } from '../data/site'

const requirements = [...services.map((s) => s.name), 'Other']

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
    other: '',
    description: '',
  })
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    const req = form.requirement === 'Other' ? `Other — ${form.other}` : form.requirement
    const msg = [
      `Hello Parisara Screens, I have a printing enquiry.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      req && `Requirement: ${req}`,
      form.description && `Details: ${form.description}`,
    ]
      .filter(Boolean)
      .join('\n')
    setSent(true)
    window.open(wa(msg), '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full rounded-lg border border-deep-ink/25 bg-paper px-4 py-3 font-serif text-deep-ink placeholder-deep-ink/60 outline-none transition-colors focus:border-ink-red'

  return (
    <>
      {/* Hero (reduced texture for legibility) */}
      <section className="relative bg-deep-ink pb-14 pt-32 text-paper md:pb-20 md:pt-40">
        <div className="container-x relative">
          <Reveal className="eyebrow !text-gold mb-3 block">Get In Touch</Reveal>
          <Reveal as="h1" delay={0.05} className="font-display text-hero uppercase">
            Contact Us
          </Reveal>
          <Reveal delay={0.1} className="mt-4 max-w-xl font-serif text-lg text-paper/85">
            Visit the shop in Chamrajpet, call us, or send an enquiry below — we'll get right back to
            you on WhatsApp.
          </Reveal>
        </div>
      </section>
      <TornDivider color="paper" flip />

      <section className="container-x py-14 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: details + map */}
          <div>
            <SectionHeading title="The Print People" />
            <div className="mt-6 space-y-5 font-serif text-deep-ink/85">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-red">Address</p>
                <p className="mt-1">{business.address}</p>
              </div>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-red">Phone / WhatsApp</p>
                  <a href={`tel:${business.phoneTel}`} className="mt-1 block hover:text-ink-red">
                    {business.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-red">Hours</p>
                  <p className="mt-1">
                    {business.hours}
                    <br />
                    <span className="text-deep-ink/60">{business.hoursNote}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={wa('Hello Parisara Screens, I have a printing enquiry.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ink-red px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-transform hover:-translate-y-0.5"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href={business.mapsShareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-deep-ink/25 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-deep-ink transition-colors hover:border-ink-red hover:text-ink-red"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-deep-ink/10 shadow-card">
              <iframe
                title="Parisara Screens location on Google Maps"
                src={business.mapsEmbed}
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right: form */}
          <div>
            <SectionHeading title="Tell Us What You Need" />
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-deep-ink/70">
                    Name *
                  </label>
                  <input required value={form.name} onChange={set('name')} className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-deep-ink/70">
                    Phone *
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={set('phone')}
                    className={inputClass}
                    placeholder="Mobile number"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-deep-ink/70">
                  Email <span className="text-deep-ink/60">(optional)</span>
                </label>
                <input type="email" value={form.email} onChange={set('email')} className={inputClass} placeholder="you@example.com" />
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-deep-ink/70">
                  Requirement
                </label>
                <select value={form.requirement} onChange={set('requirement')} className={inputClass}>
                  <option value="">Select a product…</option>
                  {requirements.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* Conditional "Others — please specify" */}
              <AnimatePresence initial={false}>
                {form.requirement === 'Other' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-deep-ink/70">
                      Others — please specify
                    </label>
                    <input value={form.other} onChange={set('other')} className={inputClass} placeholder="What would you like printed?" />
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-deep-ink/70">
                  Customization / Description
                </label>
                <textarea
                  rows={4}
                  value={form.description}
                  onChange={set('description')}
                  className={`${inputClass} resize-none`}
                  placeholder="Quantity, size, colours, deadline, any references…"
                />
              </div>

              <button
                type="submit"
                className={`group relative w-full overflow-hidden rounded-lg bg-ink-red px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-paper transition-transform hover:-translate-y-0.5 ${
                  sent ? 'animate-stamp-in' : ''
                }`}
              >
                {sent ? '✓ Opening WhatsApp…' : 'Send Enquiry'}
              </button>
              <p className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-deep-ink/65">
                Submitting opens WhatsApp with your details pre-filled
              </p>
            </form>
          </div>
        </div>
      </section>

      <TornDivider color="paper-shadow" />

      {/* FAQ */}
      <section className="bg-paper-shadow/50 py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <SectionHeading title="Frequently Asked" center />
          <div className="mt-10 divide-y divide-deep-ink/10 border-y border-deep-ink/10">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-serif text-lg text-deep-ink">{f.q}</span>
                  <span
                    className={`shrink-0 text-2xl text-ink-red transition-transform ${
                      openFaq === i ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 font-serif text-deep-ink/75">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
