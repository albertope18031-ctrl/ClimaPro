import React from 'react';
import { Phone, Zap, Clock } from 'lucide-react';

export default function TopBanner() {
  return (
    <div className="bg-[#0B0F17] text-white text-xs sm:text-sm py-2.5 px-4 border-b border-[#232D42]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FF6B00]/15 text-[#FFA336] border border-[#FF6B00]/30 animate-pulse">
            <Zap className="w-3 h-3 text-[#FF6B00] fill-current" /> Servicio Urgente Hoy
          </span>
          <span className="text-slate-300 font-medium">
            Técnicos activos en <strong className="text-white">Hermosillo y alrededores</strong>
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="hidden md:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-[#FFA336]" /> Lun - Sáb: 7:00 AM - 8:00 PM
          </span>
          <a 
            href="https://wa.me/526624205643?text=Hola%20ClimaPro,%20tengo%20una%20urgencia%20con%20mi%20aire%20acondicionado%20en%20Hermosillo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-bold text-[#22C55E] hover:text-white transition bg-[#141B28] hover:bg-[#22C55E]/15 px-3 py-1 rounded-lg border border-[#232D42] hover:border-[#22C55E]"
          >
            <Phone className="w-3.5 h-3.5" /> WhatsApp: 662 420 5643
          </a>
        </div>
      </div>
    </div>
  );
}
