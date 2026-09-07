import React, { useState } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4bsk2srg8gnguu95ipg', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Get in Touch
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ready to transform your business with AI? Let's discuss how NevTech can help you achieve your goals.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-phone-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Phone</h3>
                  <p className="text-gray-600 mb-4">Call us directly</p>
                  <a href="tel:3175089493" className="text-black hover:text-gray-700 font-medium">
                    (317) 508-9493
                  </a>
                </div>

                <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-mail-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Email</h3>
                  <p className="text-gray-600 mb-4">Send us a message</p>
                  <a href="mailto:cody@nevtech.io" className="text-black hover:text-gray-700 font-medium">
                    cody@nevtech.io
                  </a>
                </div>

                <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-calendar-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Schedule</h3>
                  <p className="text-gray-600 mb-4">Book a consultation</p>
                  <a 
                    href="https://calendly.com/cody-nevtech/30min" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-black hover:text-gray-700 font-medium"
                  >
                    Book Meeting
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-black mb-4">Send Us a Message</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form onSubmit={handleSubmit} data-readdy-form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm pr-8"
                    >
                      <option value="">Select a subject</option>
                      <option value="AI Strategy Consultation">AI Strategy Consultation</option>
                      <option value="Custom AI Development">Custom AI Development</option>
                      <option value="Process Automation">Process Automation</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm resize-vertical"
                      placeholder="Tell us about your project and how we can help..."
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">
                      {formData.message.length}/500 characters
                    </p>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex">
                        <i className="ri-check-circle-line text-green-400 text-xl mr-3"></i>
                        <div>
                          <h3 className="text-sm font-medium text-green-800">Message sent successfully!</h3>
                          <p className="text-sm text-green-700 mt-1">
                            Thank you for contacting us. We'll get back to you within 24 hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex">
                        <i className="ri-error-warning-line text-red-400 text-xl mr-3"></i>
                        <div>
                          <h3 className="text-sm font-medium text-red-800">Error sending message</h3>
                          <p className="text-sm text-red-700 mt-1">
                            Please try again or contact us directly at cody@nevtech.io
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="ri-loader-4-line animate-spin mr-2"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="ri-send-plane-line mr-2"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your AI transformation journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:3175089493"
                  className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Call Now
                </a>
                <a
                  href="mailto:cody@nevtech.io"
                  className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors whitespace-nowrap"
                >
                  <i className="ri-mail-line mr-2"></i>
                  Send Email
                </a>
                <a
                  href="https://calendly.com/cody-nevtech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  <i className="ri-calendar-line mr-2"></i>
                  Book Meeting
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
