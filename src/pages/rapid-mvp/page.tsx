import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

const phases = [
  {
    number: '01',
    label: 'Phase 1',
    title: 'Rapid MVP',
    timeline: 'Weeks 1–8',
    icon: 'ri-rocket-line',
    description:
      'We scope your core use case, design the UX, and build a functional application. You\'re involved at every milestone. At the end of 8 weeks, you have a deployable product you can put in front of real customers and investors.',
    bullets: [
      'Week 1–2: Discovery, scoping, architecture decisions',
      'Week 3–4: UX design, user flows, stakeholder approval',
      'Week 5–7: Core feature build, iterative testing',
      'Week 8: Deployment, handoff prep, live demo',
    ],
  },
  {
    number: '02',
    label: 'Phase 2',
    title: 'Seamless Team Transfer',
    timeline: 'Month 2–3',
    icon: 'ri-team-line',
    description:
      'No more "rebuilding with a new vendor." We transition a team of standard production developers who already understand the architecture, the decisions behind it, and where it\'s headed. Zero knowledge loss.',
    bullets: [
      'Dedicated production developers already familiar with your codebase',
      'Full documentation handoff — architecture decisions, tech debt, future roadmap',
      'Team overlap period so nothing falls through the cracks',
      'Zero re-onboarding tax — they were part of the ecosystem from day one',
    ],
  },
  {
    number: '03',
    label: 'Phase 3',
    title: 'Production Build & Scale',
    timeline: 'Month 3+',
    icon: 'ri-cloud-line',
    description:
      'Your transferred team migrates the MVP to your chosen cloud infrastructure (AWS, Azure, GCP, etc.), hardens it for production, and begins building the full-featured product. Ongoing support, maintenance, and iteration — all handled.',
    bullets: [
      'Cloud migration to AWS, Azure, GCP, or your platform of choice',
      'Security hardening, load testing, compliance readiness',
      'Predictable monthly retainer — no surprise invoices',
      'Feature backlog prioritization and sprint-based iteration',
    ],
  },
];

const benefits = [
  {
    icon: 'ri-time-line',
    title: 'Speed to Market',
    description:
      '8 weeks from kickoff to working product. Your competitors are still in "discovery phase."',
  },
  {
    icon: 'ri-money-dollar-circle-line',
    title: 'Capital Efficiency',
    description:
      'Under $10K gets you a real application, not a prototype or wireframe. Preserve your capital for growth, not guesswork.',
  },
  {
    icon: 'ri-flask-line',
    title: 'Validated Before You Scale',
    description:
      'Put software in front of users before committing six figures. Kill bad assumptions early.',
  },
  {
    icon: 'ri-cloud-line',
    title: 'No Vendor Lock-In',
    description:
      'Cloud-agnostic architecture. Deploy to AWS, Azure, GCP — wherever your business needs to live.',
  },
  {
    icon: 'ri-links-line',
    title: 'Continuity, Not Handoffs',
    description:
      'The dev team that scales your product understands it from day one. No re-onboarding, no lost context, no delays.',
  },
  {
    icon: 'ri-presentation-line',
    title: 'Investor-Ready',
    description:
      'Walk into your next funding conversation with a live product and real user feedback, not a slide deck and a promise.',
  },
];

const useCases = [
  {
    industry: 'Healthcare Startup',
    icon: 'ri-heart-pulse-line',
    need: '"We need a telehealth scheduling tool."',
    oldWay:
      '14-month agency engagement. $180K spent before a single patient logged in.',
    nevtechWay:
      'Working booking and video visit MVP in 8 weeks. Validated with 200 patients. Production team took over month 3.',
    oldDuration: '14 months / $180K',
    newDuration: '8 weeks / &lt;$10K',
  },
  {
    industry: 'Restaurant Tech Founder',
    icon: 'ri-restaurant-line',
    need: '"We need a kitchen display and order management system."',
    oldWay:
      'Hired two freelancers, 9 months of scope creep, product never launched.',
    nevtechWay:
      'Core order flow and KDS built in 8 weeks. Live in 3 locations by month 4.',
    oldDuration: '9 months / Never launched',
    newDuration: '8 weeks / Live in 3 locations',
  },
  {
    industry: 'B2B SaaS Founder',
    icon: 'ri-bar-chart-box-line',
    need: '"We need a client portal with reporting."',
    oldWay:
      '$120K agency quote, 6-month timeline, then another $40K for changes.',
    nevtechWay:
      'Portal MVP live in 8 weeks. First paying customer in month 3. Production team scaling features on a predictable monthly retainer.',
    oldDuration: '6+ months / $160K+',
    newDuration: '8 weeks / First customer by month 3',
  },
];

