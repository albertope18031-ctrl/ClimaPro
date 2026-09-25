import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Zap, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { hermosilloAreas } from '../data/symptomsData';

export default function HeroSplit({ selectedProblem, onProblemChange }) {
  const problemsList = [
    { id: 'no-enfria', label: '🔥 No enfría / Tira aire tibio', desc: 'Falta gas o compresor' },
    { id: 'tira-agua', label: '💧 Chorrea / Gotea agua adentro', desc: 'Drenaje obstruido' },
    { id: 'poco-aire', label: '💨 No arroja mucho aire', desc: 'Turbina tapada de sarro' },
    { id: 'mal-olor',  label: '🤢 Huele a humedad o vinagre', desc: 'Moho en evaporador' },
  ];

  const [currentProblem, setCurrentProblem] = useState(selectedProblem || problemsList[0].label);
  const [selectedColonia, setSelectedColonia] = useState(hermosilloAreas[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [customerName, setCustomerName] = useState('');

  // Sincronizar si cambia desde afuera
  React.useEffect(() => {
    if (selectedProblem) {
      setCurrentProblem(selectedProblem);
    }
  }, [selectedProblem]);

  const handleDispatch = (e) => {
    e.preventDefault();

    const text = 
      `¡Hola ClimaPro Hermosillo! ⚡\n` +
      `Solicito el despacho urgente de un técnico con la *tarifa base de $400*:\n\n` +
      `👤 *Cliente:* ${customerName || 'Por confirmar'}\n` +
      `📱 *Teléfono:* ${phoneNumber || '662...'}\n` +
      `📍 *Colonia/Zona:* ${selectedColonia}\n` +
      `⚠️ *Falla del aire:* ${currentProblem}\n\n` +
      `¿Podrían confirmarme la unidad técnica más cercana? Gracias.`;

    const url = `https://wa.me/526624205643?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative hero-gradient pt-8 pb-16 overflow-hidden border-b border-[#232D42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* LADO IZQUIERDO: PROMESA DE FRÍO + GARANTÍA */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Badge de calor sonorense */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141B28] text-[#FFA336] text-xs font-bold font-tech border border-[#232D42] shadow-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping"></span>
              <span>RESPUESTA DE EMERGENCIA (+45°C) EN HERMOSILLO</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight text-white leading-[1.03] uppercase">
              Tu aire enfriando <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FFA336] to-[#FF6B00]">
                hoy mismo
              </span> en Hermosillo
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-sans leading-relaxed">
              El calor de Sonora no da tregua. Si tu minisplit no enfría, tira agua o huele mal, te despachamos un técnico certificado con equipo digital para dejarlo helado hoy mismo con <strong className="text-white font-tech font-bold">tarifa base de $400 MXN</strong> (se abona a tu reparación).
            </p>

            {/* 3 Promesas de Alto Valor */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-left">
              <div className="p-3.5 rounded-2xl bg-[#141B28] border border-[#232D42] space-y-1">
                <div className="flex items-center gap-1.5 text-[#FF6B00]">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-tech font-bold uppercase">&lt; 45 MIN</span>
                </div>
                <div className="text-[11px] font-sans text-slate-300">Arribo en tu colonia hoy</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#141B28] border border-[#232D42] space-y-1">
                <div className="flex items-center gap-1.5 text-[#FFA336]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-tech font-bold uppercase">90 DÍAS</span>
                </div>
                <div className="text-[11px] font-sans text-slate-300">Garantía por escrito</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#141B28] border border-[#232D42] space-y-1">
                <div className="flex items-center gap-1.5 text-[#38BDF8]">
                  <Snowflake className="w-4 h-4" />
                  <span className="text-xs font-tech font-bold uppercase text-[#38BDF8]">FRÍO POLAR</span>
                </div>
                <div className="text-[11px] font-sans text-slate-300">Diagnóstico manométrico</div>
              </div>
            </div>

            {/* Indicador de Certificación */}
            <div className="flex items-center gap-2 pt-2 text-xs font-sans text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              <span>Protocolo Cero Desastres: Usamos fundas colectoras impermeables para no ensuciar tu recámara.</span>
            </div>
          </motion.div>

          {/* LADO DERECHO: CONSOLA INTERACTIVA DE SOLICITUD EXPRESS */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#141B28] rounded-3xl p-6 sm:p-7 shadow-2xl border-2 border-[#232D42] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#FF6B00]/15 to-transparent rounded-bl-full pointer-events-none"></div>

              {/* Encabezado de la consola */}
              <div className="flex items-center justify-between pb-4 border-b border-[#232D42]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B00] text-white flex items-center justify-center font-bold">
                    <Zap className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black uppercase text-white text-base tracking-wide">
                      Consola de Solicitud Express
                    </h3>
                    <p className="text-[11px] font-sans text-slate-400">
                      Pide tu técnico en 10 segundos
                    </p>
                  </div>
                </div>
                <span className="font-tech text-xs font-bold px-2 py-0.5 rounded bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30">
                  ● EN LÍNEA
                </span>
              </div>

              {/* Formulario Express */}
              <form onSubmit={handleDispatch} className="mt-4 space-y-3.5 font-sans">
                
                {/* Paso 1: Falla */}
                <div>
                  <label className="block text-xs font-bold font-heading uppercase text-slate-300 mb-1.5 tracking-wide">
                    1. ¿Qué falla presenta tu equipo?
                  </label>
                  <div className="grid grid-cols-1 gap-1.5">
                    {problemsList.map((p) => {
                      const isSelected = currentProblem === p.label;
                      return (
                        <button
                          type="button"
                          key={p.id}
                          onClick={() => {
                            setCurrentProblem(p.label);
                            if (onProblemChange) onProblemChange(p.label);
                          }}
                          className={`w-full p-2.5 rounded-xl border text-left text-xs transition flex items-center justify-between ${
                            isSelected 
                              ? 'bg-[#FF6B00]/15 border-[#FF6B00] text-white font-bold' 
                              : 'bg-[#0B0F17] border-[#232D42] text-slate-300 hover:border-slate-500'
                          }`}
                        >
                          <span>{p.label}</span>
                          <span className="text-[10px] font-tech text-[#FFA336]">{p.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Paso 2: Colonia */}
                <div>
                  <label className="block text-xs font-bold font-heading uppercase text-slate-300 mb-1 tracking-wide">
                    2. Elige tu colonia o zona en Hermosillo:
                  </label>
                  <select
                    value={selectedColonia}
                    onChange={(e) => setSelectedColonia(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#232D42] bg-[#0F1622] text-white text-xs font-sans focus:border-[#FF6B00] focus:outline-none"
                  >
                    {hermosilloAreas.map((area, idx) => (
                      <option key={idx} value={area}>{area}</option>
                    ))}
                  </select>
                </div>

                {/* Paso 3: Contacto rápido */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold font-heading uppercase text-slate-300 mb-1 tracking-wide">
                      Tu Nombre:
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Carlos"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-[#232D42] bg-[#0F1622] text-white text-xs placeholder-slate-500 focus:border-[#FF6B00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold font-heading uppercase text-slate-300 mb-1 tracking-wide">
                      WhatsApp:
                    </label>
                    <input
                      type="tel"
                      placeholder="662..."
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-[#232D42] bg-[#0F1622] text-white text-xs font-tech placeholder-slate-500 focus:border-[#FF6B00] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Botón CTA Express */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-[#FF6B00] via-[#FF6B00] to-[#FFA336] hover:from-[#E65D00] hover:to-[#FF6B00] text-white font-black font-heading uppercase text-sm tracking-wider shadow-xl shadow-[#FF6B00]/30 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4 fill-current" />
                    <span>Despachar Técnico por WhatsApp</span>
                    <span className="font-tech text-xs bg-black/20 px-2 py-0.5 rounded">$400</span>
                  </button>
                </div>

                <div className="text-[11px] font-sans text-slate-400 text-center leading-tight pt-1">
                  💰 Tarifa fija de $400 MXN para cualquier sistema y cantidad de equipos. Se abona al importe final de reparación.
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
