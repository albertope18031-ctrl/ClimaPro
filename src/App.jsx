import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleSelectSolution = (problemName) => {
    setSelectedProblem(problemName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F17] text-slate-100 selection:bg-[#FF6B00] selection:text-white pb-16 md:pb-0 relative">
      
      {/* LÁSER DE PROGRESO DE SCROLL INDUSTRIAL */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FF6B00] via-[#FFA336] to-[#FF6B00] z-50 origin-left shadow-[0_0_12px_rgba(255,107,0,0.8)]"
        style={{ scaleX }}
      />

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
