import React from 'react';
import { ShieldCheck, Sparkles, Clock, Gauge, Award, CheckCircle } from 'lucide-react';
import { serviceBenefits } from '../data/symptomsData';

export default function TrustSection() {
  return (
    <section id="garantia" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4" /> Calidad de Servicio Garantizada
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950">
            La Promesa de Excelencia ClimaPro en Hermosillo
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Trabajamos con estándares profesionales para que no arriesgues tu inversión ni tengas malas experiencias con técnicos informales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Garantía por Escrito de 90 Días</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Si la misma falla regresa dentro de los 3 meses posteriores a la intervención, un técnico certificado acude de inmediato a resolverla sin cobrarte ni un centavo.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Protocolo Cero Desastres</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Montamos fundas impermeables con manguera de desagüe para hidrolavado interior y cubrimos paredes y muebles. Tu casa queda tan limpia como antes de entrar.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
              <Gauge className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Diagnóstico Manométrico Digital</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No hacemos suposiciones al tanteo. Medimos con manómetros digitales presiones de alta y baja, temperatura de recalentamiento y consumo de amperaje exacto.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Puntualidad Sonorense</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Respetamos tu tiempo. Te asignamos un bloque horario fijo y nuestro técnico te envía un mensaje 30 minutos antes de arribar a tu domicilio.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
