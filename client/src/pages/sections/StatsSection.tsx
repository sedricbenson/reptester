export default function StatsSection() {
  const stats = [
    { value: "24/7", label: "Access" },
    { value: "30+", label: "Workstations" },
    { value: "2", label: "Meeting Rooms" },
    { value: "1 Gbps", label: "Internet Speed" }
  ];

  return (
    <section className="bg-white py-12 border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
