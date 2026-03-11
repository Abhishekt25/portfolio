import { services } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="05. What I Do"
          title="Services"
          highlight="I Offer"
          subtitle="End-to-end digital solutions tailored to your business needs — from pixel-perfect UIs to cloud-ready backends."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal glass rounded-3xl p-6 card-hover border ${service.border} bg-gradient-to-br ${service.color} group`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="font-bold text-lg mb-3 group-hover:text-brand-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="reveal mt-14 glass rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Have a project in mind?
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm">
            I'm currently available for freelance work and full-time opportunities. Let's build something great.
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  )
}
