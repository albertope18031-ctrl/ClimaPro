import React from 'react';
import { motion } from 'framer-motion';

export function ClimaProLogo({ className = "h-10 w-auto" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Escudo / Turbina Isotipo */}
      <div className="h-full aspect-square shrink-0 relative flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-full aspect-square transition-transform group-hover:scale-105 duration-300"
        >
          {/* Escudo Exterior Titanio */}
          <polygon 
            points="50,6 88,24 88,62 50,94 12,62 12,24" 
            stroke="#334155" 
            strokeWidth="5" 
            fill="#0B0F17" 
          />
          {/* Aletas de Turbina Naranja Industrial */}
          <motion.g 
            stroke="#FF6B00" 
            strokeWidth="5" 
            strokeLinecap="round"
            className="origin-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            <line x1="50" y1="26" x2="50" y2="40" />
            <line x1="67" y1="33" x2="57" y2="43" />
            <line x1="74" y1="50" x2="60" y2="50" />
            <line x1="67" y1="67" x2="57" y2="57" />
            <line x1="50" y1="74" x2="50" y2="60" />
            <line x1="33" y1="67" x2="43" y2="57" />
            <line x1="26" y1="50" x2="40" y2="50" />
            <line x1="33" y1="33" x2="43" y2="43" />
          </motion.g>
          {/* Núcleo Frío Criogénico */}
          <circle cx="50" cy="50" r="10" fill="#FF6B00" />
          <circle cx="50" cy="50" r="5" fill="#38BDF8" />
        </svg>
      </div>

      {/* Logotipo Tipográfico */}
      <div className="flex flex-col text-left">
        <span className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-none">
          CLIMA<span className="text-[#FF6B00]">PRO</span>
        </span>
        <span className="text-[8px] sm:text-[9px] tracking-[0.22em] font-bold uppercase text-slate-400 mt-1 font-tech">
          Hermosillo • Climatización
        </span>
      </div>
    </div>
  );
}

export default ClimaProLogo;
