import React from 'react';
import { BriefcaseBusiness, CalendarDays, Layers, Rocket } from 'lucide-react';
import Reveal from '../Components/Reveal';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Keeyu',
    period: '2023 - Present',
    icon: Rocket,
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
    icon: Layers,
    points: [
      'Developed frontend screens and components with React.js and Next.js, integrating REST APIs and keeping UI state in sync with backend data.',
      'Implemented GraphQL queries on the frontend using Apollo Client, with proper loading and error handling for dynamic content.',
      'Contributed to Node.js backend services, writing API routes and handlers to support new frontend features and fix QA-reported issues.',
      'Built React Native screens for mobile features, reusing existing logic and adapting UI components to mobile layouts.',
    ],
  },
];

const Experience = () => {
  return (
    <div className="pt-36 pb-16 md:pt-44">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <BriefcaseBusiness className="text-blue-500 dark:text-blue-400" size={44} />
            <h1 className="text-4xl font-bold text-slate-950 dark:text-white">Experience</h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-gray-300">
            Practical software engineering experience across web apps, mobile apps, dashboards,
            e-commerce systems, sports products, payment flows, and AI-assisted development workflows.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <Reveal key={experience.role} delay={index * 100}>
                <article
                  className="glow-border group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/20"
                >
                  <div className="bg-slate-900 p-6 text-white dark:bg-slate-950">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-blue-400">
                        <Icon size={34} />
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-300">
                        <CalendarDays size={16} />
                        {experience.period}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold">{experience.role}</h2>
                    <p className="mt-2 text-white/85">{experience.company}</p>
                  </div>
                  <div className="space-y-4 p-6">
                    {experience.points.map((point) => (
                      <div key={point} className="flex gap-3 text-slate-600 dark:text-gray-300">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                        <p className="leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
