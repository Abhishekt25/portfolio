import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { navLinks, personalInfo } from '../data/portfolio'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'services', 'contact']

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-white/5 shadow-2xl shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2" onClick={close}>
              <span className="font-black text-xl tracking-tight gradient-text">
                {personalInfo.initials}
              </span>
              <span className="text-gray-400 font-light">.</span>
              <span className="hidden sm:block text-sm text-gray-500 font-mono">
                {personalInfo.role}
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    active === link.href.replace('#', '')
                      ? 'text-brand-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                  onClick={toggle}
                  className={`w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all border ${
                    dark
                      ? 'bg-white/5 border-white/10 hover:bg-white/10'
                      : 'bg-black/5 border-black/10 hover:bg-black/10'
                  }`}
                  aria-label="Toggle theme"
                >
                  {dark
                    ? <Sun size={15} className="text-yellow-400" />
                    : <Moon size={15} className="text-brand-500" />
                  }
                </button>
              <a
                href="#contact"
                className="btn-primary text-sm px-5 py-2.5"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass border-t border-white/5 px-6 py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className={`text-base font-medium py-2 border-b border-white/5 transition-colors ${
                  active === link.href.replace('#', '')
                    ? 'text-brand-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button onClick={toggle} className="w-10 h-10 glass rounded-full flex items-center justify-center">
                {dark ? <Sun size={16} className="text-yellow-400" /> : <Moon size={16} className="text-brand-400" />}
              </button>
              <a href="#contact" onClick={close} className="btn-primary text-sm flex-1 text-center py-2.5">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
