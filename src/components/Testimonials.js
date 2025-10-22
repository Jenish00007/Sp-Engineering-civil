import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "They really understand the cost-sensitive nature of our operations. Their outsourced solution allows us to meet our customers' time-sensitive delivery requirements, and ensures any overflow requests are covered seamlessly.",
      author: "Winnipeg Regional Health Authority",
      position: "Fleet Outsourcing Customer",
      logo: "WRHA"
    },
    {
      quote: "Running our own fleet of trucks was distracting us from our core business. Outsourcing to Canada Cartage improved our on-time performance, and allowed us to focus on what is important – growing our business.",
      author: "Brampton Brick",
      position: "Fleet Management Customer",
      logo: "BB"
    },
    {
      quote: "We are impressed with the wide range of services offered by Canada Cartage but even more so with the increased level of efficiency and quality of service we can now provide to our customers.",
      author: "Bailey Metal Products Ltd.",
      position: "Logistics Partner",
      logo: "BMP"
    },
    {
      quote: "Canada Cartage has been instrumental in helping us scale our operations. Their expertise in fleet management and their commitment to safety and reliability has made them an invaluable partner.",
      author: "Canadian Tire",
      position: "Retail Partner",
      logo: "CT"
    },
    {
      quote: "The level of service and attention to detail we receive from Canada Cartage is exceptional. They truly understand our business needs and deliver solutions that exceed our expectations.",
      author: "Sobeys",
      position: "Food & Beverage Customer",
      logo: "Sobeys"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
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
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our valued customers about their experience with Canada Cartage
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 left-8">
                <Quote className="w-8 h-8 text-blue-600 opacity-30" />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-2xl text-gray-800 text-center mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentIndex].logo}
                  </span>
                </div>
                <div className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].position}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: '98%', label: 'Customer Satisfaction' },
            { number: '99%', label: 'On-Time Delivery' },
            { number: '24/7', label: 'Customer Support' },
            { number: '100+', label: 'Years Combined Experience' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-gray-600 mb-8">
            Join thousands of satisfied customers who trust Canada Cartage
          </p>
          <a href="#contact" className="btn btn-primary btn-large">
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
