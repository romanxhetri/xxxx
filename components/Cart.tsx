import React from 'react';
import { useCart } from '../contexts/CartContext';
import type { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      alert(`Thank you for your order! Your total is $${cartTotal.toFixed(2)}. This is a demo and no actual order has been placed.`);
      clearCart();
      onClose();
    } else {
      alert("Your cart is empty!");
    }
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <header className="flex justify-between items-center p-6 border-b border-amber-500/20">
            <h2 className="text-2xl font-bold text-white">Your Order</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">&times;</button>
          </header>
          
          <div className="flex-grow p-6 overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-gray-400 text-center mt-8">Your cart is feeling a bit lonely.</p>
            ) : (
              <ul className="space-y-4">
                {cartItems.map(item => (
                  <li key={item.id} className="flex items-center space-x-4 bg-gray-900 p-3 rounded-lg">
                    <img src={`https://picsum.photos/seed/${item.id}/100/100`} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      <p className="text-amber-400 font-bold">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="number" 
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                        className="w-14 bg-gray-700 text-white text-center rounded-md border border-gray-600"
                        min="1"
                      />
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-400 p-1">&times;</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <footer className="p-6 border-t border-amber-500/20 bg-gray-900">
            <div className="flex justify-between items-center mb-4 text-xl">
              <span className="font-semibold text-gray-300">Total:</span>
              <span className="font-bold text-amber-400">${cartTotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Cart;