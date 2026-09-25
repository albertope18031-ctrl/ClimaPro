import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, ShieldCheck, FileText } from 'lucide-react';

export default function TrustBar() {
  const trustPoints = [
    {
      icon: DollarSign,
      title: 'TARIFA BASE PLANA: $400 MXN',
      desc: 'Revisión y diagnóstico a domicilio. Se abona a tu reparación.',
      color: 'text-[#FF6B00]'
    },
    {
      icon: Clock,
      title: 'ARRIBO EL MISMO DÍA',
      desc: 'Tiempo promedio menor a 45 min según cuadrante en Hermosillo.',
      color: 'text-[#FFA336]'
    },
    {
      icon: ShieldCheck,
      title: 'GARANTÍA FIRMADA: 90 DÍAS',
      desc: 'Por escrito en tu nota de servicio respaldada por ClimaPro.',
      color: 'text-[#22C55E]'
    },
    {
      icon: FileText,
      title: 'FORMALIDAD Y FACTURA',
      desc: 'Emitimos factura CFDI para particulares, comercios y empresas.',
      color: 'text-[#38BDF8]'
    }
  ];

  return (
    <section id="garantias" className="relative -mt-6 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#141B28] rounded-2xl border-2 border-[#232D42] p-4 sm:p-6 shadow-2xl shadow-black/60"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#232D42]">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`flex items-start gap-3.5 ${idx !== 0 ? 'sm:pl-6 pt-3 sm:pt-0' : ''}`}
              >
                <div className={`p-2.5 rounded-xl bg-[#0B0F17] border border-[#232D42] ${item.color} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-white text-xs sm:text-sm tracking-wide uppercase">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-sans text-slate-300 leading-tight mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
