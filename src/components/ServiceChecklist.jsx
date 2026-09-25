import React from 'react';
import { CheckCircle2, ShieldAlert, Award, Sparkles } from 'lucide-react';

export default function ServiceChecklist() {
  const points = [
    { num: '01', title: 'Manómetros Digitales Calibrados', desc: 'Medición precisa de presiones de alta y baja en refrigerantes R410A / R32.' },
    { num: '02', title: 'Prueba de Amperaje del Compresor', desc: 'Comprobación de que el motor no trabaje forzado ni consuma watts de más.' },
    { num: '03', title: 'Capacitores de Arranque', desc: 'Inspección de microfaradios para evitar que el equipo se apague en horas pico.' },
    { num: '04', title: 'Desazolve a Alta Presión de Drenaje', desc: 'Purga de sarro y biofilm para erradicar el 100% de goteos hacia la pared.' },
    { num: '05', title: 'Sanitización Antibacterial de Serpentín', desc: 'Eliminación con germicida de colonias de moho que causan olor a trapo o vinagre.' },
    { num: '06', title: 'Desmonte y Lavado de Turbina', desc: 'Hidrolavado de las aspas cilíndricas para restaurar el flujo de viento como de fábrica.' },
    { num: '07', title: 'Detector Electrónico de Fugas', desc: 'Escaneo con sensor en tuercas flare para garantizar que no pierda gas con el tiempo.' },
    { num: '08', title: 'Lavado de Serpentín Condensador Exterior', desc: 'Retiro de tierra sonorense que asfixia la unidad exterior expuesta al sol.' },
    { num: '09', title: 'Revisión y Ajuste de Terminales', desc: 'Apriete de conexiones eléctricas contra falsos contactos o cables sulfatados.' },
    { num: '10', title: 'Prueba de Salto Térmico Final', desc: 'Medición con termómetro infrarrojo de aire inyectado vs retornado antes de retirarnos.' }
  ];

  return (
    <section id="checklist" className="py-20 bg-[#0B0F17] border-t border-[#232D42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141B28] text-[#FFA336] text-xs font-bold font-tech uppercase tracking-widest mb-3 border border-[#232D42]">
            <Award className="w-3.5 h-3.5 text-[#FF6B00]" /> RIGOR TÉCNICO INNEGOCIABLE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading uppercase text-white tracking-tight">
            Anatomía de Nuestro Servicio (Checklist de 10 Puntos)
          </h2>
          <p className="text-slate-300 font-sans text-base sm:text-lg mt-2">
            Esto es exactamente lo que revisa y ejecuta nuestro especialista en cada visita técnica por tu tarifa base de $400.
          </p>
        </div>

        {/* GRID DE 10 PUNTOS */}
        <div className="grid md:grid-cols-2 gap-4">
          {points.map((pt) => (
            <div 
              key={pt.num}
              className="p-4 sm:p-5 rounded-2xl bg-[#141B28] border border-[#232D42] hover:border-[#FF6B00] transition flex items-start gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0B0F17] border border-[#232D42] group-hover:border-[#FF6B00] text-[#FF6B00] flex items-center justify-center font-tech font-black text-sm shrink-0">
                {pt.num}
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-black text-white text-sm sm:text-base tracking-wide uppercase">
                  {pt.title}
                </h4>
                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PROTOCOLO CERO DESASTRES */}
        <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-[#141B28] via-[#1B2436] to-[#141B28] border-2 border-[#232D42] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-black uppercase text-white text-base">
                Protocolo Cero Desastres Incluido
              </h4>
              <p className="text-xs font-sans text-slate-300">
                Lonas protectoras de suelo y fundas colectoras de agua selladas. Dejamos tu recámara o sala tan limpia como al llegar.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/526624205643?text=Hola%20ClimaPro,%20deseo%20agendar%20el%20servicio%20técnico%20de%2010%20puntos%20con%20tarifa%20de%20$400"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FFA336] text-white font-heading font-black uppercase tracking-wider text-xs whitespace-nowrap shadow-lg shadow-[#FF6B00]/25 hover:from-[#E65D00] hover:to-[#FF6B00] transition"
          >
            Agendar Servicio de 10 Puntos ($400) →
          </a>
        </div>

      </div>
    </section>
  );
}
