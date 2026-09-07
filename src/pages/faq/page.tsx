import { ReactNode, useEffect, useState } from 'react';
import { DaylightPage, Hero, Btn } from '@/components/daylight';

type Cat = 'all' | 'general' | 'nova' | 'ai' | 'tel' | 'price';

const pills: { cat: Cat; label: string }[] = [
  { cat: 'all', label: 'All questions' },
  { cat: 'general', label: 'General' },
  { cat: 'nova', label: 'AI receptionist' },
  { cat: 'ai', label: 'AI & automation' },
  { cat: 'tel', label: 'Cellular & internet' },
  { cat: 'price', label: 'Pricing & plans' },
];

const groups: { cat: Cat; id: string; eyebrow: string; items: { q: string; a: ReactNode }[] }[] = [
  {
    cat: 'general', id: 'general', eyebrow: '//02 General',
    items: [
      { q: 'What does NevTech AI do?', a: 'We help businesses put AI and modern connectivity to work: AI voice agents and receptionists, workflow automation, custom AI projects, rapid MVPs, fractional AI leadership, and cellular and internet consulting. One partner for the whole stack.' },
      { q: 'Where are you based?', a: 'Indianapolis, Indiana. We serve businesses across Indiana in person and take on AI projects nationwide.' },
      { q: 'Do I need to be technical?', a: 'No. You know your business; we handle the technology. We explain every decision in plain language and train your team before anything goes live.' },
      { q: 'How do I get started?', a: <>Book a free 30-minute call at <a href="https://calendly.com/cody-nevtech/30min" target="_blank" rel="noreferrer">calendly.com/cody-nevtech/30min</a> or call <a href="tel:3175089493">(317) 508-9493</a>. You’ll leave with a clear next step, whether or not you work with us.</> },
    ],
  },
  {
    cat: 'nova', id: 'receptionist', eyebrow: '//03 AI receptionist (Nova)',
    items: [
      { q: 'What is Nova AI?', a: 'Nova is our 24/7 AI receptionist. It answers every call, books appointments, answers common questions, takes messages, and routes urgent calls to a person.' },
      { q: 'Does it sound robotic?', a: 'No. Nova uses natural, conversational speech, handles interruptions, and responds in under two seconds. Most callers don’t realize they’re speaking with AI unless Nova tells them.' },
      { q: 'What happens when a caller needs a human?', a: 'Nova transfers live to the right person or team based on your rules, and sends a summary of the conversation so nobody starts over.' },
      { q: 'How long does setup take?', a: 'About five business days. We learn your business, configure Nova, test it with you, and go live.' },
      { q: 'Can it handle many calls at once?', a: 'Yes. Nova answers unlimited concurrent calls, so nobody hears a busy signal or waits on hold.' },
      { q: 'Is it HIPAA-compliant?', a: 'Yes. Nova can be deployed with HIPAA-compliant handling for medical and dental practices, including signed BAAs.' },
    ],
  },
  {
    cat: 'ai', id: 'ai', eyebrow: '//04 AI & automation',
    items: [
      { q: 'What kinds of AI projects do you build?', a: 'Data taxonomy and clean-up, RAG internal search over your documents, workflow tools, earnings-call automation, and meeting intelligence. If it touches your data and saves your team time, it’s in scope.' },
      { q: 'What is a Fractional CAIO?', a: 'A Chief AI Officer on a part-time retainer. You get executive-level AI strategy, vendor selection, and governance for a fraction of a $250K+ salary.' },
      { q: 'Consultant or CAIO: what’s the difference?', a: 'A consultant delivers a project. A Fractional CAIO owns the outcome over time: priorities, budget, team enablement, and results. Many clients start with a project and move to a retainer.' },
      { q: 'What is Rapid MVP?', a: 'An 8-week program that turns an idea into working software, typically for under $10K. You own the code and can keep building with us or anyone else.' },
      { q: 'What can you automate?', a: 'Anything repetitive that moves between systems: lead follow-up, CRM updates, scheduling, invoicing, document handling, reporting. Most clients save 20+ hours a week.' },
    ],
  },
  {
    cat: 'tel', id: 'cellular', eyebrow: '//05 Cellular & internet',
    items: [
      { q: 'What T-Mobile offers do you have?', a: 'Business lines from $10/line with 10 or more lines, tablets from $15, and business internet from $50/month. Sign up through NevTech and Nova’s inbound calling is free for six months.' },
      { q: 'Can I keep my numbers?', a: 'Yes. Number porting is free and we manage it end to end.' },
      { q: 'How does cellular consulting work?', a: 'We audit your current lines, devices, and plans, then recommend changes. Most businesses save 30–40% without changing how their team works.' },
      { q: 'Do you only work with T-Mobile?', a: 'No. For business internet we design around fiber, 5G, and failover from whichever carriers serve your locations best.' },
    ],
  },
  {
    cat: 'price', id: 'pricing', eyebrow: '//06 Pricing & plans',
    items: [
      { q: 'How is Nova priced?', a: 'By call volume, so small practices pay less than busy call centers. T-Mobile customers who sign up through NevTech get six months of inbound calling free.' },
      { q: 'What do Fractional CAIO retainers cost?', a: 'Quick-Start from $1,800/month, Growth $2,800–$4,200/month, Hands-On $4,500–$6,500/month. Hourly advisory runs $125–$175. No lock-in after 90 days.' },
      { q: 'Is the first conversation free?', a: 'Yes. The discovery call is free and includes a live Nova demo if you want one.' },
      { q: 'Why are your rates lower than the big consultancies?', a: 'We’re in the Midwest, not on a coast, and we don’t carry a partner layer. Coastal firms bill $200–$400/hour for comparable work.' },
    ],
  },
];

