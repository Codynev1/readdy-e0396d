import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

const industries = [
  {
    icon: 'ri-heart-pulse-line',
    name: 'Medical & Dental Practices',
    description: 'Practices using Nova AI reduce front-desk overwhelm, capture after-hours patient calls, and cut no-show rates by 60% with automated appointment reminders and 24/7 scheduling.',
    results: [
      'Zero missed patient calls — even during lunch and after hours',
      'Automated insurance verification questions handled instantly',
      'HIPAA-compliant call handling with full encryption',
      'Post-appointment follow-up surveys collected automatically',
    ],
    link: '/receptionist',
  },
  {
    icon: 'ri-scales-line',
    name: 'Law Firms',
    description: 'Attorneys cannot answer phones during court or client meetings. Nova AI qualifies every intake call, captures case details, checks conflict of interest, and schedules consultations — 24/7, with zero lead leakage.',
    results: [
      'Every intake call answered on the first ring',
      'Lead qualification and conflict checking automated',
      'Consultation scheduling synced with attorney calendars',
      'Urgent client matters routed to the right attorney instantly',
    ],
    link: '/receptionist',
  },
  {
    icon: 'ri-tools-line',
    name: 'Home Services (HVAC, Plumbing, Electrical)',
    description: 'Emergency calls at 2am should not go to voicemail. Nova triages urgent calls, dispatches to on-call techs, books non-urgent appointments, and sends follow-ups — keeping your service trucks moving and customers happy.',
    results: [
      'Emergency calls triaged and dispatched 24/7',
      'Non-urgent appointments booked without phone tag',
      'Post-service satisfaction surveys automated',
      'Seasonal maintenance reminders drive repeat revenue',
    ],
    link: '/receptionist',
  },
  {
    icon: 'ri-home-line',
    name: 'Real Estate Agencies',
    description: 'Speed-to-lead is everything in real estate. Nova answers buyer calls instantly, qualifies leads, captures property preferences, and books showings — while agents are out at other showings. No more losing buyers to agents who answered first.',
    results: [
      'Every buyer inquiry answered within 2 seconds',
      'Property preferences captured and matched automatically',
      'Showing appointments booked directly into agent calendars',
      'Follow-up sequences keep leads warm until they convert',
    ],
    link: '/receptionist',
  },
  {
    icon: 'ri-building-line',
    name: 'Manufacturing & Industrial',
    description: 'Indiana manufacturers use NevTech AI for data organization, internal AI search engines, predictive maintenance pilots, inventory optimization, and workflow automation. Our Fractional CAIO retainer helps leadership identify and execute the highest-ROI AI initiatives.',
    results: [
      'Technical documentation searchable in seconds with RAG AI',
      'Predictive maintenance reduces downtime by 30-70%',
      'Inventory optimization through automated data pipelines',
      '23-27% average cost and productivity gains',
    ],
    link: '/fractional-caio',
  },
  {
    icon: 'ri-truck-line',
    name: 'Logistics & Transportation',
    description: 'Fleet operators and logistics companies use NevTech for IoT connectivity management, automated dispatch workflows, real-time fleet tracking, and cellular plan optimization. We reduce telecom costs while improving operational visibility.',
    results: [
      'Cellular costs reduced by 30-40% through plan optimization',
      'Fleet tracking and sensor data centralized in real time',
      'Automated dispatch and routing workflows',
      'Multi-carrier solutions for maximum coverage',
    ],
    link: '/services',
  },
  {
    icon: 'ri-restaurant-line',
    name: 'Restaurants & Hospitality',
    description: 'Phone orders, reservations, and catering inquiries come in during the busiest hours. Nova handles them all — taking orders, booking tables, managing large-party inquiries, and never putting anyone on hold during dinner rush.',
    results: [
      'Phone orders captured accurately every time',
      'Reservations booked and confirmed automatically',
      'Catering inquiries qualified and routed to managers',
      'Zero hold times — even during peak hours',
    ],
    link: '/receptionist',
  },
  {
    icon: 'ri-store-2-line',
    name: 'Retail & E-Commerce',
    description: 'Retailers use NevTech AI for customer service automation, order status inquiries, return processing, and AI-powered website chat agents that convert browsers into buyers. Our custom automations reduce the manual work that eats up staff hours.',
    results: [
      'Customer service inquiries handled 24/7 via AI chat',
      'Order status and tracking answered instantly',
      'Return and exchange requests processed automatically',
      'Staff freed up for in-person customer experience',
    ],
    link: '/services',
  },
  {
    icon: 'ri-bank-line',
    name: 'Financial & Insurance Services',
    description: 'Financial advisors and insurance agencies use NevTech for lead qualification, appointment setting, and client follow-up automation. AI voice agents reach out to prospects, qualify needs, and book consultations — so advisors spend time closing, not cold-calling.',
    results: [
      'Lead qualification and appointment setting automated',
      'Policy renewal reminders sent via AI outbound calls',
      'Client follow-up sequences run without manual effort',
      'Compliance-friendly call scripts with full audit trails',
    ],
    link: '/ai-lead-generation',
  },
];

