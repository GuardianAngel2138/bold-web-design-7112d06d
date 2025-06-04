
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div data-aos="fade-in">
        <HeroSection />
      </div>
      <div data-aos="fade-up">
        <AboutSection />
      </div>
      <div data-aos="fade-up">
        <ServicesSection />
      </div>
      <div data-aos="fade-up">
        <PortfolioSection />
      </div>
      <div data-aos="fade-up">
        <ContactSection />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
