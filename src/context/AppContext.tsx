import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { translations } from '../i18n/translations'
import type { Lang } from '../i18n/translations'

type Theme = 'dark' | 'light'

interface AppContextValue {
  theme: Theme
  toggleTheme: () => void
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations['fr']
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) ?? 'dark'
  })

  const [lang, setLangState] = useState<Lang>(() => {
    return (localStorage.getItem('lang') as Lang) ?? 'fr'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, setLang, t: translations[lang] }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
