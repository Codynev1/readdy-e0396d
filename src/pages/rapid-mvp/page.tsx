import { Link } from 'react-router-dom';
import { DaylightPage, Hero, Section, SectionHead, Eyebrow, Btn } from '@/components/daylight';

const weeks = [
  { label: '//WEEKS 1–2', title: 'Define', desc: 'The one problem, the one user, and the smallest thing that solves it. Clickable prototype by day 10.' },
  { label: '//WEEKS 3–5', title: 'Build', desc: 'Working software, shipped weekly. You see it every Friday and steer.' },
  { label: '//WEEKS 6–7', title: 'Test', desc: 'Real users on the real thing. We watch, fix, and record what they asked for.' },
  { label: '//WEEK 8', title: 'Launch', desc: 'Deployed, documented, handed over. Plus a prioritized list for version two.' },
];

const includes = [
  { t: 'Product design', p: 'Flows, screens, and copy. Designed for the user you named in week one.' },
  { t: 'Modern stack', p: 'Web or mobile, hosted, secured, and monitored. AI features where they earn their place.' },
  { t: 'You own the code', p: 'Repository, documentation, and deployment are yours. Keep building with us or anyone.' },
  { t: 'Thirty days of support', p: 'Bugs fixed, questions answered, and a plan for what comes next.' },
];

export default function RapidMVPPage() {
  return (
    <DaylightPage title="Rapid MVP — NevTech AI">
      <Hero
        eyebrow="//01 Rapid MVP · 8 weeks"
        title={<>Make the idea real.<br /><em>Then learn.</em></>}
        lede="From a conversation to working software in eight weeks, typically for under $10K. Real users, real feedback, and code you own."
        actions={<>
          <Btn to="/intake-form">Start a project intake <span aria-hidden="true">↗</span></Btn>
          <a className="dl-link" href="#timeline">See the 8 weeks <span aria-hidden="true">↓</span></a>
        </>}
      />

      <Section>
        <div className="dl-two" style={{ gap: '40px 60px' }}>
          <div>
            <Eyebrow>//02 Who it’s for</Eyebrow>
            <h2 className="dl-h2">You have the idea.<br />You don’t have a year.</h2>
          </div>
          <div style={{ display: 'grid', gap: 18, maxWidth: 560 }}>
            <p className="dl-p">An internal tool your team keeps asking for. A customer portal your competitors already have. A product you’ve been sketching on napkins. Rapid MVP is for the version that proves it’s worth building more.</p>
            <p className="dl-p">We scope tightly, ship weekly, and put the software in front of real users by week six. You leave with something that works, a list of what to build next, and every line of code.</p>
          </div>
        </div>
      </Section>

      <Section id="timeline" alt>
        <SectionHead eyebrow="//03 The eight weeks" title="Fixed timeline. Fixed price." />
        <div className="dl-process" style={{ background: '#fffef6' }}>
          {weeks.map(w => (
            <div key={w.label}>
              <span className="mono">{w.label}</span>
              <h3 style={{ margin: '36px 0 12px' }}>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="//04 What’s included" title="Everything you need to ship." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '26px 35px' }}>
          {includes.map(i => (
            <article key={i.t} style={{ paddingTop: 21, borderTop: '1px solid #173c2a22' }}>
              <h3 style={{ fontSize: 15, fontWeight: 400, marginBottom: 11, display: 'flex', gap: 13 }}>
                <span style={{ color: '#07806a' }}>↗</span>{i.t}
              </h3>
              <p style={{ fontSize: 13, color: '#566d5f' }}>{i.p}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="dl-cta" id="contact">
        <p className="mono">//05 Eight weeks from now</p>
        <h2>Your idea,<br /><em style={{ fontStyle: 'normal' }}>in someone’s hands.</em></h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
          <Btn to="/intake-form" light>Start the intake <span aria-hidden="true">↗</span></Btn>
          <Link to="/contact" className="dl-x-cta-link">Or just talk it through <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </DaylightPage>
  );
}
