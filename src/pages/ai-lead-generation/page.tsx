import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

export default function AILeadGenerationPage() {

  const industries = [
    {
      title: 'Telehealth & Healthcare SaaS',
      description: 'Book demos with healthcare providers, verify decision-makers, and schedule product presentations for telehealth platforms and medical software solutions.',
      icon: 'ri-heart-pulse-line'
    },
    {
      title: 'Industrial Equipment & Manufacturing',
      description: 'Generate qualified leads for machinery, automation systems, and manufacturing solutions. Request quotes and schedule site assessments with facility managers.',
      icon: 'ri-settings-3-line'
    },
    {
      title: 'Commercial Security Systems',
      description: 'Connect with decision-makers for cameras, LPRs, access control systems. Schedule security assessments and generate proposals for commercial properties.',
      icon: 'ri-shield-check-line'
    },
    {
      title: 'Staffing & Recruiting Companies',
      description: 'Reach hiring managers, verify open positions, and book meetings with HR directors. Qualify staffing needs and schedule candidate presentations.',
      icon: 'ri-team-line'
    },
    {
      title: 'Corporate Facilities Services',
      description: 'Generate leads for HVAC, water systems, filtration, and facility management. Schedule maintenance assessments and connect with facility directors.',
      icon: 'ri-building-line'
    },
    {
      title: 'Construction & Contractors',
      description: 'Book project consultations for plumbers, electricians, and general contractors. Qualify project scope and schedule site visits with property managers.',
      icon: 'ri-hammer-line'
    },
    {
      title: 'Financial & Insurance Services',
      description: 'Connect with business owners for financial planning, insurance quotes, and investment services. Schedule consultations and qualify financial needs.',
      icon: 'ri-money-dollar-circle-line'
    },
    {
      title: 'B2B Software Companies',
      description: 'Book software demos, qualify enterprise prospects, and schedule technical presentations. Connect with IT directors and C-level decision-makers.',
      icon: 'ri-code-box-line'
    }
  ];

  const painPoints = [
    {
      icon: 'ri-time-line',
      title: 'Long Sales Cycles',
      description: 'Medical device and B2B sales require multiple touchpoints over weeks or months'
    },
    {
      icon: 'ri-user-search-line',
      title: 'Hard-to-Reach Decision Makers',
      description: 'Practice managers, surgeons, procurement managers, and imaging directors are difficult to connect with'
    },
    {
      icon: 'ri-repeat-line',
      title: 'Constant Follow-Up Required',
      description: 'Prospects need 5-7 touches before they\'re ready to engage, overwhelming sales teams'
    },
    {
      icon: 'ri-trophy-line',
      title: 'High Competition & Timing',
      description: 'Being first to reach a prospect at the right time is critical in competitive markets'
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'Sales Reps Overloaded',
      description: 'Your best closers spend too much time on admin work instead of high-value prospecting'
    }
  ];

  const features = [
    {
      icon: 'ri-phone-line',
      title: 'Automated Outreach',
      description: 'AI voice agents make thousands of calls per day with natural, human-like conversations'
    },
    {
      icon: 'ri-user-star-line',
      title: 'Lead Qualification',
      description: 'Intelligent questioning identifies decision-makers, budget, timeline, and pain points'
    },
    {
      icon: 'ri-mail-send-line',
      title: 'Follow-Up Sequencing',
      description: 'Automated multi-touch campaigns via phone, SMS, and email keep prospects engaged'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Appointment Setting',
      description: 'Qualified leads are automatically scheduled directly into your sales team\'s calendar'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Upload Your Lead List',
      description: 'Import contacts from your CRM, purchased lists, or trade show leads. Our system accepts any format.',
      icon: 'ri-upload-cloud-line'
    },
    {
      step: '02',
      title: 'AI Calls & Qualifies Prospects',
      description: 'Voice agents engage in natural conversations, ask qualifying questions, and identify decision-makers.',
      icon: 'ri-robot-line'
    },
    {
      step: '03',
      title: 'Warm Leads Sent to Sales',
      description: 'Qualified prospects are instantly routed to your sales team with complete conversation context and notes.',
      icon: 'ri-send-plane-line'
    },
    {
      step: '04',
      title: 'Appointments Auto-Scheduled',
      description: 'Meetings are booked directly into calendars with automatic confirmations and reminders sent.',
      icon: 'ri-calendar-event-line'
    }
  ];

  const results = [
    {
      metric: '15-40%',
      label: 'Conversation Rate',
      description: 'Depending on vertical and list quality'
    },
    {
      metric: 'Instant',
      label: 'Lead Delivery',
      description: 'Qualified leads sent to sales in real-time'
    },
    {
      metric: 'Thousands',
      label: 'Daily Call Capacity',
      description: 'Unlimited scaling without hiring'
    },
    {
      metric: '70% Less',
      label: 'Cost vs Human Teams',
      description: 'More efficient than traditional call centers'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-black mb-6">
                AI-Powered B2B Lead Generation
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                Generate High-Value B2B Leads with AI Voice Technology
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Connect with decision-makers across any industry using AI voice agents that sound human, 
                qualify prospects, and book appointments automatically. From healthcare to manufacturing, 
                security to software—we help you reach the right people at the right time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/cody-nevtech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Book a Demo
                </a>
                <Link 
                  to="/contact" 
                  className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How We Generate Leads */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                How We Generate High-Value Leads Using AI Voice Technology
              </h2>
              <p className="text-xl text-gray-600">
                NevTech uses advanced AI voice agents capable of natural, human-like conversations to identify, 
                qualify, and transfer leads directly to your sales teams. Our system handles outbound calling, 
                follow-up campaigns, pipeline development, and accurate data collection—all while your team focuses on closing deals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`${feature.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Why Medical Device Companies Need AI Lead Generation
              </h2>
              <p className="text-xl text-gray-600">
                Traditional prospecting methods can't keep up with the demands of modern B2B sales cycles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {painPoints.map((point, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mb-6">
                    <i className={`${point.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Other High-Value B2B Verticals
              </h2>
              <p className="text-xl text-gray-600">
                Our AI lead generation system works across multiple industries with complex sales cycles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <i className={`${industry.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">{industry.title}</h3>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                How Our AI Call Engine Works
              </h2>
              <p className="text-xl text-gray-600">
                A simple, proven process that delivers qualified leads to your sales team
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold">{step.step}</span>
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="flex items-center mb-3">
                          <i className={`${step.icon} text-2xl text-black mr-3`}></i>
                          <h3 className="text-xl font-bold text-black">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    {index < workflowSteps.length - 2 && (
                      <div className="hidden md:block absolute top-10 left-10 w-px h-full bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Additional Features */}
              <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-6 text-center">Additional Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <i className="ri-links-line text-3xl text-black mb-3"></i>
                    <h4 className="font-semibold text-black mb-2">CRM Integration</h4>
                    <p className="text-sm text-gray-600">Sync with Salesforce, HubSpot, and more</p>
                  </div>
                  <div className="text-center">
                    <i className="ri-list-check-2 text-3xl text-black mb-3"></i>
                    <h4 className="font-semibold text-black mb-2">Custom Dispositions</h4>
                    <p className="text-sm text-gray-600">Track call outcomes your way</p>
                  </div>
                  <div className="text-center">
                    <i className="ri-message-3-line text-3xl text-black mb-3"></i>
                    <h4 className="font-semibold text-black mb-2">Auto Follow-Ups</h4>
                    <p className="text-sm text-gray-600">Text and email sequences triggered automatically</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Proven Results Across Industries
              </h2>
              <p className="text-xl text-gray-300">
                Our AI voice agents deliver measurable outcomes that transform your sales pipeline
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-3">{result.metric}</div>
                  <div className="text-xl font-semibold mb-2">{result.label}</div>
                  <p className="text-gray-400">{result.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-2xl"></i>
                    <span>Qualified leads delivered instantly to your CRM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-2xl"></i>
                    <span>Unlimited scaling—thousands of calls per day</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-2xl"></i>
                    <span>Cost-effective vs traditional human calling teams</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-2xl"></i>
                    <span>24/7 operation with no breaks or downtime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Real results from companies using NevTech AI lead generation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-black text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "NevTech's AI voice agents helped us reach 3x more prospects in our first month. 
                  The quality of leads has been exceptional, and our sales team loves the warm handoffs."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-black">Medical Device Sales Director</div>
                  <div className="text-sm text-gray-500">Leading Imaging Equipment Company</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-black text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "We were skeptical about AI calling, but the conversations sound completely natural. 
                  Our appointment booking rate increased by 40% in the first quarter."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-black">VP of Sales</div>
                  <div className="text-sm text-gray-500">Healthcare SaaS Platform</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-black text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The ROI has been incredible. We're generating qualified leads at a fraction of the cost 
                  of our previous outsourced calling team, with better results."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-black">CEO</div>
                  <div className="text-sm text-gray-500">Industrial Equipment Distributor</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Ready to Increase High-Value Lead Flow?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Book a demo with our AI specialists and see how we can transform your lead generation process. 
                Get a custom strategy for your industry and start generating qualified leads within days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="https://calendly.com/cody-nevtech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-calendar-line mr-2"></i>
                  Book a Demo
                </a>
                <a 
                  href="tel:3175089493"
                  className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Call (317) 508-9493
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <i className="ri-phone-line text-3xl text-black mb-3"></i>
                    <div className="font-semibold text-black mb-1">Call Us</div>
                    <a href="tel:3175089493" className="text-gray-600 hover:text-black">(317) 508-9493</a>
                  </div>
                  <div>
                    <i className="ri-mail-line text-3xl text-black mb-3"></i>
                    <div className="font-semibold text-black mb-1">Email Us</div>
                    <a href="mailto:cody@nevtech.io" className="text-gray-600 hover:text-black">cody@nevtech.io</a>
                  </div>
                  <div>
                    <i className="ri-calendar-check-line text-3xl text-black mb-3"></i>
                    <div className="font-semibold text-black mb-1">Schedule Meeting</div>
                    <a 
                      href="https://calendly.com/cody-nevtech/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black"
                    >
                      Book on Calendly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
