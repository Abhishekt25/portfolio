import { Download, MapPin, Mail, GraduationCap } from 'lucide-react'
import { personalInfo, certifications, education } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* ── Left ── */}
          <div className="space-y-7">
            <SectionHeading
              eyebrow="01. About Me"
              title="Who"
              highlight="I Am"
              center={false}
            />

            <div className="space-y-4 text-gray-400 leading-relaxed">
              {personalInfo.bio.map((p, i) => (
                <p key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  {p.split(/(React|Next\.js|Node\.js|PHP & Laravel|CartZen Commerce|80,000\+)/).map((part, j) =>
                    ['React', 'Next.js', 'Node.js', 'PHP & Laravel', 'CartZen Commerce', '80,000+'].includes(part)
                      ? <span key={j} className="text-white font-semibold">{part}</span>
                      : part
                  )}
                </p>
              ))}
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3 reveal">
              {[
                { icon: <MapPin size={14} />, label: 'Location', value: personalInfo.location },
                { icon: <Mail size={14} />, label: 'Email', value: personalInfo.email, highlight: true },
                { icon: null, label: 'Availability', value: '● Open to Work', green: true },
                { icon: <GraduationCap size={14} />, label: 'Education', value: 'B.Tech CSE \'23' },
              ].map((item, i) => (
                <div key={i} className="glass rounded-2xl p-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono uppercase tracking-wide mb-1">
                    {item.icon}
                    {item.label}
                  </div>
                  <div className={`text-sm font-semibold ${item.highlight ? 'text-brand-400' : item.green ? 'text-green-400' : 'text-white'}`}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal">
              <a
                href={personalInfo.cvUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-brand-600/40 text-brand-400 hover:bg-brand-600 hover:text-white rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>

          {/* ── Right — Certs + Education ── */}
          <div className="space-y-6">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-4">
              Certifications
            </p>

            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className={`reveal flex items-center gap-4 glass rounded-2xl p-4 border ${cert.border} bg-gradient-to-r ${cert.color} card-hover`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-2xl shrink-0">
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-white truncate">{cert.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{cert.issuer} · {cert.year}</div>
                </div>
                <div className="text-xs px-2.5 py-1 bg-white/10 rounded-full text-gray-400 shrink-0">
                  Verified ✓
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="reveal glass rounded-3xl p-6 card-hover mt-2">
              <div className="text-3xl mb-4">🎓</div>
              <div className="font-bold text-lg text-white mb-1">{education.degree}</div>
              <div className="text-brand-400 text-sm font-medium mb-1">{education.university}</div>
              <div className="text-xs font-mono text-gray-500">{education.year}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
