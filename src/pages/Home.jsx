import React from 'react';
import { ChevronDown, Code2, User } from 'lucide-react';
import Timeline from '../Components/Timeline';

const Home = () => {

  const startDate = new Date('2022-01-01');
  const now = new Date();

  const diffTime = now - startDate;
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.4375));
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  const experience = `${years}.${months}`;

  return (
    <div className="pt-16">
      <section className="h-[500px] flex flex-col items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Software Engineer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Transforming ideas into seamless web and mobile experiences using React, Next.js, and React Native.
          </p>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce" size={52} />
      </section>
      <section className="py-20 px-4" id="about">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-blue-400" size={44} />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a passionate Software Engineer with <span className="text-blue-400 font-semibold">{experience} years</span> of experience,
            specializing in building robust and scalable web and mobile applications.
            I work extensively with modern technologies like <strong>React</strong>, <strong>Next.js</strong>, and <strong>React Native</strong>,
            crafting intuitive user experiences and performant interfaces. My focus lies in delivering clean, maintainable code and continuously exploring
            new challenges in both frontend and cross-platform mobile development.
          </p>
        </div>
      </section>
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-blue-400" size={44} />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['React', 'React Native', 'Next js', 'Node.js', 'TypeScript', 'JavaScript',
              'Redux', 'Git', 'REST APIs', 'Graph-QL', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS', 'Webpack'].map((skill) => (
                <div key={skill} className="bg-gray-700/50 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
                  {skill}
                </div>
              ))}
          </div>
        </div>
      </section>
      <Timeline />
    </div>
  );
}
export default Home;