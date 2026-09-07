import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const servicesMenu = [
  {
    label: 'All Services',
    href: '/services',
    icon: 'ri-apps-line',
    desc: 'Browse everything we offer',
  },
  {
    label: 'Fractional CAIO',
    href: '/fractional-caio',
    icon: 'ri-user-star-line',
    desc: 'Part-time AI leadership for your org',
  },
  {
    label: 'AI Lead Generation',
    href: '/ai-lead-generation',
    icon: 'ri-flashlight-line',
    desc: 'Automated outbound & inbound leads',
  },
  {
    label: 'Use Cases',
    href: '/use-cases',
    icon: 'ri-lightbulb-line',
    desc: 'Real-world AI applications',
  },
];

const aiProjectsMenu = [
  {
    label: 'All AI Projects',
    href: '/ai-projects',
    icon: 'ri-folder-line',
    desc: 'See every project type we build',
  },
  {
    label: 'Clean Data & Taxonomy',
    href: '/ai-projects',
    icon: 'ri-database-2-line',
    desc: 'Organize files, contracts & docs for AI',
  },
  {
    label: 'Internal AI Search (RAG)',
    href: '/ai-projects',
    icon: 'ri-search-eye-line',
    desc: 'Chat layer over your internal knowledge',
  },
  {
    label: 'Custom Tools & Automations',
    href: '/ai-projects',
    icon: 'ri-tools-line',
    desc: 'Lightweight software saving 80% of time',
  },
  {
    label: 'Earnings Call Automation',
    href: '/ai-projects',
    icon: 'ri-line-chart-line',
    desc: 'Draft earnings scripts automatically',
  },
  {
    label: 'Meeting → Action Tracking',
    href: '/ai-projects',
    icon: 'ri-record-circle-line',
    desc: 'Transcripts, summaries & follow-ups',
  },
  {
    label: 'Products',
    href: '/products',
    icon: 'ri-stack-line',
    desc: 'NevTech VMS & NevTech AI products',
  },
];

