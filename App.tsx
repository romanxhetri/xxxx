import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-900">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <main>
          <Hero />
          <Specials />
          <Menu />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;