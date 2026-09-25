import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, MapPin } from 'lucide-react';

const testimonials = [
  {
    name: 'Ing. Fernando Valenzuela',
    zone: 'Col. Montebello, Hermosillo',
    problem: 'Falla: Chorreaba agua sobre la cama en plena ola de calor (46°C)',
    review: 'El minisplit empezó a tirar un chorro de agua en la madrugada. Los contacté por WhatsApp temprano, vinieron a las 2 horas, destaparon el drenaje con máquina a presión y con sus fundas no mojaron ni una sola pared. Los $400 de revisión fueron abonados al servicio.',
    rating: 5,
    equipment: 'Mini-Split 2 Toneladas Inverter'
  },
  {
    name: 'Dra. Marcela Quiroga',
    zone: 'Col. Balderrama, Hermosillo',
    problem: 'Falla: Aire con olor a trapo húmedo y flujo muy débil',
    review: 'En el consultorio el aire olía horrible y apenas soplaba. Con el hidrolavado químico le sacaron una plasta de lodo y sarro a la turbina. Quedó enfriando helado de inmediato y el olor desapareció por completo.',
    rating: 5,
    equipment: '2 Mini-Splits Comerciales'
  },
  {
    name: 'Carlos E. Noriega',
    zone: 'Villa de Seris, Hermosillo',
    problem: 'Falla: Compresor no arrancaba, tiraba aire tibio',
    review: 'Llegaron puntuales, sacaron su manómetro digital y me mostraron que el capacitor estaba reventado por el calorón. Me lo cambiaron ahí mismo en 20 minutos con refacción original y garantía por escrito de 90 días.',
    rating: 5,
    equipment: 'Mini-Split 1 Tonelada Residencial'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-[#0B0F17] border-t border-[#232D42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141B28] text-[#22C55E] border border-[#232D42] text-xs font-bold font-tech uppercase tracking-widest mb-3">
            ★ RESEÑAS VERIFICADAS EN HERMOSILLO
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading uppercase text-white tracking-tight">
            Prueba Social Local por Colonia
          </h2>
          <p className="text-slate-300 font-sans text-base sm:text-lg mt-2">
            Vecinos y empresas de Hermosillo que recuperaron el frío en sus espacios con ClimaPro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#141B28] p-7 rounded-3xl border-2 border-[#232D42] flex flex-col justify-between space-y-4 hover:border-[#FF6B00] transition shadow-sm font-sans"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#FFA336]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-tech text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded border border-[#22C55E]/30">
                    SERVICIO RESUELTO
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#0B0F17] border border-[#232D42] text-[11px] font-heading font-bold text-[#FFA336]">
                  {t.problem}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#232D42]">
                <div className="font-bold font-heading uppercase text-sm text-white tracking-wide">{t.name}</div>
                <div className="text-[11px] font-tech text-[#FF6B00] font-semibold flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" /> {t.zone}
                </div>
                <div className="text-[10px] font-tech text-slate-400 flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3 h-3 text-[#22C55E]" /> {t.equipment}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
