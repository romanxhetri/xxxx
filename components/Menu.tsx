import React, { useState, useMemo } from 'react';
import type { MenuItem as MenuItemType } from '../types';
import { menuItemsData } from '../data/staticData';
import MenuItem from './MenuItem';
import MenuItemModal from './MenuItemModal';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);

  const categories = useMemo(() => {
    if (menuItemsData.length === 0) return [];
    const uniqueCategories = [...new Set(menuItemsData.map(item => item.category))];
    // Ensure a specific order
    const preferredOrder = ['Starters', 'Potato Mains', 'Hearty Mains', 'Sides', 'Desserts', 'Beverages'];
    return ['All', ...preferredOrder.filter(cat => uniqueCategories.includes(cat))];
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return menuItemsData;
    }
    return menuItemsData.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      <section id="menu" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-serif text-center mb-2 text-white">Our Menu</h2>
          <p className="text-lg text-gray-400 text-center mb-12">Crafted with passion, served with a smile.</p>
          
          <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                  activeCategory === category 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map(item => (
              <MenuItem key={item.id} item={item} onSelect={() => setSelectedItem(item)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;