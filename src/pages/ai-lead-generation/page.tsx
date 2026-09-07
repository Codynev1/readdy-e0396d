import { useEffect } from 'react';
import { DaylightPage, Hero, Section, SectionHead, Eyebrow, Btn, LeadForm } from '@/components/daylight';

const steps = [
  { label: '//01 RESEARCH', title: 'Find the right people.', desc: 'Ideal-customer criteria turned into a verified list with context on each company.' },
  { label: '//02 REACH', title: 'Say something relevant.', desc: 'Personalized email and LinkedIn messages written from real signals, not templates.' },
  { label: '//03 FOLLOW UP', title: 'Never drop a thread.', desc: 'Replies classified, questions answered, timing handled. Humans step in for the real conversations.' },
  { label: '//04 BOOK', title: 'Meeting on the calendar.', desc: 'Booked, confirmed, reminded, and logged in your CRM with the full history.' },
];

const fit = [
  { t: 'You sell to businesses', p: 'B2B services, software, and trades with a deal size that justifies a conversation.' },
  { t: 'You can describe your best customer', p: 'Industry, size, location, and the trigger that makes them ready to buy.' },
  { t: 'Someone can take the meeting', p: 'We fill the calendar. You or your team close. Nova can even answer the callbacks.' },
];

export default function AILeadGenerationPage({ focusForm }: { focusForm?: boolean } = {}) {
  useEffect(() => {
    if (focusForm) {
      const el = document.getElementById('get-leads');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [focusForm]);

  return (
    <DaylightPage title="AI Lead Generation — NevTech AI">
      <Hero
        eyebrow="//01 AI lead generation"
        title={<>A full calendar,<br /><em>without the cold calls.</em></>}
        lede="AI finds the right prospects, writes the first message, follows up on time, and books the meeting. Your team shows up to conversations that are already warm."
        actions={<>
          <Btn href="#get-leads">Get a lead-gen plan <span aria-hidden="true">↓</span></Btn>
          <a className="dl-link" href="tel:3175089493">Call (317) 508-9493</a>
        </>}
      />

      <Section>
        <SectionHead
          eyebrow="//02 How it works"
          title="Research. Reach. Follow up. Book."
          aside="Every message is reviewed by a person before the first send. After that, the system runs and you watch the calendar."
        />
        <div className="dl-process" style={{ background: '#fffef6' }}>
          {steps.map(s => (
            <div key={s.label}>
              <span className="mono" style={{ letterSpacing: 1 }}>{s.label}</span>
              <h3 style={{ margin: '36px 0 12px' }}>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHead eyebrow="//03 Good fit" title="Works best when…" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '26px 35px' }}>
          {fit.map(f => (
            <article key={f.t} style={{ paddingTop: 21, borderTop: '1px solid #173c2a22' }}>
              <h3 style={{ fontSize: 15, fontWeight: 400, marginBottom: 11, display: 'flex', gap: 13 }}>
                <span style={{ color: '#07806a' }}>↗</span>{f.t}
              </h3>
              <p style={{ fontSize: 13, color: '#566d5f' }}>{f.p}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="get-leads">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '40px 60px', alignItems: 'start' }}>
          <div>
            <Eyebrow>//04 Get leads</Eyebrow>
            <h2 className="dl-h2" style={{ margin: '13px 0 20px' }}>Tell us who<br />you want to reach.</h2>
            <p style={{ fontSize: 14, color: '#566d5f', maxWidth: 340 }}>We’ll come back within one business day with a target list sample and a fixed monthly price.</p>
          </div>
          <div style={{ background: '#fffef6', border: '1px solid #214b2f22', borderRadius: 8, padding: 28 }}>
            <LeadForm
              fields={[
                { name: 'name', label: 'Full name', required: true, half: true },
                { name: 'email', label: 'Work email', type: 'email', required: true, half: true },
                { name: 'company', label: 'Company', required: true, half: true },
                { name: 'phone', label: 'Phone', type: 'tel', half: true },
                { name: 'icp', label: 'Who is your ideal customer?', required: true, placeholder: 'e.g. Dental practices in Indiana with 2+ locations' },
                { name: 'volume', label: 'Meetings you want per month', type: 'select', options: ['5–10', '10–20', '20–40', '40+'] },
              ]}
              submitLabel="Get my plan"
              successEyebrow="Request received"
              successTitle="Thanks. Your sample list and price are on the way."
              successCopy="Expect an email within one business day from cody@nevtech.io."
            />
            <span style={{ display: 'block', fontSize: 11, color: '#55745d', marginTop: 12 }}>No obligation. No credit card.</span>
          </div>
        </div>
      </Section>

      <section className="dl-cta" id="contact">
        <p className="mono">//05 One more thing</p>
        <h2>Leads call back.<br /><em style={{ fontStyle: 'normal' }}>Make sure someone answers.</em></h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
          <Btn to="/receptionist" light>Meet Nova AI <span aria-hidden="true">↗</span></Btn>
        </div>
      </section>
    </DaylightPage>
  );
}
