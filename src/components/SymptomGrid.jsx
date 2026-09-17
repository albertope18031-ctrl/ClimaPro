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
    <section id="diagnostico" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            Diagnóstico de Especialista ClimaPro
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
            ¿Cuál de estas fallas presenta tu equipo?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
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
                className="bg-slate-50 rounded-3xl p-6 border-2 border-slate-200/80 hover:border-brand-500 transition-all card-hover-glow flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-brand-600 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs font-semibold text-brand-700 mb-3">{item.subtitle}</p>
                  
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  {/* CAUSAS PROBABLES */}
                  <div className="bg-white rounded-2xl p-4 border border-slate-200 text-xs space-y-2 mb-4 shadow-sm">
                    <div className="font-bold text-slate-800 flex items-center gap-1">
                      <span>🔍 Causas Técnicas Comunes:</span>
                    </div>
                    <ul className="text-slate-600 space-y-1 text-[11px]">
                      {item.causes.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-brand-500 font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-800 bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-emerald-800 text-[11px] leading-tight">{item.solution}</span>
                  </div>

                  <button 
                    onClick={() => onSelectSymptom(item.actionValue)}
                    className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-sm group-hover:bg-brand-700"
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
