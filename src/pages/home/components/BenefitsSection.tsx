
export default function BenefitsSection() {
  const benefits = [
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Reduce Operating Costs',
      description: 'Save up to 40% on telecommunications and automate expensive manual processes.',
      stats: 'Average 40% cost reduction'
    },
    {
      icon: 'ri-user-add-line',
      title: 'Capture More Leads',
      description: 'Never miss a potential customer with 24/7 AI agents and automated follow-up systems.',
      stats: '3x more leads captured'
    },
    {
      icon: 'ri-time-line',
      title: 'Save Time & Increase Efficiency',
      description: 'Automate repetitive tasks and streamline workflows to focus on growing your business.',
      stats: '20+ hours saved weekly'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Improve Reliability',
      description: 'Redundant systems, failover protection, and 99.9% uptime for critical business operations.',
      stats: '99.9% uptime guarantee'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Why Businesses Choose NevTech AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help small and mid-sized businesses modernize their operations with proven technology solutions 
            that deliver measurable results and ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-6 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                <i className={`${benefit.icon} text-white text-2xl`}></i>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="inline-block bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold text-black">{benefit.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Calculator CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-black mb-4">
            Calculate Your Potential Savings
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            See how much your business could save with our AI automation and connectivity solutions. 
            Get a personalized ROI analysis in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              Get Free ROI Analysis
            </a>
            <a 
              href="/services" 
              className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
