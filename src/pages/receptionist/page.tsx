import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { ScrollReveal } from './components/ScrollReveal';

const inboundFeatures = [
  {
    icon: 'ri-phone-line',
    title: 'Answers Every Call',
    description: 'Zero missed calls. Nova AI picks up on the first ring, every time — 24/7/365, including holidays.',
  },
  {
    icon: 'ri-user-voice-line',
    title: 'Natural Conversations',
    description: 'Callers speak naturally. Nova understands context, intent, and tone — no "press 1 for sales" menus.',
  },
  {
    icon: 'ri-calendar-check-line',
    title: 'Books Appointments',
    description: 'Live calendar integration. Nova checks availability, books the slot, and sends confirmation — all during the call.',
  },
  {
    icon: 'ri-chat-forward-line',
    title: 'Smart Routing',
    description: 'Urgent calls get routed to the right person instantly. Non-urgent messages are summarized and delivered via SMS or email.',
  },
  {
    icon: 'ri-database-2-line',
    title: 'Remembers Every Customer',
    description: 'Built-in CRM. Nova recalls past calls, preferences, and history — every caller feels known from hello.',
  },
  {
    icon: 'ri-translate-2',
    title: 'Multi-Language Support',
    description: 'Handles calls in 30+ languages. Serve diverse communities without hiring multilingual staff.',
  },
];

const outboundFeatures = [
  {
    icon: 'ri-share-forward-line',
    title: 'Appointment Reminders',
    description: 'Automated outbound calls confirm, reschedule, or cancel appointments. Dramatically reduce no-shows.',
  },
  {
    icon: 'ri-user-search-line',
    title: 'Lead Follow-Up',
    description: 'Nova calls every new lead within 5 minutes of inquiry. Speed-to-lead is the #1 conversion factor.',
  },
  {
    icon: 'ri-survey-line',
    title: 'Customer Surveys',
    description: 'Post-service satisfaction calls. Collect ratings and feedback automatically — no forms, no emails.',
  },
  {
    icon: 'ri-notification-3-line',
    title: 'Payment & Renewal Reminders',
    description: 'Friendly outbound calls remind customers of upcoming payments, renewals, or expiring offers.',
  },
  {
    icon: 'ri-bar-chart-grouped-line',
    title: 'Reactivation Campaigns',
    description: 'Win back dormant customers. Nova runs personalized outbound campaigns to bring them back.',
  },
  {
    icon: 'ri-building-line',
    title: 'Bulk Outreach',
    description: 'New location opening? Seasonal promotion? Nova calls your entire list — personal, not robocall.',
  },
];

const benefits = [
  {
    icon: 'ri-timer-flash-line',
    title: 'Never Miss Revenue',
    stat: '100%',
    description: 'of missed calls captured. Nova answers every single one — inbound and outbound, so nothing slips through.',
  },
  {
    icon: 'ri-money-dollar-circle-line',
    title: 'Fraction of the Cost',
    stat: '85%',
    description: 'less than a full-time receptionist. No salary, benefits, sick days, or turnover.',
  },
  {
    icon: 'ri-moon-line',
    title: 'True 24/7 Coverage',
    stat: '24-7',
    description: 'hours a week. Nights, weekends, holidays — your business never sleeps.',
  },
  {
    icon: 'ri-speed-up-line',
    title: 'Instant Scalability',
    stat: 'Unlimited',
    description: 'concurrent calls. No more hold music or voicemail during peak hours.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Consistent Quality',
    stat: '100%',
    description: 'brand-compliant conversations. Every caller gets the same excellent experience.',
  },
  {
    icon: 'ri-line-chart-line',
    title: 'Actionable Analytics',
    stat: 'Real-time',
    description: 'call transcripts, sentiment analysis, and conversion dashboards at your fingertips.',
  },
];

