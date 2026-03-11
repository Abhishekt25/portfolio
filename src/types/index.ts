export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  category: string
  icon: string
  color: string
  items: Skill[]
}

export type ProjectFilter = 'all' | 'fullstack' | 'frontend' | 'backend' | 'ecommerce'

export interface Project {
  id: number
  name: string
  type: string
  filter: ProjectFilter
  desc: string
  tech: string[]
  metrics: string[]
  gradient: string
  github: string
  demo: string
  image?: string
}

export interface ExperienceItem {
  id: number
  role: string
  company: string
  type: string
  period: string
  current: boolean
  color: string
  points: string[]
}

export interface Service {
  icon: string
  title: string
  desc: string
  color: string
  border: string
}

export interface Cert {
  icon: string
  name: string
  issuer: string
  year: string
  color: string
  border: string
}

export interface NavLink {
  label: string
  href: string
}
