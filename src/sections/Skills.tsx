import { skills } from '../data/portfolio'
import SkillCard from '../components/SkillCard'
import SectionHeading from '../components/SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 lg:px-12 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="02. Tech Stack"
          title="Skills &"
          highlight="Technologies"
          subtitle="The tools and technologies I use to build modern, scalable web applications from frontend to cloud."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((cat, i) => (
            <SkillCard key={cat.category} category={cat} delay={i * 0.1} />
          ))}
        </div>

        {/* Commerce logos strip */}
        <div className="reveal mt-14 glass rounded-3xl p-6">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest text-center mb-6">
            Also experienced with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Shopify', 'WordPress', 'WooCommerce', 'BigCommerce', 'Stripe', 'Razorpay', 'PayPal', 'Laravel', 'CakePHP', 'Figma'].map(t => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1.5 glass rounded-full text-gray-400 hover:text-brand-400 hover:border-brand-600/30 transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
