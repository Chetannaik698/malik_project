import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Art } from './Art'
import { Button } from './Button'
import type { Product } from '../../types'

export function ProductCard({ p, onEnquire }: { p: Product; onEnquire: (s: string) => void }) {
  const rating = p.rating ?? 4.0
  const count = p.ratingsCount ?? 5

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-graphite transition-all duration-300 hover:border-ember/50 hover:shadow-xl hover:shadow-ember/5"
    >
      {/* Product Image Stage */}
      <div className="relative flex h-52 w-full items-center justify-center overflow-hidden bg-white/95 p-4 transition-transform duration-300">
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            className="max-h-44 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : p.art ? (
          <div className="flex h-full w-full items-center justify-center bg-steel/90">
            <Art kind={p.art} className="h-40 w-auto" />
          </div>
        ) : null}

        <span className="absolute left-3 top-3 rounded-md bg-ink/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          {p.brand}
        </span>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold text-white line-clamp-2 leading-snug group-hover:text-ember transition-colors">
          {p.name}
        </h3>

        {/* Star Ratings */}
        <div className="mt-2.5 flex items-center gap-1.5">
          <div className="flex text-amber-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={14}
                className={star <= Math.floor(rating) ? 'fill-amber-400 text-amber-400' : star - rating < 1 ? 'fill-amber-400/50 text-amber-400' : 'text-white/20'}
              />
            ))}
          </div>
          <span className="text-xs text-white/50">{count} Ratings</span>
        </div>

        {/* Specs */}
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {p.specs.slice(0, 3).map((s) => (
            <li
              key={s}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70"
            >
              {s}
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5 border-t border-white/10">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-white/40 block">Price</span>
            <p className="font-display text-lg font-bold text-white">{p.price}</p>
          </div>
          <Button
            className="!min-h-10 !px-4 !text-xs font-semibold shadow-md shadow-ember/10"
            onClick={() => onEnquire(`${p.name} (${p.price})`)}
          >
            Get Best Deal
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
