import { openWhatsApp } from "../utils/whatsapp";


export default function Hero() {
  return (
    <div className="min-h-[90vh] flex items-center bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-6xl font-bold">
            RK Infotech <br />
            <span className="text-blue-500">Computer Sales & Services</span>
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Branded & Assembled Computers, New & Refurbished Laptops, Accessories, Repairing & Doorstep Service.
          </p>

          <div className="flex gap-4 mt-6">
            <a href="/products" className="px-6 py-3 bg-blue-600 text-white rounded-lg">View Products</a>
           <button
  onClick={() => openWhatsApp("Hello RK Infotech, I want to know about your products and services.")}
  className="px-6 py-3 border rounded-lg "
>
  WhatsApp
</button>
          </div>
        </div>

        <div className="glass p-8 rounded-2xl shadow-xl h-80 flex items-center justify-center">
          <span className="text-2xl text-slate-400">Product Image Here</span>
        </div>

      </div>
    </div>
  );
}
