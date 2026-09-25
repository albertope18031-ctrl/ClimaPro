import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Ing. Fernando Valenzuela',
    zone: 'Col. Montebello, Hermosillo',
    review: 'Mi minisplit empezó a chorrear agua en plena ola de calor de 46 grados sobre mi recámara. Los contacté por WhatsApp, vinieron el mismo día, destaparon el drenaje y no ensuciaron nada con sus fundas. Los recomiendo 100%.',
    rating: 5,
    equipment: 'Mini-Split 2 Toneladas Inverter'
  },
  {
    name: 'Dra. Marcela Quiroga',
    zone: 'Col. Balderrama, Hermosillo',
    review: 'El aire del consultorio olía horrible a humedad y casi no echaba aire. Con el hidrolavado químico le sacaron una cantidad increíble de sarro y suciedad. Quedó enfriando congelado y sin ningún olor.',
    rating: 5,
    equipment: '2 Mini-Splits Comerciales'
  },
  {
    name: 'Carlos E. Noriega',
    zone: 'Villa de Seris, Hermosillo',
    review: 'Excelente trato y la tarifa base de $400 pesos es real, sin sorpresas ni querer inventarte fallas que no son. Me midieron la presión de gas y le cambiaron el capacitor rápido.',
    rating: 5,
    equipment: 'Mini-Split 1 Tonelada'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-[#0B0F17] border-t border-[#232D42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141B28] text-[#22C55E] border border-[#232D42] text-xs font-bold uppercase tracking-wider mb-3">
            ⭐️ Calificación Promedio 4.9 / 5
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Opiniones de Familias y Negocios en Hermosillo
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Clientes reales que recuperaron la frescura y confort de sus hogares con ClimaPro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#141B28] p-8 rounded-3xl border border-[#232D42] flex flex-col justify-between space-y-4 hover:border-[#FF6B00] transition shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#FFA336]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#232D42]">
                <div className="font-bold text-sm text-white">{t.name}</div>
                <div className="text-[11px] text-[#FFA336] font-semibold">{t.zone}</div>
                <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3 h-3 text-[#22C55E]" /> {t.equipment}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