const useCases = [
  {
    industry: 'Medical & Dental Practices',
    icon: 'ri-heart-pulse-line',
    pain: 'Front desk overwhelmed. Patients on hold. Appointments booked wrong.',
    solution: 'Nova handles scheduling, reminders, insurance verification questions, and after-hours urgent triage. Front desk focuses on in-person patients.',
  },
  {
    industry: 'Law Firms',
    icon: 'ri-scales-line',
    pain: 'Missed intake calls = missed cases. Attorneys can\'t answer during court.',
    solution: 'Nova qualifies every lead, captures case details, checks conflict of interest, and schedules consultation — 24/7. No lead leaks.',
  },
  {
    industry: 'Home Services (HVAC, Plumbing, Electrical)',
    icon: 'ri-tools-line',
    pain: 'Calls come in waves. Emergency calls at 2am go to voicemail.',
    solution: 'Nova triages emergencies instantly, dispatches to on-call techs, books non-urgent appointments, and follows up post-service.',
  },
  {
    industry: 'Salons & Spas',
    icon: 'ri-scissors-line',
    pain: 'Stylists can\'t answer phones. Bookings pile up on Instagram DMs and texts.',
    solution: 'Nova manages the entire booking flow, sends reminders, handles reschedules, and upsells services during the call.',
  },
  {
    industry: 'Real Estate Agencies',
    icon: 'ri-home-line',
    pain: 'Buyer calls go to voicemail. By the time you call back, they\'ve called two other agents.',
    solution: 'Nova answers instantly, qualifies the buyer, captures property preferences, and books the showing — while you\'re at another showing.',
  },
  {
    industry: 'Restaurants',
    icon: 'ri-restaurant-line',
    pain: 'Phone ringing during dinner rush. Reservations taken on sticky notes. Catering inquiries missed.',
    solution: 'Nova handles reservations, takeout orders, catering inquiries, and large-party bookings — during the busiest hours.',
  },
];

const faqs = [
  {
    q: 'Does Nova sound like a robot?',
    a: 'Not even close. Nova uses the latest voice AI — natural pauses, conversational tone, and emotional awareness. Most callers never realize they\'re talking to AI. We\'ve had customers ask to speak to "that nice Nova lady" again.',
  },
  {
    q: 'What if Nova can\'t handle a call?',
    a: 'Nova is trained to recognize when a human needs to step in. Complex or sensitive calls get instantly transferred to your team with full context and a summary of what\'s been discussed so far. No repetition, no frustration.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most businesses are live within 5 business days. We configure Nova to your business hours, services, pricing, FAQs, and booking system. You review and approve the call flows before going live.',
  },
  {
    q: 'Does it integrate with my existing software?',
    a: 'Yes. Nova integrates with most CRMs (Salesforce, HubSpot), scheduling tools (Calendly, Acuity), EHR systems, and practice management software. Custom integrations are available.',
  },
  {
    q: 'Can Nova handle multiple calls at once?',
    a: 'Absolutely. Unlike a human receptionist who can only handle one call at a time, Nova scales automatically. 5 calls, 50 calls, or 500 calls — no hold times, no wait, no voicemail.',
  },
  {
    q: 'What about HIPAA compliance for medical practices?',
    a: 'Nova is fully HIPAA-compliant for healthcare environments. All call data is encrypted end-to-end, and we sign BAAs with every medical practice. Your patient data stays protected.',
  },
  {
    q: 'Is there a contract or minimum commitment?',
    a: 'No long-term lock-in. Month-to-month or annual billing — your choice. Annual plans get two months free. Cancel anytime with 30 days notice.',
  },
];

