import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Tag, ArrowRight } from 'lucide-react';

export default function PricingCard({ onBookClick }) {
  return (
    <section id="tarifa" className="py-16 bg-[#0B0F17] border-y border-[#232D42]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141B28] text-[#FFA336] border border-[#232D42] text-xs font-bold font-tech uppercase tracking-widest mb-2">
            <Tag className="w-3.5 h-3.5 text-[#FF6B00]" /> TRANSPARENCIA OPERATIVA
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading uppercase text-white tracking-tight">
            Tarifa Base Transparente Sin Sorpresas
          </h2>
          <p className="text-slate-300 font-sans text-sm mt-2">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/15 text-[#FFA336] text-xs font-bold font-tech uppercase tracking-wide border border-[#FF6B00]/30">
                <Sparkles className="w-3.5 h-3.5" /> Cualquier tipo de sistema climatizado
              </div>

              <h3 className="text-2xl sm:text-4xl font-black font-heading uppercase text-white tracking-tight leading-tight">
                Revisión, Diagnóstico y Servicio Base
              </h3>
              
              <p className="text-slate-300 font-sans text-sm leading-relaxed">
                Aplica para cualquier tipo de sistema (Mini-Split Inverter o convencional, Aire Central, Piso-Techo o Cassette) en Hermosillo y alrededores, <strong className="text-white font-semibold">sea la cantidad de equipos que sean</strong>.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm font-sans text-slate-200">
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold text-xs font-tech">✓</div>
                  <span>Diagnóstico manométrico de presiones de gas refrigerante digital</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold text-xs font-tech">✓</div>
                  <span>Inspección eléctrica de capacitores, contactores y amperaje de compresor</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold text-xs font-tech">✓</div>
                  <span>Revisión de bandeja de drenaje, turbina y estado del serpentín</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold text-xs font-tech">✓</div>
                  <span><strong className="font-tech font-bold text-white">90 DÍAS DE GARANTÍA</strong> por escrito respaldada por ClimaPro</span>
                </li>
              </ul>
            </div>

            {/* PRECIO DESTACADO EN SPACE GROTESK */}
            <div className="lg:col-span-5 bg-[#0B0F17] rounded-2xl p-6 sm:p-8 border border-[#232D42] text-center space-y-4 shadow-inner">
              <div className="text-xs uppercase tracking-widest text-[#FFA336] font-bold font-tech">PRECIO TARIFA BASE PLANA</div>
              
              <div className="flex items-baseline justify-center gap-1 font-tech">
                <span className="text-4xl text-[#FF6B00] font-black">$</span>
                <span className="text-6xl sm:text-7xl font-black text-white tracking-tighter">400</span>
                <span className="text-sm text-[#FFA336] font-bold tracking-wider">MXN</span>
              </div>

              <p className="text-[11px] font-sans text-slate-400 leading-snug">
                Tarifa fija y accesible para acudir a tu domicilio en Hermosillo y revisar a fondo tus sistemas de climatización.
              </p>

              <a
                href="#agendar"
                onClick={onBookClick}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#FF6B00] via-[#FF6B00] to-[#FFA336] text-white font-black font-heading uppercase text-sm tracking-wider hover:from-[#E65D00] hover:to-[#FF6B00] transition shadow-lg shadow-[#FF6B00]/25 flex items-center justify-center gap-2"
              >
                <span>Aprovechar Tarifa de $400</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="text-[10px] font-tech text-slate-400 uppercase tracking-wide">
                Pagas al técnico en tu domicilio tras revisar tus equipos
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
