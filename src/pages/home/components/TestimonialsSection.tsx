import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    stars: 5,
    quote: "NevTech AI transformed our business. The AI phone system handles after-hours calls and our new cellular setup cut our monthly bills by 35%. We're capturing leads we never would have gotten before.",
    initials: 'SJ',
    name: 'Sarah Johnson',
    role: 'Owner · Johnson Plumbing Services',
    color: 'bg-primary-500',
  },
  {
    stars: 5,
    quote: "The IoT connectivity for our equipment and the 5G internet solutions have been game-changers. We can track our fleet in real-time and our field teams stay connected on every job site.",
    initials: 'MR',
    name: 'Mike Rodriguez',
    role: 'General Contractor · Rodriguez Construction',
    color: 'bg-secondary-500',
  },
  {
    stars: 5,
    quote: "The workflow automation and website chat agents have streamlined our entire operation. We're handling 3x more clients with the same team size. The ROI has been incredible.",
    initials: 'LC',
    name: 'Lisa Chen',
    role: 'Founder & CEO · Chen Marketing Agency',
    color: 'bg-accent-500',
  },
];

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-background-100" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="section-eyebrow">In their words</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-tight">
            Trusted by businesses serious about getting results.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`bg-background-50 rounded-2xl p-8 border border-background-200 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <i key={i} className="ri-star-fill text-foreground-800 text-sm"></i>
                ))}
              </div>
              <p className="text-foreground-700 text-sm leading-relaxed mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-background-50 text-xs font-bold`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground-900">{t.name}</div>
                  <div className="text-xs text-foreground-600">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}