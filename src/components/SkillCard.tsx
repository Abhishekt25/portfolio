import { useEffect, useRef } from 'react'
import type { SkillCategory } from '../types'

interface Props {
  category: SkillCategory
  delay?: number
}

export default function SkillCard({ category, delay = 0 }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const barsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          barsRef.current.forEach(bar => {
            if (bar) bar.style.width = bar.dataset.width ?? '0%'
          })
        }
      },
      { threshold: 0.3 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="reveal glass rounded-3xl p-6 card-hover"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-lg`}>
          {category.icon}
        </div>
        <h3 className="font-bold text-base">{category.category}</h3>
      </div>

      {/* Skills with bars */}
      <div className="space-y-4">
        {category.items.map((sk, i) => (
          <div key={sk.name}>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <span className="text-gray-300 font-medium">{sk.name}</span>
              <span className="text-gray-500 font-mono">{sk.level}%</span>
            </div>
            <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
              <div
                ref={el => { if (el) barsRef.current[i] = el }}
                className={`skill-fill h-full rounded-full bg-gradient-to-r ${category.color}`}
                style={{ width: '0%' }}
                data-width={`${sk.level}%`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
