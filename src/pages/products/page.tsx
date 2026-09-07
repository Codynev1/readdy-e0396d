import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background-50">
      <Header />
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-to-br from-background-50 via-primary-50/30 to-background-100 pt-32 pb-20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="eyebrow">Our Products</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-950 leading-tight mb-6">
              Products Built for{" "}
              <span className="text-primary-600">Real Business Impact</span>
            </h1>
            <p className="text-lg text-foreground-700 leading-relaxed max-w-2xl mx-auto">
              Two focused products solving two distinct problems. Purpose-built, Indianapolis-based, actually supported.
            </p>
          </div>
        </div>
      </section>

      {/* ===== NEVTECH VMS ===== */}
      <section className="py-24 md:py-32 bg-background-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Product Header */}
          <div className="max-w-3xl mb-16">
            <div className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-3">
              Cloud Video Management System
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground-950 mb-5">
              NevTech VMS
            </h2>
            <p className="text-lg text-foreground-600 leading-relaxed">
              A multi-site cloud video management system with edge recording that survives outages and a per-second coverage timeline — so you always know exactly what was recorded, and what wasn't. Works with the ONVIF/RTSP cameras you already own. White-label, deployed on your own cloud.
            </p>
          </div>

          {/* Product Image */}
          <div className="w-full rounded-2xl overflow-hidden bg-background-100 border border-background-200 mb-16">
            <img
              src="https://static.readdy.ai/image/1bc91b7d55091cd3d488a2b17839859a/36f1197b22379c15c69e9601d8952966.png"
              alt="NevTech VMS — Cloud Video Management System dashboard showing live camera grid view"
              className="w-full h-auto object-cover object-top"
              title="NevTech VMS — Cloud Video Management System"
            />
          </div>

          {/* Why Different */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground-950 mb-8">Why It's Different</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: 'ri-shield-check-line',
                  title: 'Outages are a pause, not a loss',
                  desc: 'Edge gateways record locally and backfill the cloud automatically when the connection returns \u2014 no lost footage, no open inbound ports.'
                },
                {
                  icon: 'ri-time-line',
                  title: 'Per-second coverage state',
                  desc: 'Every camera, every interval, classified as recorded / uploading / unknown / missing \u2014 a confirmed gap is never conflated with an unreachable gateway.'
                },
                {
                  icon: 'ri-database-2-line',
                  title: 'Priced like storage, not per stream',
                  desc: 'Cameras stream live only when someone\'s watching, so uplinks and bills stay lean.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-background-100 rounded-2xl p-7 border border-background-200/70">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-5">
                    <i className={`${item.icon} text-xl text-primary-600 w-6 h-6 flex items-center justify-center`} />
                  </div>
                  <h4 className="text-base font-bold text-foreground-950 mb-2">{item.title}</h4>
                  <p className="text-sm text-foreground-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground-950 mb-8">Key Features</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Sub-second live view (WebRTC) — straight to browser, no plugins',
                'Native-fast playback: scrub any day, any camera, first frame in under a second',
                'License-plate recognition (LPR/ANPR) at the edge — searchable by plate, camera, and time',
                'Clip export with intact timestamps and chain of custody',
                'PTZ control and two-way audio on supported cameras',
                'Per-camera retention, from days to years, tiered hot→cold automatically',
                'Multi-tenant, per-site roles — every customer isolated behind one console',
                'Edge, tunnel, and cellular gateways; even native on-camera (Axis ACAP)',
              ].map((feat, i) => (
                <div key={i} className="bg-background-50 rounded-xl p-5 border border-background-200/60">
                  <i className="ri-check-line text-primary-600 mb-3 block w-5 h-5 flex items-center justify-center" />
                  <p className="text-sm text-foreground-700 leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who It's For */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-foreground-950 mb-8">Who It's For</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Retail & franchise — multi-location loss prevention and operations',
                'Logistics & warehousing — dock-to-door visibility across facilities',
                'Property & facilities — common areas, parking, perimeter monitoring',
                'Parking & transport — LPR/ANPR, ingress/egress, toll automation',
                'Campuses & construction — safety compliance and asset protection',
                'Central-monitoring stations and integrators running it white-label',
              ].map((uc, i) => (
                <div key={i} className="flex items-start gap-3 bg-background-100/50 rounded-xl p-4">
                  <i className="ri-arrow-right-s-line text-accent-600 mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center" />
                  <span className="text-sm text-foreground-700 leading-relaxed">{uc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://nevtechvms.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-500 text-background-50 font-semibold px-7 py-3.5 rounded-lg hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer text-sm"
          >
            Visit NevTech VMS
            <i className="ri-arrow-right-up-line w-4 h-4 flex items-center justify-center" />
          </a>
        </div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div className="h-px bg-background-200/60 max-w-7xl mx-auto px-4 md:px-6" />

      {/* ===== NEVTECH CATALYST ===== */}
      <section className="py-24 md:py-32 bg-background-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Product Header */}
          <div className="max-w-3xl mb-16">
            <div className="text-sm font-semibold text-accent-600 uppercase tracking-wide mb-3">
              AI Implementation Platform + Advisory
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground-950 mb-5">
              NevTech Catalyst
            </h2>
            <p className="text-lg text-foreground-600 leading-relaxed">
              Most companies are spending on AI. Very few can tell you if it's working. Catalyst is the guided platform that scores your AI readiness in 15 minutes, auto-generates a 30/60/90 roadmap, tracks every initiative to a real KPI — and puts an Indianapolis-based advisor one click away when the rollout gets messy.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="bg-accent-100 text-accent-700 text-sm font-semibold px-4 py-2 rounded-full">
                From $49/mo
              </span>
              <span className="text-sm text-foreground-500">14-day trial · No sales call required</span>
            </div>
          </div>

          {/* Product Image */}
          <div className="w-full rounded-2xl overflow-hidden bg-background-100 border border-background-200 mb-16">
            <img
              src="https://static.readdy.ai/image/1bc91b7d55091cd3d488a2b17839859a/5b23815966234e1310375f9f3f672838.png"
              alt="NevTech Catalyst — AI Implementation Platform showing the Discover Plan Implement Measure journey"
              className="w-full h-auto object-cover object-top"
              title="NevTech Catalyst — AI Implementation Platform"
            />
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground-950 mb-8">What You Get</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                '15-minute AI Readiness Score across 8 dimensions, benchmarked against peers',
                'Auto-generated 30/60/90 roadmap — prioritized initiatives sized to your budget, team, and timeline',
                'Implementation tracking with owners, deadlines, change-management checklists, and KPI baselines',
                'OS Workbench — private AI workspace: chat, Skills, Routines, documents, export to PDF/Word/deck',
                'Governance that enforces itself — AI Conformance Statement → 200+ vetted prompts → AI Course Builder',
                'Document AI (RAG) over your company knowledge, plus purpose-built Legal Research AI',
                'Advisory tiers — Strategy Session, 4-week Sprint, Fractional AI Officer, or Done-For-You Build',
                'Compliance-ready — SOC 2 Type II, HIPAA BAA, audit logs, SSO/SCIM at Scale tier',
              ].map((feat, i) => (
                <div key={i} className="bg-background-50 rounded-xl p-5 border border-background-200/60">
                  <i className="ri-check-line text-accent-600 mb-3 block w-5 h-5 flex items-center justify-center" />
                  <p className="text-sm text-foreground-700 leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who It's For */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-foreground-950 mb-8">Who It's For</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Owner-led and 6\u201350 person teams that need a map, not another free trial',
                'Mid-market companies running 3+ AI initiatives without a full-time AI leader',
                'Law firms, dental groups, logistics, manufacturing, and healthcare admin \u2014 50+ industry playbooks',
                'Compliance-sensitive orgs needing SOC 2 Type II, HIPAA BAA, audit logs, and SSO/SCIM',
              ].map((uc, i) => (
                <div key={i} className="flex items-start gap-3 bg-background-100/50 rounded-xl p-4">
                  <i className="ri-arrow-right-s-line text-accent-600 mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center" />
                  <span className="text-sm text-foreground-700 leading-relaxed">{uc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://nevtechai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-500 text-background-50 font-semibold px-7 py-3.5 rounded-lg hover:bg-accent-600 transition-colors whitespace-nowrap cursor-pointer text-sm"
          >
            Try NevTech Catalyst
            <i className="ri-arrow-right-up-line w-4 h-4 flex items-center justify-center" />
          </a>
        </div>
      </section>

      {/* ===== COMPARISON ===== */}
      <section className="py-24 md:py-28 bg-background-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-secondary-100/70 text-secondary-700 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <i className="ri-scales-3-line w-4 h-4 flex items-center justify-center" />
              At a Glance
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">
              Two Products. Two Problem Spaces.
            </h2>
            <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
              Each product is purpose-built for a specific need. No feature bloat, no confusing overlap.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* VMS Card */}
            <div className="bg-background-50 rounded-2xl border border-background-200 p-8 md:p-10">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
                <i className="ri-video-line text-xl text-primary-600 w-6 h-6 flex items-center justify-center" />
              </div>
              <h3 className="text-2xl font-bold text-foreground-950 mb-3">NevTech VMS</h3>
              <p className="text-foreground-600 text-sm leading-relaxed mb-6">
                Cloud video surveillance that survives outages. Multi-site, edge-recorded, white-label — works with the ONVIF/RTSP cameras you already own, deployed on your own cloud.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Edge Recording', 'WebRTC Live View', 'LPR/ANPR', 'Multi-Tenant', 'White-Label', 'ONVIF/RTSP'].map((tag) => (
                  <span key={tag} className="bg-background-100 text-foreground-700 text-xs px-3 py-1.5 rounded-full border border-background-200/50">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://nevtechvms.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors cursor-pointer"
              >
                Learn more
                <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center" />
              </a>
            </div>

            {/* Catalyst Card */}
            <div className="bg-background-50 rounded-2xl border border-background-200 p-8 md:p-10">
              <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-6">
                <i className="ri-sparkling-line text-xl text-accent-600 w-6 h-6 flex items-center justify-center" />
              </div>
              <h3 className="text-2xl font-bold text-foreground-950 mb-3">NevTech Catalyst</h3>
              <p className="text-foreground-600 text-sm leading-relaxed mb-6">
                Guided AI adoption that proves ROI. Score readiness in 15 minutes, get a 30/60/90 roadmap, track every initiative to a real KPI — with an advisor one click away. From $49/mo.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Readiness Score', 'Roadmap', 'KPI Tracking', 'RAG Search', 'Governance', 'Advisory'].map((tag) => (
                  <span key={tag} className="bg-background-100 text-foreground-700 text-xs px-3 py-1.5 rounded-full border border-background-200/50">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://nevtechai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors cursor-pointer"
              >
                Learn more
                <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 md:py-28 bg-primary-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-background-50/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-background-50/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="text-xs font-semibold tracking-widest uppercase text-primary-300 mb-6">
            Not sure which product fits?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 mb-6">
            Let's Figure It Out Together
          </h2>
          <p className="text-lg text-primary-200 mb-12 leading-relaxed max-w-2xl mx-auto">
            Every business is different. Tell us what you're trying to solve and we'll point you to the right product — or build something custom if neither is a perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-background-50 text-foreground-950 font-semibold px-8 py-4 rounded-lg hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer text-lg"
            >
              Talk to Us
              <i className="ri-arrow-right-line ml-2 w-5 h-5 flex items-center justify-center" />
            </Link>
            <a
              href="https://nevtechvms.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-background-200 text-background-50 font-semibold px-8 py-4 rounded-lg hover:bg-background-50/10 transition-colors whitespace-nowrap cursor-pointer text-lg"
            >
              Explore NevTech VMS
              <i className="ri-external-link-line ml-2 w-5 h-5 flex items-center justify-center" />
            </a>
            <a
              href="https://nevtechai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-background-200 text-background-50 font-semibold px-8 py-4 rounded-lg hover:bg-background-50/10 transition-colors whitespace-nowrap cursor-pointer text-lg"
            >
              Try NevTech Catalyst
              <i className="ri-external-link-line ml-2 w-5 h-5 flex items-center justify-center" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;