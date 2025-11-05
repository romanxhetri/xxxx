import React, { useState, useEffect, useMemo } from 'react';
import type { MenuItem as MenuItemType } from '../types';
import { getMenuItems } from '../services/geminiService';
import MenuItem from './MenuItem';
import LoadingSpinner from './LoadingSpinner';
import MenuItemModal from './MenuItemModal';

const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const data = await getMenuItems();
        setMenuItems(data);
        setError(null);
      } catch (err) {
        setError('Could not load our menu. Our chefs are working on it!');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const categories = useMemo(() => {
    if (menuItems.length === 0) return [];
    return ['All', ...Array.from(new Set(menuItems.map(item => item.category)))];
  }, [menuItems]);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return menuItems;
    }
    return menuItems.filter(item => item.category === activeCategory);
  }, [menuItems, activeCategory]);

  return (
    <>
      <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      <section id="menu" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-serif text-center mb-2 text-white">Our Menu</h2>
          <p className="text-lg text-gray-400 text-center mb-12">Crafted with passion, served with a smile.</p>
          
          {loading && <div className="flex justify-center"><LoadingSpinner /></div>}
          {error && <p className="text-center text-red-400">{error}</p>}
          
          {!loading && !error && (
            <>
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
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Menu;