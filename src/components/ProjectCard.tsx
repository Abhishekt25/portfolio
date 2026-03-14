
import type { Project } from '../types'

interface Props {
  project: Project
  delay?: number
}

export default function ProjectCard({ project, delay = 0 }: Props) {
  return (
    <div
      className="reveal glass rounded-3xl overflow-hidden card-hover group"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Thumbnail */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl font-black text-white/10 select-none">
              {project.name[0]}
            </span>
          </div>
        )}

        {/* Dark gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />

        {/* Type badge */}
        <div className="absolute bottom-3 left-4">
          <span className="text-[11px] font-mono text-white/60 bg-white/10 backdrop-blur px-2 py-1 rounded-full">
            {project.type}
          </span>
        </div>

        {/* Hover overlay */}
        {/* <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold rounded-full transition-colors"
          >
            <Github size={13} /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold rounded-full transition-colors"
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        </div> */}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 group-hover:text-brand-400 transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.desc}</p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.metrics.map(m => (
            <span key={m} className="text-xs bg-brand-600/15 text-brand-400 px-2 py-1 rounded-full font-medium">
              {m}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-[11px] font-mono bg-white/5 border border-white/8 text-gray-400 px-2 py-1 rounded-md hover:border-brand-600/30 hover:text-brand-300 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
