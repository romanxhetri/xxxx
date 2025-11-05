import React, { useState, useEffect } from 'react';
import type { Testimonial } from '../types';
import { getTestimonials } from '../services/geminiService';
import TestimonialCard from './TestimonialCard';
import LoadingSpinner from './LoadingSpinner';

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const data = await getTestimonials();
        setTestimonials(data);
        setError(null);
      // FIX: The `catch` block does not use arrow function syntax. This was causing cascading scope errors.
      } catch (err) {
        setError('Could not fetch testimonials at this moment.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-serif text-center mb-2 text-white">From Our Friends</h2>
        <p className="text-lg text-gray-400 text-center mb-12">We love our customers, and they seem to like us too!</p>
        
        {loading && <div className="flex justify-center"><LoadingSpinner /></div>}
        {error && <p className="text-center text-red-400">{error}</p>}
        
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
