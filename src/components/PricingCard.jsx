import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Tag, ArrowRight } from 'lucide-react';

export default function PricingCard({ onBookClick }) {
  return (
    <section id="tarifa" className="py-16 bg-[#0B0F17] border-y border-[#232D42]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141B28] text-[#FFA336] border border-[#232D42] text-xs font-bold uppercase tracking-wider mb-2">
            <Tag className="w-3.5 h-3.5" /> Política de Transparencia Total
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Tarifa Base Transparente y Sin Sorpresas
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Sin costos ocultos ni presupuestos inflados al llegar a tu domicilio en Hermosillo.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#141B28] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border-2 border-[#232D42]"
        >
          {/* Badge decorativo */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#FF6B00]/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/15 text-[#FFA336] text-xs font-bold border border-[#FF6B00]/30">
                <Sparkles className="w-3.5 h-3.5" /> Cualquier tipo de sistema climatizado
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Revisión, Diagnóstico y Servicio Base
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Aplica para cualquier tipo de sistema (Mini-Split Inverter o convencional, Aire Central, Piso-Techo o Cassette) en Hermosillo y alrededores, <strong className="text-white">sea la cantidad de equipos que sean</strong>.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold text-xs">✓</div>
                  <span>Diagnóstico manométrico de presiones de gas refrigerante</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold text-xs">✓</div>
                  <span>Inspección eléctrica de capacitores, contactores y amperaje de compresor</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold text-xs">✓</div>
                  <span>Revisión de bandeja de drenaje, turbina y estado del serpentín</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold text-xs">✓</div>
                  <span>Garantía por escrito de 90 días respaldada por ClimaPro</span>
                </li>
              </ul>
            </div>

            {/* PRECIO DESTACADO */}
            <div className="lg:col-span-5 bg-[#0B0F17] rounded-2xl p-6 sm:p-8 border border-[#232D42] text-center space-y-4 shadow-inner">
              <div className="text-xs uppercase tracking-widest text-[#FFA336] font-bold">Precio Tarifa Base</div>
              
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl text-[#FF6B00] font-black">$</span>
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">400</span>
                <span className="text-xs text-[#FFA336] font-bold">MXN</span>
              </div>

              <p className="text-[11px] text-slate-400 leading-snug">
                Tarifa fija y accesible para acudir a tu domicilio en Hermosillo y revisar a fondo tus sistemas de climatización.
              </p>

              <a
                href="#agendar"
                onClick={onBookClick}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#FF6B00] via-[#FF6B00] to-[#FFA336] text-white font-black text-sm uppercase tracking-wider hover:from-[#E65D00] hover:to-[#FF6B00] transition shadow-lg shadow-[#FF6B00]/25 flex items-center justify-center gap-2"
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
