
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
    // Initialize AOS with enhanced settings
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-cubic',
      once: true,
      offset: 120,
      delay: 100,
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
      <div data-aos="fade-up" data-aos-duration="1200">
        <HeroSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <AboutSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <ServicesSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <PortfolioSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="500">
        <ContactSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
