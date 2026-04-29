import React from 'react';
import { BriefcaseBusiness, CalendarDays, Code2, Layers, Rocket, Sparkles } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Modern Web & Mobile Products',
    period: '2024 - Present',
    icon: Rocket,
    gradient: 'from-blue-500 to-purple-600',
    points: [
      'Building scalable React, Next.js, and React Native interfaces for production products.',
      'Integrating REST APIs, GraphQL, payment flows, analytics, and real-time product features.',
      'Improving performance, reusable components, and maintainable frontend architecture.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'E-commerce, Fitness, Sports & SaaS Platforms',
    period: '2022 - 2024',
    icon: Layers,
    gradient: 'from-cyan-500 to-blue-600',
    points: [
      'Delivered responsive dashboards, landing pages, checkout flows, and customer-facing modules.',
      'Converted business requirements into polished UI using Tailwind CSS, Redux, and component-driven patterns.',
      'Worked closely with backend and QA teams to ship reliable features with clean user journeys.',
    ],
  },
  {
    role: 'React Native Developer',
    company: 'Cross-platform Mobile Apps',
    period: '2022 - Present',
    icon: Code2,
    gradient: 'from-emerald-500 to-teal-600',
    points: [
      'Developed mobile screens, navigation flows, reusable UI elements, and API-connected features.',
      'Focused on smooth interactions, consistent design systems, and production-ready mobile UX.',
      'Handled app state, forms, authentication flows, and data-driven screens.',
    ],
  },
  {
    role: 'AI-assisted Development',
    company: 'Cursor, AI Tools & Workflow Automation',
    period: 'Ongoing',
    icon: Sparkles,
    gradient: 'from-fuchsia-500 to-pink-600',
    points: [
      'Using AI tools like Cursor, ChatGPT, and workflow assistants to accelerate planning, debugging, and implementation.',
      'Exploring AI-powered product features, automation ideas, and smarter developer workflows.',
      'Combining engineering judgment with AI assistance to move faster while keeping code quality high.',
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
          {experiences.map((experience) => {
            const Icon = experience.icon;
            return (
              <article
                key={experience.role}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/20"
              >
                <div className={`bg-gradient-to-br ${experience.gradient} p-6 text-white`}>
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                      <Icon size={34} />
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
