import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos     = useRef({ x: 0, y: 0 })
  const lag     = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top  = `${e.clientY}px`
      }
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      const interactive = t.closest('a, button, input, textarea, [data-hover]')
      document.body.classList.toggle('cursor-hover', !!interactive)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)

    let raf: number
    const loop = () => {
      lag.current.x += (pos.current.x - lag.current.x) * 0.1
      lag.current.y += (pos.current.y - lag.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = `${lag.current.x}px`
        ringRef.current.style.top  = `${lag.current.y}px`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 10, height: 10, borderRadius: '50%',
          background: '#6366f1', mixBlendMode: 'difference',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 38, height: 38, borderRadius: '50%',
          border: '1.5px solid rgba(99,102,241,0.45)',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s',
        }}
      />
      <style>{`
        body.cursor-hover #cursor-dot  { width: 18px !important; height: 18px !important; }
        body.cursor-hover #cursor-ring { width: 54px !important; height: 54px !important; border-color: #6366f1 !important; }
      `}</style>
    </>
  )
}
