import React from 'react';
import useInView from '../hooks/useInView';

// Headline whose words rise out of a mask one after another when scrolled into view.
const SplitText = ({ text, as: Tag = 'span', className = '', delay = 0, stagger = 70 }) => {
  const [ref, visible] = useInView();
  const words = text.split(' ');

  return (
    <Tag ref={ref} className={`${className}${visible ? ' split-visible' : ''}`}>
      <span className="sr-only">{text}</span>
      {words.map((word, index) => (
        <React.Fragment key={`${word}-${index}`}>
          <span className="split-word" aria-hidden="true">
            <span style={{ transitionDelay: `${delay + index * stagger}ms` }}>{word}</span>
          </span>
          {index < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </Tag>
  );
};

export default SplitText;
