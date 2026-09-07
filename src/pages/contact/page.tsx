import { DaylightPage, Hero, Eyebrow, Btn, LeadForm, FieldDef } from '@/components/daylight';

const channels = [
  { href: 'tel:3175089493', label: '//01 PHONE', title: '(317) 508-9493', desc: 'Mon–Fri, 9–5 Eastern. After hours, Nova answers.' },
  { href: 'mailto:cody@nevtech.io', label: '//02 EMAIL', title: 'cody@nevtech.io', desc: 'Straight to the founder. Attach anything useful.' },
  { href: 'https://calendly.com/cody-nevtech/30min', label: '//03 SCHEDULE', title: 'Book 30 minutes', desc: 'Pick a time on Calendly. Free, no obligation.' },
];

const fields: FieldDef[] = [
  { name: 'name', label: 'Full name', required: true, half: true },
  { name: 'email', label: 'Email address', type: 'email', required: true, half: true },
  { name: 'company', label: 'Company', half: true },
  { name: 'phone', label: 'Phone number', type: 'tel', half: true },
  { name: 'subject', label: 'Subject', type: 'select', required: true, options: ['AI Strategy Consultation', 'Custom AI Development', 'Process Automation', 'Data Analytics', 'Cellular & Internet', 'General Inquiry', 'Partnership'] },
  { name: 'message', label: 'Message', type: 'textarea', required: true, max: 500 },
];

export default function ContactPage() {
  return (
    <DaylightPage title="Contact — NevTech AI">
      <Hero
        eyebrow="//01 Get in touch"
        title={<>Let’s find the<br /><em>right place to begin.</em></>}
        lede="Bring the bottleneck, the product idea, or the question. A real person replies within one business day."
      />

      <section style={{ padding: '50px 6%', borderBottom: '1px solid #173c2a22', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12 }}>
        {channels.map(c => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
            className="dl-card"
            style={{ display: 'grid', gap: 14, textDecoration: 'none' }}
          >
            <span className="mono" style={{ color: '#557561', letterSpacing: 1 }}>{c.label}</span>
            <span className="dl-h3">{c.title}</span>
            <span style={{ fontSize: 13, color: '#5a705f' }}>{c.desc}</span>
          </a>
        ))}
      </section>

      <section className="dl-section alt" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '40px 60px', alignItems: 'start' }}>
        <div>
          <Eyebrow>//02 Send a message</Eyebrow>
          <h2 className="dl-h2" style={{ margin: '13px 0 20px' }}>Tell us what’s<br />slowing you down.</h2>
          <p style={{ fontSize: 14, color: '#566d5f', maxWidth: 340, margin: 0 }}>We read every message. Expect a reply, not a drip campaign.</p>
          <p style={{ font: "10px/1.9 'Courier New',monospace", textTransform: 'uppercase', letterSpacing: 1, color: '#55745d', marginTop: 30, marginBottom: 0 }}>Indianapolis, IN · USA<br />Serving Indiana in person, AI projects nationwide</p>
        </div>
        <div style={{ background: '#fffef6', border: '1px solid #214b2f22', borderRadius: 8, padding: 28 }}>
          <LeadForm
            fields={fields}
            submitLabel="Send message"
            successEyebrow="Message received"
            successTitle="Thanks. We’ll be in touch within one business day."
            successCopy={<>Need something sooner? Call <a href="tel:3175089493">(317) 508-9493</a>.</>}
          />
          <p style={{ fontSize: 11, color: '#55745d', margin: '14px 0 0' }}>We’ll never share your details.</p>
        </div>
      </section>

      <section className="dl-cta" id="contact">
        <p className="mono">//03 Prefer to skip the form?</p>
        <h2>Call, email,<br /><em style={{ fontStyle: 'normal' }}>or book a time.</em></h2>
        <div className="dl-cta-actions" style={{ gap: 20 }}>
          <Btn href="tel:3175089493" light>Call now <span aria-hidden="true">↗</span></Btn>
          <a className="dl-btn on-dark-ghost" href="mailto:cody@nevtech.io">Send email</a>
          <a href="https://calendly.com/cody-nevtech/30min" target="_blank" rel="noreferrer" style={{ fontSize: 12, color: '#d2e1d6' }}>Book a meeting <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </DaylightPage>
  );
}
