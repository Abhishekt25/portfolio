import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const handler = () => {
      let current = sectionIds[0]
      sectionIds.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [sectionIds])

  return active
}
