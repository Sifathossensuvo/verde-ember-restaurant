import { useEffect, useRef, useState } from 'react'

export function useInView(opts = { threshold: 0.2 }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect() }
    }, opts)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, seen]
}

export function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const [ref, seen] = useInView({ threshold: 0.15 })
  return (
    <Tag ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`} style={{ '--d': `${delay}ms` }}>
      {children}
    </Tag>
  )
}

export function Counter({ to, suffix = '', decimals = 0 }) {
  const [ref, seen] = useInView({ threshold: 0.5 })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!seen) return
    let raf, start
    const tick = (t) => {
      start ??= t
      const p = Math.min((t - start) / 1600, 1)
      setV(to * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen])
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>
}

export function useScrollY() {
  const [y, setY] = useState(0)
  useEffect(() => {
    const f = () => setY(window.scrollY)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return y
}
