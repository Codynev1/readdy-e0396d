import { Link } from 'react-router-dom';
import { DaylightPage, Hero, Section, SectionHead, Eyebrow, Btn, Placeholder } from '@/components/daylight';

const stats = [
  { n: '500+', label: 'Businesses served' },
  { n: '95%', label: 'Client retention' },
  { n: '40%', label: 'Average cost reduction' },
  { n: '24/7', label: 'AI availability' },
];

const specializations = [
  'AI voice agents and receptionists',
  'Business internet and failover',
  'Cellular, IoT, and connectivity',
  'Operational redesign',
  'Product strategy and MVPs',
  'AI + IoT + connectivity integrations',
];

const values = [
  { title: 'Innovation', desc: 'We use what works today, not what’s promised for next year. Practical AI, applied carefully.' },
  { title: 'Client success', desc: 'We define the measure with you up front and report on it. If it isn’t working, we say so.' },
  { title: 'Transparency', desc: 'Fixed prices, plain language, and no lock-in after 90 days. You own everything we build.' },
  { title: 'Partnership', desc: 'We’re down the road, not across the country. Call and a person who knows your account answers.' },
];

export default function AboutPage() {
  return (
    <DaylightPage title="About — NevTech AI">
      <Hero
        eyebrow="//01 Who we are"
        title={<>Indianapolis roots.<br /><em>A world of possibility.</em></>}
        lede={<span style={{ display: 'block', maxWidth: 600 }}>NevTech AI helps small and mid-sized businesses modernize with AI, cellular, and workflow technology. We’re based in Indianapolis, and we pick up the phone.</span>}
      />

      <Section>
        <div className="dl-two" style={{ gap: '40px 60px' }}>
          <div>
            <Eyebrow>//02 Our story</Eyebrow>
            <h2 className="dl-h2">Built for the businesses<br />that keep Indiana running.</h2>
          </div>
          <div style={{ display: 'grid', gap: 18, maxWidth: 560 }}>
            <p className="dl-p" style={{ margin: 0 }}>NevTech started when founder Cody Neville kept meeting the same business: good people, growing demand, and systems that hadn’t kept up. Phone lines nobody answered after five. Telecom bills nobody had reviewed in years. Software that made more work than it saved.</p>
            <p className="dl-p" style={{ margin: 0 }}>We set out to be the one partner that could fix all of it: the strategy, the software, and the connectivity underneath. Not a vendor for each piece, and not a consultant who leaves a slide deck behind.</p>
            <p className="dl-p" style={{ margin: 0 }}>Today we’ve helped more than 500 businesses across Indiana and beyond, from single-location home-service companies to multi-site healthcare and logistics operators.</p>
          </div>
        </div>
      </Section>

      <Section alt>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '40px 60px', alignItems: 'start' }}>
          <figure style={{ display: 'grid', gap: 12, maxWidth: 440, margin: 0 }}>
            <Placeholder label="Founder photo · Cody Neville" style={{ aspectRatio: '4/5', textAlign: 'center', padding: 20 }} />
            <figcaption style={{ font: "10px/1.7 'Courier New',monospace", color: '#55745d', textTransform: 'uppercase', letterSpacing: 1 }}>Cody Neville · Founder &amp; Chief Solutions Architect</figcaption>
          </figure>
          <div>
            <Eyebrow>//03 Founder</Eyebrow>
            <h2 className="dl-h2" style={{ margin: '13px 0 24px' }}>Cody Neville</h2>
            <div style={{ display: 'grid', gap: 16, maxWidth: 560 }}>
              <p className="dl-p" style={{ margin: 0 }}>Cody spent the first part of his career in medical software, building and selling a company for $5M and leading an engineering team of more than 50 people. Along the way he learned that most technology projects fail in the rollout, not the code.</p>
              <p className="dl-p" style={{ margin: 0 }}>That lesson shapes how NevTech works today: start with the business need, keep people in the loop, and measure what actually changes.</p>
            </div>
            <div style={{ marginTop: 28, borderTop: '1px solid #173c2a22', paddingTop: 20 }}>
              <p className="dl-eyebrow" style={{ color: '#55745d', marginBottom: 12 }}>Specializations</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '8px 24px', fontSize: 13, color: '#254d36' }}>
                {specializations.map(s => (
                  <li key={s} style={{ display: 'flex', gap: 9 }}><span style={{ color: '#07806a' }}>↗</span>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <section style={{ padding: '56px 6%', borderBottom: '1px solid #173c2a22' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24 }}>
          {stats.map(s => (
            <div key={s.n} style={{ borderTop: '1px solid #173c2a22', paddingTop: 18 }}>
              <p style={{ font: "normal 56px/1 Georgia,'Times New Roman',serif", letterSpacing: '-2px', color: '#07806a', margin: 0 }}>{s.n}</p>
              <p style={{ font: "10px/1.8 'Courier New',monospace", textTransform: 'uppercase', letterSpacing: 1, color: '#55745d', marginTop: 10, marginBottom: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Section>
        <SectionHead eyebrow="//04 What we value" title="How we show up." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '26px 35px' }}>
          {values.map(v => (
            <article key={v.title} style={{ paddingTop: 21, borderTop: '1px solid #173c2a22' }}>
              <h3 style={{ fontSize: 15, fontWeight: 400, marginBottom: 11, display: 'flex', gap: 13, margin: '0 0 11px' }}><span style={{ color: '#07806a' }}>↗</span>{v.title}</h3>
              <p style={{ fontSize: 13, color: '#566d5f', margin: 0 }}>{v.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="dl-cta" id="contact">
        <p className="mono">//05 Let’s talk</p>
        <h2>Ready to work<br /><em style={{ fontStyle: 'normal' }}>together?</em></h2>
        <div className="dl-cta-row">
          <p>A free 30-minute conversation. No credit card, no sales script.</p>
          <div className="dl-cta-actions" style={{ gap: 20 }}>
            <Btn to="/contact" light>Get a free consultation <span aria-hidden="true">↗</span></Btn>
            <Link to="/services" style={{ fontSize: 12, color: '#d2e1d6' }}>View our services <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </DaylightPage>
  );
}
