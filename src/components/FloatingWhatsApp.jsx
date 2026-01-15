import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919999999999"
      className="fixed bottom-6 right-6 bg-accent text-white p-4 rounded-full shadow-lg text-3xl z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsApp;
