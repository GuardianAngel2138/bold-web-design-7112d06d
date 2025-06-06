
import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const PortfolioCounters = () => {
  const stats = [
    { number: 500, suffix: '+', label: 'Projects Completed' },
    { number: 98, suffix: '%', label: 'Client Satisfaction' },
    { number: 150, suffix: '+', label: 'Happy Clients' },
    { number: 50, suffix: '+', label: 'Awards Won' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">
            <AnimatedCounter end={stat.number} suffix={stat.suffix} />
          </div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioCounters;
