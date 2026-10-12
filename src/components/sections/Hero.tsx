import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { Button } from '../ui/Button'
import { BUSINESS } from '../../lib/config'
import heroGif from '../../images/renuka_hero.gif'

const line = (t: string, d: number, c: string) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className={`block ${c}`}
      initial={{ y: '105%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] }}
    >
      {t}
    </motion.span>
  </span>
)

export function Hero({ onEnquire }: { onEnquire: () => void }) {
  const { scrollY } = useScroll()
  const glow = useTransform(scrollY, [0, 700], [1, 0.2])

  return (
    <section id="home" className="relative -mt-16 overflow-hidden pb-16 pt-32 md:pt-40">
      <motion.div
        style={{ opacity: glow }}
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-[560px] w-[560px] rounded-full bg-ember/20 blur-[130px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-1.5 text-xs font-medium text-ember"
          >
            <span className="h-2 w-2 rounded-full bg-ember animate-pulse" />
            <span>{BUSINESS.tagline} • S.P. Road, Bengaluru</span>
          </motion.div>

          <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl xl:text-7xl">
            {line('All your computer needs', 0.1, '')}
            {line('under one roof.', 0.25, 'text-ember')}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/70"
          >
            <span className="font-semibold text-white">Sales • Service • Support • Always.</span> High-performance
            laptops, custom desktops, printers, CCTV solutions, accessories & reliable chip-level repair at Electronics
            Plaza, S.P. Road.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href={`tel:${BUSINESS.phone}`} className="shadow-lg shadow-ember/20">
              <Phone size={16} aria-hidden /> Call {BUSINESS.phoneFormatted}
            </Button>
            <Button
              variant="ghost"
              href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello Renuka Computers, I want to enquire about products/services.')}`}
            >
              <MessageCircle size={16} aria-hidden /> WhatsApp
            </Button>
            <Button variant="ghost" onClick={onEnquire}>
              Enquire Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-2 text-xs text-white/50"
          >
            {['Best Brands Best Prices', 'Custom & Ready Desktops', 'Quick & Reliable Service', 'CCTV & Networking'].map(
              (pill) => (
                <span
                  key={pill}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/70"
                >
                  ✓ {pill}
                </span>
              ),
            )}
          </motion.div>
        </div>

        {/* Responsive Animated Hero GIF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl lg:col-span-6 lg:max-w-none"
        >
          {/* Ambient Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-ember/30 via-orange-500/10 to-transparent blur-2xl opacity-60"
          />

          {/* Main GIF Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-graphite/90 p-2 sm:p-3 shadow-2xl backdrop-blur-md">
            <div className="overflow-hidden rounded-2xl bg-black/40">
              <img
                src={heroGif}
                alt="Renuka Computers - All Computer Needs Under One Roof Animated Showcase"
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                width={1024}
                height={683}
                loading="eager"
              />
            </div>

            {/* Floating Store Badge Overlay */}
            <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/15 bg-ink/85 px-4 py-2.5 backdrop-blur-md shadow-lg">
              <div>
                <p className="font-display text-xs font-bold text-white">Renuka Computers Inc</p>
                <p className="text-[11px] font-medium text-ember">Electronics Plaza • S.P. Road, Bangalore-02</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open Store</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
