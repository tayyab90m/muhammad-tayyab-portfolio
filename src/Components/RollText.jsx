import React from 'react';

// Rolls up to a copy of itself when an ancestor with the `group` class is hovered.
const RollText = ({ children }) => (
  <span className="roll">
    <span className="roll-inner">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  </span>
);

export default RollText;
