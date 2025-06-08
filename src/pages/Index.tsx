
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
    // Initialize AOS with mobile-friendly settings
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: false,
      offset: 50,
      delay: 50,
      // Disable animations on mobile for better performance
      disable: window.innerWidth < 768 ? 'mobile' : false,
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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      <Navigation />
      <div data-aos="fade-up" data-aos-duration="800">
        <HeroSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <AboutSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="150">
        <ServicesSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <PortfolioSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="250">
        <ContactSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
