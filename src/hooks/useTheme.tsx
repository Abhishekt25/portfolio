import { useState, useEffect, createContext, useContext, type ReactNode } from 'react'

interface ThemeContextValue {
  dark: boolean
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  dark: true,
  toggle: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('theme')
      return saved ? saved === 'dark' : true
    } catch {
      return true
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
    }
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext)
}