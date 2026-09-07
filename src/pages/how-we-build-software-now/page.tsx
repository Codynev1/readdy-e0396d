import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { SITE_URL, absoluteUrl } from '@/seo/site';

const PAGE_PATH = '/how-we-build-software-now';

export default function HowWeBuildSoftwareNowPage() {
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
              'NevTech AI is an Indianapolis, Indiana-based artificial intelligence and custom software company. Despite the similar spelling of its name, it is not affiliated with the state of Nevada or any Nevada-based business.',
            description:
              'AI-native custom software development and AI automation for small and mid-sized businesses, delivered through an AI-native lifecycle with a written record at every step, plus maintenance and support after launch.',
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
            headline: 'How We Build Software Now: Faster Delivery With a Paper Trail',
            description:
              'AI can write code in hours, but most projects still take months. NevTech explains how its AI-native process gets you to a working MVP in weeks — and the dedicated team that takes over maintenance and support after launch.',
            datePublished: '2026-09-02',
            dateModified: '2026-09-02',
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
            articleSection: 'Custom Software',
            keywords: 'AI development, custom software, process, Indianapolis',
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
                name: 'How We Build Software Now: Faster Delivery With a Paper Trail',
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
                {/* Breadcrumb + category */}
                <nav className="flex flex-wrap items-center gap-2 text-sm text-foreground-600 mb-6">
                  <Link to="/" className="hover:text-foreground-950 transition-colors cursor-pointer whitespace-nowrap">
                    Home
                  </Link>
                  <i className="ri-arrow-right-s-line"></i>
                  <Link to="/ai-projects" className="hover:text-foreground-950 transition-colors cursor-pointer whitespace-nowrap">
                    AI Projects
                  </Link>
                  <i className="ri-arrow-right-s-line"></i>
                  <span className="text-foreground-900 font-medium">How We Build Software Now</span>
                </nav>

                <div className="inline-flex items-center gap-2 bg-primary-100/80 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                  <i className="ri-code-box-line"></i>
                  Custom Software
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-tight mb-6">
                  How We Build Software Now: Faster Delivery With a Paper Trail
                </h1>

                {/* Byline */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground-600 mb-6">
                  <span className="font-semibold text-foreground-900">Cody Neville</span>
                  <span className="hidden sm:inline text-foreground-300">|</span>
                  <span>Founder &amp; CEO, NevTech</span>
                  <span className="hidden sm:inline text-foreground-300">|</span>
                  <span className="inline-flex items-center gap-1">
                    <i className="ri-calendar-line"></i>
                    September 2, 2026
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['AI development', 'custom software', 'process', 'Indianapolis'].map((tag) => (
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
                    AI can now write working code in hours. So why do most custom software projects still take months?
                  </p>
                  <p>
                    Because writing the code was never the only slow part. Figuring out what to build, checking it,
                    approving it, deploying it, and fixing it when something breaks in production — those steps were
                    designed around people, and they still move at people speed. When the middle of the process gets
                    ten times faster, everything on either side of it becomes the bottleneck.
                  </p>
                  <p>
                    In August 2026, Anthropic (the company behind the Claude AI models) published a guide to fixing
                    exactly this problem. They call it the AI-native software development lifecycle. We had already
                    been moving in this direction; their guide gave us a clear, well-tested structure. This post
                    explains what it is, in plain terms, and how every NevTech project now runs on it.
                  </p>
                </div>

                {/* The old way */}
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    The old way: a relay race with a lot of handoffs
                  </h2>
                  <div className="space-y-5 text-foreground-700 leading-relaxed text-base md:text-lg">
                    <p>
                      A traditional software project looks like a relay. Someone writes up requirements. A designer
                      turns them into mockups. A developer builds it. A tester checks it. Someone else deploys it.
                      Support picks it up when a customer complains. Every handoff is a place where information gets
                      lost, a week gets added, and the person who originally asked for the thing stops recognizing it.
                    </p>
                    <p>
                      Adding AI to only the &ldquo;developer builds it&rdquo; step doesn&apos;t change that picture
                      much. The developer finishes faster and then waits — for review, for testing, for sign-off.
                    </p>
                  </div>
                </section>

                {/* The new way */}
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    The new way: every step leaves a written record
                  </h2>
                  <div className="space-y-5 text-foreground-700 leading-relaxed text-base md:text-lg mb-8">
                    <p>
                      The core idea is simple. At each stage of a project, a short written document gets created and
                      saved alongside the code, and each document feeds the next one. We call it the paper trail, and
                      it looks like this:
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-background-100 border border-background-200 rounded-lg p-6">
                      <h3 className="font-bold text-foreground-950 text-lg mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-500 text-background-50 text-sm shrink-0">
                          1
                        </span>
                        What you want.
                      </h3>
                      <p className="text-foreground-700 leading-relaxed">
                        The project starts with a conversation, not a requirements document. You describe the problem
                        in your own words — what&apos;s slow, what&apos;s costing you money, what you wish happened
                        automatically — and an AI assistant asks clarifying questions until it understands
                        who&apos;s affected, what a good outcome looks like, and what can&apos;t change. The result is
                        a one-page &ldquo;intent&rdquo; file. You read it, correct it, and approve it. That takes an
                        afternoon, not three weeks.
                      </p>
                    </div>

                    <div className="bg-background-100 border border-background-200 rounded-lg p-6">
                      <h3 className="font-bold text-foreground-950 text-lg mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-500 text-background-50 text-sm shrink-0">
                          2
                        </span>
                        How it should work.
                      </h3>
                      <p className="text-foreground-700 leading-relaxed">
                        From the approved intent, we produce a specification: what the software needs to do and how it
                        should be designed. The important part is that our house rules are applied while
                        it&apos;s being written — our security standards, our data-handling policy, your brand
                        guidelines — rather than discovered in a review weeks later. You approve that too. It becomes
                        the fixed scope you&apos;re paying for.
                      </p>
                    </div>

                    <div className="bg-background-100 border border-background-200 rounded-lg p-6">
                      <h3 className="font-bold text-foreground-950 text-lg mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-500 text-background-50 text-sm shrink-0">
                          3
                        </span>
                        How we&apos;ll build it.
                      </h3>
                      <p className="text-foreground-700 leading-relaxed">
                        Before any code is written, a plan is produced and interrogated: which files change, in what
                        order, what could break, and how we&apos;ll prove it works. An engineer signs off on the plan.
                        Only then does the build start.
                      </p>
                    </div>

                    <div className="bg-background-100 border border-background-200 rounded-lg p-6">
                      <h3 className="font-bold text-foreground-950 text-lg mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-500 text-background-50 text-sm shrink-0">
                          4
                        </span>
                        The code and its own proof.
                      </h3>
                      <p className="text-foreground-700 leading-relaxed">
                        The AI doesn&apos;t just write the feature — it runs the tests, builds the project, and checks
                        its own work before a person ever looks at it. If a test fails, it fixes the code, not the
                        test. A separate checking agent runs the application and reports anything that doesn&apos;t
                        match the plan.
                      </p>
                    </div>

                    <div className="bg-background-100 border border-background-200 rounded-lg p-6">
                      <h3 className="font-bold text-foreground-950 text-lg mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-500 text-background-50 text-sm shrink-0">
                          5
                        </span>
                        The review.
                      </h3>
                      <p className="text-foreground-700 leading-relaxed">
                        Every change is reviewed automatically for bugs, security issues, and whether it actually
                        matches the plan and the spec. A human then reviews the summary and approves. The AI that
                        wrote the code can never approve its own work, and nothing reaches your production system
                        without a person authorizing it.
                      </p>
                    </div>

                    <div className="bg-background-100 border border-background-200 rounded-lg p-6">
                      <h3 className="font-bold text-foreground-950 text-lg mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-500 text-background-50 text-sm shrink-0">
                          6
                        </span>
                        What happened after launch.
                      </h3>
                      <p className="text-foreground-700 leading-relaxed">
                        Once the software is live, it&apos;s monitored against a baseline. If something drifts —
                        errors climb, a page slows down — an AI agent investigates, writes up what it found in the
                        same &ldquo;intent&rdquo; format the project started with, and the loop begins again.
                        Maintenance stops being a ticket sitting in a queue.
                      </p>
                    </div>
                  </div>
                </section>

                {/* MVP engine */}
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    This is how we get you to a working product in weeks
                  </h2>
                  <div className="space-y-5 text-foreground-700 leading-relaxed text-base md:text-lg mb-8">
                    <p>
                      Those six steps are the engine behind our MVP process. An MVP — minimum viable product — is the
                      smallest version of your software that real users can use and that moves the number you care
                      about, whether that&apos;s missed calls, hours of manual data entry, or quotes that never get
                      sent. It is not a prototype or a demo; it&apos;s wired to your real systems from day one.
                    </p>
                    <p className="font-semibold text-foreground-900">Here is how a project runs:</p>
                  </div>

                  <div className="space-y-5">
                    <div className="border-l-4 border-primary-500 pl-5 py-1">
                      <h3 className="font-bold text-foreground-950 text-lg mb-2">Week 1 — Discovery.</h3>
                      <p className="text-foreground-700 leading-relaxed">
                        We map the workflow you&apos;re trying to fix, agree on the one metric that defines success,
                        and turn your description of the problem into approved intent files and a specification. This
                        is where the fixed price gets set.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent-500 pl-5 py-1">
                      <h3 className="font-bold text-foreground-950 text-lg mb-2">Weeks 2–6 — Build sprints.</h3>
                      <p className="text-foreground-700 leading-relaxed">
                        Every two weeks you get a live 30-minute demo of working software on a staging site. Each
                        feature runs through the plan → build → self-check → review cycle above, several features in
                        parallel. After every demo you reprioritize what&apos;s next.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary-500 pl-5 py-1">
                      <h3 className="font-bold text-foreground-950 text-lg mb-2">Launch.</h3>
                      <p className="text-foreground-700 leading-relaxed">
                        The MVP goes live behind a human approval gate. We agreed on the success numbers on day one,
                        so at day 45 and day 90 you get a plain report on whether it hit them. If it did, we grow it.
                        If it didn&apos;t, you shut it down cheaply and keep everything that was built.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-background-100 border border-background-200 rounded-lg">
                    <p className="text-foreground-700 leading-relaxed">
                      Most MVPs take two to six weeks from kickoff. The written record — intent, spec, plan, review
                      history, a one-page guide to the codebase — is what makes that speed possible without cutting
                      corners, and it&apos;s also what makes the next part work.
                    </p>
                  </div>
                </section>

                {/* After launch */}
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    After launch, a dedicated team takes it over
                  </h2>
                  <div className="space-y-5 text-foreground-700 leading-relaxed text-base md:text-lg mb-8">
                    <p>
                      Building something fast is only half the job. The other half is making sure it&apos;s still
                      running, secure, and improving a year from now. That&apos;s why we separate the two.
                    </p>
                    <p>
                      Once your MVP is live, it moves to our maintenance and support team, working under a monthly
                      CarePlan. That team handles hosting and monitoring, security updates, bug fixes, backups, and
                      support tickets, with response times set out in a service-level agreement. NevTech stays on as
                      the standing architect: we own the design decisions, review any significant change, and run a
                      quarterly roadmap conversation with you so the software keeps up with the business.
                    </p>
                    <p className="font-semibold text-foreground-900">You choose how that works:</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    <div className="bg-background-100 border border-background-200 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <i className="ri-cloud-line text-primary-600 text-xl"></i>
                        <h3 className="font-bold text-foreground-950 text-lg">We manage it.</h3>
                      </div>
                      <p className="text-foreground-700 leading-relaxed">
                        The software runs in our cloud, we deploy updates continuously, and we handle every support
                        tier. Best for teams that want the outcome without running any of the operations.
                      </p>
                    </div>
                    <div className="bg-background-100 border border-background-200 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <i className="ri-server-line text-accent-600 text-xl"></i>
                        <h3 className="font-bold text-foreground-950 text-lg">You manage it.</h3>
                      </div>
                      <p className="text-foreground-700 leading-relaxed">
                        The software is deployed in your own cloud, with a full handover package — hardening guide,
                        runbooks, backup and restore procedures. Your IT team handles first-line support and our team
                        backs them up. Best for organizations with IT capacity or data-residency requirements.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-background-100 border border-background-200 rounded-lg">
                    <p className="text-foreground-700 leading-relaxed">
                      Either way, the handoff is clean because of the paper trail. The support team doesn&apos;t
                      inherit a mystery; they inherit the intent files, the spec, the plans, the review history, and
                      the guide to the codebase. Nobody has to reverse-engineer what was built or why, and nobody has
                      to call the original developer to ask.
                    </p>
                  </div>
                </section>

                {/* What this means */}
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">
                    What this means if you&apos;re the one hiring us
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-chat-3-line"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground-900 text-lg mb-1">
                          You talk, we write it down.
                        </h3>
                        <p className="text-foreground-700 leading-relaxed">
                          You don&apos;t need to produce a requirements document or learn project-management software.
                          You describe the problem; the intent file is written for you; you approve it.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-slideshow-line"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground-900 text-lg mb-1">
                          You see working software every two weeks.
                        </h3>
                        <p className="text-foreground-700 leading-relaxed">
                          Because planning and checking are now fast, our two-week sprints end with something you can
                          click through on a staging site, not a status report.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-funds-line"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground-900 text-lg mb-1">
                          Changing your mind is cheap and visible.
                        </h3>
                        <p className="text-foreground-700 leading-relaxed">
                          A new idea becomes a new intent file. You can see exactly what changed, when, and what it
                          displaced — which is also how we tell together whether something is a tweak or a real change
                          of scope.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-shield-check-line"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground-900 text-lg mb-1">
                          The guardrails are built into the tools, not into someone&apos;s memory.
                        </h3>
                        <p className="text-foreground-700 leading-relaxed">
                          Rules like &ldquo;never log a customer&apos;s personal data&rdquo; or &ldquo;never deploy to
                          production without approval&rdquo; are enforced by the development tools themselves,
                          automatically, on every project. They can&apos;t be skipped on a busy Friday.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-lifebuoy-line"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground-900 text-lg mb-1">You never get stranded.</h3>
                        <p className="text-foreground-700 leading-relaxed">
                          Every project ships with its intent, spec, plan, review history, and a one-page guide to the
                          codebase, and a support team is already in place when it launches. If you later bring it
                          in-house or move it to another vendor, the record goes with it.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0 mt-0.5">
                        <i className="ri-bar-chart-line"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground-900 text-lg mb-1">You get real numbers.</h3>
                        <p className="text-foreground-700 leading-relaxed">
                          We track four things on every project: how long it takes from your request to an approved
                          intent file, how often work is right the first time, how long human review takes, and how
                          much rework each sprint needs. We report them at 30, 60, and 90 days, so &ldquo;faster&rdquo;
                          is a measurement, not a promise.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Where the humans stay */}
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">Where the humans stay</h2>
                  <div className="space-y-5 text-foreground-700 leading-relaxed text-base md:text-lg">
                    <p>
                      It&apos;s worth being clear about what this is not. It isn&apos;t software that builds itself
                      while nobody watches. People sit at every decision that matters: you approve what to build and
                      how it should work; an engineer approves the plan; a reviewer approves the code; a named person
                      authorizes anything touching production. What changed is that the people are no longer doing the
                      mechanical parts — writing boilerplate, running test suites, formatting, chasing the first pass
                      of a review. Their attention goes where judgment is needed.
                    </p>
                    <p>
                      For businesses in regulated fields — healthcare, legal, finance — this is the part that matters
                      most. When an auditor or a security reviewer asks &ldquo;who requested this, who built it, who
                      approved it, and when did it go live,&rdquo; the answer is already in the record.
                    </p>
                  </div>
                </section>

                {/* Where we go from here */}
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-5">Where we go from here</h2>
                  <div className="space-y-5 text-foreground-700 leading-relaxed text-base md:text-lg mb-8">
                    <p>
                      We&apos;re running every new NevTech project on this process, and we&apos;re publishing what we
                      measure as we go. If you have a software project you&apos;ve been putting off because the last
                      one took too long, or a system you&apos;re afraid to touch because nobody remembers how it works,
                      this is a good time to talk.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 bg-background-100 border border-background-200 rounded-xl text-center">
                    <p className="text-lg md:text-xl font-semibold text-foreground-950 leading-relaxed mb-6">
                      One scoping call. A fixed price within a week. A working MVP in two to six weeks. A support team
                      on day one of launch.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-primary-500 text-background-50 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Book a scoping call
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                      <a
                        href="mailto:cody@nevtech.io"
                        className="inline-flex items-center gap-2 text-foreground-900 px-6 py-4 rounded-lg text-lg font-semibold hover:text-primary-700 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        <i className="ri-mail-line text-primary-600"></i>
                        cody@nevtech.io
                      </a>
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

          {/* Final author / about note */}
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