import React from 'react';
import { motion } from 'framer-motion';

const Customers = () => {
  const customers = [
    { name: 'Ford Motors', logo: 'Ford' },
    { name: 'TJX Canada', logo: 'TJX' },
    { name: 'Sobeys', logo: 'Sobeys' },
    { name: 'Rodan + Fields', logo: 'R+F' },
    { name: 'Shoppers Drug Mart', logo: 'SDM' },
    { name: 'Home Depot', logo: 'Home Depot' },
    { name: 'Praxair', logo: 'Praxair' },
    { name: 'General Motors', logo: 'GM' },
    { name: 'Loblaws', logo: 'Loblaws' },
    { name: 'Canadian Tire', logo: 'Canadian Tire' },
    { name: 'LCBO', logo: 'LCBO' },
    { name: 'Canada Bread', logo: 'Canada Bread' },
    { name: 'Dollar Tree', logo: 'Dollar Tree' },
    { name: 'Kraft Heinz', logo: 'Kraft Heinz' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies across Canada for their transportation and logistics needs
          </p>
        </motion.div>

        {/* Customer Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8"
        >
          {customers.map((customer, index) => (
            <motion.div
              key={customer.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 font-bold text-lg">
                      {customer.logo.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {customer.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">F</span>
              </div>
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 italic">
              "They really understand the cost-sensitive nature of our operations. Their outsourced solution allows us to meet our customers' time-sensitive delivery requirements, and ensures any overflow requests are covered seamlessly."
            </blockquote>
            <div className="font-semibold text-gray-900">Winnipeg Regional Health Authority</div>
            <div className="text-gray-600">Fleet Outsourcing Customer</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Growing Customer Base
          </h3>
          <p className="text-gray-600 mb-8">
            Discover why leading companies choose Canada Cartage for their transportation needs
          </p>
          <a href="#contact" className="btn btn-primary btn-large">
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Customers;
