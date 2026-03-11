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

export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans antialiased overflow-x-hidden">
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
