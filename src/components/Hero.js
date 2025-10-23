import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, HardHat, Shield, Clock, Users } from 'lucide-react';

const Hero = () => {
  const features = [
    {
      icon: HardHat,
      title: 'Expert Construction',
      description: 'Professional civil engineering and construction services'
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully certified with comprehensive safety standards'
    },
    {
      icon: Clock,
      title: 'On-Time Completion',
      description: 'Reliable project delivery within budget and schedule'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Licensed engineers and skilled construction professionals'
    }
  ];

  return (
    <section className="relative pt-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gold-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight font-display"
            >
              Building the{' '}
              <span className="text-secondary-400">Future</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-200 mb-8 leading-relaxed"
            >
              SP Engineering Civil Construction delivers exceptional infrastructure projects 
              with precision, safety, and innovation. From highways to bridges, we build 
              the foundations that connect communities and drive progress.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#contact" className="btn btn-primary btn-large group">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="btn btn-secondary btn-large">
                Learn More
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 shadow-hard hover:shadow-gold transition-all duration-300 border border-secondary-600/30"
              >
                <div className="w-12 h-12 bg-secondary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-secondary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-dark-800/80 backdrop-blur-sm rounded-lg p-6 shadow-hard border border-secondary-600/30">
            <div className="text-3xl font-bold text-secondary-400 mb-2">25+</div>
            <div className="text-secondary-300">Years of Experience</div>
          </div>
          <div className="bg-dark-800/80 backdrop-blur-sm rounded-lg p-6 shadow-hard border border-secondary-600/30">
            <div className="text-3xl font-bold text-secondary-400 mb-2">500+</div>
            <div className="text-secondary-300">Projects Completed</div>
          </div>
          <div className="bg-dark-800/80 backdrop-blur-sm rounded-lg p-6 shadow-hard border border-secondary-600/30">
            <div className="text-3xl font-bold text-secondary-400 mb-2">100+</div>
            <div className="text-secondary-300">Licensed Engineers</div>
          </div>
          <div className="bg-dark-800/80 backdrop-blur-sm rounded-lg p-6 shadow-hard border border-secondary-600/30">
            <div className="text-3xl font-bold text-secondary-400 mb-2">100%</div>
            <div className="text-secondary-300">Safety Record</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-secondary-500 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-secondary-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
