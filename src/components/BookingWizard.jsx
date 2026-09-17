import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Phone, User, CheckCircle2, MessageCircle, AlertCircle, Wrench } from 'lucide-react';
import { hermosilloAreas } from '../data/symptomsData';

export default function BookingWizard({ selectedSymptom, onSymptomChange }) {
  const [formData, setFormData] = useState({
    symptom: selectedSymptom || 'No arroja mucho aire',
    equipmentType: 'Mini-Split Residencial',
    equipmentQty: '1 equipo',
    date: '',
    timeSlot: 'Mañana (8:00 AM - 12:00 PM)',
    name: '',
    phone: '',
    addressArea: hermosilloAreas[0],
    streetAddress: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  // Sincronizar si cambia desde una tarjeta externa
  useEffect(() => {
    if (selectedSymptom) {
      setFormData(prev => ({ ...prev, symptom: selectedSymptom }));
    }
  }, [selectedSymptom]);

  // Inicializar fecha mínima a hoy
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, date: today }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = 
      `¡Hola ClimaPro Hermosillo! 👋\n` +
      `Deseo agendar una visita técnica para mi aire acondicionado con la *tarifa base de $400*:\n\n` +
      `👤 *Cliente:* ${formData.name}\n` +
      `📱 *Teléfono:* ${formData.phone}\n` +
      `📍 *Zona/Colonia:* ${formData.addressArea}\n` +
      `🏠 *Dirección:* ${formData.streetAddress || 'A confirmar por chat'}\n` +
      `⚠️ *Falla detectada:* ${formData.symptom}\n` +
      `❄️ *Tipo de Sistema:* ${formData.equipmentType}\n` +
      `🔢 *Cantidad de equipos:* ${formData.equipmentQty}\n` +
      `📅 *Fecha solicitada:* ${formData.date}\n` +
      `🕒 *Horario preferido:* ${formData.timeSlot}\n\n` +
      `¿Tienen técnico disponible para esa hora? Quedo atento a su confirmación.`;

    const encoded = encodeURIComponent(message);
    const link = `https://wa.me/526624205643?text=${encoded}`;
    
    setWhatsappLink(link);
    setSubmitted(true);
  };

  return (
    <section id="agendar" className="py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          
          {/* HEADER DEL FORMULARIO */}
          <div className="bg-gradient-to-r from-slate-950 via-brand-950 to-brand-900 p-6 sm:p-8 text-white">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-cyan-300 font-bold text-xs tracking-wider uppercase flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Agenda en Línea 24/7 en Hermosillo
                </span>
                <h2 className="text-2xl sm:text-3xl font-black mt-1">Programa tu Visita Técnica ClimaPro</h2>
                <p className="text-sm text-slate-300 mt-1">
                  Atención en Hermosillo y alrededores • Tarifa base de $400 para cualquier sistema
                </p>
              </div>

              <div className="hidden sm:block text-right bg-white/10 px-4 py-2 rounded-xl border border-white/10">
                <div className="text-xs text-cyan-300 font-semibold">Tarifa Base</div>
                <div className="text-2xl font-black text-white">$400 <span className="text-xs font-normal">MXN</span></div>
              </div>
            </div>

            {/* PASOS */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-700/60 text-xs">
              <div className="flex items-center gap-2 font-bold text-cyan-300">
                <span className="w-6 h-6 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold">1</span>
                <span>Falla y Equipo</span>
              </div>
              <div className="h-0.5 flex-1 bg-slate-700 mx-2 sm:mx-3"></div>
              <div className="flex items-center gap-2 font-bold text-slate-300">
                <span className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center">2</span>
                <span>Zona y Fecha</span>
              </div>
              <div className="h-0.5 flex-1 bg-slate-700 mx-2 sm:mx-3"></div>
              <div className="flex items-center gap-2 font-bold text-slate-300">
                <span className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center">3</span>
                <span>Confirmación</span>
              </div>
            </div>
          </div>

          {/* FORMULARIO */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              
              {/* CAMPO 1: SÍNTOMA */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-brand-600" />
                  1. Selecciona la falla principal de tu aire acondicionado:
                </label>
                <select
                  name="symptom"
                  value={formData.symptom}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:outline-none font-semibold text-slate-800 text-sm bg-slate-50 transition"
                >
                  <option value="No arroja mucho aire">💨 Mi aire no arroja mucho aire (Flujo débil / turbina sucia)</option>
                  <option value="No enfría / Tira aire tibio">🔥 Enciende pero no enfría (Aire tibio / falta gas o falla de compresor)</option>
                  <option value="Huele a humedad o mal olor">🤢 Huele a humedad, trapo o moho (Requiere sanitización quirúrgica)</option>
                  <option value="Chorrea o gotea agua">💧 Chorrea o gotea agua hacia la pared/piso (Drenaje obstruido)</option>
                  <option value="Mantenimiento preventivo general">✨ Mantenimiento preventivo general rutinario</option>
                  <option value="Instalación o reubicación">🔧 Instalación nueva / Desinstalación de equipo</option>
                </select>
              </div>

              {/* CAMPO 2: TIPO DE EQUIPO Y CANTIDAD */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">Tipo de Sistema:</label>
                  <select
                    name="equipmentType"
                    value={formData.equipmentType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:outline-none text-sm font-medium bg-slate-50"
                  >
                    <option value="Mini-Split Inverter">Mini-Split Inverter (Ahorrador)</option>
                    <option value="Mini-Split Convencional">Mini-Split Tradicional / On-Off</option>
                    <option value="Sistema Central / Dividido">Sistema Central / Paquete Residencial</option>
                    <option value="Piso-Techo / Cassette">Piso-Techo o Cassette Comercial</option>
                    <option value="Aire de Ventana">Aire de Ventana</option>
                    <option value="Refrigeración Comercial">Cámara Fría / Vitrina Comercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">Cantidad de equipos:</label>
                  <select
                    name="equipmentQty"
                    value={formData.equipmentQty}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:outline-none text-sm font-medium bg-slate-50"
                  >
                    <option value="1 equipo">1 equipo</option>
                    <option value="2 equipos">2 equipos</option>
                    <option value="3 equipos">3 equipos</option>
                    <option value="4 a 6 equipos">4 a 6 equipos (Casa completa / Oficinas)</option>
                    <option value="Más de 6 equipos">Más de 6 equipos (Comercios / Naves)</option>
                  </select>
                </div>
              </div>

              {/* CAMPO 3: FECHA Y HORA */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-brand-600" /> Fecha deseada de visita:
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:outline-none text-sm font-medium bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-brand-600" /> Franja horaria preferida:
                  </label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:outline-none text-sm font-medium bg-slate-50"
                  >
                    <option value="Mañana (8:00 AM - 12:00 PM)">Mañana (8:00 AM - 12:00 PM)</option>
                    <option value="Mediodía (12:00 PM - 3:00 PM)">Mediodía (12:00 PM - 3:00 PM)</option>
                    <option value="Tarde (3:00 PM - 7:00 PM)">Tarde (3:00 PM - 7:00 PM)</option>
                    <option value="Urgente / Lo antes posible">🚨 Urgencia (Atención prioritaria hoy)</option>
                  </select>
                </div>
              </div>

              {/* CAMPO 4: CONTACTO */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-brand-600" /> Tu Nombre y Apellido:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Roberto Almada"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:outline-none text-sm font-medium bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-brand-600" /> Teléfono WhatsApp:
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ej. 662 123 4567"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:outline-none text-sm font-medium bg-slate-50"
                  />
                </div>
              </div>

              {/* CAMPO 5: UBICACIÓN HERMOSILLO */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-600" /> Zona o Sector en Hermosillo:
                  </label>
                  <select
                    name="addressArea"
                    value={formData.addressArea}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:outline-none text-sm font-medium bg-slate-50"
                  >
                    {hermosilloAreas.map((area, idx) => (
                      <option key={idx} value={area}>{area}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">Calle y Número Exterior:</label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    placeholder="Ej. Calle Olivares #314 e/ Juárez"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:outline-none text-sm font-medium bg-slate-50"
                  />
                </div>
              </div>

              {/* BOTÓN SUBMIT */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 hover:from-brand-700 hover:to-cyan-600 text-white font-extrabold text-base shadow-lg shadow-brand-500/30 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Confirmar Cita y Enviar por WhatsApp (Tarifa $400)</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 pt-2 text-center">
                <span>🛡️ Garantía de 90 días por escrito</span>
                <span>💳 Sin adelantos en línea</span>
                <span>⚡ Respuesta rápida de técnico en turno</span>
              </div>

            </form>
          ) : (
            /* MODAL / PANTALLA DE CONFIRMACIÓN CON BOTÓN DE WHATSAPP */
            <div className="p-8 sm:p-12 bg-slate-950 text-white text-center space-y-6">
              <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <div className="space-y-2">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">¡Solicitud Generada con Éxito!</span>
                <h3 className="text-2xl sm:text-3xl font-black">Cita Lista para Confirmar en Hermosillo</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Tu solicitud ha sido preparada con la <strong>tarifa base de $400 MXN</strong>. Da clic en el botón para enviar los datos por WhatsApp a nuestro técnico en guardia.
                </p>
              </div>

              {/* RESUMEN */}
              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-xs text-left max-w-lg mx-auto space-y-2 text-slate-300">
                <div className="text-cyan-300 font-bold border-b border-slate-800 pb-1">Resumen del Servicio:</div>
                <p><strong>👤 Cliente:</strong> {formData.name}</p>
                <p><strong>📱 WhatsApp:</strong> {formData.phone}</p>
                <p><strong>📍 Ubicación:</strong> {formData.streetAddress}, {formData.addressArea}</p>
                <p><strong>⚠️ Falla a reparar:</strong> <span className="text-white font-bold">{formData.symptom}</span></p>
                <p><strong>❄️ Equipo:</strong> {formData.equipmentType} ({formData.equipmentQty})</p>
                <p><strong>📅 Fecha y Horario:</strong> {formData.date} - {formData.timeSlot}</p>
                <p><strong>💰 Tarifa Base:</strong> <span className="text-emerald-400 font-bold">$400 MXN</span></p>
              </div>

              {/* BOTÓN A WHATSAPP */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-base shadow-xl shadow-emerald-500/30 transition transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <span>Abrir WhatsApp y Enviar Cita</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-400 hover:text-white underline py-2"
                >
                  Modificar datos del formulario
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
