import { useEffect } from 'react'
import { Navbar, Hero, Marquee, Story, Stats, Signature, Menu, Process, Chef, Offer, Gallery, Testimonials, Reserve, Faq, Visit } from './sections.jsx'

export default function App() {
  useEffect(() => {
    const f = (e) => {
      document.documentElement.style.setProperty('--mx', e.clientX + 'px')
      document.documentElement.style.setProperty('--my', e.clientY + 'px')
    }
    addEventListener('pointermove', f)
    return () => removeEventListener('pointermove', f)
  }, [])
  return (
    <>
      <div className="glow" />
      <Navbar />
      <main>
        <Hero /><Marquee /><Story /><Stats /><Signature /><Menu /><Process />
        <Chef /><Offer /><Gallery /><Testimonials /><Reserve /><Faq />
      </main>
      <Visit />
    </>
  )
}
