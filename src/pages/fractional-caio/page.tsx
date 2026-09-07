import { useState } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

const deliverables = [
  {
    icon: 'ri-compass-3-line',
    title: 'AI Readiness Assessment',
    description: 'Deep-dive audit of your current tools, workflows, and team capabilities to identify where AI creates the most leverage.'
  },
  {
    icon: 'ri-map-2-line',
    title: 'AI Roadmap & Strategy',
    description: 'A prioritized 90-day and 12-month plan with clear milestones, tool recommendations, and ROI projections.'
  },
  {
    icon: 'ri-tools-line',
    title: 'Tool Selection & Vetting',
    description: 'We evaluate, test, and recommend the right AI tools for your stack — so you never waste budget on the wrong software.'
  },
  {
    icon: 'ri-shield-check-line',
    title: 'AI Policy & Governance',
    description: 'Establish usage policies, data handling rules, and ethical guidelines so your team adopts AI safely and confidently.'
  },
  {
    icon: 'ri-team-line',
    title: 'Team Enablement & Training',
    description: 'Hands-on workshops and playbooks that get your team actually using AI — not just aware of it.'
  },
  {
    icon: 'ri-settings-4-line',
    title: 'Implementation Oversight',
    description: 'We manage vendors, integrations, and rollouts so nothing falls through the cracks during deployment.'
  },
  {
    icon: 'ri-bar-chart-2-line',
    title: 'KPI Tracking & Reporting',
    description: 'Monthly reporting on adoption rates, time saved, cost reduction, and business impact metrics.'
  },
  {
    icon: 'ri-refresh-line',
    title: 'Ongoing Advisory',
    description: 'Regular strategy sessions to adapt your AI approach as the landscape evolves and your business grows.'
  }
];

const whoItsFor = [
  {
    icon: 'ri-building-2-line',
    title: 'SMBs Ready to Scale',
    description: 'You know AI can help but don\'t have the internal expertise to lead the charge.'
  },
  {
    icon: 'ri-rocket-line',
    title: 'Growing Startups',
    description: 'You need strategic AI leadership without the $250K+ salary of a full-time Chief AI Officer.'
  },
  {
    icon: 'ri-store-2-line',
    title: 'Established Businesses',
    description: 'You\'re falling behind competitors who are automating faster and need to catch up quickly.'
  },
  {
    icon: 'ri-user-settings-line',
    title: 'Founders & Operators',
    description: 'You\'re overwhelmed by AI options and need a trusted advisor to cut through the noise.'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We start with a 30-minute call to understand your business, goals, and current AI maturity level.'
  },
  {
    step: '02',
    title: 'AI Audit',
    description: 'A structured assessment of your workflows, tools, team, and competitive landscape to find the highest-impact opportunities.'
  },
  {
    step: '03',
    title: 'Strategy Delivery',
    description: 'You receive a clear, prioritized AI roadmap with specific tools, timelines, and expected outcomes.'
  },
  {
    step: '04',
    title: 'Ongoing Execution',
    description: 'We guide implementation, train your team, track results, and continuously refine your AI strategy month over month.'
  }
];

const faqs = [
  {
    q: 'What exactly is a Fractional CAIO?',
    a: 'A Fractional Chief AI Officer is a senior AI strategist who works with your business on a part-time retainer basis. You get the expertise of a C-suite AI leader — without the full-time salary, benefits, and overhead.'
  },
  {
    q: 'How is this different from hiring an AI consultant?',
    a: 'Consultants typically deliver a report and leave. A Fractional CAIO stays embedded in your business, drives ongoing implementation, holds your team accountable, and adapts strategy as things evolve.'
  },
  {
    q: 'Do I need to be technical to work with you?',
    a: 'Not at all. We translate complex AI concepts into plain business language and handle the technical heavy lifting so you can focus on running your business.'
  },
  {
    q: 'How long does an engagement typically last?',
    a: 'Most clients engage for 6–12 months to see meaningful transformation. We offer month-to-month retainers with no long-term lock-in after the first 90 days.'
  },
  {
    q: 'What industries do you work with?',
    a: 'We work across industries including healthcare, real estate, professional services, retail, logistics, and more. AI strategy principles apply broadly — we tailor the approach to your specific context.'
  }
];

