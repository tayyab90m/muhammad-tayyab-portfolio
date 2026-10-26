import React from 'react';
import { CalendarDays } from 'lucide-react';
import Reveal from '../Components/Reveal';
import PageHero from '../Components/PageHero';
import Marquee from '../Components/Marquee';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Keeyu',
    period: '2023 - Present',
    points: [
      'Build and maintain frontend features with React.js and Next.js, integrating REST APIs and handling complex UI state for responsive, user-friendly interfaces.',
      'Consume and manage GraphQL queries and mutations on the frontend, and develop backend API endpoints with Node.js and Fastify.',
      'Work with Next.js SSR and SSG to improve page load performance and SEO, configuring data fetching per content requirements.',
      'Built and maintain a shared React component library used across multiple features, and collaborate with designers and backend engineers through sprint planning, standups, and code review.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Eritheia Labs',
    period: '2022 - 2023',
    points: [
      'Developed frontend screens and components with React.js and Next.js, integrating REST APIs and keeping UI state in sync with backend data.',
      'Implemented GraphQL queries on the frontend using Apollo Client, with proper loading and error handling for dynamic content.',
      'Contributed to Node.js backend services, writing API routes and handlers to support new frontend features and fix QA-reported issues.',
      'Built React Native screens for mobile features, reusing existing logic and adapting UI components to mobile layouts.',
    ],
  },
];

const stack = ['React.js', 'Next.js', 'GraphQL', 'Apollo Client', 'Node.js', 'Fastify', 'React Native', 'SSR / SSG', 'REST APIs'];

const Experience = () => {
  return (
    <>
      <PageHero label="Career" title="Experience" count={String(experiences.length).padStart(2, '0')}>
        <p>
          Practical software engineering experience across web apps, mobile apps, dashboards,
          e-commerce systems, sports products, and payment flows.
        </p>
        <p>
          Day to day I work across the stack — React and Next.js on the front, Node.js and Fastify
          behind it — with AI-assisted workflows speeding up every step.
        </p>
      </PageHero>

      <section className="pb-20">
        <div className="shell">
          {experiences.map((experience, index) => (
            <article
              key={experience.role}
              className="grid gap-10 border-t border-line/15 py-14 md:grid-cols-[1fr_1.3fr] md:gap-16 md:py-24"
            >
              <div className="md:sticky md:top-32 md:self-start">
                <Reveal variant="left">
                  <div>
                    <p className="text-outline font-display text-7xl font-extrabold leading-none md:text-8xl">
                      0{index + 1}
                    </p>
                    <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-on-accent">
                      <CalendarDays size={15} />
                      {experience.period}
                    </p>
                    <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
                      {experience.company}
                    </h2>
                    <p className="mt-3 text-xl text-muted">{experience.role}</p>
                  </div>
                </Reveal>
              </div>

              <ol className="space-y-8">
                {experience.points.map((point, pointIndex) => (
                  <Reveal key={point} delay={pointIndex * 90}>
                    <li className="grid grid-cols-[52px_1fr] gap-4 border-b border-line/10 pb-8 last:border-b-0">
                      <span className="font-display text-lg font-bold text-accent">
                        {String(pointIndex + 1).padStart(2, '0')}
                      </span>
                      <p className="text-base leading-relaxed md:text-lg">{point}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line/15 py-8" aria-label="Stack">
        <Marquee
          items={stack}
          speed={30}
          itemClassName="font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl"
        />
      </section>
      <div className="h-24 md:h-32" />
    </>
  );
};

export default Experience;