const caseStudyCards = [
  {
    title: 'Data Organization for a Law Firm',
    metric: '45 min → 2 min',
    description: 'Reorganized 12,000+ legal documents with standardized naming, intelligent folders, and metadata tagging. Document retrieval time dropped from 45 minutes to under 2 minutes.',
    link: '/products',
  },
  {
    title: 'AI Search for a Manufacturer',
    metric: '10x faster',
    description: 'Deployed RAG-powered internal search over decades of technical documentation. Engineers find answers instantly instead of waiting for senior staff.',
    link: '/products',
  },
  {
    title: 'Automation for Healthcare Admin',
    metric: '15 hrs → 18 min',
    description: 'Automated patient satisfaction report generation across three survey platforms. Admin team went from 15 hours of manual work to 18 minutes.',
    link: '/products',
  },
];

export default function UseCasesPage() {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background-50">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-background-50 via-primary-50/30 to-background-100 pt-20 pb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl mx-auto text-center">
              <div className="eyebrow">Real-World Applications</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-950 mb-6">
                AI & Automation Across Every Industry
              </h1>
              <p className="text-lg text-foreground-700 leading-relaxed max-w-2xl mx-auto">
                From medical practices to manufacturing plants, restaurants to real estate — see how businesses like yours use NevTech AI to save time, cut costs, and capture more revenue.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 md:py-20 bg-background-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">Industries We Serve</h2>
                <p className="text-foreground-600 max-w-xl mx-auto text-sm leading-relaxed">
                  Click any industry to see how we deliver results specific to that vertical.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry, i) => (
                  <div key={i} className="bg-background-50 border border-background-200 rounded-2xl overflow-hidden hover:border-primary-200 transition-all duration-200">
                    <button
                      onClick={() => setActiveIndustry(activeIndustry === i ? null : i)}
                      className="w-full text-left p-7 cursor-pointer"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <i className={`${industry.icon} text-primary-600 text-xl`}></i>
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground-950 text-base">{industry.name}</h3>
                          <div className="flex items-center gap-1 text-xs text-primary-600 font-medium mt-0.5">
                            <span>{activeIndustry === i ? 'Show less' : 'See results'}</span>
                            {activeIndustry === i ? <i className="ri-arrow-up-s-line"></i> : <i className="ri-arrow-down-s-line"></i>}
                          </div>
                        </div>
                      </div>
                      <p className="text-foreground-600 text-sm leading-relaxed">{industry.description}</p>
                    </button>

                    {activeIndustry === i && (
                      <div className="px-7 pb-7 border-t border-background-200">
                        <p className="text-xs font-bold text-foreground-900 uppercase tracking-widest mt-5 mb-3">Measurable Results</p>
                        <ul className="space-y-2 mb-5">
                          {industry.results.map((result, ri) => (
                            <li key={ri} className="flex items-start gap-2 text-sm text-foreground-700">
                              <div className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <i className="ri-check-line text-primary-600 text-xs font-bold"></i>
                              </div>
                              {result}
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={industry.link}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors cursor-pointer"
                        >
                          Learn more
                          <i className="ri-arrow-right-line"></i>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Highlights */}
        <section className="py-16 md:py-20 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <div className="eyebrow">Proven Outcomes</div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">Real Results from Real Projects</h2>
                <p className="text-foreground-600 max-w-xl mx-auto text-sm leading-relaxed">
                  These are not hypotheticals. They are actual engagements where we delivered measurable impact.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseStudyCards.map((card, i) => (
                  <Link
                    key={i}
                    to={card.link}
                    className="group bg-background-100 border border-background-200 rounded-2xl p-7 hover:border-primary-200 transition-all duration-200 cursor-pointer"
                  >
                    <div className="text-3xl font-bold text-primary-600 mb-3">{card.metric}</div>
                    <h3 className="font-bold text-foreground-950 text-base mb-2">{card.title}</h3>
                    <p className="text-foreground-600 text-sm leading-relaxed mb-4">{card.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 group-hover:text-primary-800 transition-colors">
                      Read case study
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  to="/products"
                  className="btn-outline text-base py-3 px-8"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-primary-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 mb-6">
                See What AI Can Do for Your Industry
              </h2>
              <p className="text-lg text-primary-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                Book a free discovery call. We will show you exactly how businesses in your industry are using AI to save money, capture more leads, and outpace the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-background-50 text-foreground-950 font-semibold px-8 py-4 rounded-lg hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Book a Free Discovery Call
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center border-2 border-background-200 text-background-50 font-semibold px-8 py-4 rounded-lg hover:bg-background-50/10 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Browse All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}