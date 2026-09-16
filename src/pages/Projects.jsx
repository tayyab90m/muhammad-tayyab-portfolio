import React from 'react';
import { Briefcase } from 'lucide-react';
import Reveal from '../Components/Reveal';
import projects from '../data/projectsData';

const Projects = () => {
  return (
    <div className="pt-36 pb-16 md:pt-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="text-slate-900 dark:text-white" size={44} />
          <h1 className="text-4xl font-bold text-slate-950 dark:text-white">Featured Projects</h1>
        </div>
        <p className="text-slate-600 dark:text-gray-300 text-lg mb-12 max-w-3xl">
          A collection of projects I've contributed to as a software engineer, spanning e-commerce platforms, sports data, health & fitness, and internal SaaS dashboards. Each one draws on React.js, Next.js, Node.js, and real-time API integrations.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Reveal key={project.title} delay={(index % 2) * 100}>
                <article
                  className="glow-border overflow-hidden rounded-3xl border border-[#dbd9d9] bg-white text-slate-950 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-black/20"
                >
                  <div className="w-full h-56 bg-slate-900 flex items-center justify-center dark:bg-slate-950">
                    <IconComponent className="text-white" size={100} strokeWidth={1.5} />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-slate-900 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 dark:bg-white/10">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 border-t border-[#dbd9d9] pt-4 dark:border-gray-700">
                      {project.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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

export default Projects;
