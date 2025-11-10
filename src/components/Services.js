import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, MapPin, Globe, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Project Management',
      description: 'Complete project management services including planning, execution, and delivery.',
      accentClass: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
      features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Quality Control']
    },
    {
      icon: Package,
      title: 'Delivery Management',
      description: 'Expert delivery management services for complex projects and multi-phase implementations.',
      accentClass: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
      features: ['Multi-Phase Delivery', 'Timeline Management', 'Stakeholder Coordination', 'Progress Tracking']
    },
    {
      icon: Globe,
      title: 'Process Optimization',
      description: 'Engineered process optimization solutions for improved efficiency and faster delivery.',
      accentClass: 'bg-green-500/10 border-green-500/30 text-green-400',
      features: ['Process Analysis', 'Cost Optimization', 'Enhanced Efficiency', 'Technology Integration']
    },
    {
      icon: MapPin,
      title: 'Implementation & Rollout',
      description: 'Nationwide implementation services for customized project rollouts and system deployments.',
      accentClass: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
      features: ['System Implementation', 'Training & Support', 'Rollout Management', 'Change Management']
    },
    {
      icon: Truck,
      title: 'Quality Assurance',
      description: 'Comprehensive quality assurance and testing services to ensure successful project completion.',
      accentClass: 'bg-red-500/10 border-red-500/30 text-red-400',
      features: ['Quality Testing', 'Performance Validation', 'Compliance Verification', 'Customer Satisfaction']
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-800">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            Our Services
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Comprehensive project delivery and management solutions for businesses nationwide
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-900/80 backdrop-blur-sm rounded-xl p-8 shadow-hard hover:shadow-gold transition-all duration-300 border border-secondary-600/30 group"
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border ${service.accentClass || 'bg-secondary-500/20 border-secondary-600/30 text-secondary-400'}`}>
                <service.icon className="w-8 h-8 text-current" />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-secondary-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-secondary-300">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <a
                href={`/${service.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                className="inline-flex items-center text-secondary-400 font-semibold hover:text-secondary-300 transition-colors group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-2xl p-12 text-dark-900 shadow-gold">
            <h3 className="text-3xl font-bold mb-4 font-display">
              Ready to Deliver Together?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss your project delivery and management needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn bg-dark-900 text-secondary-400 hover:bg-dark-800 btn-large">
                Get a Quote
              </a>
              <a href="tel:1-800-PRO-DEL" className="btn border-2 border-dark-900 text-dark-900 hover:bg-dark-900 hover:text-secondary-400 btn-large">
                Call 1-800-PRO-DEL
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
