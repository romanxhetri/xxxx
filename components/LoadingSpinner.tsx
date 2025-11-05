
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400 delay-200"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400 delay-400"></div>
        <span className="ml-4 text-lg text-gray-300">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
