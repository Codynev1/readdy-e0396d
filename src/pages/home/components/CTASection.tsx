
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Modernize Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their operations with our AI automation, 
            cellular consulting, and connectivity solutions. Get started with a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Get Free Consultation
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
            >
              View Our Services
            </Link>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-black text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">(317) 508-9493</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-black text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">cody@nevtech.io</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-line text-black text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule Meeting</h3>
              <p className="text-gray-300">Book a free consultation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
