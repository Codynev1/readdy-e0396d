import { useState } from 'react';

export default function IntakeFormPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    website: '',
    primaryPhone: '',
    numberOfLocations: 'single',
    otherLocations: '',
    
    // Hours
    mondayOpen: '',
    mondayClose: '',
    mondayClosed: false,
    tuesdayOpen: '',
    tuesdayClose: '',
    tuesdayClosed: false,
    wednesdayOpen: '',
    wednesdayClose: '',
    wednesdayClosed: false,
    thursdayOpen: '',
    thursdayClose: '',
    thursdayClosed: false,
    fridayOpen: '',
    fridayClose: '',
    fridayClosed: false,
    saturdayOpen: '',
    saturdayClose: '',
    saturdayClosed: false,
    sundayOpen: '',
    sundayClose: '',
    sundayClosed: false,
    
    specialHours: '',
    afterHoursService: 'no',
    emergencyContact: '',
    
    // Current situation
    currentAnswering: '',
    callsPerDay: '',
    missedCallsPercentage: '',
    biggestFrustration: '',
    
    // Call types
    callReason1: '',
    callReason1Percentage: '',
    callReason2: '',
    callReason2Percentage: '',
    callReason3: '',
    callReason3Percentage: '',
    
    callTypes: [] as string[],
    callTypesOther: '',
    
    // Services
    service1: '',
    service2: '',
    service3: '',
    service4: '',
    service5: '',
    
    standardPricing: 'no',
    pricingExplanation: '',
    
    price1Service: '',
    price1Amount: '',
    price2Service: '',
    price2Amount: '',
    price3Service: '',
    price3Amount: '',
    price4Service: '',
    price4Amount: '',
    
    neverQuote: '',
    
    // Information collection
    infoNeeded: [] as string[],
    
    // Section 6: Appointments
    takesAppointments: 'no',
    calendarSystem: '',
    calendarSystemOther: '',
    calendarAccessName: '',
    calendarAccessEmail: '',
    appointmentDays: [] as string[],
    appointmentTimeSlots: '',
    standardAppointmentDuration: '',
    otherAppointmentTypes: '',
    advanceNotice: '',
    noAvailabilityAction: '',
    
    // Section 7: Transfers
    neverHandleTypes: [] as string[],
    neverHandleOther: '',
    salesThreshold: '',
    primaryContactName: '',
    primaryContactTitle: '',
    primaryContactPhone: '',
    primaryContactHours: '',
    backupContactName: '',
    backupContactPhone: '',
    afterHoursTransfer: '',
    afterHoursTransferPhone: '',
    transferScript: '',
    additionalTransferScripts: '',
    
    // Section 8: FAQs
    faq1Question: '',
    faq1Answer: '',
    faq2Question: '',
    faq2Answer: '',
    faq3Question: '',
    faq3Answer: '',
    faq4Question: '',
    faq4Answer: '',
    faq5Question: '',
    faq5Answer: '',
    
    // Section 9: Brand Voice
    brandPersonality: [] as string[],
    alwaysUseWords: '',
    neverUseWords: '',
    greetingScript: '',
    closingScript: '',
    
    // Section 10: Compliance
    hasDisclaimers: 'no',
    disclaimerText: '',
    hasRegulations: 'no',
    regulationsDetails: '',
    
    // Section 11: Integrations
    calendarIntegrations: [] as string[],
    calendarIntegrationOther: '',
    crmIntegrations: [] as string[],
    crmIntegrationOther: '',
    communicationIntegrations: [] as string[],
    communicationIntegrationOther: '',
    otherTools: [] as string[],
    otherToolsOther: '',
    adminContactName: '',
    adminContactEmail: '',
    adminContactPhone: '',
    
    // Section 12: Success & Goals
    successDefinition: '',
    dealBreaker: '',
    naturalSoundImportance: '5',
    involvementLevel: '',
    
    // Section 13: Additional Information
    seasonalChanges: '',
    upcomingPromotions: '',
    additionalInfo: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      const checkboxValue = (e.target as HTMLInputElement).value;
      
      if (name === 'callTypes' || name === 'infoNeeded' || name === 'appointmentDays' || 
          name === 'neverHandleTypes' || name === 'brandPersonality' || 
          name === 'calendarIntegrations' || name === 'crmIntegrations' || 
          name === 'communicationIntegrations' || name === 'otherTools') {
        setFormData(prev => ({
          ...prev,
          [name]: checked 
            ? [...prev[name as keyof typeof formData] as string[], checkboxValue]
            : (prev[name as keyof typeof formData] as string[]).filter((item: string) => item !== checkboxValue)
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formElement = e.target as HTMLFormElement;
      const formDataToSend = new FormData(formElement);
      
      const response = await fetch('https://readdy.ai/api/form/d5df6cmfmrgp9cvlvidg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-check-line text-4xl text-white"></i>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your intake form has been submitted successfully. Our team will review your information and contact you within 24 hours to configure your AI receptionist.
            </p>
            <div className="bg-pink-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 font-medium mb-2">What happens next?</p>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-start">
                  <i className="ri-check-line text-pink-500 mt-1 mr-3"></i>
                  <span>We'll review your business details and call handling needs</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-pink-500 mt-1 mr-3"></i>
                  <span>Our team will configure your AI receptionist with your specific requirements</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-pink-500 mt-1 mr-3"></i>
                  <span>You'll receive a call to test and refine the system</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-pink-500 mt-1 mr-3"></i>
                  <span>Go live with your new AI receptionist!</span>
                </li>
              </ul>
            </div>
            <a
              href="/"
              className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            NevTech AI Receptionist
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Customer Intake Form
          </h2>
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl p-8 shadow-xl">
            <p className="text-lg font-medium mb-3">
              Welcome! Let's Get Your AI Receptionist Configured Perfectly.
            </p>
            <p className="text-pink-50 leading-relaxed">
              This form helps us understand your business so we can configure your AI receptionist to handle calls exactly the way you want. Please be as detailed as possible—the more we know, the better your AI will perform from day one.
            </p>
            <div className="mt-6 inline-flex items-center bg-white/20 rounded-full px-6 py-3">
              <i className="ri-time-line text-2xl mr-3"></i>
              <span className="font-semibold">Estimated time: 15-20 minutes</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8" data-readdy-form>
          {/* Section 1: Business Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Business Information</h3>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Basic Details</h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry/Business Type <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  placeholder="e.g., HVAC, Restaurant, Medical Office, Law Firm, Salon"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://www.yourbusiness.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Phone Number (for AI) <span className="text-pink-500">*</span>
                </label>
                <input
                  type="tel"
                  name="primaryPhone"
                  value={formData.primaryPhone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Number of Locations <span className="text-pink-500">*</span>
                </label>
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="numberOfLocations"
                      value="single"
                      checked={formData.numberOfLocations === 'single'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700">Single location</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="numberOfLocations"
                      value="multiple"
                      checked={formData.numberOfLocations === 'multiple'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700">Multiple locations</span>
                  </label>
                  {formData.numberOfLocations === 'multiple' && (
                    <input
                      type="text"
                      name="otherLocations"
                      value={formData.otherLocations}
                      onChange={handleInputChange}
                      placeholder="Please specify number of locations"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all ml-8"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Hours of Operation */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">Hours of Operation</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Day</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Open Time</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Close Time</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Closed?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => {
                    const dayLower = day.toLowerCase();
                    return (
                      <tr key={day}>
                        <td className="py-3 px-2 font-medium text-gray-700">{day}</td>
                        <td className="py-3 px-2">
                          <input
                            type="time"
                            name={`${dayLower}Open`}
                            value={formData[`${dayLower}Open` as keyof typeof formData] as string}
                            onChange={handleInputChange}
                            disabled={formData[`${dayLower}Closed` as keyof typeof formData] as boolean}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm disabled:bg-gray-100"
                          />
                        </td>
                        <td className="py-3 px-2">
                          <input
                            type="time"
                            name={`${dayLower}Close`}
                            value={formData[`${dayLower}Close` as keyof typeof formData] as string}
                            onChange={handleInputChange}
                            disabled={formData[`${dayLower}Closed` as keyof typeof formData] as boolean}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm disabled:bg-gray-100"
                          />
                        </td>
                        <td className="py-3 px-2">
                          <input
                            type="checkbox"
                            name={`${dayLower}Closed`}
                            checked={formData[`${dayLower}Closed` as keyof typeof formData] as boolean}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded cursor-pointer"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Hours (Holidays, Seasonal Variations, etc.)
                </label>
                <textarea
                  name="specialHours"
                  value={formData.specialHours}
                  onChange={handleInputChange}
                  rows={3}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.specialHours.length}/500 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Do you offer after-hours emergency service?
                </label>
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="afterHoursService"
                      value="yes"
                      checked={formData.afterHoursService === 'yes'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700">Yes</span>
                  </label>
                  {formData.afterHoursService === 'yes' && (
                    <input
                      type="tel"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      placeholder="Emergency contact number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all ml-8"
                    />
                  )}
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="afterHoursService"
                      value="no"
                      checked={formData.afterHoursService === 'no'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700">No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Current Call Handling */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Current Call Handling</h3>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Your Current Situation</h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  1. Who currently answers your phone calls? <span className="text-pink-500">*</span>
                </label>
                <select
                  name="currentAnswering"
                  value={formData.currentAnswering}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="">Select an option</option>
                  <option value="owner">Owner/Manager</option>
                  <option value="receptionist">Dedicated receptionist</option>
                  <option value="rotating">Rotating staff members</option>
                  <option value="service">Answeringing service</option>
                  <option value="voicemail">No one (goes to voicemail)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  2. Approximately how many calls do you receive per day? <span className="text-pink-500">*</span>
                </label>
                <select
                  name="callsPerDay"
                  value={formData.callsPerDay}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="">Select an option</option>
                  <option value="1-10">1-10 calls</option>
                  <option value="10-25">10-25 calls</option>
                  <option value="25-50">25-50 calls</option>
                  <option value="50-100">50-100 calls</option>
                  <option value="100+">100+ calls</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  3. What percentage of calls do you currently miss or send to voicemail? <span className="text-pink-500">*</span>
                </label>
                <select
                  name="missedCallsPercentage"
                  value={formData.missedCallsPercentage}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="">Select an option</option>
                  <option value="<10%">Less than 10%</option>
                  <option value="10-25%">10-25%</option>
                  <option value="25-50%">25-50%</option>
                  <option value=">50%">More than 50%</option>
                  <option value="not-sure">Not sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  4. What's your BIGGEST frustration with how calls are currently handled? <span className="text-pink-500">*</span>
                </label>
                <textarea
                  name="biggestFrustration"
                  value={formData.biggestFrustration}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.biggestFrustration.length}/500 characters</p>
              </div>
            </div>
          </div>

          {/* Section 3: Call Types & Priorities */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Call Types & Priorities</h3>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Understanding Your Inbound Calls</h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  5. What are the TOP 3 reasons people call your business? (Rank 1-3)
                </label>
                
                <div className="space-y-4">
                  <div className="bg-pink-50 rounded-lg p-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Reason #1</label>
                    <input
                      type="text"
                      name="callReason1"
                      value={formData.callReason1}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all mb-3"
                    />
                    <label className="block text-sm text-gray-600 mb-2">Estimated % of total calls:</label>
                    <input
                      type="text"
                      name="callReason1Percentage"
                      value={formData.callReason1Percentage}
                      onChange={handleInputChange}
                      placeholder="e.g., 40%"
                      className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="bg-pink-50 rounded-lg p-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Reason #2</label>
                    <input
                      type="text"
                      name="callReason2"
                      value={formData.callReason2}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all mb-3"
                    />
                    <label className="block text-sm text-gray-600 mb-2">Estimated % of total calls:</label>
                    <input
                      type="text"
                      name="callReason2Percentage"
                      value={formData.callReason2Percentage}
                      onChange={handleInputChange}
                      placeholder="e.g., 30%"
                      className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="bg-pink-50 rounded-lg p-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Reason #3</label>
                    <input
                      type="text"
                      name="callReason3"
                      value={formData.callReason3}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all mb-3"
                    />
                    <label className="block text-sm text-gray-600 mb-2">Estimated % of total calls:</label>
                    <input
                      type="text"
                      name="callReason3Percentage"
                      value={formData.callReason3Percentage}
                      onChange={handleInputChange}
                      placeholder="e.g., 20%"
                      className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  6. Check ALL types of calls you receive:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'New customer inquiries',
                    'Existing customer questions',
                    'Appointment scheduling/booking',
                    'Appointment changes/cancellations',
                    'Pricing questions',
                    'Service area/coverage questions',
                    'Emergency/urgent requests',
                    'Order status updates',
                    'General FAQ (hours, location, etc.)',
                    'Customer complaints/issues',
                    'Vendor/supplier calls',
                    'Sales/spam calls',
                  ].map((type) => (
                    <label key={type} className="flex items-start cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                      <input
                        type="checkbox"
                        name="callTypes"
                        value={type}
                        checked={formData.callTypes.includes(type)}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded mt-0.5 flex-shrink-0"
                      />
                      <span className="ml-3 text-gray-700 text-sm">{type}</span>
                    </label>
                  ))}
                  <label className="flex items-start cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <input
                      type="checkbox"
                      name="callTypes"
                      value="other"
                      checked={formData.callTypes.includes('other')}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded mt-0.5 flex-shrink-0"
                    />
                    <span className="ml-3 text-gray-700 text-sm">Other</span>
                  </label>
                </div>
                {formData.callTypes.includes('other') && (
                  <input
                    type="text"
                    name="callTypesOther"
                    value={formData.callTypesOther}
                    onChange={handleInputChange}
                    placeholder="Please specify"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all mt-3"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Section 4: What You Sell/Offer */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">What You Sell/Offer</h3>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Your Products & Services</h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  7. What products or services do you offer? (List your main offerings)
                </label>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <input
                      key={num}
                      type="text"
                      name={`service${num}`}
                      value={formData[`service${num}` as keyof typeof formData] as string}
                      onChange={handleInputChange}
                      placeholder={`Service/Product ${num}`}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  8. Do you have standard pricing that you share over the phone?
                </label>
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="standardPricing"
                      value="yes"
                      checked={formData.standardPricing === 'yes'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="standardPricing"
                      value="no"
                      checked={formData.standardPricing === 'no'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700">No, pricing is always custom</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="standardPricing"
                      value="depends"
                      checked={formData.standardPricing === 'depends'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700">It depends</span>
                  </label>
                  {formData.standardPricing === 'depends' && (
                    <input
                      type="text"
                      name="pricingExplanation"
                      value={formData.pricingExplanation}
                      onChange={handleInputChange}
                      placeholder="Please explain"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all ml-8"
                    />
                  )}
                </div>
              </div>

              {formData.standardPricing === 'yes' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Please provide your standard prices/price ranges:
                  </label>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((num) => (
                      <div key={num} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="text"
                          name={`price${num}Service`}
                          value={formData[`price${num}Service` as keyof typeof formData] as string}
                          onChange={handleInputChange}
                          placeholder="Service/Product"
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        />
                        <input
                          type="text"
                          name={`price${num}Amount`}
                          value={formData[`price${num}Amount` as keyof typeof formData] as string}
                          onChange={handleInputChange}
                          placeholder="Price or Price Range"
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  9. What should the AI NEVER quote or promise over the phone?
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  (Custom work, discounts, specific timelines, etc.)
                </p>
                <textarea
                  name="neverQuote"
                  value={formData.neverQuote}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.neverQuote.length}/500 characters</p>
              </div>
            </div>
          </div>

          {/* Section 5: Information Collection Requirements */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Information Collection Requirements</h3>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">What You Need from Callers</h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  10. What information do you NEED to collect from new customers who call?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Full Name',
                    'Phone Number',
                    'Email Address',
                    'Company Name',
                    'Service Address/Location',
                    'Type of Service Needed',
                    'Preferred Date/Time',
                    'Budget Range',
                    'How They Found Us',
                    'Urgency Level',
                    'Current Provider',
                    'Property Type',
                  ].map((info) => (
                    <label key={info} className="flex items-start cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                      <input
                        type="checkbox"
                        name="infoNeeded"
                        value={info}
                        checked={formData.infoNeeded.includes(info)}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded mt-0.5 flex-shrink-0"
                      />
                      <span className="ml-3 text-gray-700 text-sm">{info}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Appointment Scheduling */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">6</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Appointment Scheduling</h3>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Booking & Calendar Integration</h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  12. Do you take appointments?
                </label>
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="takesAppointments"
                      value="yes"
                      checked={formData.takesAppointments === 'yes'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700">Yes → Continue this section</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="takesAppointments"
                      value="no"
                      checked={formData.takesAppointments === 'no'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700">No → Skip to Section 7</span>
                  </label>
                </div>
              </div>

              {formData.takesAppointments === 'yes' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      13. What calendar/scheduling system do you use?
                    </label>
                    <select
                      name="calendarSystem"
                      value={formData.calendarSystem}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="">Select a system</option>
                      <option value="google">Google Calendar</option>
                      <option value="outlook">Outlook Calendar</option>
                      <option value="calendly">Calendly</option>
                      <option value="acuity">Acuity Scheduling</option>
                      <option value="square">Square Appointments</option>
                      <option value="manual">No system (manual/paper)</option>
                      <option value="other">Other</option>
                    </select>
                    {formData.calendarSystem === 'other' && (
                      <input
                        type="text"
                        name="calendarSystemOther"
                        value={formData.calendarSystemOther}
                        onChange={handleInputChange}
                        placeholder="Please specify"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all mt-3"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      14. Who should have access to the calendar for AI booking?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="calendarAccessName"
                        value={formData.calendarAccessName}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      />
                      <input
                        type="email"
                        name="calendarAccessEmail"
                        value={formData.calendarAccessEmail}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      15. What are your available appointment time slots?
                    </label>
                    <p className="text-sm text-gray-600 mb-3">Days available for appointments:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                        <label key={day} className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="appointmentDays"
                            value={day}
                            checked={formData.appointmentDays.includes(day)}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded"
                          />
                          <span className="ml-2 text-gray-700 text-sm">{day}</span>
                        </label>
                      ))}
                    </div>
                    <input
                      type="text"
                      name="appointmentTimeSlots"
                      value={formData.appointmentTimeSlots}
                      onChange={handleInputChange}
                      placeholder="Time slots available (e.g., 9am-5pm, hourly slots)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all mb-3"
                    />
                    <p className="text-sm text-gray-600 mb-2">Appointment duration(s):</p>
                    <input
                      type="text"
                      name="standardAppointmentDuration"
                      value={formData.standardAppointmentDuration}
                      onChange={handleInputChange}
                      placeholder="Standard appointment (minutes)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all mb-3"
                    />
                    <input
                      type="text"
                      name="otherAppointmentTypes"
                      value={formData.otherAppointmentTypes}
                      onChange={handleInputChange}
                      placeholder="Other types (optional)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      16. How much advance notice do you need for appointments?
                    </label>
                    <select
                      name="advanceNotice"
                      value={formData.advanceNotice}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      <option value="same-day">Same day is fine</option>
                      <option value="24-hours">At least 24 hours</option>
                      <option value="2-3-days">At least 2-3 days</option>
                      <option value="one-week">At least one week</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      17. What should happen if no appointments are available in their requested timeframe?
                    </label>
                    <select
                      name="noAvailabilityAction"
                      value={formData.noAvailabilityAction}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      <option value="alternative">AI offers alternative dates/times</option>
                      <option value="callback">AI takes their info for callback</option>
                      <option value="waitlist">AI adds them to waitlist</option>
                      <option value="transfer">AI transfers to staff member</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Section 7: Call Transfers & Escalation */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">7</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Call Transfers & Escalation</h3>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">When Humans Need to Take Over</h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  18. What types of calls should the AI NEVER handle and ALWAYS transfer to a human?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Emergency situations',
                    'Angry/upset customers',
                    'Complex technical questions',
                    'Existing customer issues/problems',
                    'VIP/priority customers',
                    'Legal/compliance matters',
                    'Medical/health emergencies'
                  ].map((type) => (
                    <label key={type} className="flex items-start cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                      <input
                        type="checkbox"
                        name="neverHandleTypes"
                        value={type}
                        checked={formData.neverHandleTypes.includes(type)}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded mt-0.5 flex-shrink-0"
                      />
                      <span className="ml-3 text-gray-700 text-sm">{type}</span>
                    </label>
                  ))}
                  <label className="flex items-start cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <input
                      type="checkbox"
                      name="neverHandleTypes"
                      value="sales-opportunities"
                      checked={formData.neverHandleTypes.includes('sales-opportunities')}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded mt-0.5 flex-shrink-0"
                    />
                    <span className="ml-3 text-gray-700 text-sm">Sales opportunities over $</span>
                  </label>
                </div>
                {formData.neverHandleTypes.includes('sales-opportunities') && (
                  <input
                    type="text"
                    name="salesThreshold"
                    value={formData.salesThreshold}
                    onChange={handleInputChange}
                    placeholder="Specify amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all mt-3"
                  />
                )}
                <input
                  type="text"
                  name="neverHandleOther"
                  value={formData.neverHandleOther}
                  onChange={handleInputChange}
                  placeholder="Other (please specify)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all mt-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  19. Who should calls be transferred to?
                </label>
                <div className="bg-pink-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Primary contact for transfers:</p>
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="primaryContactName"
                      value={formData.primaryContactName}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                    <input
                      type="text"
                      name="primaryContactTitle"
                      value={formData.primaryContactTitle}
                      onChange={handleInputChange}
                      placeholder="Title"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                    <input
                      type="tel"
                      name="primaryContactPhone"
                      value={formData.primaryContactPhone}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                    <input
                      type="text"
                      name="primaryContactHours"
                      value={formData.primaryContactHours}
                      onChange={handleInputChange}
                      placeholder="Available hours"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="bg-pink-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Backup contact (if primary unavailable):</p>
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="backupContactName"
                      value={formData.backupContactName}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                    <input
                      type="tel"
                      name="backupContactPhone"
                      value={formData.backupContactPhone}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="bg-pink-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">After-hours transfers:</p>
                  <select
                    name="afterHoursTransfer"
                    value={formData.afterHoursTransfer}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all cursor-pointer mb-3"
                  >
                    <option value="">Select an option</option>
                    <option value="voicemail">Send to voicemail</option>
                    <option value="emergency">Transfer to emergency line</option>
                    <option value="message">Take message only (no transfer)</option>
                    <option value="other">Other</option>
                  </select>
                  {formData.afterHoursTransfer === 'emergency' && (
                    <input
                      type="tel"
                      name="afterHoursTransferPhone"
                      value={formData.afterHoursTransferPhone}
                      onChange={handleInputChange}
                      placeholder="Emergency line phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  20. What should the AI say when transferring a call?
                </label>
                <textarea
                  name="transferScript"
                  value={formData.transferScript}
                  onChange={handleInputChange}
                  rows={3}
                  maxLength={500}
                  placeholder="e.g., I'm going to connect you with [name] who can help you with that. Please hold for just a moment."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.transferScript.length}/500 characters</p>
                <textarea
                  name="additionalTransferScripts"
                  value={formData.additionalTransferScripts}
                  onChange={handleInputChange}
                  rows={2}
                  maxLength={500}
                  placeholder="Any other transfer scripts or phrases you'd like used?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none mt-3"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.additionalTransferScripts.length}/500 characters</p>
              </div>
            </div>
          </div>

          {/* Section 8: FAQs */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">8</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Frequently Asked Questions (FAQs)</h3>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Common Questions Your AI Should Answer</h4>

              <p className="text-sm text-gray-600">21. What are the most common questions callers ask? (Provide question + answer)</p>

              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="bg-pink-50 rounded-lg p-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">FAQ #{num}</label>
                  <input
                    type="text"
                    name={`faq${num}Question`}
                    value={formData[`faq${num}Question` as keyof typeof formData] as string}
                    onChange={handleInputChange}
                    placeholder="Question"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all mb-3"
                  />
                  <textarea
                    name={`faq${num}Answer`}
                    value={formData[`faq${num}Answer` as keyof typeof formData] as string}
                    onChange={handleInputChange}
                    rows={3}
                    maxLength={500}
                    placeholder="Answer"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {(formData[`faq${num}Answer` as keyof typeof formData] as string).length}/500 characters
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 9: Brand Voice & Tone */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">9</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Brand Voice & Tone</h3>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">How Should Your AI Sound?</h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  22. How would you describe your brand personality?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Professional & corporate',
                    'Friendly & approachable',
                    'Warm & caring',
                    'Efficient & direct',
                    'Casual & conversational',
                    'Upbeat & energetic',
                    'Calm & reassuring',
                    'Expert & authoritative'
                  ].map((personality) => (
                    <label key={personality} className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                      <input
                        type="checkbox"
                        name="brandPersonality"
                        value={personality}
                        checked={formData.brandPersonality.includes(personality)}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded"
                      />
                      <span className="ml-3 text-gray-700 text-sm">{personality}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  23. Any specific words or phrases you ALWAYS use?
                </label>
                <textarea
                  name="alwaysUseWords"
                  value={formData.alwaysUseWords}
                  onChange={handleInputChange}
                  rows={3}
                  maxLength={500}
                  placeholder='e.g., "Thanks for choosing us!" or "We appreciate your business!"'
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.alwaysUseWords.length}/500 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  24. Any words or phrases you NEVER use?
                </label>
                <textarea
                  name="neverUseWords"
                  value={formData.neverUseWords}
                  onChange={handleInputChange}
                  rows={3}
                  maxLength={500}
                  placeholder="e.g., slang, technical jargon, competitor names"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.neverUseWords.length}/500 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  25. How should the AI greet callers?
                </label>
                <textarea
                  name="greetingScript"
                  value={formData.greetingScript}
                  onChange={handleInputChange}
                  rows={2}
                  maxLength={500}
                  placeholder='e.g., "Thank you for calling [Business Name], this is [AI name]. How can I help you today?"'
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.greetingScript.length}/500 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  26. How should the AI end calls?
                </label>
                <textarea
                  name="closingScript"
                  value={formData.closingScript}
                  onChange={handleInputChange}
                  rows={2}
                  maxLength={500}
                  placeholder='e.g., "Is there anything else I can help you with today? ... Great! Thank you for calling [Business Name], have a wonderful day!"'
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.closingScript.length}/500 characters</p>
              </div>
            </div>
          </div>

          {/* Section 10: Compliance & Legal */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">10</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Compliance & Legal</h3>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Industry-Specific Requirements</h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  27. Are there any required disclaimers or legal statements the AI must include?
                </label>
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="hasDisclaimers"
                      value="yes"
                      checked={formData.hasDisclaimers === 'yes'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700">Yes → Please provide below</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="hasDisclaimers"
                      value="no"
                      checked={formData.hasDisclaimers === 'no'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700">No</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="hasDisclaimers"
                      value="not-sure"
                      checked={formData.hasDisclaimers === 'not-sure'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700">Not sure</span>
                  </label>
                </div>
                {formData.hasDisclaimers === 'yes' && (
                  <textarea
                    name="disclaimerText"
                    value={formData.disclaimerText}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={500}
                    placeholder="Please provide the exact wording"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none mt-3"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  28. Does your industry have specific regulations or compliance requirements?
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  (HIPAA for medical, TCPA for telemarketing, bar association rules for lawyers, etc.)
                </p>
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="hasRegulations"
                      value="yes"
                      checked={formData.hasRegulations === 'yes'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700">Yes → Please specify</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="hasRegulations"
                      value="no"
                      checked={formData.hasRegulations === 'no'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700">No</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="hasRegulations"
                      value="not-sure"
                      checked={formData.hasRegulations === 'not-sure'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700">Not sure</span>
                  </label>
                </div>
                {formData.hasRegulations === 'yes' && (
                  <textarea
                    name="regulationsDetails"
                    value={formData.regulationsDetails}
                    onChange={handleInputChange}
                    rows={3}
                    maxLength={500}
                    placeholder="Please specify the regulations"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none mt-3"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Section 11: Integrations & Technology */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">11</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Integrations & Technology</h3>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Connecting Your Systems</h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  29. What systems should the AI integrate with?
                </label>
                
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Calendar/Scheduling:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Google Calendar',
                      'Outlook/Microsoft 365',
                      'Calendly',
                      'Acuity Scheduling'
                    ].map((system) => (
                      <label key={system} className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                        <input
                          type="checkbox"
                          name="calendarIntegrations"
                          value={system}
                          checked={formData.calendarIntegrations.includes(system)}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded"
                        />
                        <span className="ml-3 text-gray-700 text-sm">{system}</span>
                      </label>
                    ))}
                    <label className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                      <input
                        type="checkbox"
                        name="calendarIntegrations"
                        value="other"
                        checked={formData.calendarIntegrations.includes('other')}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded"
                      />
                      <span className="ml-3 text-gray-700 text-sm">Other</span>
                    </label>
                  </div>
                  {formData.calendarIntegrations.includes('other') && (
                    <input
                      type="text"
                      name="calendarIntegrationOther"
                      value={formData.calendarIntegrationOther}
                      onChange={handleInputChange}
                      placeholder="Please specify"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all mt-3"
                    />
                  )}
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">CRM (Customer Relationship Management):</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Salesforce',
                      'HubSpot',
                      'Zoho CRM',
                      'Jobber',
                      'ServiceTitan',
                      'Housecall Pro',
                      'No CRM currently'
                    ].map((system) => (
                      <label key={system} className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                        <input
                          type="checkbox"
                          name="crmIntegrations"
                          value={system}
                          checked={formData.crmIntegrations.includes(system)}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded"
                        />
                        <span className="ml-3 text-gray-700 text-sm">{system}</span>
                      </label>
                    ))}
                    <label className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                      <input
                        type="checkbox"
                        name="crmIntegrations"
                        value="other"
                        checked={formData.crmIntegrations.includes('other')}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded"
                      />
                      <span className="ml-3 text-gray-700 text-sm">Other</span>
                    </label>
                  </div>
                  {formData.crmIntegrations.includes('other') && (
                    <input
                      type="text"
                      name="crmIntegrationOther"
                      value={formData.crmIntegrationOther}
                      onChange={handleInputChange}
                      placeholder="Please specify"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all mt-3"
                    />
                  )}
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Communication Tools:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'SMS/Text messaging platform',
                      'Email system',
                      'Slack'
                    ].map((system) => (
                      <label key={system} className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                        <input
                          type="checkbox"
                          name="communicationIntegrations"
                          value={system}
                          checked={formData.communicationIntegrations.includes(system)}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded"
                        />
                        <span className="ml-3 text-gray-700 text-sm">{system}</span>
                      </label>
                    ))}
                    <label className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                      <input
                        type="checkbox"
                        name="communicationIntegrations"
                        value="other"
                        checked={formData.communicationIntegrations.includes('other')}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded"
                      />
                      <span className="ml-3 text-gray-700 text-sm">Other</span>
                    </label>
                  </div>
                  {formData.communicationIntegrations.includes('other') && (
                    <input
                      type="text"
                      name="communicationIntegrationOther"
                      value={formData.communicationIntegrationOther}
                      onChange={handleInputChange}
                      placeholder="Please specify"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all mt-3"
                    />
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-3">Other Tools:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Payment processing',
                      'Invoicing software',
                      'Project management tool'
                    ].map((tool) => (
                      <label key={tool} className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                        <input
                          type="checkbox"
                          name="otherTools"
                          value={tool}
                          checked={formData.otherTools.includes(tool)}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded"
                        />
                        <span className="ml-3 text-gray-700 text-sm">{tool}</span>
                      </label>
                    ))}
                    <label className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                      <input
                        type="checkbox"
                        name="otherTools"
                        value="other"
                        checked={formData.otherTools.includes('other')}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-pink-500 focus:ring-pink-500 rounded"
                      />
                      <span className="ml-3 text-gray-700 text-sm">Other</span>
                    </label>
                  </div>
                  {formData.otherTools.includes('other') && (
                    <input
                      type="text"
                      name="otherToolsOther"
                      value={formData.otherToolsOther}
                      onChange={handleInputChange}
                      placeholder="Please specify"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all mt-3"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  30. Who has admin access to these systems?
                </label>
                <p className="text-sm text-gray-500 mb-3">(We may need access to connect the AI)</p>
                <div className="bg-pink-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Primary admin contact:</p>
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="adminContactName"
                      value={formData.adminContactName}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                    <input
                      type="email"
                      name="adminContactEmail"
                      value={formData.adminContactEmail}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                    <input
                      type="tel"
                      name="adminContactPhone"
                      value={formData.adminContactPhone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 12: Success & Goals */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">12</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Success & Goals</h3>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">What Does Success Look Like?</h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  31. What would make this AI receptionist a huge win for your business?
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  (Be specific—time saved, more appointments, fewer missed calls, etc.)
                </p>
                <textarea
                  name="successDefinition"
                  value={formData.successDefinition}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.successDefinition.length}/500 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  32. What would be a deal-breaker or major disappointment?
                </label>
                <textarea
                  name="dealBreaker"
                  value={formData.dealBreaker}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.dealBreaker.length}/500 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  33. On a scale of 1-10, how important is it that the AI sounds natural and human-like?
                </label>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600 whitespace-nowrap">Not important</span>
                  <input
                    type="range"
                    name="naturalSoundImportance"
                    min="1"
                    max="10"
                    value={formData.naturalSoundImportance}
                    onChange={handleInputChange}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${(parseInt(formData.naturalSoundImportance) - 1) * 11.11}%, #e5e7eb ${(parseInt(formData.naturalSoundImportance) - 1) * 11.11}%, #e5e7eb 100%)`
                    }}
                  />
                  <span className="text-sm text-gray-600 whitespace-nowrap">Extremely important</span>
                </div>
                <div className="text-center mt-2">
                  <span className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-semibold">
                    {formData.naturalSoundImportance} / 10
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  34. How involved do you want to be in tweaking and adjusting the AI?
                </label>
                <div className="space-y-3">
                  <label className="flex items-start cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <input
                      type="radio"
                      name="involvementLevel"
                      value="very-hands-on"
                      checked={formData.involvementLevel === 'very-hands-on'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500 mt-0.5"
                    />
                    <span className="ml-3 text-gray-700">Very hands-on (want to review and approve changes)</span>
                  </label>
                  <label className="flex items-start cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <input
                      type="radio"
                      name="involvementLevel"
                      value="collaborative"
                      checked={formData.involvementLevel === 'collaborative'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500 mt-0.5"
                    />
                    <span className="ml-3 text-gray-700">Collaborative (monthly check-ins to optimize)</span>
                  </label>
                  <label className="flex items-start cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <input
                      type="radio"
                      name="involvementLevel"
                      value="hands-off"
                      checked={formData.involvementLevel === 'hands-off'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500 mt-0.5"
                    />
                    <span className="ml-3 text-gray-700">Hands-off (trust the experts, just make it work)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section 13: Additional Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">13</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Additional Information</h3>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Anything Else We Should Know?</h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  35. Are there any seasonal changes in your business we should know about?
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  (Busy seasons, slow seasons, holiday schedules, etc.)
                </p>
                <textarea
                  name="seasonalChanges"
                  value={formData.seasonalChanges}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.seasonalChanges.length}/500 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  36. Do you have any marketing campaigns or promotions coming up that callers might ask about?
                </label>
                <textarea
                  name="upcomingPromotions"
                  value={formData.upcomingPromotions}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.upcomingPromotions.length}/500 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  37. Is there anything else important we haven't asked about?
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.additionalInfo.length}/500 characters</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl shadow-xl p-8 text-center">
            <p className="text-white text-lg mb-6">
              Ready to submit? We'll review your information and contact you within 24 hours.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-pink-600 px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <i className="ri-loader-4-line animate-spin mr-2"></i>
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <i className="ri-send-plane-fill mr-2"></i>
                  Submit Intake Form
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
