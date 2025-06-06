
import React from 'react';
import { Users, Award, Target, Zap, Heart, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [{
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to delivering exceptional digital solutions that exceed expectations."
  }, {
    icon: Zap,
    title: "Innovation First",
    description: "We leverage cutting-edge technologies to create future-ready applications."
  }, {
    icon: Heart,
    title: "Client-Focused",
    description: "Your success is our success. We build lasting partnerships with every client."
  }, {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous testing and quality control ensure reliable, secure solutions."
  }];
  
  const team = [{
    name: "Alex Johnson",
    role: "CEO & Lead Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    expertise: "Full-Stack Development, System Architecture"
  }, {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    expertise: "UI/UX Design, Brand Strategy"
  }, {
    name: "Michael Davis",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    expertise: "DevOps, Cloud Infrastructure"
  }, {
    name: "Emily Rodriguez",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    expertise: "Agile Methodology, Client Relations"
  }];
  
  return <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">About</span> <span className="text-shimmer">Avensora</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of developers, designers, and innovators dedicated to 
            transforming ideas into <span className="text-shimmer">Digital Experience</span> that drive business growth.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Story</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2019, <span className="text-shimmer">Avensora</span> emerged from a simple vision: to bridge the gap 
              between innovative technology and real-world business needs. What started as a small 
              team of passionate developers has grown into a full-service digital agency.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We've successfully delivered over <span className="gradient-text">500 projects</span>, ranging from simple websites to 
              complex enterprise applications. Our commitment to excellence and innovation has 
              earned us the trust of clients across various industries.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Award className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-gray-700 font-medium">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-gray-700 font-medium">50+ Team Members</span>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left" data-aos-delay="400">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" alt="Team collaboration" className="rounded-lg shadow-xl hover-glow" />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12" data-aos="fade-up">
            Our <span className="gradient-text">Core Values</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <Card key={index} className="text-center hover-glow cursor-pointer" data-aos="fade-up" data-aos-delay={200 + index * 100}>
                <CardContent className="p-6 card-content-wrapper">
                  <div className="card-content-body">
                    <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      <span className="text-gray-900">{value.title}</span>
                    </h4>
                    <p className="text-gray-600 mb-4">{value.description}</p>
                  </div>
                  <div className="card-content-footer">
                    <Button className="w-full mt-2 button-shimmer">Learn More</Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12" data-aos="fade-up">
            Meet Our <span className="gradient-text">Leadership Team</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => <Card key={index} className="text-center hover-glow cursor-pointer" data-aos="zoom-in" data-aos-delay={200 + index * 150}>
                <CardContent className="p-6 card-content-wrapper">
                  <div className="card-content-body">
                    <div className="relative mb-4">
                      <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto object-cover" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      <span className="gradient-text">{member.name}</span>
                    </h4>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.expertise}</p>
                  </div>
                  <div className="card-content-footer">
                    <Button className="w-full mt-2 button-shimmer">View Profile</Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};

export default AboutSection;
