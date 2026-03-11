import { useState } from 'react'
import { projects } from '../data/portfolio'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import type { ProjectFilter } from '../types'

const filters: { label: string; value: ProjectFilter }[] = [
  { label: 'All',        value: 'all'       },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend',   value: 'frontend'  },
  { label: 'Backend',    value: 'backend'   },
  { label: 'E-Commerce', value: 'ecommerce' },
]

export default function Projects() {
  const [active, setActive] = useState<ProjectFilter>('all')

  const filtered = active === 'all'
    ? projects
    : projects.filter(p => p.filter === active)

  return (
    <section id="projects" className="py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="03. My Work"
          title="Featured"
          highlight="Projects"
          subtitle="A selection of real-world projects I've built and shipped — from e-commerce platforms to backend APIs."
        />

        {/* Filter buttons */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f.value
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.08} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  )
}
