import { Link } from 'react-router-dom';
import { DaylightPage, Hero, Section, SectionHead, Eyebrow, Btn, Placeholder } from '@/components/daylight';

const mono = { font: "10px/1.5 'Courier New',monospace", textTransform: 'uppercase' as const, letterSpacing: 1.5, color: '#55745d', marginTop: 0, marginBottom: 14 };
const listStyle = { listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '8px 24px', fontSize: 13, color: '#254d36', margin: 0, padding: 0 };
const tagStyle = { padding: '7px 12px', border: '1px solid #214b2f33', borderRadius: 3, fontSize: 12, color: '#254d36' };
const chipStyle = { padding: '6px 10px', background: '#daecde', borderRadius: 3, fontSize: 11, color: '#176d4e' };

const vmsDiff = [
  { label: 'WHY IT’S DIFFERENT · 01', title: 'Outages are a pause, not a loss.', desc: 'Edge recording continues offline and back-fills the cloud when the link returns.' },
  { label: 'WHY IT’S DIFFERENT · 02', title: 'Per-second coverage state.', desc: 'Know exactly which seconds of which camera exist, so an audit never turns into a guess.' },
  { label: 'WHY IT’S DIFFERENT · 03', title: 'Priced like storage, not per stream.', desc: 'Add cameras without renegotiating. You pay for what you keep.' },
];
const vmsFeatures = ['WebRTC sub-second live view', 'LPR / ANPR plate recognition', 'Clip export and sharing', 'PTZ control', 'Multi-tenant and white-label', 'ONVIF / RTSP camera support', 'Edge recording with cloud sync', 'Role-based access'];
const vmsFor = ['Retail', 'Logistics', 'Property management', 'Parking & transport', 'Campuses', 'Integrators'];
const catalystGet = ['15-minute AI readiness score', '30/60/90-day roadmap', 'OS Workbench for projects', 'RAG search over your documents', 'KPI tracking and reporting', 'Governance templates', 'Advisory tiers', 'SOC 2 / HIPAA-ready controls'];
const catalystFor = ['Owner-led SMBs', 'Operations leaders', 'Professional services', 'Healthcare practices', 'Teams without a CTO'];
const glance = [
  { title: 'NevTech VMS', chips: ['Edge recording', 'WebRTC', 'LPR / ANPR', 'Multi-tenant', 'White-label', 'ONVIF / RTSP'] },
  { title: 'NevTech Catalyst', chips: ['Readiness score', 'Roadmap', 'KPI tracking', 'RAG search', 'Governance', 'Advisory'] },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul style={listStyle}>
      {items.map(i => <li key={i} style={{ display: 'flex', gap: 9 }}><span style={{ color: '#07806a' }}>✓</span>{i}</li>)}
    </ul>
  );
}

