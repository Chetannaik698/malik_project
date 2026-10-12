import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { categories, products } from '../../data/content'
import { Art } from '../ui/Art'
import { Reveal, SectionHeading } from '../ui/Reveal'
import { ProductCard } from '../ui/ProductCard'
type E = { onEnquire: (s?: string) => void }
export function Categories({ onEnquire }: E) {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading title="Explore by Category" text="All your computer needs under one roof. Laptops, desktops, CCTV, networking, accessories, and repair service on S.P. Road." />
      <div className="grid auto-rows-[minmax(190px,auto)] gap-4 md:grid-cols-4">
        {categories.map((c, i) => (
          <Reveal key={c.id} delay={(i % 4) * 0.05} className={c.span}>
            <button onClick={() => onEnquire(c.title)} className={`group relative flex h-full min-h-[200px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 p-6 text-left transition-colors hover:border-ember/60 ${i % 3 === 0 ? 'bg-gradient-to-br from-steel to-graphite' : 'bg-graphite'}`}>
              <div><h3 className="font-display text-xl text-white">{c.title}</h3><p className="mt-2 max-w-[16rem] text-sm text-white/60">{c.text}</p></div>
              <Art kind={c.art} className={`pointer-events-none absolute -bottom-6 -right-6 w-[62%] opacity-90 transition-transform duration-500 group-hover:scale-110 ${i === 0 ? 'md:w-[78%]' : ''}`} />
              <span className="relative mt-6 text-sm text-ember">Enquire about {c.title.split(' ')[0].toLowerCase()}</span>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
export function FeaturedProducts({ onEnquire }: E) {
  const [cat, setCat] = useState('all')
  const list = cat === 'all' ? products : products.filter((p) => p.cat === cat)
  return (
    <section id="products" className="bg-graphite/60 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading title="Popular Products & Solutions" text="Best Brands, Best Prices. Genuine hardware, surveillance systems, networking, and consumables available in-store and on order." />
        <div role="group" aria-label="Filter products by category" className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-2">
          {[{ id: 'all', title: 'All' }, ...categories].map((c) => <button key={c.id} aria-pressed={cat === c.id} onClick={() => setCat(c.id)} className={`min-h-11 shrink-0 rounded-full border px-5 text-sm transition-colors ${cat === c.id ? 'border-ember bg-ember text-ink' : 'border-white/15 text-white/70 hover:text-white'}`}>{c.title}</button>)}
        </div>
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"><AnimatePresence mode="popLayout">{list.map((p) => <ProductCard key={p.id} p={p} onEnquire={onEnquire} />)}</AnimatePresence></motion.div>
      </div>
    </section>
  )
}
