import { useState } from 'react';
import { DaylightPage, Section, SectionHead, Eyebrow, Btn, Faq, LeadForm } from '@/components/daylight';

const heroStats = [
  { n: '24/7', label: 'Always answering' },
  { n: '100%', label: 'Calls captured' },
  { n: '<2 sec', label: 'Response time' },
  { n: '30+', label: 'Languages' },
];

const problems = [
  { i: '//01', t: 'The hang-up rate', p: 'Most callers won’t leave a voicemail. They call the next business on the list. Nova picks up on the first ring, every time.' },
  { i: '//02', t: 'Front-desk burnout', p: 'Your best people spend the day repeating hours and directions. Nova takes the routine so they can take the person in front of them.' },
  { i: '//03', t: 'The after-hours black hole', p: 'Nights, weekends, lunch. Nova books the appointment, captures the lead, and escalates the emergency.' },
];

const inbound = [
  { t: 'Answers every call', p: 'First ring, no hold music, unlimited concurrent calls.' },
  { t: 'Natural conversations', p: 'Handles interruptions, accents, and follow-up questions like a person would.' },
  { t: 'Books appointments', p: 'Live on your calendar, with confirmations and reminders sent automatically.' },
  { t: 'Smart routing', p: 'Urgent calls go to the on-call person. Everything else gets handled or scheduled.' },
  { t: 'Remembers customers', p: 'Recognizes returning callers and picks up where the last conversation ended.' },
  { t: '30+ languages', p: 'Switches language mid-call. Every customer gets served in theirs.' },
];

const outbound = [
  { t: 'Appointment reminders', p: 'Calls, confirms, and reschedules. No-shows drop within the first month.' },
  { t: 'Lead follow-up', p: 'Every web form and missed call gets a callback within minutes, not days.' },
  { t: 'Surveys', p: 'Post-visit check-ins that surface problems while you can still fix them.' },
  { t: 'Payment reminders', p: 'Polite, on schedule, and logged. Cash comes in without the awkward call.' },
  { t: 'Reactivation', p: 'Reaches customers you haven’t heard from and books them back in.' },
  { t: 'Bulk outreach', p: 'Closures, recalls, promotions: hundreds of personal calls in an hour.' },
];

const steps = [
  { i: '//01', t: 'We learn your business.', p: 'Services, hours, pricing, the questions you get every day, and the rules for escalation.' },
  { i: '//02', t: 'Nova goes live.', p: 'We test with you, connect your calendar and CRM, then forward the line. Keep your number.' },
  { i: '//03', t: 'You watch the results.', p: 'Every call summarized, every booking logged, and a monthly report on what Nova captured.' },
];

const benefits = [
  { n: '100%', t: 'Never miss revenue', p: 'Every call answered, every lead captured.' },
  { n: '85%', t: 'Fraction of the cost', p: 'Versus a full-time receptionist or answering service.' },
  { n: '24/7', t: 'True around-the-clock', p: 'Nights, weekends, holidays, lunch.' },
  { n: '∞', t: 'Instant scalability', p: 'A hundred calls at once sound like one.' },
  { n: '100%', t: 'Consistent quality', p: 'Same warm greeting on the first call and the thousandth.' },
  { n: 'Live', t: 'Actionable analytics', p: 'Call reasons, peak times, and conversion in real time.' },
];

const industries = [
  { t: 'Medical & dental', pain: 'Patients on hold, no-shows, HIPAA worries.', nova: 'Compliant booking, reminders, and insurance questions answered.' },
  { t: 'Law firms', pain: 'Intake calls interrupt billable work.', nova: 'Qualifies the matter, gathers details, books the consult.' },
  { t: 'Home services', pain: 'Emergencies after hours go to competitors.', nova: 'Dispatches the on-call tech and books the rest for morning.' },
  { t: 'Salons & spas', pain: 'Stylists can’t answer with hands full.', nova: 'Books, reschedules, and fills cancellations from the waitlist.' },
  { t: 'Real estate', pain: 'Leads call while you’re in a showing.', nova: 'Captures the inquiry, answers listing questions, schedules the tour.' },
  { t: 'Restaurants', pain: 'Phones ring through the dinner rush.', nova: 'Reservations, hours, and catering inquiries handled without a host leaving the door.' },
];

