import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function CoverageRadar() {
  const radarZones = [
    {
      quadrant: 'HERMOSILLO NORTE',
      neighborhoods: 'Ley 57, San Benito, Balderrama, López Portillo, Olivares, Bugambilias',
      status: '2 UNIDADES EN RUTA',
      statusColor: 'text-[#22C55E] bg-[#22C55E]/15 border-[#22C55E]/30',
      eta: '< 30 min'
    },
    {
      quadrant: 'HERMOSILLO PONIENTE',
      neighborhoods: 'Villa de Seris, Bachoco, Montebello, San Pedro Residencial, Los Lagos',
      status: 'DISPONIBILIDAD INMEDIATA',
      statusColor: 'text-[#22C55E] bg-[#22C55E]/15 border-[#22C55E]/30',
      eta: '< 35 min'
    },
    {
      quadrant: 'HERMOSILLO SUR',
      neighborhoods: 'Piedra Bola, Las Lomas, Palo Verde, Renacimiento, Altares, Cuauhtémoc',
      status: 'UNIDAD EN CUADRANTE',
      statusColor: 'text-[#22C55E] bg-[#22C55E]/15 border-[#22C55E]/30',
      eta: '< 40 min'
    },
    {
      quadrant: 'HERMOSILLO ORIENTE',
      neighborhoods: 'El Mariachi, 5 de Mayo, Casa Blanca, Loma Linda, Modelo, Constitución',
      status: 'TURNOS HOY DISPONIBLES',
      statusColor: 'text-[#FFA336] bg-[#FFA336]/15 border-[#FFA336]/30',
      eta: 'Mismo Día'
    },
    {
      quadrant: 'SAN PEDRO EL SAUCITO',
      neighborhoods: 'Carretera a Ures, Ejido La Victoria, El Tazajal, Zamora',
      status: 'COBERTURA ACTIVA',
      statusColor: 'text-[#22C55E] bg-[#22C55E]/15 border-[#22C55E]/30',
      eta: 'Turno Hoy'
    },
    {
      quadrant: 'BAHÍA DE KINO & MIGUEL ALEMÁN',
      neighborhoods: 'Kino Viejo, Kino Nuevo, Poblado Miguel Alemán y campos agrícolas',
      status: 'CITA PROGRAMADA',
      statusColor: 'text-[#38BDF8] bg-[#38BDF8]/15 border-[#38BDF8]/30',
      eta: 'Previa Cita'
    }
  ];

  return (
    <section id="cobertura" className="py-20 bg-[#0B0F17] border-t border-[#232D42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141B28] text-[#FFA336] text-xs font-bold font-tech uppercase tracking-widest mb-3 border border-[#232D42] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]"></span>
            </span>
            <Navigation className="w-3.5 h-3.5 text-[#FF6B00]" /> MONITOREO DE UNIDADES TÉCNICAS EN TIEMPO REAL
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading uppercase text-white tracking-tight">
            Radar de Cobertura en Hermosillo
          </h2>
          <p className="text-slate-300 font-sans text-base sm:text-lg mt-2">
            Disponibilidad en tiempo real de técnicos en ruta para acudir con tarifa base de $400 a tu domicilio.
          </p>
        </motion.div>

        {/* GRID DE ZONAS CON ESTADO ACTIVO */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {radarZones.map((zone, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#141B28] rounded-3xl p-6 border-2 border-[#232D42] hover:border-[#FF6B00] transition-all card-hover-glow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-bold font-tech uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${zone.statusColor} flex items-center gap-1.5`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                    <span>{zone.status}</span>
                  </span>
                  <span className="font-tech text-xs text-white font-bold bg-[#0B0F17] px-2 py-0.5 rounded border border-[#232D42]">
                    ETA: {zone.eta}
                  </span>
                </div>

                <h3 className="font-heading font-black text-lg text-white uppercase tracking-wide">
                  {zone.quadrant}
                </h3>

                <p className="text-xs font-sans text-slate-300 leading-relaxed">
                  {zone.neighborhoods}
                </p>
              </div>

              <div className="pt-3 border-t border-[#232D42]">
                <a
                  href={`https://wa.me/526624205643?text=Hola%20ClimaPro,%20quisiera%20solicitar%20técnico%20en%20la%20zona%20${encodeURIComponent(zone.quadrant)}%20con%20tarifa%20de%20$400`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#0B0F17] hover:bg-[#FF6B00] hover:text-white text-slate-300 font-heading font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-1.5 border border-[#232D42] hover:border-[#FF6B00]"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Despachar a esta zona ➔</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