function FlyoutMenu({
  items,
  onClose,
}: {
  items: { label: string; href: string; icon: string; desc: string }[];
  onClose: () => void;
}) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-background-50 rounded-xl shadow-xl border border-background-200 py-2 z-50 animate-fade-in">
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background-50 border-l border-t border-background-200 rotate-45"></div>
      {items.map((item) => (
        <Link
          key={item.href + item.label}
          to={item.href}
          onClick={onClose}
          className="flex items-start gap-3 px-4 py-3 hover:bg-background-100 transition-colors group cursor-pointer"
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-background-100 group-hover:bg-primary-500 transition-colors mt-0.5 shrink-0">
            <i className={`${item.icon} text-sm text-foreground-600 group-hover:text-background-50 transition-colors`}></i>
          </div>
          <div>
            <div className="text-sm font-medium text-foreground-900 group-hover:text-foreground-950 whitespace-nowrap">{item.label}</div>
            <div className="text-xs text-foreground-600 mt-0.5 leading-snug">{item.desc}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFlyout, setOpenFlyout] = useState<'services' | 'ai-projects' | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const flyoutRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (flyoutRef.current && !flyoutRef.current.contains(e.target as Node)) {
        setOpenFlyout(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    setOpenFlyout(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background-50/95 backdrop-blur-md border-b border-background-200 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-background-50 font-bold text-sm">
              N
            </div>
            <span className="text-lg font-semibold text-foreground-950">
              NevTech <span className="text-foreground-600 font-normal">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" ref={flyoutRef}>
            <Link
              to="/"
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isActive('/') ? 'text-foreground-950 font-semibold' : 'text-foreground-700 hover:text-foreground-950'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isActive('/services') ? 'text-foreground-950 font-semibold' : 'text-foreground-700 hover:text-foreground-950'
              }`}
            >
              Services
            </Link>
            <Link
              to="/rapid-mvp"
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isActive('/rapid-mvp') ? 'text-foreground-950 font-semibold' : 'text-foreground-700 hover:text-foreground-950'
              }`}
            >
              Rapid MVP
            </Link>
            <Link
              to="/receptionist"
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isActive('/receptionist') ? 'text-foreground-950 font-semibold' : 'text-foreground-700 hover:text-foreground-950'
              }`}
            >
              Nova AI
            </Link>

            <div className="relative">
              <button
                onClick={() => setOpenFlyout(openFlyout === 'ai-projects' ? null : 'ai-projects')}
                className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${
                  openFlyout === 'ai-projects' ? 'text-foreground-950' : 'text-foreground-700 hover:text-foreground-950'
                }`}
              >
                AI Projects
                <i className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${openFlyout === 'ai-projects' ? 'rotate-180' : ''}`}></i>
              </button>
              {openFlyout === 'ai-projects' && (
                <FlyoutMenu items={aiProjectsMenu} onClose={() => setOpenFlyout(null)} />
              )}
            </div>

            <Link
              to="/fractional-caio"
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isActive('/fractional-caio') ? 'text-foreground-950 font-semibold' : 'text-foreground-700 hover:text-foreground-950'
              }`}
            >
              Fractional CAIO
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isActive('/products') ? 'text-foreground-950 font-semibold' : 'text-foreground-700 hover:text-foreground-950'
              }`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isActive('/about') ? 'text-foreground-950 font-semibold' : 'text-foreground-700 hover:text-foreground-950'
              }`}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors cursor-pointer ${
                location.pathname.startsWith('/blog') ? 'text-foreground-950 font-semibold' : 'text-foreground-700 hover:text-foreground-950'
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-ghost text-sm">
              Contact
            </Link>
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-background-100 cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl text-foreground-950`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-background-200 bg-background-50">
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                className={`text-sm font-medium px-2 py-2 rounded-lg transition-colors hover:bg-background-100 ${isActive('/') ? 'text-foreground-950 font-semibold' : 'text-foreground-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`text-sm font-medium px-2 py-2 rounded-lg transition-colors hover:bg-background-100 ${isActive('/services') ? 'text-foreground-950 font-semibold' : 'text-foreground-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/rapid-mvp"
                className={`text-sm font-medium px-2 py-2 rounded-lg transition-colors hover:bg-background-100 ${isActive('/rapid-mvp') ? 'text-foreground-950 font-semibold' : 'text-foreground-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Rapid MVP
              </Link>
              <Link
                to="/receptionist"
                className={`text-sm font-medium px-2 py-2 rounded-lg transition-colors hover:bg-background-100 ${isActive('/receptionist') ? 'text-foreground-950 font-semibold' : 'text-foreground-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Nova AI
              </Link>
              <Link
                to="/ai-projects"
                className={`text-sm font-medium px-2 py-2 rounded-lg transition-colors hover:bg-background-100 ${isActive('/ai-projects') ? 'text-foreground-950 font-semibold' : 'text-foreground-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                AI Projects
              </Link>
              <Link
                to="/fractional-caio"
                className={`text-sm font-medium px-2 py-2 rounded-lg transition-colors hover:bg-background-100 ${isActive('/fractional-caio') ? 'text-foreground-950 font-semibold' : 'text-foreground-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Fractional CAIO
              </Link>
              <Link
                to="/products"
                className={`text-sm font-medium px-2 py-2 rounded-lg transition-colors hover:bg-background-100 ${isActive('/products') ? 'text-foreground-950 font-semibold' : 'text-foreground-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium px-2 py-2 rounded-lg transition-colors hover:bg-background-100 ${isActive('/about') ? 'text-foreground-950 font-semibold' : 'text-foreground-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/blog"
                className={`text-sm font-medium px-2 py-2 rounded-lg transition-colors hover:bg-background-100 ${location.pathname.startsWith('/blog') ? 'text-foreground-950 font-semibold' : 'text-foreground-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-medium px-2 py-2 rounded-lg transition-colors hover:bg-background-100 ${isActive('/contact') ? 'text-foreground-950 font-semibold' : 'text-foreground-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 border-t border-background-100 mt-2">
                <Link
                  to="/contact"
                  className="block bg-primary-500 text-background-50 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors text-center whitespace-nowrap cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}