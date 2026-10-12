import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}
export function SectionHeading({ title, text }: { title: string; text?: string }) {
  return <Reveal className="mb-10 max-w-2xl"><h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>{text && <p className="mt-4 text-base leading-relaxed text-white/60">{text}</p>}</Reveal>
}
