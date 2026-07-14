import { Link } from 'react-router-dom'
import { business, navLinks, wa } from '../data/site'

function IconPhone() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
    </svg>
  )
}
function IconPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function IconClock() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}
function IconWhatsApp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.6-4A8.5 8.5 0 1 1 12 20.5 8.4 8.4 0 0 1 7.8 19.4L3 21Z" />
      <path d="M9 9.5c.2 2 2.5 4.3 4.5 4.5.7 0 1.4-.8 1.5-1.3L13.5 12l-1.5.5-2-2 .5-1.5-1.2-1.5C8.8 8.1 8 8.8 9 9.5Z" />
    </svg>
  )
}
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}
function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6.5v3H9v9h3v-9h2.5l.5-3H12V6.5a.5.5 0 0 1 .5-.5H15V3Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-deep-ink text-paper">
      {/* Torn ink-red accent edge on top */}
      <div className="absolute inset-x-0 -top-[1px] h-3 rotate-180">
        <div className="h-full w-full bg-ink-red torn-bottom" />
      </div>
      {/* Subtle grain even on dark */}
      <div className="pointer-events-none absolute inset-0 paper-grain opacity-[0.06]" aria-hidden="true" />

      <div className="container-x relative grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 — Brand */}
        <div>
          <p className="font-display text-2xl uppercase leading-none">
            Parisara <span className="text-ink-red">Screens</span>
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.32em] text-gold">
            {business.tagline}
          </p>
          <p className="mt-4 max-w-xs text-sm text-paper/70">
            {business.yearsBadge} in Chamrajpet.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.22em] text-paper/60">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-paper/85 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.22em] text-paper/60">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-paper/85">
            <li className="flex gap-2.5">
              <span className="mt-0.5 shrink-0 text-gold"><IconPin /></span>
              <span>{business.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="shrink-0 text-gold"><IconPhone /></span>
              <a href={`tel:${business.phoneTel}`} className="transition-colors hover:text-gold">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="shrink-0 text-gold"><IconWhatsApp /></span>
              <a
                href={wa('Hello Parisara Screens, I have a printing enquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                WhatsApp Chat
              </a>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-0.5 shrink-0 text-gold"><IconClock /></span>
              <span>
                {business.hours}
                <br />
                <span className="text-paper/60">{business.hoursNote}</span>
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4 — Connect */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.22em] text-paper/60">Connect</h4>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={business.socials.instagram || '#'}
              target={business.socials.instagram ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper/85 transition-colors hover:border-gold hover:text-gold"
            >
              <IconInstagram />
            </a>
            <a
              href={business.socials.facebook || '#'}
              target={business.socials.facebook ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper/85 transition-colors hover:border-gold hover:text-gold"
            >
              <IconFacebook />
            </a>
            <a
              href={business.mapsShareLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find us on Google Maps"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper/85 transition-colors hover:border-gold hover:text-gold"
            >
              <IconPin />
            </a>
          </div>
          <p className="mt-4 text-xs text-paper/50">Instagram & Facebook links coming soon.</p>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-ink-red/25">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-paper/60 sm:flex-row sm:text-left">
          <p>{business.serviceArea}</p>
          <p>© 2026 Parisara Screens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
