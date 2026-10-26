import React from 'react';
import { Asterisk } from 'lucide-react';

const Marquee = ({
  items,
  speed = 30,
  reverse = false,
  className = '',
  itemClassName = '',
  separator = <Asterisk className="text-accent" size="0.8em" />,
}) => (
  <div className={`marquee${reverse ? ' marquee-reverse' : ''} ${className}`} style={{ '--speed': `${speed}s` }}>
    {[0, 1].map((copy) => (
      <div key={copy} className="marquee-track" aria-hidden={copy === 1}>
        {items.map((item) => (
          <span key={item} className={`flex shrink-0 items-center gap-[0.5em] whitespace-nowrap px-[0.25em] ${itemClassName}`}>
            {item}
            {separator}
          </span>
        ))}
      </div>
    ))}
  </div>
);

export default Marquee;
