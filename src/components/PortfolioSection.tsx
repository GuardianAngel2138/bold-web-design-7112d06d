
import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Calendar, Users, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'corporate', name: 'Corporate' }
  ];

  const projects = [
    {
      id: 1,
      title: "FinanceFlow Dashboard",
      category: "web",
      description: "A comprehensive financial management platform with real-time analytics and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      client: "FinanceFlow Inc.",
      duration: "3 months",
      team: "5 developers",
      featured: true,
      liveUrl: "https://financeflow-demo.com",
      githubUrl: "https://github.com/techcraft/financeflow"
    },
    {
      id: 2,
      title: "ShopSmart E-commerce",
      category: "ecommerce",
      description: "Modern e-commerce platform with advanced product filtering and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "Stripe"],
      client: "ShopSmart Retail",
      duration: "4 months",
      team: "6 developers",
      featured: true,
      liveUrl: "https://shopsmart-demo.com",
      githubUrl: "https://github.com/techcraft/shopsmart"
    },
    {
      id: 3,
      title: "HealthTrack Mobile App",
      category: "mobile",
      description: "Comprehensive health tracking app with workout plans and nutrition monitoring.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Charts"],
      client: "HealthTrack Solutions",
      duration: "5 months",
      team: "4 developers",
      featured: false,
      liveUrl: "https://healthtrack-app.com",
      githubUrl: "https://github.com/techcraft/healthtrack"
    },
    {
      id: 4,
      title: "TechCorp Website",
      category: "corporate",
      description: "Corporate website with dynamic content management and multi-language support.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Strapi", "PostgreSQL", "Tailwind"],
      client: "TechCorp Industries",
      duration: "2 months",
      team: "3 developers",
      featured: false,
      liveUrl: "https://techcorp-demo.com",
      githubUrl: "https://github.com/techcraft/techcorp"
    },
    {
      id: 5,
      title: "EduLearn Platform",
      category: "web",
      description: "Online learning platform with interactive courses and progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      technologies: ["Angular", "Express.js", "MongoDB", "Socket.io"],
      client: "EduLearn Academy",
      duration: "6 months",
      team: "8 developers",
      featured: true,
      liveUrl: "https://edulearn-demo.com",
      githubUrl: "https://github.com/techcraft/edulearn"
    },
    {
      id: 6,
      title: "FoodDelivery App",
      category: "mobile",
      description: "Food delivery app with real-time tracking and payment processing.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Django", "PostgreSQL", "Maps API"],
      client: "QuickBite Delivery",
      duration: "4 months",
      team: "5 developers",
      featured: false,
      liveUrl: "https://quickbite-app.com",
      githubUrl: "https://github.com/techcraft/fooddelivery"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "Awards Won" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest projects and see how we've helped businesses transform their digital presence
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`${
                activeFilter === category.id 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'border-gray-300 text-gray-700 hover:border-blue-500'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover-glow group cursor-pointer">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-yellow-500 text-white">
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {project.team}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Site
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss how we can bring your vision to life with our expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                View All Projects
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
