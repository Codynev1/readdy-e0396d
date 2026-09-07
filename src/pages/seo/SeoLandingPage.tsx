import { Link } from 'react-router-dom';
import { DaylightPage, Eyebrow } from '@/components/daylight';
import { pages, order } from '@/data/seoPages';

type SeoPage = {
  keyword: string;
  location: string;
  title: string;
  accent: string;
  subtitle: string;
  stats: { n: string; label: string; src: string }[];
  whatIs: string[];
  callout: { title: string; text: string };
  services: { icon: string; title: string; desc: string; href: string }[];
  reasons: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
};

const serif = "Georgia,'Times New Roman',serif";
const mono = "'Courier New',monospace";

export default function SeoLandingPage({ slug }: { slug: string }) {
  const p: SeoPage = (pages as Record<string, SeoPage>)[slug] || (pages as Record<string, SeoPage>)[order[0]];

  return (
    <DaylightPage title={`${p.keyword} | NevTech AI`}>
      {/* SEO hero */}
      <section className="dl-hero">
        <p style={{ display: 'inline-flex', alignItems: 'center', gap: 9, font: `10px/1.5 ${mono}`, textTransform: 'uppercase', letterSpacing: 1.5, color: '#07806a', padding: '7px 12px', border: '1px solid #217d5955', borderRadius: 20, background: '#dcecdf' }}>
          <span aria-hidden="true">⌖</span>{p.location} · NevTech AI
        </p>
        <h1 style={{ font: `normal clamp(44px,5.4vw,84px)/1.02 ${serif}`, letterSpacing: -2.6, margin: '20px 0 24px', maxWidth: 1000 }}>
          {p.title} <em style={{ fontStyle: 'italic', color: '#07806a' }}>{p.accent}</em>
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: '#566d5f', maxWidth: 620 }}>{p.subtitle}</p>
        <div className="dl-actions">
          <Link className="dl-btn" to="/contact">Get your free AI assessment <span aria-hidden="true">↗</span></Link>
          <a className="dl-btn ghost" href="tel:3175089493">Call (317) 508-9493</a>
        </div>
        <p style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px', fontSize: 12, color: '#55745d', marginTop: 26 }}>
          <span><span style={{ color: '#07806a' }}>✓</span> Free 15-minute assessment</span>
          <span><span style={{ color: '#07806a' }}>✓</span> No obligation</span>
          <span><span style={{ color: '#07806a' }}>✓</span> Fixed-price proposals</span>
        </p>
      </section>

      {/* Stats */}
      <section style={{ padding: '56px 6%', borderBottom: '1px solid #173c2a22' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24 }}>
          {p.stats.map((s, i) => (
            <div key={i} style={{ borderTop: '1px solid #173c2a22', paddingTop: 18 }}>
              <p style={{ font: `normal 52px/1 ${serif}`, letterSpacing: -2, color: '#07806a' }}>{s.n}</p>
              <p style={{ fontSize: 13, color: '#254d36', marginTop: 10 }}>{s.label}</p>
              <p style={{ font: 'italic 11px Georgia,serif', color: '#55745d', marginTop: 4 }}>{s.src}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What is */}
      <section className="dl-section alt" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '40px 60px', alignItems: 'start' }}>
        <div>
          <Eyebrow>//01 {p.keyword}</Eyebrow>
          <h2 className="dl-h2">What it means<br />for your business.</h2>
        </div>
        <div style={{ display: 'grid', gap: 18, fontSize: 15, lineHeight: 1.75, color: '#3d5a49', maxWidth: 560 }}>
          {p.whatIs.map((w, i) => <p key={i}>{w}</p>)}
          <div style={{ marginTop: 8, padding: '20px 22px', border: '1px solid #217d5955', borderRadius: 5, background: '#dcecdf', display: 'grid', gridTemplateColumns: '28px 1fr', gap: 14 }}>
            <span aria-hidden="true" style={{ color: '#07806a', fontSize: 20 }}>↗</span>
            <div>
              <h3 style={{ font: `normal 20px/1.2 ${serif}`, marginBottom: 6 }}>{p.callout.title}</h3>
              <p style={{ fontSize: 13, color: '#3d5a49' }}>{p.callout.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="dl-section">
        <div className="dl-head">
          <div>
            <Eyebrow>//02 Services</Eyebrow>
            <h2 className="dl-h2">Where to start in {p.location}.</h2>
          </div>
          <p>Pick one. We’ll connect the rest when it makes sense.</p>
        </div>
        <div className="dl-grid">
          {p.services.map((s, i) => (
            <Link key={i} to={s.href} className="dl-card dl-x-seo-service">
              <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 5, background: '#dcecdf', color: '#07806a', display: 'grid', placeItems: 'center', fontSize: 18 }}>{s.icon}</span>
              <h3 style={{ font: `normal 24px/1.1 ${serif}`, letterSpacing: -0.6 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: '#5a705f', lineHeight: 1.7 }}>{s.desc}</p>
              <span style={{ fontSize: 12, color: '#07806a', marginTop: 'auto', paddingTop: 12, borderTop: '1px solid #173c2a22' }}>Learn more <span aria-hidden="true">↗</span></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why local */}
      <section className="dl-section alt">
        <div className="dl-head">
          <div>
            <Eyebrow>//03 Why a local partner</Eyebrow>
            <h2 className="dl-h2">Down the road,<br />not across the country.</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '26px 35px' }}>
          {p.reasons.map((r, i) => (
            <article key={i} style={{ paddingTop: 21, borderTop: '1px solid #173c2a22' }}>
              <h3 style={{ fontSize: 15, fontWeight: 400, marginBottom: 11, display: 'flex', gap: 13 }}>
                <span style={{ color: '#07806a' }}>↗</span>{r.title}
              </h3>
              <p style={{ fontSize: 13, color: '#566d5f' }}>{r.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="dl-section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '40px 60px', alignItems: 'start' }}>
        <div>
          <Eyebrow>//04 Questions</Eyebrow>
          <h2 className="dl-h2">Asked often.<br />Answered plainly.</h2>
          <Link to="/faq" className="dl-link" style={{ display: 'inline-block', marginTop: 20 }}>Full FAQ <span aria-hidden="true">↗</span></Link>
        </div>
        <div style={{ borderBottom: '1px solid #173c2a22' }}>
          {p.faq.map((f, i) => (
            <details key={i} className="dl-x-seo-faq" style={{ borderTop: '1px solid #173c2a22', padding: '16px 0' }}>
              <summary style={{ display: 'flex', justifyContent: 'space-between', gap: 20, font: `normal 18px/1.3 ${serif}`, cursor: 'pointer', listStyle: 'none' }}>
                <span>{f.q}</span>
                <span style={{ color: '#07806a', transition: 'transform .2s' }}>+</span>
              </summary>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: '#3d5a49', marginTop: 10 }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: '80px 6%', background: '#0f2f27', color: '#f1f4ec' }}>
        <p style={{ font: `10px/1.5 ${mono}`, textTransform: 'uppercase', letterSpacing: 1.5, color: '#7eddb8' }}>//05 Free assessment</p>
        <h2 style={{ font: `normal clamp(42px,5vw,72px)/1.05 ${serif}`, letterSpacing: -2, margin: '17px 0 24px', maxWidth: 800 }}>
          Fifteen minutes.<br />
          <em style={{ fontStyle: 'normal', color: '#7eddb8' }}>A clear next step.</em>
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 30 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
            <Link className="dl-btn light" to="/contact">Get your free assessment <span aria-hidden="true">↗</span></Link>
            <a className="dl-btn on-dark-ghost" href="tel:3175089493">Call (317) 508-9493</a>
          </div>
          <p style={{ font: `10px/1.9 ${mono}`, textTransform: 'uppercase', letterSpacing: 1, color: '#7eddb8' }}>
            Indiana office · Indianapolis, IN<br />
            <a href="mailto:cody@nevtech.io" style={{ color: '#d2e1d6', textDecoration: 'none' }}>cody@nevtech.io</a> · <a href="https://calendly.com/cody-nevtech/30min" style={{ color: '#d2e1d6', textDecoration: 'none' }}>calendly.com/cody-nevtech/30min</a>
          </p>
        </div>
      </section>
    </DaylightPage>
  );
}
