import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`mobile-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900 shadow-hard backdrop-blur-md border-b border-secondary-600' : 'bg-dark-900 backdrop-blur-sm border-b border-secondary-500'
      }`}>
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-gold group-hover:shadow-medium transition-all duration-300 group-hover:scale-105">
              <span className="text-dark-900 font-bold text-xl">PD</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-secondary-400 transition-colors font-display">ProDel Management</span>
              <span className="text-xs text-secondary-300 font-medium">Project Delivery</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="relative py-2 px-4 text-white hover:text-secondary-400 transition-all duration-300 font-semibold group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary-500 to-secondary-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-secondary-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-secondary-500" />
                <span className="font-semibold">1-800-PRO-DEL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-secondary-500" />
                <span className="font-semibold">info@prodelmanagement.com</span>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-secondary-400 transition-colors rounded-lg hover:bg-dark-800"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mobile-nav border-t border-secondary-600 bg-dark-900 shadow-hard">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block py-3 px-4 text-lg text-white hover:text-secondary-400 hover:bg-dark-800 rounded-lg transition-all duration-300 font-semibold"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-secondary-600 space-y-4">
                <div className="flex items-center space-x-3 text-secondary-300">
                  <Phone className="w-5 h-5 text-secondary-500" />
                  <span className="font-semibold">1-800-PRO-DEL</span>
                </div>
                <div className="flex items-center space-x-3 text-secondary-300">
                  <Mail className="w-5 h-5 text-secondary-500" />
                  <span className="font-semibold">info@prodelmanagement.com</span>
                </div>
                <div className="flex items-center space-x-3 text-secondary-300">
                  <MapPin className="w-5 h-5 text-secondary-500" />
                  <span className="font-semibold">Project Sites Nationwide</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="btn btn-primary w-full text-center"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
