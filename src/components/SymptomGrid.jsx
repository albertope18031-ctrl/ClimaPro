import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Flame, Biohazard, Droplets, CheckCircle2, ArrowRight } from 'lucide-react';
import { symptomsData } from '../data/symptomsData';

const iconMap = {
  Wind,
  Flame,
  Biohazard,
  Droplets
};

export default function SymptomGrid({ onSelectSymptom }) {
  return (
    <section id="diagnostico" className="py-20 bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141B28] text-[#FFA336] text-xs font-bold font-tech uppercase tracking-widest mb-3 border border-[#232D42]">
            DIAGNÓSTICO TÉCNICO CLIMAPRO
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading uppercase text-white tracking-tight">
            ¿Cuál de estas fallas presenta tu equipo?
          </h2>
          <p className="text-slate-300 font-sans text-base sm:text-lg mt-3">
            Conoce el diagnóstico técnico preliminar y la solución profesional que aplicamos en tu domicilio en Hermosillo.
          </p>
        </div>

        {/* LAS 4 TARJETAS DE FALLAS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {symptomsData.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Wind;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#141B28] rounded-3xl p-6 border-2 border-[#232D42] hover:border-[#FF6B00] transition-all card-hover-glow flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B0F17] shadow-sm border border-[#232D42] flex items-center justify-center text-[#FF6B00] group-hover:scale-110 group-hover:bg-[#FF6B00] group-hover:text-white transition-all">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className={`text-[10px] font-bold font-tech uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-black font-heading uppercase text-white mb-1 tracking-wide">{item.title}</h3>
                  <p className="text-xs font-bold font-tech text-[#FFA336] mb-3 tracking-wide">{item.subtitle}</p>
                  
                  <p className="text-xs font-sans text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  {/* CAUSAS PROBABLES */}
                  <div className="bg-[#0B0F17] rounded-2xl p-4 border border-[#232D42] text-xs space-y-2 mb-4 shadow-sm">
                    <div className="font-bold font-heading uppercase text-slate-200 flex items-center gap-1 tracking-wide text-[11px]">
                      <span>🔍 Causas Técnicas Comunes:</span>
                    </div>
                    <ul className="text-slate-300 font-sans space-y-1 text-[11px]">
                      {item.causes.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#FF6B00] font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold font-tech text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 p-2.5 rounded-xl mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span className="text-[11px] leading-tight font-sans font-semibold">{item.solution}</span>
                  </div>

                  <button 
                    onClick={() => onSelectSymptom(item.actionValue)}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FFA336] hover:from-[#E65D00] hover:to-[#FF6B00] text-white font-black font-heading uppercase tracking-wider text-xs transition flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Solucionar esta falla</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
