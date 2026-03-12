import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Services from './sections/Services'
import Contact from './sections/Contact'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useTheme } from './hooks/useTheme'

export default function App() {

  const { dark } = useTheme()
  useScrollReveal()

  return (
   <div className={`min-h-screen font-sans antialiased overflow-x-hidden transition-colors duration-300 ${
  dark ? 'bg-dark-900 text-white' : 'bg-slate-50 text-gray-900'
}`}>
      <Cursor />
      <Navbar />

      <main>
        <Hero />

        <div className="section-divider" />
        <About />

        <div className="section-divider" />
        <Skills />

        <div className="section-divider" />
        <Projects />

        <div className="section-divider" />
        <Experience />

        <div className="section-divider" />
        <Services />

        <div className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
