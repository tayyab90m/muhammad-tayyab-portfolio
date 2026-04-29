import React from 'react';
import { Briefcase, Users, Gauge, Zap, ShoppingCart, Car, Trophy, Dumbbell, UtensilsCrossed, CreditCard } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Keeyu – E-commerce Optimizer',
      category: 'Retail',
      description: 'An AI-powered platform that proactively detects and resolves fulfillment, payment, and logistics issues to enhance customer experience. Built with React and advanced analytics, Keeyu streamlines operations and boosts customer satisfaction through intelligent automation.',
      icon: ShoppingCart,
      gradient: 'from-purple-500 to-pink-500',
      stats: { users: '80+ Users', efficiency: '+90%', impact: '95% Accuracy' }
    },
    {
      title: 'Krispx - Car Marketplace',
      category: 'E-commerce',
      description: 'Buy and sell cars with advanced search filters, real-time listings, and secure transactions on a trusted platform. Features include detailed vehicle information, high-quality image galleries, price comparisons, and integrated payment gateways for a seamless buying experience.',
      icon: Car,
      gradient: 'from-blue-500 to-cyan-500',
      stats: { users: '100K+ Users', efficiency: '+91%', impact: '97% Trust Score' }
    },
    {
      title: 'CricketLive Web',
      category: 'Sports',
      description: 'Live cricket scores, match highlights, tournament tracking, and player performance — all in real-time. Powered by WebSocket technology for instant updates, featuring detailed scorecards, ball-by-ball commentary, and comprehensive player statistics.',
      icon: Trophy,
      gradient: 'from-green-500 to-emerald-500',
      stats: { users: '75K+ Users', efficiency: '+90%', impact: '95% Accuracy' }
    },
    {
      title: 'Boss Body Portal',
      category: 'Health & Fitness',
      description: 'A wellness app offering gym training programs, personalized nutrition plans, and healthy recipes tailored to your fitness goals. Includes progress tracking, workout scheduling, meal planning, and integration with fitness wearables for comprehensive health monitoring.',
      icon: Dumbbell,
      gradient: 'from-slate-900 via-red-600 to-orange-500',
      stats: { users: '120K+ Users', efficiency: '+94%', impact: '98% Satisfaction' }
    },
    {
      title: 'Catered Club',
      category: 'Food Delivery',
      description: 'Catered Club is a food delivery catering service that provides healthy office snacks, sandwich platters, and event catering from a curated selection of local kitchens and restaurants. Features real-time order tracking, customizable menus, and seamless delivery coordination.',
      icon: UtensilsCrossed,
      gradient: 'from-yellow-500 to-orange-500',
      stats: { users: '25K+ Users', efficiency: '+82%', impact: '93% Accuracy' }
    },
    {
      title: 'Lasso Checkout',
      category: 'E-commerce',
      description: 'Lasso powers your entire checkout flow. From global payment methods to individual consumer insights, get the tools and analytics you need to make better decisions. Supports multiple currencies, fraud detection, and comprehensive analytics dashboard for tracking conversion rates.',
      icon: CreditCard,
      gradient: 'from-indigo-500 to-purple-500',
      stats: { users: '10K+ Users', efficiency: '+91%', impact: '97% Satisfaction' }
    }
  ];

  return (
    <div className="pt-36 pb-16 md:pt-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="text-blue-500 dark:text-blue-400" size={44} />
          <h1 className="text-4xl font-bold text-slate-950 dark:text-white">Featured Projects</h1>
        </div>
        <p className="text-slate-600 dark:text-gray-300 text-lg mb-12 max-w-3xl">
          A collection of projects I've contributed to, spanning e-commerce platforms, sports applications, health & fitness solutions, and payment systems. Each project showcases my expertise in React, Next.js, and modern web technologies.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <article
                key={project.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-xl shadow-slate-200/60 transition-transform duration-300 hover:scale-[1.02] hover:ring-2 hover:ring-purple-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-black/20"
              >
                <div className={`w-full h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <IconComponent className="text-white/90" size={100} strokeWidth={1.5} />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between gap-3 border-t border-slate-200 pt-4 text-sm text-slate-700 dark:border-gray-700 dark:text-gray-200">
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
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
