import { ReactNode, useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

/* ---------- Page frame ---------- */
export function DaylightPage({ children, title }: { children: ReactNode; title?: string }) {
  useEffect(() => { if (title) document.title = title; }, [title]);
  return (
    <div className="nt-site">
      <div className="frame is-light dl">
        <Header variant="light" />
        <main id="main">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

/* ---------- Building blocks ---------- */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="dl-eyebrow">{children}</p>;
}

export function Hero({ eyebrow, title, lede, actions, children }: { eyebrow: string; title: ReactNode; lede?: ReactNode; actions?: ReactNode; children?: ReactNode }) {
  return (
    <section className="dl-hero">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      {lede && <p className="dl-lede">{lede}</p>}
      {actions && <div className="dl-actions">{actions}</div>}
      {children}
    </section>
  );
}

export function Section({ id, alt, children, className = '' }: { id?: string; alt?: boolean; children: ReactNode; className?: string }) {
  return <section id={id} className={`dl-section ${alt ? 'alt' : ''} ${className}`}>{children}</section>;
}

export function SectionHead({ eyebrow, title, aside }: { eyebrow: string; title: ReactNode; aside?: ReactNode }) {
  return (
    <div className="dl-head">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="dl-h2">{title}</h2>
      </div>
      {aside && <p>{aside}</p>}
    </div>
  );
}

export function Card({ index, glyph, title, children, foot, to, href, className = '' }: {
  index?: string; glyph?: string; title: ReactNode; children?: ReactNode; foot?: ReactNode; to?: string; href?: string; className?: string;
}) {
  const arrow = to ? <Link className="dl-arrow" to={to} aria-label={typeof title === 'string' ? title : 'Open'}>↗</Link>
    : href ? <a className="dl-arrow" href={href} aria-label={typeof title === 'string' ? title : 'Open'}>↗</a> : null;
  return (
    <article className={`dl-card ${className}`}>
      {(index || glyph) && (
        <div className="dl-card-top">
          <span className="mono">{index}</span>
          {glyph && <span className="dl-card-glyph" aria-hidden="true">{glyph}</span>}
        </div>
      )}
      <h3 className="dl-h3">{title}</h3>
      {children}
      {(foot || arrow) && (
        <div className="dl-card-foot">
          <span>{foot}</span>
          {arrow}
        </div>
      )}
    </article>
  );
}

export function Check({ items, lg }: { items: ReactNode[]; lg?: boolean }) {
  return <ul className={`dl-check ${lg ? 'lg' : ''}`}>{items.map((it, i) => <li key={i}>{it}</li>)}</ul>;
}

export function Btn({ to, href, children, ghost, light, block, onClick, type }: {
  to?: string; href?: string; children: ReactNode; ghost?: boolean; light?: boolean; block?: boolean; onClick?: () => void; type?: 'button' | 'submit';
}) {
  const cls = `dl-btn ${ghost ? 'ghost' : ''} ${light ? 'light' : ''} ${block ? 'block' : ''}`;
  if (to) return <Link className={cls} to={to}>{children}</Link>;
  if (href) return <a className={cls} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{children}</a>;
  return <button className={cls} type={type || 'button'} onClick={onClick}>{children}</button>;
}

export function Stats({ items }: { items: { n: string; label: string; src?: string }[] }) {
  return (
    <section className="dl-stats">
      {items.map((s, i) => (
        <div className="dl-stat" key={i}>
          <b>{s.n}</b>
          <span>{s.label}</span>
          {s.src && <small>{s.src}</small>}
        </div>
      ))}
    </section>
  );
}

export function Process({ steps }: { steps: { label: string; title: string; desc: string }[] }) {
  return (
    <div className="dl-process">
      {steps.map((s, i) => (
        <div key={i}>
          <span className="mono">{s.label}</span>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function CtaBand({ eyebrow = '//05 Start a conversation', title, copy, primary, secondary }: {
  eyebrow?: string; title: ReactNode; copy?: ReactNode; primary?: { to?: string; href?: string; label: ReactNode }; secondary?: { to?: string; href?: string; label: ReactNode };
}) {
  return (
    <section className="dl-cta" id="contact">
      <p className="mono">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="dl-cta-row">
        {copy && <p>{copy}</p>}
        <div className="dl-cta-actions">
          {primary && <Btn to={primary.to} href={primary.href} light>{primary.label} <span aria-hidden="true">↗</span></Btn>}
          {secondary && (secondary.to
            ? <Link className="dl-btn on-dark-ghost" to={secondary.to}>{secondary.label}</Link>
            : <a className="dl-btn on-dark-ghost" href={secondary.href}>{secondary.label}</a>)}
        </div>
      </div>
    </section>
  );
}

export function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div>
      {items.map((f, i) => (
        <details className="dl-details" key={i}>
          <summary>{f.q}</summary>
          <div className="dl-details-body">{f.a}</div>
        </details>
      ))}
    </div>
  );
}

export function Placeholder({ label, style }: { label: string; style?: React.CSSProperties }) {
  return <div className="dl-placeholder" style={style} role="img" aria-label={label}>{label}</div>;
}

/* ---------- Forms ---------- */
export type FieldDef = { name: string; label: string; type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'; required?: boolean; options?: string[]; placeholder?: string; half?: boolean; max?: number };

export function LeadForm({ fields, submitLabel = 'Send', successEyebrow = '// Message received', successTitle, successCopy, endpoint = '' }: {
  fields: FieldDef[]; submitLabel?: string; successEyebrow?: string; successTitle: string; successCopy?: ReactNode; endpoint?: string;
}) {
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (endpoint) {
        await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
      }
    } catch { /* fall through to success; phone fallback is shown */ }
    setBusy(false);
    setDone(true);
  };
  if (done) {
    return (
      <div className="dl-success" role="status">
        <Eyebrow>{successEyebrow}</Eyebrow>
        <h3>{successTitle}</h3>
        <p>{successCopy || <>We reply within one business day. Need us sooner? Call <a href="tel:3175089493">(317) 508-9493</a>.</>}</p>
      </div>
    );
  }
  const render = (f: FieldDef) => {
    const id = `f-${f.name}`;
    const common = { id, name: f.name, required: f.required, placeholder: f.placeholder, value: values[f.name] || '', onChange: (e: any) => setValues(v => ({ ...v, [f.name]: e.target.value })) };
    return (
      <div className="dl-field" key={f.name}>
        <label htmlFor={id}>{f.label}{f.required && <b> *</b>}</label>
        {f.type === 'textarea' ? <textarea {...common} maxLength={f.max || 500} />
          : f.type === 'select' ? <select {...common}><option value="">Select…</option>{f.options?.map(o => <option key={o}>{o}</option>)}</select>
          : <input {...common} type={f.type || 'text'} />}
        {f.type === 'textarea' && <span className="count">{(values[f.name] || '').length} / {f.max || 500}</span>}
      </div>
    );
  };
  // group consecutive half-width fields into rows
  const nodes: ReactNode[] = [];
  let row: FieldDef[] = [];
  const flush = () => { if (row.length) { nodes.push(<div className="row" key={`row-${nodes.length}`}>{row.map(render)}</div>); row = []; } };
  fields.forEach(f => { if (f.half) { row.push(f); if (row.length === 2) flush(); } else { flush(); nodes.push(render(f)); } });
  flush();
  return (
    <form className="dl-form" onSubmit={onSubmit}>
      {nodes}
      <div><Btn type="submit">{busy ? 'Sending…' : submitLabel} <span aria-hidden="true">↗</span></Btn></div>
    </form>
  );
}
