import React, { useRef } from 'react';
import useScrollProgress from '../hooks/useScrollProgress';

// Paragraph whose words fade from dim to full ink as it scrolls up the screen.
const ScrollHighlight = ({ text, className = '' }) => {
  const ref = useRef(null);
  useScrollProgress(ref, { start: 0.85, end: 0.45 });
  const words = text.split(' ');

  return (
    <p ref={ref} className={`scroll-highlight ${className}`} style={{ '--n': words.length }}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} style={{ '--i': index }}>
          {word}{' '}
        </span>
      ))}
    </p>
  );
};

export default ScrollHighlight;
