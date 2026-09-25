import React from 'react';
import { ShieldCheck, Sparkles, Clock, Gauge, Award } from 'lucide-react';

export default function TrustSection() {
  return (
    <section id="garantia" className="py-20 bg-[#0B0F17] border-t border-[#232D42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141B28] text-[#FFA336] border border-[#232D42] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-[#FF6B00]" /> Calidad de Servicio Garantizada
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            La Promesa de Excelencia ClimaPro en Hermosillo
          </h2>
          <p className="text-slate-300 text-base mt-2">
            Trabajamos con estándares profesionales para que no arriesgues tu inversión ni tengas malas experiencias con técnicos informales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-7 rounded-3xl bg-[#141B28] border border-[#232D42] hover:border-[#FF6B00] shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0B0F17] text-[#FF6B00] border border-[#232D42] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Garantía por Escrito de 90 Días</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Si la misma falla regresa dentro de los 3 meses posteriores a la intervención, un técnico certificado acude de inmediato a resolverla sin cobrarte ni un centavo.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#141B28] border border-[#232D42] hover:border-[#FF6B00] shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0B0F17] text-[#22C55E] border border-[#232D42] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Protocolo Cero Desastres</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Montamos fundas impermeables con manguera de desagüe para hidrolavado interior y cubrimos paredes y muebles. Tu casa queda tan limpia como antes de entrar.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#141B28] border border-[#232D42] hover:border-[#FF6B00] shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0B0F17] text-[#FFA336] border border-[#232D42] flex items-center justify-center">
              <Gauge className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Diagnóstico Manométrico Digital</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              No hacemos suposiciones al tanteo. Medimos con manómetros digitales presiones de alta y baja, temperatura de recalentamiento y consumo de amperaje exacto.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#141B28] border border-[#232D42] hover:border-[#FF6B00] shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0B0F17] text-[#FFA336] border border-[#232D42] flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Puntualidad Sonorense</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Respetamos tu tiempo. Te asignamos un bloque horario fijo y nuestro técnico te envía un mensaje 30 minutos antes de arribar a tu domicilio.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
