
import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Calendar, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PortfolioCounters from './PortfolioCounters';
import Swal from 'sweetalert2';

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
      githubUrl: "https://github.com/avensora/financeflow"
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
      githubUrl: "https://github.com/avensora/shopsmart"
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
      githubUrl: "https://github.com/avensora/healthtrack"
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
      githubUrl: "https://github.com/avensora/techcorp"
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
      githubUrl: "https://github.com/avensora/edulearn"
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
      githubUrl: "https://github.com/avensora/fooddelivery"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleViewProject = (project: any) => {
    Swal.fire({
      title: project.title,
      html: `
        <div class="text-left space-y-4">
          <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover rounded-lg mb-4">
          <p class="text-gray-600 dark:text-gray-300">${project.description}</p>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong class="text-gray-800 dark:text-gray-200">Client:</strong><br>
              <span class="text-gray-600 dark:text-gray-400">${project.client}</span>
            </div>
            <div>
              <strong class="text-gray-800 dark:text-gray-200">Duration:</strong><br>
              <span class="text-gray-600 dark:text-gray-400">${project.duration}</span>
            </div>
            <div>
              <strong class="text-gray-800 dark:text-gray-200">Team Size:</strong><br>
              <span class="text-gray-600 dark:text-gray-400">${project.team}</span>
            </div>
            <div>
              <strong class="text-gray-800 dark:text-gray-200">Technologies:</strong><br>
              <span class="text-gray-600 dark:text-gray-400">${project.technologies.join(', ')}</span>
            </div>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Visit Live Site',
      cancelButtonText: 'View Code',
      confirmButtonColor: '#3B82F6',
      background: document.documentElement.classList.contains('dark') ? '#1f2937' : '#ffffff',
      color: document.documentElement.classList.contains('dark') ? '#f3f4f6' : '#374151',
      width: '600px',
      customClass: {
        popup: 'rounded-xl shadow-2xl'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(project.liveUrl, '_blank');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        window.open(project.githubUrl, '_blank');
      }
    });
  };

  const handleStartProject = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewAllProjects = () => {
    Swal.fire({
      title: 'All Projects',
      text: 'Explore our complete portfolio of innovative solutions and successful projects.',
      icon: 'info',
      confirmButtonText: 'Contact Us for More',
      confirmButtonColor: '#3B82F6',
      background: document.documentElement.classList.contains('dark') ? '#1f2937' : '#ffffff',
      color: document.documentElement.classList.contains('dark') ? '#f3f4f6' : '#374151',
      customClass: {
        popup: 'rounded-xl shadow-2xl'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        handleStartProject();
      }
    });
  };

  return (
    <section id="portfolio" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest projects and see how we've helped businesses transform their digital presence
          </p>
        </div>

        {/* Stats with intersection observer */}
        <PortfolioCounters />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`button-shimmer ${
                activeFilter === category.id 
                  ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground' 
                  : 'border-border text-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover-glow group cursor-pointer bg-card border-border">
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
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="bg-white/90 hover:bg-white text-gray-900"
                    onClick={() => handleViewProject(project)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="bg-white/90 hover:bg-white text-gray-900"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {project.team}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 button-shimmer"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Site
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 button-shimmer"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
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
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss how we can bring your vision to life with our expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-background text-foreground hover:bg-accent button-shimmer"
                onClick={handleViewAllProjects}
              >
                View All Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 button-shimmer"
                onClick={handleStartProject}
              >
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
