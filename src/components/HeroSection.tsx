
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Star, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Swal from 'sweetalert2';
import ParticlesBackground from './ParticlesBackground';
import AnimatedCounter from './AnimatedCounter';

const HeroSection = () => {
  const typedTextRef = useRef<HTMLSpanElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [playLoading, setPlayLoading] = useState(false);

  useEffect(() => {
    const text = "Modern Web Solutions";
    const typedElement = typedTextRef.current;
    
    if (typedElement) {
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          typedElement.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
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
        width: '500px',
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
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8 hover:bg-blue-200 transition-colors duration-200">
            <Star className="w-4 h-4 mr-2 animate-pulse" />
            Trusted by 500+ Clients Worldwide
            <Sparkles className="w-4 h-4 ml-2 text-yellow-500" />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            We Create{' '}
            <span className="gradient-text">
              <span ref={typedTextRef}></span>
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence with cutting-edge web development, 
            stunning design, and innovative solutions that drive results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={handleStartProject}
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg hover-glow relative overflow-hidden group"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </>
              )}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleWatchDemo}
              disabled={playLoading}
              className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 text-lg group relative"
            >
              {playLoading ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <Play className="mr-2 w-5 h-5 group-hover:text-blue-600 transition-colors duration-200" />
                  Watch Demo
                </>
              )}
            </Button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center group cursor-pointer">
              <AnimatedCounter 
                end={500} 
                suffix="+" 
                className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200" 
              />
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center group cursor-pointer">
              <AnimatedCounter 
                end={98} 
                suffix="%" 
                className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200" 
              />
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center group cursor-pointer">
              <AnimatedCounter 
                end={50} 
                suffix="+" 
                className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200" 
              />
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
            <div className="text-center group cursor-pointer">
              <AnimatedCounter 
                end={5} 
                suffix="+" 
                className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200" 
              />
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
