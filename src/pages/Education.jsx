import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "The University of Faisalabad",
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
    <div className="pt-60 pb-16 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="text-blue-400" size={48} />
          <h1 className="text-4xl font-bold text-white">Education & Certifications</h1>
        </div>
        <div className="space-y-10">
          {education.map((item) => (
            <div
              key={item.degree}
              className="bg-gray-700/60 rounded-xl p-8 shadow-xl hover:bg-gray-700 transition-colors"
            >
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">{item.degree}</h2>
              <h3 className="text-xl text-gray-200 mb-2">{item.institution}</h3>
              <div className="flex items-center text-gray-400 mb-4">
                <Calendar size={18} className="mr-2" />
                <span>{item.year}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
