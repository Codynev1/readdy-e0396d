import { Link } from 'react-router-dom';

export default function PrivacyPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              Last Updated: January 2024
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                NevTurn Ventures LLC, doing business as NevTech ("NevTech," "we," "us," or "our"), is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, 
                including our AI receptionist, lead generation tools, and SMS communication services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this Privacy Policy. 
                If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                1. Information We Collect
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">1.1 Personal Information</h3>
                  <p className="text-gray-700 mb-3">We collect personal information that you voluntarily provide to us, including:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Contact Information:</strong> Name, email address, phone number, business address</li>
                    <li><strong>Business Information:</strong> Company name, industry, job title, business size</li>
                    <li><strong>Account Information:</strong> Username, password, account preferences</li>
                    <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party payment processors)</li>
                    <li><strong>Communication Data:</strong> Call recordings, voicemail transcripts, SMS messages, email correspondence</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">1.2 Automatically Collected Information</h3>
                  <p className="text-gray-700 mb-3">When you use our services, we automatically collect certain information:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Usage Data:</strong> Pages visited, features used, time spent, click patterns</li>
                    <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                    <li><strong>Call Data:</strong> Call duration, call time, caller ID, call recordings (with consent)</li>
                    <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                    <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to track activity and improve user experience</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">1.3 Information from Third Parties</h3>
                  <p className="text-gray-700 mb-3">We may receive information from:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Calendar integration services (Google Calendar, Outlook, etc.)</li>
                    <li>CRM platforms (Salesforce, HubSpot, etc.)</li>
                    <li>Payment processors</li>
                    <li>SMS delivery providers (Twilio, etc.)</li>
                    <li>Analytics and marketing partners</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                2. How We Use Your Information
              </h2>

              <p className="text-gray-700 mb-4">We use the information we collect for the following purposes:</p>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Service Delivery</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Provide and maintain our AI receptionist and automation services</li>
                    <li>Process and manage appointments</li>
                    <li>Handle customer calls and inquiries</li>
                    <li>Send transactional SMS messages (appointment reminders, account alerts, service updates)</li>
                    <li>Integrate with your calendar, CRM, and other business tools</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Communication</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Respond to your inquiries and support requests</li>
                    <li>Send you technical notices and security alerts</li>
                    <li>Provide customer service and support</li>
                    <li>Send marketing communications (only with your explicit consent)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Improvement and Analytics</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Analyze usage patterns to improve our services</li>
                    <li>Train and improve our AI models</li>
                    <li>Conduct research and development</li>
                    <li>Monitor and analyze trends and user behavior</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Legal and Security</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Comply with legal obligations and regulations</li>
                    <li>Protect against fraud and unauthorized access</li>
                    <li>Enforce our Terms of Service</li>
                    <li>Resolve disputes and troubleshoot problems</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. SMS Communication Privacy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                3. SMS Communication Privacy
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">3.1 SMS Consent</h3>
                  <p className="text-gray-700 mb-3">
                    We collect explicit consent before sending SMS messages. You have the option to consent to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Transactional Messages:</strong> Appointment reminders, account alerts, AI receptionist follow-ups, missed call notifications, service updates, and billing information</li>
                    <li><strong>Marketing Messages:</strong> Promotions, product updates, newsletters, and special offers (optional and requires separate consent)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">3.2 SMS Data Sharing</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Your SMS consent and phone number are NOT shared with third parties for marketing purposes.</strong>
                  </p>
                  <p className="text-gray-700 mb-3">
                    We only share SMS data with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>SMS Delivery Providers:</strong> Twilio and other carriers necessary to deliver messages</li>
                    <li><strong>Service Providers:</strong> Companies that help us operate our services (under strict confidentiality agreements)</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">3.3 Opt-Out Rights</h3>
                  <p className="text-gray-700 mb-3">You can opt out of SMS messages at any time:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Reply <strong>STOP</strong> to any SMS message to unsubscribe</li>
                    <li>Reply <strong>HELP</strong> for assistance</li>
                    <li>Contact us at cody@nevtech.io or (317) 508-9493</li>
                    <li>Opting out of marketing messages will not affect transactional messages related to your account</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">3.4 Message Frequency and Rates</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Transactional messages: Up to 10 messages per month</li>
                    <li>Marketing messages: Up to 4 messages per month</li>
                    <li>Message and data rates may apply based on your carrier plan</li>
                    <li>We are not responsible for carrier-related delays or failures</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. How We Share Your Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                4. How We Share Your Information
              </h2>

              <p className="text-gray-700 mb-4">We may share your information in the following circumstances:</p>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Service Providers</h3>
                  <p className="text-gray-700">
                    We share information with third-party vendors who perform services on our behalf, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>Cloud hosting providers</li>
                    <li>SMS and communication platforms (Twilio)</li>
                    <li>Payment processors</li>
                    <li>Analytics providers</li>
                    <li>Customer support tools</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    <strong>All service providers are bound by confidentiality agreements and are prohibited from using your data for any purpose other than providing services to us.</strong>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Business Transfers</h3>
                  <p className="text-gray-700">
                    If NevTech is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. 
                    We will notify you via email and/or prominent notice on our website of any change in ownership or use of your personal information.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Legal Requirements</h3>
                  <p className="text-gray-700">
                    We may disclose your information if required to do so by law or in response to valid requests by public authorities, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>Compliance with legal obligations</li>
                    <li>Protection of our rights and property</li>
                    <li>Prevention of fraud or illegal activity</li>
                    <li>Protection of personal safety</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">With Your Consent</h3>
                  <p className="text-gray-700">
                    We may share your information for any other purpose with your explicit consent.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Data Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                5. Data Security
              </h2>

              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information, including:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure socket layer (SSL) technology</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication requirements</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <p className="text-gray-700">
                  <strong>Important:</strong> While we strive to protect your personal information, no method of transmission over the internet 
                  or electronic storage is 100% secure. We cannot guarantee absolute security of your data.
                </p>
              </div>
            </section>

            {/* 6. Data Retention */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                6. Data Retention
              </h2>

              <p className="text-gray-700 mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>

              <div className="space-y-3 text-gray-700">
                <p><strong>Account Information:</strong> Retained while your account is active and for a reasonable period thereafter</p>
                <p><strong>Call Recordings:</strong> Retained for up to 12 months for quality assurance and training purposes</p>
                <p><strong>SMS Messages:</strong> Retained for up to 24 months for compliance and dispute resolution</p>
                <p><strong>Payment Information:</strong> Retained as required by tax and accounting regulations</p>
                <p><strong>Marketing Data:</strong> Retained until you opt out or request deletion</p>
              </div>

              <p className="text-gray-700 mt-4">
                When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            {/* 7. Your Privacy Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                7. Your Privacy Rights
              </h2>

              <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights:</p>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Access and Portability</h3>
                  <p className="text-gray-700">
                    Request access to the personal information we hold about you and receive a copy in a portable format.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Correction</h3>
                  <p className="text-gray-700">
                    Request correction of inaccurate or incomplete personal information.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Deletion</h3>
                  <p className="text-gray-700">
                    Request deletion of your personal information, subject to certain legal exceptions.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Opt-Out</h3>
                  <p className="text-gray-700">
                    Opt out of marketing communications and SMS messages at any time.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Restriction</h3>
                  <p className="text-gray-700">
                    Request restriction of processing of your personal information in certain circumstances.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Object</h3>
                  <p className="text-gray-700">
                    Object to processing of your personal information for direct marketing purposes.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-black text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">How to Exercise Your Rights</h3>
                <p className="mb-3">To exercise any of these rights, please contact us:</p>
                <ul className="space-y-2">
                  <li><strong>Email:</strong> cody@nevtech.io</li>
                  <li><strong>Phone:</strong> (317) 508-9493</li>
                  <li><strong>Mail:</strong> NevTech AI, Indianapolis, Indiana</li>
                </ul>
                <p className="mt-4 text-sm text-gray-300">
                  We will respond to your request within 30 days. We may need to verify your identity before processing your request.
                </p>
              </div>
            </section>

            {/* 8. Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                8. Children's Privacy
              </h2>

              <p className="text-gray-700 mb-4">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.
              </p>

              <p className="text-gray-700">
                If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. 
                We will take steps to delete such information from our systems.
              </p>
            </section>

            {/* 9. International Data Transfers */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                9. International Data Transfers
              </h2>

              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. 
                These countries may have data protection laws that are different from the laws of your country.
              </p>

              <p className="text-gray-700">
                We take appropriate safeguards to ensure that your personal information remains protected in accordance with this Privacy Policy, 
                including using standard contractual clauses approved by regulatory authorities.
              </p>
            </section>

            {/* 10. Cookies and Tracking Technologies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                10. Cookies and Tracking Technologies
              </h2>

              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Types of Cookies We Use:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                    <li><strong>Marketing Cookies:</strong> Track your browsing habits to show relevant ads</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Managing Cookies:</h3>
                  <p className="text-gray-700">
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                    However, if you do not accept cookies, you may not be able to use some portions of our services.
                  </p>
                </div>
              </div>
            </section>

            {/* 11. Third-Party Links */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                11. Third-Party Links
              </h2>

              <p className="text-gray-700">
                Our website may contain links to third-party websites that are not operated by us. We have no control over and assume no responsibility 
                for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policy 
                of every site you visit.
              </p>
            </section>

            {/* 12. Changes to This Privacy Policy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                12. Changes to This Privacy Policy
              </h2>

              <p className="text-gray-700 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Posting the new Privacy Policy on this page</li>
                <li>Updating the "Last Updated" date at the top of this Privacy Policy</li>
                <li>Sending you an email notification (for material changes)</li>
              </ul>

              <p className="text-gray-700">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            {/* 13. Contact Us */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                13. Contact Us
              </h2>

              <p className="text-gray-700 mb-6">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-black mb-4">NevTurn Ventures LLC DBA NevTech</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center">
                    <i className="ri-mail-line mr-3 text-black"></i>
                    <strong className="mr-2">Email:</strong> cody@nevtech.io
                  </p>
                  <p className="flex items-center">
                    <i className="ri-phone-line mr-3 text-black"></i>
                    <strong className="mr-2">Phone:</strong> (317) 508-9493
                  </p>
                  <p className="flex items-center">
                    <i className="ri-map-pin-line mr-3 text-black"></i>
                    <strong className="mr-2">Location:</strong> Indianapolis, Indiana
                  </p>
                  <p className="flex items-center">
                    <i className="ri-time-line mr-3 text-black"></i>
                    <strong className="mr-2">Hours:</strong> Monday-Friday, 9 AM - 5 PM EST
                  </p>
                </div>
              </div>
            </section>

            {/* California Privacy Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                14. California Privacy Rights (CCPA)
              </h2>

              <p className="text-gray-700 mb-4">
                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Right to Know:</strong> Request information about the personal information we collect, use, and disclose</li>
                <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
                <li><strong>Right to Opt-Out:</strong> Opt out of the sale of your personal information (Note: We do not sell personal information)</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights</li>
              </ul>

              <p className="text-gray-700">
                To exercise these rights, please contact us using the contact information provided above. 
                We will verify your identity before processing your request.
              </p>
            </section>

            {/* Back to Top */}
            <div className="text-center pt-8 border-t border-gray-200">
              <Link 
                to="/terms" 
                className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mr-4 whitespace-nowrap"
              >
                View Terms of Service
              </Link>
              <Link 
                to="/contact" 
                className="inline-block border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
