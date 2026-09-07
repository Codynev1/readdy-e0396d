const stats = [
  { value: '500', unit: '+', label: 'Businesses served across Indiana' },
  { value: '95', unit: '%', label: 'Client retention rate' },
  { value: '40', unit: '%', label: 'Average cost reduction on telecom' },
  { value: '24', unit: '/7', label: 'AI agent availability' },
];

export default function StatsBand() {
  return (
    <section className="py-16 bg-background-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background-50 rounded-2xl border border-background-200 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground-950 mb-2">
                  {stat.value}
                  <span className="text-lg font-normal text-foreground-600 ml-1">{stat.unit}</span>
                </div>
                <div className="text-sm text-foreground-600 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}