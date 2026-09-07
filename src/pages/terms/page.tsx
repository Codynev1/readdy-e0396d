import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

export default function TermsPage() {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-file-text-line text-white text-4xl"></i>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 mb-4">Last Updated: January 2025</p>
              <p className="text-lg text-gray-600">
                Please read these Terms of Service carefully before using NevTech AI
                services.
              </p>
            </div>
          </div>
        </section>

        {/* Agreement to Terms */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-6">
                1. Agreement to Terms
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-4">
                  By accessing or using NevTech AI services operated by NevTurn
                  Ventures LLC DBA NevTech ("NevTech," "we," "us," or "our"), you
                  agree to be bound by these Terms of Service and all applicable
                  laws and regulations.
                </p>
                <p className="text-gray-600 mb-4">
                  If you do not agree with any part of these terms, you may not
                  access or use our services.
                </p>
                <p className="text-gray-600">
                  We reserve the right to modify these terms at any time. Your
                  continued use of our services after changes are posted
                  constitutes acceptance of the modified terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-6">
                2. Services Description
              </h2>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <p className="text-gray-600 mb-6">
                  NevTech provides AI-powered automation, communication, and
                  enterprise workflow solutions, including but not limited to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      AI receptionist and call handling services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Lead generation and customer engagement tools
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      T-Mobile Business cellular connectivity solutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Business automation and workflow optimization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      SMS and communication services
                    </span>
                  </li>
                </ul>
                <p className="text-gray-600 mt-6">
                  Service availability, features, and pricing are subject to
                  change. We will provide reasonable notice of material changes
                  to existing customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Accounts */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-6">
                3. User Accounts and Responsibilities
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-6">
                <h3 className="text-xl font-bold text-black mb-4">
                  Account Registration
                </h3>
                <p className="text-gray-600 mb-4">
                  To access certain features, you must create an account. You
                  agree to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Provide accurate, current, and complete information
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Maintain and update your information as needed
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Keep your password secure and confidential
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Notify us immediately of any unauthorized access
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-black mb-4">
                  Acceptable Use
                </h3>
                <p className="text-gray-600 mb-4">You agree NOT to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="ri-close-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Use our services for any illegal or unauthorized purpose
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-close-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Violate any laws, including TCPA, CAN-SPAM, or GDPR
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-close-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Send spam, unsolicited messages, or violate Do-Not-Call
                      lists
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-close-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Attempt to gain unauthorized access to our systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-close-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Interfere with or disrupt our services or servers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-close-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Resell or redistribute our services without authorization
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SMS Consent */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-6">
                4. SMS and Communication Services
              </h2>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-black mb-4">
                  SMS Consent and Compliance
                </h3>
                <p className="text-gray-600 mb-4">
                  By providing your phone number and opting in to receive SMS
                  messages from NevTurn Ventures LLC DBA NevTech, you consent to
                  receive:
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">
                    Transactional Messages
                  </h4>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">
                        Appointment reminders and confirmations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">
                        Account alerts and notifications
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">
                        AI receptionist follow-ups
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">
                        Missed call notifications
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">
                        Service updates and system alerts
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">
                        Billing and payment notifications
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">
                    Marketing Messages (Optional)
                  </h4>
                  <p className="text-gray-600 mb-2">
                    If you separately opt in to marketing messages, you may
                    receive:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">
                        Promotional offers and campaigns
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">
                        Product updates and newsletters
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">
                        Special announcements and events
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-black mb-6">
                  <h4 className="text-lg font-semibold text-black mb-4">
                    📱 Important SMS Information
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600 mb-2">
                        <strong className="text-black">Message Frequency:</strong> Message frequency may vary based on your account activity and preferences. You may receive up to 10 messages per month for transactional messages, and up to 4 messages per month for marketing (if opted in).
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-600 mb-2">
                        <strong className="text-black">Message & Data Rates:</strong> Message and data rates may apply based on your mobile carrier plan. Standard messaging rates from your carrier will apply to all SMS messages sent and received.
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-600 mb-2">
                        <strong className="text-black">Opt-Out Instructions:</strong> You can opt out at any time by:
                      </p>
                      <ul className="ml-6 space-y-1">
                        <li className="text-gray-600">• Reply <strong className="text-black">STOP</strong> to any message to unsubscribe from that message type</li>
                        <li className="text-gray-600">• You will receive a confirmation message upon opt-out</li>
                        <li className="text-gray-600">• You can opt back in by texting <strong className="text-black">START</strong></li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-gray-600 mb-2">
                        <strong className="text-black">Help & Support:</strong> For assistance with SMS messages:
                      </p>
                      <ul className="ml-6 space-y-1">
                        <li className="text-gray-600">• Reply <strong className="text-black">HELP</strong> to any message for assistance</li>
                        <li className="text-gray-600">• Email: <a href="mailto:cody@nevtech.io" className="text-black font-semibold hover:underline">cody@nevtech.io</a></li>
                        <li className="text-gray-600">• Phone: <a href="tel:3175089493" className="text-black font-semibold hover:underline">(317) 508-9493</a></li>
                        <li className="text-gray-600">• Hours: Monday-Friday, 9 AM - 5 PM EST</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-gray-600 mb-2">
                        <strong className="text-black">Carrier Liability:</strong> Carriers are not liable for delayed or undelivered messages. NevTech is not responsible for carrier-related issues, network outages, or technical problems that may affect SMS delivery.
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-600 mb-2">
                        <strong className="text-black">Age Requirement:</strong> You must be 18 years of age or older to consent to receive SMS messages from NevTech. By providing your phone number and opting in, you confirm that you are at least 18 years old.
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-600">
                        <strong className="text-black">Privacy:</strong> Your SMS consent and phone number are not shared with third parties except for SMS delivery providers (such as Twilio) necessary to provide the service. For complete details, see our <a href="/compliance" className="text-black font-semibold hover:underline">Privacy Policy</a>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-6 border border-gray-300">
                  <h4 className="text-lg font-semibold text-black mb-3">
                    Supported Carriers
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Our SMS services are supported by all major U.S. carriers including AT&T, T-Mobile, Verizon, Sprint, Boost, Cricket, MetroPCS, U.S. Cellular, and others. If you experience issues with your carrier, please contact our support team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Terms */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-6">
                5. Payment Terms
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-black mb-4">
                  Fees and Billing
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Fees are based on your selected service plan and usage
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Payment is due according to your billing cycle (monthly,
                      annually, etc.)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      All fees are non-refundable unless otherwise stated
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      We reserve the right to change pricing with 30 days notice
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Late payments may result in service suspension or
                      termination
                    </span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-black mb-4">
                  Cancellation and Refunds
                </h3>
                <p className="text-gray-600 mb-4">
                  You may cancel your subscription at any time. Cancellations take
                  effect at the end of your current billing period. No refunds
                  will be provided for partial months or unused services unless
                  required by law.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-6">
                6. Intellectual Property
              </h2>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <p className="text-gray-600 mb-4">
                  All content, features, and functionality of NevTech services,
                  including but not limited to text, graphics, logos, software,
                  and AI models, are owned by NevTech or its licensors and are
                  protected by copyright, trademark, and other intellectual
                  property laws.
                </p>
                <p className="text-gray-600 mb-4">
                  You are granted a limited, non-exclusive, non-transferable
                  license to access and use our services for your business
                  purposes only.
                </p>
                <p className="text-gray-600">
                  You retain ownership of any data, content, or materials you
                  provide to our services. By using our services, you grant us a
                  license to use, store, and process your data solely to provide
                  and improve our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy and Data */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-6">
                7. Privacy and Data Protection
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-4">
                  Your privacy is important to us. Our collection, use, and
                  protection of your personal information is governed by our
                  Privacy Policy, which is incorporated into these Terms by
                  reference.
                </p>
                <p className="text-gray-600 mb-4">
                  We comply with applicable data protection laws, including
                  GDPR, CCPA, and other regulations. For detailed information
                  about our data practices, please review our{' '}
                  <a
                    href="/compliance"
                    className="text-black font-semibold hover:underline"
                  >
                    Security &amp; Compliance page
                  </a>
                  .
                </p>
                <p className="text-gray-600">
                  You have rights regarding your personal data, including the
                  right to access, correct, delete, or export your information.
                  Contact us at cody@nevtech.io to exercise these rights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-6">
                8. Disclaimers and Limitations
              </h2>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-black mb-4">
                  Service Availability
                </h3>
                <p className="text-gray-600 mb-6">
                  Our services are provided "as is" and "as available." While we
                  strive for 99.9% uptime, we do not guarantee uninterrupted or
                  error‑free service. We are not liable for service interruptions,
                  maintenance, or third‑party failures.
                </p>

                <h3 className="text-xl font-bold text-black mb-4">
                  AI Services Disclaimer
                </h3>
                <p className="text-gray-600 mb-6">
                  Our AI‑powered services use advanced technology but may not be
                  perfect. You are responsible for reviewing and verifying
                  AI‑generated responses, transcripts, and actions. We are not
                  liable for errors, misunderstandings, or missed communications.
                </p>

                <h3 className="text-xl font-bold text-black mb-4">
                  Limitation of Liability
                </h3>
                <p className="text-gray-600 mb-4">
                  To the maximum extent permitted by law, NevTech shall not be
                  liable for:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <i className="ri-arrow-right-s-line text-black text-xl mr-2 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Indirect, incidental, special, or consequential damages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-s-line text-black text-xl mr-2 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Loss of profits, revenue, data, or business opportunities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-s-line text-black text-xl mr-2 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Damages exceeding the amount you paid us in the past 12
                      months
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Indemnification */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-6">
                9. Indemnification
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-4">
                  You agree to indemnify, defend, and hold harmless NevTech, its
                  officers, directors, employees, and agents from any claims,
                  damages, losses, liabilities, and expenses (including legal
                  fees) arising from:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Your use or misuse of our services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Your violation of these Terms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Your violation of any laws or third‑party rights
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Content or data you provide to our services
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Termination */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-6">
                10. Termination
              </h2>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <p className="text-gray-600 mb-4">
                  We reserve the right to suspend or terminate your account and
                  access to our services at any time, with or without notice,
                  for:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Violation of these Terms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">Non‑payment of fees</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Fraudulent, abusive, or illegal activity
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">
                      Any reason at our sole discretion
                    </span>
                  </li>
                </ul>
                <p className="text-gray-600">
                  Upon termination, your right to use our services will
                  immediately cease. We may delete your data according to our
                  data retention policies. You remain liable for all fees
                  incurred prior to termination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Governing Law */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-6">
                11. Governing Law and Disputes
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-4">
                  These Terms are governed by the laws of the State of Indiana,
                  United States, without regard to conflict of law principles.
                </p>
                <p className="text-gray-600 mb-4">
                  Any disputes arising from these Terms or your use of our
                  services shall be resolved through binding arbitration in
                  Indianapolis, Indiana, except where prohibited by law.
                </p>
                <p className="text-gray-600">
                  You agree to waive any right to a jury trial or to participate
                  in a class action lawsuit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* General Provisions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-6">
                12. General Provisions
              </h2>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      Entire Agreement
                    </h3>
                    <p className="text-gray-600">
                      These Terms, along with our Privacy Policy and any other
                      policies referenced herein, constitute the entire agreement
                      between you and NevTech.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      Severability
                    </h3>
                    <p className="text-gray-600">
                      If any provision of these Terms is found to be
                      unenforceable, the remaining provisions will remain in full
                      effect.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      Waiver
                    </h3>
                    <p className="text-gray-600">
                      Our failure to enforce any right or provision of these
                      Terms will not be considered a waiver of those rights.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      Assignment
                    </h3>
                    <p className="text-gray-600">
                      You may not assign or transfer these Terms without our
                      written consent. We may assign our rights and obligations
                      without restriction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="space-y-4 mb-12">
                <p className="text-lg text-gray-300">
                  <strong>Email:</strong> cody@nevtech.io
                </p>
                <p className="text-lg text-gray-300">
                  <strong>Phone:</strong> (317) 508-9493
                </p>
                <p className="text-lg text-gray-300">
                  <strong>Address:</strong> Indianapolis, Indiana
                </p>
              </div>
              <a
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
