import { Link } from 'react-router-dom';
import { DaylightPage, Hero, Section, SectionHead, Eyebrow, Btn } from '@/components/daylight';

const offers = [
  { label: 'PHONE LINES', price: '$10', unit: '/line/mo', desc: 'With 10 or more lines. Unlimited talk, text, and data on T-Mobile’s 5G network.' },
  { label: 'TABLETS', price: '$15', unit: '/mo', desc: 'Tablets for the truck, the floor, and the front desk. Managed alongside your phone lines.' },
  { label: 'BUSINESS INTERNET', price: '$50', unit: '/mo', desc: '5G business internet for primary service or failover. Set up in a day, no install crew.' },
];

const reasons = [
  'Free line-by-line audit of your current bill. Most businesses save 30–40%.',
  'Free number porting, managed end to end, with no downtime.',
  'Devices, hotspots, and IoT lines on one account with one invoice.',
  'Support from Indianapolis. Call (317) 508-9493 and skip the carrier queue.',
  'Connectivity designed alongside your AI and automation plan, not separately.',
];

const priceStyle = { font: "normal 48px/1 Georgia,'Times New Roman',serif", letterSpacing: '-1.5px', color: '#07806a', margin: 0 };
const unitStyle = { fontSize: 14, color: '#566d5f', letterSpacing: 0 };

export default function TMobileBusinessPage() {
  return (
    <DaylightPage title="T-Mobile Business — NevTech AI">
      <Hero
        eyebrow="//01 T-Mobile for Business · through NevTech"
        title={<>Business lines from $10.<br /><em>Plus six months of Nova, free.</em></>}
        lede={<span style={{ display: 'block', maxWidth: 580 }}>We’re a T-Mobile for Business partner in Indianapolis. Same network, lower business pricing, free number porting, and a local person who handles the account.</span>}
        actions={<>
          <Btn to="/contact">Get a plan review <span aria-hidden="true">↗</span></Btn>
          <a href="tel:3175089493" className="dl-link">Call (317) 508-9493</a>
        </>}
      />

      <Section>
        <SectionHead
          eyebrow="//02 Current offers"
          title={<>Simple pricing.<br />No surprise fees.</>}
          aside="Offers change; we confirm current pricing during your review. Taxes and device costs not included."
        />
        <div className="dl-grid tight">
          {offers.map(o => (
            <article key={o.label} className="dl-card static" style={{ padding: '23px 21px', display: 'grid', gap: 12 }}>
              <span className="mono" style={{ color: '#557561', letterSpacing: 1 }}>{o.label}</span>
              <p style={priceStyle}>{o.price}<span style={unitStyle}>{o.unit}</span></p>
              <p style={{ margin: 0 }}>{o.desc}</p>
            </article>
          ))}
          <article className="dl-card static" style={{ padding: '23px 21px', display: 'grid', gap: 12, border: '1px solid #217d5955', background: '#dcecdf' }}>
            <span className="mono" style={{ color: '#176d4e', letterSpacing: 1 }}>LIMITED-TIME · NOVA AI</span>
            <p style={priceStyle}>6 mo<span style={unitStyle}> free</span></p>
            <p style={{ margin: 0, color: '#3d5a49' }}>Sign up for T-Mobile through NevTech and Nova’s inbound calling is free for six months.</p>
            <Link to="/receptionist" style={{ fontSize: 12, color: '#07806a' }}>About Nova <span aria-hidden="true">↗</span></Link>
          </article>
        </div>
      </Section>

      <section className="dl-section alt" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '40px 60px', alignItems: 'start' }}>
        <div>
          <Eyebrow>//03 Why through NevTech</Eyebrow>
          <h2 className="dl-h2">Same network.<br />A person who knows your account.</h2>
        </div>
        <ul style={{ listStyle: 'none', display: 'grid', gap: 14, fontSize: 14, color: '#3d5a49', lineHeight: 1.6, margin: 0, padding: 0 }}>
          {reasons.map(r => (
            <li key={r} style={{ display: 'flex', gap: 12 }}><span style={{ color: '#07806a' }}>✓</span>{r}</li>
          ))}
        </ul>
      </section>

      <section className="dl-cta" id="contact">
        <p className="mono">//04 One hour, one bill</p>
        <h2>Send us the bill.<br /><em style={{ fontStyle: 'normal' }}>We’ll send back the savings.</em></h2>
        <div className="dl-cta-actions" style={{ gap: 20 }}>
          <Btn to="/contact" light>Claim your 6 free months <span aria-hidden="true">↗</span></Btn>
          <a href="tel:3175089493" style={{ fontSize: 12, color: '#d2e1d6' }}>(317) 508-9493</a>
        </div>
      </section>
    </DaylightPage>
  );
}
