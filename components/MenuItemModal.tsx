import React from 'react';
import type { MenuItem } from '../types';
import { useCart } from '../contexts/CartContext';

interface MenuItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

const MenuItemModal: React.FC<MenuItemModalProps> = ({ item, onClose }) => {
  const { addToCart } = useCart();

  if (!item) return null;

  const handleAddToCart = () => {
    addToCart(item);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-transform duration-300 scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={`https://picsum.photos/seed/${item.id}/800/400`} 
            alt={item.name} 
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button onClick={onClose} className="absolute top-4 right-4 bg-gray-900/50 text-white rounded-full p-2 hover:bg-gray-900 transition-colors">
            &times;
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-4xl font-bold font-serif text-amber-400 mb-2">{item.name}</h2>
          <p className="text-lg text-gray-300 mb-6">{item.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-extrabold text-white">${item.price.toFixed(2)}</span>
            <button 
              onClick={handleAddToCart}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              Add to Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemModal;