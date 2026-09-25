import React from 'react';
import logoImg from '../assets/logo-climapro-official.png';

export function ClimaProLogo({ className = "h-11 sm:h-13 w-auto" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="ClimaPro - Climatización y Refrigeración Hermosillo"
        className="h-full w-auto object-contain transition-transform group-hover:scale-105 duration-300 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
}

export default ClimaProLogo;
