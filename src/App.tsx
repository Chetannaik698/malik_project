import { useCallback, useState } from 'react'
import { AnnouncementBar, Navbar, Footer, BackToTop } from './components/layout/Chrome'
import { EnquiryModal } from './components/ui/EnquiryModal'
import { ThemeProvider } from './lib/theme'
import HomePage from './pages/HomePage'

export default function App() {
  const [m, setM] = useState<{ open: boolean; subject?: string }>({ open: false })
  const enquire = (subject?: string) => setM({ open: true, subject })
  const close = useCallback(() => setM((s) => ({ ...s, open: false })), [])

  return (
    <ThemeProvider>
      <AnnouncementBar />
      <Navbar onEnquire={() => enquire()} />
      <HomePage onEnquire={enquire} />
      <Footer />
      <BackToTop />
      <EnquiryModal open={m.open} subject={m.subject} onClose={close} />
    </ThemeProvider>
  )
}
