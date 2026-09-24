'use client'

import { useState } from 'react'

const steps = ['Concept', 'Audience', 'Category', 'Scope']
const stats = [
  { label: 'Market clarity', value: '82', tone: 'cyan' },
  { label: 'Founder–market fit', value: '74', tone: 'violet' },
  { label: 'Execution readiness', value: '61', tone: 'amber' },
]

export default function Home() {
  const [activeStep, setActiveStep] = useState(0)
  const [idea, setIdea] = useState('')
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false)

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <nav className="topbar" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="IdeaBridge home">
          <span className="mark">I</span>
          <span>ideabridge</span>
        </a>
        <div className="nav-links">
          <a href="#method">The method</a>
          <a href="#signals">Signals</a>
          <a href="#workspace">Workspace</a>
        </div>
        <button className="nav-cta" onClick={() => document.getElementById('intake')?.scrollIntoView({ behavior: 'smooth' })}>
          Start an idea <span>↗</span>
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> For the ones who see what&apos;s next</p>
          <h1>Make your<br /><em>idea</em> inevitable.</h1>
          <p className="hero-description">IdeaBridge turns the first spark into a clear, fundable path forward — with the signal, structure, and people to help you build it.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => document.getElementById('intake')?.scrollIntoView({ behavior: 'smooth' })}>Shape your idea <span>→</span></button>
            <a className="text-link" href="#method">See how it works <span>↓</span></a>
          </div>
        </div>
        <div className="orb-stage" aria-label="Abstract visualization of an idea becoming a venture">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="orb-glow" /><div className="orb-core"><div className="orb-shine" /></div>
          <div className="signal signal-one"><span /> Problem / 01</div>
          <div className="signal signal-two"><span /> Momentum / 04</div>
          <div className="orb-caption">A thought in motion<br /><small>scroll to transform</small></div>
        </div>
        <div className="scroll-cue"><span className="scroll-line" /> Scroll to explore</div>
      </section>

      <section className="manifesto" id="method">
        <p className="eyebrow">01 — The bridge</p>
        <div className="manifesto-grid"><h2>Every venture<br />starts as a <em>maybe.</em></h2><p>We&apos;re here to help you move from &quot;what if?&quot; to &quot;what&apos;s next?&quot; IdeaBridge brings strategic clarity to the messy middle — where the best companies are born.</p></div>
        <div className="method-grid"><div><span>01</span><h3>Distill the signal</h3><p>Get to the core of the problem worth solving.</p></div><div><span>02</span><h3>Map the opportunity</h3><p>See your market, edge, and path to traction.</p></div><div><span>03</span><h3>Build with conviction</h3><p>Leave with a plan you can believe in.</p></div></div>
      </section>

      <section className="intake-section" id="intake">
        <div className="section-heading"><p className="eyebrow">02 — Your starting point</p><h2>Let&apos;s give your<br /><em>maybe</em> a shape.</h2></div>
        <div className="intake-card">
          <div className="stepper">{steps.map((step, index) => <button key={step} className={index === activeStep ? 'step active' : 'step'} onClick={() => setActiveStep(index)}><span>0{index + 1}</span>{step}</button>)}</div>
          <div className="intake-content"><p className="small-label">Step 0{activeStep + 1} / 04</p><h3>{activeStep === 0 ? 'What are you building?' : activeStep === 1 ? 'Who is it for?' : activeStep === 2 ? 'Where does it live?' : 'What would make it real?'}</h3><p className="muted">{activeStep === 0 ? 'Don’t polish it. Tell us the version that keeps you up at night.' : 'The more specific the person, the sharper the opportunity.'}</p><textarea value={idea} onChange={(event) => setIdea(event.target.value)} placeholder={activeStep === 0 ? 'A short description of the problem you want to solve...' : 'Share a few thoughts to keep building the picture...'} rows={4} /><div className="intake-footer"><span>{idea.length} / 500</span><button className="primary-button" onClick={() => activeStep < 3 ? setActiveStep(activeStep + 1) : setIsWorkspaceOpen(true)}>{activeStep < 3 ? 'Continue' : 'See my signal'} <span>→</span></button></div></div>
        </div>
      </section>

      <section className="signals-section" id="signals"><div className="section-heading compact"><p className="eyebrow">03 — The signal</p><h2>Clarity you can<br /><em>act on.</em></h2></div><div className="stats-grid">{stats.map((stat) => <article className="stat-card" key={stat.label}><div className={`stat-ring ${stat.tone}`}><strong>{stat.value}</strong><small>%</small></div><p>{stat.label}</p><span>Early read</span></article>)}</div></section>

      <section className="workspace-section" id="workspace"><div className="workspace-copy"><p className="eyebrow">04 — The workspace</p><h2>One place for<br />your <em>next move.</em></h2><p>Market maps. Competitor context. A roadmap you can actually follow. Your idea, with the fog removed.</p><button className="secondary-button" onClick={() => setIsWorkspaceOpen(true)}>Preview workspace <span>↗</span></button></div><div className="workspace-preview"><div className="preview-top"><span>IDEABRIDGE / SIGNAL REPORT</span><span>APR 2025</span></div><div className="preview-line" /><p className="preview-label">Your opportunity thesis</p><h3>Make sustainable choices<br /><em>the default.</em></h3><div className="preview-bars"><span style={{ width: '82%' }} /><span style={{ width: '64%' }} /><span style={{ width: '48%' }} /></div><div className="preview-footer"><span>Market clarity</span><span>01 / 04</span></div></div></section>

      <footer><a className="wordmark" href="#top"><span className="mark">I</span><span>ideabridge</span></a><p>From first thought to forward motion.</p><span>© 2025</span></footer>

      {isWorkspaceOpen && <div className="modal-backdrop" role="presentation" onClick={() => setIsWorkspaceOpen(false)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}><button className="close-button" onClick={() => setIsWorkspaceOpen(false)} aria-label="Close workspace preview">×</button><p className="eyebrow">Signal report ready</p><h2 id="modal-title">Your idea has<br /><em>momentum.</em></h2><p className="muted">Keep shaping your idea to unlock the full workspace, including market maps, mentor matches, and a build-ready roadmap.</p><button className="primary-button" onClick={() => setIsWorkspaceOpen(false)}>Keep exploring <span>→</span></button></div></div>}
    </main>
  )
}
