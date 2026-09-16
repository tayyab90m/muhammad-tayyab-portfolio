import React from 'react';

const FloatingWhatsApp = () => {
  const phoneNumber = '923076160255';
  const message = encodeURIComponent('Hi Tayyab, I visited your portfolio and would like to connect.');

  return (
    <div className="fixed bottom-4 right-4 z-50 flex h-28 w-28 items-center justify-center">
      <span className="whatsapp-ray" />
      <span className="whatsapp-ray" />
      <span className="whatsapp-ray whatsapp-ray-delay" />
      <span className="whatsapp-ray whatsapp-ray-delay" />
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl shadow-2xl shadow-green-500/40 transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="h-full w-full object-cover"
          />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
