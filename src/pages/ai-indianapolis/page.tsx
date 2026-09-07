import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

interface FAQItem {
  question: string;
  answer: string;
}

interface StatCard {
  value: string;
  label: string;
  source: string;
}

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  href: string;
}

interface ReasonCard {
  icon: string;
  title: string;
  description: string;
}

export default function AIIndianapolisPage() {

  const stats: StatCard[] = [
    {
      value: '73%',
      label: 'of Indy mid-market firms have no AI strategy in place',
      source: 'Indiana Business Research Center, 2026'
    },
    {
      value: '40%',
      label: 'average telecom cost reduction with AI-driven vendor analysis',
      source: 'NevTech AI client results, 2025-2026'
    },
    {
      value: '3x',
      label: 'more after-hours leads captured by AI voice vs. voicemail alone',
      source: 'NevTech AI deployment data, 2026'
    },
    {
      value: '24/7',
      label: 'AI availability — no overtime, no sick days, no turnover',
      source: 'Standard AI agent configuration'
    }
  ];

  const services: ServiceCard[] = [
    {
      icon: 'ri-phone-line',
      title: 'AI Voice Agents & Receptionist',
      description: 'Your Indianapolis business answers every call — 24/7, no exceptions. Our Nova AI receptionist qualifies leads, books appointments, and handles common questions without your team lifting a finger. Deployed in under two weeks for most Indy businesses.',
      href: '/receptionist'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Workflow & Back-Office Automation',
      description: 'Automate accounts payable, document processing, data entry, and compliance checks. Indianapolis industrial, logistics, and professional services firms cut administrative hours by 60-80% with our custom automation builds.',
      href: '/services'
    },
    {
      icon: 'ri-database-2-line',
      title: 'AI-Powered Data Organization',
      description: 'Indianapolis businesses sit on mountains of unstructured data — contracts, emails, PDFs, spreadsheets. Our AI taxonomies make that data searchable, reportable, and actionable. Think: Google for your own company\'s knowledge.',
      href: '/ai-projects'
    },
    {
      icon: 'ri-flashlight-line',
      title: 'AI Lead Generation',
      description: 'Outbound AI voice agents that call prospects, qualify interest, and book meetings directly into your calendar. Indianapolis B2B companies are capturing 3x more qualified leads with zero additional sales hires.',
      href: '/ai-lead-generation'
    },
    {
      icon: 'ri-signal-wifi-line',
      title: 'AI Telecom & Internet Optimization',
      description: 'Our AI-powered audit analyzes your cellular, internet, and IoT bills against 1,200+ plans to find savings no human would spot. Indianapolis businesses save an average of 40% on telecom costs — often without switching providers.',
      href: '/tmobile-business'
    },
    {
      icon: 'ri-user-star-line',
      title: 'Fractional CAIO Advisory',
      description: 'Get an AI strategy leader for your Indianapolis organization without a $250K+ full-time hire. Roadmap development, vendor evaluation, team upskilling, and board-ready AI reporting — on your terms and cadence.',
      href: '/fractional-caio'
    }
  ];

  const reasons: ReasonCard[] = [
    {
      icon: 'ri-map-pin-line',
      title: 'Indianapolis-Based, Not Outsourced',
      description: 'We live and work in Indy. When you need us on-site to walk your operations floor, understand your workflow, or present to your board — we are 20 minutes away, not three time zones away.'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'No Jargon, No Runaround',
      description: 'We speak plain English and tie every recommendation to dollars saved or revenue gained. You will never hear "leveraging synergistic AI paradigms." You will hear "this saves you $3,400 a month starting in week three."'
    },
    {
      icon: 'ri-road-map-line',
      title: '30/60/90 Roadmap on Every Engagement',
      description: 'Every Indianapolis engagement starts with a documented plan showing exactly what ships when. No black boxes, no mystery timelines. You see the plan before you sign.'
    },
    {
      icon: 'ri-check-double-line',
      title: 'Verified Results, Not Vaporware',
      description: 'Our Indianapolis clients include manufacturers, healthcare SaaS companies, commercial service providers, and professional firms. We will connect you with references who will tell you exactly what worked — and what we would do differently.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Compliance & Security First',
      description: 'HIPAA-adjacent, SOC 2-aligned, and built with audit trails. Indianapolis healthcare, legal, and financial clients trust us because compliance is baked into the architecture, not bolted on afterward.'
    },
    {
      icon: 'ri-phone-find-line',
      title: 'We Actually Answer the Phone',
      description: 'Call our Indianapolis office at (317) 508-9493 and a human picks up. Not a chatbot, not a ticket system, not an offshore help desk. Try that with a national AI consulting firm and see what happens.'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is AI in Indianapolis and who is driving adoption?',
                acceptedAnswer: { '@type': 'Answer', text: 'AI in Indianapolis refers to the growing ecosystem of artificial intelligence technologies — including voice agents, workflow automation, and machine learning — being adopted by local businesses across manufacturing, healthcare, logistics, professional services, and retail. Companies like NevTech AI are leading this adoption by making enterprise-grade AI accessible to mid-market and small businesses in the Indianapolis metro area without requiring internal data science teams.' },
              },
              {
                '@type': 'Question',
                name: 'How are Indianapolis businesses using AI today?',
                acceptedAnswer: { '@type': 'Answer', text: 'Indianapolis businesses are using AI to automate lead qualification and appointment setting with voice agents, slash telecom and internet costs through AI-driven vendor analysis, streamline accounts payable and receivable, organize unstructured data for search and reporting, and deploy 24/7 AI receptionists that handle calls after hours. The most common entry points are customer-facing AI (chat, voice, scheduling) and back-office automation (document processing, data entry, compliance checks).' },
              },
              {
                '@type': 'Question',
                name: 'Why should I work with an Indianapolis-based AI partner instead of a national firm?',
                acceptedAnswer: { '@type': 'Answer', text: 'An Indianapolis-based AI partner like NevTech AI offers advantages that remote national firms cannot match: same-timezone availability for real-time collaboration, on-site walkthroughs of your operations before designing solutions, familiarity with Indiana\'s regulatory landscape, and a network of local referrals and case studies you can actually verify. Plus, we pick up the phone — no ticket queues, no offshore support, no runaround.' },
              },
              {
                '@type': 'Question',
                name: 'What industries in Indianapolis benefit most from AI?',
                acceptedAnswer: { '@type': 'Answer', text: 'In Indianapolis, the industries seeing the fastest AI ROI include manufacturing and industrial equipment, healthcare and medical devices, professional services (law, accounting, insurance), logistics and warehousing, commercial construction, and SaaS companies. Indy\'s strong manufacturing and logistics heritage makes it especially well-suited for AI-driven operational efficiency and cost reduction.' },
              },
              {
                '@type': 'Question',
                name: 'How much does AI implementation cost for an Indianapolis business?',
                acceptedAnswer: { '@type': 'Answer', text: 'AI implementation costs vary based on scope, but most Indianapolis mid-market businesses start with a focused project in the $5,000–$20,000 range. Voice agents for lead qualification, workflow automation for accounts payable, and AI search over internal documents are common starting points. NevTech AI offers a free 15-minute assessment to scope your specific needs and provide a fixed-price proposal — no surprises, no ongoing license fees unless you want them.' },
              },
              {
                '@type': 'Question',
                name: 'How long does it take to deploy AI for an Indianapolis business?',
                acceptedAnswer: { '@type': 'Answer', text: 'Most AI implementations for Indianapolis businesses go live within 2–6 weeks. Simple voice agents and automations can launch in under two weeks. More complex projects involving custom integrations, data cleanup, or multi-system workflows may take 4–6 weeks. Every engagement starts with a documented 30/60/90-day roadmap so you see exactly what ships when.' },
              },
              {
                '@type': 'Question',
                name: 'Do I need technical staff to use AI in my Indianapolis business?',
                acceptedAnswer: { '@type': 'Answer', text: 'No. NevTech AI handles the technical complexity — data preparation, model selection, integration, and deployment — so your team interacts with finished tools, not raw code. Our AI receptionist, voice agents, and automations are designed for non-technical users. If your team can use email and a calendar, they can use the AI systems we build for you.' },
              },
              {
                '@type': 'Question',
                name: 'Can AI help my Indianapolis business compete with larger national competitors?',
                acceptedAnswer: { '@type': 'Answer', text: 'Absolutely — and this is where AI levels the playing field most dramatically. An Indianapolis HVAC company with an AI voice agent can capture after-hours emergency calls just like the national chains. A local accounting firm with AI document processing can turn around client work faster than Big Four competitors. AI lets Indianapolis businesses punch above their weight class on service speed, availability, and cost efficiency without adding headcount.' },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NevTech AI',
            description: 'AI Indianapolis leader providing AI automation, voice agents, and consulting services to businesses across the Indianapolis metro area.',
            telephone: '+1-317-508-9493',
            email: 'cody@nevtech.io',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Indianapolis',
              addressRegion: 'IN',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 39.7684,
              longitude: -86.1581,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '17:00',
              },
            ],
            priceRange: '$$',
            areaServed: {
              '@type': 'City',
              name: 'Indianapolis',
            },
          }),
        }}
      />
      <div className="min-h-screen bg-background-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background-50 via-primary-50/30 to-background-100 pt-32 pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-100/80 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <i className="ri-map-pin-line"></i>
                Indianapolis, Indiana — Trusted AI Partner
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-950 leading-tight mb-6">
                AI Indianapolis —{' '}
                <span className="text-primary-600">Your Business Cannot Afford to Wait</span>
              </h1>

              <p className="text-lg md:text-xl text-foreground-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                While Indianapolis competitors deploy AI to cut telecom costs by 40%, capture 3x more after-hours leads, 
                and run 24/7 without adding headcount, most Indy businesses are still watching from the sidelines.{' '}
                <strong>NevTech AI</strong> is the AI Indianapolis partner that closes this gap — hands-on, 
                local, and accountable to results, not billable hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/contact"
                  className="bg-primary-500 text-background-50 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Get Your Free AI Assessment
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
                <a
                  href="tel:3175089493"
                  className="border-2 border-foreground-200 text-foreground-900 px-8 py-4 rounded-lg text-lg font-semibold hover:border-foreground-400 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Call (317) 508-9493
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground-600">
                <span className="flex items-center gap-2">
                  <i className="ri-check-line text-primary-600"></i>
                  Free 15-minute assessment
                </span>
                <span className="flex items-center gap-2">
                  <i className="ri-check-line text-primary-600"></i>
                  No obligation
                </span>
                <span className="flex items-center gap-2">
                  <i className="ri-check-line text-primary-600"></i>
                  Fixed-price proposals
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section — The AI Gap is Real */}
        <section className="py-20 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">
                AI Indianapolis — The Adoption Gap Is Already Showing in Margins
              </h2>
              <p className="text-lg text-foreground-700 max-w-2xl mx-auto">
                Indianapolis businesses that adopted AI in 2025 are already pulling ahead. 
                Here is what the data shows for the Indy market right now.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background-50 border border-background-200 rounded-xl p-6 text-center hover:border-primary-200 transition-colors"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-3">{stat.value}</div>
                  <div className="text-sm text-foreground-800 font-medium mb-3">{stat.label}</div>
                  <div className="text-xs text-foreground-500 italic">{stat.source}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Is AI in Indianapolis — Educational Section */}
        <section className="py-20 bg-background-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-8 text-center">
                What Is AI In Indianapolis — And Why Now?
              </h2>

              <div className="space-y-6 text-foreground-700 leading-relaxed">
                <p className="text-lg">
                  <strong>AI in Indianapolis</strong> is not a futuristic concept — it is live, deployed, 
                  and producing measurable ROI for Indy businesses across manufacturing, healthcare, professional 
                  services, logistics, and retail. From AI voice agents that answer every call after hours to 
                  workflow automations that process invoices in seconds instead of hours, the Indianapolis AI 
                  landscape has matured rapidly over the last 18 months.
                </p>

                <p>
                  What changed? Three things. First, the technology reached a tipping point where it actually 
                  works reliably — AI voice agents sound human, document processing is accurate enough for 
                  compliance, and automations integrate with the tools Indianapolis businesses already use 
                  (QuickBooks, Salesforce, HubSpot, ServiceTitan). Second, the cost dropped dramatically — 
                  AI implementation that would have cost $100K+ three years ago is now accessible for 
                  $5K–$20K. Third, the competitive pressure became impossible to ignore — when your 
                  Indianapolis competitor starts capturing leads you never see and operating at margins you 
                  cannot match, waiting stops being an option.
                </p>

                <p>
                  <strong>NevTech AI</strong> is the leading AI Indianapolis implementation partner for 
                  mid-market and small businesses. We do not sell AI as a concept — we ship AI as a 
                  working system. Every engagement starts with a free assessment, produces a documented 
                  30/60/90-day roadmap, and ends with your team using tools that make money or save money 
                  from day one of go-live.
                </p>
              </div>

              {/* Local context highlight box */}
              <div className="mt-10 bg-background-50 border border-background-200 rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 shrink-0">
                    <i className="ri-building-line text-xl text-primary-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground-950 mb-2">
                      Indianapolis is Uniquely Positioned for AI Adoption
                    </h3>
                    <p className="text-foreground-700 leading-relaxed">
                      Indianapolis has a rare combination of strong legacy industries (manufacturing, logistics, 
                      healthcare) and a growing tech sector that makes AI implementation faster and more impactful 
                      here than in most midwestern cities. The talent is here. The need is here. The only missing 
                      piece for most Indianapolis businesses is an implementation partner who speaks their language 
                      — not Silicon Valley jargon, but the language of operational efficiency, compliance, margins, 
                      and competitive positioning that Indy business owners care about.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section — What We Do in Indianapolis */}
        <section className="py-20 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">
                AI Indianapolis Services — What We Actually Build
              </h2>
              <p className="text-lg text-foreground-700 max-w-2xl mx-auto">
                No abstract consulting decks. No "AI readiness assessments" that produce 60-page PDFs nobody reads. 
                Here is what we build for Indianapolis businesses — and what it does for your bottom line.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.title}
                  to={service.href}
                  className="group bg-background-50 border border-background-200 rounded-xl p-6 hover:border-primary-200 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 mb-5 group-hover:bg-primary-500 transition-colors">
                    <i className={`${service.icon} text-xl text-primary-600 group-hover:text-background-50 transition-colors`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground-950 mb-3 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                  <p className="text-sm text-foreground-700 leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary-600">
                    Learn more
                    <i className="ri-arrow-right-line text-xs"></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose a Local AI Partner */}
        <section className="py-20 bg-background-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">
                Why Indianapolis Businesses Choose a Local AI Partner
              </h2>
              <p className="text-lg text-foreground-700 max-w-2xl mx-auto">
                National AI consulting firms charge national prices and deliver remote relationships. 
                Here is why Indianapolis companies pick NevTech AI instead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="bg-background-50 border border-background-200 rounded-xl p-6"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-100 mb-4">
                    <i className={`${reason.icon} text-lg text-accent-600`}></i>
                  </div>
                  <h3 className="text-base font-semibold text-foreground-950 mb-2">{reason.title}</h3>
                  <p className="text-sm text-foreground-700 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section with real FAQPage schema */}
        <section className="py-20 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4 text-center">
                AI Indianapolis — Frequently Asked Questions
              </h2>
              <p className="text-lg text-foreground-700 text-center mb-12 max-w-xl mx-auto">
                Straight answers to the questions Indianapolis business owners ask before starting their AI journey.
              </p>

              <div className="space-y-4">
                {[
                  {
                    question: 'What is AI in Indianapolis and who is driving adoption?',
                    answer: 'AI in Indianapolis refers to the growing ecosystem of artificial intelligence technologies — including voice agents, workflow automation, and machine learning — being adopted by local businesses across manufacturing, healthcare, logistics, professional services, and retail. Companies like NevTech AI are leading this adoption by making enterprise-grade AI accessible to mid-market and small businesses in the Indianapolis metro area without requiring internal data science teams.'
                  },
                  {
                    question: 'How are Indianapolis businesses using AI today?',
                    answer: 'Indianapolis businesses are using AI to automate lead qualification and appointment setting with voice agents, slash telecom and internet costs through AI-driven vendor analysis, streamline accounts payable and receivable, organize unstructured data for search and reporting, and deploy 24/7 AI receptionists that handle calls after hours. The most common entry points are customer-facing AI (chat, voice, scheduling) and back-office automation (document processing, data entry, compliance checks).'
                  },
                  {
                    question: 'Why should I work with an Indianapolis-based AI partner instead of a national firm?',
                    answer: 'An Indianapolis-based AI partner like NevTech AI offers advantages that remote national firms cannot match: same-timezone availability for real-time collaboration, on-site walkthroughs of your operations before designing solutions, familiarity with Indiana\'s regulatory landscape, and a network of local referrals and case studies you can actually verify. Plus, we pick up the phone — no ticket queues, no offshore support, no runaround.'
                  },
                  {
                    question: 'What industries in Indianapolis benefit most from AI?',
                    answer: 'In Indianapolis, the industries seeing the fastest AI ROI include manufacturing and industrial equipment, healthcare and medical devices, professional services (law, accounting, insurance), logistics and warehousing, commercial construction, and SaaS companies. Indy\'s strong manufacturing and logistics heritage makes it especially well-suited for AI-driven operational efficiency and cost reduction.'
                  },
                  {
                    question: 'How much does AI implementation cost for an Indianapolis business?',
                    answer: 'AI implementation costs vary based on scope, but most Indianapolis mid-market businesses start with a focused project in the $5,000–$20,000 range. Voice agents for lead qualification, workflow automation for accounts payable, and AI search over internal documents are common starting points. NevTech AI offers a free 15-minute assessment to scope your specific needs and provide a fixed-price proposal — no surprises, no ongoing license fees unless you want them.'
                  },
                  {
                    question: 'How long does it take to deploy AI for an Indianapolis business?',
                    answer: 'Most AI implementations for Indianapolis businesses go live within 2–6 weeks. Simple voice agents and automations can launch in under two weeks. More complex projects involving custom integrations, data cleanup, or multi-system workflows may take 4–6 weeks. Every engagement starts with a documented 30/60/90-day roadmap so you see exactly what ships when.'
                  },
                  {
                    question: 'Do I need technical staff to use AI in my Indianapolis business?',
                    answer: 'No. NevTech AI handles the technical complexity — data preparation, model selection, integration, and deployment — so your team interacts with finished tools, not raw code. Our AI receptionist, voice agents, and automations are designed for non-technical users. If your team can use email and a calendar, they can use the AI systems we build for you.'
                  },
                  {
                    question: 'Can AI help my Indianapolis business compete with larger national competitors?',
                    answer: 'Absolutely — and this is where AI levels the playing field most dramatically. An Indianapolis HVAC company with an AI voice agent can capture after-hours emergency calls just like the national chains. A local accounting firm with AI document processing can turn around client work faster than Big Four competitors. AI lets Indianapolis businesses punch above their weight class on service speed, availability, and cost efficiency without adding headcount.'
                  }
                ].map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-background-50 border border-background-200 rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-background-100 transition-colors list-none">
                      <h3 className="text-base font-semibold text-foreground-950 pr-6">{faq.question}</h3>
                      <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-background-200 group-open:bg-primary-100 transition-colors">
                        <i className="ri-add-line text-sm text-foreground-600 group-open:hidden"></i>
                        <i className="ri-subtract-line text-sm text-primary-600 hidden group-open:block"></i>
                      </span>
                    </summary>
                    <div className="px-6 pb-5">
                      <p className="text-foreground-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-primary-500/10 via-background-100 to-accent-500/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">
                Ready to See What AI Indianapolis Can Do for Your Business?
              </h2>
              <p className="text-lg text-foreground-700 mb-8 max-w-xl mx-auto leading-relaxed">
                You will get a 15-minute call with a real person in Indianapolis — not a demo, 
                not a sales pitch, not a chatbot. We will talk about your business, what is working, 
                what is not, and whether AI makes sense for you right now. If it does, you will walk 
                away with a fixed-price proposal and a 30/60/90 roadmap. If it does not, we will tell 
                you that too.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link
                  to="/contact"
                  className="bg-primary-500 text-background-50 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Get Your Free Assessment
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
                <a
                  href="tel:3175089493"
                  className="border-2 border-foreground-200 text-foreground-900 px-8 py-4 rounded-lg text-lg font-semibold hover:border-foreground-400 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Call (317) 508-9493
                </a>
              </div>

              <div className="bg-background-50 border border-background-200 rounded-xl p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 mx-auto mb-3">
                      <i className="ri-map-pin-line text-lg text-primary-600"></i>
                    </div>
                    <div className="text-sm font-semibold text-foreground-950 mb-1">Indianapolis Office</div>
                    <div className="text-sm text-foreground-600">Indianapolis, IN · USA</div>
                  </div>
                  <div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 mx-auto mb-3">
                      <i className="ri-mail-line text-lg text-primary-600"></i>
                    </div>
                    <div className="text-sm font-semibold text-foreground-950 mb-1">Email Us</div>
                    <a href="mailto:cody@nevtech.io" className="text-sm text-foreground-600 hover:text-primary-600 transition-colors">cody@nevtech.io</a>
                  </div>
                  <div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 mx-auto mb-3">
                      <i className="ri-calendar-check-line text-lg text-primary-600"></i>
                    </div>
                    <div className="text-sm font-semibold text-foreground-950 mb-1">Schedule Directly</div>
                    <a
                      href="https://calendly.com/cody-nevtech/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground-600 hover:text-primary-600 transition-colors"
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
    </>
  );
}