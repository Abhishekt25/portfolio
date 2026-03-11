import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, i * 80)
          }
        })
      },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
    )

    const observe = () => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    }

    observe()

    // Re-observe when DOM changes (e.g. project filter)
    const mutationObs = new MutationObserver(observe)
    mutationObs.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObs.disconnect()
    }
  }, [])
}
