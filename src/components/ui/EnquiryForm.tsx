import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { submitEnquiry, type EnquiryPayload } from '../../lib/api'
import { Button } from './Button'
const TYPES = [
  'Laptops & Desktops Enquiry',
  'Quick Repair & Service',
  'CCTV Security Solutions',
  'Printers & Consumables',
  'Networking Products',
  'Software & Antivirus Licensing',
  'Accessories & Components',
  'Price Quotation / Bulk Order',
]
const field = 'mt-1.5 w-full rounded-xl border border-white/15 bg-ink px-4 py-3 text-sm text-white placeholder:text-white/35'
export function EnquiryForm({ subject, id }: { subject?: string; id: string }) {
  const [v, setV] = useState<EnquiryPayload>({ name: '', contact: '', type: TYPES[0], message: subject ? `I would like to enquire about: ${subject}. ` : '' })
  const [err, setErr] = useState<Partial<EnquiryPayload>>({})
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle')
  const set = (k: keyof EnquiryPayload) => (e: { target: { value: string } }) => setV({ ...v, [k]: e.target.value })
  async function submit(ev: FormEvent) {
    ev.preventDefault()
    const e: Partial<EnquiryPayload> = {}
    if (v.name.trim().length < 2) e.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.contact.trim()) && !/^\+?[\d\s-]{10,15}$/.test(v.contact.trim())) e.contact = 'Enter a valid phone number or email address.'
    if (v.message.trim().length < 10) e.message = 'Add a few details (at least 10 characters).'
    setErr(e)
    if (Object.keys(e).length) return
    setState('sending'); await submitEnquiry(v); setState('done')
  }
  if (state === 'done') return (
    <div role="status" className="rounded-2xl border border-ember/40 bg-ember/10 p-6">
      <CheckCircle2 className="text-ember" aria-hidden />
      <p className="mt-3 font-display text-lg text-white">Enquiry captured (demo)</p>
      <p className="mt-2 text-sm text-white/70">Nothing was sent. Delivering real messages needs backend integration, which comes in the next milestone.</p>
    </div>
  )
  const E = ({ m, i }: { m?: string; i: string }) => m ? <p id={i} className="mt-1 text-xs text-red-300">{m}</p> : null
  return (
    <form onSubmit={submit} noValidate className="grid gap-4">
      <div><label htmlFor={`${id}-n`} className="text-sm text-white">Name</label><input id={`${id}-n`} className={field} value={v.name} onChange={set('name')} autoComplete="name" aria-invalid={!!err.name} aria-describedby={`${id}-ne`} /><E m={err.name} i={`${id}-ne`} /></div>
      <div><label htmlFor={`${id}-c`} className="text-sm text-white">Phone or email</label><input id={`${id}-c`} className={field} value={v.contact} onChange={set('contact')} aria-invalid={!!err.contact} aria-describedby={`${id}-ce`} /><E m={err.contact} i={`${id}-ce`} /></div>
      <div><label htmlFor={`${id}-t`} className="text-sm text-white">Enquiry type</label><select id={`${id}-t`} className={field} value={v.type} onChange={set('type')}>{TYPES.map((t) => <option key={t}>{t}</option>)}</select></div>
      <div><label htmlFor={`${id}-m`} className="text-sm text-white">Message</label><textarea id={`${id}-m`} rows={4} className={field} value={v.message} onChange={set('message')} aria-invalid={!!err.message} aria-describedby={`${id}-me`} /><E m={err.message} i={`${id}-me`} /></div>
      <Button type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending enquiry' : 'Send enquiry'}</Button>
    </form>
  )
}
