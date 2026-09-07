import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div className="site-footer-brand">
          <Link className="logo" to="/" aria-label="NevTech AI home">
            <span className="mark" aria-hidden="true">N</span>
            <span>NevTech <em>AI</em></span>
          </Link>
          <p className="site-footer-tag">The AI implementation partner built for businesses of every size. Indianapolis-based. We pick up the phone.</p>
          <p className="mono site-footer-contact">
            <a href="tel:3175089493">(317) 508-9493</a> · <a href="mailto:cody@nevtech.io">cody@nevtech.io</a> · Indianapolis, IN
          </p>
          <div className="site-footer-social" aria-label="Social">
            <a href="https://www.linkedin.com/company/nevtech-ai" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://x.com/nevtechai" target="_blank" rel="noreferrer" aria-label="X">X</a>
            <a href="https://www.facebook.com/nevtechai" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
          </div>
        </div>
        <nav className="site-footer-col" aria-label="Product">
          <p className="mono">// PRODUCT</p>
          <Link to="/receptionist">Nova AI receptionist</Link>
          <Link to="/products">NevTech VMS</Link>
          <Link to="/products">NevTech Catalyst</Link>
          <Link to="/tmobile-business">Business connectivity</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
        <nav className="site-footer-col" aria-label="Services">
          <p className="mono">// SERVICES</p>
          <Link to="/services">All services</Link>
          <Link to="/fractional-caio">Fractional CAIO</Link>
          <Link to="/ai-projects">AI projects</Link>
          <Link to="/rapid-mvp">Rapid MVP</Link>
          <Link to="/ai-lead-generation">AI lead generation</Link>
          <Link to="/use-cases">Use cases</Link>
        </nav>
        <nav className="site-footer-col" aria-label="Company">
          <p className="mono">// COMPANY</p>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/intake-form">Project intake</Link>
          <Link to="/ai-indianapolis">AI in Indianapolis</Link>
          <Link to="/support">Support</Link>
        </nav>
      </div>
      <div className="site-footer-bottom">
        <span>© {new Date().getFullYear()} NevTech AI. All rights reserved.</span>
        <span><Link to="/privacy">Privacy</Link> &nbsp;/&nbsp; <Link to="/terms">Terms</Link> &nbsp;/&nbsp; <Link to="/compliance">Security</Link></span>
        <a href="#top" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Back to top ↑</a>
      </div>
    </footer>
  );
}
