
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Star, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Swal from 'sweetalert2';
import ParticlesBackground from './ParticlesBackground';
import GlobalCounters from './GlobalCounters';

const HeroSection = () => {
  const typedTextRef = useRef<HTMLSpanElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [playLoading, setPlayLoading] = useState(false);

  useEffect(() => {
    const text = "Digital Excellence";
    const typedElement = typedTextRef.current;
    
    if (typedElement) {
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          typedElement.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, 150);
        }
      };
      
      typedElement.innerHTML = "";
      typeWriter();
    }
  }, []);

  const handleStartProject = async () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      Swal.fire({
        title: '🚀 Ready to Launch Your Project?',
        html: `
          <div class="text-left space-y-4">
            <p class="text-gray-600">Choose how you'd like to get started:</p>
            <div class="grid grid-cols-1 gap-3">
              <div class="p-3 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors" onclick="Swal.close(); document.getElementById('contact').scrollIntoView({behavior: 'smooth'});">
                <div class="font-semibold text-blue-600">💬 Free Consultation</div>
                <div class="text-sm text-gray-500">Discuss your project requirements</div>
              </div>
              <div class="p-3 border rounded-lg hover:bg-purple-50 cursor-pointer transition-colors" onclick="Swal.close(); document.getElementById('services').scrollIntoView({behavior: 'smooth'});">
                <div class="font-semibold text-purple-600">📋 View Our Services</div>
                <div class="text-sm text-gray-500">Explore our service packages</div>
              </div>
              <div class="p-3 border rounded-lg hover:bg-green-50 cursor-pointer transition-colors" onclick="Swal.close(); document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'});">
                <div class="font-semibold text-green-600">🎨 See Our Work</div>
                <div class="text-sm text-gray-500">Browse our portfolio</div>
              </div>
            </div>
          </div>
        `,
        showConfirmButton: false,
        showCloseButton: true,
        width: window.innerWidth < 640 ? '90%' : '500px',
        customClass: {
          popup: 'rounded-xl shadow-2xl',
          closeButton: 'text-gray-400 hover:text-gray-600'
        }
      });
    }, 1000);
  };

  const handleWatchDemo = async () => {
    setPlayLoading(true);
    
    setTimeout(() => {
      setPlayLoading(false);
      Swal.fire({
        title: '🎬 Demo Coming Soon!',
        text: 'Our interactive demo is currently in production. Would you like to schedule a live demo instead?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Schedule Live Demo',
        cancelButtonText: 'Maybe Later',
        confirmButtonColor: '#3B82F6',
        width: window.innerWidth < 640 ? '90%' : '500px',
        customClass: {
          popup: 'rounded-xl shadow-2xl'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }, 800);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-2">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-36 h-36 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          {/* Badge */}
          <div 
            className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium mb-6 sm:mb-8 hover:bg-blue-200 transition-colors duration-200"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <span className="hidden sm:inline">Trusted by 500+ Clients Worldwide</span>
            <span className="sm:hidden">500+ Happy Clients</span>
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 text-yellow-500" />
          </div>

          {/* Main heading */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="text-shimmer pulse-slow">Avensora</span>{' '}
            <span className="text-gray-900">Creates</span>{' '}
            <div className="text-shimmer mt-2 sm:mt-0 sm:inline">
              <span ref={typedTextRef}></span>
              <span className="animate-pulse">|</span>
            </div>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Transform your <span className="gradient-text">digital presence</span> with cutting-edge web development, 
            stunning design, and innovative solutions that drive results.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Button 
              size="lg" 
              onClick={handleStartProject}
              disabled={isLoading}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg hover-glow relative overflow-hidden group button-shimmer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <span>Start Your Project</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </>
              )}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleWatchDemo}
              disabled={playLoading}
              className="w-full sm:w-auto border-2 border-gray-300 hover:border-blue-500 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg group relative button-shimmer"
            >
              {playLoading ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:text-blue-600 transition-colors duration-200" />
                  <span className="gradient-text">Watch Demo</span>
                </>
              )}
            </Button>
          </div>

          {/* Global Counters */}
          <div data-aos="fade-up" data-aos-delay="600" className="px-4">
            <GlobalCounters className="max-w-4xl mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
