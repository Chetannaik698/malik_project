import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
type P = { children: ReactNode; variant?: 'primary' | 'ghost'; href?: string; onClick?: () => void; className?: string; type?: 'button' | 'submit'; disabled?: boolean }
export function Button({ children, variant = 'primary', href, onClick, className = '', type = 'button', disabled }: P) {
  const cls = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-colors disabled:opacity-60 ${variant === 'primary' ? 'bg-ember text-ink hover:bg-orange-400' : 'border border-white/20 text-white hover:bg-white/10'} ${className}`
  if (href) {
    const ext = href.startsWith('http')
    return <motion.a whileTap={{ scale: 0.97 }} href={href} className={cls} {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})}>{children}</motion.a>
  }
  return <motion.button whileTap={{ scale: 0.97 }} type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</motion.button>
}
