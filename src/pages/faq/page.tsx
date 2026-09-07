import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

const categories = [
  { key: 'all', label: 'All Questions' },
  { key: 'general', label: 'General' },
  { key: 'ai-receptionist', label: 'AI Receptionist' },
  { key: 'ai-automation', label: 'AI & Automation' },
  { key: 'cellular', label: 'Cellular & Internet' },
  { key: 'pricing', label: 'Pricing & Plans' },
];

const faqs = [
  // General
  {
    category: 'general',
    q: 'What does NevTech AI do?',
    a: 'NevTech AI helps small and medium businesses modernize their operations through AI automation, cellular consulting, business internet solutions, and workflow optimization. We provide everything from AI voice agents that answer your phones 24/7 to custom AI project builds, cellular plan optimization, and T-Mobile business services — all tailored for the Indiana market and beyond.',
  },
  {
    category: 'general',
    q: 'Where is NevTech AI based?',
    a: 'We are headquartered in Indianapolis, Indiana, and serve businesses throughout the state including Fort Wayne, Evansville, South Bend, and the greater Midwest region. We also work with clients nationwide for our AI projects and automation services.',
  },
  {
    category: 'general',
    q: 'Do I need to be technical to work with NevTech AI?',
    a: 'Not at all. We translate complex technology decisions into plain business language. Whether you are evaluating AI tools, upgrading your phone system, or looking at cellular plans, we explain everything in terms of cost savings, efficiency gains, and real business outcomes — not jargon.',
  },
  {
    category: 'general',
    q: 'How do I get started?',
    a: 'The best way is to book a free 30-minute discovery call. We will learn about your business, identify your biggest opportunities, and give you a clear, no-obligation recommendation. You can schedule directly at calendly.com/cody-nevtech/30min or call us at (317) 508-9493.',
  },

  // AI Receptionist
  {
    category: 'ai-receptionist',
    q: 'What exactly is Nova AI Receptionist?',
    a: 'Nova AI is a 24/7 virtual receptionist powered by advanced voice AI. She answers every call on the first ring with natural, human-like conversation — books appointments, qualifies leads, answers FAQs, and routes urgent calls to your team. Think of her as a full-time receptionist that never takes a day off, costs a fraction of a human hire, and scales to handle unlimited simultaneous calls.',
  },
  {
    category: 'ai-receptionist',
    q: 'Does Nova sound like a robot?',
    a: 'Not even close. Nova uses the latest voice AI technology with natural pauses, conversational tone, and contextual awareness. Most callers never realize they are talking to AI. We have had customers ask to speak to "that nice Nova lady" again on follow-up calls.',
  },
  {
    category: 'ai-receptionist',
    q: 'What happens if Nova cannot handle a call?',
    a: 'Nova is trained to recognize when a human needs to step in. Complex, sensitive, or escalated calls get instantly transferred to your team with a full summary of what was discussed — no repetition, no frustration for your caller. You set the rules for what gets transferred.',
  },
  {
    category: 'ai-receptionist',
    q: 'How long does setup take?',
    a: 'Most businesses are live within 5 business days. We configure Nova to your business hours, services, pricing, FAQs, and booking system. You review and approve the call flows before going live. It is a collaborative process — we tune until it is perfect.',
  },
  {
    category: 'ai-receptionist',
    q: 'Can Nova handle multiple calls at once?',
    a: 'Absolutely. Unlike a human receptionist who handles one call at a time, Nova scales automatically. Whether you get 5 calls or 500 calls simultaneously, every caller gets an immediate answer with zero hold time.',
  },
  {
    category: 'ai-receptionist',
    q: 'Is Nova HIPAA-compliant for medical practices?',
    a: 'Yes. Nova is fully HIPAA-compliant for healthcare environments. All call data is encrypted end-to-end, and we sign Business Associate Agreements with every medical practice. Your patient data stays protected at every layer.',
  },

  // AI & Automation
  {
    category: 'ai-automation',
    q: 'What types of AI projects does NevTech build?',
    a: 'We build custom AI solutions including data organization and taxonomy systems, internal AI search engines powered by RAG technology, custom workflow automation tools, earnings call prep automation for public companies, and meeting intelligence systems that transcribe, summarize, and track action items. Every project is scoped, priced, and delivered as a standalone engagement.',
  },
  {
    category: 'ai-automation',
    q: 'What is a Fractional CAIO?',
    a: 'A Fractional Chief AI Officer is a senior AI strategist who works with your business on a part-time retainer basis. You get executive-level AI leadership — strategy, tool selection, policy development, team training, and implementation oversight — without the $250K+ annual salary of a full-time CAIO. It is AI leadership priced for SMBs.',
  },
  {
    category: 'ai-automation',
    q: 'How is a Fractional CAIO different from hiring an AI consultant?',
    a: 'Consultants typically deliver a report and leave. A Fractional CAIO stays embedded in your business month over month — driving implementation, holding your team accountable, tracking KPIs, and adapting strategy as both your business and the AI landscape evolve.',
  },
  {
    category: 'ai-automation',
    q: 'Can you build an MVP for my startup idea?',
    a: 'Yes — our Rapid MVP program delivers a working, deployable application in 8 weeks for under $10,000. Once validated, we transfer a production dev team that already understands your codebase to handle cloud migration and long-term scaling. No knowledge loss, no starting over.',
  },
  {
    category: 'ai-automation',
    q: 'What kinds of automations can you build?',
    a: 'We build lightweight custom tools for high-volume repetitive workflows — custom forms that auto-route data, internal dashboards, reporting helpers, automation scripts, and integrations between your existing tools. If your team spends hours every week on the same manual task, we can probably automate 80% of it.',
  },

  // Cellular & Internet
  {
    category: 'cellular',
    q: 'What T-Mobile business services do you offer?',
    a: 'Through our T-Mobile partnership, Indiana businesses can get phone lines at $10 per line (minimum 10 lines), tablets with data at $15 per month, and high-speed business internet at $50 per month. All plans are month-to-month with no contracts and no activation fees.',
  },
  {
    category: 'cellular',
    q: 'Can I keep my existing phone numbers?',
    a: 'Yes, absolutely. We offer free number porting from any carrier. Your business numbers transfer seamlessly with zero downtime — your customers will not notice a thing.',
  },
  {
    category: 'cellular',
    q: 'How does cellular consulting work?',
    a: 'We analyze your current cellular setup — phones, tablets, hotspots, data plans, and carrier agreements — and identify opportunities to reduce costs, improve coverage, and consolidate vendors. Most clients save 30-40% on their monthly cellular spend while getting better service.',
  },
  {
    category: 'cellular',
    q: 'Do you offer business internet outside of T-Mobile?',
    a: 'We provide comprehensive business internet consulting including 5G, fiber, failover protection, SD-WAN, and multi-location connectivity. We evaluate all available providers in your area and recommend the best solution based on your needs, budget, and reliability requirements.',
  },

  // Pricing
  {
    category: 'pricing',
    q: 'How much does Nova AI Receptionist cost?',
    a: 'Pricing is based on your call volume, features needed, and integrations. We provide custom quotes after understanding your specific needs. As a reference point, most SMBs pay significantly less than a part-time receptionist while getting 24/7 coverage. Plus, T-Mobile business customers get 6 months of inbound calling free.',
  },
  {
    category: 'pricing',
    q: 'What do your AI consulting retainers cost?',
    a: 'Our Fractional CAIO retainers start at $1,800 per month for the Quick-Start tier (6-10 hours), $2,800-$4,200 for Growth (12-20 hours), and $4,500-$6,500 for Hands-On (20-30 hours). We also offer hourly consulting at $125-$175 per hour with a 10-hour minimum. All retainers are month-to-month after the first 90 days.',
  },
  {
    category: 'pricing',
    q: 'Is there a long-term contract?',
    a: 'No lock-in after the first 90 days. We operate month-to-month because we believe in earning your business every month, not trapping you in a contract. Cancel anytime with 30 days notice.',
  },
  {
    category: 'pricing',
    q: 'Do you offer any free trials or guarantees?',
    a: 'We offer a free 30-minute discovery call where you will walk away with a clear technology roadmap, your top 3 cost-saving opportunities, and a plan to capture more leads — yours to keep, even if you do not move forward. For Nova AI, we offer live demos where you can hear her handle real calls before committing.',
  },
  {
    category: 'pricing',
    q: 'How do your rates compare to other AI consultants?',
    a: 'Coastal AI consultants typically charge $200-$400 per hour or $5,000-$15,000 per month for similar retainers. Our rates are calibrated for the Midwest market — specifically Indiana — while delivering the same senior-level expertise. Most clients see positive ROI within the first 6-8 weeks.',
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
      <div className="min-h-screen bg-background-50">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-background-50 via-primary-50/30 to-background-100 pt-20 pb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl mx-auto text-center">
              <div className="eyebrow">Got Questions?</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-950 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-foreground-700 leading-relaxed max-w-2xl mx-auto">
                Honest answers about AI automation, cellular consulting, Nova AI receptionist, pricing, and everything in between. Cannot find what you are looking for? Reach out directly.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="btn-primary text-lg py-4 px-8"
                >
                  Contact Us
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 bg-background-100 border-b border-background-200 sticky top-16 z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                    activeCategory === cat.key
                      ? 'bg-primary-500 text-background-50'
                      : 'bg-background-50 text-foreground-700 hover:bg-background-200 border border-background-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-16 md:py-20 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-foreground-500">No questions in this category yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredFaqs.map((faq, i) => (
                    <div key={i} className="bg-background-100 border border-background-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleFaq(i)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-background-50 transition-colors"
                      >
                        <span className="font-semibold text-foreground-950 text-sm pr-4">{faq.q}</span>
                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                          <i className={`ri-${openFaqs.has(i) ? 'subtract' : 'add'}-line text-primary-600`}></i>
                        </div>
                      </button>
                      {openFaqs.has(i) && (
                        <div className="px-6 pb-5 border-t border-background-200">
                          <p className="text-foreground-700 text-sm leading-relaxed pt-4">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-20 md:py-28 bg-primary-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-primary-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                We are happy to answer anything. Book a free call or send us a message and we will get back to you within 1 business day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-background-50 text-foreground-950 font-semibold px-8 py-4 rounded-lg hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Contact Us
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
                <a
                  href="tel:3175089493"
                  className="inline-flex items-center justify-center border-2 border-background-200 text-background-50 font-semibold px-8 py-4 rounded-lg hover:bg-background-50/10 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-phone-line mr-2"></i>
                  (317) 508-9493
                </a>
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