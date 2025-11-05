import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const BurgerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
);

const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);

interface HeaderProps {
    onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { itemCount } = useCart();

    const navLinks = [
        { name: 'Specials', href: '#specials' },
        { name: 'Menu', href: '#menu' },
        { name: 'Reviews', href: '#testimonials' },
    ];

    return (
        <header className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-40 shadow-lg shadow-amber-500/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center space-x-2">
                    <span className="text-3xl font-bold font-serif text-white">Potato</span>
                    <span className="text-3xl font-bold font-serif text-amber-400">& Friends</span>
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium">
                            {link.name}
                        </a>
                    ))}
                    <button onClick={onCartClick} className="relative text-gray-300 hover:text-amber-400 transition-colors">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        {itemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                {itemCount}
                            </span>
                        )}
                    </button>
                    <a href="#menu" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-md">
                        Order Now
                    </a>
                </nav>
                <div className="md:hidden flex items-center space-x-4">
                     <button onClick={onCartClick} className="relative text-white">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        {itemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">{itemCount}</span>
                        )}
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        {isMenuOpen ? <CloseIcon /> : <BurgerIcon />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium text-lg">
                                {link.name}
                            </a>
                        ))}
                        <a href="#menu" onClick={() => setIsMenuOpen(false)} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-md mt-4">
                            Order Now
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;