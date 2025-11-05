import React, { useState, useEffect } from 'react';
import type { SpecialOffer } from '../types';
import { getDailySpecials } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';
import { useCart } from '../contexts/CartContext';
import { getMenuItems } from '../services/geminiService';

const Specials: React.FC = () => {
  const [specials, setSpecials] = useState<SpecialOffer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  // This is a mock function. In a real app, the special would have an ID
  // or you'd fetch the corresponding MenuItem to add to the cart.
  const handleAddToCart = async (title: string) => {
    alert(`Added "${title}" to your order! (This is a demo feature)`);
  };

  useEffect(() => {
    const fetchSpecials = async () => {
      try {
        setLoading(true);
        const data = await getDailySpecials();
        setSpecials(data);
        setError(null);
      } catch (err) {
        setError('Could not fetch our delicious specials. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSpecials();
  }, []);

  return (
    <section id="specials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-serif text-center mb-2 text-amber-400">Today's Specials</h2>
        <p className="text-lg text-gray-400 text-center mb-12">Don't miss out on these limited-time comfort creations!</p>
        
        {loading && <div className="flex justify-center"><LoadingSpinner /></div>}
        {error && <p className="text-center text-red-400">{error}</p>}
        
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specials.map((special, index) => (
              <div key={index} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-amber-500/30">
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-3 text-white">{special.title}</h3>
                  <p className="text-gray-300 mb-6">{special.description}</p>
                  <div className="text-4xl font-extrabold text-amber-400 mb-6">{special.price}</div>
                  <button onClick={() => handleAddToCart(special.title)} className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Specials;