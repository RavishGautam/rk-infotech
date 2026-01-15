import { openWhatsApp } from "../utils/whatsapp";


export default function CTA() {
  return (
    <div className="py-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <h2 className="text-3xl font-bold">Need Computer or Laptop Service?</h2>
      <p className="mt-2">Call or WhatsApp RK Infotech Today!</p>

      <div className="flex justify-center gap-4 mt-6">
        <a className="bg-white text-black px-6 py-3 rounded-lg">Call Now</a>
       <button
  onClick={() => openWhatsApp("Hello RK Infotech, I need computer/laptop service. Please contact me.")}
  className="border border-white px-6 py-3 rounded-lg"
>
  WhatsApp
</button>
      </div>
    </div>
  );
}
