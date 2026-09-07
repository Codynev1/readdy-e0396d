const clients = [
  { name: 'Johnson Plumbing', icon: 'ri-hospital-line' },
  { name: 'Rodriguez Construction', icon: 'ri-building-2-line' },
  { name: 'Chen Marketing', icon: 'ri-bar-chart-box-line' },
  { name: 'Meridian Dental', icon: 'ri-hospital-line' },
  { name: 'Acme Logistics', icon: 'ri-truck-line' },
  { name: 'Cardinal Law', icon: 'ri-scales-3-line' },
  { name: 'Forge & Vine', icon: 'ri-restaurant-line' },
  { name: 'Northbridge HVAC', icon: 'ri-temp-hot-line' },
];

function ClientItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 px-8 py-3 shrink-0">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary-100 text-secondary-700">
        <i className={`${icon} text-lg`}></i>
      </div>
      <span className="text-sm font-medium text-foreground-700 whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function LogoStrip() {
  const allClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="py-10 bg-background-50 border-y border-background-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center">
          <span className="text-sm font-medium text-foreground-600 tracking-wide">
            Trusted by businesses across Indianapolis and beyond
          </span>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track">
          {allClients.map((client, index) => (
            <ClientItem key={index} name={client.name} icon={client.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}