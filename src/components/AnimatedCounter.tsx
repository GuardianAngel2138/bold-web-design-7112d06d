
import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  suffix = '',
  duration = 2000,
  className = ''
}) => {
  const { count, ref } = useCountUp({ end, duration });

  return (
    <div ref={ref} className={className}>
      {count}{suffix}
    </div>
  );
};

export default AnimatedCounter;
