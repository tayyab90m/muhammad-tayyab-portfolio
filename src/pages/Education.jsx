import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import Reveal from '../Components/Reveal';

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
    <div className="pt-36 pb-16 md:pt-44">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="text-slate-900 dark:text-white" size={48} />
          <h1 className="text-4xl font-bold text-slate-950 dark:text-white">Education & Certifications</h1>
        </div>
        <div className="space-y-10">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 80}>
              <div
                className="glow-border rounded-3xl border border-[#dbd9d9] bg-white p-8 shadow-xl shadow-slate-200/60 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20 dark:hover:bg-white/10"
              >
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">{item.degree}</h2>
                <h3 className="text-xl text-slate-800 dark:text-gray-200 mb-2">{item.institution}</h3>
                <div className="flex items-center text-slate-500 dark:text-gray-400 mb-4">
                  <Calendar size={18} className="mr-2" />
                  <span>{item.year}</span>
                </div>
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
