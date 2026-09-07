
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

const tiers = [
  {
    name: 'Quick-Start',
    badge: 'Best Entry Point',
    priceRange: '$1,800 – $2,500',
    period: '/month',
    hours: '6–10 hrs/month',
    hoursDetail: '1 strategy call + roadmap reviews, tool audits, quick governance setup',
    description: 'Perfect for small Indiana-area businesses just dipping their toes in AI. Low risk, high clarity.',
    highlight: false,
    features: [
      'AI readiness assessment',
      '1 strategy call per month',
      'Roadmap review & prioritization',
      'Tool audit & recommendations',
      'Quick governance setup',
      'Email support',
      'Monthly progress summary',
    ],
    cta: 'Start Here',
    ctaHref: '/contact',
  },
  {
    name: 'Growth',
    badge: 'Most Popular',
    priceRange: '$2,800 – $4,200',
    period: '/month',
    hours: '12–20 hrs/month',
    hoursDetail: 'Full strategy sessions, team guidance, pilot oversight, ongoing advisory',
    description: 'The sweet spot — still 30–50% below coastal rates. Ideal once you\'ve seen early AI wins and want to scale.',
    highlight: true,
    features: [
      'Everything in Quick-Start',
      'Bi-weekly strategy sessions',
      'Team guidance & enablement',
      'AI pilot oversight',
      'Ongoing advisory support',
      'Implementation coordination',
      'AI policy development',
      'Priority email & Slack access',
    ],
    cta: 'Get Started',
    ctaHref: '/contact',
  },
  {
    name: 'Hands-On',
    badge: 'Scale Up',
    priceRange: '$4,500 – $6,500',
    period: '/month',
    hours: '20–30 hrs/month',
    hoursDetail: 'Deeper implementation, multi-project management',
    description: 'For businesses 3–6 months in who are ready for deeper AI transformation across multiple workstreams.',
    highlight: false,
    features: [
      'Everything in Growth',
      'Weekly executive sessions',
      'Deep implementation leadership',
      'Multi-project management',
      'Vendor & integration oversight',
      'Board-level AI reporting',
      'Custom governance framework',
      'Dedicated Slack channel',
      'Quarterly on-site visits',
    ],
    cta: 'Let\'s Talk',
    ctaHref: '/contact',
  },
];

const hourlyDetails = [
  { icon: 'ri-time-line', label: 'Rate', value: '$125 – $175/hr' },
  { icon: 'ri-stack-line', label: 'Minimum', value: '10-hour block' },
  { icon: 'ri-flashlight-line', label: 'Best For', value: 'One-off projects & flexibility' },
  { icon: 'ri-map-pin-line', label: 'Market', value: 'Undercuts $200+ coastal norm' },
];

const faqs = [
  {
    q: 'Why do the plans show a price range instead of a fixed price?',
    a: 'Every business is different. The range reflects scope — a 6-hour month looks different from a 10-hour month. After a free discovery call, we\'ll give you an exact number based on your needs.',
  },
  {
    q: 'What\'s included in the hours?',
    a: 'Hours cover strategy calls, async reviews, document prep, tool research, team training coordination, and implementation oversight. We track everything transparently so you always know where your time goes.',
  },
  {
    q: 'Can I start on Quick-Start and upgrade later?',
    a: 'Absolutely — and most clients do. Quick-Start is designed to prove value fast. Once you see results, upgrading to Growth or Hands-On is seamless with no re-onboarding required.',
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No lock-in after the first 90 days. We operate month-to-month because we believe in earning your business every month, not trapping you in a contract.',
  },
  {
    q: 'When does the hourly option make sense?',
    a: 'Hourly is great for one-time audits, a specific project kickoff, or businesses that need flexibility before committing to a retainer. The 10-hour minimum ensures we can deliver meaningful work.',
  },
  {
    q: 'How do these rates compare to other AI consultants?',
    a: 'Coastal AI consultants typically charge $200–$400/hr or $5,000–$15,000/month for similar retainers. Our rates are calibrated for the Midwest market — specifically Indiana — while delivering the same senior-level expertise.',
  },
];

