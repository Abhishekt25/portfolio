import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const socials = [
    { icon: <Github size={16} />, href: personalInfo.github,   label: 'GitHub'   },
    { icon: <Linkedin size={16} />, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: <Mail size={16} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

  return (
    <footer className="border-t border-white/5 py-10 px-6 lg:px-12 bg-dark-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div>
          <div className="font-black text-xl gradient-text mb-1">{personalInfo.name}</div>
          <div className="text-sm text-gray-500">{personalInfo.role} · {personalInfo.location}</div>
        </div>

        {/* Socials */}
        <div className="flex gap-3">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-600/40 transition-all hover:scale-110"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright + back to top */}
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="w-10 h-10 bg-brand-600 hover:bg-brand-500 rounded-full flex items-center justify-center transition-all hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
