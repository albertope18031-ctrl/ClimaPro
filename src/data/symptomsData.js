export const symptomsData = [
  {
    id: 'poco-aire',
    title: 'No arroja mucho aire',
    subtitle: 'Flujo de ventilación débil o forzado',
    tag: 'Falla de Caudal',
    tagColor: 'bg-blue-100 text-blue-800 border-blue-200',
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
    tagColor: 'bg-rose-100 text-rose-800 border-rose-200',
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
    tagColor: 'bg-amber-100 text-amber-900 border-amber-200',
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
    tagColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
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

export const serviceBenefits = [
  {
    icon: 'ShieldCheck',
    title: 'Garantía por Escrito de 90 Días',
    desc: 'Si la misma falla regresa dentro de los 3 meses posteriores al servicio, acudimos a resolverla sin costo alguno.'
  },
  {
    icon: 'Sparkles',
    title: 'Protocolo Cero Desastres',
    desc: 'Utilizamos fundas impermeables colectoras de agua y lonas para tus muebles. Tu casa queda impecable.'
  },
  {
    icon: 'Clock',
    title: 'Llegada Puntual en Rango Confirmado',
    desc: 'Te avisamos 30 minutos antes de arribar a tu domicilio para que no pierdas tu día esperando al técnico.'
  },
  {
    icon: 'BadgePercent',
    title: 'Tarifa Base Transparente de $400',
    desc: 'Revisión técnica y servicio base claro para cualquier tipo de sistema, sea 1 o varios equipos.'
  }
];
