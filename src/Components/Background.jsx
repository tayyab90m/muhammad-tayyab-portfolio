import React from 'react';

// Fixed backdrop behind every page: soft green/gold glows, a faded gold grid,
// twinkling stars, and an edge vignette.
const Background = () => (
  <div className="backdrop pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div className="backdrop-grid" />
    <div className="backdrop-stars" />
    <div className="backdrop-vignette" />
  </div>
);

export default Background;
