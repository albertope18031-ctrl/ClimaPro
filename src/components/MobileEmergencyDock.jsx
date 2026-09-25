import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileEmergencyDock() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B0F17]/95 backdrop-blur-lg border-t-2 border-[#232D42] px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto font-heading uppercase tracking-wider text-xs font-black">
        {/* BOTÓN 1: LLAMADA */}
        <a
          href="tel:+526624205643"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#141B28] hover:bg-[#1B2436] text-white border border-[#232D42] active:scale-95 transition shadow"
        >
          <Phone className="w-4 h-4 text-[#FF6B00]" />
          <span>Llamar Ahora</span>
        </a>

        {/* BOTÓN 2: WHATSAPP EXPRESS */}
        <a
          href="https://wa.me/526624205643?text=Hola%20ClimaPro,%20necesito%20despachar%20un%20técnico%20con%20la%20tarifa%20base%20de%20$400"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-[#FF6B00] via-[#FF6B00] to-[#FFA336] text-white active:scale-95 transition shadow-lg shadow-[#FF6B00]/30"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp ($400)</span>
        </a>
      </div>
    </div>
  );
}
