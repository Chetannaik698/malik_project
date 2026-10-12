import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, Menu, X, MapPin, Phone, MessageCircle, Sun, Moon } from 'lucide-react'
import { Button } from '../ui/Button'
import { nav, categories } from '../../data/content'
import { BUSINESS, mapsUrl } from '../../lib/config'
import { useTheme } from '../../lib/theme'
import logoImg from '../../images/logo.png'

export function Logo() {
  const { theme } = useTheme()
  return (
    <a href="#home" className="group flex items-center gap-3 text-white" aria-label={`${BUSINESS.name} home`}>
      <img
        src={logoImg}
        alt={`${BUSINESS.name} logo`}
        className="theme-logo h-11 w-auto max-w-[44px] shrink-0 object-contain transition-transform duration-200 group-hover:scale-105"
        style={{ filter: theme === 'dark' ? 'invert(1)' : 'invert(0)' }}
        width="44"
        height="44"
      />
      <span className="font-display leading-none">
        <span className="block text-base font-semibold tracking-tight transition-colors group-hover:text-ember">{BUSINESS.name}</span>
        <span className="block pt-1 text-[11px] text-white/50">Laptop &amp; PC Care • S.P. Road</span>
      </span>
    </a>
  )
}

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-ember hover:text-ember hover:scale-105 ${className}`}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export const AnnouncementBar = () => (
  <div className="bg-steel px-4 py-2 text-center text-xs text-white/80">
    <span className="inline-flex items-center gap-1 font-semibold text-amber-400">
      ★ 4.7 Rated on Justdial
    </span>{' '}
    • <span className="font-semibold text-ember">{BUSINESS.name}</span> • Laptop Repair &amp; Computer Services • Call:{' '}
    <a href={`tel:${BUSINESS.phone}`} className="font-semibold text-white underline hover:text-ember">
      {BUSINESS.phoneFormatted}
    </a>{' '}
    • WhatsApp:{' '}
    <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noreferrer" className="font-semibold text-emerald-400 underline hover:text-emerald-300">
      {BUSINESS.whatsappFormatted}
    </a>
  </div>
)

export function Navbar({ onEnquire }: { onEnquire: () => void }) {
  const [solid, setSolid] = useState(false),
    [open, setOpen] = useState(false)

  useEffect(() => {
    const f = () => setSolid(window.scrollY > 24)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        solid || open ? 'border-b border-white/10 bg-ink/90 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-white/70 transition-colors hover:text-white">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-white/90 transition-colors hover:border-ember hover:text-ember"
          >
            <Phone size={13} className="text-ember" aria-hidden />
            <span>{BUSINESS.phoneFormatted}</span>
          </a>
          <ThemeToggle />
          <Button className="hidden !min-h-11 md:inline-flex" onClick={onEnquire}>
            Enquire Now
          </Button>
          <button
            className="grid h-11 w-11 place-items-center rounded-full md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="grid gap-1 px-5 pb-6">
              {nav.map(([l, h]) => (
                <a
                  key={h}
                  href={h}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-white/10 text-lg text-white"
                >
                  {l}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-sm font-medium text-white/70">Display Mode</span>
                  <ThemeToggle />
                </div>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ember px-5 text-sm font-semibold text-ink"
                >
                  <Phone size={16} /> Call {BUSINESS.phoneFormatted}
                </a>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setOpen(false)
                    onEnquire()
                  }}
                >
                  Send Enquiry
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export function Footer() {
  const col = 'grid gap-2 text-sm text-white/60'
  return (
    <footer className="border-t border-white/10 bg-graphite">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-300">
            <span>★ 4.7 on Justdial</span>
            <span className="text-white/40">•</span>
            <span>133+ Reviews</span>
          </div>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-ember">{BUSINESS.tagline}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/60">
            Complete laptop repair &amp; computer service center on S.P. Road, Bengaluru. Chip-level motherboard fixes, CCTV solutions, gaming PCs, printers, and accessories.
          </p>
          {BUSINESS.justdialUrl && (
            <a
              href={BUSINESS.justdialUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 hover:underline"
            >
              <span>View Verified Justdial Listing →</span>
            </a>
          )}
        </div>
        <div>
          <h3 className="font-display text-white">Explore</h3>
          <ul className={`${col} mt-4`}>
            {nav.map(([l, h]) => (
              <li key={h}>
                <a className="hover:text-white" href={h}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-white">Products &amp; Services</h3>
          <ul className={`${col} mt-4`}>
            {categories.slice(0, 6).map((c) => (
              <li key={c.id}>
                <a className="hover:text-white" href="#categories">
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-white">Visit Store</h3>
          <address className="mt-4 text-sm not-italic leading-relaxed text-white/60">{BUSINESS.address}</address>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 text-white hover:text-ember">
              <Phone size={15} className="text-ember" />
              <span>{BUSINESS.phoneFormatted}</span>
            </a>
            {BUSINESS.whatsapp && (
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-emerald-400"
              >
                <MessageCircle size={15} className="text-emerald-400" />
                <span>WhatsApp: {BUSINESS.whatsappFormatted}</span>
              </a>
            )}
            <a href={`mailto:${BUSINESS.email}`} className="text-xs text-white/60 hover:text-ember">
              Email: {BUSINESS.email}
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex min-h-10 items-center gap-2 text-sm text-ember hover:underline"
            >
              <MapPin size={16} aria-hidden />
              Get directions on Google Maps
            </a>
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {BUSINESS.name} • {BUSINESS.shortAddress}. All Rights Reserved.
      </p>
    </footer>
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 900)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#home"
          aria-label="Back to top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-5 right-5 z-30 grid h-12 w-12 place-items-center rounded-full bg-ember text-ink shadow-lg"
        >
          <ArrowUp size={20} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
