import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, HardHat } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Award,
      number: '25+',
      label: 'Years of Excellence',
      description: 'Delivering since 1999'
    },
    {
      icon: HardHat,
      number: '500+',
      label: 'Projects Completed',
      description: 'Nationwide'
    },
    {
      icon: Users,
      number: '100+',
      label: 'Expert Professionals',
      description: 'Project specialists'
    },
    {
      icon: Target,
      number: '100%',
      label: 'Safety Record',
      description: 'Zero accidents'
    }
  ];

  const values = [
    {
      title: 'Quality',
      description: 'Delivering superior project management services that meet the highest industry standards.'
    },
    {
      title: 'Innovation',
      description: 'Using cutting-edge technology and modern project management solutions.'
    },
    {
      title: 'Safety',
      description: 'Committed to the highest safety standards for our team and customers.'
    },
    {
      title: 'Excellence',
      description: 'Driven to exceed expectations in every project we deliver.'
    }
  ];

  return (
    <section id="about" className="pt-32 pb-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              ProDel Management is one of the nation's most trusted project delivery and management 
              service providers, specializing in project management, delivery optimization, and implementation solutions.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Driven by innovation and supported by our team of expert project managers and delivery specialists, we deliver 
              complex project solutions with precision and excellence. Our commitment to quality 
              and safety has made us a trusted partner for businesses nationwide.
            </p>

            {/* Company Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-3 h-3 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            Our Mission
          </h3>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            To deliver exceptional project delivery and management services 
            that connect businesses and drive operational excellence nationwide. We are committed to 
            delivering projects with the highest standards of quality, safety, and efficiency 
            while exceeding customer expectations.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { year: '1999', title: 'Founded', description: 'ProDel Management established' },
              { year: '2005', title: 'Growth', description: 'National project delivery network' },
              { year: '2015', title: 'Innovation', description: 'Advanced project management technology' },
              { year: 'Today', title: 'Leadership', description: 'Leading project delivery company' }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                <p className="text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
