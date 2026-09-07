import { useState } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

export default function TMobileBusinessPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: 'phone-lines'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pink-50 to-white py-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-500"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  🔥 LIMITED TIME OFFER - INDIANA BUSINESSES
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                  T-Mobile Business Services Starting at <span className="text-pink-600">$10/Month</span>
                </h1>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Unbeatable pricing for Indiana businesses: 10 phone lines for only $10 each, tablets at $15/month, 
                  and blazing-fast business internet for just $50. No contracts. No hidden fees. Just incredible value.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-pink-200">
                    <div className="text-3xl font-bold text-pink-600 mb-1">$10</div>
                    <div className="text-sm text-gray-600">Per Phone Line</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-pink-200">
                    <div className="text-3xl font-bold text-pink-600 mb-1">$15</div>
                    <div className="text-sm text-gray-600">Per Tablet</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-pink-200">
                    <div className="text-3xl font-bold text-pink-600 mb-1">$50</div>
                    <div className="text-sm text-gray-600">Business Internet</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <i className="ri-check-double-line text-pink-600 text-xl mr-2"></i>
                    <span>No Contract</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-check-double-line text-pink-600 text-xl mr-2"></i>
                    <span>Fast Speeds</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-check-double-line text-pink-600 text-xl mr-2"></i>
                    <span>Indiana Coverage</span>
                  </div>
                </div>
              </div>

              {/* Lead Form */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-black mb-2">Get Your Free Quote</h3>
                      <p className="text-gray-600">Lock in these exclusive rates today</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                          placeholder="(317) 555-0123"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                          placeholder="Your Company LLC"
                        />
                      </div>

                      <div>
                        <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                          I'm Interested In *
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          required
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm cursor-pointer"
                        >
                          <option value="phone-lines">Phone Lines ($10/line)</option>
                          <option value="tablets">Tablets ($15/month)</option>
                          <option value="internet">Business Internet ($50/month)</option>
                          <option value="all">All Services</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-pink-600 text-white py-4 rounded-lg text-lg font-bold hover:bg-pink-700 transition-colors whitespace-nowrap cursor-pointer shadow-lg"
                      >
                        Get My Free Quote Now
                      </button>

                      <p className="text-xs text-center text-gray-500">
                        No credit card required • Response within 1 hour
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="ri-check-line text-green-600 text-4xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-4">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      We've received your request. A T-Mobile business specialist will contact you within 1 hour 
                      to discuss your custom quote and answer any questions.
                    </p>
                    <a 
                      href="tel:+13175550123" 
                      className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Or Call Us Now: (317) 555-0123
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Why Indiana Businesses Choose T-Mobile
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                More than just low prices - get enterprise-grade service with unbeatable flexibility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-money-dollar-circle-line text-pink-600 text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Unbeatable Pricing</h3>
                <p className="text-gray-600">
                  Save up to 60% compared to traditional carriers. No hidden fees or surprise charges.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-file-forbid-line text-pink-600 text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">No Contracts</h3>
                <p className="text-gray-600">
                  Month-to-month flexibility. Cancel anytime with no penalties or termination fees.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-speed-line text-pink-600 text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Blazing Fast Speeds</h3>
                <p className="text-gray-600">
                  5G coverage across Indiana. Download speeds up to 1Gbps in select areas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-customer-service-2-line text-pink-600 text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Dedicated business support team available around the clock for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Phone Lines */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200">
                <div className="w-16 h-16 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-smartphone-line text-white text-2xl"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">Business Phone Lines</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-pink-600 mb-2">$10<span className="text-xl text-gray-600">/line</span></div>
                  <p className="text-sm text-gray-600">10 lines minimum</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">Unlimited talk & text</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">High-speed data included</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">Mobile hotspot capability</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">Nationwide 5G coverage</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">Free number porting</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">No activation fees</span>
                  </li>
                </ul>

                <a 
                  href="#quote-form" 
                  className="block w-full bg-pink-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-pink-700 transition-colors whitespace-nowrap cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </a>
              </div>

              {/* Tablets */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200">
                <div className="w-16 h-16 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-tablet-line text-white text-2xl"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">Business Tablets</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-pink-600 mb-2">$15<span className="text-xl text-gray-600">/month</span></div>
                  <p className="text-sm text-gray-600">Per tablet with data</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">Latest tablet models available</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">High-speed data included</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">Perfect for field teams</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">Mobile device management</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">Business app support</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">Flexible upgrade options</span>
                  </li>
                </ul>

                <a 
                  href="#quote-form" 
                  className="block w-full bg-pink-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-pink-700 transition-colors whitespace-nowrap cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </a>
              </div>

              {/* Business Internet */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200">
                <div className="w-16 h-16 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-wifi-line text-white text-2xl"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">Business Internet</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-pink-600 mb-2">$50<span className="text-xl text-gray-600">/month</span></div>
                  <p className="text-sm text-gray-600">High-speed connectivity</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">5G ultra-fast speeds</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">No data caps or throttling</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">Easy setup - plug & play</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">Perfect backup internet</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">Multiple device support</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-pink-600 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">Business-grade security</span>
                  </li>
                </ul>

                <a 
                  href="#quote-form" 
                  className="block w-full bg-pink-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-pink-700 transition-colors whitespace-nowrap cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Indiana Coverage */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Exceptional Coverage Across Indiana
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  T-Mobile's 5G network covers all major Indiana cities and surrounding areas with 
                  lightning-fast speeds and reliable connectivity.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <i className="ri-map-pin-line text-pink-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-black">Indianapolis Metro</h4>
                      <p className="text-sm text-gray-600">Full 5G Ultra Capacity coverage</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <i className="ri-map-pin-line text-pink-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-black">Fort Wayne</h4>
                      <p className="text-sm text-gray-600">Extended 5G coverage area</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <i className="ri-map-pin-line text-pink-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-black">Evansville</h4>
                      <p className="text-sm text-gray-600">Reliable 5G connectivity</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <i className="ri-map-pin-line text-pink-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-black">South Bend & Statewide</h4>
                      <p className="text-sm text-gray-600">Comprehensive Indiana coverage</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <i className="ri-map-2-line text-pink-600 text-6xl mb-4"></i>
                  <p className="text-gray-600 font-semibold">Indiana Coverage Map</p>
                  <p className="text-sm text-gray-500 mt-2">5G available in all major cities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                What Indiana Businesses Are Saying
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "We switched our entire team of 15 to these T-Mobile plans and saved over $1,200 per month. 
                  The speeds are incredible and the no-contract flexibility is perfect for our growing business."
                </p>
                <div>
                  <div className="font-bold text-black">Sarah Mitchell</div>
                  <div className="text-sm text-gray-600">Operations Manager, Indianapolis</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "The $50 business internet is a game-changer. We use it as our backup connection and it's 
                  faster than our primary fiber line. Setup took 5 minutes!"
                </p>
                <div>
                  <div className="font-bold text-black">Mike Rodriguez</div>
                  <div className="text-sm text-gray-600">IT Director, Fort Wayne</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "Our field technicians love the $15 tablets. They're perfect for job sites and the data 
                  speeds are excellent throughout Indiana. Best decision we made this year."
                </p>
                <div>
                  <div className="font-bold text-black">Jennifer Adams</div>
                  <div className="text-sm text-gray-600">Owner, HVAC Services</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-black mb-3 text-lg">Is there really no contract?</h4>
                  <p className="text-gray-600">
                    Absolutely! All our T-Mobile business services are month-to-month with no long-term contracts. 
                    You can cancel anytime without penalties or termination fees.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-black mb-3 text-lg">What's the catch with these prices?</h4>
                  <p className="text-gray-600">
                    No catch! These are exclusive business rates available through NevTech AI for Indiana businesses. 
                    The pricing is locked in as long as you maintain service - no surprise increases.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-black mb-3 text-lg">How fast is the internet speed?</h4>
                  <p className="text-gray-600">
                    T-Mobile 5G delivers download speeds typically between 100-300 Mbps, with some areas reaching 
                    up to 1 Gbps. Speeds vary by location but are consistently fast across Indiana.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-black mb-3 text-lg">Can I keep my existing phone numbers?</h4>
                  <p className="text-gray-600">
                    Yes! We offer free number porting from any carrier. Your business numbers will transfer 
                    seamlessly with no downtime.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-black mb-3 text-lg">What if I need fewer than 10 lines?</h4>
                  <p className="text-gray-600">
                    The $10/line pricing requires a minimum of 10 lines. However, we have other competitive 
                    options for smaller teams. Contact us for a custom quote.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-black mb-3 text-lg">How long does setup take?</h4>
                  <p className="text-gray-600">
                    Most businesses are up and running within 3-5 business days. Business internet can be 
                    activated same-day in many cases. We handle all the technical details for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Save Big on Business Connectivity?
              </h2>
              <p className="text-xl mb-8 text-pink-100">
                Join hundreds of Indiana businesses already saving thousands with T-Mobile business services. 
                Get your free quote in under 60 seconds.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="#quote-form" 
                  className="bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Get Free Quote
                </a>
                <a 
                  href="tel:+13175550123" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-pink-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Call: (317) 555-0123
                </a>
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm text-pink-100">
                <div className="flex items-center">
                  <i className="ri-shield-check-line text-xl mr-2"></i>
                  <span>No Contract</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-time-line text-xl mr-2"></i>
                  <span>Quick Setup</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-customer-service-line text-xl mr-2"></i>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
