export default function Stats() {
  const stats = [
    ["10+", "Years Experience"],
    ["1000+", "Happy Clients"],
    ["5000+", "Devices Repaired"],
    ["24/7", "Support"],
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {stats.map((s, i) => (
        <div key={i} className="glass p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-blue-600">{s[0]}</h3>
          <p className="text-slate-600 dark:text-slate-400">{s[1]}</p>
        </div>
      ))}
    </div>
  );
}
