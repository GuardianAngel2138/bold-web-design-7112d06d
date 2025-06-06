import React from 'react';
import AnimatedCounter from './AnimatedCounter';
interface GlobalCountersProps {
  className?: string;
  layout?: 'horizontal' | 'vertical' | 'grid';
  showIcons?: boolean;
}
const GlobalCounters: React.FC<GlobalCountersProps> = ({
  className = '',
  layout = 'grid',
  showIcons = true
}) => {
  const counters = [{
    end: 500,
    suffix: '+',
    label: 'Projects Completed',
    icon: '🚀',
    color: 'text-blue-600'
  }, {
    end: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: '⭐',
    color: 'text-green-600'
  }, {
    end: 50,
    suffix: '+',
    label: 'Team Members',
    icon: '👥',
    color: 'text-purple-600'
  }, {
    end: 5,
    suffix: '+',
    label: 'Years Experience',
    icon: '📅',
    color: 'text-orange-600'
  }];
  const getLayoutClasses = () => {
    switch (layout) {
      case 'horizontal':
        return 'flex flex-wrap gap-8 justify-center';
      case 'vertical':
        return 'flex flex-col gap-6';
      case 'grid':
      default:
        return 'grid grid-cols-2 md:grid-cols-4 gap-8';
    }
  };
  return <div className={`${getLayoutClasses()} ${className}`}>
      {counters.map((counter, index) => <div key={index} className="text-center group cursor-pointer">
          {showIcons}
          <AnimatedCounter end={counter.end} suffix={counter.suffix} className={`text-3xl font-bold mb-2 transition-colors duration-200`} />
          <div className="text-sm text-gray-600">{counter.label}</div>
        </div>)}
    </div>;
};
export default GlobalCounters;