import React, { cloneElement } from 'react';
import useInView from '../hooks/useInView';

// variant: 'up' | 'left' | 'right' | 'scale' | 'clip' (see .reveal in index.css)
const Reveal = ({ children, delay = 0, variant = 'up' }) => {
  const [ref, visible] = useInView();
  const child = React.Children.only(children);

  return cloneElement(child, {
    ref,
    'data-reveal': variant,
    className: `${child.props.className || ''} reveal${visible ? ' reveal-visible' : ''}`,
    style: { ...(child.props.style || {}), transitionDelay: `${delay}ms` },
  });
};

export default Reveal;
