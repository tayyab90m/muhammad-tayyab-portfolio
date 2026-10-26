import React from 'react';
import Reveal from './Reveal';
import SplitText from './SplitText';

// Numbered editorial section header: "01 / About" label beside a large title.
const SectionHeading = ({ index, label, title, children, aside }) => (
  <div className="mb-14 grid gap-6 border-t border-line/15 pt-6 md:mb-20 md:grid-cols-[220px_1fr]">
    <Reveal variant="left">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">
        <span className="text-accent">{index}</span> / {label}
      </p>
    </Reveal>
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <SplitText
          as="h2"
          text={title}
          className="block font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl"
        />
        {children && (
          <Reveal delay={200}>
            <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{children}</div>
          </Reveal>
        )}
      </div>
      {aside}
    </div>
  </div>
);

export default SectionHeading;
