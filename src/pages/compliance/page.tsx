import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

export default function CompliancePage() {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-white text-4xl"></i>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                NevTech Security &amp; Compliance Overview
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                NevTech provides AI-powered automation, communication, and enterprise workflow solutions. 
                Protecting customer data, maintaining regulatory compliance, and ensuring system reliability 
                are core pillars of the NevTech platform.
              </p>
            </div>
          </div>
        </section>

        {/* Data Privacy Practices */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Data Privacy Practices
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  NevTech follows strict data-privacy standards designed to protect all customer and end-user information.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Data Collection */}
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                      <i className="ri-database-2-line text-white text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-black">Data Collection</h3>
                  </div>
                  <p className="text-gray-600 mb-4">NevTech collects only the data required to deliver services, including:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Customer contact information (name, email, phone)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Account-level configuration and system preferences</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">AI interaction logs, transcripts, or call/audio data if the customer enables these features</span>
                    </li>
                  </ul>
                </div>

                {/* Use of Information */}
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                      <i className="ri-file-list-3-line text-white text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-black">Use of Information</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Data is used solely for:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Providing NevTech services</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Performance monitoring and support</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Optional analytics and reporting</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Contract fulfillment and compliance</span>
                    </li>
                  </ul>
                  <p className="text-black font-semibold mt-6">NevTech does not sell, rent, or trade customer data.</p>
                </div>

                {/* Data Sharing */}
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                      <i className="ri-share-line text-white text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-black">Data Sharing</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Data may be shared only with:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Approved hosting providers</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Support or analytics vendors</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Telecom or infrastructure partners</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Regulatory authorities if legally required</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">All vendors operate under strict data-processing agreements.</p>
                </div>

                {/* Data Retention */}
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                      <i className="ri-time-line text-white text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-black">Data Retention</h3>
                  </div>
                  <p className="text-gray-600 mb-4">NevTech retains customer data only as long as necessary for:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Service delivery</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Legal/contractual requirements</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Troubleshooting and security auditing</span>
                    </li>
                  </ul>
                  <p className="text-black font-semibold mt-6">Customers may request deletion of data at any time.</p>
                  <p className="text-gray-600 mt-2">Call recordings, logs, and transcripts follow customer-defined retention rules.</p>
                </div>
              </div>

              {/* Data Rights */}
              <div className="mt-8 bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-user-settings-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-black">Data Rights (GDPR-Aligned)</h3>
                </div>
                <p className="text-gray-600 mb-6">Users may request:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <i className="ri-check-line text-black text-xl mr-3"></i>
                    <span className="text-gray-600">Data access</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-check-line text-black text-xl mr-3"></i>
                    <span className="text-gray-600">Data correction</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-check-line text-black text-xl mr-3"></i>
                    <span className="text-gray-600">Data deletion</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-check-line text-black text-xl mr-3"></i>
                    <span className="text-gray-600">Processing restriction</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-check-line text-black text-xl mr-3"></i>
                    <span className="text-gray-600">Data export (portability)</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-6">NevTech maintains a designated Data Protection contact for all privacy matters.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Certifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Security Certifications &amp; Governance
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  NevTech follows industry best practices for information security and is pursuing formal certifications.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* ISO 27001 */}
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-black">ISO/IEC 27001</h3>
                    <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      Aligned
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    NevTech maintains internal security controls aligned with ISO 27001 requirements, including:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Information Security Management System (ISMS)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Continuous risk assessments</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Mandatory staff security training</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Documented security policies</span>
                    </li>
                  </ul>
                </div>

                {/* SOC 2 */}
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-black">SOC 2 Compliance</h3>
                    <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      In Progress
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    NevTech is in the process of obtaining a SOC 2 Type II attestation, covering:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Security</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Availability</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Confidentiality</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Processing integrity</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Privacy</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">This ensures independent verification of NevTech's security posture.</p>
                </div>
              </div>

              {/* Security Governance */}
              <div className="mt-8 bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-6">Security Governance Program</h3>
                <p className="text-gray-600 mb-6">NevTech maintains:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">Internal security audits</span>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">Vendor risk assessments</span>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">Annual penetration testing</span>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">Incident response policy</span>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">Enforced access policies (RBAC, MFA)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Compliance */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Global Compliance Framework
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  NevTech's platform supports regulatory compliance across multiple jurisdictions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* GDPR */}
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-black">GDPR</h3>
                    <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      Compliant
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">NevTech is fully aligned with GDPR principles:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Lawful data processing</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Right to be forgotten</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Data minimization</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Breach notification</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">EU-compliant data-transfer mechanisms</span>
                    </li>
                  </ul>
                </div>

                {/* CCPA */}
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-black">CCPA / CPRA</h3>
                    <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      Compliant
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">NevTech follows CCPA-aligned practices, including:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Full transparency</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Consumer rights to access/delete</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">No data selling</span>
                    </li>
                  </ul>
                </div>

                {/* TCPA */}
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-black">TCPA &amp; Telephony Laws</h3>
                    <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      Compliant
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">For voice and communication features, NevTech includes:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Consent collection workflows</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Do-Not-Call (DNC) suppression</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Calling-window enforcement</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Automatic opt-out tracking</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">These features help clients maintain compliance.</p>
                </div>

                {/* AI Regulations */}
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-black">AI Regulations</h3>
                    <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      EU AI Act Ready
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">NevTech incorporates:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Transparency rules for AI-generated interactions</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Bias and risk mitigation</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Human override and monitoring capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* HIPAA */}
              <div className="mt-8 bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-black">HIPAA</h3>
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                    Available
                  </span>
                </div>
                <p className="text-gray-600 mb-4">If a customer requires HIPAA-level protections:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">NevTech offers a HIPAA-compliant configuration</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600">Business Associate Agreements (BAA) available upon request</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Security */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Infrastructure Security
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  NevTech employs a secure, redundant, and encrypted cloud architecture.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Encryption */}
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                    <i className="ri-lock-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-6">Encryption</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600"><strong>In Transit:</strong> TLS/SSL for all connections</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600"><strong>At Rest:</strong> AES-256 or provider-equivalent encryption</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600"><strong>Keys:</strong> Managed securely with rotation policies</span>
                    </li>
                  </ul>
                </div>

                {/* Access Control */}
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                    <i className="ri-shield-user-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-6">Access Control</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Role-based access control (RBAC)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Multi-factor authentication (MFA)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Principle of least privilege</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Logged and audited administrative access</span>
                    </li>
                  </ul>
                </div>

                {/* Monitoring */}
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                    <i className="ri-eye-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-6">Monitoring &amp; Logging</h3>
                  <p className="text-gray-600 mb-4">NevTech maintains:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Continuous system monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Anomaly detection</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Audit logs for changes, access, and critical events</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Real-time alerts for suspicious activity</span>
                    </li>
                  </ul>
                </div>

                {/* Hosting */}
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                    <i className="ri-server-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-6">Hosting &amp; Reliability</h3>
                  <p className="text-gray-600 mb-4">NevTech uses secure enterprise cloud environments, including:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Geo-redundant systems</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Hardened virtual networks</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">DDoS protection</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Regular backups and restoration testing</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">Server architecture supports global, low-latency deployments.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Incident Response &amp; Breach Management
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  NevTech maintains a structured incident response program to ensure rapid containment and transparency.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-8">
                <h3 className="text-2xl font-bold text-black mb-8">Incident Response Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">01</span>
                    </div>
                    <h4 className="text-lg font-bold text-black mb-2">Detection</h4>
                    <p className="text-gray-600 text-sm">Monitoring systems trigger alerts</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">02</span>
                    </div>
                    <h4 className="text-lg font-bold text-black mb-2">Containment</h4>
                    <p className="text-gray-600 text-sm">Isolate affected systems</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">03</span>
                    </div>
                    <h4 className="text-lg font-bold text-black mb-2">Eradication</h4>
                    <p className="text-gray-600 text-sm">Remove malicious components</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">04</span>
                    </div>
                    <h4 className="text-lg font-bold text-black mb-2">Recovery</h4>
                    <p className="text-gray-600 text-sm">Restore services and verify integrity</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">05</span>
                    </div>
                    <h4 className="text-lg font-bold text-black mb-2">Forensics</h4>
                    <p className="text-gray-600 text-sm">Identify root cause</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">06</span>
                    </div>
                    <h4 className="text-lg font-bold text-black mb-2">Prevention</h4>
                    <p className="text-gray-600 text-sm">Implement updated safeguards</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Customer Notification */}
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                      <i className="ri-notification-3-line text-white text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-black">Customer Notification</h3>
                  </div>
                  <p className="text-gray-600 mb-4">If a data breach affecting customer data occurs:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">NevTech will notify the customer without undue delay</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">GDPR 72-hour regulatory reporting rules apply</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Affected customers will receive full impact details and remediation steps</span>
                    </li>
                  </ul>
                </div>

                {/* Team Readiness */}
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                      <i className="ri-team-line text-white text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-black">Team Readiness</h3>
                  </div>
                  <p className="text-gray-600 mb-4">NevTech's internal teams are trained on:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Cybersecurity best practices</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Incident escalation processes</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-black text-xl mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">Emergency communication protocols</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Summary
                </h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 md:p-12 border border-gray-200">
                <p className="text-lg text-gray-600 mb-6">
                  NevTech is committed to enterprise-grade security, global compliance, and continuous improvement.
                </p>
                <p className="text-lg text-gray-600">
                  Through strong encryption, responsible data governance, regulatory alignment, and upcoming SOC 2 
                  certification, NevTech ensures that its AI and communication systems remain secure, reliable, and trustworthy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Questions About Our Security?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Our security team is available to answer questions about our compliance certifications, 
                data protection measures, and security practices. Contact us for detailed documentation.
              </p>
              <a 
                href="/contact" 
                className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer inline-block"
              >
                Contact Security Team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
