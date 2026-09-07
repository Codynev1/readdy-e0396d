import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-primary-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-semibold tracking-widest uppercase text-primary-300 mb-6">
            Free consultation · No credit card to start
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 leading-tight mb-6">
            Ready to modernize your business?
          </h2>
          <p className="text-lg text-primary-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            You will walk away with a clear technology roadmap, your top 3 cost-saving opportunities, and a plan to capture more leads — yours to keep, even if you do not move forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-background-50 text-foreground-950 font-semibold px-8 py-4 rounded-lg hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer text-lg"
            >
              Get Free Consultation
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center border-2 border-background-200 text-background-50 font-semibold px-8 py-4 rounded-lg hover:bg-background-50/10 transition-colors whitespace-nowrap cursor-pointer text-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}