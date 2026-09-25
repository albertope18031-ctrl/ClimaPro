import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Flame, Wind, Biohazard, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ProblemSolutionMatrix({ onSelectSolution }) {
  const matrixData = [
    {
      id: 'falla-agua',
      icon: Droplets,
      symptom: '¿Tu minisplit chorrea o tira agua hacia adentro?',
      symptomTag: 'FALLA DE DRENAJE',
      tagColor: 'text-[#38BDF8] border-[#38BDF8]/40 bg-[#38BDF8]/10',
      rootCause: 'La manguera de desagüe está obstruida por limo, bacterias biológicas gelatinosas y sarro desértico, o la charola perdió inclinación.',
      solution: 'Desazolve a alta presión de línea de drenaje, purga de bandeja y corrección milimétrica de nivel en muro.',
      equipment: 'Mini-Splits y Climas Centrales',
      actionText: 'Despachar Desazolve de Agua ➔',
      problemName: '💧 Chorrea / Gotea agua adentro'
    },
    {
      id: 'falla-frio',
      icon: Flame,
      symptom: '¿Enciende el ventilador pero tira aire tibio?',
      symptomTag: 'FALLA FRIGORÍFICA',
      tagColor: 'text-[#FF6B00] border-[#FF6B00]/40 bg-[#FF6B00]/10',
      rootCause: 'Microfuga de gas refrigerante ecológico (R410A / R32), capacitor de arranque quemado por fluctuación de CFE o compresor forzado por calor.',
      solution: 'Prueba manométrica digital de presión, reemplazo de capacitor de alta durabilidad y recarga calibrada por báscula electrónica.',
      equipment: 'Inverter y Tradicionales',
      actionText: 'Despachar Chequeo de Frío y Gas ➔',
      problemName: '🔥 No enfría / Tira aire tibio'
    },
    {
      id: 'falla-aire',
      icon: Wind,
      symptom: '¿Pones velocidad máxima y apenas sale brisa?',
      symptomTag: 'FALLA DE CAUDAL',
      tagColor: 'text-[#FFA336] border-[#FFA336]/40 bg-[#FFA336]/10',
      rootCause: 'La turbina cilíndrica está colapsada de polvo y grasa; los filtros saturados asfixian el motor provocando consumo excesivo de luz.',
      solution: 'Desmontaje de carcasa e hidrolavado químico profundo de turbina con funda impermeable (Cero salpicaduras a tus paredes).',
      equipment: 'Todas las marcas y capacidades',
      actionText: 'Despachar Hidrolavado de Turbina ➔',
      problemName: '💨 No arroja mucho aire'
    },
    {
      id: 'falla-olor',
      icon: Biohazard,
      symptom: '¿Al encender emana olor a humedad, trapo o vinagre?',
      symptomTag: 'CALIDAD DE AIRE',
      tagColor: 'text-[#22C55E] border-[#22C55E]/40 bg-[#22C55E]/10',
      rootCause: 'Proliferación activa de moho, hongos y esporas en el serpentín de aluminio; estás respirando aire contaminado dentro de tu recámara.',
      solution: 'Sanitización profunda con germicida y bactericida grado hospitalario formulado para sistemas de climatización cerrada.',
      equipment: 'Salud Familiar Garantizada',
      actionText: 'Despachar Sanitización Química ➔',
      problemName: '🤢 Huele a humedad o vinagre'
    }
  ];

  const handleAction = (problemName) => {
    if (onSelectSolution) {
      onSelectSolution(problemName);
    }
    const heroEl = document.querySelector('section');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="soluciones" className="py-20 bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141B28] text-[#FFA336] text-xs font-bold font-tech uppercase tracking-widest mb-3 border border-[#232D42]">
            TRANSPARENCIA TÉCNICA CLIMAPRO
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading uppercase text-white tracking-tight">
            Matriz de Problema ➔ Causa ➔ Solución
          </h2>
          <p className="text-slate-300 font-sans text-base sm:text-lg mt-2">
            No adivinamos ni inventamos fallas. Te explicamos exactamente qué ocurre y cómo lo solucionamos con herramientas de precisión.
          </p>
        </motion.div>

        {/* COMPARADOR TÉCNICO INTERACTIVO */}
        <div className="grid lg:grid-cols-2 gap-6">
          {matrixData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#141B28] rounded-3xl p-6 sm:p-7 border-2 border-[#232D42] hover:border-[#FF6B00] transition-all card-hover-glow flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  {/* Encabezado del síntoma */}
                  <div className="flex items-center justify-between gap-3">
                    <span className={`text-[10px] font-bold font-tech uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.tagColor}`}>
                      {item.symptomTag}
                    </span>
                    <span className="text-[11px] font-tech text-slate-400">
                      {item.equipment}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-2xl bg-[#0B0F17] border border-[#232D42] text-[#FF6B00] shrink-0 mt-0.5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-tight leading-snug">
                      {item.symptom}
                    </h3>
                  </div>

                  {/* CAUSA RAÍZ */}
                  <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-[#232D42] text-xs space-y-1">
                    <div className="font-heading font-bold text-amber-400 uppercase text-[11px] flex items-center gap-1.5 tracking-wide">
                      <AlertTriangle className="w-3.5 h-3.5" /> CAUSA RAÍZ TÉCNICA:
                    </div>
                    <p className="font-sans text-slate-300 leading-relaxed">
                      {item.rootCause}
                    </p>
                  </div>

                  {/* SOLUCIÓN PROFESIONAL */}
                  <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-[#232D42] text-xs space-y-1">
                    <div className="font-heading font-bold text-[#22C55E] uppercase text-[11px] flex items-center gap-1.5 tracking-wide">
                      <CheckCircle2 className="w-3.5 h-3.5" /> SOLUCIÓN INMEDIATA CLIMAPRO:
                    </div>
                    <p className="font-sans text-slate-300 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>

                {/* BOTÓN DE ACCIÓN DIRECTA */}
                <div className="pt-2 border-t border-[#232D42]">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAction(item.problemName)}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FFA336] hover:from-[#E65D00] hover:to-[#FF6B00] text-white font-black font-heading uppercase tracking-wider text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B00]/25"
                  >
                    <span>{item.actionText}</span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
