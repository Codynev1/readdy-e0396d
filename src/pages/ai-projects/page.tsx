import { Link } from 'react-router-dom';
import { DaylightPage, Hero, Section, SectionHead, Eyebrow, Card, Btn } from '@/components/daylight';

const projects = [
  { i: '//01', g: '⊞', t: 'Data taxonomy', p: 'Organize the records, documents, and categories your business runs on so every system and every person means the same thing.', f: 'Clean data / shared definitions / migration' },
  { i: '//02', g: '◎', t: 'RAG internal search', p: 'Ask a question, get the answer with the source. Built over your manuals, contracts, tickets, and notes.', f: 'Knowledge base / citations / permissions' },
  { i: '//03', g: '⇄', t: 'Workflow tools', p: 'Small applications that replace the spreadsheet, the re-keying, and the “did anyone follow up?” Slack thread.', f: 'CRM sync / approvals / notifications' },
  { i: '//04', g: '▤', t: 'Earnings-call automation', p: 'Transcripts, summaries, sentiment, and comparisons across quarters, delivered before the analysts finish their coffee.', f: 'Finance / research / reporting' },
  { i: '//05', g: '◉', t: 'Meeting intelligence', p: 'Every meeting captured, decisions and action items extracted, and the follow-ups created in the tools you already use.', f: 'Notes / tasks / accountability' },
];

const timeline = [
  { w: 'WEEK 0', p: 'Free assessment. We name the outcome, the data involved, and a fixed price.' },
  { w: 'WEEK 1', p: 'Data access and a working skeleton. You see the first output within days.' },
  { w: 'WEEKS 2–5', p: 'Weekly demos with the people who will use it. Human review stays in the loop for anything consequential.' },
  { w: 'HANDOFF', p: 'Deployed in your environment, documented, and measured against the outcome from week zero.' },
];

export default function AIProjectsPage() {
  return (
    <DaylightPage title="AI Projects — NevTech AI">
      <Hero
        eyebrow="//01 Custom AI projects"
        title={<>AI built on<br /><em>your data, your rules.</em></>}
        lede="Automations, pipelines, internal search, and applications scoped to one outcome and delivered at a fixed price."
        actions={<>
          <Btn to="/contact">Scope a project <span aria-hidden="true">↗</span></Btn>
          <Link className="dl-link" to="/use-cases">See use cases by industry <span aria-hidden="true">↗</span></Link>
        </>}
      />

      <Section>
        <SectionHead
          eyebrow="//02 What we build"
          title={<>Five project types<br />we’ve shipped many times.</>}
          aside="Most run four to eight weeks. Every one starts with your data and ends with a measured result."
        />
        <div className="dl-grid">
          {projects.map(c => (
            <Card key={c.i} index={c.i} glyph={c.g} title={c.t} foot={c.f}>
              <p>{c.p}</p>
            </Card>
          ))}
          <Link to="/contact" className="dl-x-dashed">
            <h3 className="dl-h3">Something else?</h3>
            <p style={{ fontSize: 13, color: '#5a705f', lineHeight: 1.7 }}>If it touches your data and saves your team time, it’s probably in scope. Tell us the problem.</p>
            <span style={{ fontSize: 12, color: '#07806a' }}>Start a conversation <span aria-hidden="true">↗</span></span>
          </Link>
        </div>
      </Section>

      <Section alt>
        <div className="dl-two" style={{ gap: '40px 60px' }}>
          <div>
            <Eyebrow>//03 How a project runs</Eyebrow>
            <h2 className="dl-h2">Scoped, priced,<br />then built in the open.</h2>
          </div>
          <div style={{ display: 'grid', border: '1px solid #173c2a22', borderRadius: 5, background: '#fffef6' }}>
            {timeline.map((r, i) => (
              <div key={r.w} style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: 16, padding: '18px 20px', borderBottom: i < timeline.length - 1 ? '1px solid #173c2a22' : undefined }}>
                <span className="mono" style={{ lineHeight: 1.8, letterSpacing: 0, textTransform: 'none' }}>{r.w}</span>
                <p style={{ fontSize: 14, color: '#3d5a49' }}>{r.p}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="dl-cta" id="contact">
        <p className="mono">//04 Bring the problem</p>
        <h2>We’ll bring<br /><em style={{ fontStyle: 'normal' }}>the fixed price.</em></h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
          <Btn to="/contact" light>Scope a project <span aria-hidden="true">↗</span></Btn>
          <Link to="/rapid-mvp" className="dl-x-cta-link">Building a product instead? Rapid MVP <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </DaylightPage>
  );
}
