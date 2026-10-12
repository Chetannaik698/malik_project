import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Clock, Plus, Mail, Star, ExternalLink } from 'lucide-react'
import { BUSINESS, mapsUrl } from '../../lib/config'
import { faqs } from '../../data/content'
import { EnquiryForm } from '../ui/EnquiryForm'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/Reveal'

export function Contact() {
  const row = 'flex gap-3 text-sm text-white/70'
  return (
    <section id="contact" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2">
      <div>
        <SectionHeading
          title="Visit or Contact Us"
          text="Get in touch for instant price quotes, free laptop diagnosis, or CCTV security consultations."
        />
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-graphite p-7">
          <svg
            aria-hidden
            className="absolute inset-0 h-full w-full opacity-30"
            preserveAspectRatio="none"
            viewBox="0 0 400 300"
          >
            <path
              d="M0 220 120 140 200 190 330 60 400 100M60 0l90 300M250 0l-40 300M0 90l400 40"
              stroke="#ff6a1a"
              strokeOpacity=".5"
              fill="none"
            />
          </svg>
          <div className="relative grid gap-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-ember">{BUSINESS.tagline}</span>
                <h3 className="font-display text-2xl font-bold text-white">{BUSINESS.name}</h3>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                <Star size={12} fill="currentColor" />
                <span>4.7 (133 Ratings)</span>
              </div>
            </div>

            <p className={row}>
              <MapPin size={20} className="mt-0.5 shrink-0 text-ember" aria-hidden />
              <address className="not-italic leading-relaxed">{BUSINESS.address}</address>
            </p>

            <p className={row}>
              <Phone size={20} className="mt-0.5 shrink-0 text-ember" aria-hidden />
              <a href={`tel:${BUSINESS.phone}`} className="font-medium text-white hover:text-ember transition-colors">
                {BUSINESS.phoneFormatted} <span className="text-xs text-white/50">(Direct Call / Support)</span>
              </a>
            </p>

            <p className={row}>
              <MessageCircle size={20} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden />
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-white hover:text-emerald-400 transition-colors"
              >
                {BUSINESS.whatsappFormatted} <span className="text-xs text-white/50">(WhatsApp Helpline)</span>
              </a>
            </p>

            <p className={row}>
              <Mail size={20} className="mt-0.5 shrink-0 text-ember" aria-hidden />
              <a href={`mailto:${BUSINESS.email}`} className="text-white/80 hover:text-ember transition-colors">
                {BUSINESS.email}
              </a>
            </p>

            <p className={row}>
              <Clock size={20} className="mt-0.5 shrink-0 text-ember" aria-hidden />
              <span>{BUSINESS.hours}</span>
            </p>

            <div className="flex flex-wrap gap-3 pt-3">
              <Button href={`tel:${BUSINESS.phone}`}>
                <Phone size={16} aria-hidden /> Call Now
              </Button>
              {BUSINESS.whatsapp && (
                <Button
                  variant="ghost"
                  href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello Malik Infotech, I would like to enquire about laptop repair / computer products.')}`}
                >
                  <MessageCircle size={16} aria-hidden /> WhatsApp
                </Button>
              )}
              <Button variant="ghost" href={mapsUrl}>
                Get Directions
              </Button>
              {BUSINESS.justdialUrl && (
                <a
                  href={BUSINESS.justdialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-xs font-semibold text-white/80 hover:text-white hover:border-amber-400"
                >
                  <Star size={13} className="text-amber-400" fill="currentColor" />
                  <span>Justdial Profile</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-3xl border border-white/10 bg-graphite p-7">
        <h3 className="mb-2 font-display text-xl text-white">Send an enquiry</h3>
        <p className="mb-5 text-sm text-white/60">Tell us what laptop issue, model, component, or CCTV requirement you have.</p>
        <EnquiryForm id="contact" />
      </div>
    </section>
  )
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="mx-auto max-w-3xl px-5 pb-20">
      <SectionHeading
        title="Frequently Asked Questions"
        text="Everything you need to know about purchasing and servicing at Malik Infotech, S.P. Road."
      />
      <div className="divide-y divide-white/10 border-y border-white/10">
        {faqs.map(([q, a], i) => (
          <div key={q}>
            <h3>
              <button
                id={`fq${i}`}
                aria-expanded={open === i}
                aria-controls={`fa${i}`}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left text-white"
              >
                <span className="font-medium">{q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }}>
                  <Plus size={20} className="text-ember" aria-hidden />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  id={`fa${i}`}
                  role="region"
                  aria-labelledby={`fq${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm leading-relaxed text-white/65">{a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

export function FinalCTA({ onEnquire }: { onEnquire: () => void }) {
  return (
    <section className="px-5 pb-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ember to-orange-700 p-10 text-ink md:p-16">
        <span className="inline-block rounded-full bg-ink/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink mb-3">
          4.7★ Justdial Rated • S.P. Road, Bangalore
        </span>
        <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
          Get your laptop repaired or buy genuine systems today.
        </h2>
        <p className="mt-4 max-w-lg text-ink/85 font-medium leading-relaxed">
          Visit Malik Infotech at Shop No 2, Ground Floor, NGM Plaza, SJP Cross Road (SP Road). Instant chip-level
          service, genuine spare parts, and unbeatable wholesale rates.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <Phone size={16} /> Call {BUSINESS.phoneFormatted}
          </a>
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello Malik Infotech, I need assistance with laptop repair / quotation.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white transition-opacity hover:bg-emerald-500"
          >
            <MessageCircle size={16} /> WhatsApp {BUSINESS.whatsappFormatted}
          </a>
          <button
            onClick={onEnquire}
            className="inline-flex min-h-11 items-center rounded-full border border-ink/40 px-6 text-sm font-semibold hover:bg-ink/10 transition-colors"
          >
            Send Service Enquiry
          </button>
        </div>
      </div>
    </section>
  )
}
