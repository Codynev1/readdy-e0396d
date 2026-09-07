import { useState } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

const projects = [
  {
    id: 'clean-data',
    icon: 'ri-folder-3-line',
    tag: 'Data Organization',
    title: 'Clean Data & Taxonomy Organization',
    tagline: 'Make your files AI-ready.',
    description:
      'Messy files, inconsistent naming, and chaotic folder structures make AI tools useless. We organize your contracts, documents, and internal files with proper naming conventions, folder hierarchies, and tagging systems — so AI can actually find and use your information reliably.',
    outcomes: [
      'Consistent naming conventions across all files',
      'Logical folder structures your whole team can follow',
      'Tagging & metadata for fast AI retrieval',
      'Reduced time wasted searching for documents',
    ],
    ideal: 'Law firms, agencies, real estate teams, and any business drowning in unstructured files.',
    image:
      'https://readdy.ai/api/search-image?query=clean%20organized%20modern%20office%20desk%20with%20neatly%20arranged%20folders%20documents%20and%20laptop%20showing%20structured%20file%20system%20minimalist%20white%20workspace%20professional%20business%20environment%20warm%20neutral%20tones%20no%20text%20no%20people&width=700&height=480&seq=proj-data-01&orientation=landscape',
  },
  {
    id: 'ai-ui',
    icon: 'ri-search-eye-line',
    tag: 'Internal AI Search',
    title: 'AI UI Over Company Data (RAG / Internal Search)',
    tagline: 'Ask your data anything. Get real answers.',
    description:
      'Stop digging through spreadsheets and shared drives. We build a chat and search layer on top of your internal documents, reports, and databases — powered by Retrieval-Augmented Generation (RAG). Your team can ask plain-English questions like "Where are our labor costs highest?" and get accurate, sourced answers instantly.',
    outcomes: [
      'Natural language search over all internal docs',
      'Instant answers from reports, contracts & data',
      'Source citations so you can verify every answer',
      'Dramatically faster decision-making across teams',
    ],
    ideal: 'Operations teams, finance departments, HR, and executives who need fast answers from large document libraries.',
    image:
      'https://readdy.ai/api/search-image?query=modern%20sleek%20dashboard%20interface%20on%20laptop%20screen%20showing%20data%20analytics%20search%20results%20clean%20minimal%20UI%20design%20professional%20office%20environment%20soft%20lighting%20neutral%20background%20no%20text%20visible&width=700&height=480&seq=proj-rag-02&orientation=landscape',
  },
  {
    id: 'custom-tools',
    icon: 'ri-code-s-slash-line',
    tag: 'Custom Automations',
    title: 'Custom Small Tools & Automations ("Vibecoded Tools")',
    tagline: 'Cut repetitive work by 80%.',
    description:
      'We build lightweight, custom software tailored exactly to your team\'s repetitive workflows — forms, internal dashboards, automation scripts, and reporting helpers. These aren\'t off-the-shelf tools. They\'re purpose-built for your specific process, saving your team hours every single week.',
    outcomes: [
      'Up to 80% time savings on repetitive tasks',
      'Custom forms that auto-route and process data',
      'Internal dashboards built for your exact metrics',
      'Automation scripts that run without human input',
    ],
    ideal: 'Operations, admin, finance, and HR teams with high-volume repetitive workflows that eat up hours every week.',
    image:
      'https://readdy.ai/api/search-image?query=developer%20workspace%20with%20multiple%20screens%20showing%20clean%20code%20and%20automation%20workflow%20diagrams%20modern%20minimalist%20setup%20warm%20desk%20lighting%20professional%20tech%20environment%20no%20text%20visible&width=700&height=480&seq=proj-tools-03&orientation=landscape',
  },
  {
    id: 'earnings-call',
    icon: 'ri-presentation-line',
    tag: 'Executive Automation',
    title: 'Quarterly Earnings Call Prep Automation',
    tagline: 'Save exec teams days of prep work.',
    description:
      'For public companies, earnings call prep is a massive time sink. We build a system that drafts earnings scripts automatically — pulling from prior transcripts, new quarter inputs, and financial data. Exec teams go from days of manual drafting to reviewing a polished first draft in hours.',
    outcomes: [
      'Auto-drafted earnings scripts from prior transcripts',
      'New quarter data integrated automatically',
      'Consistent tone and structure across quarters',
      'Exec review time cut from days to hours',
    ],
    ideal: 'Public company CFOs, IR teams, and executive assistants managing quarterly reporting cycles.',
    image:
      'https://readdy.ai/api/search-image?query=executive%20boardroom%20presentation%20with%20large%20screen%20showing%20financial%20charts%20and%20graphs%20professional%20corporate%20setting%20clean%20modern%20interior%20warm%20lighting%20sophisticated%20atmosphere%20no%20text%20no%20people&width=700&height=480&seq=proj-earnings-04&orientation=landscape',
  },
  {
    id: 'meeting-system',
    icon: 'ri-record-circle-line',
    tag: 'Meeting Intelligence',
    title: 'Meeting Recording → Transcript → Summaries → Action Tracking',
    tagline: 'Turn every meeting into searchable memory.',
    description:
      'Most meetings are forgotten within 24 hours. We implement an org-wide workflow that records meetings, generates transcripts, creates AI summaries, extracts action items, and tracks follow-through — with reminders and accountability built in. Your meetings become a searchable knowledge base, and nothing falls through the cracks.',
    outcomes: [
      'Every meeting automatically transcribed & summarized',
      'Action items extracted and assigned automatically',
      'Searchable meeting archive across the entire org',
      'Reminders & accountability for every follow-up',
    ],
    ideal: 'Leadership teams, project managers, and any organization where follow-through and institutional memory matter.',
    image:
      'https://readdy.ai/api/search-image?query=modern%20conference%20room%20with%20people%20in%20meeting%20laptop%20on%20table%20showing%20transcript%20and%20notes%20clean%20professional%20office%20interior%20warm%20neutral%20tones%20collaborative%20workspace%20atmosphere%20no%20text%20visible&width=700&height=480&seq=proj-meeting-05&orientation=landscape',
  },
];