function CountUp({ target, suffix = '', className = '' }: { target: number; suffix?: string; className?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let start = 0;
    const duration = 1200;
    const step = Math.max(1, Math.ceil(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasAnimated, target]);

  return <span ref={ref} className={className}>{count}{suffix}</span>;
}

export default function ReceptionistPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'inbound' | 'outbound'>('inbound');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formEl = e.target as HTMLFormElement;
    const formDataObj = new FormData(formEl);
    const params = new URLSearchParams();
    formDataObj.forEach((value, key) => {
      params.append(key, value.toString());
    });
    await fetch('https://readdy.ai/api/form/d8b3d5r4d0b9ronr960g', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-black text-white py-36">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=dark%20abstract%20technology%20background%20subtle%20flowing%20wave%20patterns%20deep%20black%20with%20very%20faint%20warm%20emerald%20green%20light%20streaks%20minimal%20geometric%20lines%20elegant%20sophisticated%20futuristic%20atmosphere%20no%20text%20no%20people%20extremely%20subtle%20glow&width=1440&height=800&seq=nova-hero-bg-001&orientation=landscape"
              alt="Nova AI background"
              className="w-full h-full object-cover object-top opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full mb-8 opacity-0 animate-fade-in">
                <span className="w-2 h-2 bg-[#42BEA2] rounded-full animate-pulse"></span>
                Now Taking Calls for SMBs Nationwide
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 tracking-tight opacity-0 animate-fade-in-up [animation-delay:150ms]">
                Meet Nova AI
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium mb-3 opacity-0 animate-fade-in-up [animation-delay:300ms]">
                Your 24/7 AI Receptionist by NevTech
              </p>
              <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up [animation-delay:450ms]">
                She answers every call. She books appointments. She follows up with leads. And she never takes a day off.
              </p>
              <p className="text-base text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up [animation-delay:550ms]">
                Small and medium businesses lose an average of 62% of inbound callers who hang up when no one answers. Nova AI captures 100% of those missed calls — delivering natural, intelligent phone conversations that turn callers into customers, day and night.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in-up [animation-delay:700ms]">
                <a
                  href="#demo-form"
                  className="bg-white text-black px-10 py-4 rounded-lg text-base font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Get a Demo
                  <span className="ml-2">&#8594;</span>
                </a>
                <a
                  href="#how-it-works"
                  className="border-2 border-white/30 text-white px-10 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer"
                >
                  See How It Works
                </a>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-12 opacity-0 animate-fade-in [animation-delay:900ms]">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-xs text-gray-500 tracking-wide">Always on, never off</div>
                </div>
                <div className="text-center">
                  <CountUp target={100} suffix="%" className="text-2xl md:text-3xl font-bold text-white mb-1 block" />
                  <div className="text-xs text-gray-500 tracking-wide">Missed calls Nova captures</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">&lt; 2 sec</div>
                  <div className="text-xs text-gray-500 tracking-wide">Average answer time</div>
                </div>
                <div className="text-center">
                  <CountUp target={30} suffix="+" className="text-2xl md:text-3xl font-bold text-white mb-1 block" />
                  <div className="text-xs text-gray-500 tracking-wide">Languages supported</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE COST OF MISSED CALLS ────────────────────────────────────── */}
        <ScrollReveal><section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-[#42BEA2] text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
                  The Problem
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  Every Missed Call Is a Lost Customer
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                  Small businesses lose thousands every month to unanswered calls. Here's what that actually looks like.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: 'ri-close-circle-line',
                    title: '100% Captured',
                    desc: 'Nova answers every single call, 24/7. No more missed opportunities. Every caller gets a real conversation — every time, guaranteed.',
                  },
                  {
                    icon: 'ri-mental-health-line',
                    title: 'Front Desk Burnout',
                    desc: 'Your staff can\'t answer phones and serve in-person customers simultaneously. Something suffers — usually both.',
                  },
                  {
                    icon: 'ri-moon-line',
                    title: 'After-Hours Black Hole',
                    desc: 'Emergencies don\'t clock out at 5pm. When a pipe bursts at 11pm, your voicemail isn\'t dispatching a plumber.',
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-gray-400 hover:scale-[1.02] transition-all duration-300">
                    <div className="w-11 h-11 bg-[#42BEA2] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <i className={`${item.icon} text-white text-lg`}></i>
                    </div>
                    <h3 className="font-bold text-black text-base mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section></ScrollReveal>

        {/* ── INBOUND & OUTBOUND ───────────────────────────────────────────── */}
        <ScrollReveal><section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <span className="inline-block bg-[#42BEA2] text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
                  What Nova Does
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  Inbound & Outbound, Covered
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                  Nova handles the full conversation lifecycle — from first ring to follow-up call.
                </p>
              </div>

              {/* Tab switcher */}
              <div className="flex justify-center mb-12">
                <div className="inline-flex bg-white border border-gray-200 rounded-full p-1">
                  <button
                    onClick={() => setActiveTab('inbound')}
                    className={`px-8 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === 'inbound'
                        ? 'bg-[#42BEA2] text-white'
                        : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    <i className="ri-phone-line mr-2"></i>
                    Inbound Calling
                  </button>
                  <button
                    onClick={() => setActiveTab('outbound')}
                    className={`px-8 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === 'outbound'
                        ? 'bg-[#42BEA2] text-white'
                        : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    <i className="ri-share-forward-line mr-2"></i>
                    Outbound Calling
                  </button>
                </div>
              </div>

              {/* Feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {(activeTab === 'inbound' ? inboundFeatures : outboundFeatures).map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#42BEA2] hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-[#42BEA2] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <i className={`${item.icon} text-white text-base`}></i>
                    </div>
                    <h3 className="font-bold text-black text-sm mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section></ScrollReveal>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
        <ScrollReveal><section id="how-it-works" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-[#42BEA2] text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
                  Getting Started
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">How It Works</h2>
                <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                  From first call to live in under a week. No technical setup on your end.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {[
                  {
                    step: '01',
                    title: 'We Learn Your Business',
                    icon: 'ri-chat-smile-2-line',
                    desc: 'A 30-minute call to understand your services, pricing, FAQs, booking system, and call handling preferences. We configure Nova to sound exactly like your brand.',
                  },
                  {
                    step: '02',
                    title: 'Nova Goes Live',
                    icon: 'ri-rocket-line',
                    desc: 'Within 5 business days, Nova starts answering your calls. You review the call flows, test the experience, and give feedback. We tune until it\'s perfect.',
                  },
                  {
                    step: '03',
                    title: 'You Watch the Results',
                    icon: 'ri-bar-chart-line',
                    desc: 'Real-time dashboard shows every call, booking, lead captured, and dollar attributed. Monthly optimization calls keep Nova getting smarter.',
                  },
                ].map((item, i) => (
                  <div key={i} className="relative p-8 text-center group">
                    {i < 2 && (
                      <div className="hidden md:block absolute top-16 right-0 w-full h-px">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-px bg-gray-300"></div>
                      </div>
                    )}
                    <div className="w-16 h-16 bg-[#42BEA2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <i className={`${item.icon} text-black text-lg`}></i>
                    </div>
                    <h3 className="font-bold text-black text-base mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section></ScrollReveal>

        {/* ── T-MOBILE OFFER ───────────────────────────────────────────────── */}
        <ScrollReveal><section className="py-20 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=dark%20abstract%20technology%20background%20with%20very%20subtle%20warm%20emerald%20green%20light%20rays%20radiating%20from%20center%20deep%20black%20edges%20minimal%20elegant%20premium%20feel%20no%20text%20no%20people&width=1440&height=500&seq=nova-tmobile-bg-001&orientation=landscape"
              alt="T-Mobile partnership background"
              className="w-full h-full object-cover object-top opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#42BEA2]/20 border border-[#42BEA2]/40 text-[#42BEA2] text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full mb-8">
                <i className="ri-flashlight-line"></i>
                Limited-Time Offer
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                6 Months Free Inbound Calling
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                When you sign up for T-Mobile Business through NevTech
              </p>
              <p className="text-gray-400 text-base max-w-2xl mx-auto mb-4 leading-relaxed">
                Already switching to T-Mobile for your business lines, tablets, or internet? We'll give you <strong className="text-white">six full months of Nova AI inbound call handling — completely free</strong>. That's unlimited answered calls, appointment booking, and lead capture at zero cost while you settle into your new T-Mobile service.
              </p>
              <p className="text-gray-500 text-sm max-w-xl mx-auto mb-10">
                Already a T-Mobile business customer? You qualify too. Just mention it when you book your demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#demo-form"
                  className="bg-[#42BEA2] text-white px-10 py-4 rounded-lg text-base font-bold hover:bg-[#2E9278] transition-colors whitespace-nowrap cursor-pointer"
                >
                  Claim Your 6 Free Months
                  <span className="ml-2">&#8594;</span>
                </a>
                <Link
                  to="/tmobile-business"
                  className="border-2 border-white/30 text-white px-10 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer"
                >
                  See T-Mobile Business Plans
                </Link>
              </div>
            </div>
          </div>
        </section></ScrollReveal>

        {/* ── BENEFITS ─────────────────────────────────────────────────────── */}
        <ScrollReveal><section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-[#42BEA2] text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
                  Why Nova
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Built for Small & Medium Business</h2>
                <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                  Everything a receptionist does — without the salary, sick days, or 5pm clock-out.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white border border-gray-200 rounded-2xl p-7 hover:border-[#42BEA2] hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 bg-[#42BEA2] rounded-xl flex items-center justify-center">
                        <i className={`${item.icon} text-white text-lg`}></i>
                      </div>
                      <span className="text-2xl font-bold text-black">{item.stat}</span>
                    </div>
                    <h3 className="font-bold text-black text-base mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section></ScrollReveal>

        {/* ── WHO IT'S FOR ─────────────────────────────────────────────────── */}
        <ScrollReveal><section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-[#42BEA2] text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
                  Use Cases
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Nova Across Industries</h2>
                <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                  Same AI receptionist, configured for how your business actually works.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {useCases.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-[#42BEA2] hover:scale-[1.02] transition-all duration-300 flex flex-col">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-[#42BEA2] rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className={`${item.icon} text-white text-lg`}></i>
                      </div>
                      <h3 className="font-bold text-black text-base">{item.industry}</h3>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1.5">The Pain</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.pain}</p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <p className="text-xs font-bold tracking-widest uppercase text-black mb-1.5">How Nova Fixes It</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section></ScrollReveal>

        {/* ── MID CTA ──────────────────────────────────────────────────────── */}
        <ScrollReveal><section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your competitors are answering. Are you?
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
                While you're reading this, Nova could be answering your calls, booking your appointments, and capturing leads you're currently losing to voicemail.
              </p>
              <a
                href="#demo-form"
                className="inline-block bg-white text-black px-10 py-4 rounded-lg font-semibold text-base hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                Start Answering Every Call &#8594;
              </a>
            </div>
          </div>
        </section></ScrollReveal>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <ScrollReveal><section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-[#42BEA2] text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
                  FAQ
                </span>
                <h2 className="text-4xl font-bold text-black mb-4">Honest Answers for Skeptical Owners</h2>
                <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                  Because "AI receptionist" sounds too good to be true. We get it.
                </p>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-black text-sm pr-4">{faq.q}</span>
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <i className={`ri-add-line text-black transition-transform duration-300 ${openFaq === i ? 'rotate-45' : 'rotate-0'}`}></i>
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-out ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="px-6 pb-5 border-t border-gray-100">
                        <p className="text-gray-600 text-sm leading-relaxed pt-4">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section></ScrollReveal>

        {/* ── DEMO FORM + CLOSING CTA ──────────────────────────────────────── */}
        <ScrollReveal><section id="demo-form" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left - closing copy */}
                <div>
                  <span className="inline-block bg-[#42BEA2] text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                    Let's Talk
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                    Ready to Never Miss<br />Another Call?
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Fill out the form and we'll give you a live demo of Nova AI handling real calls for a business just like yours. No slide deck. No sales pitch. Just a conversation.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      { icon: 'ri-check-double-line', text: 'See Nova answer real calls live on the demo' },
                      { icon: 'ri-check-double-line', text: 'Get a custom pricing quote tailored to your call volume' },
                      { icon: 'ri-check-double-line', text: 'Learn if you qualify for 6 months free inbound (T-Mobile)' },
                      { icon: 'ri-check-double-line', text: 'Zero obligation — we hate pushy sales as much as you do' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <i className="ri-check-double-line text-[#42BEA2]"></i>
                        </div>
                        <span className="text-gray-600 text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-[#42BEA2] rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-phone-line text-white"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Prefer to talk now?</p>
                      <p className="text-black font-bold text-sm">(317) 508-9493</p>
                    </div>
                  </div>
                </div>

                {/* Right - form */}
                <div className="bg-black rounded-2xl p-8 text-white">
                  {!submitted ? (
                    <>
                      <h3 className="text-2xl font-bold mb-2">Get Your Live Demo</h3>
                      <p className="text-gray-400 text-sm mb-8">We'll reach out within 1 business day</p>
                      <form onSubmit={handleSubmit} className="space-y-5" data-readdy-form="">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="John Smith"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="john@company.com"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder="(317) 555-0123"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1.5">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            placeholder="Your Business LLC"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="employees" className="block text-sm font-medium text-gray-300 mb-1.5">
                            Number of Employees
                          </label>
                        <div className="relative">
                          <select
                            id="employees"
                            name="employees"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/50 text-sm cursor-pointer appearance-none"
                          >
                            <option value="" className="text-black">Select...</option>
                            <option value="1-5" className="text-black">1–5</option>
                            <option value="6-20" className="text-black">6–20</option>
                            <option value="21-50" className="text-black">21–50</option>
                            <option value="51-200" className="text-black">51–200</option>
                            <option value="200+" className="text-black">200+</option>
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <i className="ri-arrow-down-s-line text-gray-400"></i>
                          </div>
                        </div>
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-white text-black py-4 rounded-lg font-bold text-base hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer mt-2"
                        >
                          Request Your Live Demo &#8594;
                        </button>
                        <p className="text-xs text-center text-gray-500">
                          No spam. No pushy follow-ups. We promise.
                        </p>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="ri-check-line text-white text-3xl"></i>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Demo Request Received!</h3>
                      <p className="text-gray-400 text-sm mb-2">
                        We'll reach out within 1 business day to schedule your live Nova AI demo.
                      </p>
                      <p className="text-gray-500 text-xs">
                        While you wait — try calling <strong className="text-white">(317) 508-9493</strong> to hear Nova in action for yourself.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section></ScrollReveal>

      </main>
      <Footer />
    </div>
  );
}