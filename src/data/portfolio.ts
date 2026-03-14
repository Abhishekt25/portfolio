// ✏️  Edit THIS file to update ALL your info across the entire portfolio

import type { SkillCategory, Project, ExperienceItem, Service, Cert, NavLink } from '../types'
import resume from '../assets/resume/AbhishekResume.pdf'


/* ─── Personal ─── */
export const personalInfo = {
  name:       'Abhishek Tiwari',
  firstName:  'Abhishek',
  lastName:   'Tiwari',
  initials:   'AT',
  role:       'Full Stack Developer',
  taglines: [
    'React & Next.js Developer',
    'Node.js & PHP Expert',
    'AWS Cloud Practitioner',
    'E-Commerce Specialist',
  ],
  bio: [
    "I'm a Full Stack Developer with 3+ years of experience building production-grade web applications for e-commerce, property technology, and enterprise clients.",
    'Currently at CartZen Commerce (Remote), scaling platforms to 80,000+ monthly users with a 98+ Lighthouse score.',
    'I specialize in React, Next.js, Node.js, PHP & Laravel — from high-conversion storefronts and payment integrations to verification dashboards and automated reporting systems.',
  ],
  location:    'Jaipur, Rajasthan 🇮🇳',
  email:       'abtiwari2023@gmail.com',
  linkedin:    'https://www.linkedin.com/in/abhishek-tiwari-9005893a5/',
  github:      'https://github.com/Abhishekt25/',
 cvUrl: resume,
  available:   true,
  stats: [
    { value: '3+',   label: 'Years Exp.'    },
    { value: '80K+', label: 'Users Served'  },
    { value: '20+',  label: 'APIs Built'    },
    { value: '98+',  label: 'Lighthouse'    },
  ],
}

/* ─── Nav ─── */
export const navLinks: NavLink[] = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Services',   href: '#services'   },
  { label: 'Contact',    href: '#contact'    },
]

/* ─── Certifications ─── */
export const certifications: Cert[] = [
  {
    icon: '☁️', name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services', year: '2023',
    color:  'from-orange-600/20 to-yellow-600/20',
    border: 'border-orange-500/20',
  },
  {
    icon: '⬡', name: 'Meta Front-End Developer',
    issuer: 'Coursera / Meta', year: '2022',
    color:  'from-blue-600/20 to-indigo-600/20',
    border: 'border-blue-500/20',
  },
  {
    icon: '◈', name: 'Google Cloud Associate',
    issuer: 'Google', year: '2023',
    color:  'from-green-600/20 to-teal-600/20',
    border: 'border-green-500/20',
  },
]

/* ─── Education ─── */
export const education = {
  degree:     'B.Tech Computer Science & Engineering',
  university: 'Dr. APJ Abdul Kalam Technical University',
  year:       '2019 – 2023',
}