const faqs = [
  {
    q: 'Can you really build something meaningful in 8 weeks?',
    a: "Yes — because we're not building everything. We're building the one thing that proves your product works. That discipline is what separates MVPs that get traction from projects that die in development.",
  },
  {
    q: 'What happens after the 8 weeks?',
    a: "You own the code. We transfer a production dev team that already knows your application inside and out. They handle cloud migration, hardening, feature development, and ongoing support.",
  },
  {
    q: "What if my idea doesn't work?",
    a: "Then you found out for under $10K instead of $200K. That's not a failure — that's the smartest investment you could have made.",
  },
  {
    q: 'Will this be production-quality code?',
    a: "The MVP is built to be extensible, not throwaway. The architecture is designed so the production team can build on it, not rewrite it.",
  },
  {
    q: 'What types of products can you build?',
    a: "Web apps, internal tools, client portals, scheduling systems, dashboards, marketplace MVPs, SaaS products — if it lives in a browser or mobile web view, we can scope it. We scope every engagement to confirm fit before you commit.",
  },
  {
    q: 'Do I need to be technical?',
    a: "Not at all. We handle the full technical side. You own the vision and the decisions. We translate everything into plain language at every milestone.",
  },
];

export default function RapidMVPPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <div className="min-h-screen bg-background-50">
      <Header />
      <main>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-background-50 via-primary-50/30 to-background-100 pt-24 pb-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl mx-auto text-center">
              <span className="eyebrow">
                Rapid MVP Program
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-950 leading-tight mb-6">
                Launch Your MVP in<br />
                <span className="text-primary-600">8 Weeks for Under $10K</span>
              </h1>
              <p className="text-lg text-foreground-700 mb-5 max-w-2xl mx-auto leading-relaxed font-medium">
                Stop burning $150K and 18 months on software that might not work.
              </p>
              <p className="text-base text-foreground-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                You have the idea. You've validated the problem. Now you need software in the hands of real users — not a proposal deck and a six-figure invoice. Our 8-Week Rapid MVP program delivers a working, deployable application for under $10,000. Once validated, we transfer a dedicated team of production developers who migrate your app to AWS, Azure, or your cloud of choice and begin the long-term build.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://cal.com/nevtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg py-4 px-8"
                >
                  Book Your MVP Strategy Call
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
                <a
                  href="#how-it-works"
                  className="btn-outline text-lg py-4 px-8"
                >
                  See How It Works
                </a>
              </div>
              {/* Stats row */}
              <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-background-200 pt-12">
                {[
                  { stat: '8 wks', label: 'To working product' },
                  { stat: '$10K', label: 'Maximum investment' },
                  { stat: '0', label: 'Knowledge loss on handoff' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-foreground-950 mb-1">{item.stat}</div>
                    <div className="text-xs text-foreground-600 tracking-wide">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── THE OLD WAY vs THE NEVTECH WAY ──────────────────────────────── */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="eyebrow">The Comparison</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 mb-4">
                  The Old Way vs. The NevTech Way
                </h2>
                <p className="text-foreground-600 max-w-xl mx-auto text-sm leading-relaxed">
                  Traditional software development is broken for founders and early-stage products. Here's what we fixed.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Old Way */}
                <div className="bg-background-100 border border-background-200 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 flex items-center justify-center bg-background-200 rounded-lg">
                      <i className="ri-close-circle-line text-foreground-500 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground-950 text-lg">The Old Way</h3>
                      <p className="text-foreground-500 text-xs">Traditional dev agency or freelancer</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    {[
                      'Hire a dev agency — $80K–$250K just to get started',
                      '6–18 months before you see a working product',
                      'Requirements bloat — you\'re building features nobody asked for',
                      'By the time you launch, the market has moved on',
                      'If the idea doesn\'t land, you\'ve burned your runway',
                      'Finding a new team to maintain it means starting over',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <i className="ri-close-line text-foreground-400 text-sm"></i>
                        </div>
                        <span className="text-foreground-700 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 bg-background-50 border border-background-200 rounded-xl p-4 text-center">
                    <p className="text-xs text-foreground-500 mb-1">Average total cost before launch</p>
                    <p className="text-2xl font-bold text-foreground-500 line-through">$80K–$250K+</p>
                  </div>
                </div>

                {/* NevTech Way */}
                <div className="bg-primary-700 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 flex items-center justify-center bg-background-50 rounded-lg">
                      <i className="ri-check-double-line text-primary-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-background-50 text-lg">The NevTech Way</h3>
                      <p className="text-primary-200 text-xs">8-Week Rapid MVP Program</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    {[
                      'Working MVP delivered in 8 weeks, under $10K',
                      'Lean, validated feature set — only what matters to prove the concept',
                      'Real users testing real software, not a pitch deck',
                      'Built-in transition path — same ecosystem of developers who understand your codebase take over for production',
                      'Cloud-agnostic deployment to AWS, Azure, or your platform of choice',
                      'You keep momentum instead of starting from scratch at every phase',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <i className="ri-check-line text-background-50 text-sm"></i>
                        </div>
                        <span className="text-primary-100 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 bg-background-50/10 border border-background-50/20 rounded-xl p-4 text-center">
                    <p className="text-xs text-primary-200 mb-1">Total cost to working, deployable product</p>
                    <p className="text-2xl font-bold text-background-50">Under $10,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS — 3-PHASE ──────────────────────────────────────── */}
        <section id="how-it-works" className="py-20 md:py-28 bg-background-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="eyebrow">The Process</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 mb-4">How It Works</h2>
                <p className="text-foreground-600 max-w-xl mx-auto text-sm leading-relaxed">
                  Three phases. One continuous team. No gaps, no reboots, no wasted momentum.
                </p>
              </div>

              {/* Phase selector */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
                {phases.map((phase, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhase(i)}
                    className={`px-6 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      activePhase === i
                        ? 'bg-primary-500 text-background-50'
                        : 'bg-background-50 border border-background-200 text-foreground-600 hover:border-primary-300 hover:text-primary-600'
                    }`}
                  >
                    {phase.label}: {phase.title}
                  </button>
                ))}
              </div>

              {/* Active phase detail */}
              <div className="bg-background-50 border border-background-200 rounded-2xl overflow-hidden">
                <div className="bg-primary-600 text-background-50 px-8 py-7 flex items-center gap-5">
                  <div className="w-14 h-14 border-2 border-background-50/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold">{phases[activePhase].number}</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-primary-200 mb-0.5">
                      {phases[activePhase].label} · {phases[activePhase].timeline}
                    </p>
                    <h3 className="text-2xl font-bold">{phases[activePhase].title}</h3>
                  </div>
                  <div className="ml-auto w-12 h-12 flex items-center justify-center bg-background-50/10 rounded-xl">
                    <i className={`${phases[activePhase].icon} text-background-50 text-xl`}></i>
                  </div>
                </div>
                <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-foreground-500 mb-4">Overview</h4>
                    <p className="text-foreground-700 leading-relaxed text-sm">{phases[activePhase].description}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-foreground-500 mb-4">What Happens</h4>
                    <div className="space-y-4">
                      {phases[activePhase].bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-background-50 text-xs font-bold">{i + 1}</span>
                          </div>
                          <p className="text-foreground-700 text-sm leading-relaxed">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase timeline strip */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {phases.map((phase, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhase(i)}
                    className={`rounded-xl p-5 border-2 text-left cursor-pointer transition-all ${
                      activePhase === i
                        ? 'border-primary-500 bg-primary-500 text-background-50'
                        : 'border-background-200 bg-background-50 hover:border-primary-300'
                    }`}
                  >
                    <p className={`text-xs font-bold tracking-widest uppercase mb-2 ${activePhase === i ? 'text-primary-200' : 'text-foreground-500'}`}>
                      {phase.timeline}
                    </p>
                    <p className={`font-bold text-sm ${activePhase === i ? 'text-background-50' : 'text-foreground-950'}`}>{phase.title}</p>
                    <p className={`text-xs mt-1 leading-relaxed ${activePhase === i ? 'text-primary-100' : 'text-foreground-600'}`}>
                      {i === 0 && 'Scope, design, build & deploy'}
                      {i === 1 && 'Same team, zero knowledge loss'}
                      {i === 2 && 'Cloud migration & full-scale build'}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="eyebrow">Why It Works</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 mb-4">Built for Founders Who Move Fast</h2>
                <p className="text-foreground-600 max-w-xl mx-auto text-sm leading-relaxed">
                  Every piece of this program is designed to eliminate the risk, cost, and friction of building software at the early stage.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-background-100 border border-background-200 rounded-2xl p-7 hover:border-primary-200 transition-all duration-200"
                  >
                    <div className="w-11 h-11 bg-primary-100 rounded-xl flex items-center justify-center mb-5">
                      <i className={`${item.icon} text-primary-600 text-lg`}></i>
                    </div>
                    <h3 className="font-bold text-foreground-950 text-base mb-3">{item.title}</h3>
                    <p className="text-foreground-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MID CTA BANNER ──────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-primary-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 mb-6 leading-tight">
                Every week you wait is a week your competitor ships.
              </h2>
              <p className="text-primary-200 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
                8 weeks. Under $10K. A production-ready product in the hands of real users. Let's talk scope.
              </p>
              <a
                href="https://cal.com/nevtech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-background-50 text-foreground-950 font-semibold px-10 py-4 rounded-lg hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer text-base"
              >
                Book Your MVP Strategy Call
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF / USE CASES ────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-background-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="eyebrow">Real Outcomes</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 mb-4">What Founders Are Building</h2>
                <p className="text-foreground-600 max-w-xl mx-auto text-sm leading-relaxed">
                  Use cases across industries — same result every time: real software, real users, real momentum.
                </p>
              </div>
              <div className="space-y-6">
                {useCases.map((item, i) => (
                  <div key={i} className="bg-background-50 border border-background-200 rounded-2xl overflow-hidden">
                    <div className="px-8 py-6 border-b border-background-200 flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className={`${item.icon} text-primary-600 text-lg`}></i>
                      </div>
                      <div>
                        <p className="font-bold text-foreground-950">{item.industry}</p>
                        <p className="text-foreground-600 text-sm italic">{item.need}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-background-200">
                      <div className="px-8 py-6">
                        <div className="flex items-center gap-2 mb-3">
                          <i className="ri-close-circle-line text-foreground-400 text-sm"></i>
                          <p className="text-xs font-bold tracking-widest uppercase text-foreground-500">The Old Way</p>
                        </div>
                        <p className="text-foreground-700 text-sm leading-relaxed mb-4">{item.oldWay}</p>
                        <span className="inline-block bg-background-100 text-foreground-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                          {item.oldDuration}
                        </span>
                      </div>
                      <div className="px-8 py-6">
                        <div className="flex items-center gap-2 mb-3">
                          <i className="ri-check-double-line text-primary-600 text-sm"></i>
                          <p className="text-xs font-bold tracking-widest uppercase text-primary-700">The NevTech Way</p>
                        </div>
                        <p className="text-foreground-700 text-sm leading-relaxed mb-4">{item.nevtechWay}</p>
                        <span className="inline-block bg-primary-500 text-background-50 text-xs font-semibold px-3 py-1.5 rounded-full" dangerouslySetInnerHTML={{ __html: item.newDuration }}></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ / OBJECTION HANDLING ────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <div className="eyebrow">FAQ</div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">We've Heard Every Objection</h2>
                <p className="text-foreground-600 text-sm max-w-md mx-auto leading-relaxed">
                  Here are the honest answers to the questions every smart founder asks before signing off.
                </p>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-background-100 border border-background-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-background-50 transition-colors"
                    >
                      <span className="font-semibold text-foreground-950 text-sm pr-4">{faq.q}</span>
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <i className={`ri-${openFaq === i ? 'subtract' : 'add'}-line text-primary-600`}></i>
                      </div>
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 border-t border-background-200">
                        <p className="text-foreground-700 text-sm leading-relaxed pt-4">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CLOSING CTA ─────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-primary-700 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-background-50/10 border border-background-50/20 text-background-50 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
                Let's Build It
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 mb-6 leading-tight">
                Your Idea Deserves More<br />Than a Waiting List
              </h2>
              <p className="text-primary-200 text-base leading-relaxed mb-4 max-w-2xl mx-auto">
                Every week you spend planning is a week your competitor is shipping. Stop stalling. Stop overpaying. Get software in front of real users in 8 weeks — for under $10K.
              </p>
              <p className="text-primary-300 text-sm mb-12 max-w-xl mx-auto">
                One call. We scope it together. If we're a fit, we kick off within days — not months.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href="https://cal.com/nevtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-background-50 text-foreground-950 font-semibold px-10 py-4 rounded-lg hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer text-base"
                >
                  Book Your MVP Strategy Call
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border-2 border-background-200 text-background-50 font-semibold px-10 py-4 rounded-lg hover:bg-background-50/10 transition-colors whitespace-nowrap cursor-pointer text-base"
                >
                  Send Us a Message
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-10 border-t border-background-50/10">
                {[
                  { icon: 'ri-calendar-check-line', text: 'Free 30-minute strategy call' },
                  { icon: 'ri-shield-check-line', text: 'No commitment required' },
                  { icon: 'ri-time-line', text: 'Response within 1 business day' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className={`${item.icon} text-primary-300 text-sm`}></i>
                    </div>
                    <span className="text-primary-200 text-xs">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}