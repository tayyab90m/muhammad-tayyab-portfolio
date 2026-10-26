import React from 'react';
import Reveal from './Reveal';
import SplitText from './SplitText';

// Opening block for inner pages: small label, giant title, optional intro columns.
const PageHero = ({ label, title, count, children }) => (
  <section className="pb-16 pt-36 md:pb-24 md:pt-48">
    <div className="shell">
      <Reveal variant="left">
        <p className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          <span className="h-px w-10 bg-accent" />
          {label}
        </p>
      </Reveal>
      <h1 className="font-display text-[clamp(2.6rem,9vw,7.5rem)] font-extrabold uppercase leading-[0.86] tracking-tighter">
        <SplitText text={title} />
        {count && (
          <sup className="ml-2 align-super font-display text-[0.22em] font-semibold tracking-normal text-accent">
            ({count})
          </sup>
        )}
      </h1>
      {children && (
        <Reveal delay={300}>
          <div className="mt-12 grid gap-6 border-t border-line/15 pt-8 text-lg leading-relaxed text-muted md:grid-cols-2 md:gap-16">
            {children}
          </div>
        </Reveal>
      )}
    </div>
  </section>
);

export default PageHero;
