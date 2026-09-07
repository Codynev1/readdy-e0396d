import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

export interface StatCard {
  value: string;
  label: string;
  source: string;
}

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface ReasonCard {
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SeoPageConfig {
  badge: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroSubtitle: string;
  heroParagraphs: string[];
  statsTitle: string;
  statsSubtitle: string;
  stats: StatCard[];
  whatIsTitle: string;
  whatIsParagraphs: string[];
  highlightTitle: string;
  highlightText: string;
  servicesTitle: string;
  servicesSubtitle: string;
  services: ServiceCard[];
  whyTitle: string;
  whySubtitle: string;
  reasons: ReasonCard[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: FAQItem[];
  ctaTitle: string;
  ctaParagraph: string;
}

export default function SeoLandingPage({ config }: { config: SeoPageConfig }) {
  const {
    badge,
    heroTitle,
    heroTitleAccent,
    heroSubtitle,
    heroParagraphs,
    statsTitle,
    statsSubtitle,
    stats,
    whatIsTitle,
    whatIsParagraphs,
    highlightTitle,
    highlightText,
    servicesTitle,
    servicesSubtitle,
    services,
    whyTitle,
    whySubtitle,
    reasons,
    faqTitle,
    faqSubtitle,
    faqs,
    ctaTitle,
    ctaParagraph,
  } = config;

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
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
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
            description: heroSubtitle,
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
              '@type': 'State',
              name: 'Indiana',
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
                  {badge}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-950 leading-tight mb-6">
                  {heroTitle} <span className="text-primary-600">{heroTitleAccent}</span>
                </h1>

                <p className="text-lg md:text-xl text-foreground-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                  {heroSubtitle}
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

          {/* Stats Section */}
          <section className="py-20 bg-background-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">{statsTitle}</h2>
                <p className="text-lg text-foreground-700 max-w-2xl mx-auto">{statsSubtitle}</p>
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

          {/* What Is / Educational Section */}
          <section className="py-20 bg-background-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-8 text-center">{whatIsTitle}</h2>

                <div className="space-y-6 text-foreground-700 leading-relaxed">
                  {whatIsParagraphs.map((paragraph, index) => (
                    <p key={index} className={index === 0 ? 'text-lg' : undefined}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-10 bg-background-50 border border-background-200 rounded-xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 shrink-0">
                      <i className="ri-building-line text-xl text-primary-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground-950 mb-2">{highlightTitle}</h3>
                      <p className="text-foreground-700 leading-relaxed">{highlightText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-background-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">{servicesTitle}</h2>
                <p className="text-lg text-foreground-700 max-w-2xl mx-auto">{servicesSubtitle}</p>
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

          {/* Why Choose a Local Partner */}
          <section className="py-20 bg-background-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">{whyTitle}</h2>
                <p className="text-lg text-foreground-700 max-w-2xl mx-auto">{whySubtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((reason) => (
                  <div key={reason.title} className="bg-background-50 border border-background-200 rounded-xl p-6">
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

          {/* FAQ Section */}
          <section className="py-20 bg-background-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4 text-center">{faqTitle}</h2>
                <p className="text-lg text-foreground-700 text-center mb-12 max-w-xl mx-auto">{faqSubtitle}</p>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">{ctaTitle}</h2>
                <p className="text-lg text-foreground-700 mb-8 max-w-xl mx-auto leading-relaxed">{ctaParagraph}</p>

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
                      <div className="text-sm font-semibold text-foreground-950 mb-1">Indiana Office</div>
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