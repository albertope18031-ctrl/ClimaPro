import React, { useState } from 'react';
import { Calendar, MessageCircle, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo-climapro.jpg';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src={logoImg} 
            alt="ClimaPro Climatización & Refrigeración" 
            className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
          />
        </a>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a href="#diagnostico" className="hover:text-brand-600 transition">Diagnóstico de Fallas</a>
          <a href="#tarifa" className="hover:text-brand-600 transition">Tarifa Base $400</a>
          <a href="#cobertura" className="hover:text-brand-600 transition">Hermosillo & Zonas</a>
          <a href="#garantia" className="hover:text-brand-600 transition">Garantía 90 Días</a>
          <a href="#testimonios" className="hover:text-brand-600 transition">Testimonios</a>
        </nav>

        {/* BOTONES CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#agendar"
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 hover:from-brand-700 hover:to-cyan-600 shadow-md shadow-brand-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" /> Agendar Cita
          </a>
          
          <a
            href="https://wa.me/526624205643?text=Hola%20ClimaPro,%20quisiera%20solicitar%20servicio%20técnico%20para%20mi%20aire%20en%20Hermosillo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2.5 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200 transition"
            title="Enviar mensaje directo por WhatsApp"
          >
            <MessageCircle className="w-6 h-6 fill-current text-emerald-500" />
          </a>

          {/* Menú móvil toggler */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
          <a 
            href="#diagnostico" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-800 hover:text-brand-600"
          >
            Diagnóstico de Fallas
          </a>
          <a 
            href="#tarifa" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-800 hover:text-brand-600"
          >
            Tarifa Base $400 MXN
          </a>
          <a 
            href="#cobertura" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-800 hover:text-brand-600"
          >
            Cobertura Hermosillo
          </a>
          <a 
            href="#garantia" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-800 hover:text-brand-600"
          >
            Garantía 90 Días
          </a>
          <div className="pt-2">
            <a
              href="#agendar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-brand-600"
            >
              <Calendar className="w-4 h-4" /> Agendar Cita en Línea
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
