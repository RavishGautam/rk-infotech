import { useState } from "react";
import products from "../data/products";
import { openWhatsApp } from "../utils/whatsapp";


export default function Products() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Our Products</h1>

      <div className="flex gap-4 mb-8">
        {["all", "laptop", "desktop", "accessory"].map(f => (
          <button key={f}
            onClick={() => setFilter(f)}
            className="px-4 py-2 border rounded-lg capitalize cursor-pointer">
            {f}
          </button>
        ))}
      </div>



      <div className="grid md:grid-cols-4 gap-6">
        {filtered.map(p => (
          <div key={p.id} className="glass p-4 rounded-xl">
            <div className="h-40 bg-slate-200 dark:bg-slate-800 rounded mb-3"></div>
            <h3 className="font-bold">{p.name}</h3>
            {/* <div className="flex gap-2 mt-3">
              <a className="flex-1 bg-blue-600 text-white rounded p-2 text-center">Enquire</a>
              <a className="flex-1 border rounded p-2 text-center">WhatsApp</a>
            </div> */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={() =>
                  openWhatsApp(`Hello RK Infotech, I am interested in ${p.name}. Please share price and details.`)
                }
                className="flex-1 bg-green-600 text-white rounded p-2 text-center cursor-pointer"
              >
                WhatsApp
              </button>

              <a
                href="/contact"
                className="flex-1 border rounded p-2 text-center cursor-pointer"
              >
                Call
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
