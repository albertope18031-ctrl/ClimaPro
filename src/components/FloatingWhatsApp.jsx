import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
      <div className="hidden sm:block bg-[#141B28] border border-[#232D42] text-white shadow-xl px-3 py-1.5 rounded-xl text-xs font-bold pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        ¿Dudas o citas? ¡Escríbenos!
      </div>
      <a
        href="https://wa.me/526624205643?text=Hola%20ClimaPro,%20tengo%20una%20consulta%20para%20un%20aire%20acondicionado%20en%20Hermosillo"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#22C55E]/50 transition transform hover:scale-110 active:scale-95"
        aria-label="Abrir chat de WhatsApp con ClimaPro al 6624205643"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#22C55E] border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </aside>
  );
}
