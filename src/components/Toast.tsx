import { useEffect } from 'react'
import { CheckCircle, X } from 'lucide-react'

interface Props {
  show: boolean
  message?: string
  onClose: () => void
}

export default function Toast({ show, message = 'Message sent! I\'ll get back to you soon.', onClose }: Props) {
  useEffect(() => {
    if (show) {
      const t = setTimeout(onClose, 3500)
      return () => clearTimeout(t)
    }
  }, [show, onClose])

  return (
    <div
      className={`fixed bottom-8 right-6 z-[9999] glass rounded-2xl px-5 py-4 flex items-center gap-3 shadow-2xl transition-all duration-500 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <CheckCircle size={20} className="text-green-400 shrink-0" />
      <div>
        <div className="font-semibold text-sm text-white">Success!</div>
        <div className="text-xs text-gray-400">{message}</div>
      </div>
      <button onClick={onClose} className="ml-2 text-gray-500 hover:text-white transition-colors">
        <X size={16} />
      </button>
    </div>
  )
}
