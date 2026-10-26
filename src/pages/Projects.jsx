import React from 'react';
import PageHero from '../Components/PageHero';
import ProjectStack from '../Components/ProjectStack';
import projects from '../data/projectsData';

const Projects = () => {
  return (
    <>
      <PageHero label="Selected work" title="Projects" count={String(projects.length).padStart(2, '0')}>
        <p>
          A collection of projects I've contributed to as a software engineer, spanning e-commerce platforms,
          sports data, health & fitness, and internal SaaS dashboards.
        </p>
        <p>
          Each one draws on React.js, Next.js, Node.js, and real-time API integrations — scroll to flip
          through them one by one.
        </p>
      </PageHero>
      <section className="pb-24 md:pb-36">
        <div className="shell">
          <ProjectStack projects={projects} />
        </div>
      </section>
    </>
  );
};

export default Projects;
