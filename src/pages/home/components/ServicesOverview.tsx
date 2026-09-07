
import { Link } from 'react-router-dom';

export default function ServicesOverview() {
  const services = [
    {
      icon: 'ri-robot-line',
      title: 'AI Voice Agents',
      description: 'Automated phone systems that handle customer inquiries, appointment scheduling, and lead qualification 24/7.',
      features: ['24/7 availability', 'Natural conversations', 'Lead qualification', 'Appointment booking']
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Cellular Consulting',
      description: 'Expert guidance on phones, tablets, hotspots, routers, and data SIMs for optimal business connectivity.',
      features: ['Device selection', 'Plan optimization', 'Cost reduction', 'Multi-carrier solutions']
    },
    {
      icon: 'ri-wifi-line',
      title: 'Business Internet Solutions',
      description: '5G, fiber, failover, and multi-location support to keep your business connected and productive.',
      features: ['5G & fiber options', 'Failover protection', 'Multi-location support', 'Scalable bandwidth']
    },
    {
      icon: 'ri-links-line',
      title: 'IoT Connectivity',
      description: 'Connect fleets, sensors, mobile teams, field techs, and equipment for real-time monitoring and control.',
      features: ['Fleet tracking', 'Sensor networks', 'Remote monitoring', 'Equipment connectivity']
    },
    {
      icon: 'ri-chat-3-line',
      title: 'Website Chat Agents',
      description: 'Intelligent chatbots that engage visitors, answer questions, and capture leads on your website.',
      features: ['Instant responses', 'Lead capture', 'Product recommendations', 'Customer support']
    },
    {
      icon: 'ri-flow-chart',
      title: 'Workflow Automation',
      description: 'Streamline repetitive tasks, automate follow-ups, and optimize business processes for efficiency.',
      features: ['Process automation', 'CRM integration', 'Follow-up sequences', 'Task management']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Complete Business Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI automation to cellular consulting and internet solutions, we provide everything 
            your business needs to modernize and thrive in today's digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <i className="ri-check-line text-black mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/services" 
                className="inline-flex items-center text-black font-semibold hover:text-gray-600 transition-colors cursor-pointer"
              >
                Learn More
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
