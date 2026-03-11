import { useState, type FormEvent } from 'react'
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import Toast from '../components/Toast'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call — wire to your backend / Formspree / EmailJS
    await new Promise(r => setTimeout(r, 1600))
    setLoading(false)
    setForm({ name: '', email: '', subject: '', message: '' })
    setToast(true)
  }

  const socials = [
    { icon: <Mail size={18} />, label: 'Email', value: personalInfo.email,    href: `mailto:${personalInfo.email}`,   color: 'group-hover:bg-brand-600' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/abhishektiwari', href: personalInfo.linkedin, color: 'group-hover:bg-blue-600' },
    { icon: <Github size={18} />, label: 'GitHub',   value: 'github.com/abhishektiwari',    href: personalInfo.github,   color: 'group-hover:bg-gray-600' },
    { icon: <Twitter size={18} />, label: 'Twitter',  value: '@abhishektiwari',               href: personalInfo.twitter,  color: 'group-hover:bg-sky-500'  },
  ]

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="06. Get in Touch"
          title="Let's"
          highlight="Connect"
          subtitle="Have a project in mind? Let's talk. I'm open to full-time roles and freelance projects globally."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Form ── */}
          <div className="reveal glass rounded-3xl p-8">
            <h3 className="font-bold text-xl mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-gray-400 font-mono uppercase tracking-wide mb-2 block">
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-mono uppercase tracking-wide mb-2 block">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="form-input"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-400 font-mono uppercase tracking-wide mb-2 block">
                  Subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                  className="form-input"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 font-mono uppercase tracking-wide mb-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="form-input resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"/>
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ── Info ── */}
          <div className="reveal space-y-6">
            <div>
              <h3 className="font-bold text-xl mb-2">Let's talk about your project</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Open to full-time roles and freelance projects. I deliver clean code,
                cloud-ready backends, and UIs that convert — on time, every time.
              </p>
            </div>

            <div className="space-y-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 glass rounded-2xl p-4 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-white transition-all duration-300 ${s.color}`}>
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-mono uppercase tracking-wide mb-0.5">
                      {s.label}
                    </div>
                    <div className="text-sm font-semibold text-white">{s.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability card */}
            <div className="glass rounded-2xl p-5 border border-green-500/20 bg-green-600/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Currently Available</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Open to full-time positions and select freelance projects. Typical response time: within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Toast show={toast} onClose={() => setToast(false)} />
    </section>
  )
}
