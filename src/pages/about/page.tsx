import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

export default function AboutPage() {

  const stats = [
    { number: '500+', label: 'Businesses Served' },
    { number: '95%', label: 'Client Retention Rate' },
    { number: '40%', label: 'Average Cost Savings' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'We stay at the forefront of technology to bring you cutting-edge solutions that give your business a competitive advantage.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Client Success',
      description: 'Your success is our success. We measure our performance by the tangible results and ROI we deliver to your business.'
    },
    {
      icon: 'ri-eye-line',
      title: 'Transparency',
      description: 'Clear communication, honest pricing, and transparent processes. You always know what you\'re getting and why.'
    },
    {
      icon: 'ri-team-line',
      title: 'Partnership',
      description: 'We\'re not just a vendor - we\'re your technology partner, committed to your long-term growth and success.'
    }
  ];

  return (
    <div className="min-h-screen bg-background-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background-50 via-primary-50/30 to-background-100 pt-20 pb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="eyebrow">Who We Are</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-950 mb-6">
                About NevTech AI
              </h1>
              <p className="text-lg text-foreground-700 leading-relaxed max-w-3xl mx-auto">
                We're on a mission to modernize small businesses with AI automation, cellular connectivity, 
                and workflow optimization. Founded by technology experts who understand the challenges 
                small businesses face in today's digital world.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-6">Our Story</h2>
                <p className="text-foreground-700 mb-6 leading-relaxed">
                  NevTech AI was founded with a simple belief: every small business deserves access to 
                  enterprise-level technology solutions without the enterprise-level complexity and cost.
                </p>
                <p className="text-foreground-700 mb-6 leading-relaxed">
                  Our founder, Cody Neville, saw firsthand how small businesses struggled with outdated 
                  systems, expensive telecommunications, and manual processes that limited their growth. 
                  He set out to create a company that would bridge this gap.
                </p>
                <p className="text-foreground-700 leading-relaxed">
                  Today, we've helped over 500 businesses transform their operations, reduce costs, 
                  and capture more opportunities through our comprehensive technology solutions.
                </p>
              </div>
              <div className="flex items-center justify-center bg-background-50 rounded-xl border border-background-200 p-16">
                <img 
                  src="https://storage.readdy-site.link/project_files/ec385017-95f1-4eb8-87a6-886cd0a82ec1/088d9d02-7def-421b-ae39-517025f24c8a_Code_Generated_Image-4.png?v=83b4bb273d772ddc86b12bc4855e3751" 
                  alt="NevTech AI Logo" 
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="eyebrow">Leadership</div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">Meet Our Founder</h2>
                <p className="text-lg text-foreground-600 max-w-3xl mx-auto">
                  Leadership backed by a decade of enterprise-level experience and proven results.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-1">
                  <div className="bg-background-100 rounded-xl border border-background-200 p-8 text-center">
                    <img 
                      src="https://static.readdy.ai/image/1bc91b7d55091cd3d488a2b17839859a/8659b27b8de0c28a37fe88817e095adc.png"
                      alt="Cody Neville, Founder of NevTech AI"
                      className="rounded-xl object-cover object-top w-full h-80 mb-6"
                    />
                    <h3 className="text-2xl font-bold text-foreground-950 mb-2">Cody Neville</h3>
                    <p className="text-foreground-600 font-medium mb-4">Founder & Chief Solutions Architect</p>
                    <p className="text-foreground-500">NevTech AI</p>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    <p className="text-lg text-foreground-700 leading-relaxed">
                      Cody Neville is a serial entrepreneur and seasoned technology leader with a decade of high-level 
                      experience across medical software, telecommunications, AI automation, and business operations. 
                      Over the last 10+ years, Cody has helped build, scale, and modernize companies across multiple 
                      industries, bringing an enterprise-level skillset to everyday businesses that want to grow smarter and faster.
                    </p>

                    <p className="text-lg text-foreground-700 leading-relaxed">
                      Cody's career includes successfully selling over $5 million in medical software, leading a development 
                      team of more than 50 engineers, and driving innovation in complex environments where reliability, speed, 
                      and accuracy are critical. His background spans healthcare systems, imaging software, workflow automation, 
                      hospitality operations, and telecommunications — giving him a rare ability to understand both business 
                      challenges and the technical solutions that fix them.
                    </p>

                    <div className="bg-background-100 rounded-xl border border-background-200 p-8">
                      <h4 className="text-xl font-bold text-foreground-950 mb-6">Core Specializations</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground-700">AI voice agents & automation systems</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground-700">Business internet consulting & optimization</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground-700">Cellular solutions for phones, tablets, IoT devices, and fleets</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground-700">Operational redesign and workflow efficiency</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground-700">Product strategy, prototyping, and technical execution</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground-700">Cutting-edge integrations combining AI + IoT + connectivity</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-foreground-700 leading-relaxed">
                      Cody's approach is simple: make technology work for business owners, not against them. His focus is on 
                      saving clients money, increasing revenue, eliminating missed calls, and building reliable digital 
                      infrastructure that supports long-term growth.
                    </p>

                    <p className="text-lg text-foreground-700 leading-relaxed">
                      Backed by years of hands-on experience in real-world business environments and a deep understanding of 
                      modern automation, Cody helps companies upgrade their operations with the same tools used by leading 
                      enterprises — but at a small-business-friendly scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="eyebrow">By the Numbers</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">Our Impact</h2>
              <p className="text-lg text-foreground-600 max-w-3xl mx-auto">
                Numbers that reflect our commitment to delivering real results for our clients.
              </p>
            </div>

            <div className="bg-background-50 rounded-2xl border border-background-200 p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-foreground-950 mb-2">{stat.number}</div>
                    <div className="text-sm text-foreground-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="eyebrow">What Drives Us</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">Our Values</h2>
              <p className="text-lg text-foreground-600 max-w-3xl mx-auto">
                The principles that guide everything we do and every solution we create.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-background-100 rounded-xl p-8 text-center border border-background-200 hover:border-primary-200 transition-colors">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <i className={`${value.icon} text-primary-600 text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-foreground-950 mb-4">{value.title}</h3>
                  <p className="text-foreground-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-primary-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-xs font-semibold tracking-widest uppercase text-primary-300 mb-6">
                Let's modernize your business
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-lg text-primary-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                Let's discuss how we can help your business modernize, save money, and capture more opportunities 
                with our comprehensive technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center bg-background-50 text-foreground-950 font-semibold px-8 py-4 rounded-lg hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Get Free Consultation
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
                <a 
                  href="/services" 
                  className="inline-flex items-center justify-center border-2 border-background-200 text-background-50 font-semibold px-8 py-4 rounded-lg hover:bg-background-50/10 transition-colors whitespace-nowrap cursor-pointer"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}