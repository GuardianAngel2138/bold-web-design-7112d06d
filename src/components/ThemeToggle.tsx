
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="relative overflow-hidden bg-background/80 backdrop-blur-sm border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun 
          className={`absolute w-5 h-5 transition-all duration-500 ease-in-out transform ${
            theme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-0 opacity-0'
          }`}
        />
        
        {/* Moon Icon */}
        <Moon 
          className={`absolute w-5 h-5 transition-all duration-500 ease-in-out transform ${
            theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
      
      {/* Animated background glow */}
      <div className={`absolute inset-0 rounded-md transition-all duration-300 ${
        theme === 'light' 
          ? 'bg-gradient-to-r from-yellow-100/20 to-orange-100/20' 
          : 'bg-gradient-to-r from-blue-100/20 to-purple-100/20'
      } opacity-0 group-hover:opacity-100`} />
    </Button>
  );
};

export default ThemeToggle;
