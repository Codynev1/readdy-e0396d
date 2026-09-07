import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/feature/Footer';

export default function GetLeadsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    optInTransactional: false,
    optInMarketing: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Remove the transactional consent requirement check
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const body = new URLSearchParams();
      body.append('name', formData.name);
      body.append('email', formData.email);
      body.append('phone', formData.phone);
      body.append('company', formData.company);
      body.append('industry', formData.industry);
      body.append('transactional_sms_consent', formData.optInTransactional ? 'Yes' : 'No');
      body.append('marketing_sms_consent', formData.optInMarketing ? 'Yes' : 'No');

      const res = await fetch('https://readdy.ai/api/form/d6fjdtor225iqdhs0b4g', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', industry: '', optInTransactional: false, optInMarketing: false });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [target.name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [target.name]: target.value
      }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="bg-white border-b border-gray-200 py-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-black">
              NevTech AI
            </Link>
            <a 
              href="tel:3175089493"
              className="text-black hover:text-gray-600 font-semibold flex items-center cursor-pointer"
            >
              <i className="ri-phone-line mr-2"></i>
              (317) 508-9493
            </a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section with Form */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
              {/* Left Column - Copy */}
              <div>
                <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  ⚡ Limited Time: Free Setup ($2,500 Value)
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                  Stop Losing Leads to Voicemail
                </h1>
                
                <p className="text-2xl text-gray-700 mb-6 font-semibold">
                  Get 3X More Qualified Leads with AI Voice Agents That Never Miss a Call
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-white text-lg"></i>
                    </div>
                    <div className="ml-4">
                      <strong className="text-black text-lg">Answer Every Call 24/7</strong>
                      <p className="text-gray-600">No more missed opportunities. AI picks up instantly, even after hours.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-white text-lg"></i>
                    </div>
                    <div className="ml-4">
                      <strong className="text-black text-lg">Qualify Leads Automatically</strong>
                      <p className="text-gray-600">Smart questions identify serious buyers and filter out tire-kickers.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-white text-lg"></i>
                    </div>
                    <div className="ml-4">
                      <strong className="text-black text-lg">Book Appointments Instantly</strong>
                      <p className="text-gray-600">Meetings scheduled directly into your calendar while leads are hot.</p>
                    </div>
                  </li>
                </ul>

                {/* Trust Indicators */}
                <div className="flex items-center space-x-8 pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-3xl font-bold text-black">15-40%</div>
                    <div className="text-sm text-gray-600">Conversion Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-black">24/7</div>
                    <div className="text-sm text-gray-600">Always Available</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-black">70%</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-black">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-black mb-2">
                    Get Your Free Demo
                  </h2>
                  <p className="text-gray-600">
                    See how AI voice agents can transform your lead generation in just 15 minutes
                  </p>
                </div>

                {submitStatus === 'success' ? (
                  <div className="bg-gray-50 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-check-line text-white text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      We'll contact you within 24 hours to schedule your personalized demo.
                    </p>
                    <a 
                      href="https://calendly.com/cody-nevtech/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Or Book Now on Calendly
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} id="get-leads-form" data-readdy-form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none text-sm"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none text-sm"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none text-sm"
                        placeholder="(317) 555-0123"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-black mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none text-sm"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-sm font-semibold text-black mb-2">
                        Industry *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none text-sm cursor-pointer"
                      >
                        <option value="">Select your industry</option>
                        <option value="healthcare">Healthcare / Medical</option>
                        <option value="manufacturing">Manufacturing / Industrial</option>
                        <option value="security">Security Systems</option>
                        <option value="staffing">Staffing / Recruiting</option>
                        <option value="facilities">Facilities / HVAC</option>
                        <option value="construction">Construction / Contractors</option>
                        <option value="financial">Financial / Insurance</option>
                        <option value="software">Software / SaaS</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* A2P Compliant SMS Consent Section */}
                    <div className="space-y-4 pt-4 border-t-2 border-gray-200">
                      <div className="text-sm font-semibold text-black mb-3">
                        SMS Consent (Optional)
                      </div>

                      {/* Optional: Transactional SMS Consent */}
                      <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-300">
                        <label className="flex items-start cursor-pointer group">
                          <input
                            type="checkbox"
                            name="optInTransactional"
                            checked={formData.optInTransactional}
                            onChange={handleChange}
                            className="mt-1 w-5 h-5 border-2 border-gray-400 rounded accent-black cursor-pointer flex-shrink-0"
                          />
                          <span className="ml-3 text-sm text-gray-700 leading-relaxed">
                            <strong className="text-black">I agree to receive transactional messages from NevTurn Ventures LLC DBA NevTech</strong> at the phone number provided, including appointment reminders, account alerts, AI receptionist follow-ups, and missed call notifications. Message frequency may vary. Message &amp; data rates may apply. Reply <strong>HELP</strong> for help or <strong>STOP</strong> to opt out.
                          </span>
                        </label>
                      </div>

                      {/* Optional: Marketing SMS Consent */}
                      <div className="bg-white rounded-lg p-4 border-2 border-gray-300">
                        <label className="flex items-start cursor-pointer group">
                          <input
                            type="checkbox"
                            name="optInMarketing"
                            checked={formData.optInMarketing}
                            onChange={handleChange}
                            className="mt-1 w-5 h-5 border-2 border-gray-400 rounded accent-black cursor-pointer flex-shrink-0"
                          />
                          <span className="ml-3 text-sm text-gray-700 leading-relaxed">
                            <strong className="text-black">I agree to receive marketing messages from NevTurn Ventures LLC DBA NevTech</strong> at the phone number provided, including promotions, campaigns, offers, and newsletters. Message frequency may vary. Message &amp; data rates may apply. Reply <strong>HELP</strong> for help or <strong>STOP</strong> to opt out.
                          </span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <i className="ri-loader-4-line animate-spin mr-2"></i>
                          Processing...
                        </span>
                      ) : (
                        'Get My Free Demo'
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center leading-relaxed">
                      By submitting this form, you agree to our <Link to="/compliance" className="underline hover:text-black">Privacy Policy</Link> and <Link to="/compliance" className="underline hover:text-black">Terms of Service</Link>. Your information will not be shared with third parties except for SMS delivery providers.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Are You Losing Money Every Day?
              </h2>
              <p className="text-xl text-gray-600">
                Most businesses lose 30-50% of potential leads because they can't answer calls fast enough
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-8 text-center border-2 border-gray-200">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-phone-off-line text-red-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Missed Calls = Lost Revenue</h3>
                <p className="text-gray-600">
                  67% of customers hang up if they reach voicemail. Your competitors are answering while you're losing deals.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center border-2 border-gray-200">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-red-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Slow Response Times</h3>
                <p className="text-gray-600">
                  Leads contact 5+ competitors. The first to respond wins 78% of the time. Can you afford to be second?
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center border-2 border-gray-200">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-money-dollar-circle-line text-red-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Wasted Ad Spend</h3>
                <p className="text-gray-600">
                  You're paying for clicks and calls, but losing leads to voicemail. Stop throwing money away.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  The Solution: AI Voice Agents That Work 24/7
                </h2>
                <p className="text-xl text-gray-300">
                  Never miss another lead. Our AI answers every call in seconds with natural, human-like conversations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-xl p-8 border border-white/20">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6">
                    <i className="ri-phone-line text-black text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Instant Answer, Every Time</h3>
                  <p className="text-gray-300 mb-4">
                    AI picks up in under 2 seconds. No hold music, no voicemail, no missed opportunities. 
                    Your leads get immediate attention, day or night.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <i className="ri-check-line mr-2"></i>
                      Answers 24/7/365
                    </li>
                    <li className="flex items-center text-sm">
                      <i className="ri-check-line mr-2"></i>
                      Handles unlimited calls simultaneously
                    </li>
                    <li className="flex items-center text-sm">
                      <i className="ri-check-line mr-2"></i>
                      Natural, human-like voice
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-xl p-8 border border-white/20">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6">
                    <i className="ri-user-star-line text-black text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Smart Lead Qualification</h3>
                  <p className="text-gray-300 mb-4">
                    AI asks the right questions to identify serious buyers. Only qualified leads reach your sales team, 
                    saving hours of wasted time.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <i className="ri-check-line mr-2"></i>
                      Identifies decision-makers
                    </li>
                    <li className="flex items-center text-sm">
                      <i className="ri-check-line mr-2"></i>
                      Qualifies budget and timeline
                    </li>
                    <li className="flex items-center text-sm">
                      <i className="ri-check-line mr-2"></i>
                      Filters out tire-kickers
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-xl p-8 border border-white/20">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6">
                    <i className="ri-calendar-check-line text-black text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Automatic Appointment Booking</h3>
                  <p className="text-gray-300 mb-4">
                    Qualified leads are scheduled directly into your calendar with confirmations sent automatically. 
                    No back-and-forth emails.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <i className="ri-check-line mr-2"></i>
                      Real-time calendar sync
                    </li>
                    <li className="flex items-center text-sm">
                      <i className="ri-check-line mr-2"></i>
                      Automatic reminders sent
                    </li>
                    <li className="flex items-center text-sm">
                      <i className="ri-check-line mr-2"></i>
                      Reduces no-shows by 60%
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-xl p-8 border border-white/20">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6">
                    <i className="ri-links-line text-black text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">CRM Integration</h3>
                  <p className="text-gray-300 mb-4">
                    Every conversation is logged automatically in your CRM with full transcripts, call recordings, 
                    and lead scores.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <i className="ri-check-line mr-2"></i>
                      Works with Salesforce, HubSpot, etc.
                    </li>
                    <li className="flex items-center text-sm">
                      <i className="ri-check-line mr-2"></i>
                      Full call transcripts
                    </li>
                    <li className="flex items-center text-sm">
                      <i className="ri-check-line mr-2"></i>
                      Automated follow-up sequences
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Real Results from Real Businesses
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-black text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "We went from missing 40% of calls to answering 100%. Our lead conversion rate tripled in the first month."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-black">Sarah M.</div>
                  <div className="text-sm text-gray-500">Healthcare SaaS Company</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-black text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The AI sounds completely natural. Our customers don't even realize they're talking to a bot until we tell them."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-black">Mike R.</div>
                  <div className="text-sm text-gray-500">Industrial Equipment Distributor</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-black text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "ROI was immediate. We're booking 5x more appointments and our sales team only talks to qualified leads now."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-black">Jennifer L.</div>
                  <div className="text-sm text-gray-500">Commercial Security Systems</div>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="bg-black text-white rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">3X</div>
                  <div className="text-sm text-gray-300">More Qualified Leads</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-sm text-gray-300">Calls Answered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">70%</div>
                  <div className="text-sm text-gray-300">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
                🎁 Limited Time: Free Setup Worth $2,500
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Ready to Stop Losing Leads?
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Book your free demo now and see how AI voice agents can transform your business. 
                No credit card required. Setup in 48 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="#form"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-black text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer inline-block"
                >
                  Get My Free Demo
                </a>
                <a 
                  href="tel:3175089493"
                  className="border-2 border-black text-black px-10 py-5 rounded-lg text-xl font-bold hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer inline-block"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Call Now
                </a>
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <i className="ri-check-line text-black mr-2"></i>
                  No credit card required
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-black mr-2"></i>
                  Setup in 48 hours
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-black mr-2"></i>
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