/* ─── Skills ─── */
export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: '⚛️',
    color: 'from-blue-500 to-cyan-500',
    items: [
      { name: 'React',        level: 95 },
      { name: 'Next.js 14',   level: 90 },
      { name: 'TypeScript',   level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js',       level: 75 },
      { name: 'Redux',        level: 82 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-purple-500 to-pink-500',
    items: [
      { name: 'Node.js',    level: 92 },
      { name: 'PHP',        level: 88 },
      { name: 'Laravel',    level: 85 },
      { name: 'Express.js', level: 90 },
      { name: 'GraphQL',    level: 78 },
      { name: 'Python',     level: 65 },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'from-green-500 to-teal-500',
    items: [
      { name: 'MySQL',         level: 90 },
      { name: 'PostgreSQL',    level: 85 },
      { name: 'MongoDB',       level: 78 },
      { name: 'Redis',         level: 80 },
      { name: 'Elasticsearch', level: 72 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '☁️',
    color: 'from-orange-500 to-red-500',
    items: [
      { name: 'AWS',             level: 82 },
      { name: 'Docker',          level: 78 },
      { name: 'GitHub Actions',  level: 85 },
      { name: 'CI/CD',           level: 80 },
      { name: 'Jest+Playwright', level: 87 },
      { name: 'Git',             level: 95 },
    ],
  },
]

/* ─── Projects ─── */
export const projects: Project[] = [
  {
    id: 1,
    name: 'PropVerify',
    type: 'Property Tech Platform',
    filter: 'fullstack',
    desc: 'Full-stack tenancy management platform for UK letting agents. AML verification, credit checks, automated PDF compliance reports, multi-portfolio landlord management.',
    tech: ['PHP', 'CakePHP', 'MySQL', 'Puppeteer', 'AML', 'AWS S3'],
    metrics: ['100% Compliance', 'Auto PDF Reports'],
    gradient: 'from-blue-600 to-cyan-600',
    github: 'https://github.com/abhishektiwari',
    demo: '#',
  },
  {
    id: 2,
    name: 'NexCart',
    type: 'Multi-vendor Marketplace',
    filter: 'ecommerce',
    desc: 'WordPress + WooCommerce marketplace with 200+ sellers, custom vendor dashboards, and commission-based Stripe payouts. Processing 10K+ monthly orders.',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'Stripe', 'Redis', 'AWS S3'],
    metrics: ['10K+ Orders/mo', '99.9% Uptime'],
    gradient: 'from-purple-600 to-pink-600',
    github: 'https://github.com/abhishektiwari',
    demo: '#',
  },
  {
    id: 3,
    name: 'SkyCart',
    type: 'Headless Shopify Store',
    filter: 'frontend',
    desc: 'Custom headless storefront on Next.js 14 + Shopify Storefront API with advanced filtering, serverless checkout, and 88ms search latency.',
    tech: ['Next.js 14', 'TypeScript', 'Shopify API', 'Tailwind', 'Vercel'],
    metrics: ['98+ Lighthouse', '88ms Search'],
    gradient: 'from-green-600 to-teal-600',
    github: 'https://github.com/abhishektiwari',
    demo: '#',
  },
  {
    id: 4,
    name: 'API Engine',
    type: 'Backend Infrastructure',
    filter: 'backend',
    desc: 'High-throughput REST + GraphQL API layer for catalog, cart, checkout, and order fulfillment. Handles 1.2M+ requests per day with zero-downtime deploys.',
    tech: ['Node.js', 'GraphQL', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: ['1.2M+ Req/day', '20+ Endpoints'],
    gradient: 'from-orange-600 to-red-600',
    github: 'https://github.com/abhishektiwari',
    demo: '#',
  },
  {
    id: 5,
    name: 'CartZen Dashboard',
    type: 'Admin Dashboard',
    filter: 'fullstack',
    desc: 'Real-time admin dashboard with analytics, inventory management, order tracking, and automated reporting with interactive charts.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Chart.js'],
    metrics: ['Real-time Data', 'Custom Reports'],
    gradient: 'from-indigo-600 to-blue-600',
    github: 'https://github.com/abhishektiwari',
    demo: '#',
  },
  {
    id: 6,
    name: 'PayFlow',
    type: 'Payment Gateway Integration',
    filter: 'backend',
    desc: 'Idempotent payment webhook system for Stripe, Razorpay & PayPal. Reduced failed payments by 62% with real-time status updates and retry logic.',
    tech: ['Node.js', 'Stripe', 'Razorpay', 'PayPal', 'Redis'],
    metrics: ['62% Less Failures', 'Real-time Updates'],
    gradient: 'from-yellow-600 to-orange-600',
    github: 'https://github.com/abhishektiwari',
    demo: '#',
  },
]

/* ─── Experience ─── */
export const experience: ExperienceItem[] = [
  {
    id: 1,
    role:    'Full Stack Developer',
    company: 'ByteNova Technologies',
    type:    'Remote · Full-Time',
    period:  'Mar 2022 – Present',
    current: true,
    color:   'bg-brand-600',
    points: [
      'Built MERN + Next.js 14 storefronts scaling to 80,000+ monthly users with a 98+ Lighthouse score.',
      'Designed 20+ RESTful & GraphQL APIs (Node.js + Express + PostgreSQL) handling 1.2M+ requests/day.',
      'Integrated Stripe, Razorpay & PayPal with idempotent webhooks — reduced failed payments by 62%.',
      'Redis + Elasticsearch search pipeline: latency from 850ms → 88ms, add-to-cart conversion up 18%.',
      'AWS S3 → Lambda → CloudFront image pipeline: 40% faster page loads, $1,200/month cloud savings.',
      'Set up GitHub Actions CI/CD + Docker blue-green deployments — zero-downtime daily releases.',
      '87% test coverage via Jest + Playwright — 55% fewer production bugs quarter-over-quarter.',
    ],
  },
  {
    id: 2,
    role:    'Freelance Full Stack Developer',
    company: 'Self-Employed',
    type:    'Remote · Freelance',
    period:  '2021 – 2022',
    current: false,
    color:   'bg-purple-600',
    points: [
      'Delivered custom WordPress & WooCommerce solutions for 10+ UK and India-based clients.',
      'Built custom Shopify themes and Liquid templates for e-commerce brands.',
      'Developed REST APIs for mobile app backends using Node.js and MySQL.',
    ],
  },
]

/* ─── Services ─── */
export const services: Service[] = [
  {
    icon: '🌐', title: 'Web Development',
    desc: 'Modern, fast, responsive websites with React, Next.js, and the latest web standards. SEO optimized & fully accessible.',
    color: 'from-blue-600/15 to-cyan-600/10', border: 'border-blue-500/15',
  },
  {
    icon: '⚡', title: 'Full Stack Development',
    desc: 'End-to-end development — frontend, backend, database design, APIs, and cloud deployment. Full ownership from day one.',
    color: 'from-purple-600/15 to-pink-600/10', border: 'border-purple-500/15',
  },
  {
    icon: '🔌', title: 'API Development',
    desc: 'Scalable RESTful and GraphQL APIs built with Node.js, PHP & Laravel. Documented, tested, and production-ready.',
    color: 'from-green-600/15 to-teal-600/10', border: 'border-green-500/15',
  },
  {
    icon: '🚀', title: 'Performance Optimization',
    desc: 'Speed audits, Core Web Vitals improvements, Redis caching, CDN setup, and image pipeline engineering.',
    color: 'from-orange-600/15 to-red-600/10', border: 'border-orange-500/15',
  },
  {
    icon: '🛒', title: 'E-Commerce Development',
    desc: 'Custom Shopify stores, WooCommerce marketplaces, payment integrations (Stripe, Razorpay, PayPal), checkout flows.',
    color: 'from-yellow-600/15 to-orange-600/10', border: 'border-yellow-500/15',
  },
  {
    icon: '☁️', title: 'Cloud & DevOps',
    desc: 'AWS infrastructure setup, Docker containerization, CI/CD pipelines with GitHub Actions, and server management.',
    color: 'from-indigo-600/15 to-blue-600/10', border: 'border-indigo-500/15',
  },
]
