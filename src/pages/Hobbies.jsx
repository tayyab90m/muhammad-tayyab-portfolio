import React from 'react';
import { Wind, Footprints, Dumbbell, Dribbble } from 'lucide-react';
import Reveal from '../Components/Reveal';
import PageHero from '../Components/PageHero';
import Marquee from '../Components/Marquee';

const Hobbies = () => {
  const hobbies = [
    {
      name: 'Badminton',
      description: 'Enjoying competitive matches and improving my skills on the court. Badminton helps me develop quick reflexes, strategic thinking, and maintain cardiovascular fitness while having fun.',
      icon: Wind,
      tile: 'bg-accent text-on-accent md:col-span-2 md:row-span-2',
    },
    {
      name: 'Jogging',
      description: 'Early morning runs to stay fit and energized. Running clears my mind, boosts my energy levels, and provides a great opportunity to explore the outdoors while staying healthy.',
      icon: Footprints,
      tile: 'bg-ink text-paper md:col-span-2',
    },
    {
      name: 'Gym',
      description: 'Regular workouts to maintain strength and fitness. Strength training not only builds physical resilience but also improves mental discipline, focus, and overall well-being.',
      icon: Dumbbell,
      tile: 'bg-surface text-ink',
    },
    {
      name: 'Football',
      description: 'Playing football with friends and local teams. Football teaches teamwork, coordination, and provides an excellent cardiovascular workout while building camaraderie with teammates.',
      icon: Dribbble,
      tile: 'text-ink ring-1 ring-inset ring-line/20',
    }
  ];

  return (
    <>
      <PageHero label="Off the clock" title="Hobbies">
        <p>
          I'm someone who thrives on curiosity and continuous learning. In my free time, I enjoy badminton,
          jogging, and football — they keep me energized, focused, and balanced — and the gym helps me build
          both physical and mental resilience.
        </p>
        <p>
          Beyond that, I love exploring new technologies, reading, and challenging myself with new stacks and
          side projects. Solving coding puzzles, learning a framework, or building something from scratch —
          I'm always up for it.
        </p>
      </PageHero>

      <section className="pb-20">
        <div className="shell grid gap-4 md:auto-rows-[300px] md:grid-cols-4">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            const isFeature = index === 0;
            return (
              <Reveal key={hobby.name} delay={index * 100} variant="scale">
                <article className={`group flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[2rem] p-7 md:p-9 ${hobby.tile}`}>
                  <div className="flex items-start justify-between">
                    <IconComponent
                      size={isFeature ? 96 : 52}
                      strokeWidth={1.25}
                      className="transition-transform duration-700 ease-out group-hover:-rotate-12 group-hover:scale-110"
                    />
                    <span className="font-display text-sm font-bold opacity-50">0{index + 1}</span>
                  </div>
                  <div>
                    <h2 className={`font-display font-extrabold uppercase leading-none tracking-tight ${isFeature ? 'text-4xl sm:text-5xl xl:text-6xl' : 'text-3xl'}`}>
                      {hobby.name}
                    </h2>
                    <p className={`mt-4 text-sm leading-relaxed opacity-75 ${isFeature ? 'max-w-md md:text-base' : 'line-clamp-3'}`}>
                      {hobby.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="pb-24 md:pb-32" aria-label="Interests">
        <Marquee
          items={['Badminton', 'Jogging', 'Gym', 'Football', 'Reading', 'New tech', 'Side projects']}
          speed={32}
          reverse
          itemClassName="text-outline font-display text-5xl font-extrabold uppercase tracking-tight md:text-6xl"
        />
      </section>
    </>
  );
};

export default Hobbies;
