import React, { useEffect, useRef, useState } from 'react';

// Trailing dot that inverts what it passes over and grows over links and buttons.
// The native cursor stays visible; this is decoration only.
const Cursor = () => {
  const ref = useRef(null);
  const [enabled] = useState(
    () =>
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (!enabled) return undefined;
    const node = ref.current;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let frame = 0;

    const loop = () => {
      x += (targetX - x) * 0.2;
      y += (targetY - y) * 0.2;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = requestAnimationFrame(loop);
    };
    const onMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      node.classList.add('cursor-visible');
    };
    const onOver = (event) => {
      node.classList.toggle('cursor-hover', Boolean(event.target.closest('a, button')));
    };
    const onLeave = () => node.classList.remove('cursor-visible');

    frame = requestAnimationFrame(loop);
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div ref={ref} className="cursor" aria-hidden="true">
      <span />
    </div>
  );
};

export default Cursor;
