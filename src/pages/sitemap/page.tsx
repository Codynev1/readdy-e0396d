import { Link } from 'react-router-dom';
import { DaylightPage, Hero, Section, SectionHead } from '@/components/daylight';
import { order as seoOrder, pages as seoPages } from '@/data/seoPages';
import { order as postOrder, posts } from '@/data/blogPosts';

const groups: { label: string; links: { to: string; label: string }[] }[] = [
  { label: '// Company', links: [
    { to: '/', label: 'Home' }, { to: '/about', label: 'About' }, { to: '/contact', label: 'Contact' }, { to: '/intake-form', label: 'Project intake' }, { to: '/faq', label: 'FAQ' }, { to: '/pricing', label: 'Pricing' }, { to: '/blog', label: 'Blog' },
  ]},
  { label: '// Services', links: [
    { to: '/services', label: 'All services' }, { to: '/fractional-caio', label: 'Fractional CAIO' }, { to: '/ai-projects', label: 'AI projects' }, { to: '/rapid-mvp', label: 'Rapid MVP' }, { to: '/ai-lead-generation', label: 'AI lead generation' }, { to: '/get-leads', label: 'Get leads' }, { to: '/use-cases', label: 'Use cases by industry' },
  ]},
  { label: '// Products', links: [
    { to: '/receptionist', label: 'Nova AI receptionist' }, { to: '/products', label: 'NevTech VMS + Catalyst' }, { to: '/tmobile-business', label: 'T-Mobile for Business' },
  ]},
  { label: '// Legal', links: [
    { to: '/privacy', label: 'Privacy' }, { to: '/terms', label: 'Terms' }, { to: '/compliance', label: 'Security & compliance' }, { to: '/support', label: 'Support' },
  ]},
];

export default function SitemapPage() {
  return (
    <DaylightPage title="Sitemap — NevTech AI">
      <Hero eyebrow="//00 Sitemap" title={<>Every page,<br /><em>one place.</em></>} lede="An index of everything on nevtech.ai." />
      <Section>
        <div className="dl-grid wide">
          {groups.map(g => (
            <div key={g.label}>
              <p className="mono" style={{ marginBottom: 12 }}>{g.label}</p>
              <ul className="dl-check lg" style={{ listStyle: 'none' }}>
                {g.links.map(l => <li key={l.to} style={{ display: 'block' }}><Link className="dl-link" style={{ fontSize: 14 }} to={l.to}>{l.label}</Link></li>)}
              </ul>
            </div>
          ))}
          <div>
            <p className="mono" style={{ marginBottom: 12 }}>// AI in Indiana</p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
              {seoOrder.map((slug: string) => <li key={slug}><Link className="dl-link" style={{ fontSize: 14 }} to={`/${slug}`}>{(seoPages as any)[slug]?.keyword || slug}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="mono" style={{ marginBottom: 12 }}>// Articles</p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 6 }}>
              {postOrder.map((k: string) => <li key={k}><Link className="dl-link" style={{ fontSize: 14 }} to={`/blog/${k}`}>{(posts as any)[k]?.title}</Link></li>)}
            </ul>
          </div>
        </div>
      </Section>
      <Section alt>
        <SectionHead eyebrow="//01 Start here" title={<>Not sure where to begin?</>} aside="Call (317) 508-9493 or send a note. We reply within one business day." />
        <Link className="dl-btn" to="/contact">Contact NevTech <span aria-hidden="true">↗</span></Link>
      </Section>
    </DaylightPage>
  );
}
