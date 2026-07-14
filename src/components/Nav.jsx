import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { business, navLinks, wa } from '../data/site'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname])

  // Solid bg once scrolled, or always on non-home pages (no hero behind).
  const solid = scrolled || !isHome
  const textDark = solid

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9000] transition-colors duration-300 ${
        solid ? 'bg-paper/95 backdrop-blur-sm shadow-[0_1px_0_rgba(43,33,28,0.08)]' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="group flex flex-col leading-none" aria-label="Parisara Screens home">
          <span
            className={`font-display text-xl uppercase tracking-tight md:text-2xl ${
              textDark ? 'text-deep-ink' : 'text-paper'
            }`}
          >
            Parisara <span className="text-ink-red">Screens</span>
          </span>
          <span
            className={`font-mono text-[9px] uppercase tracking-[0.32em] ${
              textDark ? 'text-gold' : 'text-paper/80'
            }`}
          >
            {business.tagline}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
                  textDark ? 'text-deep-ink' : 'text-paper'
                } hover:text-ink-red ${isActive ? '!text-ink-red' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-ink-red"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <a
            href={wa('Hello Parisara Screens, I have a printing enquiry.')}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink-red px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-transform hover:-translate-y-0.5"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="relative z-[9100] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={`h-0.5 w-6 origin-center transition-all duration-300 ${
              open ? 'translate-y-2 rotate-45 bg-deep-ink' : textDark ? 'bg-deep-ink' : 'bg-paper'
            }`}
          />
          <span
            className={`h-0.5 w-6 transition-all duration-300 ${
              open ? 'opacity-0' : textDark ? 'bg-deep-ink' : 'bg-paper'
            }`}
          />
          <span
            className={`h-0.5 w-6 origin-center transition-all duration-300 ${
              open ? '-translate-y-2 -rotate-45 bg-deep-ink' : textDark ? 'bg-deep-ink' : 'bg-paper'
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-paper md:hidden"
          >
            <div className="container-x flex flex-col gap-1 pb-6 pt-2">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `border-b border-paper-shadow py-3 font-mono text-sm uppercase tracking-[0.18em] ${
                      isActive ? 'text-ink-red' : 'text-deep-ink'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href={wa('Hello Parisara Screens, I have a printing enquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-full bg-ink-red px-4 py-3 text-center font-mono text-sm uppercase tracking-[0.18em] text-paper"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
