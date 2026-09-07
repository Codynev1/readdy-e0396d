import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export type HeaderVariant = 'dark' | 'light';

const FLY_ITEMS = [
  { to: '/ai-projects', icon: '◎', title: 'Custom AI projects', desc: 'RAG search, data taxonomy, automations, meeting intelligence.' },
  { to: '/fractional-caio', icon: '↗', title: 'Fractional CAIO', desc: 'Part-time AI leadership without the full-time salary.' },
  { to: '/ai-lead-generation', icon: '⇄', title: 'AI lead generation', desc: 'Automated outreach and follow-up that fills the calendar.' },
  { to: '/use-cases', icon: '⊞', title: 'Use cases by industry', desc: 'Healthcare, legal, home services, logistics, manufacturing.' },
  { to: '/ai-indianapolis', icon: '⌖', title: 'AI in Indianapolis', desc: 'Local AI consulting, automation, and voice agents.' },
];

export default function Header({ variant = 'light' }: { variant?: HeaderVariant }) {
  const [open, setOpen] = useState(false);
  const [fly, setFly] = useState(false);
  const flyRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close everything on route change
  useEffect(() => { setOpen(false); setFly(false); }, [location.pathname]);

  // Escape closes menus; outside click closes flyout
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); setFly(false); } };
    const onClick = (e: MouseEvent) => { if (flyRef.current && !flyRef.current.contains(e.target as Node)) setFly(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onClick); };
  }, []);

  return (
    <header className={`header ${variant === 'light' ? 'is-light' : ''}`}>
      <Link className="logo" to="/" aria-label="NevTech AI home">
        <span className="mark" aria-hidden="true">N</span>
        <span>NevTech <em>AI</em></span>
      </Link>
      <button
        className="menu"
        type="button"
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(o => !o)}
      >
        {open ? 'Close −' : 'Menu +'}
      </button>
      <nav className={`nav ${open ? 'open' : ''}`} id="navigation" aria-label="Main navigation">
        <Link to="/services">Services</Link>
        <Link to="/rapid-mvp">Rapid MVP</Link>
        <Link to="/receptionist">Nova AI</Link>
        <div
          className={`fly ${fly ? 'is-open' : ''}`}
          ref={flyRef}
          onMouseEnter={() => setFly(true)}
          onMouseLeave={() => setFly(false)}
        >
          <button type="button" className="fly-btn" aria-haspopup="true" aria-expanded={fly} onClick={() => setFly(f => !f)}>
            AI Projects <span aria-hidden="true">▾</span>
          </button>
          <div className="fly-menu">
            {FLY_ITEMS.map(i => (
              <Link key={i.to} to={i.to}>
                <span className="fly-icon" aria-hidden="true">{i.icon}</span>
                <span className="fly-text">
                  <strong>{i.title}</strong>
                  <span>{i.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
        <Link to="/fractional-caio">Fractional CAIO</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link className="nav-contact" to="/contact">Contact</Link>
        <Link className="button light" to="/contact">Let’s build <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}
