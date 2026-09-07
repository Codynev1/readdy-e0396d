import { useState, FormEvent } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    priority: 'medium',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate message length
    if (formData.message.length > 500) {
      alert('Message must be 500 characters or less');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create email body with all form data
      const emailBody = `
Support Request from ${formData.name}

Email: ${formData.email}
Subject: ${formData.subject}
Category: ${formData.category || 'Not specified'}
Priority: ${formData.priority}

Message:
${formData.message}
      `.trim();

      // Send email to Linear intake address with CC
      const response = await fetch('https://readdy.ai/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: '1964224a093e@intake.linear.app',
          cc: '1964224a093e@intake.linear.app',
          subject: `Support Request: ${formData.subject}`,
          body: emailBody,
          from: formData.email,
          replyTo: formData.email
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          priority: 'medium',
          category: '',
          message: ''
        });
        setCharCount(0);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setFormData({ ...formData, message: value });
      setCharCount(value.length);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-2-line text-3xl text-white"></i>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How Can We Help You?
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Our support team is here to assist you with any questions or issues. Get in touch and we'll respond as quickly as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Help Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-12">Quick Help Resources</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-book-open-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Browse our comprehensive guides and tutorials to get the most out of NevTech AI.
                  </p>
                  <a href="/faq" className="text-sm font-medium text-pink-600 hover:text-pink-700 cursor-pointer">
                    View Docs →
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-question-answer-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">FAQ</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Find answers to commonly asked questions about our AI receptionist service.
                  </p>
                  <a href="/faq" className="text-sm font-medium text-pink-600 hover:text-pink-700 cursor-pointer">
                    View FAQs →
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-phone-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Schedule a Call</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Book a time to speak with our team about your specific needs and questions.
                  </p>
                  <a href="/contact" className="text-sm font-medium text-pink-600 hover:text-pink-700 cursor-pointer">
                    Book Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Submit a Support Request</h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
                <form id="support-form" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name <span className="text-pink-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address <span className="text-pink-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Subject */}
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject <span className="text-pink-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                      placeholder="Brief description of your issue"
                    />
                  </div>

                  {/* Category */}
                  <div className="mb-6">
                    <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-2">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm cursor-pointer"
                    >
                      <option value="">Select a category</option>
                      <option value="technical">Technical Issue</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="integration">Integration Help</option>
                      <option value="account">Account Management</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Priority */}
                  <div className="mb-6">
                    <label htmlFor="priority" className="block text-sm font-semibold text-gray-900 mb-2">
                      Priority Level
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm cursor-pointer"
                    >
                      <option value="low">Low - General question</option>
                      <option value="medium">Medium - Need assistance</option>
                      <option value="high">High - Service impacted</option>
                      <option value="urgent">Urgent - Critical issue</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message <span className="text-pink-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleMessageChange}
                      required
                      rows={6}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm resize-none"
                      placeholder="Please describe your issue or question in detail..."
                    />
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-xs text-gray-500">
                        Please provide as much detail as possible to help us assist you better.
                      </p>
                      <p className={`text-xs ${charCount > 450 ? 'text-pink-600 font-semibold' : 'text-gray-500'}`}>
                        {charCount}/500
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Support Request'}
                  </button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start">
                        <i className="ri-checkbox-circle-fill text-green-600 text-xl mr-3 mt-0.5"></i>
                        <div>
                          <h4 className="text-sm font-semibold text-green-900 mb-1">
                            Support Request Submitted Successfully!
                          </h4>
                          <p className="text-sm text-green-700">
                            Thank you for contacting us. Our support team will review your request and respond within 24 hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-start">
                        <i className="ri-error-warning-fill text-red-600 text-xl mr-3 mt-0.5"></i>
                        <div>
                          <h4 className="text-sm font-semibold text-red-900 mb-1">
                            Submission Failed
                          </h4>
                          <p className="text-sm text-red-700">
                            There was an error submitting your request. Please try again or contact us directly at support@nevtech.io
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>

              {/* Additional Contact Info */}
              <div className="mt-12 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Need immediate assistance? Reach out to us directly:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a href="mailto:support@nevtech.io" className="flex items-center text-sm font-medium text-gray-900 hover:text-pink-600 transition-colors cursor-pointer">
                    <i className="ri-mail-line text-lg mr-2"></i>
                    support@nevtech.io
                  </a>
                  <a href="tel:+18005551234" className="flex items-center text-sm font-medium text-gray-900 hover:text-pink-600 transition-colors cursor-pointer">
                    <i className="ri-phone-line text-lg mr-2"></i>
                    1-800-555-1234
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-12">What to Expect</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-time-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-semibold mb-2">Urgent</h3>
                  <p className="text-sm text-gray-600">&lt; 2 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-flashlight-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-semibold mb-2">High</h3>
                  <p className="text-sm text-gray-600">&lt; 4 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-calendar-check-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-semibold mb-2">Medium</h3>
                  <p className="text-sm text-gray-600">&lt; 24 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-message-3-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-semibold mb-2">Low</h3>
                  <p className="text-sm text-gray-600">&lt; 48 hours</p>
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