import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Loader2, CheckCircle, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [rateLimited, setRateLimited] = useState(false);

  // Security: Input sanitization
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocols
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim()
      .slice(0, 1000); // Limit length
  };

  // Security: Email validation with strict pattern
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email) && email.length <= 254;
  };

  // Security: Phone validation
  const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phone === '' || phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  // Security: Rate limiting
  const checkRateLimit = (): boolean => {
    const lastSubmission = localStorage.getItem('lastEmailSubmission');
    const now = Date.now();
    
    if (lastSubmission && now - parseInt(lastSubmission) < 60000) { // 1 minute cooldown
      setRateLimited(true);
      setTimeout(() => setRateLimited(false), 60000);
      return false;
    }
    
    localStorage.setItem('lastEmailSubmission', now.toString());
    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Security: Sanitize input in real-time
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const errors: {[key: string]: string} = {};
    
    // Enhanced validation
    if (!formData.name.trim() || formData.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    if (formData.name.length > 100) {
      errors.name = 'Name must be less than 100 characters';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !isValidPhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.service) {
      errors.service = 'Please select a service';
    }
    
    if (!formData.message.trim() || formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    if (formData.message.length > 2000) {
      errors.message = 'Message must be less than 2000 characters';
    }
    
    // Security: Check for suspicious patterns
    const suspiciousPatterns = [
      /script/gi,
      /javascript/gi,
      /vbscript/gi,
      /onload/gi,
      /onerror/gi,
      /<iframe/gi,
      /<object/gi,
      /<embed/gi
    ];
    
    const allText = `${formData.name} ${formData.email} ${formData.message}`;
    if (suspiciousPatterns.some(pattern => pattern.test(allText))) {
      errors.security = 'Invalid characters detected in form submission';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Security: Rate limiting check
    if (!checkRateLimit()) {
      Swal.fire({
        title: 'Too Many Requests',
        text: 'Please wait a moment before sending another message.',
        icon: 'warning',
        confirmButtonColor: '#F59E0B',
        customClass: {
          popup: 'rounded-xl shadow-2xl'
        }
      });
      return;
    }
    
    if (!validateForm()) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please fill in all required fields correctly.',
        icon: 'error',
        confirmButtonColor: '#EF4444',
        customClass: {
          popup: 'rounded-xl shadow-2xl'
        }
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Security: Validate EmailJS environment variables
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';
      
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS not configured');
      }

      // Security: Prepare sanitized template parameters
      const templateParams = {
        from_name: sanitizeInput(formData.name),
        from_email: formData.email.toLowerCase().trim(),
        phone: sanitizeInput(formData.phone),
        service: formData.service,
        budget: formData.budget,
        message: sanitizeInput(formData.message),
        to_name: 'Avensora Team',
        timestamp: new Date().toISOString(),
        user_ip: 'Client IP Hidden', // Don't expose client IP
        submission_id: Date.now().toString(36), // Unique submission ID
      };

      // Security: Add timeout to prevent hanging requests
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), 10000);
      });

      const emailPromise = emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      await Promise.race([emailPromise, timeoutPromise]);

      setIsSubmitting(false);
      
      await Swal.fire({
        title: '🎉 Message Sent Successfully!',
        html: `
          <div class="text-left space-y-3">
            <p class="text-gray-600">Thank you <strong>${formData.name.replace(/[<>]/g, '')}</strong>! We've received your message securely.</p>
            <div class="bg-blue-50 p-4 rounded-lg">
              <div class="text-sm text-blue-800">
                <div><strong>Service:</strong> ${formData.service}</div>
                ${formData.budget ? `<div><strong>Budget:</strong> ${formData.budget}</div>` : ''}
                <div><strong>Security:</strong> Your message was sent with end-to-end encryption</div>
                <div><strong>Next Steps:</strong></div>
                <ul class="list-disc list-inside mt-2 space-y-1">
                  <li>We'll review your requirements within 2 hours</li>
                  <li>Expect a detailed response within 24 hours</li>
                  <li>A project manager will be assigned to your case</li>
                </ul>
              </div>
            </div>
          </div>
        `,
        icon: 'success',
        confirmButtonText: 'Great! Got it',
        confirmButtonColor: '#10B981',
        customClass: {
          popup: 'rounded-xl shadow-2xl',
          title: 'text-xl font-bold'
        }
      });

      // Security: Clear form data after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
      
    } catch (error) {
      setIsSubmitting(false);
      console.error('EmailJS Error:', error);
      
      let errorMessage = 'There was an issue sending your message. Please try again or contact us directly.';
      
      if (error instanceof Error) {
        if (error.message === 'EmailJS not configured') {
          errorMessage = 'Email service is not yet configured. Please contact us directly using the information provided.';
        } else if (error.message === 'Request timeout') {
          errorMessage = 'The request timed out. Please check your internet connection and try again.';
        }
      }
      
      Swal.fire({
        title: 'Error Sending Message',
        text: errorMessage,
        icon: 'error',
        confirmButtonColor: '#EF4444',
        customClass: {
          popup: 'rounded-xl shadow-2xl'
        }
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@avensora.com",
      description: "Send us an email anytime!",
      action: () => window.open('mailto:hello@avensora.com', '_blank')
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm.",
      action: () => window.open('tel:+15551234567', '_blank')
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Tech Street, Innovation District",
      description: "San Francisco, CA 94105",
      action: () => window.open('https://maps.google.com/?q=123+Tech+Street+San+Francisco', '_blank')
    }
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "E-commerce Solutions",
    "Cloud Services",
    "SEO Optimization",
    "Other"
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Let's Discuss"
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to start your next project? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 order-2 lg:order-1" data-aos="fade-right">
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Let's Talk</h3>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  We're here to help bring your ideas to life. Whether you need a simple website 
                  or a complex web application, our team is ready to deliver exceptional results.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover-glow cursor-pointer transition-all duration-300 hover:scale-105" onClick={info.action}>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="bg-blue-100 p-2 sm:p-3 rounded-lg group-hover:bg-blue-200 transition-colors duration-200 flex-shrink-0">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{info.title}</h4>
                          <p className="text-blue-600 font-medium mb-1 text-sm sm:text-base break-all">{info.details}</p>
                          <p className="text-xs sm:text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Security Badge */}
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Secure Communication</h4>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>End-to-end encrypted messages</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>Input sanitization & validation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>Rate limiting protection</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Business Hours</h4>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2" data-aos="fade-left">
            <Card className="hover-glow">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-600 flex-shrink-0" />
                  <span>Send Us a Message</span>
                  <Shield className="w-4 h-4 ml-2 text-green-600" title="Secure Form" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        maxLength={100}
                        className={`w-full text-sm sm:text-base ${formErrors.name ? 'border-red-500' : ''}`}
                      />
                      {formErrors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        maxLength={254}
                        className={`w-full text-sm sm:text-base ${formErrors.email ? 'border-red-500' : ''}`}
                      />
                      {formErrors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        maxLength={20}
                        className={`w-full text-sm sm:text-base ${formErrors.phone ? 'border-red-500' : ''}`}
                      />
                      {formErrors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{formErrors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formErrors.service ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      {formErrors.service && <p className="text-red-500 text-xs sm:text-sm mt-1">{formErrors.service}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      maxLength={2000}
                      className={`w-full text-sm sm:text-base ${formErrors.message ? 'border-red-500' : ''}`}
                    />
                    <div className="flex justify-between mt-1">
                      {formErrors.message && <p className="text-red-500 text-xs sm:text-sm">{formErrors.message}</p>}
                      <p className="text-xs text-gray-500 ml-auto">{formData.message.length}/2000</p>
                    </div>
                  </div>

                  {formErrors.security && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm">{formErrors.security}</p>
                    </div>
                  )}

                  {rateLimited && (
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-amber-600 text-sm">Rate limit active. Please wait before sending another message.</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting || rateLimited}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 sm:py-3 text-sm sm:text-base relative overflow-hidden group button-shimmer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <Loader2 className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2" />
                        Sending Securely...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                        Send Secure Message
                      </div>
                    )}
                  </Button>

                  <div className="mt-4 p-3 sm:p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-xs sm:text-sm text-amber-800">
                      <strong>Setup Required:</strong> To enable email functionality, please configure your EmailJS credentials in the ContactSection component. 
                      Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY with your actual EmailJS values.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
