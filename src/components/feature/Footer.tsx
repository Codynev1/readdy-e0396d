import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background-100 border-t border-background-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-background-50 font-bold text-sm">
                N
              </div>
              <span className="text-lg font-semibold text-foreground-950">
                NevTech <span className="text-foreground-600 font-normal">AI</span>
              </span>
            </Link>
            <p className="text-sm text-foreground-700 mb-4 max-w-sm leading-relaxed">
              The AI implementation platform built for businesses of every size. Indianapolis-based. We pick up the phone.
            </p>
            <div className="text-sm text-foreground-600 mb-4">
              Indianapolis, IN · USA
            </div>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/nevtech-ai" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg bg-background-200 text-foreground-600 hover:bg-primary-100 hover:text-primary-600 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-background-200 text-foreground-600 hover:bg-primary-100 hover:text-primary-600 transition-colors cursor-pointer">
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-background-200 text-foreground-600 hover:bg-primary-100 hover:text-primary-600 transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h5 className="text-sm font-semibold text-foreground-900 mb-4">Product</h5>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">Services</Link></li>
              <li><Link to="/rapid-mvp" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">Rapid MVP</Link></li>
              <li><Link to="/receptionist" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">Nova AI</Link></li>
              <li><Link to="/nevtech-ai-what-a-nevada-ai-receptionist-does-after-hours" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">After-Hours AI Receptionist</Link></li>
              <li><Link to="/how-we-build-software-now" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">How We Build Software</Link></li>
              <li><Link to="/ai-automation-agencies" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">AI Automation Agencies</Link></li>
              <li><Link to="/data-and-ai-consultant-indianapolis" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">Data &amp; AI Consultant</Link></li>
              <li><Link to="/blog" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">Blog</Link></li>
              <li><Link to="/ai-projects" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">AI Projects</Link></li>
              <li><Link to="/products" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">Products</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-sm font-semibold text-foreground-900 mb-4">Services</h5>
            <ul className="space-y-2">
              <li><Link to="/fractional-caio" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">Fractional CAIO</Link></li>
              <li><Link to="/ai-lead-generation" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">AI Lead Generation</Link></li>
              <li><Link to="/ai-indianapolis" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">AI Indianapolis</Link></li>
              <li><Link to="/use-cases" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">Use Cases</Link></li>
              <li><Link to="/pricing" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">Pricing</Link></li>
              <li><Link to="/tmobile-business" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">T-Mobile Business</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-sm font-semibold text-foreground-900 mb-4">Company</h5>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background-200 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-sm text-foreground-600">© {new Date().getFullYear()} NevTech AI. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-foreground-600 hover:text-foreground-950 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-sm text-foreground-600 hover:text-foreground-950 transition-colors">Terms</Link>
            <Link to="/compliance" className="text-sm text-foreground-600 hover:text-foreground-950 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}