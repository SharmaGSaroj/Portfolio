import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: number;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ children, reverse = false, speed = 32, className = '' }) => {
  return (
    <div className={`group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}>
      <div
        className="flex shrink-0 items-center gap-10 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-10 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee;
