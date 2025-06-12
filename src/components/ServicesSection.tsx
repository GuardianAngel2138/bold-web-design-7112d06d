
import React from 'react';
import { Code, Palette, Smartphone, Cloud, Search, ShoppingCart, Check, Star, Zap, Camera, Megaphone, TrendingUp } from 'lucide-react';
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
      description: "Custom websites and web applications built with modern technologies",
      features: ["React/Vue.js", "Node.js/Python", "Database Design", "API Integration"],
      color: "bg-blue-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert visitors into customers",
      features: ["Wireframing", "Prototyping", "User Research", "Brand Identity"],
      color: "bg-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "iOS/Android", "App Store Optimization"],
      color: "bg-green-500"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions",
      features: ["AWS/Azure", "DevOps", "Auto-scaling", "Security"],
      color: "bg-cyan-500"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic",
      features: ["Technical SEO", "Content Strategy", "Analytics", "Local SEO"],
      color: "bg-orange-500"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Complete online stores with payment processing and inventory management",
      features: ["Shopify/WooCommerce", "Payment Gateway", "Inventory System", "Analytics"],
      color: "bg-red-500"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "999",
      period: "project",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Basic SEO optimization",
        "Contact form integration",
        "Mobile-friendly design",
        "3 months support",
        "SSL certificate"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "2,499",
      period: "project",
      description: "Ideal for growing businesses",
      features: [
        "10-page custom website",
        "Advanced SEO optimization",
        "CMS integration",
        "E-commerce functionality",
        "6 months support",
        "Performance optimization",
        "Analytics setup",
        "Social media integration"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced integrations",
        "Database design",
        "12 months support",
        "Security audit",
        "Performance monitoring",
        "Dedicated project manager",
        "Training sessions"
      ],
      popular: false,
      cta: "Contact Us"
    }
  ];

  const mediaPackages = [
    {
      name: "Social Media Starter",
      price: "299",
      period: "month",
      description: "Perfect for small businesses starting their social media journey",
      features: [
        "2 social media platforms",
        "8 posts per month",
        "Basic content creation",
        "Monthly analytics report",
        "Community management",
        "Brand guidelines"
      ],
      popular: false,
      cta: "Get Started",
      icon: Camera
    },
    {
      name: "Digital Marketing Pro",
      price: "699",
      period: "month",
      description: "Comprehensive digital marketing for growing businesses",
      features: [
        "4 social media platforms",
        "20 posts per month",
        "Video content creation",
        "Paid ad management ($500 ad spend included)",
        "Weekly analytics reports",
        "Influencer outreach",
        "Email marketing campaigns",
        "SEO content optimization"
      ],
      popular: true,
      cta: "Most Popular",
      icon: Megaphone
    },
    {
      name: "Enterprise Media",
      price: "1,499",
      period: "month",
      description: "Full-scale digital media management for large organizations",
      features: [
        "Unlimited social platforms",
        "Daily content creation",
        "Professional video production",
        "Advanced paid advertising",
        "Real-time analytics dashboard",
        "Crisis management",
        "Brand monitoring",
        "Dedicated account manager",
        "Custom strategy development"
      ],
      popular: false,
      cta: "Contact Us",
      icon: TrendingUp
    }
  ];

  const offers = [
    {
      title: "Launch Week Special",
      discount: "25% OFF",
      description: "All new projects started this month",
      badge: "Limited Time",
      color: "bg-gradient-to-r from-red-500 to-pink-500"
    },
    {
      title: "Bundle Package",
      discount: "Save $500",
      description: "Website + Mobile App combo",
      badge: "Best Value",
      color: "bg-gradient-to-r from-green-500 to-teal-500"
    },
    {
      title: "Referral Bonus",
      discount: "$300 Credit",
      description: "For each successful referral",
      badge: "Ongoing",
      color: "bg-gradient-to-r from-blue-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-muted/30 dark:bg-muted/10 text-foreground relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            We offer comprehensive digital solutions to help your business thrive in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20" data-aos="fade-up" data-aos-delay="200">
          {services.map((service, index) => (
            <Card key={index} className="hover-glow cursor-pointer group card-hover bg-card/80 backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-semibold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="card-content-wrapper">
                <div className="card-content-body">
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card-content-footer mt-6">
                  <Button 
                    onClick={() => handleSecureButtonClick('service_inquiry', 'contact')}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground button-shimmer"
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Digital Media Management Section */}
        <div className="mb-16 lg:mb-20" data-aos="fade-up" data-aos-delay="300">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Digital Media Management</h3>
            <p className="text-muted-foreground">Comprehensive social media and digital marketing solutions</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mediaPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary scale-105' : ''} hover-glow bg-card/80 backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-300`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1 shadow-lg">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <pkg.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl sm:text-4xl font-bold text-foreground">${pkg.price}</span>
                    <span className="text-muted-foreground">/{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm sm:text-base px-2">{pkg.description}</p>
                </CardHeader>
                
                <CardContent className="card-content-wrapper">
                  <div className="card-content-body">
                    <div className="space-y-3 mb-6 lg:mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="card-content-footer">
                    <Button 
                      onClick={() => handleSecureButtonClick('media_package', 'contact')}
                      className={`w-full ${pkg.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                        : 'bg-primary hover:bg-primary/90'
                      } text-primary-foreground button-shimmer`}
                    >
                      {pkg.cta}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Web Development Pricing Section */}
        <div className="mb-16 lg:mb-20" data-aos="fade-up" data-aos-delay="400">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Web Development Packages</h3>
            <p className="text-muted-foreground">Choose the perfect package for your project needs</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary scale-105' : ''} hover-glow bg-card/80 backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-300`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1 shadow-lg">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl sm:text-4xl font-bold text-foreground">${pkg.price}</span>
                    <span className="text-muted-foreground">/{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm sm:text-base px-2">{pkg.description}</p>
                </CardHeader>
                
                <CardContent className="card-content-wrapper">
                  <div className="card-content-body">
                    <div className="space-y-3 mb-6 lg:mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="card-content-footer">
                    <Button 
                      onClick={() => handleSecureButtonClick('web_package', 'contact')}
                      className={`w-full ${pkg.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                        : 'bg-primary hover:bg-primary/90'
                      } text-primary-foreground button-shimmer`}
                    >
                      {pkg.cta}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div data-aos="fade-up" data-aos-delay="500">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Special Offers</h3>
            <p className="text-muted-foreground">Limited-time deals and ongoing promotions</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {offers.map((offer, index) => (
              <Card key={index} className="relative overflow-hidden hover-glow bg-card/80 backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`absolute top-0 right-0 ${offer.color} text-white px-3 py-1 rounded-bl-lg`}>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                    {offer.badge}
                  </Badge>
                </div>
                
                <CardContent className="p-4 sm:p-6">
                  <div className="text-center">
                    <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500 mx-auto mb-4" />
                    <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{offer.title}</h4>
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{offer.discount}</div>
                    <p className="text-muted-foreground mb-4 text-sm sm:text-base">{offer.description}</p>
                    <Button 
                      onClick={() => handleSecureButtonClick('special_offer', 'contact')}
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground button-shimmer"
                    >
                      Learn More
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