export default function ProductsPage() {
  return (
    <DaylightPage title="Products — NevTech AI">
      <Hero
        eyebrow="//01 Our products"
        title={<>Products built for<br /><em>real business impact.</em></>}
        lede="Two focused products. Indianapolis-built, actually supported by the people who wrote them."
      />

      <Section id="vms">
        <div className="dl-two" style={{ gap: '40px 60px' }}>
          <div>
            <Eyebrow>//02 NevTech VMS · Cloud video management</Eyebrow>
            <h2 className="dl-h2" style={{ margin: '13px 0 20px' }}>Video that keeps recording<br />when the internet doesn’t.</h2>
            <p className="dl-p" style={{ maxWidth: 520, margin: 0 }}>A cloud video management system built for retail, logistics, property, and campuses. Cameras record at the edge, sync to the cloud, and stay searchable from anywhere.</p>
            <div className="dl-actions" style={{ marginTop: 28 }}>
              <Btn href="https://nevtechvms.com">Explore NevTech VMS <span aria-hidden="true">↗</span></Btn>
              <Link to="/contact" className="dl-link">Request a demo <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <Placeholder label="VMS dashboard screenshot" style={{ aspectRatio: '16/10', minHeight: 0, textAlign: 'center', padding: 20 }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 12, marginTop: 44 }}>
          {vmsDiff.map(d => (
            <article key={d.label} className="dl-card static" style={{ gap: 0, padding: '23px 21px' }}>
              <span className="mono" style={{ color: '#557561', letterSpacing: 1 }}>{d.label}</span>
              <h3 style={{ font: "normal 22px/1.15 Georgia,'Times New Roman',serif", margin: '18px 0 10px', color: '#183c2f' }}>{d.title}</h3>
              <p style={{ margin: 0 }}>{d.desc}</p>
            </article>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '30px 60px', marginTop: 44, borderTop: '1px solid #173c2a22', paddingTop: 30 }}>
          <div>
            <p style={mono}>Key features</p>
            <CheckList items={vmsFeatures} />
          </div>
          <div>
            <p style={mono}>Who it’s for</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {vmsFor.map(t => <span key={t} style={tagStyle}>{t}</span>)}
            </div>
          </div>
        </div>
      </Section>

      <Section id="catalyst" alt>
        <div className="dl-two" style={{ gap: '40px 60px' }}>
          <Placeholder label="Catalyst platform screenshot" style={{ aspectRatio: '16/10', minHeight: 0, textAlign: 'center', padding: 20, background: 'repeating-linear-gradient(135deg,#dfe8d9 0 12px,#d3dfcf 12px 24px)' }} />
          <div>
            <Eyebrow>//03 NevTech Catalyst · AI implementation platform</Eyebrow>
            <h2 className="dl-h2" style={{ margin: '13px 0 20px' }}>Your AI roadmap,<br />with advisors attached.</h2>
            <p className="dl-p" style={{ maxWidth: 520, margin: 0 }}>Catalyst scores your readiness in 15 minutes, builds a 30/60/90-day roadmap, and tracks the KPIs that prove it worked. Advisory tiers add a human when you want one.</p>
            <p style={{ font: "10px/1.9 'Courier New',monospace", textTransform: 'uppercase', letterSpacing: 1, color: '#55745d', marginTop: 16, marginBottom: 0 }}>From $49/mo · 14-day trial</p>
            <div className="dl-actions" style={{ marginTop: 28 }}>
              <Btn href="https://nevtechai.com">Try NevTech Catalyst <span aria-hidden="true">↗</span></Btn>
              <Link to="/fractional-caio" className="dl-link">See advisory tiers <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '30px 60px', marginTop: 44, borderTop: '1px solid #173c2a22', paddingTop: 30 }}>
          <div>
            <p style={mono}>What you get</p>
            <CheckList items={catalystGet} />
          </div>
          <div>
            <p style={mono}>Who it’s for</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {catalystFor.map(t => <span key={t} style={tagStyle}>{t}</span>)}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="//04 At a glance" title="Two products. Two jobs." />
        <div className="dl-grid">
          {glance.map(g => (
            <article key={g.title} className="dl-card static" style={{ gap: 0, padding: '23px 21px' }}>
              <h3 className="dl-h3" style={{ marginBottom: 16 }}>{g.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {g.chips.map(c => <span key={c} style={chipStyle}>{c}</span>)}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="dl-cta" id="contact">
        <p className="mono">//05 Not sure which fits?</p>
        <h2>Let’s figure it out<br /><em style={{ fontStyle: 'normal' }}>together.</em></h2>
        <div className="dl-cta-actions" style={{ gap: 20 }}>
          <Btn to="/contact" light>Talk to us <span aria-hidden="true">↗</span></Btn>
          <a href="https://nevtechvms.com" target="_blank" rel="noreferrer" style={{ fontSize: 12, color: '#d2e1d6' }}>Explore NevTech VMS <span aria-hidden="true">↗</span></a>
          <a href="https://nevtechai.com" target="_blank" rel="noreferrer" style={{ fontSize: 12, color: '#d2e1d6' }}>Try NevTech Catalyst <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </DaylightPage>
  );
}
