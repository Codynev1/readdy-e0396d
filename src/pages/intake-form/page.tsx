import { Link } from 'react-router-dom';
import { DaylightPage, Hero, Eyebrow, LeadForm } from '@/components/daylight';

export default function IntakeFormPage() {
  return (
    <DaylightPage title="Project Intake — NevTech AI">
      <Hero
        eyebrow="//01 Project intake"
        title={<>Tell us about<br /><em>the project.</em></>}
        lede="Ten minutes here saves an hour on the first call. We read every answer and come back with a fixed-price proposal or a list of questions."
      />

      <section style={{ padding: '60px 6% 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '40px 60px', alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: 22, fontSize: 14, color: '#566d5f', maxWidth: 360 }}>
          <Eyebrow>What happens next</Eyebrow>
          <p><strong style={{ color: '#183c2f', fontWeight: 600 }}>Day 1:</strong> we confirm receipt and book a 30-minute call if needed.</p>
          <p><strong style={{ color: '#183c2f', fontWeight: 600 }}>Day 3:</strong> a written proposal with scope, timeline, and one price.</p>
          <p><strong style={{ color: '#183c2f', fontWeight: 600 }}>Week 2:</strong> kickoff, if you say yes. No obligation if you don’t.</p>
        </div>

        <div style={{ background: '#fffef6', border: '1px solid #214b2f22', borderRadius: 8, padding: 28 }}>
          <p className="dl-eyebrow" style={{ color: '#55745d', marginBottom: 14 }}>About you</p>
          <LeadForm
            fields={[
              { name: 'name', label: 'Full name', required: true, half: true },
              { name: 'email', label: 'Work email', type: 'email', required: true, half: true },
              { name: 'company', label: 'Company', required: true, half: true },
              { name: 'phone', label: 'Phone', type: 'tel', half: true },
              { name: 'type', label: 'Type of work', type: 'select', required: true, half: true, options: ['Rapid MVP (new product)', 'Custom AI project', 'Workflow automation', 'AI voice agent / Nova', 'Fractional CAIO', 'Cellular / internet', 'Not sure yet'] },
              { name: 'budget', label: 'Budget range', type: 'select', half: true, options: ['Under $10K', '$10K–$25K', '$25K–$75K', '$75K+', 'Monthly retainer'] },
              { name: 'timeline', label: 'Timeline', type: 'select', half: true, options: ['As soon as possible', 'Within 1–2 months', 'This quarter', 'Exploring'] },
              { name: 'size', label: 'Company size', type: 'select', half: true, options: ['1–5', '6–20', '21–50', '51–200', '200+'] },
              { name: 'problem', label: 'What problem are you trying to solve?', type: 'textarea', required: true, placeholder: 'What happens today, who it affects, and what better looks like.' },
              { name: 'systems', label: 'Systems involved', placeholder: 'e.g. HubSpot, QuickBooks, ServiceTitan, Google Workspace' },
              { name: 'measure', label: 'How will you know it worked?', placeholder: 'e.g. 20 hours/week saved, zero missed calls, quotes out same day' },
            ]}
            submitLabel="Submit intake"
            successEyebrow="Intake received"
            successTitle="Thanks. A proposal or a short list of questions is on its way."
            successCopy="Expect a reply within one business day from cody@nevtech.io."
          />
          <span style={{ display: 'block', fontSize: 11, color: '#55745d', marginTop: 12 }}>Confidential. See our <Link to="/privacy">privacy policy</Link>.</span>
        </div>
      </section>
    </DaylightPage>
  );
}
