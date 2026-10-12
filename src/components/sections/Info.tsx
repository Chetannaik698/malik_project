import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Star, ShieldCheck, MapPin, CheckCircle2, Award, ExternalLink } from 'lucide-react'
import { Reveal, SectionHeading } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { why, solutions, services, brands, storeGallery, customerReviews } from '../../data/content'
import { BUSINESS, mapsUrl } from '../../lib/config'
import serviceBenchImg from '../../images/store/service-bench.jpg'

type E = { onEnquire: (s?: string) => void }

export function TrustStrip() {
  const items = [
    { title: '4.7★ Justdial Rated', subtitle: '133+ Verified Customer Reviews' },
    { title: 'Chip-Level Repair', subtitle: 'Motherboard & Component Lab' },
    { title: 'CCTV & Security', subtitle: 'Surveillance Setup & DVR Fixes' },
    { title: 'S.P. Road Best Deals', subtitle: 'Wholesale & Retail Direct Rates' },
  ]
  return (
    <div className="border-y border-white/10 bg-graphite">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-6 text-center md:grid-cols-4">
        {items.map((t) => (
          <div key={t.title} className="py-1">
            <span className="font-display text-base font-semibold text-ember sm:text-lg">{t.title}</span>
            <span className="block text-xs text-white/60">{t.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Why() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading
        title="Why Choose Malik Infotech"
        text="Bangalore's trusted computer repair and electronics store on S.P. Road. Quality repairs, genuine parts & transparent pricing."
      />
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {why.map(([ic, t, d], i) => {
          const I = (Icons as unknown as Record<string, LucideIcon>)[ic] || Icons.CheckCircle2
          return (
            <Reveal key={t} delay={i * 0.05}>
              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ember/10 text-ember">
                  <I size={22} aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg text-white">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{d}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export function Solutions({ onEnquire }: E) {
  return (
    <section className="bg-graphite/60 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          title="Tailored Solutions for Every Requirement"
          text="Whether you need emergency laptop repair, corporate desktop setups, or CCTV camera surveillance, Malik Infotech has you covered."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {solutions.map(([t, d, span], i) => (
            <Reveal key={t} delay={i * 0.04} className={span}>
              <div
                className={`flex h-full flex-col justify-between rounded-3xl border border-white/10 p-7 ${
                  i === 0 ? 'bg-gradient-to-br from-ember/20 to-graphite' : 'bg-graphite'
                }`}
              >
                <div>
                  <h3 className="font-display text-xl text-white">{t}</h3>
                  <p className="mt-2 max-w-sm text-sm text-white/65">{d}</p>
                </div>
                <button
                  onClick={() => onEnquire(t)}
                  className="mt-8 min-h-11 self-start text-sm font-medium text-ember hover:underline"
                >
                  Enquire about this solution →
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Services({ onEnquire }: E) {
  return (
    <section id="services" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <SectionHeading
          title="Specialized Services & Repairs"
          text="Advanced chip-level laptop diagnostics, CCTV camera setup, gaming desktop assembling, and genuine spare parts."
        />
        <div className="flex flex-col gap-3">
          <Button onClick={() => onEnquire('Service & Repair')}>Request Service Quote</Button>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="text-xs text-white/60 hover:text-ember transition-colors"
          >
            Direct Technician Helpdesk: <span className="font-semibold text-white">{BUSINESS.phoneFormatted}</span>
          </a>
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Instant WhatsApp Assistance: <span className="font-semibold">{BUSINESS.whatsappFormatted}</span>
          </a>
        </div>
      </div>
      <ul className="divide-y divide-white/10 border-y border-white/10 lg:col-span-8">
        {services.map(([t, d]) => (
          <li key={t} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="font-display text-xl text-white">{t}</h3>
              <p className="mt-1 text-sm text-white/60 sm:max-w-lg">{d}</p>
            </div>
            <button
              onClick={() => onEnquire(t)}
              className="mt-2 text-xs font-semibold uppercase tracking-wider text-ember hover:underline sm:mt-0 sm:shrink-0"
            >
              Enquire
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function StoreGallery() {
  return (
    <section id="gallery" className="bg-graphite/40 py-20 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3.5 py-1 text-xs font-semibold text-ember mb-3">
              <span>Authentic Store Photos</span>
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Inside Malik Infotech
            </h2>
            <p className="mt-2 text-white/60 max-w-xl text-sm">
              Take a look inside our repair workstation, diagnostic bench, and store on SJP Cross Road, SP Road.
            </p>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ember hover:underline"
          >
            <MapPin size={16} />
            Visit us at Shop No 2, NGM Plaza →
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {storeGallery.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.08}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-graphite transition-all duration-300 hover:border-ember/40 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-ink/80 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md border border-white/15">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-white group-hover:text-ember transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Brands() {
  return (
    <section id="brands" className="border-y border-white/10 bg-graphite/60 py-16">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          title="Best Brands • Best S.P. Road Prices"
          text="We service and stock authentic laptops, components, and accessories from leading global manufacturers."
        />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {brands.map((b) => (
            <li
              key={b.name}
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-ink/50 p-5 text-center transition-all duration-300 hover:border-ember/60 hover:bg-white/5"
            >
              <span className="font-display text-xl font-bold tracking-wider text-white transition-colors group-hover:text-ember">
                {b.name}
              </span>
              <span className="mt-1 text-[11px] text-white/50">{b.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function About({ onEnquire }: E) {
  return (
    <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-steel to-graphite p-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/40">
            <img
              src={serviceBenchImg}
              alt="Malik Infotech Diagnostic & Service Bench"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block rounded-full bg-ember px-3 py-0.5 text-xs font-semibold text-ink">
                Verified Technician Lab
              </span>
              <p className="mt-1 font-display text-lg font-bold text-white">In-House Chip-Level Repair Facility</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-center">
            <div className="rounded-xl border border-white/10 bg-ink/70 p-3">
              <p className="font-display text-lg font-bold text-ember">2023</p>
              <p className="text-[11px] text-white/60">Year Established</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-ink/70 p-3">
              <p className="font-display text-lg font-bold text-ember">4.7 ★</p>
              <p className="text-[11px] text-white/60">133+ Reviews on Justdial</p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3.5 py-1 text-xs font-semibold text-ember">
          <span>{BUSINESS.tagline}</span>
        </div>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          About Malik Infotech
        </h2>
        <p className="mt-5 max-w-lg leading-relaxed text-white/70">
          Founded in 2023 by proprietor <span className="font-semibold text-white">Mr. Mujahidpasha</span>,{' '}
          <span className="font-semibold text-white">Malik Infotech</span> is located at Shop No 2, Ground Floor, NGM
          Plaza, on SJP Cross Road near S.P. Road — Bangalore’s premier IT and electronics market.
        </p>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60">
          We specialize in comprehensive laptop repair, motherboard chip-level soldering, screen and keyboard
          replacements, CCTV security camera installations, custom gaming rigs, and genuine hardware accessories.
          Our focus is on honest diagnosis, quick turnaround times, and competitive S.P. Road pricing.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
          <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono">
            Proprietor: Mr. Mujahidpasha
          </span>
          <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono">
            GST Verified Business
          </span>
          <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono">
            Open 7 Days • 24 Hours
          </span>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button onClick={() => onEnquire()}>Enquire Now</Button>
          <Button variant="ghost" href={`tel:${BUSINESS.phone}`}>
            Call {BUSINESS.phoneFormatted}
          </Button>
        </div>
      </Reveal>
    </section>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-graphite/60 py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-3">
              <Star size={13} fill="currentColor" />
              <span>4.7 / 5.0 Rating • 133 Ratings on Justdial</span>
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Customer Reviews &amp; Testimonials
            </h2>
            <p className="mt-2 text-white/60 max-w-xl text-sm">
              Real feedback from customers who visited Malik Infotech on S.P. Road for purchases and laptop servicing.
            </p>
          </div>
          {BUSINESS.justdialUrl && (
            <a
              href={BUSINESS.justdialUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white hover:border-ember hover:text-ember transition-colors"
            >
              <span>View all reviews on Justdial</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {customerReviews.map((r, i) => (
            <Reveal key={r.name + i} delay={i * 0.04}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-graphite p-6 transition-all duration-300 hover:border-amber-500/30">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex text-amber-400">
                      {Array.from({ length: r.rating }).map((_, idx) => (
                        <Star key={idx} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-[11px] text-white/40">{r.date}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/80 italic">
                    "{r.review}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-sm font-semibold text-white">{r.name}</h3>
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 size={11} /> {r.source}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
