import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSplit from './components/HeroSplit';
import TrustBar from './components/TrustBar';
import ProblemSolutionMatrix from './components/ProblemSolutionMatrix';
import CoverageRadar from './components/CoverageRadar';
import ServiceChecklist from './components/ServiceChecklist';
import Testimonials from './components/Testimonials';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileEmergencyDock from './components/MobileEmergencyDock';
import Footer from './components/Footer';

export default function App() {
  const [selectedProblem, setSelectedProblem] = useState('');

  const handleSelectSolution = (problemName) => {
    setSelectedProblem(problemName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F17] text-slate-100 selection:bg-[#FF6B00] selection:text-white pb-16 md:pb-0">
      
      {/* 1. NAVBAR TÉCNICO */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. HERO DIVIDIDO (SPLIT-SCREEN ABOVE-THE-FOLD) CON CONSOLA EXPRESS */}
        <HeroSplit 
          selectedProblem={selectedProblem} 
          onProblemChange={setSelectedProblem} 
        />

        {/* 3. CINTILLO FLOTANTE DE CERTIDUMBRE (TRUST BAR) */}
        <TrustBar />

        {/* 4. MATRIZ DE PROBLEMA ➔ CAUSA ➔ SOLUCIÓN INMEDIATA */}
        <ProblemSolutionMatrix onSelectSolution={handleSelectSolution} />

        {/* 5. RADAR DE COBERTURA & DISPONIBILIDAD POR COLONIA */}
        <CoverageRadar />

        {/* 6. ANATOMÍA DE NUESTRO SERVICIO (CHECKLIST DE 10 PUNTOS) */}
        <ServiceChecklist />

        {/* 7. PRUEBA SOCIAL LOCAL (RESEÑAS CON COLONIA Y PROBLEMA) */}
        <Testimonials />
      </main>

      {/* BOTÓN FLOTANTE DESKTOP */}
      <div className="hidden md:block">
        <FloatingWhatsApp />
      </div>

      {/* 8. FOOTER TÉCNICO */}
      <Footer />

      {/* 9. STICKY MOBILE EMERGENCY DOCK (BARRA FIJA INFERIOR MÓVIL) */}
      <MobileEmergencyDock />

    </div>
  );
}
