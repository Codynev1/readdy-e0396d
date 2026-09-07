import { SITE_URL, LOGO_URL, absoluteUrl } from './site';

export interface RouteSeo {
  title: string;
  description: string;
  keywords: string;
  /** Canonical path, e.g. '/services' */
  path: string;
  ogType?: string;
}

// Source of truth for runtime <head> metadata. The authoritative embed_code SEO
// data was empty for this build, so these preserve the existing reasonable site
// data and add sensible defaults for every public route.
export const seoByPath: Record<string, RouteSeo> = {
  '/': {
    title: 'AI Indianapolis | NevTech AI — Automation & Internet',
    description:
      'AI Indianapolis leader NevTech AI helps businesses with AI voice agents, cellular consulting, business internet, IoT connectivity, and workflow automation. Serving Indianapolis and Indiana with AI solutions that save money and capture more leads.',
    keywords:
      'AI Indianapolis, AI automation Indianapolis, AI voice agents Indiana, cellular consulting Indianapolis, business internet Indianapolis, workflow automation Indiana',
    path: '/',
  },
  '/services': {
    title: 'AI Services in Indianapolis & Indiana | NevTech AI',
    description:
      'Explore NevTech AI services — AI voice agents, workflow automation, AI lead generation, fractional CAIO, and business internet consulting for Indianapolis and Indiana businesses.',
    keywords: 'AI services Indianapolis, AI consulting Indiana, AI automation, AI voice agents, business AI services NevTech',
    path: '/services',
  },
  '/about': {
    title: 'About NevTech AI | Indianapolis AI Company',
    description:
      'Meet NevTech AI, the Indianapolis-based AI implementation partner modernizing small and mid-market businesses with automation, AI voice agents, and workflow optimization.',
    keywords: 'about NevTech AI, Indianapolis AI company, AI implementation partner, AI consultants Indiana',
    path: '/about',
  },
  '/contact': {
    title: 'Contact NevTech AI | Free AI Assessment Indianapolis',
    description:
      'Get a free 15-minute AI assessment from NevTech AI. Call (317) 508-9493 or reach out to discuss AI voice agents, automation, and AI consulting for your Indianapolis or Indiana business.',
    keywords: 'contact NevTech AI, free AI assessment Indianapolis, AI consultation Indiana',
    path: '/contact',
  },
  '/compliance': {
    title: 'Security & Compliance | NevTech AI Indianapolis',
    description:
      'NevTech AI takes data security, compliance, and privacy seriously. Learn about our security practices for AI projects across Indiana, including HIPAA-conscious healthcare AI.',
    keywords: 'NevTech AI security, AI compliance Indiana, data security Indianapolis, HIPAA AI',
    path: '/compliance',
  },
  '/ai-lead-generation': {
    title: 'AI Lead Generation Services Indianapolis | NevTech AI',
    description:
      'Automated AI lead generation for Indianapolis and Indiana businesses. Capture, qualify, and convert more leads with AI voice agents, chatbots, and outbound automation from NevTech AI.',
    keywords: 'AI lead generation Indianapolis, AI lead gen Indiana, AI appointment setting, AI outbound automation',
    path: '/ai-lead-generation',
  },
  '/ai-indianapolis': {
    title: 'AI Indianapolis | Local AI Services & Automation | NevTech AI',
    description:
      'NevTech AI helps Indianapolis businesses implement AI voice agents, workflow automation, and AI receptionists. Local partner, same-timezone support, and results that save money.',
    keywords: 'AI Indianapolis, AI services Indianapolis, AI automation Indianapolis, local AI partner Indiana',
    path: '/ai-indianapolis',
  },
  '/ai-services-indiana': {
    title: 'AI Services Indiana | AI Consulting & Automation | NevTech AI',
    description:
      'Full-service AI provider for Indiana businesses. From AI consulting and voice agents to workflow automation and AI receptionists, NevTech AI delivers measurable AI ROI across the state.',
    keywords: 'AI services Indiana, AI company Indiana, AI consulting Indiana, AI automation Indiana',
    path: '/ai-services-indiana',
  },
  '/ai-consulting-indianapolis': {
    title: 'AI Consulting Indianapolis | NevTech AI',
    description:
      'Expert AI consulting in Indianapolis. NevTech AI helps Indy businesses identify, scope, and implement AI automation, voice agents, and workflow tools that cut costs and capture leads.',
    keywords: 'AI consulting Indianapolis, AI consultant Indy, AI strategy Indiana, AI implementation Indianapolis',
    path: '/ai-consulting-indianapolis',
  },
  '/ai-consulting-indiana': {
    title: 'AI Consulting Indiana | AI Strategy & Implementation | NevTech AI',
    description:
      'AI consulting across Indiana. NevTech AI provides AI strategy, implementation, and managed automation for businesses in Indianapolis, Fort Wayne, Evansville, and beyond.',
    keywords: 'AI consulting Indiana, AI strategy Indiana, AI implementation Indiana, AI advisors Indiana',
    path: '/ai-consulting-indiana',
  },
  '/ai-automation-indianapolis': {
    title: 'AI Automation Indianapolis | Workflow Automation | NevTech AI',
    description:
      'AI automation for Indianapolis businesses. Automate lead gen, document processing, and back-office workflows with NevTech AI — save hours weekly and reduce operating costs.',
    keywords: 'AI automation Indianapolis, workflow automation Indy, business process automation Indiana, AI tools Indianapolis',
    path: '/ai-automation-indianapolis',
  },
  '/ai-automation-indiana': {
    title: 'AI Automation Indiana | Business Process Automation | NevTech AI',
    description:
      'AI workflow automation across Indiana. NevTech AI builds custom automations that eliminate manual work, reduce errors, and let Indiana teams focus on growth.',
    keywords: 'AI automation Indiana, business automation Indiana, workflow automation Indiana, AI process automation',
    path: '/ai-automation-indiana',
  },
  '/ai-voice-agents-indiana': {
    title: 'AI Voice Agents Indiana | AI Receptionist & Call Automation | NevTech AI',
    description:
      'Deploy AI voice agents in Indiana that answer calls, qualify leads, and book appointments 24/7. NevTech AI builds custom AI phone agents that capture missed calls and drive revenue.',
    keywords: 'AI voice agents Indiana, AI phone agent Indiana, AI receptionist Indiana, AI calling automation',
    path: '/ai-voice-agents-indiana',
  },
  '/ai-agent-development-indiana': {
    title: 'AI Agent Development Indiana | Custom AI Agents | NevTech AI',
    description:
      'Custom AI agent development for Indiana businesses. NevTech AI designs and deploys AI agents for sales, support, operations, and data — tailored to your workflows.',
    keywords: 'AI agent development Indiana, custom AI agents Indiana, AI agent builder, AI automation Indiana',
    path: '/ai-agent-development-indiana',
  },
  '/custom-ai-development-indiana': {
    title: 'Custom AI Development Indiana | Bespoke AI Solutions | NevTech AI',
    description:
      'Custom AI development in Indiana. NevTech AI builds tailored AI tools, RAG search, document processing, and automation solutions for businesses across the Hoosier state.',
    keywords: 'custom AI development Indiana, bespoke AI solutions Indiana, AI software development Indiana, RAG AI Indiana',
    path: '/custom-ai-development-indiana',
  },
  '/ai-law-firms-indiana': {
    title: 'AI for Law Firms Indiana | Legal AI Automation | NevTech AI',
    description:
      'AI solutions for law firms in Indiana. Confidential AI document processing, intake automation, and workflow tools for legal teams — built with security and compliance first.',
    keywords: 'AI for law firms Indiana, legal AI Indiana, AI document processing law firms, legal automation Indiana',
    path: '/ai-law-firms-indiana',
  },
  '/best-ai-companies-indianapolis': {
    title: 'Best AI Companies in Indianapolis | NevTech AI',
    description:
      'Find the best AI companies in Indianapolis. NevTech AI ranks among Indy\u2019s top AI partners for voice agents, automation, and AI consulting — see why local businesses choose us.',
    keywords: 'best AI companies Indianapolis, top AI companies Indianapolis, AI partner Indy, AI services Indianapolis',
    path: '/best-ai-companies-indianapolis',
  },
  '/ai-healthcare-indiana': {
    title: 'AI for Healthcare Indiana | HIPAA-Conscious AI | NevTech AI',
    description:
      'AI for healthcare providers in Indiana. Automate patient intake, reduce no-shows, and streamline admin workflows with HIPAA-conscious AI solutions from NevTech AI.',
    keywords: 'AI for healthcare Indiana, healthcare AI Indiana, HIPAA AI, medical AI automation Indiana',
    path: '/ai-healthcare-indiana',
  },
  '/ai-manufacturing-indiana': {
    title: 'AI for Manufacturing Indiana | Factory & Ops Automation | NevTech AI',
    description:
      'AI for manufacturers in Indiana. Automate RFQs, streamline quoting, and reduce operational costs with AI workflow automation from NevTech AI.',
    keywords: 'AI for manufacturing Indiana, manufacturing AI Indiana, factory automation AI, industrial AI Indiana',
    path: '/ai-manufacturing-indiana',
  },
  '/ai-logistics-indiana': {
    title: 'AI for Logistics Indiana | Supply Chain Automation | NevTech AI',
    description:
      'AI for logistics and supply chain in Indiana. Capture carrier calls, automate dispatch workflows, and optimize operations with NevTech AI voice agents and automation.',
    keywords: 'AI for logistics Indiana, supply chain AI Indiana, logistics automation AI, carrier call automation',
    path: '/ai-logistics-indiana',
  },
  '/ai-home-services-indiana': {
    title: 'AI for Home Services Indiana | 24/7 Lead Capture | NevTech AI',
    description:
      'AI for home services in Indiana. Capture after-hours emergency jobs, book appointments automatically, and grow revenue with AI voice agents from NevTech AI.',
    keywords: 'AI for home services Indiana, HVAC AI, plumbing AI agents, home service lead capture Indiana',
    path: '/ai-home-services-indiana',
  },
  '/ai-construction-indiana': {
    title: 'AI for Construction Indiana | Bids & Admin Automation | NevTech AI',
    description:
      'AI for construction companies in Indiana. Automate bid management, submittals, and back-office workflows with NevTech AI to win more projects with less overhead.',
    keywords: 'AI for construction Indiana, construction AI Indiana, bid automation AI, construction admin AI',
    path: '/ai-construction-indiana',
  },
  '/get-leads': {
    title: 'Get More Leads with AI | AI Lead Capture Indianapolis | NevTech AI',
    description:
      'Get more leads with AI. NevTech AI helps Indianapolis and Indiana businesses capture, qualify, and convert leads 24/7 with AI voice agents and automation.',
    keywords: 'get more leads AI, AI lead capture Indianapolis, AI lead generation Indiana',
    path: '/get-leads',
  },
  '/tmobile-business': {
    title: 'T-Mobile Business Internet & Lines | NevTech AI',
    description:
      'T-Mobile business internet, business lines, and IoT connectivity consulting with NevTech AI. Save on cellular and internet costs for your Indiana business.',
    keywords: 'T-Mobile business internet, T-Mobile business lines Indianapolis, business IoT connectivity Indiana, telecom consulting',
    path: '/tmobile-business',
  },
  '/intake-form': {
    title: 'AI Project Intake | NevTech AI',
    description:
      'Tell NevTech AI about your AI project. Start with our intake form and get a free assessment for AI voice agents, automation, and custom AI development in Indiana.',
    keywords: 'AI project intake, AI assessment Indianapolis, start AI project Indiana',
    path: '/intake-form',
  },
  '/support': {
    title: 'Support | NevTech AI Indianapolis',
    description:
      'Get support for your NevTech AI projects and products. Contact our Indianapolis team for assistance with AI automation, voice agents, and managed services.',
    keywords: 'NevTech AI support, AI support Indianapolis, AI managed services Indiana',
    path: '/support',
  },
  '/terms': {
    title: 'Terms of Service | NevTech AI',
    description:
      'Read the terms of service for NevTech AI products and services, including AI automation, voice agents, and consulting engagements in Indiana.',
    keywords: 'NevTech AI terms, terms of service, AI services terms Indiana',
    path: '/terms',
  },
  '/privacy': {
    title: 'Privacy Policy | NevTech AI',
    description:
      'NevTech AI privacy policy. Learn how we collect, use, and protect data for AI services, automation, and consulting across Indianapolis and Indiana.',
    keywords: 'NevTech AI privacy, privacy policy, data protection Indiana AI',
    path: '/privacy',
  },
  '/fractional-caio': {
    title: 'Fractional CAIO | AI Leadership on Demand | NevTech AI',
    description:
      'Hire a fractional Chief AI Officer (CAIO). NevTech AI provides part-time AI leadership, strategy, and governance for Indianapolis and Indiana businesses.',
    keywords: 'fractional CAIO, Chief AI Officer on demand, AI leadership Indianapolis, AI strategy Indiana',
    path: '/fractional-caio',
  },
  '/ai-projects': {
    title: 'AI Projects & Services | NevTech AI Indianapolis',
    description:
      'Explore NevTech AI projects — clean data & taxonomy, internal AI search (RAG), custom tools, earnings call automation, and meeting action tracking for businesses.',
    keywords: 'AI projects Indianapolis, RAG AI search, data taxonomy AI, custom AI tools Indiana',
    path: '/ai-projects',
  },
  '/products': {
    title: 'AI Products | NevTech VMS & AI Tools | NevTech AI',
    description:
      'Discover NevTech AI products — NevTech VMS and AI tools that help businesses automate, capture leads, and reduce costs across Indianapolis and Indiana.',
    keywords: 'NevTech VMS, AI products Indianapolis, AI tools Indiana, business AI products',
    path: '/products',
  },
  '/case-studies': {
    title: 'Case Studies | NevTech AI Indianapolis',
    description:
      'See how Indianapolis and Indiana businesses use NevTech AI to automate workflows, capture leads, and cut costs with AI voice agents and automation.',
    keywords: 'AI case studies Indiana, NevTech AI results, AI success stories Indianapolis',
    path: '/case-studies',
  },
  '/rapid-mvp': {
    title: 'Rapid MVP Development | AI Prototypes in Weeks | NevTech AI',
    description:
      'Launch a rapid AI MVP in weeks. NevTech AI builds functional AI prototypes and automations for Indianapolis and Indiana businesses to validate ideas fast.',
    keywords: 'rapid MVP development, AI prototype Indiana, MVP AI Indianapolis, build AI MVP',
    path: '/rapid-mvp',
  },
  '/receptionist': {
    title: 'Nova AI Receptionist | 24/7 AI Phone Answering | NevTech AI',
    description:
      'Nova AI Receptionist answers your calls 24/7, qualifies leads, and books appointments. The AI receptionist for Indianapolis and Indiana businesses.',
    keywords: 'AI receptionist Indianapolis, Nova AI receptionist, AI phone answering Indiana, virtual receptionist AI',
    path: '/receptionist',
  },
  '/nevtech-ai-what-a-nevada-ai-receptionist-does-after-hours': {
    title: 'NevTech AI: What a Nevada AI Receptionist Does After Hours',
    description:
      "When your office closes, a NevTech AI receptionist doesn't just take a message. It intelligently answers questions, schedules appointments, and routes urgent calls.",
    keywords:
      'NevTech AI receptionist, after-hours AI receptionist, Nevada AI receptionist, AI phone answering, AI appointment scheduling',
    path: '/nevtech-ai-what-a-nevada-ai-receptionist-does-after-hours',
  },
  '/how-we-build-software-now': {
    title: 'How We Build Software Now: Faster Delivery With a Paper Trail',
    description:
      'AI can write code in hours, but most projects still take months. NevTech explains how its AI-native process gets you to a working MVP in weeks — and the dedicated team that takes over maintenance and support after launch.',
    keywords: 'AI development, custom software, process, Indianapolis, AI-native software development, rapid MVP',
    path: '/how-we-build-software-now',
    ogType: 'article',
  },
  '/ai-automation-agencies': {
    title: 'AI Automation Agencies in Indianapolis | NevTech AI',
    description:
      'An AI automation agency helps Indianapolis businesses streamline operations and improve service with custom AI solutions. NevTech AI partners with you to identify opportunities and build tailored automations that solve unique challenges.',
    keywords:
      'AI automation agency, Indianapolis AI automation, custom AI solutions, AI agency Indianapolis, business automation Indiana',
    path: '/ai-automation-agencies',
    ogType: 'article',
  },
  '/data-and-ai-consultant-indianapolis': {
    title: 'NevTech AI: Data & AI Consultant in Indianapolis',
    description:
      'NevTech AI is your local data and AI consultant in Indianapolis. We help businesses harness the power of data analytics, machine learning, and custom AI solutions.',
    keywords:
      'data consultant Indianapolis, AI consultant Indianapolis, data analytics, machine learning, custom AI solutions',
    path: '/data-and-ai-consultant-indianapolis',
    ogType: 'article',
  },
  '/faq': {
    title: 'FAQ | AI Services Indianapolis | NevTech AI',
    description:
      'Frequently asked questions about NevTech AI — pricing, timelines, security, and how AI automation and voice agents work for Indianapolis and Indiana businesses.',
    keywords: 'NevTech AI FAQ, AI questions Indianapolis, AI automation FAQ Indiana',
    path: '/faq',
  },
  '/pricing': {
    title: 'Pricing | AI Services & Products | NevTech AI',
    description:
      'Transparent pricing for NevTech AI services and products. See AI automation, voice agent, and consulting pricing for Indianapolis and Indiana businesses.',
    keywords: 'NevTech AI pricing, AI service cost Indiana, AI automation pricing Indianapolis',
    path: '/pricing',
  },
  '/use-cases': {
    title: 'AI Use Cases | Business Automation | NevTech AI',
    description:
      'Explore AI use cases for Indianapolis and Indiana businesses — voice agents, lead gen, document processing, RAG search, and workflow automation across industries.',
    keywords: 'AI use cases Indiana, business AI applications Indianapolis, AI automation examples',
    path: '/use-cases',
  },
};

