import React from 'react';
import { Briefcase, Users, Gauge, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Keeyu – E-commerce Optimizer',
      category: 'Retail',
      description: 'An AI-powered platform that proactively detects and resolves fulfillment, payment, and logistics issues to enhance customer experience.',
      image: 'e_commerce_project.jpg',
      stats: { users: '80+ Users', efficiency: '+90%', impact: '95% Accuracy' },
      link: 'https://keeyu.com'
    },
    {
      title: 'Car Marketplace',
      category: 'E-commerce',
      description: 'Buy and sell cars with advanced search filters, real-time listings, and secure transactions on a trusted platform.',
      image: 'car_marketplace.jpg',
      stats: { users: '100K+ Users', efficiency: '+91%', impact: '97% Trust Score' },
      link: 'https://www.krispx.com/'
    },
    {
      title: 'CricketLive Web',
      category: 'Sports',
      description: 'Live cricket scores, match highlights, tournament tracking, and player performance — all in real-time.',
      image: 'cricket_project.jpg',
      stats: { users: '75K+ Users', efficiency: '+90%', impact: '95% Accuracy' },
      link: 'https://criclay.com'
    },
    {
      title: 'Boss Body Portal',
      category: 'Health & Fitness',
      description: 'A wellness app offering gym training programs, personalized nutrition plans, and healthy recipes tailored to your fitness goals.',
      image: 'gym_project.jpg',
      stats: { users: '120K+ Users', efficiency: '+94%', impact: '98% Satisfaction' },
      link: 'https://bb-portal.promarlins.com/'
    },
    {
      title: 'Catered Club',
      category: 'Food Delivery',
      description: 'Catered Club is a food delivery catering service that provides healthy office snacks, sandwich platters, and event catering from a curated selection of local kitchens and restaurants.',
      image: 'catered club.jpg',
      stats: { users: '25K+ Users', efficiency: '+82%', impact: '93% Accuracy' },
      link: 'https://cateredclub.com'
    },
    {
      title: 'Lasso Checkout',
      category: 'E-commerce',
      description: 'Lasso powers your entire checkout flow. From global payment methods to individual consumer insights, get the tools and analytics you need to make better decisions.',
      image: 'Payment Gateway .jpg',
      stats: { users: '10K+ Users', efficiency: '+91%', impact: '97% Satisfaction' },
      link: 'https://lassocheckout.com/'
    }
  ];

  return (
    <div className="pt-60 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-12">
          <Briefcase className="text-blue-400" size={44} />
          <h1 className="text-4xl font-bold text-white">Featured Projects</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300 hover:ring-2 hover:ring-purple-500"
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6 text-white">
                <span className="inline-block bg-purple-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-6">{project.description}</p>

                <div className="flex items-center justify-between border-t border-gray-700 pt-4 text-sm text-gray-200">
                  <div className="flex items-center gap-1">
                    <Users className="text-purple-400" size={22}/>
                    <span className='font-bold'>{project.stats.users}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Gauge className="text-blue-400" size={22}/>
                    <span className='font-bold'>{project.stats.efficiency}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="text-yellow-400" size={22}/>
                    <span className='font-bold'>{project.stats.impact}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
