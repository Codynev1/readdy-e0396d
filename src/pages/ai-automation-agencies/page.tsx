import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { SITE_URL, absoluteUrl } from '@/seo/site';

const PAGE_PATH = '/ai-automation-agencies';

export default function AIAutomationAgenciesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NevTech AI',
            alternateName: ['Nevtech AI', 'NevTech', 'Nev Tech AI', 'Nevtech'],
            disambiguatingDescription:
              'NevTech AI is an Indianapolis, Indiana-based artificial intelligence implementation and automation company. Despite the similar spelling of its name, it is not affiliated with the state of Nevada or any Nevada-based business.',
            description:
              'AI automation agency for Indianapolis businesses — custom AI solutions that streamline operations, automate repetitive tasks, and improve service.',
            telephone: '+1-317-508-9493',
            email: 'cody@nevtech.io',
            url: SITE_URL,
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
              '@type': 'State',
              name: 'Indiana',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            mainEntityOfPage: absoluteUrl(PAGE_PATH),
            headline: 'AI Automation Agencies in Indianapolis | NevTech AI',
            description:
              'An AI automation agency helps Indianapolis businesses streamline operations and improve service with custom AI solutions. NevTech AI partners with you to identify opportunities and build tailored automations that solve unique challenges.',
            datePublished: '2026-09-04',
            dateModified: '2026-09-04',
            author: {
              '@type': 'Person',
              name: 'Cody Neville',
              jobTitle: 'Founder & CEO, NevTech',
              url: SITE_URL,
            },
            publisher: {
              '@type': 'Organization',
              name: 'NevTech AI',
              url: SITE_URL,
            },
            articleSection: 'AI Automation',
            keywords: 'AI automation, Indianapolis, AI agency, custom AI solutions, automation',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: SITE_URL,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'AI Automation Agencies in Indianapolis',
                item: absoluteUrl(PAGE_PATH),
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-background-50">
        <Header />

        <main>
          {/* Article Hero */}
          <section className="relative bg-gradient-to-br from-background-50 via-primary-50/30 to-background-100 pt-32 pb-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-3xl mx-auto">
                <nav className="flex flex-wrap items-center gap-2 text-sm text-foreground-600 mb-6">
                  <Link to="/" className="hover:text-foreground-950 transition-colors cursor-pointer whitespace-nowrap">
                    Home
                  </Link>
                  <i className="ri-arrow-right-s-line"></i>
                  <Link to="/blog" className="hover:text-foreground-950 transition-colors cursor-pointer whitespace-nowrap">
                    Blog
                  </Link>
                  <i className="ri-arrow-right-s-line"></i>
                  <span className="text-foreground-900 font-medium">AI Automation Agencies</span>
                </nav>

                <div className="inline-flex items-center gap-2 bg-primary-100/80 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                  <i className="ri-robot-2-line"></i>
                  AI Automation
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-tight mb-6">
                  AI Automation Agencies in Indianapolis | NevTech AI
                </h1>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground-600 mb-6">
                  <span className="font-semibold text-foreground-900">Cody Neville</span>
                  <span className="hidden sm:inline text-foreground-300">|</span>
                  <span>Founder &amp; CEO, NevTech</span>
                  <span className="hidden sm:inline text-foreground-300">|</span>
                  <span className="inline-flex items-center gap-1">
                    <i className="ri-calendar-line"></i>
                    September 4, 2026
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['AI automation', 'custom AI solutions', 'Indianapolis'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 bg-secondary-100 text-secondary-900 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap"
                    >
                      <i className="ri-price-tag-3-line"></i>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Article Body */}
          <article className="py-14 md:py-16 bg-background-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                {/* Social hook */}
                <div className="text-foreground-700 leading-relaxed text-base md:text-lg space-y-5 mb-14">
                  <p className="text-xl md:text-2xl font-semibold text-foreground-950 leading-snug">
                    What&apos;s one repetitive task in your business you&apos;d love to automate? #AIAutomation
                    #Indianapolis
                  </p>
                  <p>
                    An AI automation agency is a specialized firm that helps businesses implement artificial
                    intelligence to automate tasks, streamline processes, and unlock new capabilities. These agencies
                    design, build, and integrate custom AI solutions, moving beyond generic software to address
                    specific operational bottlenecks and strategic goals. For an Indianapolis company, this means
                    having a local partner dedicated to applying AI to solve your unique business challenges, from
                    customer service backlogs to complex data analysis.
                  </p>
                </div>

                {/* Section 1 */}
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    What Kinds of Problems Do AI Automation Agencies Solve?
                  </h2>
                  <div className="space-y-5 text-foreground-700 leading-relaxed text-base md:text-lg mb-6">
                    <p>
                      While the term &ldquo;AI&rdquo; can seem abstract, its practical applications are very concrete.
                      An AI automation agency helps businesses target specific, often frustrating, inefficiencies.
                    </p>
                    <p className="font-semibold text-foreground-900">
                      Common problems we help solve include:
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-list-check-3"></i>
                      </div>
                      <p className="text-foreground-700 leading-relaxed">
                        <strong className="text-foreground-950">Repetitive Administrative Tasks:</strong> Automating
                        data entry, invoice processing, and report generation frees up your team for higher-value work.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-customer-service-2-line"></i>
                      </div>
                      <p className="text-foreground-700 leading-relaxed">
                        <strong className="text-foreground-950">Overwhelming Customer Inquiries:</strong> AI can
                        intelligently sort and route customer emails, answer common questions instantly, and summarize
                        support tickets for human agents.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-search-eye-line"></i>
                      </div>
                      <p className="text-foreground-700 leading-relaxed">
                        <strong className="text-foreground-950">Inaccessible Internal Knowledge:</strong> An AI-powered
                        search tool can scan all your company documents, Slack messages, and internal wikis to provide
                        instant, accurate answers for your staff.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-line-chart-line"></i>
                      </div>
                      <p className="text-foreground-700 leading-relaxed">
                        <strong className="text-foreground-950">Complex Data Analysis:</strong> Instead of manually
                        sifting through spreadsheets, AI can identify trends, flag anomalies, and create summaries
                        from vast datasets in minutes.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    Why Not Just Use Off-the-Shelf AI Tools?
                  </h2>
                  <div className="space-y-5 text-foreground-700 leading-relaxed text-base md:text-lg">
                    <p>
                      Public AI tools are powerful, but they often act as isolated islands. An AI agency serves as the
                      bridge, integrating these technologies directly into the systems you already use.
                    </p>
                    <p>
                      The key difference is customization and integration. An agency can build a solution that
                      understands your specific business context, terminology, and processes. It&apos;s the difference
                      between a generic app and a bespoke system designed to work seamlessly with your CRM, project
                      management software, and internal databases, ensuring your data remains private and the solution
                      fits your exact workflow.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    What Should Indianapolis Businesses Look for in an AI Partner?
                  </h2>
                  <div className="space-y-5 text-foreground-700 leading-relaxed text-base md:text-lg mb-6">
                    <p>
                      When choosing an AI automation agency, you&apos;re selecting a strategic partner, not just a
                      software vendor. For businesses here in Indianapolis, finding a local partner offers distinct
                      advantages. Look for a firm that prioritizes understanding your specific business goals before
                      talking about technology.
                    </p>
                    <p className="font-semibold text-foreground-900">A great partner will:</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-funds-line"></i>
                      </div>
                      <p className="text-foreground-700 leading-relaxed">
                        Focus on your return on investment (ROI), not just the tech.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-flag-line"></i>
                      </div>
                      <p className="text-foreground-700 leading-relaxed">
                        Start with a small, manageable project to demonstrate value.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-road-map-line"></i>
                      </div>
                      <p className="text-foreground-700 leading-relaxed">
                        Provide a clear roadmap for how AI can scale with your business.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-map-pin-2-line"></i>
                      </div>
                      <p className="text-foreground-700 leading-relaxed">
                        Offer local, accessible support and strategy sessions.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 4 */}
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    How Can We Get Started with AI Automation?
                  </h2>
                  <div className="space-y-5 text-foreground-700 leading-relaxed text-base md:text-lg mb-8">
                    <p>
                      The first step isn&apos;t a massive, complex project. It&apos;s a conversation. It begins by
                      identifying a single, high-friction process in your daily operations. What task consumes too
                      many hours? Where is your team getting bogged down?
                    </p>
                    <p>
                      A good AI partner will work with you to pinpoint these opportunities and propose a clear, phased
                      approach to automating them. You can start small, prove the concept, and build from there.
                    </p>
                    <p>
                      Ready to explore how AI automation can give your Indianapolis business a competitive edge?
                      Contact NevTech AI to schedule a consultation. We&apos;ll help you identify the best starting
                      point for your automation journey.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 bg-background-100 border border-background-200 rounded-xl text-center">
                    <p className="text-lg md:text-xl font-semibold text-foreground-950 leading-relaxed mb-6">
                      Ready to explore how AI automation can give your Indianapolis business a competitive edge?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-primary-500 text-background-50 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Schedule a consultation
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                      <a
                        href="tel:3175089493"
                        className="inline-flex items-center gap-2 text-foreground-900 px-6 py-4 rounded-lg text-lg font-semibold hover:text-primary-700 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        <i className="ri-phone-line text-primary-600"></i>
                        (317) 508-9493
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </article>

          {/* Final about note */}
          <section className="py-16 bg-gradient-to-br from-background-50 via-primary-50/20 to-background-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 bg-background-100 border border-background-200 rounded-xl">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-500 text-background-50 text-xl font-bold shrink-0">
                  CN
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground-900 mb-1">Cody Neville</div>
                  <div className="text-xs text-foreground-600 mb-2">Founder &amp; CEO, NevTech</div>
                  <p className="text-sm text-foreground-700 leading-relaxed">
                    NevTech is an Indianapolis-based AI and software company. We build custom software and AI
                    automations for small and mid-sized businesses, and we own every line of code we ship.
                  </p>
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