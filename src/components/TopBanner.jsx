import React from 'react';
import { Phone, Zap, Clock, Shield } from 'lucide-react';

export default function TopBanner() {
  return (
    <div className="bg-gradient-to-r from-slate-950 via-brand-950 to-brand-900 text-white text-xs sm:text-sm py-2.5 px-4 border-b border-brand-800/50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 animate-pulse">
            <Zap className="w-3 h-3 text-cyan-300 fill-current" /> Servicio Urgente Hoy
          </span>
          <span className="text-slate-200 font-medium">
            Técnicos activos en <strong className="text-white">Hermosillo y alrededores</strong>
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="hidden md:flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400" /> Lun - Sáb: 7:00 AM - 8:00 PM
          </span>
          <a 
            href="https://wa.me/526624205643?text=Hola%20ClimaPro,%20tengo%20una%20urgencia%20con%20mi%20aire%20acondicionado%20en%20Hermosillo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-bold text-cyan-300 hover:text-white transition bg-brand-900/60 hover:bg-brand-800 px-3 py-1 rounded-lg border border-brand-700/60"
          >
            <Phone className="w-3.5 h-3.5" /> WhatsApp: 662 420 5643
          </a>
        </div>
      </div>
    </div>
  );
}
