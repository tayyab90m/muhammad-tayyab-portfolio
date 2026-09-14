import React, { useEffect, useRef, useState, cloneElement } from 'react';

const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0, rootMargin: '0px 0px 200px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const child = React.Children.only(children);

  return cloneElement(child, {
    ref,
    className: `${child.props.className || ''} reveal${visible ? ' reveal-visible' : ''}`,
    style: { ...(child.props.style || {}), transitionDelay: `${delay}ms` },
  });
};

export default Reveal;
