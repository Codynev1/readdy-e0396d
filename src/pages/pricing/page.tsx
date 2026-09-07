import { Link } from 'react-router-dom';
import { DaylightPage, Hero, Section, SectionHead, Card, Btn, CtaBand } from '@/components/daylight';

const caioTiers = [
  { tag: 'QUICK-START', title: 'Roadmap & priorities', price: '$1,800', per: '/mo', copy: 'Readiness assessment, 30/60/90-day roadmap, monthly advisory call, vendor shortlists.' },
  { tag: 'GROWTH · MOST POPULAR', title: 'Strategy & oversight', price: '$2,800–4,200', per: '/mo', copy: 'Everything in Quick-Start plus bi-weekly working sessions, project oversight, governance policy, and team enablement.', featured: true },
  { tag: 'HANDS-ON', title: 'Embedded leadership', price: '$4,500–6,500', per: '/mo', copy: 'Weekly on-site or remote time, vendor management, budget ownership, and delivery of priority projects.' },
];

export default function PricingPage() {
  return (
    <DaylightPage title="Pricing — NevTech AI">
      <Hero
        eyebrow="//01 Pricing"
        title={<>Simple prices,<br /><em>stated up front.</em></>}
        lede="Every engagement starts with a free 30-minute consultation. Here is what the rest costs."
        actions={<>
          <Btn href="https://calendly.com/cody-nevtech/30min">Book a free consultation <span aria-hidden="true">↗</span></Btn>
          <a className="dl-link" href="tel:3175089493">Call (317) 508-9493</a>
        </>}
      />

      <Section id="caio" alt>
        <SectionHead
          eyebrow="//02 Fractional CAIO"
          title="Pick the level of hands-on."
          aside="Hourly advisory also available at $125–$175. No lock-in after 90 days."
        />
        <div className="dl-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
          {caioTiers.map(t => (
            <article key={t.tag} className={`dl-card dl-tier static ${t.featured ? 'featured' : ''}`} style={{ gap: 14, background: t.featured ? '#dcecdf' : undefined }}>
              <span className="mono" style={{ color: t.featured ? '#176d4e' : '#557561', letterSpacing: 1, textTransform: 'none' }}>{t.tag}</span>
              <h3 className="dl-h3">{t.title}</h3>
              <p className="dl-price" style={{ fontSize: 34, letterSpacing: 0, color: '#07806a', margin: 0 }}>{t.price}<small style={{ fontSize: 14, color: '#566d5f' }}>{t.per}</small></p>
              <p style={{ color: t.featured ? '#3d5a49' : undefined }}>{t.copy}</p>
              <Link className="dl-link" to="/fractional-caio" style={{ marginTop: 'auto' }}>Fractional CAIO details <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects">
        <SectionHead eyebrow="//03 Projects & products" title="Fixed timeline. Fixed price." />
        <div className="dl-grid wide">
          <Card index="//01" glyph="↗" title="Rapid MVP" foot="8 weeks / fixed price / you own the code" to="/rapid-mvp">
            <p className="dl-price">Under $10K<small> typical</small></p>
            <p>From a conversation to working software in eight weeks. Real users, real feedback, and code you own.</p>
          </Card>
          <Card index="//02" glyph="◎" title="Nova AI receptionist" foot="5-day go-live / month to month" to="/receptionist">
            <p className="dl-price">6 months free<small> inbound with T-Mobile</small></p>
            <p>Live in about five business days. Sign up for T-Mobile for Business through NevTech and Nova answers your calls free for six months.</p>
          </Card>
          <Card index="//03" glyph="⇄" title="Custom AI projects" foot="4–8 weeks / one outcome / fixed price" to="/ai-projects">
            <p className="dl-price">Fixed price<small> per project</small></p>
            <p>Free assessment first. We name the outcome, the data involved, and a fixed price before any work starts.</p>
          </Card>
        </div>
      </Section>

      <Section id="tmobile" alt>
        <SectionHead eyebrow="//04 T-Mobile for Business" title="Cellular and internet, through NevTech." aside="Business pricing on lines, tablets, and internet, with Nova AI inbound free for six months." />
        <div style={{ overflowX: 'auto' }}>
          <table className="dl-table">
            <thead>
              <tr><th>Service</th><th>Price</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td>Phone line</td><td>$10/line per month</td><td>10+ lines</td></tr>
              <tr><td>Tablet</td><td>$15 per month</td><td>Per device</td></tr>
              <tr><td>Business internet</td><td>$50 per month</td><td>Per location</td></tr>
            </tbody>
          </table>
        </div>
        <p className="dl-note"><Link to="/tmobile-business" className="dl-link">T-Mobile for Business details <span aria-hidden="true">↗</span></Link></p>
      </Section>

      <CtaBand
        eyebrow="//05 Start a conversation"
        title={<>Not sure which one?<br /><em>Start with the free call.</em></>}
        copy="Thirty minutes. Where AI fits, what to skip, and what it would cost. No obligation."
        primary={{ href: 'https://calendly.com/cody-nevtech/30min', label: 'Book a free consultation' }}
        secondary={{ to: '/contact', label: 'Contact us' }}
      />
    </DaylightPage>
  );
}