const hashToCat: Record<string, Cat> = {
  all: 'all', general: 'general', receptionist: 'nova', nova: 'nova', ai: 'ai', cellular: 'tel', tel: 'tel', pricing: 'price', price: 'price',
};

export default function FAQPage() {
  const [cat, setCat] = useState<Cat>('all');

  useEffect(() => {
    const h = (window.location.hash || '').replace('#', '').toLowerCase();
    if (h && hashToCat[h]) setCat(hashToCat[h]);
  }, []);

  return (
    <DaylightPage title="FAQ — NevTech AI">
      <Hero
        eyebrow="//01 Got questions?"
        title={<>Frequently asked<br /><em>questions.</em></>}
        lede="Plain answers on what we do, what it costs, and how fast it happens."
      />

      <div className="dl-sticky dl-pills" style={{ zIndex: 10, padding: '14px 6%', margin: 0, borderBottom: '1px solid #173c2a22', gap: 6 }}>
        {pills.map(p => (
          <button
            key={p.cat}
            type="button"
            className="dl-pill"
            aria-pressed={cat === p.cat}
            onClick={() => setCat(p.cat)}
            style={{ borderRadius: 3, padding: '8px 14px' }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '40px 6% 70px', display: 'grid', gap: 56 }}>
        {groups.filter(g => cat === 'all' || cat === g.cat).map(g => (
          <section key={g.id} id={g.id}>
            <p className="dl-eyebrow" style={{ marginBottom: 18 }}>{g.eyebrow}</p>
            {g.items.map((f, i) => {
              const last = i === g.items.length - 1;
              return (
                <details
                  key={f.q}
                  className="dl-details"
                  style={{ border: 0, borderTop: '1px solid #173c2a22', borderBottom: last ? '1px solid #173c2a22' : 0, borderRadius: 0, background: 'transparent', padding: '18px 0', marginTop: 0 }}
                >
                  <summary style={{ padding: 0, font: "normal 20px/1.3 Georgia,'Times New Roman',serif", letterSpacing: 0 }}>{f.q}</summary>
                  <div className="dl-details-body" style={{ padding: 0, marginTop: 12, maxWidth: 720, lineHeight: 1.75 }}>{f.a}</div>
                </details>
              );
            })}
          </section>
        ))}
      </div>

      <section className="dl-cta" id="contact">
        <p className="mono">//07 Still have questions?</p>
        <h2>Ask a person<br /><em style={{ fontStyle: 'normal' }}>who knows.</em></h2>
        <div className="dl-cta-actions" style={{ gap: 20 }}>
          <Btn to="/contact" light>Contact us <span aria-hidden="true">↗</span></Btn>
          <a href="tel:3175089493" style={{ fontSize: 12, color: '#d2e1d6' }}>(317) 508-9493</a>
        </div>
      </section>
    </DaylightPage>
  );
}
