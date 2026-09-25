import React from 'react';
import { MapPin, CheckCircle, Navigation } from 'lucide-react';
import { hermosilloAreas } from '../data/symptomsData';

export default function CoverageMap() {
  return (
    <section id="cobertura" className="py-16 bg-[#0B0F17] border-t border-[#232D42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141B28] text-[#FFA336] border border-[#232D42] text-xs font-bold font-tech uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" /> COBERTURA METROPOLITANA
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading uppercase text-white tracking-tight">
              Servicio a Domicilio en Todo Hermosillo y Alrededores
            </h2>
            <p className="text-slate-300 font-sans text-sm leading-relaxed">
              Contamos con unidades móviles equipadas con herramientas, hidrolavadoras de presión, gas refrigerante ecológico y refacciones listas para atender urgencias el mismo día.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {hermosilloAreas.map((area, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-sans text-slate-200 bg-[#141B28] p-3 rounded-xl border border-[#232D42] shadow-sm">
                  <CheckCircle className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#141B28] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl border border-[#232D42]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/15 text-[#FFA336] text-xs font-bold font-tech uppercase tracking-wider border border-[#FF6B00]/30">
                <Navigation className="w-3.5 h-3.5" /> TIEMPO PROMEDIO DE RESPUESTA: &lt; 45 MIN
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-heading uppercase text-white tracking-wide">
                ¿Tu aire se descompuso hoy en Hermosillo?
              </h3>
              <p className="text-sm font-sans text-slate-300 leading-relaxed">
                Las altas temperaturas provocan que los compresores se apaguen por protección térmica. No esperes a que se queme el motor. Agenda tu turno y acudimos con la <span className="font-tech font-bold text-[#FF6B00]">tarifa base de $400 MXN</span>.
              </p>
              
              <div className="pt-2">
                <a
                  href="https://wa.me/526624205643?text=Hola%20ClimaPro,%20necesito%20un%20técnico%20urgente%20en%20mi%20colonia%20de%20Hermosillo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FFA336] text-white font-black font-heading uppercase tracking-wider text-xs hover:from-[#E65D00] hover:to-[#FF6B00] transition shadow-lg shadow-[#FF6B00]/25"
                >
                  Consultar disponibilidad en mi colonia →
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
