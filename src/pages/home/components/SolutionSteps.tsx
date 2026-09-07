const steps = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Assess your needs',
    description:
      'A free 15-minute consultation scores your business across connectivity, automation, and cost-efficiency. We surface your biggest pain points and identify the solutions with the fastest ROI for your industry.',
    filled: 1,
  },
  {
    number: '02',
    title: 'Plan',
    subtitle: 'Build your roadmap',
    description:
      'We auto-generate a 30/60/90-day implementation roadmap with prioritized initiatives, estimated savings, and recommended tools — all sized to your budget, team, and timeline.',
    filled: 2,
  },
  {
    number: '03',
    title: 'Implement',
    subtitle: 'Deploy the solutions',
    description:
      'We handle setup, configuration, and training. AI voice agents, cellular optimization, business internet, IoT connectivity — deployed and tested with your team before we hand over the keys.',
    filled: 3,
  },
  {
    number: '04',
    title: 'Measure',
    subtitle: 'Track your ROI',
    description:
      'Set baselines, track KPIs, and watch your investment pay back in real numbers. We check in regularly and adjust as your business grows.',
    filled: 4,
  },
];

export default function SolutionSteps() {
  return (
    <section id="how" className="py-20 md:py-28 bg-background-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="section-eyebrow">The Solution</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-tight mb-6">
            One partner. The whole technology journey.
          </h2>
          <p className="text-lg text-foreground-700 leading-relaxed">
            NevTech AI walks you through the four things every successful technology upgrade needs: a clear-eyed assessment, a prioritized roadmap, hands-on deployment, and honest metrics. And when you would rather not go it alone, our advisors step in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-background-50 rounded-2xl p-6 border border-background-200 hover:border-primary-200 transition-colors"
            >
              {/* Progress bar */}
              <div className="flex gap-1.5 mb-6">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className={`h-1 flex-1 rounded-full ${n <= step.filled ? 'bg-primary-500' : 'bg-background-200'}`}
                  ></div>
                ))}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-primary-600 bg-primary-100 px-2 py-1 rounded">
                  {step.number}
                </span>
                <span className="text-sm font-semibold text-foreground-900">{step.title}</span>
              </div>

              <h3 className="text-lg font-bold text-foreground-900 mb-3">{step.subtitle}</h3>
              <p className="text-sm text-foreground-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}