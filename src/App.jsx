import React, { useState } from 'react';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SymptomGrid from './components/SymptomGrid';
import PricingCard from './components/PricingCard';
import BookingWizard from './components/BookingWizard';
import TrustSection from './components/TrustSection';
import CoverageMap from './components/CoverageMap';
import Testimonials from './components/Testimonials';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  const [selectedSymptom, setSelectedSymptom] = useState('No arroja mucho aire');

  const handleSelectSymptom = (symptom) => {
    setSelectedSymptom(symptom);
    const element = document.getElementById('agendar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    const element = document.getElementById('agendar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F17] text-slate-100 selection:bg-[#FF6B00] selection:text-white">
      {/* Top Banner de Urgencia en Hermosillo */}
      <TopBanner />

      {/* Navbar con Logo y CTA */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* Hero Section con selector exprés de fallas */}
        <Hero onSelectSymptom={handleSelectSymptom} />

        {/* Módulo de Diagnóstico Interactivo para las 4 Fallas */}
        <SymptomGrid onSelectSymptom={handleSelectSymptom} />

        {/* Tarjeta de Tarifa Base Transparente $400 */}
        <PricingCard onBookClick={handleOpenBooking} />

        {/* Asistente de Agendamiento en 3 Pasos + Motor de WhatsApp */}
        <BookingWizard 
          selectedSymptom={selectedSymptom} 
          onSymptomChange={setSelectedSymptom} 
        />

        {/* Garantías y Protocolo de Limpieza */}
        <TrustSection />

        {/* Cobertura en Hermosillo y Alrededores */}
        <CoverageMap />

        {/* Prueba Social / Testimonios de Clientes */}
        <Testimonials />
      </main>

      {/* Botón flotante de WhatsApp directo al 662 420 5643 */}
      <FloatingWhatsApp />

      {/* Footer corporativo */}
      <Footer />
    </div>
  );
}
