import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Zap } from 'lucide-react';
import Timeline from '../Components/Timeline';
import Reveal from '../Components/Reveal';
import SplitText from '../Components/SplitText';
import Marquee from '../Components/Marquee';
import CountUp from '../Components/CountUp';
import ScrollHighlight from '../Components/ScrollHighlight';
import SectionHeading from '../Components/SectionHeading';
import ProjectStack from '../Components/ProjectStack';
import RollText from '../Components/RollText';
import projects from '../data/projectsData';

const Home = () => {

  const startDate = new Date('2022-01-01');
  const now = new Date();

  const diffTime = now - startDate;
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.4375));
  const years = Math.floor(diffMonths / 12);
  const impactStats = [
    { value: years, suffix: '+', label: 'Years experience' },
    { value: 10, suffix: '+', label: 'Products & modules' },
    { value: 3, suffix: '', label: 'Core platforms' },
  ];
  const aboutHighlights = [
    'Build full-stack MERN applications with clean React interfaces and reliable Node.js APIs.',
    'Create reusable components, API-connected dashboards, and mobile-friendly user experiences.',
    'Pair AI coding tools and models with solid engineering judgment to plan, build, and ship features up to 10x faster.',
  ];
  const skillGroups = [
    {
      title: 'Frontend Engineering',
      skills: ['React.js', 'Next.js', 'React Native', 'JavaScript (ES6+)', 'TypeScript', 'Redux Toolkit', 'Zustand', 'Tailwind CSS', 'SCSS'],
    },
    {
      title: 'Backend & APIs',
      skills: ['Node.js', 'Fastify', 'Express.js', 'REST API Development', 'GraphQL (Apollo Client)', 'WebSockets', 'MongoDB'],
    },
    {
      title: 'Tools & Workflow',
      skills: ['Claude Code', 'Cursor', 'Antigravity', 'Windsurf', 'DeepSeek', 'Grok', 'Git & GitHub', 'Postman', 'Vercel', 'Netlify', 'Agile/Scrum', 'Code Review'],
    },
  ];
  const marqueeSkills = ['React.js', 'Next.js', 'React Native', 'Node.js', 'TypeScript', 'MongoDB', 'GraphQL', 'Fastify', 'Tailwind CSS'];
  const marqueeTraits = ['Clean architecture', 'Polished UI', 'Fast delivery', 'AI-assisted', 'Real-time apps', 'Mobile first'];

  return (
    <>
      <section className="relative flex min-h-screen flex-col justify-end pb-12 pt-32 md:pb-16">
        <div className="shell">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              <span className="flex items-center gap-3">
                <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-green-500" />
                Available for work
              </span>
              <span>Full stack engineer — Lahore, PK</span>
            </div>
          </Reveal>

          <h1 className="relative font-display text-[clamp(2.4rem,9vw,8rem)] font-extrabold uppercase leading-[0.88] tracking-tighter">
            <SplitText text="Muhammad" className="block" />
            <span className="block">
              <SplitText text="Tayyab" delay={250} />
              <a
                href="#about"
                className="group absolute bottom-0 right-0 hidden h-28 w-28 items-center justify-center sm:flex lg:h-36 lg:w-36"
                aria-label="Scroll to about section"
              >
                <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 h-full w-full">
                  <defs>
                    <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                  </defs>
                  <text className="fill-current font-sans text-[15px] font-semibold uppercase">
                    <textPath href="#badge-circle" textLength="486" lengthAdjust="spacing">
                      Full stack · AI assisted · Web & mobile ·
                    </textPath>
                  </text>
                </svg>
                <span className="flex h-[38%] w-[38%] items-center justify-center rounded-full bg-accent text-on-accent transition-transform duration-500 group-hover:scale-110">
                  <ArrowDown className="h-1/2 w-1/2" strokeWidth={2.5} />
                </span>
              </a>
            </span>
          </h1>

          <div className="mt-12 grid gap-10 border-t border-line/15 pt-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <Reveal delay={400}>
              <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
                I build <span className="font-semibold text-ink">fast, clean and scalable</span> digital products.
                By pairing solid engineering with AI tools like Claude Code, Cursor, Antigravity and Grok,
                I turn ideas into reliable, launch-ready software in a fraction of the usual time.
              </p>
            </Reveal>
            <Reveal delay={550}>
              <div className="flex flex-col gap-8 lg:items-end">
                <dl className="grid grid-cols-3 divide-x divide-line/15">
                  {impactStats.map((stat) => (
                    <div key={stat.label} className="flex flex-col px-4 first:pl-0 last:pr-0 md:px-8">
                      <dt className="order-2 mt-1 text-xs font-semibold uppercase tracking-wider text-muted">{stat.label}</dt>
                      <dd className="font-display text-3xl font-extrabold md:text-4xl">
                        <CountUp value={stat.value} suffix={stat.suffix} />
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/projects"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold uppercase tracking-wider text-on-accent transition-transform hover:-translate-y-0.5"
                  >
                    <RollText>View projects</RollText>
                    <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:rotate-45" />
                  </Link>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold uppercase tracking-wider ring-1 ring-inset ring-line/25 transition-colors hover:bg-ink hover:text-paper"
                  >
                    <RollText>Contact me</RollText>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden py-16 md:py-24" aria-label="Skills">
        <div className="-mx-4 -rotate-2 bg-accent py-5 text-on-accent md:py-7">
          <Marquee
            items={marqueeSkills}
            speed={35}
            separator={<span className="text-on-accent/40">✦</span>}
            itemClassName="font-display text-xl font-extrabold uppercase tracking-tight md:text-3xl"
          />
        </div>
        <div className="-mx-4 -mt-3 rotate-1 bg-ink py-4 text-paper md:py-5">
          <Marquee
            items={marqueeTraits}
            speed={40}
            reverse
            itemClassName="font-display text-base font-bold uppercase tracking-tight md:text-xl"
          />
        </div>
      </section>

      <section id="about" className="scroll-mt-24 py-24 md:py-32">
        <div className="shell">
          <SectionHeading index="01" label="About" title="Who I am" />
          <ScrollHighlight
            className="font-display text-xl font-semibold leading-[1.3] tracking-tight md:text-3xl lg:text-4xl"
            text={`I'm a full stack MERN engineer with ${years}+ years of building web and mobile products across e-commerce, fitness, sports, dashboards and payments — pairing solid engineering with AI-assisted workflows to ship up to 10x faster, without cutting corners.`}
          />
          <div className="mt-20 grid gap-10 md:grid-cols-4">
            {aboutHighlights.map((highlight, index) => (
              <Reveal key={highlight} delay={index * 120}>
                <div className="border-t border-line/15 pt-5">
                  <p className="mb-4 font-display text-sm font-bold text-accent">0{index + 1}</p>
                  <p className="leading-relaxed text-muted">{highlight}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={aboutHighlights.length * 120}>
              <div className="rounded-3xl bg-ink p-6 text-paper">
                <Zap className="mb-4 text-accent" size={24} />
                <p className="font-display text-lg font-bold">Engineering focus</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">
                  Clean architecture, polished UI, performance, collaboration, and features that are useful in real products.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="shell">
          <SectionHeading index="02" label="Expertise" title="What I do" />
          <div>
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 100}>
                <div className="fill-row grid gap-6 border-t border-line/15 px-2 py-10 last:border-b md:grid-cols-[100px_1fr_1.3fr] md:items-center md:px-6">
                  <span className="font-display text-lg font-bold text-muted">0{index + 1}</span>
                  <h3 className="font-display text-2xl font-extrabold uppercase leading-none tracking-tight md:text-3xl">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="pill">{skill}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="shell">
          <SectionHeading
            index="03"
            label="Selected work"
            title="Featured projects"
            aside={
              <Link
                to="/projects"
                className="group inline-flex shrink-0 items-center gap-2 self-start font-semibold uppercase tracking-wider md:self-end"
              >
                <RollText>All {projects.length} projects</RollText>
                <ArrowUpRight size={18} className="text-accent transition-transform duration-500 group-hover:rotate-45" />
              </Link>
            }
          />
          <ProjectStack projects={projects.slice(0, 4)} />
        </div>
      </section>

      <Timeline />
    </>
  );
}
export default Home;
