export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="glass p-6 rounded-xl">📞 Phone: +91 9870605214</div>
        <div className="glass p-6 rounded-xl">📍 Location: Mumbai</div>
        <div className="glass p-6 rounded-xl">💬 WhatsApp Available</div>
      </div>

      <div className="glass p-4 rounded-xl h-[400px] flex items-center justify-center text-slate-400">
        Google Map Embed Here
      </div>
    </div>
  );
}
