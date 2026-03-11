interface Props {
  eyebrow: string
  title: string
  highlight?: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({ eyebrow, title, highlight, subtitle, center = true }: Props) {
  return (
    <div className={`reveal mb-14 ${center ? 'text-center' : ''}`}>
      <p className="text-brand-400 font-mono text-xs tracking-[0.22em] uppercase mb-3">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`text-gray-400 text-base leading-relaxed ${center ? 'max-w-xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
