import React from 'react';

const FloatingWhatsApp = () => {
  const phoneNumber = '923076160255';
  const message = encodeURIComponent('Hi Tayyab, I visited your portfolio and would like to connect.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 md:bottom-8 md:right-8"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-300 group-hover:scale-110">
        <span className="whatsapp-ray" aria-hidden="true" />
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
          <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.77.47 3.5 1.36 5.02L2 22l5.1-1.33A10.02 10.02 0 0 0 12.04 22C17.57 22 22 17.52 22 12S17.57 2 12.04 2zm0 18.3c-1.6 0-3.17-.43-4.54-1.24l-.32-.19-3.03.79.81-2.95-.21-.33A8.26 8.26 0 0 1 3.73 12c0-4.57 3.73-8.3 8.31-8.3 4.57 0 8.27 3.73 8.27 8.3s-3.7 8.3-8.27 8.3z" />
        </svg>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
