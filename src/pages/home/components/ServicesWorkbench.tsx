import { Link } from 'react-router-dom';

const services = [
  { icon: 'ri-customer-service-2-line', label: 'AI Voice Agents', desc: '24/7 call handling, lead qualification, appointment booking' },
  { icon: 'ri-smartphone-line', label: 'Cellular Consulting', desc: 'Phones, tablets, hotspots, routers — optimized and cost-reduced' },
  { icon: 'ri-wifi-line', label: 'Business Internet', desc: '5G, fiber, failover, multi-location support' },
  { icon: 'ri-links-line', label: 'IoT Connectivity', desc: 'Fleet tracking, sensors, remote monitoring, equipment alerts' },
  { icon: 'ri-chat-3-line', label: 'Website Chat Agents', desc: 'Instant visitor engagement, lead capture, product recommendations' },
  { icon: 'ri-flow-chart', label: 'Workflow Automation', desc: 'CRM integration, follow-up sequences, task management' },
];

export default function ServicesWorkbench() {
  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div>
            <div className="section-eyebrow">What we do</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-tight mb-6">
              Complete business technology solutions.
            </h2>
            <p className="text-lg text-foreground-700 leading-relaxed mb-6">
              From AI automation to cellular consulting and internet solutions, we provide everything your business needs to modernize and thrive in today's digital landscape.
            </p>
            <Link to="/services" className="btn-primary">
              View All Services
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background-100 rounded-xl p-5 border border-background-200 hover:border-primary-200 transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-100 text-primary-600 mb-3">
                  <i className={`${service.icon} text-lg`}></i>
                </div>
                <div className="text-sm font-semibold text-foreground-900 mb-1">{service.label}</div>
                <div className="text-xs text-foreground-600">{service.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}