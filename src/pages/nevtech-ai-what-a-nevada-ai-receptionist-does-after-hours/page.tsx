import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { SITE_URL, absoluteUrl } from '@/seo/site';

const PAGE_PATH = '/nevtech-ai-what-a-nevada-ai-receptionist-does-after-hours';

export default function NevadaAIReceptionistAfterHoursPage() {
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
              'AI automation, voice agents, and consulting services, including a 24/7 AI receptionist that answers after-hours calls, books appointments, and routes urgent calls.',
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
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How Can an AI Differentiate Between a Sales Call and an Emergency for My Reno Business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A NevTech AI receptionist operates on sophisticated, custom-built logic. During setup, you define what constitutes an urgent matter for your business. The AI uses natural language understanding to analyze the caller\u2019s intent and listen for specific keywords (like \u201cemergency,\u201d \u201cleak,\u201d or \u201curgent\u201d). Based on these triggers, it follows a pre-determined path. A genuine emergency can be immediately transferred to your on-call technician\u2019s cell phone, while a routine sales inquiry can be logged for follow-up during business hours, ensuring your team isn\u2019t disturbed unnecessarily.',
                },
              },
              {
                '@type': 'Question',
                name: 'Will an AI Voice Sound Robotic to My Las Vegas Customers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The era of monotone, robotic voice systems is over. Modern AI receptionists leverage advanced conversational AI and high-fidelity, human-like voices. NevTech AI solutions are designed to be warm, natural, and engaging. They can understand context, handle conversational turns, and provide a professional and reassuring presence. The goal is not to trick a caller into thinking they\u2019re speaking to a human, but to provide an experience so seamless and helpful that they receive the service they need without frustration.',
                },
              },
              {
                '@type': 'Question',
                name: "Can the AI Schedule Appointments That Fit My Team's Nevada-Based Calendar?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. One of the most powerful after-hours functions is intelligent appointment booking. The AI integrates directly and securely with your existing business calendars (like Google Calendar or Microsoft Outlook). When a customer wants to book a service, the AI checks real-time availability, offers appropriate slots based on your rules\u2014such as service duration or travel time\u2014and books the appointment directly. This eliminates phone tag and allows you to capture new business 24/7, filling your schedule while your office is empty.',
                },
              },
              {
                '@type': 'Question',
                name: 'How Can I Get a Custom AI Receptionist Solution for My Business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Implementing a system that understands the unique needs of your after-hours calls is a straightforward process. The first step is to analyze your current call patterns and business goals. The team at NevTech AI works with businesses to design and build a custom AI receptionist that aligns with their specific operational needs. To see how an AI receptionist could handle your calls and capture more opportunities, visit www.nevtech.io to request a consultation.',
                },
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
                name: 'NevTech AI: What a Nevada AI Receptionist Does After Hours',
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
          <section className="relative bg-gradient-to-br from-background-50 via-primary-50/30 to-background-100 pt-32 pb-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary-100/80 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <i className="ri-phone-line"></i>
                  NevTech AI · After-Hours AI Receptionist
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-tight mb-6">
                  NevTech AI: What a Nevada AI Receptionist Does After Hours
                </h1>

                <p className="text-lg md:text-xl text-foreground-700 leading-relaxed max-w-2xl mx-auto">
                  When a call comes in after your business closes, an AI receptionist from NevTech AI immediately
                  engages the caller. It can answer frequently asked questions about your hours or location, schedule
                  appointments directly into your calendar, and collect detailed messages. For urgent matters, the AI is
                  programmed to recognize specific scenarios and can intelligently route the call to a designated
                  on-call person based on your custom rules. This ensures no critical opportunity is missed and every
                  customer feels heard, even at 2 AM.
                </p>
              </div>
            </div>
          </section>

          {/* Article Body */}
          <article className="py-16 md:py-20 bg-background-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto space-y-14">
                {/* Section 1 */}
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    How Can an AI Differentiate Between a Sales Call and an Emergency for My Reno Business?
                  </h2>
                  <p className="text-foreground-700 leading-relaxed text-base md:text-lg">
                    A NevTech AI receptionist operates on sophisticated, custom-built logic. During setup, you define
                    what constitutes an urgent matter for your business. The AI uses natural language understanding to
                    analyze the caller&apos;s intent and listen for specific keywords (like &ldquo;emergency,&rdquo;
                    &ldquo;leak,&rdquo; or &ldquo;urgent&rdquo;). Based on these triggers, it follows a pre-determined
                    path. A genuine emergency can be immediately transferred to your on-call technician&apos;s cell
                    phone, while a routine sales inquiry can be logged for follow-up during business hours, ensuring
                    your team isn&apos;t disturbed unnecessarily.
                  </p>
                </section>

                {/* Section 2 */}
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    Will an AI Voice Sound Robotic to My Las Vegas Customers?
                  </h2>
                  <p className="text-foreground-700 leading-relaxed text-base md:text-lg">
                    The era of monotone, robotic voice systems is over. Modern AI receptionists leverage advanced
                    conversational AI and high-fidelity, human-like voices. NevTech AI solutions are designed to be
                    warm, natural, and engaging. They can understand context, handle conversational turns, and provide a
                    professional and reassuring presence. The goal is not to trick a caller into thinking they&apos;re
                    speaking to a human, but to provide an experience so seamless and helpful that they receive the
                    service they need without frustration.
                  </p>
                </section>

                {/* Section 3 */}
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    Can the AI Schedule Appointments That Fit My Team&apos;s Nevada-Based Calendar?
                  </h2>
                  <p className="text-foreground-700 leading-relaxed text-base md:text-lg">
                    Absolutely. One of the most powerful after-hours functions is intelligent appointment booking. The
                    AI integrates directly and securely with your existing business calendars (like Google Calendar or
                    Microsoft Outlook). When a customer wants to book a service, the AI checks real-time availability,
                    offers appropriate slots based on your rules&mdash;such as service duration or travel
                    time&mdash;and books the appointment directly. This eliminates phone tag and allows you to capture
                    new business 24/7, filling your schedule while your office is empty.
                  </p>
                </section>

                {/* Section 4 */}
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    How Can I Get a Custom AI Receptionist Solution for My Business?
                  </h2>
                  <p className="text-foreground-700 leading-relaxed text-base md:text-lg">
                    Implementing a system that understands the unique needs of your after-hours calls is a
                    straightforward process. The first step is to analyze your current call patterns and business
                    goals. The team at NevTech AI works with businesses to design and build a custom AI receptionist
                    that aligns with their specific operational needs. To see how an AI receptionist could handle your
                    calls and capture more opportunities, visit www.nevtech.io to request a consultation.
                  </p>
                </section>
              </div>
            </div>
          </article>

          {/* Final CTA */}
          <section className="py-24 bg-gradient-to-br from-primary-500/10 via-background-100 to-accent-500/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">
                  Ready to Never Miss Another After-Hours Call?
                </h2>
                <p className="text-lg text-foreground-700 mb-8 max-w-xl mx-auto leading-relaxed">
                  Get a free 15-minute assessment and see how an AI receptionist can capture more opportunities for
                  your business — 24/7, without adding headcount.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}