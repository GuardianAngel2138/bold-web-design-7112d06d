
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import Swal from 'sweetalert2';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = async () => {
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      Swal.fire({
        title: 'Let\'s Get Started!',
        text: 'Ready to transform your digital presence?',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Start Project',
        cancelButtonText: 'Learn More',
        confirmButtonColor: '#3B82F6',
        background: '#ffffff',
        customClass: {
          popup: 'rounded-xl shadow-2xl',
          title: 'text-xl font-bold',
          htmlContainer: 'text-gray-600'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }, 1200);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-shimmer">Avensora</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button 
              onClick={handleGetStarted}
              disabled={isLoading}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground relative overflow-hidden button-shimmer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Get Started'
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md shadow-lg border-b border-border">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="mt-4 px-3">
            <Button 
              onClick={handleGetStarted}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground button-shimmer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Get Started'
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
