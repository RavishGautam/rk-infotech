export default function Services() {
  const services = [
    "New & Refurbished Laptops",
    "Branded & Assembled Desktops",
    "Computer & Laptop Repair",
    "Printer Repair & Sales",
    "LAN / Networking",
    "All Computer Accessories",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="glass p-6 rounded-xl hover:scale-105 transition">
            <h3 className="font-bold text-lg mb-2">{s}</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Professional service with best quality and affordable price.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
