import React from 'react';
import { ArrowRight, Code2, Database, Download, MonitorSmartphone, Rocket, Sparkles, User, Zap } from 'lucide-react';
import Timeline from '../Components/Timeline';
import Reveal from '../Components/Reveal';

const Home = () => {

  const startDate = new Date('2022-01-01');
  const now = new Date();

  const diffTime = now - startDate;
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.4375));
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  const experience = `${years}.${months}`;
  const impactStats = [
    { value: `${experience}+`, label: 'Years Experience' },
    { value: '10+', label: 'Products & Modules' },
    { value: '3', label: 'Core Platforms' },
  ];
  const aboutHighlights = [
    'Build full-stack MERN applications with clean React interfaces and reliable Node.js APIs.',
    'Create reusable components, API-connected dashboards, and mobile-friendly user experiences.',
    'Use MongoDB, Express, React, Node.js, and AI-assisted tools to ship practical product features.',
  ];
  const skillGroups = [
    {
      title: 'Frontend Engineering',
      icon: MonitorSmartphone,
      skills: ['React.js', 'Next.js', 'React Native', 'JavaScript (ES6+)', 'TypeScript', 'Redux Toolkit', 'Zustand', 'Tailwind CSS', 'SCSS'],
    },
    {
      title: 'Backend & APIs',
      icon: Database,
      skills: ['Node.js', 'Fastify', 'Express.js', 'REST API Development', 'GraphQL (Apollo Client)', 'WebSockets', 'MongoDB'],
    },
    {
      title: 'Tools & Workflow',
      icon: Sparkles,
      skills: ['Git & GitHub', 'Postman', 'Vercel', 'Netlify', 'Cursor', 'Windsurf', 'Agile/Scrum', 'Code Review'],
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden px-4 py-24 md:py-32">
        <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-slate-400/20 blur-3xl dark:bg-slate-500/10" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-300">
              <Sparkles size={16} />
              Full Stack Developer - Node.js, React, Next.js and REST APIs
            </span>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-7xl">
              I build fast, clean, and scalable digital products.
            </h1>
            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-gray-300">
              I am Muhammad Tayyab, a software engineer who turns product ideas into reliable web
              and mobile experiences using React, Next.js, React Native, APIs, MongoDB, and AI-assisted tools.
            </p>
            <div className="mb-8 grid max-w-2xl grid-cols-3 gap-3">
              {impactStats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 80}>
                  <div className="glow-border rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-lg shadow-slate-200/50 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-black/20">
                    <p className="text-2xl font-extrabold text-slate-950 dark:text-white">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-gray-400">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/projects"
                className="glow-btn inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-xl shadow-blue-600/25 transition-transform hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="/contact"
                className="glow-btn inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
              >
                Contact Me
              </a>
              <a
                href="/resume/Muhammad_Tayyab_Resume.pdf"
                download
                className="glow-btn inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>

          <div className="glow-border rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-black/30">
            <div className="rounded-[1.5rem] bg-slate-900 p-6 text-white">
              <div className="mb-10 flex items-center justify-between">
                <div className="rounded-2xl bg-white/10 p-4 text-blue-400">
                  <Rocket size={38} />
                </div>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-300">
                  {experience}+ years
                </span>
              </div>
              <h2 className="text-3xl font-bold">Product-focused engineering</h2>
              <p className="mt-3 text-gray-300">
                From idea to release, I focus on clean UI, practical architecture,
                smooth integrations, and user journeys that feel simple.
              </p>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {['Frontend', 'Mobile', 'Automation'].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-100 p-4 text-sm font-bold text-slate-700 dark:bg-white/10 dark:text-gray-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-20" id="about">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glow-border rounded-[2rem] border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-200/60 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20">
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-2xl bg-blue-500/10 p-3 text-blue-600 dark:text-blue-300">
                <User size={30} />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-300">About Me</p>
                <h2 className="text-3xl font-bold text-slate-950 dark:text-white">Full Stack MERN Developer</h2>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-gray-300">
              I am a Full Stack MERN Stack Developer with <span className="font-semibold text-blue-600 dark:text-blue-400">{experience} years</span> of
              experience building modern web and mobile products across e-commerce, fitness, sports,
              dashboards, and payment-related workflows. I enjoy turning complex requirements into clean
              interfaces, scalable APIs, reusable components, and smooth user experiences.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-gray-300">
              My core stack includes MongoDB, Express.js, React, Node.js, Next.js, and React Native. I focus on
              writing maintainable code, improving performance, solving UX gaps, and using modern tools like
              Cursor and AI assistants wisely to deliver software that creates real value.
            </p>
           
          </div>
          <div className="grid gap-3">
            {aboutHighlights.map((highlight, index) => (
              <Reveal key={highlight} delay={index * 80}>
                <div className="glow-border flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-600 dark:text-blue-300">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">{highlight}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={aboutHighlights.length * 80}>
              <div className="rounded-2xl bg-blue-600 p-5 text-white shadow-xl shadow-blue-500/20">
                <div className="mb-2 flex items-center gap-3">
                  <Zap size={22} />
                  <h3 className="text-lg font-bold">Engineering Focus</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/85">
                  Clean architecture, polished UI, performance, collaboration, and features that are useful in real products.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="px-4 py-20 bg-white/70 dark:bg-gray-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-blue-500 dark:text-blue-400" size={44} />
            <h2 className="text-3xl font-bold text-slate-950 dark:text-white">Core Skills</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Reveal key={group.title} delay={index * 100}>
                  <div className="glow-border rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="rounded-2xl bg-blue-500/10 p-3 text-blue-600 dark:text-blue-300">
                        <Icon size={26} />
                      </span>
                      <h3 className="text-xl font-bold text-slate-950 dark:text-white">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skill) => (
                        <span key={skill} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-white/10 dark:text-gray-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <Timeline />
    </div>
  );
}
export default Home;