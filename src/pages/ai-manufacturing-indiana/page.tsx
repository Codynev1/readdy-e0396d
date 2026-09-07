import SeoLandingPage, { SeoPageConfig } from '@/pages/seo/SeoLandingPage';

const config: SeoPageConfig = {
  badge: 'Indiana — AI for Manufacturing & Industry',
  heroTitle: 'AI for Manufacturing Indiana —',
  heroTitleAccent: 'Cut Downtime. Streamline Ops. Protect Your Margins.',
  heroSubtitle:
    'NevTech AI builds AI for Indiana manufacturers — document and compliance automation, quote and order processing, quality data organization, voice agents for supplier and customer calls, and back-office workflow automation — designed around how your plant actually runs.',
  heroParagraphs: [],
  statsTitle: 'AI for Manufacturing Indiana — The Efficiency Gap',
  statsSubtitle:
    'Indiana manufacturers that automated their back-office are protecting margins in a tight market. Here is what the data shows.',
  stats: [
    {
      value: '60-80%',
      label: 'reduction in time on quoting, order entry, and document tasks',
      source: 'NevTech AI manufacturing client results, 2025-2026',
    },
    {
      value: '24/7',
      label: 'AI call coverage for suppliers, customers, and after-hours orders',
      source: 'Standard AI agent configuration',
    },
    {
      value: '90%+',
      label: 'accuracy on custom quote, spec, and document extraction',
      source: 'NevTech AI deployment data, 2026',
    },
    {
      value: '10-25%',
      label: 'typical administrative-cost savings on automated workflows',
      source: 'NevTech AI manufacturing engagements, 2026',
    },
  ],
  whatIsTitle: 'What Is AI for Manufacturing in Indiana — and Why It Matters',
  whatIsParagraphs: [
    '<strong>AI for manufacturing in Indiana</strong> means applying artificial intelligence to the vast administrative workload that surrounds the shop floor — RFQs and quoting, purchase orders, incoming supplier documents, compliance paperwork, inspection and quality records, and the endless data entry that ties them together. Done right, it keeps your engineering and office teams focused on building, not on typing.',
    'Indiana manufacturers live on razor-thin margins, and the back-office is where profit quietly disappears: manual quoting that takes days, orders re-keyed by hand, compliance documents buried in email, and calls that go unanswered after hours. AI attacks exactly these costs, cutting hours of administrative work while improving accuracy and response times.',
    '<strong>NevTech AI</strong> builds AI for Indiana manufacturers with the real world in mind. We automate the paperwork that slows you down, connect to the tools you already use, and deploy voice agents that capture supplier and customer calls. Every engagement starts with a free assessment and a documented plan tailored to your operation.',
  ],
  highlightTitle: 'Indiana Manufacturing Runs on Margin — Protect It with AI',
  highlightText:
    'In manufacturing, profit is decided in the back office as much as on the floor. Every day a quote sits in a queue, every PO re-keyed by hand, every compliance doc lost in email — that is margin walking out the door. AI in Indiana manufacturing automates the paperwork, captures the calls, and organizes the records, so your team ships more and types less.',
  servicesTitle: 'AI for Manufacturing Indiana — What We Build',
  servicesSubtitle:
    'Practical AI for the specific work your Indiana operation does every day. Here is what we deploy.',
  services: [
    {
      icon: 'ri-file-list-3-line',
      title: 'Quote, PO & Order Automation',
      description: 'AI that extracts RFQs, drafts quotes, processes purchase orders, and updates your systems — cutting turnaround from days to minutes.',
      href: '/ai-projects',
    },
    {
      icon: 'ri-file-text-line',
      title: 'Compliance & Document Processing',
      description: 'Automate incoming certs, inspection reports, and compliance paperwork so records are organized, searchable, and audit-ready.',
      href: '/compliance',
    },
    {
      icon: 'ri-phone-line',
      title: 'AI Voice for Suppliers & Customers',
      description: 'Answer supplier and customer calls 24/7, take after-hours orders, and route them to the right team — never miss a call again.',
      href: '/receptionist',
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Back-Office Workflow Automation',
      description: 'Automate data entry, scheduling, and recurring workflows across accounting, HR, and operations — cutting hours of admin work weekly.',
      href: '/services',
    },
    {
      icon: 'ri-database-2-line',
      title: 'Quality & Data Organization',
      description: 'Make your inspection data, specifications, and historical records searchable and reportable — like Google for your own plant data.',
      href: '/ai-projects',
    },
    {
      icon: 'ri-road-map-line',
      title: 'Fractional CAIO & Roadmapping',
      description: 'Get an AI roadmap and advisory for your Indiana operation without a full-time hire — prioritized by dollars saved or revenue gained.',
      href: '/fractional-caio',
    },
  ],
  whyTitle: 'Why Indiana Manufacturers Choose NevTech AI',
  whySubtitle:
    'Indiana plants want AI that is practical, connected to their systems, and built around real workflows. Here is how we deliver.',
  reasons: [
    {
      icon: 'ri-map-pin-line',
      title: 'Local, Floor-Aware, Present',
      description: 'We are based in Indiana and understand industrial operations. When you need us on-site to walk the floor, we are 20 minutes away, not three time zones away.',
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Built Around Your Real Workflow',
      description: 'We automate the actual quoting, ordering, and compliance tasks your team does every day — not abstract "digital transformation" projects.',
    },
    {
      icon: 'ri-plug-line',
      title: 'Connects to Your Existing Tools',
      description: 'Our builds integrate with the ERP, accounting, and shop systems you already use — no rip-and-replace, no forklifting your stack.',
    },
    {
      icon: 'ri-cash-line',
      title: 'Prioritized by Dollars Saved',
      description: 'We rank every opportunity by ROI, so your first AI project is the one that saves the most money fastest.',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Compliance & Security First',
      description: 'We build with access controls, audit trails, and data handling that keep your IP and compliance records protected.',
    },
    {
      icon: 'ri-phone-find-line',
      title: 'We Answer the Phone',
      description: 'Call us at (317) 508-9493 and a human picks up. We treat your operation like a partner, not a ticket number.',
    },
  ],
  faqTitle: 'AI for Manufacturing Indiana — Frequently Asked Questions',
  faqSubtitle: 'Straight answers to the questions Indiana manufacturers ask before adopting AI.',
  faqs: [
    {
      question: 'Will AI disrupt my existing shop or ERP systems?',
      answer: 'No. We build AI that connects to the systems you already use — your ERP, accounting, and shop tools — and automates work around them. No rip-and-replace. We design around how your plant actually operates, not around a generic template.',
    },
    {
      question: 'What manufacturing tasks can AI automate in Indiana?',
      answer: 'The highest-value targets are RFQ and quoting, purchase order processing, incoming compliance and inspection documents, data entry between systems, and supplier/customer call handling. These are the tasks that consume the most office hours and slow the most throughput.',
    },
    {
      question: 'How is my proprietary data and IP protected?',
      answer: 'We build with strict access controls, audit trails, and data-handling rules so your specs, pricing, and process information stay protected and available only to authorized users. Data security is designed in from the start.',
    },
    {
      question: 'Will AI replace my shop floor or office staff?',
      answer: 'No. AI handles the repetitive paperwork, data entry, and call handling so your team can focus on higher-value work — quoting more accurately, managing suppliers, and running production. Most Indiana manufacturers use AI to do more with the same team.',
    },
    {
      question: 'How much does AI cost for an Indiana manufacturer?',
      answer: 'Cost depends on scope. Many manufacturers start with a focused automation project in the $5,000–$20,000 range, with ROI typically clear within months. NevTech AI offers a free assessment to scope your needs and provide a fixed-price proposal.',
    },
    {
      question: 'How long does it take to deploy AI in an Indiana plant?',
      answer: 'Most deployments go live within 2–6 weeks. Simpler automations and voice agents can launch in under two weeks. Every engagement starts with a documented 30/60/90-day plan tailored to your operation.',
    },
  ],
  ctaTitle: 'Ready to Protect Your Margins with AI in Indiana?',
  ctaParagraph:
    'Book a 15-minute call with a real specialist who works with Indiana manufacturers. We will identify the highest-ROI automation for your operation, answer your integration and security questions, and give you a fixed-price proposal. No pitch, no jargon — just a plan built for your plant.',
};

export default function AIManufacturingIndianaPage() {
  return <SeoLandingPage config={config} />;
}