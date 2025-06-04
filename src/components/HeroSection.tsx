
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const typedTextRef = useRef<HTMLSpanElement>(null);

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
      
      // Clear existing text
      typedElement.innerHTML = "";
      typeWriter();
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            Trusted by 500+ Clients Worldwide
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg hover-glow"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 text-lg group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:text-blue-600" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
