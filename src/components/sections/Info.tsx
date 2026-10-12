import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal, SectionHeading } from '../ui/Reveal'
import { Art } from '../ui/Art'
import { Button } from '../ui/Button'
import { why, solutions, services, brands } from '../../data/content'
import { BUSINESS } from '../../lib/config'

type E = { onEnquire: (s?: string) => void }

export function TrustStrip() {
  const items = [
    { title: 'Sales', subtitle: 'Laptops, PCs & Accessories' },
    { title: 'Service', subtitle: 'Quick & Reliable Repairs' },
    { title: 'Support', subtitle: 'Expert Assistance Always' },
    { title: 'Best Prices', subtitle: 'All Major Brands Stocked' },
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
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading
        title="Why Renuka Computers Inc"
        text="All your computer needs under one roof. Better technology for a brighter future."
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
          title="Tailored solutions for every requirement"
          text="Whether you are studying, managing an office, or securing your property, we have you covered."
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
                  Enquire about this setup →
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
          title="Sales, Service & Support"
          text="From brand-new hardware to fast chip-level servicing, CCTV installation, and software licensing."
        />
        <div className="flex flex-col gap-3">
          <Button onClick={() => onEnquire('Service & Repair')}>Request Service Quote</Button>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="text-xs text-white/60 hover:text-ember transition-colors"
          >
            Direct Helpdesk: <span className="font-semibold text-white">{BUSINESS.phoneFormatted}</span>
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

export function Brands() {
  return (
    <section id="brands" className="border-y border-white/10 bg-graphite/60 py-16">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          title="Best Brands • Best Prices"
          text="We supply genuine products and provide official warranty support across the world’s leading computing brands."
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
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-steel to-graphite p-8">
          <Art kind="custom" className="w-full" />
          <div className="mt-4 rounded-xl border border-white/10 bg-ink/70 p-4 text-center">
            <p className="font-display text-sm font-semibold text-white">Your One Stop Computer Shop</p>
            <p className="mt-0.5 text-xs text-white/60">Electronics Plaza • S.P. Road, Bangalore</p>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3.5 py-1 text-xs font-semibold text-ember">
          <span>{BUSINESS.tagline}</span>
        </div>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {BUSINESS.pitch}
        </h2>
        <p className="mt-5 max-w-lg leading-relaxed text-white/70">
          Renuka Computers Inc is located at Electronics Plaza on S.P. Road, Bengaluru — the heart of South India’s IT
          hardware and electronics market. We assist students, creators, professionals, and corporate offices in
          selecting the right computing systems, peripherals, CCTV security, and software solutions.
        </p>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/50">
          We pride ourselves on providing quick & reliable service, authentic branded components, and prompt in-store
          assistance.
        </p>
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
  const commitments = [
    {
      title: 'Genuine Products',
      desc: 'All products sourced directly with manufacturer warranties from Dell, HP, Lenovo, ASUS, Canon, and Epson.',
    },
    {
      title: 'Quick Turnaround',
      desc: 'Laptop and desktop repair issues inspected with chip-level diagnostics and fast turnaround times.',
    },
    {
      title: 'Competitive S.P. Road Pricing',
      desc: 'Take advantage of direct S.P. Road wholesale and retail rates on computers, accessories, and consumables.',
    },
  ]
  return (
    <section className="bg-graphite/60 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          title="Our Commitment to Customers"
          text="Why businesses, professionals, and tech enthusiasts trust Renuka Computers Inc."
        />
        <ul className="grid gap-4 md:grid-cols-3">
          {commitments.map((c) => (
            <li key={c.title} className="rounded-3xl border border-white/10 bg-graphite p-6">
              <h3 className="font-display text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{c.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
