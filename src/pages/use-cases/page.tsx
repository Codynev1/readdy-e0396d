import { Link } from 'react-router-dom';
import { DaylightPage, Hero, Section, Btn } from '@/components/daylight';

const cases = [
  { label: '//01 HEALTHCARE & DENTAL', title: 'Front desks that never put a patient on hold.', pain: 'Missed calls, no-shows, and staff buried in scheduling.', fix: 'HIPAA-compliant Nova answers, books, reminds, and confirms. Intake forms filled before arrival.', link: 'AI for healthcare in Indiana', to: '/ai-healthcare-indiana' },
  { label: '//02 LAW FIRMS', title: 'Intake that qualifies before the first billable minute.', pain: 'Attorneys interrupted by intake calls that don’t fit the practice.', fix: 'AI intake and conflict-check pre-screen, document search over case files, and automated follow-up.', link: 'AI for law firms in Indiana', to: '/ai-law-firms-indiana' },
  { label: '//03 HOME SERVICES', title: 'The 7 p.m. burst pipe gets booked, not voicemailed.', pain: 'After-hours calls go to the competitor who answered.', fix: '24/7 AI dispatch, quote follow-up automation, and fleet connectivity that keeps trucks online.', link: 'AI for home services in Indiana', to: '/ai-home-services-indiana' },
  { label: '//04 LOGISTICS', title: 'Every truck, dock, and document in one view.', pain: 'Status calls, paper BOLs, and cameras nobody reviews.', fix: 'Document AI for shipping paperwork, IoT tracking, and NevTech VMS with plate recognition at the gate.', link: 'AI for logistics in Indiana', to: '/ai-logistics-indiana' },
  { label: '//05 MANUFACTURING', title: 'Know about the fault before the line stops.', pain: 'Tribal knowledge, unplanned downtime, and quality issues found too late.', fix: 'Sensor alerts with context, RAG search over maintenance manuals, and computer vision on the line.', link: 'AI for manufacturing in Indiana', to: '/ai-manufacturing-indiana' },
  { label: '//06 CONSTRUCTION', title: 'Bids out faster, sites connected, crews reachable.', pain: 'Estimating bottlenecks, job-site dead zones, and change orders lost in text threads.', fix: 'AI-assisted takeoffs and proposals, 5G site internet, and automated change-order tracking.', link: 'AI for construction in Indiana', to: '/ai-construction-indiana' },
];

export default function UseCasesPage() {
  return (
    <DaylightPage title="Use Cases — NevTech AI">
      <Hero
        eyebrow="//01 Use cases"
        title={<>What AI looks like<br /><em>in your industry.</em></>}
        lede={<span style={{ display: 'block', maxWidth: 580 }}>The pain, the fix, and the first project we’d run. Six industries we work in every week across Indiana.</span>}
      />

      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 12 }}>
          {cases.map(c => (
            <article key={c.label} className="dl-card" style={{ padding: '26px 24px', display: 'grid', gap: 16 }}>
              <span className="mono" style={{ color: '#557561', letterSpacing: 1 }}>{c.label}</span>
              <h3 style={{ font: "normal 27px/1.1 Georgia,'Times New Roman',serif", letterSpacing: '-.7px', color: '#183c2f', margin: 0 }}>{c.title}</h3>
              <div style={{ display: 'grid', gap: 10, fontSize: 13, lineHeight: 1.7 }}>
                <p style={{ color: '#5a705f', margin: 0 }}><strong style={{ color: '#183c2f', fontWeight: 600 }}>Pain:</strong> {c.pain}</p>
                <p style={{ color: '#5a705f', margin: 0 }}><strong style={{ color: '#183c2f', fontWeight: 600 }}>Fix:</strong> {c.fix}</p>
              </div>
              <Link to={c.to} style={{ fontSize: 12, color: '#07806a', borderTop: '1px solid #173c2a22', paddingTop: 14 }}>{c.link} <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </Section>

      <section className="dl-cta" id="contact">
        <p className="mono">//02 Don’t see yours?</p>
        <h2>Every business has<br /><em style={{ fontStyle: 'normal' }}>a first project.</em></h2>
        <div className="dl-cta-actions" style={{ gap: 20 }}>
          <Btn to="/contact" light>Get a free assessment <span aria-hidden="true">↗</span></Btn>
          <Link to="/services" style={{ fontSize: 12, color: '#d2e1d6' }}>Browse all services <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </DaylightPage>
  );
}
