import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wind, Flame, Biohazard, Droplets, ArrowDown, CheckCircle2, Sparkles, Snowflake } from 'lucide-react';

export default function Hero({ onSelectSymptom }) {
  const quickSymptoms = [
    { label: 'Poco aire', sub: 'Flujo débil / turbina', icon: Wind, val: 'No arroja mucho aire' },
    { label: 'No enfría', sub: 'Aire tibio / gas o motor', icon: Flame, val: 'No enfría / Tira aire tibio' },
    { label: 'Mal olor', sub: 'Moho / bacterias', icon: Biohazard, val: 'Huele a humedad o mal olor' },
    { label: 'Chorrea agua', sub: 'Drenaje tapado', icon: Droplets, val: 'Chorrea o gotea agua' },
  ];

  return (
    <section className="relative hero-gradient pt-10 pb-20 overflow-hidden border-b border-[#232D42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* TEXTO HERO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141B28] text-[#FFA336] text-xs sm:text-sm font-bold border border-[#232D42] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping"></span>
              <span>Especialistas en Climatización en Hermosillo</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              ¿Tu aire acondicionado <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FFA336] to-[#FF6B00]">
                falló con el calor
              </span> de Hermosillo?
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              El calor de Sonora no perdona. Si tu equipo <strong className="text-white">no echa aire, no enfría, huele a humedad o chorrea agua</strong>, lo dejamos congelando como nuevo hoy mismo con <span className="text-[#FF6B00] font-bold">tarifa base de $400</span> y 90 días de garantía por escrito.
            </p>

            {/* BOTONES PRINCIPALES */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#diagnostico" 
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF6B00] via-[#FF6B00] to-[#FFA336] text-white font-bold text-base shadow-lg shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/40 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>🩺 Diagnosticar Falla y Cotizar</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a 
                href="#agendar" 
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#141B28] text-white font-bold text-base border-2 border-[#232D42] hover:border-[#FF6B00] hover:bg-[#1B2436] transition flex items-center justify-center gap-2 shadow-sm"
              >
                <span>⚡ Agendar Visita ($400 Base)</span>
              </a>
            </div>

            {/* 3 FACTORES DE CONFIANZA */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#232D42] text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#141B28] text-[#FF6B00] border border-[#232D42] flex items-center justify-center font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Técnicos Certificados</div>
                  <div className="text-[10px] text-slate-400">Hermosillo y Zonas</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#141B28] text-[#FFA336] border border-[#232D42] flex items-center justify-center font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">90 Días Garantía</div>
                  <div className="text-[10px] text-slate-400">Por escrito sin costo</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#141B28] text-[#22C55E] border border-[#232D42] flex items-center justify-center font-bold text-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Cero Desastres</div>
                  <div className="text-[10px] text-slate-400">Fundas colectoras</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TARJETA INTERACTIVA DE SÍNTOMAS EXPRÉS */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#141B28] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#232D42] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#FF6B00]/15 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="flex items-center justify-between pb-4 border-b border-[#232D42]">
                <div className="flex items-center gap-3">
                  {/* Micro-Acento Frío Sky Blue exclusivamente para icono de copo de nieve */}
                  <div className="w-10 h-10 rounded-xl bg-[#0B0F17] border border-[#232D42] flex items-center justify-center shadow-inner">
                    <Snowflake className="w-6 h-6 text-[#38BDF8]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#FFA336] uppercase tracking-wider">¿Qué le pasa a tu aire?</span>
                    <h3 className="font-extrabold text-white text-lg">Selector de Síntoma Rápido</h3>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30">
                  ● Turnos hoy en HMO
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <p className="text-xs text-slate-400">Toca tu falla para autocompletar tu cita en 1 clic:</p>
                
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  {quickSymptoms.map((s, idx) => {
                    const Icon = s.icon;
                    return (
                      <button 
                        key={idx}
                        onClick={() => onSelectSymptom(s.val)}
                        className="p-3.5 rounded-2xl bg-[#0B0F17] border border-[#232D42] hover:border-[#FF6B00] hover:bg-[#1B2436] text-left transition-all flex items-start gap-2.5 group shadow-sm hover:shadow"
                      >
                        <div className="p-2 rounded-xl bg-[#141B28] text-slate-300 group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <strong className="block text-white font-bold">{s.label}</strong>
                          <span className="text-slate-400 text-[10px]">{s.sub}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <a 
                    href="#agendar" 
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FFA336] hover:from-[#E65D00] hover:to-[#FF6B00] text-white font-bold text-xs uppercase tracking-wider text-center block transition shadow-lg shadow-[#FF6B00]/25"
                  >
                    Continuar al Agendador de Citas →
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#232D42] flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium">⭐️ 4.9/5 en servicios verificados</span>
                <span className="text-[#FF6B00] font-bold">Tarifa Base $400 MXN</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
