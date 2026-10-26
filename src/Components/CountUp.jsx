import React, { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';

const CountUp = ({ value, suffix = '', duration = 1800 }) => {
  const [ref, visible] = useInView();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!visible) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrent(value);
      return undefined;
    }

    let frame = 0;
    const startTime = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - startTime) / duration);
      setCurrent(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, value, duration]);

  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  );
};

export default CountUp;