export const defaultSeo: RouteSeo = {
  title: 'NevTech AI | AI Automation, Voice Agents & Consulting',
  description:
    'NevTech AI helps businesses automate workflows, capture leads with AI voice agents, and reduce costs with custom AI solutions across Indianapolis and Indiana.',
  keywords: 'NevTech AI, AI automation, AI voice agents, AI consulting Indiana',
  path: '/',
};

// Schema.org JSON-LD per route. Pages that already inject their own richer schema
// inline (the SEO landing pages, ai-indianapolis, faq) are intentionally left with
// an empty array here to avoid duplicate schema blocks. This module is separate
// from the runtime <head> meta manager on purpose.
function serviceSchema(path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'NevTech AI',
    url: absoluteUrl(path),
    image: LOGO_URL,
    telephone: '+1-317-508-9493',
    email: 'cody@nevtech.io',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Indianapolis',
      addressRegion: 'IN',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 39.7684, longitude: -86.1581 },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    areaServed: { '@type': 'State', name: 'Indiana' },
  };
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NevTech AI',
  url: SITE_URL,
  logo: LOGO_URL,
  description:
    'Modernizing small businesses with AI automation, cellular consulting, and workflow optimization',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Indianapolis',
    addressRegion: 'IN',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-317-508-9493',
    email: 'cody@nevtech.io',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  sameAs: ['https://www.linkedin.com/company/nevtech-ai'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NevTech AI',
  url: SITE_URL,
};

export const schemaByPath: Record<string, object[]> = {
  '/': [organizationSchema, websiteSchema],
  '/services': [serviceSchema('/services')],
  '/about': [organizationSchema],
  '/contact': [serviceSchema('/contact')],
  '/fractional-caio': [serviceSchema('/fractional-caio')],
  '/ai-lead-generation': [serviceSchema('/ai-lead-generation')],
  '/use-cases': [serviceSchema('/use-cases')],
  '/get-leads': [serviceSchema('/get-leads')],
  '/tmobile-business': [serviceSchema('/tmobile-business')],
  '/ai-projects': [serviceSchema('/ai-projects')],
  '/products': [serviceSchema('/products')],
  '/case-studies': [serviceSchema('/case-studies')],
  '/rapid-mvp': [serviceSchema('/rapid-mvp')],
  '/receptionist': [serviceSchema('/receptionist')],
  '/pricing': [serviceSchema('/pricing')],
};