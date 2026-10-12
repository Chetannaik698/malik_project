import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, Star, ShieldCheck, MapPin, Wrench, CheckCircle2 } from 'lucide-react'
import { Button } from '../ui/Button'
import { BUSINESS, mapsUrl } from '../../lib/config'
import storeFrontImg from '../../images/store/store-front.jpg'
import serviceBenchImg from '../../images/store/service-bench.jpg'
import storeDisplayImg from '../../images/store/store-display.jpg'
import motherboardRepairImg from '../../images/store/motherboard-repair.jpg'

const heroSlides = [
  {
    img: serviceBenchImg,
    tag: 'Chip-Level Service Lab',
    title: 'Precision Motherboard & Laptop Diagnostics',
    desc: 'Advanced testing benches with digital soldering & component repair',
  },
  {
    img: storeFrontImg,
    tag: 'NGM Plaza, S.P. Road',
    title: 'Shop No 2, Ground Floor, SJP Cross Road',
    desc: 'Centrally located on S.P. Road for quick walk-ins & same-day pickup',
  },
  {
    img: motherboardRepairImg,
    tag: 'Hardware Specialist',
    title: 'Water Damage & Micro-Soldering Fixes',
    desc: 'Dead laptops, screen flickering, power jack & IC level revival',
  },
  {
    img: storeDisplayImg,
    tag: 'Sales & Upgrades',
    title: 'Brand Laptops, Desktops & Gaming Rigs',
    desc: 'HP, Dell, Lenovo, ASUS, Acer & high-speed NVMe SSD upgrades',
  },
]

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
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

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
            className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-300"
          >
            <span className="flex items-center gap-1 text-amber-400">
              <Star size={13} fill="currentColor" />
              <span className="font-bold">4.7 / 5</span>
            </span>
            <span className="text-white/40">•</span>
            <span>133+ Reviews on Justdial</span>
            <span className="text-white/40">•</span>
            <span className="text-emerald-400">Verified Business</span>
          </motion.div>

          <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl xl:text-7xl">
            {line('Best Laptop Repair &', 0.1, '')}
            {line('Computer Care.', 0.25, 'text-ember')}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/70"
          >
            <span className="font-semibold text-white">Malik Infotech — S.P. Road, Bengaluru.</span> Chip-level
            motherboard diagnostics, broken screen fixes, water damage revival, CCTV setups, custom gaming PCs &amp;
            genuine parts at Shop No 2, NGM Plaza.
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
              href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello Malik Infotech, I would like to enquire about laptop repair / computer service.')}`}
            >
              <MessageCircle size={16} aria-hidden /> WhatsApp Us
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
            {[
              '4.7★ Justdial Rated',
              'Chip-Level Motherboard Lab',
              'Instant Screen & Battery Fix',
              'CCTV & DVR Solutions',
              'Open 7 Days • 24/7 Support',
            ].map((pill) => (
              <span
                key={pill}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/75"
              >
                ✓ {pill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Real Store Photo Showcase with Dynamic Slides */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl lg:col-span-6 lg:max-w-none"
        >
          {/* Ambient Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-ember/30 via-cyan-500/10 to-transparent blur-2xl opacity-60"
          />

          {/* Main Card with Real Store Media */}
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-graphite/90 p-2 sm:p-3 shadow-2xl backdrop-blur-md">
            <div className="relative h-[320px] sm:h-[380px] overflow-hidden rounded-2xl bg-black/40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.7 }}
                  className="relative h-full w-full"
                >
                  <img
                    src={heroSlides[activeSlide].img}
                    alt={heroSlides[activeSlide].title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Slide text overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block rounded-full bg-ember px-3 py-0.5 text-[11px] font-semibold text-ink">
                      {heroSlides[activeSlide].tag}
                    </span>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-white sm:text-xl drop-shadow-md">
                      {heroSlides[activeSlide].title}
                    </h3>
                    <p className="text-xs text-white/80 drop-shadow">
                      {heroSlides[activeSlide].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators */}
              <div className="absolute top-4 right-4 flex gap-1.5 z-10 bg-black/50 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-white/10">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSlide === idx ? 'w-6 bg-ember' : 'w-2 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Store Information Bar */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/15 bg-ink/85 px-4 py-2.5 backdrop-blur-md shadow-lg">
              <div>
                <p className="font-display text-xs font-bold text-white">{BUSINESS.name}</p>
                <p className="text-[11px] font-medium text-ember">
                  Shop No 2, Ground Floor, NGM Plaza • SJP Cross Rd, S.P. Road
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-white/80 hover:text-ember transition-colors"
                >
                  <MapPin size={12} className="text-ember" />
                  <span>Get Directions</span>
                </a>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
