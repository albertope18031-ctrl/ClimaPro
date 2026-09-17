import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo-climapro.jpg';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          <div className="md:col-span-2 space-y-4">
            <img 
              src={logoImg} 
              alt="ClimaPro Climatización & Refrigeración" 
              className="h-14 w-auto brightness-200 contrast-200 invert object-contain"
            />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Empresa líder en climatización residencial, comercial e industrial en Hermosillo y alrededores. Solución profesional a fallas de flujo, enfriamiento, malos olores y fugas de agua.
            </p>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-xs">
              <ShieldCheck className="w-4 h-4" /> 90 Días de Garantía por Escrito
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Fallas Especializadas</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#diagnostico" className="hover:text-cyan-400 transition">Aire no arroja mucho aire</a></li>
              <li><a href="#diagnostico" className="hover:text-cyan-400 transition">Equipo no enfría / aire tibio</a></li>
              <li><a href="#diagnostico" className="hover:text-cyan-400 transition">Huele a humedad o vinagre</a></li>
              <li><a href="#diagnostico" className="hover:text-cyan-400 transition">Chorrea o gotea agua adentro</a></li>
              <li><a href="#tarifa" className="hover:text-cyan-400 transition">Tarifa Base $400 MXN</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Contacto Hermosillo</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Hermosillo y alrededores, Sonora</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+526624205643" className="hover:text-white font-bold">662 420 5643</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Lun a Sáb: 7:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} ClimaPro Climatización & Refrigeración. Todos los derechos reservados.</p>
          <p className="text-slate-400">Hermosillo, Sonora • Diseñado para alto rendimiento y conversión.</p>
        </div>
      </div>
    </footer>
  );
}
