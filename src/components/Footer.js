import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Project Management', path: '/project-management' },
      { name: 'Delivery Management', path: '/delivery-management' },
      { name: 'Process Optimization', path: '/process-optimization' },
      { name: 'Implementation & Rollout', path: '/implementation-rollout' },
      { name: 'Quality Assurance', path: '/quality-assurance' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Projects', path: '/projects' },
      { name: 'Careers', path: '/careers' },
      { name: 'News & Articles', path: '/news' },
      { name: 'Contact Us', path: '/contact' }
    ],
    resources: [
      { name: 'Project Tracking', path: '/project-tracking' },
      { name: 'Delivery Status', path: '/delivery-status' },
      { name: 'Progress Reports', path: '/progress-reports' },
      { name: 'Quality Metrics', path: '/quality-metrics' },
      { name: 'Customer Support', path: '/customer-support' }
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
                <span className="text-dark-900 font-bold text-lg">PD</span>
              </div>
              <span className="text-xl font-bold font-display">ProDel Management</span>
            </div>
            
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Founded in 1999, ProDel Management is one of the nation's most trusted 
              project delivery and management service providers, specializing in project management, 
              delivery optimization, and implementation solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary-500" />
                <span className="text-secondary-300">1-800-PRO-DEL</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary-500" />
                <span className="text-secondary-300">info@prodelmanagement.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary-500" />
                <span className="text-secondary-300">Project Sites Nationwide</span>
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
              © {currentYear} ProDel Management. All rights reserved.
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
