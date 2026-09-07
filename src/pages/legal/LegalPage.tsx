import { DaylightPage } from '@/components/daylight';
import { pages } from '@/data/legalPages';

export type LegalKey = 'privacy' | 'terms' | 'security' | 'support';

type LegalData = {
  title: string;
  eyebrow: string;
  intro: string;
  updated: string;
  sections: { h: string; p: string[] }[];
};

const serif = "Georgia,'Times New Roman',serif";
const mono = "'Courier New',monospace";

export default function LegalPage({ page }: { page: LegalKey }) {
  const p: LegalData = (pages as Record<string, LegalData>)[page] || (pages as Record<string, LegalData>).privacy;

  return (
    <DaylightPage title={`${p.title} — NevTech AI`}>
      {/* Legal header */}
      <section style={{ padding: '80px 6% 48px', borderBottom: '1px solid #173c2a22' }}>
        <p className="dl-eyebrow">// {p.eyebrow}</p>
        <h1 style={{ font: `normal clamp(40px,4.8vw,72px)/1.05 ${serif}`, letterSpacing: -2, margin: '16px 0 20px' }}>{p.title}</h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: '#566d5f', maxWidth: 640 }}>{p.intro}</p>
        <p style={{ font: `10px/1.9 ${mono}`, textTransform: 'uppercase', letterSpacing: 1, color: '#55745d', marginTop: 22 }}>{p.updated}</p>
      </section>

      {/* Legal body */}
      <section style={{ padding: '56px 6% 80px', display: 'grid', gridTemplateColumns: 'minmax(0,720px)', gap: 34 }}>
        {p.sections.map((s, i) => (
          <div key={i} style={{ display: 'grid', gap: 12, borderTop: '1px solid #173c2a22', paddingTop: 22 }}>
            <h2 style={{ font: `normal 26px/1.15 ${serif}`, letterSpacing: -0.6 }}>{s.h}</h2>
            {s.p.map((t, j) => <p key={j} style={{ fontSize: 15, lineHeight: 1.8, color: '#3d5a49' }}>{t}</p>)}
          </div>
        ))}
      </section>
    </DaylightPage>
  );
}
