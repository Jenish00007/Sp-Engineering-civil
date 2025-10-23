import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Fleet Management', path: '/fleet-management' },
      { name: 'General Freight', path: '/general-freight' },
      { name: 'Managed Transportation', path: '/managed-transportation' },
      { name: 'Fulfillment & Distribution', path: '/fulfillment-distribution' },
      { name: 'Final Mile Delivery', path: '/final-mile-delivery' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Projects', path: '/projects' },
      { name: 'Careers', path: '/careers' },
      { name: 'News & Articles', path: '/news' },
      { name: 'Contact Us', path: '/contact' }
    ],
    resources: [
      { name: 'Tracking', path: '/tracking' },
      { name: 'Transit Times', path: '/transit-times' },
      { name: 'Delivery Receipt', path: '/delivery-receipt' },
      { name: 'Fuel Surcharge', path: '/fuel-surcharge' },
      { name: 'Customer Service', path: '/customer-service' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Safety Policy', path: '/safety-policy' },
      { name: 'Environmental Policy', path: '/environmental' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-dark-900 text-white mt-16 px-8 py-16">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-secondary-600 rounded-lg flex items-center justify-center shadow-gold">
                <span className="text-dark-900 font-bold text-lg">ST</span>
              </div>
              <span className="text-xl font-bold font-display">Speedy Transport</span>
            </div>
            
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Founded in 1914, Speedy Transport is one of Canada's largest and most trusted 
              transportation and logistics service providers, specializing in fleet management, 
              general freight, and supply chain solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary-500" />
                <span className="text-secondary-300">800.265.5351</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary-500" />
                <span className="text-secondary-300">information@speedy.ca</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary-500" />
                <span className="text-secondary-300">265 RUTHERFORD RD S, BRAMPTON ON</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-secondary-600 transition-colors border border-secondary-600/30"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary-300 hover:text-secondary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary-300 hover:text-secondary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary-300 hover:text-secondary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-secondary-600/30">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-400 text-sm">
              © {currentYear} Speedy Transport. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-secondary-400 hover:text-secondary-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-secondary-600 rounded-full shadow-gold flex items-center justify-center hover:bg-secondary-700 transition-colors z-50"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
