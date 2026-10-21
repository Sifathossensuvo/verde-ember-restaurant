import { useEffect, useState } from 'react'
import { Reveal, Counter, useScrollY } from './hooks.jsx'
import { IMG, nav, marquee, stats, signature, menu, process, testimonials, faqs } from './data.js'

const taka = (n) => `৳${n.toLocaleString('en-IN')}`

/* 1 — Navbar */
export function Navbar() {
  const y = useScrollY()
  const [open, setOpen] = useState(false)
  const [prog, setProg] = useState(0)
  useEffect(() => {
    const f = () => setProg(window.scrollY / (document.body.scrollHeight - innerHeight))
    f(); addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`nav ${y > 40 ? 'solid' : ''}`}>
      <a href="#top" className="logo">Verde<span>Ember</span></a>
      <nav className={open ? 'open' : ''}>
        {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
        <a href="#reserve" className="btn small" onClick={() => setOpen(false)}>Book a table</a>
      </nav>
      <button className={`burger ${open ? 'x' : ''}`} aria-label="Menu" onClick={() => setOpen(!open)}><i /><i /></button>
      <div className="progress" style={{ transform: `scaleX(${prog})` }} />
    </header>
  )
}



/* 2 — Hero */
export function Hero() {
  const y = useScrollY()
  const words = ['Fire,', 'garden', 'and', 'a', 'long', 'table.']
  return (
    <section className="hero" id="top">
      <div className="orb o1 hidden" /><div className="hidden orb o2" />
      <div className="hero-copy">
        <p className="hero-tag"><b /> Now open for dinner in Gulshan, Dhaka</p>
        <h1>{words.map((w, i) => <span key={i} className="w" style={{ '--i': i }}><em>{w}</em></span>)}</h1>
        <p className="lead">Verde Ember is a wood-fired kitchen built around what grows nearby. Simple food, cooked slowly, served warm.</p>
        <div className="row">
          <a href="#reserve" className="btn">Reserve a table</a>
          <a href="#menu" className="btn ghost">See the menu</a>
        </div>
      </div>
      <div className="hero-plate">
        <div className="ring" style={{ transform: `rotate(${y * 0.12}deg)` }}>
          <svg viewBox="0 0 200 200"><defs><path id="c" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" /></defs>
            <text><textPath href="#c">fresh from the fire • picked this morning • cooked slowly •</textPath></text></svg>
        </div>
        <div className="plate" style={{ transform: `translateY(${y * -0.06}px)` }}>
          <img src={IMG.hero} alt="Plated dish from the Verde Ember kitchen" />
        </div>
        <div className="chip c1">🌿 Garden herbs</div>
        <div className="chip c2">🔥 Wood fired</div>
      </div>
    </section>
  )
}

/* 3 — Marquee */
export function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">{items.map((t, i) => <span key={i}>{t}<i>✦</i></span>)}</div>
    </div>
  )
}

/* 4 — Story */
export function Story() {
  return (
    <section className="sec story" id="story">
      <Reveal className="story-img">
        <img src={IMG.interior} alt="Dining room with warm lighting" />
        <img className="inset" src={IMG.interior2} alt="Table set for dinner" />
      </Reveal>
      <div>
        <Reveal><h2>We cook the way our grandmothers did, just with better ovens.</h2></Reveal>
        <Reveal delay={120}><p>Verde Ember started in 2014 as a six-table room above a bookshop. We had one oven, one chef and a lot of opinions about tomatoes.</p></Reveal>
        <Reveal delay={200}><p>Today the room is bigger but the idea is the same: buy from people we know, cook with real fire, and never rush a plate. Come hungry, stay as long as you like.</p></Reveal>
        <Reveal delay={280}><a href="#chef" className="link">Meet the people behind the kitchen</a></Reveal>
      </div>
    </section>
  )
}

/* 5 — Stats */
export function Stats() {
  return (
    <section className="stats">
      {stats.map((s, i) => (
        <Reveal key={i} delay={i * 90}>
          <strong><Counter to={s.n} suffix={s.s} decimals={s.d || 0} /></strong>
          <span>{s.l}</span>
        </Reveal>
      ))}
    </section>
  )
}

