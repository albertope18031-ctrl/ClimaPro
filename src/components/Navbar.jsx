import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Zap } from 'lucide-react';
import ClimaProLogo from './ClimaProLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0B0F17]/95 backdrop-blur-md border-b border-[#232D42] shadow-sm transition-all font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#" className="flex items-center group">
          <ClimaProLogo className="h-10 sm:h-12 w-auto" />
        </a>

        {/* STATUS "TÉCNICOS EN RUTA HOY" */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141B28] border border-[#232D42] text-xs font-tech">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]"></span>
          </span>
          <span className="text-slate-300 font-medium">TÉCNICOS ACTIVOS EN HERMOSILLO</span>
          <span className="text-[#FFA336] font-bold">| HOY EN RUTA</span>
        </div>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold font-heading tracking-wide text-slate-300">
          <a href="#soluciones" className="hover:text-[#FF6B00] transition">MATRIZ DE SOLUCIONES</a>
          <a href="#garantias" className="hover:text-[#FF6B00] transition">GARANTÍAS</a>
          <a href="#cobertura" className="hover:text-[#FF6B00] transition">RADAR DE COBERTURA</a>
          <a href="#checklist" className="hover:text-[#FF6B00] transition">CHECKLIST 10 PTS</a>
        </nav>

        {/* TELÉFONO DIRECTO & CTA WHATSAPP */}
        <div className="flex items-center gap-3">
          <a 
            href="tel:+526624205643" 
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#141B28] border border-[#232D42] hover:border-[#FF6B00] text-white text-xs font-tech font-bold transition tracking-wider"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>662 420 5643</span>
          </a>

          <a
            href="https://wa.me/526624205643?text=Hola%20ClimaPro,%20necesito%20despachar%20un%20técnico%20con%20la%20tarifa%20base%20de%20$400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold font-heading uppercase text-xs sm:text-sm tracking-wider text-white bg-gradient-to-r from-[#FF6B00] via-[#FF6B00] to-[#FFA336] hover:from-[#E65D00] hover:to-[#FF6B00] shadow-lg shadow-[#FF6B00]/25 transition-all transform hover:-translate-y-0.5"
          >
            <Zap className="w-4 h-4" />
            <span>Despachar Cita</span>
          </a>

          {/* Menú móvil toggler */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-slate-300 hover:bg-[#141B28]"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B0F17] border-b border-[#232D42] px-6 py-4 space-y-3 font-heading font-bold text-sm tracking-wide">
          <a 
            href="#soluciones" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-[#FF6B00]"
          >
            MATRIZ DE SOLUCIONES
          </a>
          <a 
            href="#garantias" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-[#FF6B00]"
          >
            CERTIDUMBRE Y COSTES ($400 BASE)
          </a>
          <a 
            href="#cobertura" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-[#FF6B00]"
          >
            RADAR DE COBERTURA HERMOSILLO
          </a>
          <a 
            href="#checklist" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-[#FF6B00]"
          >
            CHECKLIST DE 10 PUNTOS DE SERVICIO
          </a>
          <a 
            href="#testimonios" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-[#FF6B00]"
          >
            OPINIONES POR COLONIA
          </a>
        </div>
      )}
    </header>
  );
}
