const painCards = [
  {
    quote: "We're bleeding money on telecom.",
    body: 'Between overpriced phone plans, unused data, and devices that do not fit the job, most small businesses spend 30-40% more on connectivity than they should. Nobody audits the bill until it hurts.',
  },
  {
    quote: "We're missing leads after hours.",
    body: 'The phone rings at 7 PM. The website visitor has a question at midnight. Your best prospects do not operate on your schedule. Without 24/7 coverage, those calls go to voicemail — and then to a competitor.',
  },
  {
    quote: "Our team is stuck doing busywork.",
    body: 'Repetitive follow-ups, manual data entry, chasing down status updates — your people are buried in tasks that software could handle in seconds. The cost is not just time. It is morale and missed growth.',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="section-eyebrow">The Problem</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 leading-tight mb-6">
            Most businesses are aware of technology.
            <br />
            Very few are getting their money's worth.
          </h2>
          <p className="text-lg text-foreground-700 leading-relaxed">
            You have watched competitors roll out AI phone systems, automated chatbots, and "smart" everything. You have signed up for a few tools yourself. Maybe you have even spent real money on a new phone plan or a consultant. But six months later, the question is still the same: <em className="text-foreground-900">is any of this actually working?</em>
          </p>
          <p className="text-lg text-foreground-700 leading-relaxed mt-4">
            You are not behind because you are not trying. You are behind because nobody handed you a plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painCards.map((card, index) => (
            <div
              key={index}
              className="bg-background-100 rounded-2xl p-8 border border-background-200 hover:border-primary-200 transition-colors"
            >
              <div className="quote-mark mb-2">"</div>
              <div className="text-lg font-semibold text-foreground-900 mb-4">{card.quote}</div>
              <p className="text-foreground-700 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}