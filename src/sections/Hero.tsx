import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  const typed = useTypewriter(personalInfo.taglines)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg" />

      {/* Ambient blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[480px] h-[480px] rounded-full bg-brand-600/15 blur-[110px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[90px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <div className="space-y-8">

            {/* Availability badge */}
            <motion.div {...fadeUp(0.0)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-mono tracking-widest uppercase">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400">Available for opportunities</span>
              </span>
            </motion.div>

            {/* Name */}
            <motion.div {...fadeUp(0.12)} className="space-y-1">
              <p className="text-brand-400 font-mono text-sm tracking-[0.22em] uppercase">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.92]">
                <span className="text-white">{personalInfo.firstName}</span>
                <br />
                <span className="gradient-text">{personalInfo.lastName}</span>
              </h1>
            </motion.div>

            {/* Role + typewriter */}
            <motion.div {...fadeUp(0.22)}>
              <p className="text-xl md:text-2xl font-semibold text-gray-300">{personalInfo.role}</p>
              <div className="flex items-center gap-1.5 mt-2 font-mono text-sm text-gray-400 h-6">
                <span>{typed}</span>
                <span className="animate-blink border-r-2 border-brand-400 h-4" />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p {...fadeUp(0.32)} className="text-gray-400 leading-relaxed text-base max-w-lg">
              Building{' '}
              <span className="text-white font-semibold">scalable web solutions</span>{' '}
              across e-commerce, property tech & enterprise. React · Next.js · Node.js · PHP · AWS.
            </motion.p>

            {/* Buttons */}
            <motion.div {...fadeUp(0.42)} className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">View Projects →</a>
              <a href="#contact"  className="btn-ghost">Contact Me ✉</a>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.52)} className="flex flex-wrap gap-8 pt-2">
              {personalInfo.stats.map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-black text-white">
                    {s.value.replace('+', '')}<span className="text-brand-400">+</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — Avatar ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Spinning outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-brand-600/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              {/* Glow */}
              <div className="absolute inset-6 rounded-full bg-brand-600/20 blur-3xl" />

              {/* Avatar circle */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full glass glow flex items-center justify-center overflow-hidden"
              >
                {/* Replace div below with <img src="/avatar.jpg" ... /> */}
                <div className="w-full h-full bg-gradient-to-br from-brand-900/80 to-purple-900/80 flex items-center justify-center">
                  <span className="text-7xl font-black text-white/15 select-none">
                    {personalInfo.initials}
                  </span>
                </div>
              </motion.div>

              {/* Floating badges */}
              {[
                { label: '⚛ React',   cls: '-top-4 -right-4',   delay: 1.0, color: 'text-brand-300' },
                { label: '☁ AWS',     cls: '-bottom-4 -left-4', delay: 2.0, color: 'text-purple-300' },
                { label: '⬡ Node.js', cls: 'top-1/2 -right-14', delay: 1.5, color: 'text-green-300' },
              ].map(b => (
                <motion.div
                  key={b.label}
                  className={`absolute ${b.cls} glass rounded-2xl px-3 py-2 text-xs font-mono ${b.color}`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: b.delay }}
                >
                  {b.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-600 font-mono tracking-[0.25em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={14} className="text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
