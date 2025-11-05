import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-amber-500/20 pt-10 pb-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="mb-6">
          <a href="#" className="flex items-center justify-center space-x-2">
            <span className="text-3xl font-bold font-serif text-white">Potato</span>
            <span className="text-3xl font-bold font-serif text-amber-400">& Friends</span>
          </a>
          <p className="mt-4 max-w-md mx-auto">
            Your friendly neighborhood spot for delicious, heartwarming comfort food.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">Facebook</a>
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">Twitter</a>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Potato & Friends. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;