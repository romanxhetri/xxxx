import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://picsum.photos/seed/comfortFood/1920/1080" 
                alt="Delicious comfort food" 
                className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-serif mb-4 drop-shadow-lg leading-tight">
                Simply Delicious. <br/> <span className="text-amber-400">Deliciously Simple.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-gray-200 drop-shadow-md">
                Heartwarming comfort food made with love, fresh ingredients, and a touch of magic. Your happy place is just a meal away.
            </p>
            <a 
                href="#menu" 
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110 shadow-xl hover:shadow-amber-500/50"
            >
                Discover Our Food
            </a>
        </div>
    </section>
  );
};

export default Hero;