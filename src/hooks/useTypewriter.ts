import { useState, useEffect } from 'react'

export function useTypewriter(
  lines: string[],
  speed = 80,
  deleteSpeed = 45,
  pauseMs = 1800,
) {
  const [text, setText] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const current = lines[lineIdx]

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, charIdx + 1)
        setText(next)
        if (charIdx + 1 === current.length) {
          setPaused(true)
          setTimeout(() => { setPaused(false); setDeleting(true) }, pauseMs)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        const next = current.slice(0, charIdx - 1)
        setText(next)
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setLineIdx(l => (l + 1) % lines.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, lineIdx, lines, speed, deleteSpeed, pauseMs, paused])

  return text
}
