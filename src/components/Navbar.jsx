import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { openWhatsApp } from "../utils/whatsapp";


export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/40 border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">RK Infotech</Link>

        <div className="flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-2 border rounded-lg"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>

          {/* <a className="bg-blue-600 text-white px-4 py-2 rounded-lg">Call Now</a> */}
          <button
            onClick={() => openWhatsApp("Hello RK Infotech, I want to inquire about your products.")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            WhatsApp
          </button>

        </div>
      </div>
    </div>
  );
}