const faqs = [
  { q: 'Does Nova sound like a robot?', a: 'No. Natural voice, natural pacing, and it handles interruptions. Nova tells callers it’s an AI assistant if they ask.' },
  { q: 'What if someone needs a human?', a: 'Nova transfers live by your rules and sends a summary so nobody repeats themselves.' },
  { q: 'How long is setup?', a: 'About five business days from kickoff to live calls.' },
  { q: 'Does it integrate with my tools?', a: 'Calendars, CRMs, practice-management and field-service systems. If it has an API, we connect it.' },
  { q: 'How many calls at once?', a: 'Unlimited. Nobody hears a busy signal.' },
  { q: 'Is it HIPAA-compliant?', a: 'Yes, with a signed BAA for medical and dental practices.' },
  { q: 'Is there a contract?', a: 'Month to month with no lock-in. Pay annually and get two months free.' },
];

const twoCol: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '40px 60px', alignItems: 'start' };

export default function ReceptionistPage() {
  const [tab, setTab] = useState<'in' | 'out'>('in');
  const features = tab === 'in' ? inbound : outbound;

  return (
    <DaylightPage title="Nova AI — 24/7 AI Receptionist by NevTech">
      {/* Hero */}
      <section className="dl-hero" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '40px 60px', alignItems: 'end' }}>
        <div>
          <p className="dl-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '7px 12px', border: '1px solid #217d5955', borderRadius: 20, background: '#dcecdf' }}>
            <span className="dl-pulse" aria-hidden="true" />Now taking calls for SMBs nationwide
          </p>
          <h1 style={{ fontSize: 'clamp(50px,6.4vw,100px)', lineHeight: 0.98, letterSpacing: '-3.2px', margin: '22px 0 22px' }}>Meet <em>Nova AI.</em></h1>
          <p style={{ fontSize: 19, lineHeight: 1.45, color: '#183c2f', marginBottom: 12 }}>Your 24/7 AI receptionist by NevTech.</p>
          <p className="dl-p" style={{ color: '#566d5f', maxWidth: 520 }}>62% of inbound callers hang up when nobody answers. Nova answers every one, in under two seconds, in a voice your customers will thank you for.</p>
          <div className="dl-actions">
            <Btn href="#demo">Get a demo <span aria-hidden="true">↓</span></Btn>
            <a className="dl-link" href="#how">See how it works <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 1, background: '#173c2a22', border: '1px solid #173c2a22', borderRadius: 5, overflow: 'hidden' }}>
          {heroStats.map(s => (
            <div key={s.label} style={{ background: '#fffef6', padding: '22px 20px' }}>
              <p style={{ font: "normal 44px/1 Georgia,'Times New Roman',serif", letterSpacing: '-1.5px', color: '#07806a' }}>{s.n}</p>
              <p className="mono" style={{ lineHeight: 1.8, letterSpacing: 1, color: '#55745d', marginTop: 8 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <Section>
        <SectionHead eyebrow="//01 The problem" title={<>Every missed call<br />is a lost customer.</>} />
        <div className="dl-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
          {problems.map(c => (
            <article key={c.i} className="dl-card static" style={{ gap: 0 }}>
              <span className="mono" style={{ color: '#557561', letterSpacing: 1 }}>{c.i}</span>
              <h3 className="dl-h3" style={{ fontSize: 24, lineHeight: 1.15, margin: '18px 0 10px' }}>{c.t}</h3>
              <p>{c.p}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* What Nova does */}
      <Section id="what" alt>
        <div className="dl-head" style={{ marginBottom: 28 }}>
          <div>
            <Eyebrow>//02 What Nova does</Eyebrow>
            <h2 className="dl-h2">Inbound and outbound.</h2>
          </div>
          <div className="dl-segment" role="tablist" style={{ border: '1px solid #173c2a22' }}>
            <button type="button" role="tab" aria-selected={tab === 'in'} onClick={() => setTab('in')}>Inbound</button>
            <button type="button" role="tab" aria-selected={tab === 'out'} onClick={() => setTab('out')}>Outbound</button>
          </div>
        </div>
        <div className="dl-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
          {features.map(f => (
            <article key={f.t} className="dl-card static" style={{ padding: 20, gap: 0 }}>
              <h3 className="dl-h3 small" style={{ lineHeight: 1.2, marginBottom: 8 }}>{f.t}</h3>
              <p>{f.p}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section id="how">
        <SectionHead eyebrow="//03 How it works" title="Live in about five business days." />
        <div className="dl-process" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', background: '#fffef6' }}>
          {steps.map(s => (
            <div key={s.i}>
              <span className="mono">{s.i}</span>
              <h3 style={{ margin: '36px 0 12px' }}>{s.t}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* T-Mobile offer */}
      <section style={{ padding: '70px 6%', background: '#0f2f27', color: '#f1f4ec', borderBottom: '1px solid #173c2a22', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 30 }}>
        <div>
          <p className="mono" style={{ color: '#7eddb8' }}>Limited-time offer</p>
          <h2 style={{ font: "normal clamp(34px,4vw,60px)/1.05 Georgia,'Times New Roman',serif", letterSpacing: '-1.8px', margin: '14px 0 14px', color: '#f1f4ec' }}>
            Six months of inbound calling, <em style={{ fontStyle: 'normal', color: '#7eddb8' }}>free.</em>
          </h2>
          <p style={{ fontSize: 15, color: '#a5bbaa', maxWidth: 520 }}>Sign up for T-Mobile for Business through NevTech and Nova answers your calls free for six months.</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
          <Btn to="/tmobile-business" light>Claim your 6 free months <span aria-hidden="true">↗</span></Btn>
        </div>
      </section>

      {/* Benefits */}
      <Section>
        <SectionHead eyebrow="//04 Benefits" title="What changes in month one." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '26px 35px' }}>
          {benefits.map(b => (
            <article key={b.t} style={{ paddingTop: 21, borderTop: '1px solid #173c2a22' }}>
              <p style={{ font: "normal 40px/1 Georgia,'Times New Roman',serif", color: '#07806a', letterSpacing: '-1px' }}>{b.n}</p>
              <h3 style={{ fontSize: 15, fontWeight: 400, margin: '14px 0 8px' }}>{b.t}</h3>
              <p style={{ fontSize: 13, color: '#566d5f' }}>{b.p}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section alt>
        <SectionHead eyebrow="//05 Who it’s for" title={<>Built for the businesses<br />the phone matters to.</>} />
        <div className="dl-grid">
          {industries.map(c => (
            <article key={c.t} className="dl-card static" style={{ padding: 20, gap: 10 }}>
              <h3 className="dl-h3" style={{ fontSize: 22, lineHeight: 1.2 }}>{c.t}</h3>
              <p>
                <strong style={{ color: '#183c2f', fontWeight: 600 }}>Pain:</strong> {c.pain}<br />
                <strong style={{ color: '#183c2f', fontWeight: 600 }}>Nova:</strong> {c.nova}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div style={twoCol}>
          <div>
            <Eyebrow>//06 Questions</Eyebrow>
            <h2 className="dl-h2">Your competitors<br />are answering. Are you?</h2>
            <div style={{ marginTop: 26 }}>
              <Btn href="#demo">Start answering every call <span aria-hidden="true">↓</span></Btn>
            </div>
          </div>
          <Faq items={faqs} />
        </div>
      </Section>

      {/* Demo form */}
      <Section id="demo" alt>
        <div style={twoCol}>
          <div>
            <Eyebrow>//07 Get a demo</Eyebrow>
            <h2 className="dl-h2" style={{ margin: '13px 0 20px' }}>Hear Nova answer<br />for your business.</h2>
            <p style={{ fontSize: 14, color: '#566d5f', maxWidth: 340 }}>We’ll set up a short live demo trained on your services. Or call <a href="tel:3175089493">(317) 508-9493</a> after hours and Nova will pick up.</p>
          </div>
          <div style={{ background: '#fffef6', border: '1px solid #214b2f22', borderRadius: 8, padding: 28 }}>
            <LeadForm
              fields={[
                { name: 'name', label: 'Full name', required: true, half: true },
                { name: 'email', label: 'Work email', type: 'email', required: true, half: true },
                { name: 'phone', label: 'Phone number', type: 'tel', required: true, half: true },
                { name: 'company', label: 'Company name', required: true, half: true },
                { name: 'size', label: 'Number of employees', type: 'select', options: ['1–5', '6–20', '21–50', '51–200', '200+'] },
              ]}
              submitLabel="Request my demo"
              successEyebrow="Demo request received"
              successTitle="Thanks. We’ll reach out to schedule."
              successCopy={<>Want to hear Nova now? Call <a href="tel:3175089493">(317) 508-9493</a> after hours.</>}
            />
            <span style={{ display: 'block', fontSize: 11, color: '#55745d', marginTop: 12 }}>Free. No credit card.</span>
          </div>
        </div>
      </Section>
    </DaylightPage>
  );
}
