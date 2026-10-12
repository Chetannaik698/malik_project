import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { EnquiryForm } from './EnquiryForm'
import logoImg from '../../images/logo.png'
export function EnquiryModal({ open, subject, onClose }: { open: boolean; subject?: string; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const prev = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    ref.current?.querySelector<HTMLElement>('input')?.focus()
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && ref.current) {
        const f = ref.current.querySelectorAll<HTMLElement>('button,input,select,textarea,a[href]')
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', key)
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = ''; prev?.focus() }
  }, [open, onClose])
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
          <motion.div ref={ref} role="dialog" aria-modal="true" aria-labelledby="enq-title" className="max-h-[92vh] w-full max-w-md overflow-y-auto rounded-3xl border border-white/10 bg-graphite p-6" initial={{ y: 24, scale: 0.97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 12, opacity: 0 }}>
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src={logoImg} alt="Renuka Computers" className="h-10 w-auto object-contain" />
                <div><h2 id="enq-title" className="font-display text-xl text-white">Send an enquiry</h2>{subject && <p className="mt-1 text-sm text-white/60">About: {subject}</p>}</div>
              </div>
              <button onClick={onClose} aria-label="Close enquiry form" className="grid h-11 w-11 place-items-center rounded-full hover:bg-white/10"><X size={20} /></button>
            </div>
            <EnquiryForm id="modal" subject={subject} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
