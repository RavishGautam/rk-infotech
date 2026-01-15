export const openWhatsApp = (message) => {
  const phone = "919870605214"; // <-- PUT YOUR NUMBER HERE
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
