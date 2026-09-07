import React from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import HeroSection from './components/HeroSection';
import LogoStrip from './components/LogoStrip';
import ProblemSection from './components/ProblemSection';
import SolutionSteps from './components/SolutionSteps';
import ServicesWorkbench from './components/ServicesWorkbench';
import StatsBand from './components/StatsBand';
import TestimonialsSection from './components/TestimonialsSection';
import AdvisorySection from './components/AdvisorySection';
import FinalCTA from './components/FinalCTA';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-50">
      <Header />
      <main>
        <HeroSection />
        <LogoStrip />
        <ProblemSection />
        <SolutionSteps />
        <ServicesWorkbench />
        <StatsBand />
        <TestimonialsSection />
        <AdvisorySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;