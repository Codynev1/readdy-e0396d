import { Link } from 'react-router-dom';
import { DaylightPage, Hero, Section, SectionHead, Card, Check, Btn } from '@/components/daylight';

const services = [
  { index: '//01', glyph: '↗', title: 'Fractional CAIO', desc: 'A Chief AI Officer on a part-time retainer. Strategy, vendor selection, governance, and a roadmap your team can execute.', items: ['AI roadmap in 30/60/90 days', 'Vendor and model selection', 'Governance and adoption'], foot: 'AI leadership without the $300K+ salary', to: '/fractional-caio' },
  { index: '//02', glyph: '◎', title: 'AI Projects', desc: 'Custom AI built for your data: automations, pipelines, internal search, and applications your team actually uses.', items: ['RAG internal search', 'Data taxonomy and pipelines', 'Meeting and call intelligence'], foot: 'Scoped, fixed-price, shipped', to: '/ai-projects' },
  { index: '//03', glyph: '⌘', title: 'Rapid MVP', desc: 'From idea to a working product in 8 weeks. Real software you can put in front of real users, then build on.', items: ['8-week fixed timeline', 'Typically under $10K', 'You own the code'], foot: 'Prototypes / custom software', to: '/rapid-mvp' },
  { index: '//04', glyph: '◉', title: 'AI Voice Agents', desc: '24/7 phone answering that understands natural speech, books appointments, and routes calls to the right person.', items: ['Booking and call routing', '30+ languages', 'Warm handoff to humans'], foot: 'Every call answered', to: '/receptionist' },
  { index: '//05', glyph: '☏', title: 'AI Receptionist', desc: 'Nova AI, our virtual receptionist. Greets callers, answers questions, takes messages, and never puts anyone on hold.', items: ['Live in about 5 business days', 'HIPAA-compliant option', 'Unlimited concurrent calls'], foot: 'Also at indianaaireception.com', to: '/receptionist' },
  { index: '//06', glyph: '▤', title: 'Cellular Consulting', desc: 'Phones, tablets, hotspots, and plans reviewed line by line. Most businesses save up to 40% without changing how they work.', items: ['Plan and device audit', 'Free number porting', 'T-Mobile Business pricing'], foot: 'Save up to 40%', to: '/tmobile-business' },
  { index: '//07', glyph: '⊕', title: 'Business Internet', desc: '5G, fiber, and failover designed around how your locations actually run. Multi-site SD-WAN when you need it.', items: ['5G and fiber options', 'Automatic failover', 'Multi-location SD-WAN'], foot: 'Connectivity that stays up', to: '/contact' },
  { index: '//08', glyph: '⋮⋮', title: 'IoT Connectivity', desc: 'Fleets, sensors, cameras, and monitoring on managed cellular. Data lines that report in from anywhere.', items: ['Fleet and asset tracking', 'Sensor and camera lines', 'Remote monitoring'], foot: 'Connected operations', to: '/contact' },
  { index: '//09', glyph: '✎', title: 'Website Chat Agents', desc: 'Chat that answers real questions, qualifies visitors, and books the next step while you sleep.', items: ['Trained on your content', 'Lead capture to your CRM', 'Handoff to a person'], foot: 'Leads captured 24/7', to: '/contact' },
  { index: '//10', glyph: '⇄', title: 'Workflow Automation', desc: 'Connect the tools you already use so records, follow-ups, and approvals move without anyone chasing them.', items: ['CRM and calendar sync', 'Document and invoice flows', 'Save 20+ hours weekly'], foot: 'Busywork, routed away', to: '/ai-projects' },
];

const steps = [
  { label: '//01 DISCOVER', title: 'Assess your needs.', desc: 'Map the work, the tools, and the costs. Choose a problem worth solving first.' },
  { label: '//02 PLAN', title: 'Build your roadmap.', desc: 'A 30/60/90-day plan with fixed prices and clear owners for every step.' },
  { label: '//03 IMPLEMENT', title: 'Deploy the solutions.', desc: 'We build, connect, and train. Your team is in the loop from the first prototype.' },
  { label: '//04 MEASURE', title: 'Track your ROI.', desc: 'Pick the measure that matters, then report on it monthly. Keep improving.' },
];

const stats = [
  { n: '500+', label: 'Businesses served' },
  { n: '95%', label: 'Client retention' },
  { n: '40%', label: 'Average cost reduction' },
  { n: '24/7', label: 'AI availability' },
];

export default function ServicesPage() {
  return (
    <DaylightPage title="Services — NevTech AI">
      <Hero
        eyebrow="//01 What we offer"
        title={<>Complete business<br /><em>technology solutions.</em></>}
        lede="From AI leadership to the phone lines your team answers on. Ten services, one partner, zero runaround."
        actions={<>
          <Btn to="/contact">Get a free consultation <span aria-hidden="true">↗</span></Btn>
          <a href="#all-services" className="dl-link">Browse all services <span aria-hidden="true">↓</span></a>
        </>}
      />

      <Section id="all-services">
        <SectionHead
          eyebrow="//02 Ten services"
          title={<>Start anywhere.<br />We connect the rest.</>}
          aside="Every engagement begins with a free 15-minute assessment and ends with a fixed-price proposal."
        />
        <div className="dl-grid wide">
          {services.map(s => (
            <Card key={s.index} index={s.index} glyph={s.glyph} title={s.title} foot={s.foot} to={s.to}>
              <p>{s.desc}</p>
              <Check items={s.items} />
            </Card>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHead
          eyebrow="//03 How we work"
          title={<>One partner.<br />The whole journey.</>}
          aside="Find a useful opportunity, prove it with your team, and make it part of everyday work."
        />
        <div className="dl-process" style={{ background: '#fffef6' }}>
          {steps.map(s => (
            <div key={s.label}>
              <span className="mono">{s.label}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
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

      <section className="dl-cta" id="contact">
        <p className="mono">//04 Build something useful</p>
        <h2>Ready to transform<br /><em style={{ fontStyle: 'normal' }}>your business?</em></h2>
        <div className="dl-cta-row">
          <p>Bring the bottleneck, the phone bill, or the product idea. We’ll find the right place to begin.</p>
          <div className="dl-cta-actions" style={{ gap: 20 }}>
            <Btn to="/contact" light>Get a free consultation <span aria-hidden="true">↗</span></Btn>
            <Link to="/about" style={{ fontSize: 12, color: '#d2e1d6' }}>Learn about us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </DaylightPage>
  );
}
