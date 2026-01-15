export default function WhyChooseUs() {
  const points = [
    "Trusted Local Computer Service",
    "Best Price Guarantee",
    "Doorstep Service Available",
    "Original & Quality Products",
    "Experienced Technician Team",
    "Fast Support & Response",
  ];

  return (
    <div className="bg-black/5 dark:bg-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose RK Infotech?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div key={i} className="glass p-6 rounded-xl">
              <h3 className="font-bold text-lg">✅ {p}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
