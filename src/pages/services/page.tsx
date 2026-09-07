import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

export default function ServicesPage() {

  const services = [
    {
      icon: 'ri-user-star-line',
      title: 'Fractional CAIO',
      description: 'Get a Chief AI Officer embedded in your business without the full-time cost. We help you build an AI strategy, oversee implementation, and ensure your organization is leading with AI — not falling behind it.',
      features: [
        'Executive-level AI strategy & roadmap',
        'AI governance and risk management',
        'Vendor evaluation and selection',
        'Team training and AI culture building',
        'Board and stakeholder AI reporting',
        'Ongoing fractional advisory support'
      ],
      benefits: 'AI leadership without the $300K+ salary — strategy, execution, and accountability',
      link: '/fractional-caio',
      isExternal: false
    },
    {
      icon: 'ri-code-s-slash-line',
      title: 'AI Projects',
      description: 'Custom AI solutions built for your specific business problems — from intelligent automations and data pipelines to full-stack AI-powered applications designed to scale.',
      features: [
        'Custom AI model development',
        'Data pipeline and ETL architecture',
        'API integrations and connectors',
        'Intelligent document processing',
        'Predictive analytics and dashboards',
        'End-to-end project ownership'
      ],
      benefits: 'Purpose-built AI that solves real problems — no off-the-shelf compromises',
      link: '/ai-projects',
      isExternal: false
    },
    {
      icon: 'ri-rocket-2-line',
      title: 'Rapid MVP',
      description: 'Go from idea to working product in 8 weeks. We design, build, and deliver a production-ready MVP that can be handed directly to your team or partner dev shop — built to enterprise standards and ready to scale.',
      features: [
        'Idea validation and scoping (Week 1)',
        'UI/UX design and architecture (Week 2)',
        'Core feature development (Weeks 3–6)',
        'QA testing and refinement (Week 7)',
        'Handoff documentation & training (Week 8)',
        'Enterprise-grade scalable codebase'
      ],
      benefits: 'Ship in 8 weeks, not 8 months — production-ready code your team can own and scale',
      link: '/rapid-mvp',
      isExternal: false
    },
    {
      icon: 'ri-robot-line',
      title: 'AI Voice Agents',
      description: 'Intelligent phone systems that handle customer inquiries, appointment scheduling, and lead qualification with natural conversation capabilities.',
      features: [
        '24/7 automated phone answering',
        'Natural language processing',
        'Appointment scheduling integration',
        'Lead qualification and routing',
        'Call recording and analytics',
        'Multi-language support'
      ],
      benefits: 'Never miss a call, capture more leads, reduce staffing costs'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'AI Receptionist',
      description: 'Professional virtual receptionist that answers calls, schedules appointments, and manages customer interactions with human-like conversation.',
      features: [
        'Professional call handling',
        'Appointment booking and management',
        'Customer inquiry responses',
        'Message taking and routing',
        'Business hours customization',
        'Seamless CRM integration'
      ],
      benefits: 'Professional first impression, never miss appointments, reduce overhead costs',
      link: 'https://indianaaireception.com',
      isExternal: true
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Cellular Consulting',
      description: 'Expert guidance on phones, tablets, hotspots, routers, and data SIMs to optimize your business connectivity and reduce costs.',
      features: [
        'Device selection and procurement',
        'Carrier plan optimization',
        'Multi-carrier solutions',
        'Cost analysis and reduction',
        'Enterprise mobility management',
        'Ongoing support and monitoring'
      ],
      benefits: 'Reduce cellular costs by up to 40%, improve connectivity reliability'
    },
    {
      icon: 'ri-wifi-line',
      title: 'Business Internet Solutions',
      description: '5G, fiber, failover, and multi-location support to ensure your business stays connected with reliable, high-speed internet.',
      features: [
        '5G and fiber internet options',
        'Automatic failover protection',
        'Multi-location connectivity',
        'Scalable bandwidth solutions',
        'Network monitoring and support',
        'SD-WAN implementation'
      ],
      benefits: 'Guaranteed uptime, scalable performance, cost-effective solutions'
    },
    {
      icon: 'ri-links-line',
      title: 'IoT Connectivity',
      description: 'Connect fleets, sensors, mobile teams, field techs, and equipment for real-time monitoring, tracking, and control.',
      features: [
        'Fleet tracking and management',
        'Sensor network deployment',
        'Remote equipment monitoring',
        'Real-time data collection',
        'Custom IoT solutions',
        'Cloud platform integration'
      ],
      benefits: 'Improve operational efficiency, reduce downtime, enhance visibility'
    },
    {
      icon: 'ri-chat-3-line',
      title: 'Website Chat Agents',
      description: 'Intelligent chatbots that engage website visitors, answer questions, provide product recommendations, and capture leads.',
      features: [
        'Instant visitor engagement',
        'Lead capture and qualification',
        'Product recommendations',
        'FAQ automation',
        'CRM integration',
        'Analytics and reporting'
      ],
      benefits: 'Increase conversion rates, improve customer service, capture more leads'
    },
    {
      icon: 'ri-flow-chart',
      title: 'Workflow Automation',
      description: 'Streamline repetitive tasks, automate follow-ups, and optimize business processes to increase efficiency and productivity.',
      features: [
        'Process automation design',
        'CRM and tool integration',
        'Automated follow-up sequences',
        'Task and project management',
        'Custom workflow development',
        'Performance monitoring'
      ],
      benefits: 'Save 20+ hours weekly, reduce errors, improve consistency'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discover',
      subtitle: 'Assess your needs',
      description: 'We analyze your current systems, identify pain points, and understand your business goals. A free 15-minute consultation scores your business across connectivity, automation, and cost-efficiency.',
      filled: 1
    },
    {
      number: '02',
      title: 'Plan',
      subtitle: 'Build your roadmap',
      description: 'We design a comprehensive solution integrating AI automation, connectivity, and workflow optimization — sized to your budget, team, and timeline.',
      filled: 2
    },
    {
      number: '03',
      title: 'Implement',
      subtitle: 'Deploy the solutions',
      description: 'We handle setup, configuration, and training — ensuring minimal disruption to your daily operations while maximizing results.',
      filled: 3
    },
    {
      number: '04',
      title: 'Measure',
      subtitle: 'Track your ROI',
      description: 'Set baselines, track KPIs, and watch your investment pay back in real numbers. We check in regularly and adjust as your business grows.',
      filled: 4
    }
  ];

  return (
    <div className="min-h-screen bg-background-50">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background-50 via-primary-50/30 to-background-100 pt-20 pb-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="eyebrow">What we offer</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-950 leading-tight mb-6">
                Complete business technology solutions.
              </h1>
              <p className="text-lg text-foreground-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                From AI automation to cellular consulting and internet solutions, we provide everything your business needs to modernize and thrive. Ten services, one partner, zero runaround.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-lg py-4 px-8">
                  Get Free Consultation
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
                <a href="#all-services" className="btn-outline text-lg py-4 px-8">
                  Browse All Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="all-services" className="py-20 md:py-28 bg-background-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="section-eyebrow">Ten services</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-tight mb-6">
                Everything your business needs to modernize.
              </h2>
              <p className="text-lg text-foreground-700 leading-relaxed">
                Each service is designed to solve a real operational problem — from bleeding telecom costs to missed after-hours leads and teams buried in busywork.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-background-50 rounded-2xl p-8 border border-background-200 hover:border-primary-200 transition-colors"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600 mb-5">
                    <i className={`${service.icon} text-xl`}></i>
                  </div>

                  <h3 className="text-xl font-bold text-foreground-950 mb-3">{service.title}</h3>
                  <p className="text-foreground-700 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground-900 mb-3 uppercase tracking-wider">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-foreground-700">
                          <i className="ri-check-line text-primary-600 mt-0.5 shrink-0"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="bg-background-100 rounded-xl p-4 border border-background-200">
                    <h4 className="text-sm font-semibold text-foreground-900 mb-1">Benefits</h4>
                    <p className="text-sm text-foreground-700">{service.benefits}</p>
                  </div>

                  {/* Link */}
                  {service.link && (
                    <div className="mt-5">
                      <a
                        href={service.link}
                        target={service.isExternal ? "_blank" : undefined}
                        rel={service.isExternal ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors cursor-pointer"
                      >
                        Learn More
                        <i className="ri-arrow-right-line ml-1.5"></i>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 md:py-28 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="section-eyebrow">How we work</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-tight mb-6">
                One partner. The whole technology journey.
              </h2>
              <p className="text-lg text-foreground-700 leading-relaxed">
                We follow a systematic approach so your technology transformation is successful, efficient, and delivers measurable results from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-background-100 rounded-2xl p-6 border border-background-200 hover:border-primary-200 transition-colors"
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

        {/* Stats Band */}
        <section className="py-16 bg-background-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-background-50 rounded-2xl border border-background-200 p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {[
                  { value: '500', unit: '+', label: 'Businesses served across Indiana' },
                  { value: '95', unit: '%', label: 'Client retention rate' },
                  { value: '40', unit: '%', label: 'Average cost reduction on telecom' },
                  { value: '24', unit: '/7', label: 'AI agent availability' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-foreground-950 mb-2">
                      {stat.value}
                      <span className="text-lg font-normal text-foreground-600 ml-1">{stat.unit}</span>
                    </div>
                    <div className="text-sm text-foreground-600 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-primary-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-xs font-semibold tracking-widest uppercase text-primary-300 mb-6">
                Free consultation · No credit card to start
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 leading-tight mb-6">
                Ready to transform your business?
              </h2>
              <p className="text-lg text-primary-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                You will walk away with a clear technology roadmap, your top 3 cost-saving opportunities, and a plan to capture more leads — yours to keep, even if you do not move forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-background-50 text-foreground-950 font-semibold px-8 py-4 rounded-lg hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer text-lg"
                >
                  Get Free Consultation
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center border-2 border-background-200 text-background-50 font-semibold px-8 py-4 rounded-lg hover:bg-background-50/10 transition-colors whitespace-nowrap cursor-pointer text-lg"
                >
                  Learn About Us
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