const pillarDetails = [
  {
    roman: 'I',
    title: 'Pillar I — Workflow Understanding',
    principle: 'Before any AI tool is deployed, the CAIO must achieve deep fluency in how work actually gets done — not how it\'s documented on paper, but how people do it on the ground.',
    practices: [
      'Shadow key roles across every department for at least one full work cycle',
      'Document current-state workflows with swim lane maps or process diagrams',
      'Identify pain points, bottlenecks, and high-volume repetitive tasks',
      'Separate tasks that are automatable from those that require human judgment',
      'Prioritize workflows by impact (time saved × frequency × value per hour)'
    ]
  },
  {
    roman: 'II',
    title: 'Pillar II — Security & Change Management',
    principle: 'AI adoption fails when people don\'t trust it. The CAIO must build a governance foundation that protects data, earns employee confidence, and manages the human side of change systematically.',
    practices: [
      'Establish data handling policies and AI usage guidelines before any tool goes live',
      'Conduct risk assessments for each AI integration point in your workflows',
      'Create a structured change management plan with clear communication at every stage',
      'Identify and address resistance early through transparent stakeholder engagement',
      'Build audit trails and compliance checkpoints to satisfy regulatory requirements'
    ]
  },
  {
    roman: 'III',
    title: 'Pillar III — Adoption & Championing',
    principle: 'Technology without adoption is just expensive shelf-ware. The CAIO drives a culture shift by identifying internal champions, delivering hands-on training, and celebrating early wins that build momentum.',
    practices: [
      'Identify and empower internal AI champions at every level of the organization',
      'Design role-specific training programs — not one-size-fits-all workshops',
      'Sequence quick wins strategically to build confidence and visible proof of value',
      'Create feedback loops so employees can flag friction and improve tools over time',
      'Measure adoption rates monthly and adjust enablement strategy based on data'
    ]
  },
  {
    roman: 'IV',
    title: 'Pillar IV — Efficiency Roadmap',
    principle: 'Sustainable AI transformation is built on a sequenced roadmap — starting with high-impact, low-complexity wins, then scaling to advanced workflows that compound value over time.',
    practices: [
      'Map all opportunities by effort vs. impact to identify the highest-leverage starting points',
      'Build a 90-day quick-win plan followed by a 12-month scaling roadmap',
      'Establish KPIs for each initiative so ROI is measurable from day one',
      'Layer automation complexity gradually — simple tasks first, then multi-step workflows',
      'Review and reprioritize the roadmap quarterly as the AI landscape and business needs evolve'
    ]
  }
];

const fourPillars = [
  {
    roman: 'I',
    title: 'Workflow Understanding',
    description: 'Map every process before automating. Know the human workflow first — AI should enhance, not replace, what works.',
    icon: 'ri-flow-chart'
  },
  {
    roman: 'II',
    title: 'Security & Change Mgmt',
    description: 'Build trust through governance, data policies, and structured change management that brings people along.',
    icon: 'ri-shield-keyhole-line'
  },
  {
    roman: 'III',
    title: 'Adoption & Championing',
    description: 'Drive culture shift through training, quick wins, and identifying internal AI champions at every level.',
    icon: 'ri-group-line'
  },
  {
    roman: 'IV',
    title: 'Efficiency Roadmap',
    description: 'Start with low-hanging fruit, build momentum, then scale to advanced AI workflows that compound over time.',
    icon: 'ri-road-map-line'
  }
];

