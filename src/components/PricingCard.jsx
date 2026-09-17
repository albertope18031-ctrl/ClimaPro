import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldAlert, Sparkles, Tag, ArrowRight } from 'lucide-react';

export default function PricingCard({ onBookClick }) {
  return (
    <section id="tarifa" className="py-16 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Tag className="w-3.5 h-3.5" /> Política de Transparencia Total
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950">
            Tarifa Base Transparente y Sin Sorpresas
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Sin costos ocultos ni presupuestos inflados al llegar a tu domicilio en Hermosillo.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-950 via-brand-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-brand-700/50"
        >
          {/* Badge decorativo */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-500/15 rounded-full blur-2xl pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
                <Sparkles className="w-3.5 h-3.5" /> Cualquier tipo de sistema climatizado
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Revisión, Diagnóstico y Servicio Base
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Aplica para cualquier tipo de sistema (Mini-Split Inverter o convencional, Aire Central, Piso-Techo o Cassette) en Hermosillo y alrededores, <strong>sea la cantidad de equipos que sean</strong>.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold text-xs">✓</div>
                  <span>Diagnóstico manométrico de presiones de gas refrigerante</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold text-xs">✓</div>
                  <span>Inspección eléctrica de capacitores, contactores y amperaje de compresor</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold text-xs">✓</div>
                  <span>Revisión de bandeja de drenaje, turbina y estado del serpentín</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold text-xs">✓</div>
                  <span>Garantía por escrito de 90 días respaldada por ClimaPro</span>
                </li>
              </ul>
            </div>

            {/* PRECIO DESTACADO */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 text-center space-y-4">
              <div className="text-xs uppercase tracking-widest text-cyan-300 font-bold">Precio Tarifa Base</div>
              
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl text-cyan-300 font-bold">$</span>
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">400</span>
                <span className="text-xs text-slate-300 font-bold">MXN</span>
              </div>

              <p className="text-[11px] text-slate-300 leading-snug">
                Tarifa fija y accesible para acudir a tu domicilio en Hermosillo y revisar a fondo tus sistemas de climatización.
              </p>

              <a
                href="#agendar"
                onClick={onBookClick}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-brand-400 text-slate-950 font-black text-sm uppercase tracking-wider hover:brightness-110 transition shadow-lg flex items-center justify-center gap-2"
              >
                <span>Aprovechar Tarifa de $400</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="text-[10px] text-slate-400">
                Pagas al técnico en tu domicilio tras revisar tus equipos
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
