import { useEffect } from 'react';

// Writes a 0-1 `--progress` CSS variable onto the element as it scrolls through the
// viewport: 0 when its top reaches `start` (fraction of viewport height), 1 when its
// bottom reaches `end`. Set directly on the node so scrolling never re-renders React.
const useScrollProgress = (ref, { start = 0.9, end = 0.3 } = {}) => {
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      const distance = (start - end) * viewport + rect.height;
      const progress = Math.min(1, Math.max(0, (start * viewport - rect.top) / distance));
      node.style.setProperty('--progress', progress.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref, start, end]);
};

export default useScrollProgress;