export default function FractionalCAIOPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activePillar, setActivePillar] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const body = new URLSearchParams();
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));
      await fetch('https://readdy.ai/api/form/d8jd4vrfkflngh85d0rg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      });
      setSubmitted(true);
    } catch {
      // silent
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-50">
      <Header />
      <main>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-background-50 via-primary-50/30 to-background-100 pt-28 pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl mx-auto text-center">
              <div className="eyebrow mb-6">
                Fractional CAIO / AI Lead
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-950 leading-tight mb-6">
                Your AI Strategy Leader.<br />
                <span className="text-primary-600">Without the Full-Time Cost.</span>
              </h1>
              <p className="text-lg text-foreground-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                A retainer-based Chief AI Officer who guides adoption, selects the right tools, sets governance policies, and drives implementation — embedded in your business, not just advising from the sidelines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#inquiry"
                  className="btn-primary text-lg py-4 px-8"
                >
                  Start the Conversation
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
                <a
                  href="#retainer-tiers"
                  className="btn-outline text-lg py-4 px-8"
                >
                  View Retainer Plans
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem / Value Prop */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-6 leading-tight">
                    AI is moving fast.<br />Most businesses are falling behind.
                  </h2>
                  <p className="text-foreground-700 mb-6 leading-relaxed">
                    Every week there are new tools, new capabilities, and new ways competitors are automating what you're still doing manually. But hiring a full-time Chief AI Officer costs $200K–$350K per year — and most SMBs don't need that.
                  </p>
                  <p className="text-foreground-700 mb-8 leading-relaxed">
                    A <strong className="text-foreground-950">Fractional CAIO</strong> gives you senior-level AI leadership on a flexible retainer. You get the strategy, the execution oversight, and the accountability — at a fraction of the cost.
                  </p>
                  <div className="space-y-4">
                    {[
                      'No $250K+ full-time salary required',
                      'Start in days, not months of hiring',
                      'Flexible hours scaled to your needs',
                      'Cancel anytime after 90 days'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-check-line text-primary-600 font-bold"></i>
                        </div>
                        <span className="text-foreground-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20business%20strategy%20meeting%20with%20modern%20minimalist%20office%20setting%20clean%20white%20desk%20with%20laptop%20and%20documents%20executive%20consulting%20session%20warm%20neutral%20tones%20sophisticated%20atmosphere%20no%20text%20no%20people&width=600&height=500&seq=caio-value-02&orientation=portrait"
                    alt="AI strategy consulting session with professional workspace"
                    className="w-full h-96 object-cover object-top rounded-xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-primary-600 text-background-50 p-5 rounded-xl">
                    <div className="text-3xl font-bold">10x</div>
                    <div className="text-primary-200 text-sm mt-1">ROI on AI investment<br />for our clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-20 md:py-28 bg-background-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">Who This Is For</h2>
              <p className="text-foreground-700 max-w-2xl mx-auto">
                If any of these sound like you, a Fractional CAIO is exactly what your business needs right now.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {whoItsFor.map((item, i) => (
                <div key={i} className="bg-background-50 rounded-xl p-6 border border-background-200 text-center hover:border-primary-200 transition-colors duration-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className={`${item.icon} text-primary-600 text-xl`}></i>
                  </div>
                  <h3 className="font-bold text-foreground-950 mb-2">{item.title}</h3>
                  <p className="text-foreground-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Four-Pillar Model */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <div className="eyebrow mb-5">
                  The Framework
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">The Four-Pillar Model</h2>
                <p className="text-foreground-700 max-w-3xl mx-auto leading-relaxed">
                  Effective AI leadership requires equal investment in four foundational areas. No pillar can be skipped — rushing to automation without understanding workflows leads to automating bad processes; ignoring adoption leads to tools that sit unused.
                </p>
              </div>

              {/* Pillar Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {fourPillars.map((pillar, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePillar(i)}
                    className={`rounded-xl p-6 border-2 flex flex-col text-left transition-all duration-200 cursor-pointer w-full ${
                      activePillar === i
                        ? 'bg-primary-600 border-primary-600'
                        : 'bg-background-50 border-background-200 hover:border-primary-300'
                    }`}
                  >
                    <div className={`text-xs font-bold tracking-widest uppercase mb-4 ${activePillar === i ? 'text-primary-200' : 'text-foreground-400'}`}>
                      Pillar {pillar.roman}
                    </div>
                    <div className={`w-10 h-10 flex items-center justify-center rounded-lg mb-4 ${activePillar === i ? 'bg-background-50/20' : 'bg-primary-100'}`}>
                      <i className={`${pillar.icon} text-xl ${activePillar === i ? 'text-background-50' : 'text-primary-600'}`}></i>
                    </div>
                    <h3 className={`font-bold text-base mb-3 ${activePillar === i ? 'text-background-50' : 'text-foreground-950'}`}>{pillar.title}</h3>
                    <p className={`text-sm leading-relaxed flex-1 ${activePillar === i ? 'text-primary-200' : 'text-foreground-600'}`}>{pillar.description}</p>
                    <div className={`mt-4 text-xs font-semibold flex items-center gap-1 ${activePillar === i ? 'text-background-50' : 'text-foreground-400'}`}>
                      {activePillar === i ? (
                        <>
                          <i className="ri-eye-line"></i>
                          <span>Viewing details</span>
                        </>
                      ) : (
                        <>
                          <i className="ri-arrow-down-line"></i>
                          <span>Click to explore</span>
                        </>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Dynamic Deep Dive Panel */}
              <div className="bg-background-100 border border-background-200 rounded-2xl overflow-hidden">
                <div className="bg-primary-600 text-background-50 px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border-2 border-background-50/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">{pillarDetails[activePillar].roman}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-primary-200 mb-0.5">Deep Dive</p>
                      <h3 className="text-xl font-bold">{pillarDetails[activePillar].title}</h3>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:ml-auto">
                    {pillarDetails.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActivePillar(i)}
                        className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                          activePillar === i
                            ? 'bg-background-50 text-foreground-950 border-background-50'
                            : 'border-background-50/30 text-background-50/60 hover:border-background-50 hover:text-background-50'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="text-xs font-bold tracking-widest uppercase text-foreground-400 mb-3">Core Principle</h4>
                    <p className="text-foreground-700 leading-relaxed text-sm">
                      {pillarDetails[activePillar].principle}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-foreground-400 mb-5">What This Looks Like in Practice</h4>
                    <div className="space-y-4">
                      {pillarDetails[activePillar].practices.map((practice, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-background-50 text-xs font-bold">{i + 1}</span>
                          </div>
                          <p className="text-foreground-700 text-sm leading-relaxed">{practice}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Why This Model Works */}
        <section className="py-20 md:py-28 bg-primary-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="text-xs font-semibold tracking-widest uppercase text-primary-300 mb-5">
                  The Result
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-background-50 mb-4">Why This Model Works</h2>
                <p className="text-primary-200 max-w-2xl mx-auto leading-relaxed">
                  Most AI initiatives fail not because the technology is wrong — but because the foundation is missing. The Four-Pillar Model closes every gap before it becomes a costly mistake.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: 'ri-focus-3-line',
                    stat: '73%',
                    label: 'of AI projects fail',
                    detail: 'due to poor workflow understanding and change management — the exact gaps Pillars I & II address.'
                  },
                  {
                    icon: 'ri-user-heart-line',
                    stat: '3×',
                    label: 'faster adoption',
                    detail: 'when internal champions are identified and trained early — the core outcome of Pillar III.'
                  },
                  {
                    icon: 'ri-rocket-2-line',
                    stat: '6–8 wks',
                    label: 'to positive ROI',
                    detail: 'when quick wins are sequenced correctly from a prioritized efficiency roadmap — Pillar IV in action.'
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-background-50/10 border border-background-50/10 rounded-xl p-7 text-center hover:bg-background-50/15 transition-colors duration-200">
                    <div className="w-12 h-12 flex items-center justify-center bg-background-50/10 rounded-full mx-auto mb-4">
                      <i className={`${item.icon} text-background-50 text-xl`}></i>
                    </div>
                    <div className="text-4xl font-bold text-background-50 mb-1">{item.stat}</div>
                    <div className="text-sm font-semibold text-primary-200 mb-3">{item.label}</div>
                    <p className="text-primary-200/80 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="bg-background-50/10 border border-background-50/10 rounded-2xl p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-bold text-background-50 mb-4">The Compounding Advantage</h3>
                    <p className="text-primary-200 text-sm leading-relaxed mb-5">
                      Each pillar builds on the last. Workflow understanding feeds better automation decisions. Strong governance accelerates adoption. Champions drive the roadmap forward. The result isn't a one-time win — it's a self-reinforcing system that compounds value month over month.
                    </p>
                    <div className="space-y-3">
                      {[
                        'No wasted spend on tools your team won\'t use',
                        'No automating broken processes at scale',
                        'No AI rollouts that stall at 20% adoption',
                        'No strategy that sits in a deck and collects dust'
                      ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i className="ri-check-line text-background-50 text-sm"></i>
                          </div>
                          <span className="text-primary-200 text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { pillar: 'I', label: 'Workflow Understanding', outcome: 'Automate the right things' },
                      { pillar: 'II', label: 'Security & Change Mgmt', outcome: 'Build trust at every level' },
                      { pillar: 'III', label: 'Adoption & Championing', outcome: 'Tools actually get used' },
                      { pillar: 'IV', label: 'Efficiency Roadmap', outcome: 'Gains compound over time' }
                    ].map((row, i) => (
                      <div key={i} className="flex items-center gap-4 bg-background-50/10 rounded-lg px-5 py-4">
                        <div className="w-9 h-9 border border-background-50/30 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-background-50 text-xs font-bold">{row.pillar}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-background-50 text-sm font-semibold truncate">{row.label}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <i className="ri-arrow-right-line text-primary-300 text-sm"></i>
                          <span className="text-primary-200 text-xs whitespace-nowrap">{row.outcome}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 md:py-28 bg-background-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">What You Get</h2>
              <p className="text-foreground-700 max-w-2xl mx-auto">
                Every engagement is tailored, but here's what your Fractional CAIO delivers across the retainer.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverables.map((item, i) => (
                <div key={i} className="group bg-background-50 border border-background-200 rounded-xl p-6 hover:border-primary-200 transition-all duration-200">
                  <div className="w-10 h-10 flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-primary-600 text-2xl`}></i>
                  </div>
                  <h3 className="font-bold text-foreground-950 mb-2 text-sm">{item.title}</h3>
                  <p className="text-foreground-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28 bg-primary-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-background-50 mb-4">How It Works</h2>
              <p className="text-primary-200 max-w-2xl mx-auto">
                From first call to full AI transformation — here's the journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {processSteps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 border-2 border-background-50/30 rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="text-xl font-bold text-background-50">{step.step}</span>
                  </div>
                  <h3 className="font-bold text-background-50 mb-3">{step.title}</h3>
                  <p className="text-primary-200 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Retainer Tiers */}
        <section id="retainer-tiers" className="py-20 md:py-28 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="eyebrow mb-6">
                Retainer Plans
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-5">Pricing Tailored to Your Business</h2>
              <p className="text-foreground-600 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
                Every engagement is scoped to your specific needs, team size, and goals. We don't believe in one-size-fits-all pricing — book a free discovery call and we'll put together the right plan for you.
              </p>
              <div className="bg-background-100 border-2 border-background-200 rounded-2xl p-12 flex flex-col items-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-phone-line text-background-50 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-foreground-950 mb-3">Call for Pricing</h3>
                <p className="text-foreground-600 text-sm leading-relaxed mb-8 max-w-md">
                  Retainer plans start at $1,800/month. Exact pricing depends on your scope, hours, and engagement level. Let's talk — no pressure, no commitment.
                </p>
                <a
                  href="#inquiry"
                  className="btn-primary text-lg py-4 px-10"
                >
                  Book a Free Discovery Call
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
                <p className="text-foreground-400 text-xs mt-4">Response within 1 business day.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-20 md:py-28 bg-background-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">ROI: What This Actually Looks Like in Dollars</h2>
                <p className="text-foreground-700 max-w-3xl mx-auto">
                  These are conservative figures based on what other Indiana manufacturers and logistics firms are seeing right now — no hype, just proven 2026 benchmarks.
                </p>
              </div>

              {/* Key Assumptions */}
              <div className="bg-background-50 border border-background-200 rounded-xl p-8 mb-12">
                <h3 className="text-xl font-bold text-foreground-950 mb-6">Key Assumptions (Transparent & Local)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-building-2-line text-primary-600"></i>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground-950">Typical Client</p>
                        <p className="text-sm text-foreground-600">Indiana SMB manufacturer or logistics firm (50–150 employees)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-money-dollar-circle-line text-primary-600"></i>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground-950">Loaded Employee Cost</p>
                        <p className="text-sm text-foreground-600">$45/hour (Indiana average including benefits)</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-lightbulb-line text-primary-600"></i>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground-950">Quick Wins</p>
                        <p className="text-sm text-foreground-600">Time savings, predictive maintenance pilots, inventory optimization, process automation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-line-chart-line text-primary-600"></i>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground-950">Benchmarks</p>
                        <p className="text-sm text-foreground-600">23–27% average cost/productivity gains; predictive maintenance delivers 25–40% maintenance savings + 30–70% downtime reduction; most clients hit positive ROI in 6–8 weeks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick-Start Tier ROI */}
              <div className="bg-background-50 border-2 border-background-200 rounded-xl p-8 mb-8">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground-950">Quick-Start Tier</h3>
                    <p className="text-foreground-600 text-sm mt-1">$2,150/month average · 6–10 hours · Light-touch strategy & quick wins</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-background-200">
                        <th className="text-left py-3 px-4 font-semibold text-foreground-950">Scenario</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground-950">Monthly Gross Savings</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground-950">Annual Net Gain</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground-950">Year-1 ROI</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground-950">Payback Period</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-background-100">
                        <td className="py-3 px-4 text-foreground-700">Conservative</td>
                        <td className="py-3 px-4 text-foreground-700">$2,500</td>
                        <td className="py-3 px-4 text-foreground-700">$18,000</td>
                        <td className="py-3 px-4 font-semibold text-primary-600">300%</td>
                        <td className="py-3 px-4 text-foreground-700">1 month</td>
                      </tr>
                      <tr className="border-b border-background-100 bg-background-100">
                        <td className="py-3 px-4 text-foreground-700 font-medium">Average (most common)</td>
                        <td className="py-3 px-4 text-foreground-700">$4,000</td>
                        <td className="py-3 px-4 text-foreground-700">$36,000</td>
                        <td className="py-3 px-4 font-semibold text-primary-600">450%</td>
                        <td className="py-3 px-4 text-foreground-700">&lt;1 month</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-foreground-700">Optimistic</td>
                        <td className="py-3 px-4 text-foreground-700">$6,500</td>
                        <td className="py-3 px-4 text-foreground-700">$66,000</td>
                        <td className="py-3 px-4 font-semibold text-primary-600">700%</td>
                        <td className="py-3 px-4 text-foreground-700">Immediate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-background-100 border border-background-200 rounded-lg p-5">
                  <p className="text-sm text-foreground-700 leading-relaxed">
                    <strong className="text-foreground-950">Real Indiana example:</strong> A local parts manufacturer added basic AI governance and chat automation — saved 15 hours/week on reporting (worth ~$2,700/month). Your fee is covered in under 4 weeks.
                  </p>
                </div>
              </div>

              {/* Growth Tier ROI */}
              <div className="bg-primary-700 border-2 border-primary-600 rounded-xl p-8 mb-8">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-background-50">Growth Tier</h3>
                    <p className="text-primary-200 text-sm mt-1">$3,500/month average · 12–20 hours · Full strategy + one pilot project</p>
                  </div>
                  <span className="bg-background-50 text-primary-700 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-background-50/20">
                        <th className="text-left py-3 px-4 font-semibold text-background-50">Scenario</th>
                        <th className="text-left py-3 px-4 font-semibold text-background-50">Monthly Gross Savings</th>
                        <th className="text-left py-3 px-4 font-semibold text-background-50">Annual Net Gain</th>
                        <th className="text-left py-3 px-4 font-semibold text-background-50">Year-1 ROI</th>
                        <th className="text-left py-3 px-4 font-semibold text-background-50">Payback Period</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-background-50/10">
                        <td className="py-3 px-4 text-primary-200">Conservative</td>
                        <td className="py-3 px-4 text-primary-200">$6,000</td>
                        <td className="py-3 px-4 text-primary-200">$42,000</td>
                        <td className="py-3 px-4 font-semibold text-background-50">400%</td>
                        <td className="py-3 px-4 text-primary-200">1–2 months</td>
                      </tr>
                      <tr className="border-b border-background-50/10 bg-background-50/5">
                        <td className="py-3 px-4 text-primary-200 font-medium">Average</td>
                        <td className="py-3 px-4 text-primary-200">$10,000–$12,000</td>
                        <td className="py-3 px-4 text-primary-200">$84,000+</td>
                        <td className="py-3 px-4 font-semibold text-background-50">600–750%</td>
                        <td className="py-3 px-4 text-primary-200">1 month</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-primary-200">Optimistic</td>
                        <td className="py-3 px-4 text-primary-200">$18,000</td>
                        <td className="py-3 px-4 text-primary-200">$162,000+</td>
                        <td className="py-3 px-4 font-semibold text-background-50">1,000%+</td>
                        <td className="py-3 px-4 text-primary-200">Immediate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-background-50/10 border border-background-50/20 rounded-lg p-5">
                  <p className="text-sm text-primary-200 leading-relaxed">
                    <strong className="text-background-50">Real Indiana example:</strong> A Fort Wayne-area logistics company added one AI maintenance pilot and cut unplanned downtime 50% — saving ~$11,000/month. Clients routinely see 5–7× return in year one.
                  </p>
                </div>
              </div>

              {/* Hands-On Tier ROI */}
              <div className="bg-background-50 border-2 border-background-200 rounded-xl p-8 mb-8">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground-950">Hands-On Tier</h3>
                    <p className="text-foreground-600 text-sm mt-1">$4,500/month average · 20–30 hours · Full implementation across multiple projects</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-background-200">
                        <th className="text-left py-3 px-4 font-semibold text-foreground-950">Scenario</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground-950">Monthly Gross Savings</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground-950">Annual Net Gain</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground-950">Year-1 ROI</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground-950">Payback Period</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-background-100">
                        <td className="py-3 px-4 text-foreground-700">Conservative</td>
                        <td className="py-3 px-4 text-foreground-700">$12,000</td>
                        <td className="py-3 px-4 text-foreground-700">$66,000</td>
                        <td className="py-3 px-4 font-semibold text-primary-600">450%</td>
                        <td className="py-3 px-4 text-foreground-700">2 months</td>
                      </tr>
                      <tr className="border-b border-background-100 bg-background-100">
                        <td className="py-3 px-4 text-foreground-700 font-medium">Average</td>
                        <td className="py-3 px-4 text-foreground-700">$22,000+</td>
                        <td className="py-3 px-4 text-foreground-700">$198,000+</td>
                        <td className="py-3 px-4 font-semibold text-primary-600">850%+</td>
                        <td className="py-3 px-4 text-foreground-700">1 month</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-foreground-700">Optimistic</td>
                        <td className="py-3 px-4 text-foreground-700">$35,000+</td>
                        <td className="py-3 px-4 text-foreground-700">$342,000+</td>
                        <td className="py-3 px-4 font-semibold text-primary-600">1,300%+</td>
                        <td className="py-3 px-4 text-foreground-700">&lt;2 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-background-100 border border-background-200 rounded-lg p-5">
                  <p className="text-sm text-foreground-700 leading-relaxed">
                    <strong className="text-foreground-950">Real Indiana example:</strong> Midwest manufacturers using deeper AI oversight are hitting 457% ROI over three years (Forrester 2026). Many recover the entire first-year investment in 60–90 days from just one or two optimized production lines.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-background-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">Frequently Asked Questions</h2>
                <p className="text-foreground-600">Everything you need to know before getting started.</p>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-background-50 border border-background-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-background-100 transition-colors"
                    >
                      <span className="font-semibold text-foreground-950 text-sm pr-4">{faq.q}</span>
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <i className={`ri-${openFaq === i ? 'subtract' : 'add'}-line text-primary-600`}></i>
                      </div>
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5">
                        <p className="text-foreground-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section id="inquiry" className="py-20 md:py-28 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">Let's Talk AI Strategy</h2>
                <p className="text-foreground-600">
                  Tell us a bit about your business and we'll reach out to schedule a free 30-minute discovery call.
                </p>
              </div>

              {submitted ? (
                <div className="bg-background-100 border border-background-200 rounded-xl p-12 text-center">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <i className="ri-check-line text-primary-600 text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-foreground-950 mb-2">Message Received!</h3>
                  <p className="text-foreground-500 text-sm">We'll be in touch within 1 business day to schedule your discovery call.</p>
                </div>
              ) : (
                <form
                  data-readdy-form
                  id="fractional-caio-inquiry"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground-950 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full border border-background-200 bg-background-100 rounded-lg px-4 py-3 text-sm text-foreground-950 placeholder-foreground-400 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground-950 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full border border-background-200 bg-background-100 rounded-lg px-4 py-3 text-sm text-foreground-950 placeholder-foreground-400 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground-950 mb-1.5">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full border border-background-200 bg-background-100 rounded-lg px-4 py-3 text-sm text-foreground-950 placeholder-foreground-400 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground-950 mb-1.5">Company Size</label>
                      <select
                        name="employees"
                        value={formData.employees}
                        onChange={e => setFormData({ ...formData, employees: e.target.value })}
                        className="w-full border border-background-200 bg-background-100 rounded-lg px-4 py-3 text-sm text-foreground-950 focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1–10 employees</option>
                        <option value="11-50">11–50 employees</option>
                        <option value="51-200">51–200 employees</option>
                        <option value="201+">201+ employees</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground-950 mb-1.5">What are your biggest AI challenges or goals?</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={e => {
                        if (e.target.value.length <= 500) setFormData({ ...formData, message: e.target.value });
                      }}
                      rows={4}
                      placeholder="Tell us where you are today and what you're hoping to achieve with AI..."
                      className="w-full border border-background-200 bg-background-100 rounded-lg px-4 py-3 text-sm text-foreground-950 placeholder-foreground-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    />
                    <p className="text-xs text-foreground-400 mt-1 text-right">{formData.message.length}/500</p>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary-500 text-background-50 py-4 rounded-lg font-semibold text-sm hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-60"
                  >
                    {submitting ? 'Sending...' : 'Request My Free Discovery Call'}
                  </button>
                  <p className="text-center text-xs text-foreground-400">
                    No commitment required. We'll reach out within 1 business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}