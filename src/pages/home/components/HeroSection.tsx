import { Link } from 'react-router-dom';

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Floating badge 1 */}
      <div className="absolute -top-4 -left-8 z-10 bg-background-50 rounded-xl shadow-lg border border-background-200 px-4 py-3 flex items-center gap-3 animate-fade-in">
        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
          <i className="ri-check-line text-primary-600"></i>
        </div>
        <div>
          <div className="text-sm font-medium text-foreground-900">Your competitor's AI agent</div>
          <div className="text-xs text-foreground-600">Live 24/7 · capturing leads right now</div>
        </div>
      </div>

      {/* Main product card */}
      <div className="bg-background-50 rounded-2xl shadow-xl border border-background-200 overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-background-200">
          <span className="w-3 h-3 rounded-full bg-secondary-200"></span>
          <span className="w-3 h-3 rounded-full bg-secondary-200"></span>
          <span className="w-3 h-3 rounded-full bg-secondary-200"></span>
          <span className="text-xs text-foreground-500 ml-2">nevtech.ai<span className="text-primary-600"> / dashboard</span></span>
        </div>

        {/* Card body */}
        <div className="p-5 space-y-4">
          {/* Status card */}
          <div className="bg-background-100 rounded-xl p-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-4 border-primary-500 flex items-center justify-center relative">
                <span className="text-xl font-bold text-foreground-900">95%</span>
              </div>
              <div>
                <div className="text-sm font-medium text-foreground-900">Client Retention Rate</div>
                <div className="text-xs text-foreground-600">Ahead of 90% of service providers</div>
                <div className="text-xs text-primary-700 mt-1">12 active implementations</div>
              </div>
            </div>
          </div>

          {/* Mini cards row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-background-100 rounded-xl p-3">
              <div className="text-xs text-foreground-600">Leads captured / mo</div>
              <div className="text-2xl font-bold text-foreground-900">248<span className="text-sm font-normal text-foreground-600 ml-1"></span></div>
              <span className="text-xs text-primary-600 font-medium">↑ 3x vs before</span>
            </div>
            <div className="bg-background-100 rounded-xl p-3">
              <div className="text-xs text-foreground-600">Cost savings</div>
              <div className="text-2xl font-bold text-foreground-900">40<span className="text-sm font-normal text-foreground-600 ml-1">%</span></div>
              <span className="text-xs text-primary-600 font-medium">on telecom</span>
            </div>
          </div>

          {/* Stage tracker */}
          <div className="bg-background-100 rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground-900">AI Voice Agent Setup</span>
              <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">In Progress</span>
            </div>
            <div className="flex gap-2 mb-2">
              <div className="h-1.5 flex-1 rounded-full bg-primary-500"></div>
              <div className="h-1.5 flex-1 rounded-full bg-primary-500"></div>
              <div className="h-1.5 flex-1 rounded-full bg-background-200"></div>
            </div>
            <div className="flex justify-between text-xs text-foreground-600">
              <span>Discover</span>
              <span className="text-primary-700 font-medium">Build</span>
              <span>Deploy</span>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-background-100 rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs text-foreground-600">Monthly savings · 6mo</span>
              <span className="text-sm font-bold text-foreground-900">$8,420 <span className="text-xs text-primary-600 font-medium">+38%</span></span>
            </div>
            <div className="flex items-end gap-1 h-12">
              {[40, 55, 35, 60, 45, 70, 50, 80, 65, 90, 75, 95].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-primary-300" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge 2 */}
      <div className="absolute -bottom-4 -right-6 z-10 bg-background-50 rounded-xl shadow-lg border border-background-200 px-4 py-3 flex items-center gap-3 animate-fade-in">
        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
          <i className="ri-road-map-line text-primary-600"></i>
        </div>
        <div>
          <div className="text-sm font-medium text-foreground-900">Roadmap delivered</div>
          <div className="text-xs text-foreground-600">6 services · 30 / 60 / 90 days</div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background-50 via-primary-50/30 to-background-100 pt-24 pb-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <div className="eyebrow">AI Indianapolis — The adoption gap is widening</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-950 leading-tight mb-6">
              The risk of doing nothing with AI -<span className="text-primary-600">Just got real</span>
            </h1>
            <p className="text-lg text-foreground-700 mb-8 leading-relaxed">
              While you wait, competitors are slashing telecom costs by 40%, capturing 3x more after-hours leads, and running 24/7 without adding headcount. NevTech AI is the trusted AI Indianapolis partner helping local businesses close the gap — before it shows up in your margins.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact" className="btn-primary text-lg py-4 px-8">
                Get Free Consultation
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
              <Link to="/services" className="btn-outline text-lg py-4 px-8">
                See how it works
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-foreground-700">
              <span className="flex items-center gap-2">
                <i className="ri-check-line text-primary-600"></i>
                No credit card
              </span>
              <span className="flex items-center gap-2">
                <i className="ri-check-line text-primary-600"></i>
                No sales call
              </span>
              <span className="flex items-center gap-2">
                <i className="ri-check-line text-primary-600"></i>
                <span className="font-mono text-foreground-900">15 min</span> assessment
              </span>
            </div>
          </div>

          {/* Right visual - Dashboard mockup */}
          <div className="relative">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}