const comparisonRows = [
  { label: 'Monthly Cost', quickStart: '$1,800–$2,500', growth: '$2,800–$4,200', handsOn: '$4,500–$6,500', hourly: '$1,250+ (10hr min)' },
  { label: 'Hours Included', quickStart: '6–10 hrs', growth: '12–20 hrs', handsOn: '20–30 hrs', hourly: 'Pay as you go' },
  { label: 'Strategy Calls', quickStart: '1/month', growth: '2/month', handsOn: 'Weekly', hourly: 'As needed' },
  { label: 'Team Training', quickStart: '✗', growth: '✓', handsOn: '✓', hourly: 'Add-on' },
  { label: 'Implementation Oversight', quickStart: 'Light', growth: '✓', handsOn: 'Deep', hourly: 'Project-based' },
  { label: 'AI Policy & Governance', quickStart: 'Basic', growth: '✓', handsOn: 'Custom', hourly: 'Add-on' },
  { label: 'Priority Access', quickStart: 'Email', growth: 'Email + Slack', handsOn: 'Dedicated Slack', hourly: 'Email' },
  { label: 'Multi-Project Mgmt', quickStart: '✗', growth: '✗', handsOn: '✓', hourly: '✗' },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>

        {/* Hero */}
        <section className="relative bg-black text-white py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=abstract%20dark%20minimalist%20background%20with%20subtle%20geometric%20grid%20lines%20glowing%20faint%20white%20lines%20on%20deep%20black%20surface%20clean%20professional%20technology%20atmosphere%20no%20people%20no%20text%20very%20dark%20with%20slight%20depth%20and%20texture&width=1440&height=600&seq=pricing-hero-bg-01&orientation=landscape"
              alt="Pricing background"
              className="w-full h-full object-cover object-top opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Transparent Pricing
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
              Clear Hours. Clear Value.<br />
              <span className="text-gray-300">No Surprises.</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Retainer-based AI leadership priced for the Indiana market — 30–50% below coastal rates with the same senior-level expertise. Know exactly what you're getting every month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#plans"
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                View Plans
              </a>
              <Link
                to="/contact"
                className="border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer"
              >
                Book a Free Call
              </Link>
            </div>
          </div>
        </section>

        {/* Value Banner */}
        <section className="bg-gray-50 border-b border-gray-200 py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              {[
                { icon: 'ri-map-pin-line', text: 'Indiana-Market Rates' },
                { icon: 'ri-time-line', text: 'Crystal-Clear Hours Included' },
                { icon: 'ri-calendar-check-line', text: 'Month-to-Month After 90 Days' },
                { icon: 'ri-shield-check-line', text: 'No Hidden Fees' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={`${item.icon} text-black`}></i>
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section id="plans" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Monthly Retainer Plans</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
                Each plan includes a defined block of hours so you always know what you're paying for. No vague "charges and hours" — just clear deliverables every month.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl flex flex-col transition-all duration-200 ${
                    tier.highlight
                      ? 'bg-black text-white shadow-2xl scale-105 border-2 border-black'
                      : 'bg-white text-black border-2 border-gray-200 hover:border-gray-400 shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Badge */}
                  <div className="px-8 pt-8 pb-0">
                    <span
                      className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${
                        tier.highlight
                          ? 'bg-white text-black'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tier.badge}
                    </span>
                    <h3 className={`text-2xl font-bold mb-1 ${tier.highlight ? 'text-white' : 'text-black'}`}>
                      {tier.name}
                    </h3>

                    {/* Hours pill */}
                    <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 ${
                      tier.highlight ? 'bg-white/15 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <i className="ri-time-line"></i>
                      {tier.hours}
                    </div>

                    {/* Price */}
                    <div className="mb-2">
                      <span className={`text-3xl font-bold ${tier.highlight ? 'text-white' : 'text-black'}`}>
                        {tier.priceRange}
                      </span>
                      <span className={`text-sm ml-1 ${tier.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                        {tier.period}
                      </span>
                    </div>

                    <p className={`text-xs leading-relaxed mb-2 ${tier.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                      {tier.hoursDetail}
                    </p>

                    <p className={`text-sm leading-relaxed mb-6 mt-3 ${tier.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                      {tier.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className={`mx-8 border-t ${tier.highlight ? 'border-white/20' : 'border-gray-100'}`}></div>

                  {/* Features */}
                  <ul className="px-8 py-6 space-y-3 flex-1">
                    {tier.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-sm">
                        <div className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <i className={`ri-check-line font-bold ${tier.highlight ? 'text-white' : 'text-black'}`}></i>
                        </div>
                        <span className={tier.highlight ? 'text-gray-300' : 'text-gray-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="px-8 pb-8">
                    <Link
                      to={tier.ctaHref}
                      className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap cursor-pointer ${
                        tier.highlight
                          ? 'bg-white text-black hover:bg-gray-100'
                          : 'bg-black text-white hover:bg-gray-800'
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 text-xs mt-10">
              All retainers include a 30-day onboarding period. Cancel anytime after 90 days. Custom enterprise plans available on request.
            </p>
          </div>
        </section>

        {/* Hourly Option */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-10 flex flex-col justify-center">
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5 self-start">
                      Flexible Option
                    </span>
                    <h2 className="text-3xl font-bold text-black mb-3">Hourly Consulting</h2>
                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-4xl font-bold text-black">$125 – $175</span>
                      <span className="text-gray-500 text-sm mb-1">/hour</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Ideal for one-off projects, specific audits, or businesses that want to test the waters before committing to a retainer. Still profitable at ~$150 effective rate — and well below the $200+ coastal norm.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-block bg-black text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer self-start"
                    >
                      Inquire About Hourly
                    </Link>
                  </div>
                  <div className="bg-gray-50 p-10 border-l border-gray-200">
                    <h3 className="font-bold text-black mb-6 text-sm uppercase tracking-wider">At a Glance</h3>
                    <div className="space-y-5">
                      {hourlyDetails.map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                            <i className={`${item.icon} text-white text-base`}></i>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 font-medium">{item.label}</div>
                            <div className="text-sm font-semibold text-black">{item.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 bg-white border border-gray-200 rounded-xl p-4">
                      <p className="text-xs text-gray-500 leading-relaxed">
                        <strong className="text-black">10-hour minimum</strong> ensures we can deliver meaningful, actionable work — not just a surface-level chat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-black mb-4">Plan Comparison</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">See exactly what's included at each level so you can pick the right fit from day one.</p>
            </div>
            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 pr-6 text-gray-500 font-medium w-40">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-black">Quick-Start</th>
                    <th className="text-center py-4 px-4 font-bold text-white bg-black rounded-t-lg">Growth</th>
                    <th className="text-center py-4 px-4 font-bold text-black">Hands-On</th>
                    <th className="text-center py-4 px-4 font-bold text-black">Hourly</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="py-4 pr-6 text-gray-600 font-medium">{row.label}</td>
                      <td className="text-center py-4 px-4 text-gray-700">{row.quickStart}</td>
                      <td className="text-center py-4 px-4 text-white bg-black font-semibold">{row.growth}</td>
                      <td className="text-center py-4 px-4 text-gray-700">{row.handsOn}</td>
                      <td className="text-center py-4 px-4 text-gray-700">{row.hourly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Indiana Market Context */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                <div>
                  <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                    Why These Rates
                  </span>
                  <h2 className="text-4xl font-bold mb-6">Built for the Indiana Market</h2>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Coastal AI consultants charge $200–$400/hr. That's not the Midwest reality. Our rates are calibrated to the Indiana market — competitive with local general consultants, but with specialized AI expertise they can't match.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-8">
                    At an effective rate of $80–$180/hr across retainer tiers, you're getting senior-level AI strategy at a price that makes sense for Indianapolis-area businesses.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-white text-black px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Book a Free Discovery Call
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { label: 'Coastal AI Consultant', rate: '$200–$400/hr', sub: 'Typical NYC/SF rate', dark: false },
                    { label: 'NevTech AI Effective Rate', rate: '$80–$180/hr', sub: 'Across retainer tiers', dark: true },
                    { label: 'Full-Time CAIO Salary', rate: '$200K–$350K/yr', sub: 'Plus benefits & overhead', dark: false },
                    { label: 'NevTech Retainer', rate: '$1,800–$6,500/mo', sub: 'No overhead, no lock-in', dark: true },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`rounded-xl p-5 ${item.dark ? 'bg-white text-black' : 'bg-white/10 border border-white/20 text-white'}`}
                    >
                      <div className={`text-xs font-medium mb-2 ${item.dark ? 'text-gray-500' : 'text-gray-400'}`}>{item.label}</div>
                      <div className={`text-xl font-bold mb-1 ${item.dark ? 'text-black' : 'text-white'}`}>{item.rate}</div>
                      <div className={`text-xs ${item.dark ? 'text-gray-500' : 'text-gray-400'}`}>{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-4xl font-bold text-black mb-4">Pricing FAQs</h2>
                <p className="text-gray-500 text-sm">Common questions before signing on.</p>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-black text-sm pr-4">{faq.q}</span>
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <i className={`ri-${openFaq === i ? 'subtract' : 'add'}-line text-black`}></i>
                      </div>
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-black mb-5">Not Sure Which Plan Fits?</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
                Book a free 30-minute discovery call. We'll learn about your business, answer your questions, and recommend the right starting point — no pressure, no commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-black text-white px-10 py-4 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Book a Free Discovery Call
                </Link>
                <Link
                  to="/fractional-caio"
                  className="border-2 border-gray-200 text-black px-10 py-4 rounded-xl font-semibold text-sm hover:border-gray-400 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Learn About Fractional CAIO
                </Link>
              </div>
              <p className="text-gray-400 text-xs mt-6">No commitment required. Response within 1 business day.</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
