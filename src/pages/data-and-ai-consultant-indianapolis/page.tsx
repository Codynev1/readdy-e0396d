import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { SITE_URL, absoluteUrl } from '@/seo/site';

const PAGE_PATH = '/data-and-ai-consultant-indianapolis';

export default function DataAndAIConsultantIndianapolisPage() {
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
              'NevTech AI is an Indianapolis, Indiana-based artificial intelligence implementation and data consulting company. Despite the similar spelling of its name, it is not affiliated with the state of Nevada or any Nevada-based business.',
            description:
              'Data and AI consultant in Indianapolis — NevTech AI helps businesses harness data analytics, machine learning, and custom AI solutions to make smarter decisions and drive growth.',
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
            headline: 'NevTech AI: Data & AI Consultant in Indianapolis',
            description:
              'NevTech AI is your local data and AI consultant in Indianapolis. We help businesses harness the power of data analytics, machine learning, and custom AI solutions.',
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
            articleSection: 'Data & AI Consulting',
            keywords:
              'data consultant Indianapolis, AI consultant Indianapolis, data analytics, machine learning, custom AI solutions',
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
                name: 'Data & AI Consultant in Indianapolis',
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
                  <span className="text-foreground-900 font-medium">Data &amp; AI Consultant</span>
                </nav>

                <div className="inline-flex items-center gap-2 bg-primary-100/80 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                  <i className="ri-database-2-line"></i>
                  Data &amp; AI Consulting
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-tight mb-6">
                  NevTech AI: Data &amp; AI Consultant in Indianapolis
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
                  {['data consulting', 'AI consulting', 'machine learning', 'Indianapolis'].map((tag) => (
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
                {/* Intro */}
                <div className="text-foreground-700 leading-relaxed text-base md:text-lg space-y-5 mb-14">
                  <p>
                    A data and AI consultant in Indianapolis helps local companies use their data to make smarter
                    decisions, improve efficiency, and drive growth. By applying data science, machine learning, and
                    artificial intelligence, consultants can uncover hidden patterns, automate processes, and build
                    custom solutions to specific business challenges. NevTech AI provides these expert consulting
                    services, partnering with Indianapolis businesses to turn raw data into a strategic asset and a
                    competitive advantage.
                  </p>
                </div>

                {/* Section 1 */}
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    What Problems Can a Data &amp; AI Consultant Solve?
                  </h2>
                  <div className="space-y-5 text-foreground-700 leading-relaxed text-base md:text-lg mb-6">
                    <p>
                      Indianapolis is a hub for logistics, manufacturing, life sciences, and technology. While these
                      industries are diverse, they share common challenges that data and AI can address. A consultant
                      helps you move from simply collecting data to actively using it to get results.
                    </p>
                    <p className="font-semibold text-foreground-900">This could involve:</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-speed-up-line"></i>
                      </div>
                      <p className="text-foreground-700 leading-relaxed">
                        <strong className="text-foreground-950">Improving Operational Efficiency:</strong> Analyzing
                        supply chain data to reduce bottlenecks or using machine learning to predict maintenance needs
                        for manufacturing equipment.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-user-heart-line"></i>
                      </div>
                      <p className="text-foreground-700 leading-relaxed">
                        <strong className="text-foreground-950">Understanding Customer Behavior:</strong> Using data
                        analytics to identify purchasing trends, segment your audience, and personalize your marketing
                        efforts.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-robot-2-line"></i>
                      </div>
                      <p className="text-foreground-700 leading-relaxed">
                        <strong className="text-foreground-950">Automating Manual Processes:</strong> Developing custom
                        AI tools to handle repetitive data entry, customer service inquiries, or quality control checks,
                        freeing up your team for more strategic work.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-line-chart-line"></i>
                      </div>
                      <p className="text-foreground-700 leading-relaxed">
                        <strong className="text-foreground-950">Making Better Forecasts:</strong> Building predictive
                        models for sales, demand, and inventory management based on historical data and market trends.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    How Does a Data Strategy Go From Idea to Reality?
                  </h2>
                  <div className="space-y-5 text-foreground-700 leading-relaxed text-base md:text-lg mb-8">
                    <p>
                      The process starts with understanding your specific goals. A consultant doesn&apos;t just bring
                      technical skills; they bring a strategic framework. The first step is always a conversation about
                      what you want to achieve.
                    </p>
                    <p className="font-semibold text-foreground-900">
                      From there, a typical engagement involves:
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        title: 'Discovery & Goal Setting',
                        body: 'Identifying your key business questions and the data sources available.',
                        icon: 'ri-compass-3-line',
                      },
                      {
                        title: 'Data Exploration & Cleaning',
                        body: 'Assessing the quality and structure of your data and preparing it for analysis.',
                        icon: 'ri-filter-2-line',
                      },
                      {
                        title: 'Modeling & Analysis',
                        body: 'Applying the right statistical and machine learning techniques to find answers and insights.',
                        icon: 'ri-function-line',
                      },
                      {
                        title: 'Implementation & Integration',
                        body: 'Building the tools, dashboards, or automated workflows and integrating them into your existing systems.',
                        icon: 'ri-plug-line',
                      },
                    ].map((step, idx) => (
                      <div key={step.title} className="flex items-start gap-4">
                        <div className="flex flex-col items-center shrink-0 mt-0.5">
                          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-500 text-background-50 text-sm font-bold">
                            {idx + 1}
                          </div>
                          {idx < 3 && <div className="w-px h-6 bg-background-300 mt-1"></div>}
                        </div>
                        <p className="text-foreground-700 leading-relaxed pt-1.5">
                          <strong className="text-foreground-950">{step.title}:</strong> {step.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 3 */}
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    Why Choose a Local Indianapolis AI Consultant?
                  </h2>
                  <div className="space-y-5 text-foreground-700 leading-relaxed text-base md:text-lg">
                    <p>
                      Working with a consultant based in Indianapolis means partnering with someone who understands the
                      local business landscape. A local partner offers accessibility for face-to-face meetings to
                      discuss complex challenges and can provide insights relevant to the regional economy. This
                      proximity fosters a stronger, more collaborative relationship, ensuring the solutions developed
                      are perfectly aligned with your company&apos;s culture and operational realities.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    How Do I Get Started with Data Consulting in Indianapolis?
                  </h2>
                  <div className="space-y-5 text-foreground-700 leading-relaxed text-base md:text-lg mb-8">
                    <p>
                      The first step is to identify a challenge or opportunity where you believe data could make a
                      difference. You don&apos;t need to be a data expert to begin—that&apos;s what we&apos;re here for.
                      Simply having a goal, like &ldquo;we want to reduce shipping delays&rdquo; or &ldquo;we need to
                      understand why customer churn is increasing,&rdquo; is the perfect starting point.
                    </p>
                    <p>
                      Ready to explore how data and AI can transform your Indianapolis business? Contact NevTech AI to
                      schedule a consultation and discuss how we can help you achieve your goals.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 bg-background-100 border border-background-200 rounded-xl text-center">
                    <p className="text-lg md:text-xl font-semibold text-foreground-950 leading-relaxed mb-6">
                      Ready to explore how data and AI can transform your Indianapolis business?
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