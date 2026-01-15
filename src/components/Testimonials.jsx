export default function Testimonials() {
  const reviews = [
    ["Rahul Sharma", "Very good service and genuine products."],
    ["Amit Verma", "Best computer repair service in area."],
    ["Suresh Patil", "Affordable and fast service. Highly recommended!"],
  ];

  return (
    <div className="bg-black/5 dark:bg-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">What Our Customers Say</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="glass p-6 rounded-xl">
              <p className="text-slate-600 dark:text-slate-400">"{r[1]}"</p>
              <h4 className="font-bold mt-4">— {r[0]}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
