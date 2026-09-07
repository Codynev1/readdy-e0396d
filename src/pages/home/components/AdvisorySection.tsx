import { Link } from 'react-router-dom';

const tiers = [
  {
    tag: 'Core',
    tagAccent: true,
    title: 'Free Consultation',
    meta: '30 min · no cost',
    desc: 'A focused review of your current setup with a senior advisor. We audit your telecom bills, identify automation opportunities, and answer your toughest questions.',
  },
  {
    tag: 'Popular',
    tagAccent: true,
    title: 'AI Voice Agent Deployment',
    meta: '2-4 weeks · flat fee',
    desc: 'We build, configure, and deploy a custom AI receptionist that handles your calls 24/7. Includes training, integration, and 30 days of support.',
  },
  {
    tag: 'Enterprise',
    tagAccent: true,
    title: 'Fractional CAIO',
    meta: 'Monthly · 3-mo min',
    desc: 'A NevTech advisor becomes your part-time Chief AI Officer. They run the roadmap, manage vendors, and drive adoption across your team.',
  },
  {
    tag: 'Custom',
    tagAccent: false,
    title: 'Done-For-You Build',
    meta: 'Custom · project-based',
    desc: 'We design, build, and ship — AI receptionists, lead-handling automation, IoT systems, workflow integrations — and hand you the keys.',
  },
];

export default function AdvisorySection() {
  return (
    <section id="advisory" className="py-20 md:py-28 bg-background-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left content */}
          <div>
            <div className="section-eyebrow">Advisory · NevTech AI</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-tight mb-6">
              When you'd rather not go it alone.
            </h2>
            <p className="text-lg text-foreground-700 leading-relaxed mb-4">
              Technology upgrades get 80% of the way on paper. The other 20% is where most projects break — vendor negotiations, skeptical team members, the actual rollout. That is where our advisors come in.
            </p>
            <p className="text-lg text-foreground-700 leading-relaxed mb-8">
              Every NevTech AI advisor has personally led at least 25 implementations across businesses of every size. Indianapolis-based. Flat-fee scoped. No retainers, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Book a free consultation
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
              <Link to="/fractional-caio" className="btn-outline">
                Browse engagements
              </Link>
            </div>
          </div>

          {/* Right tier stack */}
          <div className="space-y-4">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="bg-background-100 rounded-xl p-6 border border-background-200 hover:border-primary-200 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      tier.tagAccent
                        ? 'bg-primary-100 text-primary-700'
                        : 'bg-secondary-100 text-secondary-700'
                    }`}
                  >
                    {tier.tag}
                  </span>
                  <h4 className="text-base font-semibold text-foreground-900">{tier.title}</h4>
                  <span className="text-xs text-foreground-500 ml-auto">{tier.meta}</span>
                </div>
                <p className="text-sm text-foreground-700 leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}