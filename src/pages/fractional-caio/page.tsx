import { Link } from 'react-router-dom';
import { DaylightPage, Hero, Section, SectionHead, Eyebrow, Btn } from '@/components/daylight';

const tiers = [
  { tag: 'CORE · FREE', title: 'Free consultation', price: '$0', per: '', copy: '30 minutes. Where AI fits, what to skip, and what it would cost. No obligation.', cta: 'Book a time', href: 'https://calendly.com/cody-nevtech/30min' },
  { tag: 'QUICK-START', title: 'Roadmap & priorities', price: '$1,800', per: '/mo', copy: 'Readiness assessment, 30/60/90-day roadmap, monthly advisory call, vendor shortlists.', cta: 'Start Quick-Start', to: '/contact' },
  { tag: 'GROWTH · MOST POPULAR', title: 'Strategy & oversight', price: '$2,800–4,200', per: '/mo', copy: 'Everything in Quick-Start plus bi-weekly working sessions, project oversight, governance policy, and team enablement.', cta: 'Start Growth', to: '/contact', featured: true },
  { tag: 'HANDS-ON', title: 'Embedded leadership', price: '$4,500–6,500', per: '/mo', copy: 'Weekly on-site or remote time, vendor management, budget ownership, and delivery of priority projects.', cta: 'Start Hands-On', to: '/contact' },
];

const days = [
  { label: '//DAY 30', title: 'You know where you stand.', desc: 'Readiness score, data inventory, and a ranked list of opportunities with cost and payback.' },
  { label: '//DAY 60', title: 'The first project is live.', desc: 'One quick win in production, an AI use policy your team has read, and vendors chosen.' },
  { label: '//DAY 90', title: 'The roadmap has numbers.', desc: 'Measured results from project one, a funded plan for the next two, and a decision on how to continue.' },
];

export default function FractionalCAIOPage() {
  return (
    <DaylightPage title="Fractional CAIO — NevTech AI">
      <Hero
        eyebrow="//01 Fractional Chief AI Officer"
        title={<>AI leadership,<br /><em>without the $300K salary.</em></>}
        lede="A Chief AI Officer on a part-time retainer. Strategy, vendor selection, governance, and a roadmap your team can execute. Month to month after 90 days."
        actions={<>
          <Btn to="/contact">Book a free consultation <span aria-hidden="true">↗</span></Btn>
          <a className="dl-link" href="#tiers">See engagement tiers <span aria-hidden="true">↓</span></a>
        </>}
      />

      <Section>
        <div className="dl-two" style={{ gap: '40px 60px' }}>
          <div>
            <Eyebrow>//02 Why fractional</Eyebrow>
            <h2 className="dl-h2">80% of AI success<br />is the rollout.</h2>
          </div>
          <div style={{ display: 'grid', gap: 18, maxWidth: 560 }}>
            <p className="dl-p">Most companies don’t need another tool. They need someone accountable for deciding which tools, in what order, with what guardrails, and then making sure people actually use them.</p>
            <p className="dl-p">A Fractional CAIO gives you that person for a few days a month. Every NevTech advisor has led 25 or more implementations. You get the judgment without the headcount.</p>
          </div>
        </div>
      </Section>

      <Section id="tiers" alt>
        <SectionHead eyebrow="//03 Engagements" title="Pick the level of hands-on." aside="Hourly advisory also available at $125–$175. No lock-in after 90 days." />
        <div className="dl-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
          {tiers.map(t => (
            <article key={t.tag} className={`dl-card dl-tier static ${t.featured ? 'featured' : ''}`} style={{ gap: 14, background: t.featured ? '#dcecdf' : undefined }}>
              <span className="mono" style={{ color: t.featured ? '#176d4e' : '#557561', letterSpacing: 1, textTransform: 'none' }}>{t.tag}</span>
              <h3 className="dl-h3">{t.title}</h3>
              <p className="dl-price" style={{ fontSize: 34, letterSpacing: 0, color: '#07806a', margin: 0 }}>{t.price}{t.per && <small style={{ fontSize: 14, color: '#566d5f' }}>{t.per}</small>}</p>
              <p style={{ color: t.featured ? '#3d5a49' : undefined }}>{t.copy}</p>
              {t.to
                ? <Link className="dl-link" to={t.to} style={{ marginTop: 'auto' }}>{t.cta} <span aria-hidden="true">↗</span></Link>
                : <a className="dl-link" href={t.href} target="_blank" rel="noreferrer" style={{ marginTop: 'auto' }}>{t.cta} <span aria-hidden="true">↗</span></a>}
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="//04 The first 90 days" title="What changes by day 90." />
        <div className="dl-process" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', background: '#fffef6' }}>
          {days.map(d => (
            <div key={d.label}>
              <span className="mono">{d.label}</span>
              <h3 style={{ margin: '36px 0 12px' }}>{d.title}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="dl-cta" id="contact">
        <p className="mono">//05 Advisory · NevTech AI</p>
        <h2>When you’d rather<br /><em style={{ fontStyle: 'normal' }}>not go it alone.</em></h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
          <Btn to="/contact" light>Book a free consultation <span aria-hidden="true">↗</span></Btn>
          <Link to="/products#catalyst" className="dl-x-cta-link">Or start self-serve with Catalyst <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </DaylightPage>
  );
}