/* 6 — Signature dishes */
export function Signature() {
  return (
    <section className="sec" id="signature">
      <Reveal><h2 className="center">The dishes people come back for</h2></Reveal>
      <div className="sig-grid">
        {signature.map((d, i) => (
          <Reveal key={d.name} delay={i * 100} className="sig">
            <div className="sig-img"><img src={d.img} alt={d.name} loading="lazy" /></div>
            <div className="sig-body">
              <h3>{d.name}</h3>
              <p>{d.note}</p>
              <b>{taka(d.price)}</b>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* 7 — Menu */
export function Menu() {
  const tabs = Object.keys(menu)
  const [tab, setTab] = useState(tabs[0])
  return (
    <section className="sec menu" id="menu">
      <Reveal><h2 className="center">Tonight’s menu</h2></Reveal>
      <div className="tabs" role="tablist">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} className={tab === t ? 'on' : ''} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>
      <ul className="list" key={tab}>
        {menu[tab].map(([n, d, p], i) => (
          <li key={n} style={{ '--i': i }}>
            <div><h3>{n}</h3><p>{d}</p></div>
            <span className="dots" /><b>{taka(p)}</b>
          </li>
        ))}
      </ul>
    </section>
  )
}

/* 8 — Process */
export function Process() {
  return (
    <section className="sec process">
      <Reveal><h2>From the field to your fork</h2></Reveal>
      <div className="steps">
        {process.map((s, i) => (
          <Reveal key={i} delay={i * 140} className="step">
            <h3>{s.t}</h3><p>{s.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* 9 — Chef */
export function Chef() {
  return (
    <section className="sec chef" id="chef">
      <Reveal className="chef-img"><img src={IMG.chef} alt="Head chef in the kitchen" loading="lazy" /></Reveal>
      <div>
        <Reveal><h2>Chef Rafiq Ahmed</h2></Reveal>
        <Reveal delay={100}><p>Rafiq trained in Kolkata and Lisbon before coming home to open Verde Ember. He tastes every sauce twice a day and has never once served a dish he would not eat himself.</p></Reveal>
        <Reveal delay={180}><blockquote>“Good cooking is mostly patience, salt and a very hot oven.”</blockquote></Reveal>
      </div>
    </section>
  )
}

/* 10 — Offer */
export function Offer() {
  return (
    <section className="offer">
      <Reveal>
        <h2>Friday garden dinner</h2>
        <p>Five courses, shared at one long table under the lights. Every Friday, 7:30 pm.</p>
        <div className="row center-row"><strong>৳2,400 <small>per person</small></strong><a href="#reserve" className="btn dark">Save a seat</a></div>
      </Reveal>
    </section>
  )
}

/* 11 — Gallery */
export function Gallery() {
  const [open, setOpen] = useState(null)
  return (
    <section className="sec" id="gallery">
      <Reveal><h2 className="center">A look inside</h2></Reveal>
      <div className="gal">
        {IMG.g.map((src, i) => (
          <button key={i} className={`g g${i}`} onClick={() => setOpen(src)} aria-label="Open photo">
            <img src={src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
      {open && (
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog">
          <img src={open} alt="" />
          <span>Close</span>
        </div>
      )}
    </section>
  )
}

/* 12 — Testimonials */
export function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [])
  const t = testimonials[i]
  return (
    <section className="sec quotes">
      <div className="quote" key={i}>
        <p>“{t.q}”</p>
        <div><b>{t.a}</b><span>{t.r}</span></div>
      </div>
      <div className="dotsnav">
        {testimonials.map((_, k) => <button key={k} aria-label={`Review ${k + 1}`} className={k === i ? 'on' : ''} onClick={() => setI(k)} />)}
      </div>
    </section>
  )
}

/* 13 — Reservation */
export function Reserve() {
  const [sent, setSent] = useState(null)
  const [err, setErr] = useState('')
  const submit = (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.target))
    if (!/^[0-9+\-\s]{7,}$/.test(f.phone)) return setErr('Please enter a valid phone number so we can confirm.')
    setErr(''); setSent(f)
  }
  return (
    <section className="sec reserve" id="reserve">
      <Reveal className="res-copy">
        <h2>Save your table</h2>
        <p>Tell us when you are coming and we will text you a confirmation within the hour.</p>
        <p className="muted">Open every day, 12:00 pm to 11:00 pm.</p>
      </Reveal>
      <Reveal delay={120}>
        {sent ? (
          <div className="done">
            <div className="tick">✓</div>
            <h3>You are all set, {sent.name.split(' ')[0]}.</h3>
            <p>Table for {sent.guests} on {sent.date} at {sent.time}. We will text {sent.phone} to confirm.</p>
            <button className="btn ghost" onClick={() => setSent(null)}>Make another booking</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <label>Full name<input name="name" required placeholder="Your name" /></label>
            <label>Phone<input name="phone" required placeholder="+880 1XXX XXXXXX" /></label>
            <div className="two">
              <label>Date<input name="date" type="date" required /></label>
              <label>Time<select name="time" defaultValue="8:00 pm">{['6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm'].map((t) => <option key={t}>{t}</option>)}</select></label>
            </div>
            <label>Guests<select name="guests" defaultValue="2">{[1, 2, 3, 4, 5, 6, 8, 10].map((n) => <option key={n}>{n}</option>)}</select></label>
            {err && <p className="err">{err}</p>}
            <button className="btn full">Request booking</button>
          </form>
        )}
      </Reveal>
    </section>
  )
}

/* 14 — FAQ  section*/
export function Faq() {
  const [o, setO] = useState(0)
  return (
    <section className="sec faq">
      <Reveal><h2 className="center">Good to know</h2></Reveal>
      <div className="acc">
        {faqs.map(([q, a], i) => (
          <div key={q} className={`item ${o === i ? 'open' : ''}`}>
            <button aria-expanded={o === i} onClick={() => setO(o === i ? -1 : i)}>{q}<i /></button>
            <div className="ans"><p>{a}</p></div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* 15 — Visit + footer section*/
export function Visit() {
  return (
    <footer className="visit" id="visit">
      <div className="visit-grid">
        <div>
          <a href="#top" className="logo big">Verde<span>Ember</span></a>
          <p>House 14, Road 35, Gulshan 2<br />Dhaka 1212, Bangladesh</p>
        </div>
        <div>
          <h4>Hours</h4>
          <p>Every day<br />12:00 pm to 11:00 pm</p>
        </div>
        <div>
          <h4>Say hello</h4>
          <p>+880 1700 000000<br />hello@verdeember.com</p>
        </div>
        <div>
          <h4>Follow</h4>
          <p><a href="#">Instagram</a><br /><a href="#">Facebook</a></p>
        </div>
      </div>
      <p className="copy">© 2026 Verde Ember. Cooked with patience.</p>
    </footer>
  )
}
