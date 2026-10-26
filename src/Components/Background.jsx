import React from 'react';

// Fixed ambient backdrop behind every page: drifting green/gold glows, a faded
// dot grid, and an edge vignette.
const Background = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div className="bg-glow bg-glow-a" />
    <div className="bg-glow bg-glow-b" />
    <div className="bg-glow bg-glow-c" />
    <div className="bg-dots" />
    <div className="bg-vignette" />
  </div>
);

export default Background;
