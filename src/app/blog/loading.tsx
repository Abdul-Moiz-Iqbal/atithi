// src/components/LoadingSpinner.tsx
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-16 h-16">
        {/* Outer Ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-transparent border-blue-500"></div>
        {/* Inner Circle */}
        <div className="absolute inset-2 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
