import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 lg:px-12 bg-dark-800">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="04. Journey"
          title="Work"
          highlight="Experience"
        />

        {/* Timeline */}
        <div className="relative timeline-line pl-12">
          {experience.map((exp, i) => (
            <div
              key={exp.id}
              className="reveal relative pb-12 last:pb-0"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Dot */}
              <div
                className={`absolute -left-[34px] top-0 w-8 h-8 ${exp.color} rounded-full flex items-center justify-center z-10 ring-4 ring-dark-800`}
              >
                {exp.current
                  ? <span className="text-xs">★</span>
                  : <Briefcase size={12} />
                }
              </div>

              {/* Card */}
              <div className="glass rounded-3xl p-6 card-hover">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                    <div className="text-brand-400 font-semibold text-sm mt-0.5">{exp.company}</div>
                    <div className="text-xs text-gray-500 font-mono mt-1">{exp.type}</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="text-[11px] text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2.5">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                      <span className="text-brand-500 shrink-0 mt-0.5">▸</span>
                      <span dangerouslySetInnerHTML={{
                        __html: pt.replace(
                          /(\d[\d,K+]+(?:ms|%|\/month|\/day|K\+)?|\$[\d,]+\/month)/g,
                          '<span class="text-brand-400 font-semibold">$1</span>'
                        )
                      }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
