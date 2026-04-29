import React from 'react';
import { Heart, Wind, Footprints, Dumbbell, Dribbble } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      name: 'Badminton',
      description: 'Enjoying competitive matches and improving my skills on the court. Badminton helps me develop quick reflexes, strategic thinking, and maintain cardiovascular fitness while having fun.',
      icon: Wind,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Jogging',
      description: 'Early morning runs to stay fit and energized. Running clears my mind, boosts my energy levels, and provides a great opportunity to explore the outdoors while staying healthy.',
      icon: Footprints,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      name: 'Gym',
      description: 'Regular workouts to maintain strength and fitness. Strength training not only builds physical resilience but also improves mental discipline, focus, and overall well-being.',
      icon: Dumbbell,
      gradient: 'from-red-500 to-orange-500'
    },
    {
      name: 'Football',
      description: 'Playing football with friends and local teams. Football teaches teamwork, coordination, and provides an excellent cardiovascular workout while building camaraderie with teammates.',
      icon: Dribbble,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="pt-36 pb-16 md:pt-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Heart className="text-blue-500 dark:text-blue-400" size={44} />
          <h1 className="text-4xl font-bold text-slate-950 dark:text-white">My Hobbies & Interests</h1>
        </div>

        <div className="mb-12 text-slate-600 dark:text-gray-300 text-lg leading-relaxed">
          <p className="mb-4">
            I'm someone who thrives on curiosity and continuous learning. In my free time, I enjoy engaging in physical activities like badminton, jogging, and football—they help me stay energized, focused, and balanced. Beyond that, I love spending time at the gym to maintain a healthy lifestyle and build both physical and mental resilience.
          </p>
          <p>
            Apart from physical hobbies, I have a deep interest in exploring new technologies, reading books, and challenging myself with new stacks and side projects. Whether it's solving coding puzzles, learning a new framework, or building something from scratch—I'm always up for a challenge. I believe in maintaining a balance between physical fitness and intellectual growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby) => {
            const IconComponent = hobby.icon;
            return (
              <div
                key={hobby.name}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-black/20"
              >
                <div className={`h-48 bg-gradient-to-br ${hobby.gradient} flex items-center justify-center`}>
                  <IconComponent className="text-white/90" size={80} strokeWidth={1.5} />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">{hobby.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">{hobby.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