const stats = [
  { value: '80%', label: 'Average time saved on repetitive tasks' },
  { value: '3x', label: 'Faster document retrieval with AI search' },
  { value: '2 days', label: 'Saved per earnings cycle for exec teams' },
  { value: '100%', label: 'Meeting follow-ups tracked & accountable' },
];

export default function AIProjectsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const body = new URLSearchParams();
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));
      await fetch('https://readdy.ai/api/form/d8jd3r1hmtkvo7bfr9b0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      setSubmitted(true);
    } catch {
      // silent
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-50">
      <Header />
      <main>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-background-50 via-primary-50/30 to-background-100 pt-24 pb-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl mx-auto text-center">
              <span className="eyebrow">
                Paid AI Engagements
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-950 leading-tight mb-6">
                AI Projects That<br />
                <span className="text-primary-600">Actually Get Done.</span>
              </h1>
              <p className="text-lg text-foreground-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                From organizing messy data to building internal AI search engines and custom automations — these are hands-on, paid engagements that deliver real, measurable results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#projects"
                  className="btn-primary text-lg py-4 px-8"
                >
                  Explore Projects
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
                <a
                  href="#inquiry"
                  className="btn-outline text-lg py-4 px-8"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-background-100 border-y border-background-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-foreground-950 mb-1">{s.value}</div>
                  <div className="text-xs text-foreground-600 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 md:py-28 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="eyebrow">What We Build</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 mb-4">Our AI Project Offerings</h2>
              <p className="text-foreground-600 max-w-2xl mx-auto text-sm leading-relaxed">
                Each engagement is scoped, priced, and delivered as a standalone project — or combined into a broader AI transformation program.
              </p>
            </div>

            <div className="space-y-24">
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden w-full h-72 lg:h-80">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-500 text-background-50 text-xs font-semibold px-3 py-1.5 rounded-full">
                          {project.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-5">
                      <i className={`${project.icon} text-primary-600 text-xl`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground-950 mb-2">{project.title}</h3>
                    <p className="text-foreground-500 text-sm font-medium mb-4 italic">{project.tagline}</p>
                    <p className="text-foreground-700 text-sm leading-relaxed mb-6">{project.description}</p>

                    {/* Outcomes */}
                    <div className="mb-6">
                      <p className="text-xs font-bold text-foreground-900 uppercase tracking-widest mb-3">What You Get</p>
                      <ul className="space-y-2">
                        {project.outcomes.map((o, oi) => (
                          <li key={oi} className="flex items-start gap-2 text-sm text-foreground-700">
                            <div className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <i className="ri-check-line text-primary-600 text-xs font-bold"></i>
                            </div>
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For */}
                    <div className="bg-background-100 border border-background-200 rounded-lg px-4 py-3 mb-6">
                      <span className="text-xs font-bold text-foreground-900 uppercase tracking-widest">Ideal For: </span>
                      <span className="text-xs text-foreground-600">{project.ideal}</span>
                    </div>

                    <a
                      href="#inquiry"
                      onClick={() => setFormData((f) => ({ ...f, project: project.title }))}
                      className="inline-flex items-center gap-2 bg-primary-500 text-background-50 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Inquire About This Project
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-arrow-right-line text-sm"></i>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28 bg-background-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="eyebrow">The Process</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 mb-4">How a Project Engagement Works</h2>
              <p className="text-foreground-600 max-w-xl mx-auto text-sm">
                Every project follows a clear, structured process so you always know what's happening and what's next.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: '01', title: 'Discovery Call', desc: 'We learn your workflow, pain points, and goals. You get a clear picture of what\'s possible.' },
                { step: '02', title: 'Scoping & Proposal', desc: 'We define deliverables, timeline, and a fixed project price — no surprises.' },
                { step: '03', title: 'Build & Deliver', desc: 'We execute the project, keeping you updated at every milestone.' },
                { step: '04', title: 'Handoff & Training', desc: 'You receive the finished system plus documentation and training so your team can run it.' },
              ].map((s, i) => (
                <div key={i} className="bg-background-50 rounded-2xl p-6 border border-background-200 text-center">
                  <div className="w-14 h-14 border-2 border-primary-300 rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="text-lg font-bold text-primary-600">{s.step}</span>
                  </div>
                  <h3 className="font-bold text-foreground-950 mb-2 text-sm">{s.title}</h3>
                  <p className="text-foreground-600 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 md:py-20 bg-primary-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-background-50 mb-4">Not sure which project fits your business?</h2>
            <p className="text-primary-200 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute call and we'll identify the highest-impact AI project for your specific situation.
            </p>
            <a
              href="#inquiry"
              className="inline-flex items-center justify-center bg-background-50 text-foreground-950 px-10 py-4 rounded-lg font-semibold text-sm hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Book a Free Discovery Call
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </div>
        </section>

        {/* Inquiry Form */}
        <section id="inquiry" className="py-20 md:py-28 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <div className="eyebrow">Get Started</div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">Start a Project</h2>
                <p className="text-foreground-600 text-sm">
                  Tell us about your business and what you're trying to solve. We'll reach out within 1 business day.
                </p>
              </div>

              {submitted ? (
                <div className="bg-background-100 border border-background-200 rounded-2xl p-14 text-center">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <i className="ri-check-line text-primary-600 text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-foreground-950 mb-2">We've Got Your Inquiry!</h3>
                  <p className="text-foreground-600 text-sm">Expect a reply within 1 business day to discuss your project.</p>
                </div>
              ) : (
                <form
                  data-readdy-form
                  id="ai-projects-inquiry"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground-900 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full bg-background-100 border border-background-200 rounded-lg px-4 py-3 text-sm text-foreground-950 placeholder-foreground-400 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground-900 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full bg-background-100 border border-background-200 rounded-lg px-4 py-3 text-sm text-foreground-950 placeholder-foreground-400 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground-900 mb-1.5">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full bg-background-100 border border-background-200 rounded-lg px-4 py-3 text-sm text-foreground-950 placeholder-foreground-400 focus:outline-none focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground-900 mb-1.5">Which project interests you most?</label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full bg-background-100 border border-background-200 rounded-lg px-4 py-3 text-sm text-foreground-950 focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"
                    >
                      <option value="">Select a project type</option>
                      <option value="Clean Data & Taxonomy Organization">Clean Data &amp; Taxonomy Organization</option>
                      <option value="AI UI Over Company Data (RAG / Internal Search)">AI UI Over Company Data (RAG / Internal Search)</option>
                      <option value="Custom Small Tools & Automations">Custom Small Tools &amp; Automations</option>
                      <option value="Quarterly Earnings Call Prep Automation">Quarterly Earnings Call Prep Automation</option>
                      <option value="Meeting Recording → Summaries → Action Tracking">Meeting Recording → Summaries → Action Tracking</option>
                      <option value="Not sure yet">Not sure yet — help me decide</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground-900 mb-1.5">Describe your situation or challenge</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => {
                        if (e.target.value.length <= 500) setFormData({ ...formData, message: e.target.value });
                      }}
                      rows={4}
                      placeholder="What's the problem you're trying to solve? What does your current workflow look like?"
                      className="w-full bg-background-100 border border-background-200 rounded-lg px-4 py-3 text-sm text-foreground-950 placeholder-foreground-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    />
                    <p className="text-xs text-foreground-500 mt-1 text-right">{formData.message.length}/500</p>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary-500 text-background-50 py-4 rounded-lg font-semibold text-sm hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-60"
                  >
                    {submitting ? 'Sending...' : 'Submit Project Inquiry'}
                  </button>
                  <p className="text-center text-xs text-foreground-500">
                    No commitment required. We respond within 1 business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}