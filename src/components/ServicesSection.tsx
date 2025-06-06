import React from 'react';
import { Code, Palette, Smartphone, Cloud, Search, ShoppingCart, Check, Star, Zap, Camera, Megaphone, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ServicesSection = () => {
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="hover-glow cursor-pointer group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Digital Media Management Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Digital Media Management</h3>
            <p className="text-gray-600">Comprehensive social media and digital marketing solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mediaPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-purple-500 scale-105' : ''} hover-glow`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-500 text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <pkg.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">${pkg.price}</span>
                    <span className="text-gray-600">/{pkg.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{pkg.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${pkg.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                    } text-white`}
                  >
                    {pkg.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Web Development Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Web Development Packages</h3>
            <p className="text-gray-600">Choose the perfect package for your project needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''} hover-glow`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">${pkg.price}</span>
                    <span className="text-gray-600">/{pkg.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{pkg.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${pkg.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                    } text-white`}
                  >
                    {pkg.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Special Offers</h3>
            <p className="text-gray-600">Limited-time deals and ongoing promotions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <Card key={index} className="relative overflow-hidden hover-glow">
                <div className={`absolute top-0 right-0 ${offer.color} text-white px-3 py-1 rounded-bl-lg`}>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {offer.badge}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{offer.title}</h4>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{offer.discount}</div>
                    <p className="text-gray-600 mb-4">{offer.description}</p>
                    <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
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
