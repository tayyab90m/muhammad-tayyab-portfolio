import React from 'react';
import { Heart } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      name: 'Badminton',
      description: 'Enjoying competitive matches and improving my skills on the court',
      image: '/badminton.jpg'
    },
    {
      name: 'Jogging',
      description: 'Early morning runs to stay fit and energized',
      image: '/jogging.jpg'
    },
    {
      name: 'Gym',
      description: 'Regular workouts to maintain strength and fitness',
      image: '/gym.jpg'
    },
    {
      name: 'Football',
      description: 'Playing football with friends and local teams',
      image: '/footbal.jpg' 
    }
  ];

  return (
    <div className="pt-60 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Heart className="text-blue-400" size={44} />
          <h1 className="text-4xl font-bold text-white">My Hobbies</h1>
        </div>

        <div className="mb-12 text-gray-300 text-lg leading-relaxed">
          <p className="mb-4">
            I'm someone who thrives on curiosity and continuous learning. In my free time, I enjoy engaging in physical activities like badminton, jogging, and football—they help me stay energized, focused, and balanced. Beyond that, I love spending time at the gym to maintain a healthy lifestyle. 
          </p>
          <p>
            Apart from physical hobbies, I have a deep interest in exploring new technologies, reading books, and challenging myself with new stacks and side projects. Whether it's solving coding puzzles, learning a new framework, or building something from scratch—I'm always up for a challenge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby) => (
            <div
              key={hobby.name}
              className="bg-white/5 backdrop-blur-lg text-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={hobby.image}
                  alt={hobby.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{hobby.name}</h3>
                <p className="text-sm text-gray-300">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
