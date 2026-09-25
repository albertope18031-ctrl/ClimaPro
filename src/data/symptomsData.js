export const symptomsData = [
  {
    id: 'poco-aire',
    title: 'No arroja mucho aire',
    subtitle: 'Flujo de ventilación débil o forzado',
    tag: 'Falla de Caudal',
    tagColor: 'bg-[#141B28] text-[#FFA336] border-[#232D42]',
    iconName: 'Wind',
    description: 'Pones la velocidad al máximo pero apenas sale una brisa suave. El equipo se sobrecalienta y el consumo de luz en Hermosillo se dispara.',
    causes: [
      'Turbina cilíndrica tapada por gruesa capa de polvo y grasa',
      'Filtros de malla asfixiados de tierra del desierto sonorense',
      'Capacitor o bujes de motor desgastados por uso constante'
    ],
    solution: 'Mantenimiento Químico & Desincrustado de Turbina',
    urgency: 'Media - Consume hasta 35% más energía',
    actionValue: 'No arroja mucho aire (Flujo débil)'
  },
  {
    id: 'no-enfria',
    title: 'No enfría / Tira aire tibio',
    subtitle: 'El ventilador gira pero el cuarto sigue ardiendo',
    tag: 'Falla Frigorífica',
    tagColor: 'bg-[#141B28] text-[#FF6B00] border-[#232D42]',
    iconName: 'Flame',
    description: 'Enciendes el minisplit en 16°C pero el aire sale a temperatura ambiente. Con los 45°C de Hermosillo, estar sin frío es una emergencia.',
    causes: [
      'Microfuga o pérdida de gas refrigerante ecológico (R410A / R32)',
      'Capacitor de arranque del compresor quemado por variación de voltaje',
      'Condensador exterior tapado en tierra, impidiendo disipar calor'
    ],
    solution: 'Diagnóstico Manométrico + Detección de Fuga y Carga',
    urgency: 'Urgente - Riesgo de quemar el compresor',
    actionValue: 'No enfría (Tira aire tibio)'
  },
  {
    id: 'mal-olor',
    title: 'Huele a humedad o vinagre',
    subtitle: 'Olor a trapo mojado o drenaje al encender',
    tag: 'Salud & Aire Limpio',
    tagColor: 'bg-[#141B28] text-[#FFA336] border-[#232D42]',
    iconName: 'Biohazard',
    description: 'Al encenderlo emana un olor pesado y desagradable. Detona alergias respiratorias, congestión nasal, estornudos y asma en tu familia.',
    causes: [
      'Colonias de moho, hongos y esporas vivas en el serpentín de aluminio',
      'Bandeja de condensación con agua estancada y lama bacteriana',
      'Falta de desinfección con bactericidas profesionales para HVAC'
    ],
    solution: 'Sanitización Profunda con Germicida Grado Quirúrgico',
    urgency: 'Salud Respiratoria - Aire contaminado en recámara',
    actionValue: 'Huele a humedad o mal olor'
  },
  {
    id: 'chorrea-agua',
    title: 'Chorrea o gotea agua',
    subtitle: 'Agua escurriendo por la pared o sobre muebles',
    tag: 'Falla de Drenaje',
    tagColor: 'bg-[#141B28] text-[#38BDF8] border-[#232D42]',
    iconName: 'Droplets',
    description: 'Empieza a gotear agua hacia el interior de la habitación, empapando camas, paredes, pisos o televisores. Peligro de cortocircuito.',
    causes: [
      'Manguera de drenaje obstruida por "gelatina" biológica y sarro',
      'Evaporador congelado por suciedad que al apagarse se desborda',
      'Desnivel en la placa de fijación o charola recolectora rota'
    ],
    solution: 'Desazolve a Presión + Nivelación Técnica de Drenaje',
    urgency: 'Inmediata - Riesgo de daños a muros y circuitos',
    actionValue: 'Chorrea o gotea agua hacia adentro'
  }
];

export const hermosilloAreas = [
  'Hermosillo Norte (Ley 57, San Benito, Balderrama, López Portillo)',
  'Hermosillo Poniente (Villa de Seris, Bachoco, Montebello, San Pedro)',
  'Hermosillo Sur (Piedra Bola, Las Lomas, Palo Verde, Renacimiento)',
  'Hermosillo Oriente (El Mariachi, 5 de Mayo, Casa Blanca)',
  'San Pedro El Saucito y Carretera a Ures',
  'Bahía de Kino y Poblado Miguel Alemán (Cita previa programada)'
];
