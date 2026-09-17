import React from 'react';
import { MapPin, CheckCircle, Navigation } from 'lucide-react';
import { hermosilloAreas } from '../data/symptomsData';

export default function CoverageMap() {
  return (
    <section id="cobertura" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" /> Cobertura Local
            </span>
            <h2 className="text-3xl font-black text-slate-950">
              Servicio a Domicilio en Todo Hermosillo y Alrededores
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Contamos con unidades móviles equipadas con herramientas, hidrolavadoras de presión, gas refrigerante ecológico y refacciones listas para atender urgencias el mismo día.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {hermosilloAreas.map((area, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span className="font-semibold">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-gradient-to-br from-brand-900 to-slate-950 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl border border-brand-800">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-bold">
                <Navigation className="w-3.5 h-3.5" /> Tiempo Promedio de Respuesta
              </div>
              <h3 className="text-2xl font-black">
                ¿Tu aire se descompuso hoy en Hermosillo?
              </h3>
              <p className="text-sm text-slate-300">
                Las altas temperaturas provocan que los compresores se apaguen por protección térmica. No esperes a que se queme el motor. Agenda tu turno y acudimos con la tarifa base de $400.
              </p>
              
              <div className="pt-2">
                <a
                  href="https://wa.me/526624205643?text=Hola%20ClimaPro,%20necesito%20un%20técnico%20urgente%20en%20mi%20colonia%20de%20Hermosillo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition shadow"
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
