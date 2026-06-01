import './App.css'
import { AppProvider } from './context/AppContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Experiences } from './components/Experiences'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'

function App() {
  return (
    <AppProvider>
      <Navbar />
      <main>
        <Hero />
        <Experiences />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </AppProvider>
  )
}

export default App
