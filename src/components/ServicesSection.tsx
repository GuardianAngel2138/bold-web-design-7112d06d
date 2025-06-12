
import React from 'react';
import { Code, Palette, Smartphone, Cloud, Search, ShoppingCart, Check, Star, Zap, Camera, Megaphone, TrendingUp, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ServicesSection = () => {
  // Security: Input sanitization function
  const sanitizeRedirect = (targetId: string): void => {
    const allowedTargets = ['contact', 'portfolio', 'home'];
    if (allowedTargets.includes(targetId)) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Security: Rate limiting for button clicks
  const handleSecureButtonClick = (action: string, targetId?: string) => {
    const lastClick = localStorage.getItem(`lastClick_${action}`);
    const now = Date.now();
    
    if (lastClick && now - parseInt(lastClick) < 1000) {
      return; // Prevent spam clicking
    }
    
    localStorage.setItem(`lastClick_${action}`, now.toString());
    
    if (targetId) {
      sanitizeRedirect(targetId);
    }
  };

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern React and TypeScript",
      features: ["React/Next.js", "TypeScript", "Responsive Design", "API Integration"],
      color: "bg-blue-500",
      available: true
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert visitors into customers",
      features: ["Figma Design", "Prototyping", "User Research", "Brand Identity"],
      color: "bg-purple-500",
      available: true
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Cross-platform", "App Store Ready", "Modern UI"],
      color: "bg-green-500",
      available: false
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions",
      features: ["AWS/Vercel", "CI/CD", "Auto-scaling", "Security"],
      color: "bg-cyan-500",
      available: false
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic",
      features: ["Technical SEO", "Content Strategy", "Analytics", "Performance"],
      color: "bg-orange-500",
      available: true
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Complete online stores with payment processing",
      features: ["Stripe Integration", "Product Catalog", "Order Management", "Analytics"],
      color: "bg-red-500",
      available: false
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "799",
      period: "project",
      description: "Perfect for small businesses and personal websites",
      features: [
        "5-page responsive website",
        "Basic SEO optimization",
        "Contact form integration",
        "Mobile-friendly design",
        "2 months support",
        "SSL certificate"
      ],
      popular: false,
      available: true,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "1,999",
      period: "project",
      description: "Ideal for growing businesses",
      features: [
        "10-page custom website",
        "Advanced SEO optimization",
        "CMS integration",
        "E-commerce functionality",
        "4 months support",
        "Performance optimization",
        "Analytics setup",
        "Social media integration"
      ],
      popular: true,
      available: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "For complex business needs",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced integrations",
        "Database design",
        "6 months support",
        "Security audit",
        "Performance monitoring",
        "Dedicated support"
      ],
      popular: false,
      available: false,
      cta: "Coming Soon"
    }
  ];

  const mediaPackages = [
    {
      name: "Social Media Starter",
      price: "199",
      period: "month",
      description: "Perfect for small businesses starting their social media journey",
      features: [
        "2 social media platforms",
        "8 posts per month",
        "Basic content creation",
        "Monthly analytics report",
        "Community management"
      ],
      popular: false,
      available: false,
      cta: "Coming Soon",
      icon: Camera
    },
    {
      name: "Digital Marketing Pro",
      price: "499",
      period: "month",
      description: "Comprehensive digital marketing for growing businesses",
      features: [
        "4 social media platforms",
        "20 posts per month",
        "Content creation",
        "Basic ad management",
        "Weekly analytics reports",
        "Email marketing setup"
      ],
      popular: true,
      available: false,
      cta: "Coming Soon",
      icon: Megaphone
    },
    {
      name: "Enterprise Media",
      price: "999",
      period: "month",
      description: "Full-scale digital media management",
      features: [
        "Unlimited social platforms",
        "Daily content creation",
        "Professional campaigns",
        "Advanced analytics",
        "Brand monitoring",
        "Dedicated manager"
      ],
      popular: false,
      available: false,
      cta: "Coming Soon",
      icon: TrendingUp
    }
  ];

  const offers = [
    {
      title: "Early Bird Special",
      discount: "20% OFF",
      description: "First 10 clients in 2025",
      badge: "Limited Spots",
      color: "bg-gradient-to-r from-red-500 to-pink-500",
      available: true
    },
    {
      title: "Startup Bundle",
      discount: "Save $300",
      description: "Website + Branding combo",
      badge: "Best Value",
      color: "bg-gradient-to-r from-green-500 to-teal-500",
      available: true
    },
    {
      title: "Referral Program",
      discount: "$200 Credit",
      description: "For each successful referral",
      badge: "Coming Soon",
      color: "bg-gradient-to-r from-blue-500 to-purple-500",
      available: false
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-background text-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate 2-person team founded in 2025, dedicated to helping businesses thrive in the digital world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" data-aos="fade-up" data-aos-delay="200">
          {services.map((service, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 bg-card border-border">
              {!service.available && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                    <Clock className="w-3 h-3 mr-1" />
                    Coming Soon
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex flex-col h-full">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="space-y-2 flex-grow">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button 
                    onClick={() => service.available ? handleSecureButtonClick('service_inquiry', 'contact') : null}
                    className={`w-full ${service.available 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-muted text-muted-foreground cursor-not-allowed hover:bg-muted'
                    }`}
                    disabled={!service.available}
                  >
                    {service.available ? 'Get Quote' : 'Coming Soon'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Web Development Packages */}
        <div className="mb-20" data-aos="fade-up" data-aos-delay="300">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Web Development Packages</h3>
            <p className="text-muted-foreground">Choose the perfect package for your project needs</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary scale-105' : ''} hover:shadow-xl transition-all duration-300 bg-card border-border`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1 shadow-lg">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                {!pkg.available && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                      <Clock className="w-3 h-3 mr-1" />
                      Coming Soon
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${pkg.price}</span>
                    <span className="text-muted-foreground">/{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{pkg.description}</p>
                </CardHeader>
                
                <CardContent className="flex flex-col h-full">
                  <div className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => pkg.available ? handleSecureButtonClick('web_package', 'contact') : null}
                    className={`w-full ${pkg.available
                      ? (pkg.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                        : 'bg-primary hover:bg-primary/90')
                      : 'bg-muted text-muted-foreground cursor-not-allowed hover:bg-muted'
                    } text-primary-foreground`}
                    disabled={!pkg.available}
                  >
                    {pkg.available ? pkg.cta : 'Coming Soon'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Digital Media Management Section */}
        <div className="mb-20" data-aos="fade-up" data-aos-delay="400">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Digital Media Management</h3>
            <p className="text-muted-foreground">Comprehensive social media solutions (launching soon)</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary scale-105' : ''} hover:shadow-xl transition-all duration-300 bg-card border-border opacity-75`}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-muted/20 rounded-lg"></div>
                
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-muted text-muted-foreground px-3 py-1 shadow-lg">
                      <Clock className="w-4 h-4 mr-1" />
                      Coming Soon
                    </Badge>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                    <Clock className="w-3 h-3 mr-1" />
                    Coming Soon
                  </Badge>
                </div>
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <pkg.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${pkg.price}</span>
                    <span className="text-muted-foreground">/{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{pkg.description}</p>
                </CardHeader>
                
                <CardContent className="flex flex-col h-full relative z-10">
                  <div className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-muted text-muted-foreground cursor-not-allowed hover:bg-muted"
                    disabled
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div data-aos="fade-up" data-aos-delay="500">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Special Offers</h3>
            <p className="text-muted-foreground">Limited-time deals for our launch year</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 bg-card border-border">
                <div className={`absolute top-0 right-0 ${offer.color} text-white px-3 py-1 rounded-bl-lg`}>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                    {offer.badge}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">{offer.title}</h4>
                    <div className="text-3xl font-bold text-primary mb-2">{offer.discount}</div>
                    <p className="text-muted-foreground mb-4">{offer.description}</p>
                    <Button 
                      onClick={() => offer.available ? handleSecureButtonClick('special_offer', 'contact') : null}
                      variant="outline" 
                      className={`border-primary text-primary ${offer.available 
                        ? 'hover:bg-primary hover:text-primary-foreground' 
                        : 'opacity-50 cursor-not-allowed'
                      }`}
                      disabled={!offer.available}
                    >
                      {offer.available ? 'Learn More' : 'Coming Soon'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
