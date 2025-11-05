import React from 'react';
import type { MenuItem as MenuItemType } from '../types';
import { useCart } from '../contexts/CartContext';

interface MenuItemProps {
  item: MenuItemType;
  onSelect: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onSelect }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent modal from opening when clicking the add button
    addToCart(item);
  };

  return (
    <div 
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full group transform transition-all duration-300 hover:shadow-amber-500/30 hover:-translate-y-2 cursor-pointer"
      onClick={onSelect}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img 
            src={`https://picsum.photos/seed/${item.id}/400/300`} 
            alt={item.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="text-xl font-bold text-white mb-2 truncate">{item.name}</h4>
        <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">{item.description}</p>
        <div className="flex justify-between items-center mt-auto">
            <span className="text-2xl font-bold text-amber-400">${item.price.toFixed(2)}</span>
            <button 
              onClick={handleAddToCart}
              className="bg-amber-500/20 text-amber-300 border border-amber-500/50 hover:bg-amber-500 hover:text-white font-semibold py-2 px-4 rounded-full text-sm transition-colors duration-300 z-10"
            >
                Add
            </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;