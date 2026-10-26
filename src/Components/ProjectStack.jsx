import React from 'react';

// Panels cycle through these so consecutive projects never look alike.
const tones = [
  { panel: 'bg-ink text-paper', badge: 'bg-accent text-on-accent' },
  { panel: 'bg-accent text-on-accent', badge: 'bg-on-accent text-accent' },
  { panel: 'bg-surface text-ink', badge: 'bg-ink text-paper' },
];

// Full-width project panels that stick and pile on top of each other while scrolling (md+).
const ProjectStack = ({ projects }) => (
  <div className="space-y-5 md:space-y-0">
    {projects.map((project, index) => {
      const Icon = project.icon;
      const tone = tones[index % tones.length];
      const [name, subtitle] = project.title.split(' – ');

      return (
        <article
          key={project.title}
          className={`group overflow-hidden rounded-[2rem] shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.45)] md:sticky md:mb-[14vh] md:last:mb-0 ${tone.panel}`}
          style={{ top: `${110 + index * 22}px` }}
        >
          <div className="grid gap-10 p-7 sm:p-10 md:min-h-[520px] md:grid-cols-[1.4fr_1fr] md:p-14">
            <div className="flex flex-col">
              <div className="mb-10 flex items-center justify-between gap-4">
                <span className="font-display text-4xl font-extrabold leading-none opacity-30 md:text-5xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${tone.badge}`}>
                  {project.category}
                </span>
              </div>
              <h3 className="font-display text-2xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-4xl">
                {name}
              </h3>
              {subtitle && <p className="mt-3 font-display text-lg font-medium opacity-70 md:text-xl">{subtitle}</p>}
              <p className="mt-6 max-w-2xl leading-relaxed opacity-80">{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {project.highlights.map((tag) => (
                  <span key={tag} className="rounded-full px-4 py-1.5 text-sm font-medium ring-1 ring-inset ring-current">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative hidden items-center justify-center md:flex">
              <div className="spin-slow absolute aspect-square w-[85%] max-w-[340px] rounded-full border-2 border-dashed border-current opacity-25" />
              <Icon
                size={100}
                strokeWidth={1.25}
                className="transition-transform duration-700 ease-out group-hover:-rotate-12 group-hover:scale-110"
              />
            </div>
          </div>
        </article>
      );
    })}
  </div>
);

export default ProjectStack;
