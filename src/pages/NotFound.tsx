import { Link } from 'react-router-dom';
import { DaylightPage } from '@/components/daylight';

export default function NotFound() {
  return (
    <DaylightPage title="Page not found — NevTech AI">
      <section style={{ minHeight: '60vh', display: 'grid', alignContent: 'center', padding: '100px 6%' }}>
        <p className="dl-eyebrow">//404 Not found</p>
        <h1 className="dl-h1" style={{ font: "normal clamp(50px,7vw,110px)/.98 Georgia,'Times New Roman',serif", letterSpacing: -3.5, margin: '18px 0 24px', maxWidth: 900 }}>
          This door<br /><em>doesn’t go anywhere.</em>
        </h1>
        <p className="dl-lede" style={{ maxWidth: 520 }}>The page moved or never existed. Try one of these instead.</p>
        <div className="dl-actions">
          <Link className="dl-btn" to="/">Back home <span aria-hidden="true">↗</span></Link>
          <Link className="dl-link" to="/services">Services <span aria-hidden="true">↗</span></Link>
          <Link className="dl-link" to="/contact">Contact <span aria-hidden="true">↗</span></Link>
          <Link className="dl-link" to="/sitemap">All pages <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </DaylightPage>
  );
}
