import { useApp } from '../context/AppContext'

export function Navbar() {
  const { theme, toggleTheme, lang, setLang, t } = useApp()

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="navbar-logo">
          RJFM<span className="dot">.</span>
        </span>
        <ul className="navbar-links">
          <li><a href="#about">{t.navbar.about}</a></li>
          <li><a href="#experiences">{t.navbar.experiences}</a></li>
          <li><a href="#projects">{t.navbar.projects}</a></li>
          <li><a href="#skills">{t.navbar.skills}</a></li>
          <li><a href="#contact" className="navbar-cta">{t.navbar.contact}</a></li>
        </ul>
        <div className="navbar-controls">
          <div className="lang-selector">
            <button
              className={`lang-btn${lang === 'fr' ? ' lang-active' : ''}`}
              onClick={() => setLang('fr')}
              aria-pressed={lang === 'fr'}
            >
              FR
            </button>
            <button
              className={`lang-btn${lang === 'en' ? ' lang-active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            <span className={`theme-toggle-thumb${theme === 'light' ? ' theme-toggle-thumb--light' : ''}`} />
            <span className="theme-icon theme-icon--moon">🌙</span>
            <span className="theme-icon theme-icon--sun">☀️</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
