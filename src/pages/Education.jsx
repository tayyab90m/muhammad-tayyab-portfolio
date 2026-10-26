import React from 'react';
import Reveal from '../Components/Reveal';
import PageHero from '../Components/PageHero';

const Education = () => {
  const education = [
    {
      degree: "FSC Pre-Engineering",
      institution: "Punjab College, Gojra",
      year: "2013 - 2015",
      description: "Pre-engineering studies covering mathematics, physics, and chemistry, forming the foundation for a computer science degree.",
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "University Of Central Punjab",
      year: "2015 - 2020",
      description: "Focused on web development, algorithms, and software engineering principles. Gained deep knowledge in JavaScript, databases, and full-stack development.",
    },
    {
      degree: "Full Stack Web Development",
      institution: "Tech Bootcamp",
      year: "2021",
      description: "Intensive 12-week program covering modern web development technologies and practices. Mastered HTML, CSS, JavaScript, React, Node.js, and databases.",
    },
    {
      degree: "Advanced React Certification",
      institution: "Udemy (Online Learning Platform)",
      year: "2022",
      description: "Specialized in React.js, Redux, and modern frontend architecture. Focused on performance optimization, hooks, state management, and testing with Jest.",
    },
  ];

  return (
    <>
      <PageHero label="Learning" title="Education" count={String(education.length).padStart(2, '0')}>
        <p>
          From a pre-engineering foundation to a computer science degree, then focused bootcamp and
          certification work on modern JavaScript and React.
        </p>
        <p>Learning never really stopped — today it happens on real products, every sprint.</p>
      </PageHero>

      <section className="pb-24 md:pb-36">
        <div className="shell">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 80}>
              <article className="group grid gap-6 border-t border-line/15 py-12 last:border-b md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)] md:items-start md:gap-12">
                <p className="text-outline font-display text-4xl font-extrabold leading-none tracking-tight md:text-5xl">
                  {item.year.split(' - ')[0]}
                  {item.year.includes(' - ') && (
                    <span className="block text-xl md:text-2xl">→ {item.year.split(' - ')[1]}</span>
                  )}
                </p>
                <div>
                  <h2 className="font-display text-2xl font-bold leading-tight transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                    {item.degree}
                  </h2>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-accent">{item.institution}</p>
                </div>
                <p className="leading-relaxed text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default Education;
