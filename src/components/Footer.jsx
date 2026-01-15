export default function Footer() {
  return (
    <div className="border-t border-black/10 dark:border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-bold text-blue-600">RK Infotech</h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Sales & Services of Computers, Laptops, Accessories & Repairing with Doorstep Support.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Services</h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li>New & Refurbished Laptops</li>
            <li>Branded & Assembled PCs</li>
            <li>Printer Repair</li>
            <li>Networking</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Contact</h4>
          <p className="text-slate-600 dark:text-slate-400">📞 +91 9870605214</p>
          <p className="text-slate-600 dark:text-slate-400">📍 Mumbai</p>
          <p className="text-slate-600 dark:text-slate-400">💬 WhatsApp Available</p>
        </div>

      </div>

      <div className="text-center py-4 border-t border-black/10 dark:border-white/10 text-sm text-slate-500">
        © {new Date().getFullYear()} RK Infotech. All Rights Reserved.
      </div>
    </div>
  );
}
