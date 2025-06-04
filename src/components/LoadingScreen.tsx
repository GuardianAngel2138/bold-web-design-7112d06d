
import React from 'react';
import { Code2, Loader2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center mb-8">
          <Code2 className="h-12 w-12 text-blue-600 animate-pulse" />
          <span className="text-2xl font-bold gradient-text ml-3">TechCraft Solutions</span>
        </div>
        
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Loader2 className="h-6 w-6 text-blue-600 animate-spin" />
          <span className="text-gray-600 font-medium">Loading your experience...</span>
        </div>
        
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">Preparing something amazing for you</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
