import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo-climapro.jpg';

export default function Footer() {
  return (
    <footer className="bg-[#070A10] text-slate-400 text-xs py-14 border-t border-[#232D42] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 pb-10 border-b border-[#232D42]">
          
          <div className="md:col-span-2 space-y-4">
            <img 
              src={logoImg} 
              alt="ClimaPro Climatización & Refrigeración" 
              className="h-14 w-auto brightness-200 contrast-200 invert object-contain"
            />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Empresa líder en climatización residencial, comercial e industrial en Hermosillo y alrededores. Solución profesional a fallas de flujo, enfriamiento, malos olores y fugas de agua.
            </p>
            <div className="inline-flex items-center gap-2 text-[#FFA336] font-bold font-tech text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#FF6B00]" /> 90 Días de Garantía por Escrito
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold font-heading uppercase tracking-wide text-sm mb-3">Fallas Especializadas</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#diagnostico" className="hover:text-[#FF6B00] transition">Aire no arroja mucho aire</a></li>
              <li><a href="#diagnostico" className="hover:text-[#FF6B00] transition">Equipo no enfría / aire tibio</a></li>
              <li><a href="#diagnostico" className="hover:text-[#FF6B00] transition">Huele a humedad o vinagre</a></li>
              <li><a href="#diagnostico" className="hover:text-[#FF6B00] transition">Chorrea o gotea agua adentro</a></li>
              <li><a href="#tarifa" className="hover:text-[#FF6B00] transition font-tech font-bold text-slate-300">TARIFA BASE $400 MXN</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-heading uppercase tracking-wide text-sm mb-3">Contacto Hermosillo</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Hermosillo y alrededores, Sonora</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#22C55E] shrink-0" />
                <a href="tel:+526624205643" className="hover:text-white font-bold font-tech tracking-wider text-sm">662 420 5643</a>
              </li>
              <li className="flex items-center gap-2 font-tech">
                <Clock className="w-4 h-4 text-[#FFA336] shrink-0" />
                <span>LUN A SÁB: 7:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-sans">
          <p>© {new Date().getFullYear()} ClimaPro Climatización & Refrigeración. Todos los derechos reservados.</p>
          <p className="text-slate-400 font-tech">Hermosillo, Sonora • Precisión Técnica & Máximo Enfriamiento</p>
        </div>
      </div>
    </footer>
  );
}
