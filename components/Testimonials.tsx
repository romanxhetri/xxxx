import React from 'react';
import { testimonialsData as testimonials } from '../data/staticData';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-serif text-center mb-2 text-white">From Our Friends</h2>
        <p className="text-lg text-gray-400 text-center mb-12">We love our customers, and they seem to like us too!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;