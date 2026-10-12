import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import logoImage from '../images/logo.png'

export type Theme = 'dark' | 'light'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme | null
      if (saved === 'light' || saved === 'dark') return saved
    }
    return 'dark' // Default is Dark mode
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
      root.classList.remove('light')
    }
    localStorage.setItem('theme', theme)

    const image = new Image()
    image.onload = () => {
      const size = 64
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      const context = canvas.getContext('2d')
      if (!context) return

      const scale = Math.min((size - 6) / image.naturalWidth, (size - 6) / image.naturalHeight)
      const width = image.naturalWidth * scale
      const height = image.naturalHeight * scale
      context.drawImage(image, (size - width) / 2, (size - height) / 2, width, height)
      context.globalCompositeOperation = 'source-in'
      context.fillStyle = theme === 'dark' ? '#ffffff' : '#000000'
      context.fillRect(0, 0, size, size)

      let favicon = document.querySelector<HTMLLinkElement>('link[rel~="icon"]')
      if (!favicon) {
        favicon = document.createElement('link')
        favicon.rel = 'icon'
        document.head.appendChild(favicon)
      }
      favicon.type = 'image/png'
      favicon.href = canvas.toDataURL('image/png')
    }
    image.src = logoImage
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
