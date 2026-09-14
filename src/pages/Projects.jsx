import React from 'react';
import { Briefcase, ShoppingCart, Car, Trophy, Dumbbell, UtensilsCrossed, CreditCard, ClipboardCheck } from 'lucide-react';
import Reveal from '../Components/Reveal';

const Projects = () => {
  const projects = [
    {
      title: 'Keeyu – Centralized E-commerce Platform',
      category: 'E-commerce',
      description: 'A multi-marketplace order management platform that lets businesses track and manage orders from multiple sales channels in one place. Built frontend features with React.js and Next.js, integrated REST APIs to sync order data, and developed backend routes with Node.js and Fastify — including real-time order status updates over WebSocket so the dashboard stays in sync without manual refreshes.',
      icon: ShoppingCart,
      highlights: ['React.js', 'Next.js', 'Node.js & Fastify', 'WebSockets']
    },
    {
      title: 'Boss Bodies – Fitness & Nutrition Platform',
      category: 'Health & Fitness',
      description: 'An all-in-one fitness platform with nutrition planning, supplement shopping, and recipe browsing. Built and integrated frontend screens with React.js consuming REST APIs for meal plans, user profiles, and product listings, plus React Native mobile screens adapting the web flows to mobile-friendly layouts and navigation.',
      icon: Dumbbell,
      highlights: ['React.js', 'React Native', 'REST API']
    },
    {
      title: 'Criclay – Cricket Stats & Rankings Platform',
      category: 'Sports',
      description: 'A cricket matches, stats, and rankings platform built with Next.js. Integrated GraphQL queries via Apollo Client to fetch live match data, player statistics, and rankings, with real-time score updates through WebSocket subscriptions and Next.js SSR on match/player pages for fast, SEO-friendly first loads.',
      icon: Trophy,
      highlights: ['Next.js', 'GraphQL & Apollo', 'SSR']
    },
    {
      title: 'KrispX – Real-Time Car Listings & Transactions',
      category: 'E-commerce',
      description: 'A car buying and selling marketplace built with React.js. Integrated REST APIs for listing creation, search filters, and vehicle detail pages with live updates on listing availability, plus search and filter controls wired to API query parameters for filtering by price, make, model, and location.',
      icon: Car,
      highlights: ['React.js', 'REST API', 'Search & Filters']
    },
    {
      title: 'Workplace Checking – Employee Management Dashboard',
      category: 'SaaS',
      description: 'A React.js dashboard for employee check-ins, leave requests, and attendance tracking. Integrated REST APIs to display real-time workforce data and built form flows for leave management and check-in submissions, plus exportable attendance and leave report views formatted into structured, downloadable tables.',
      icon: ClipboardCheck,
      highlights: ['React.js', 'REST API', 'Data Export']
    },
    {
      title: 'Catered Club',
      category: 'Food Delivery',
      description: 'Catered Club is a food delivery catering service that provides healthy office snacks, sandwich platters, and event catering from a curated selection of local kitchens and restaurants. Features real-time order tracking, customizable menus, and seamless delivery coordination.',
      icon: UtensilsCrossed,
      highlights: ['React', 'Real-time Tracking', 'Order Management']
    },
    {
      title: 'Lasso Checkout',
      category: 'E-commerce',
      description: 'Lasso powers your entire checkout flow. From global payment methods to individual consumer insights, get the tools and analytics you need to make better decisions. Supports multiple currencies, fraud detection, and comprehensive analytics dashboard for tracking conversion rates.',
      icon: CreditCard,
      highlights: ['React', 'Fraud Detection', 'Multi-currency']
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
          A collection of projects I've contributed to as a software engineer, spanning e-commerce platforms, sports data, health & fitness, and internal SaaS dashboards. Each one draws on React.js, Next.js, Node.js, and real-time API integrations.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Reveal key={project.title} delay={(index % 2) * 100}>
                <article
                  className="glow-border overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-black/20"
                >
                  <div className="w-full h-56 bg-slate-900 flex items-center justify-center dark:bg-slate-950">
                    <IconComponent className="text-blue-400" size={100} strokeWidth={1.5} />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-slate-900 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 dark:bg-white/10">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 border-t border-slate-200 pt-4 dark:border-gray-700">
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
