import { Bot, Car, Trophy, Dumbbell, UtensilsCrossed, CreditCard, ClipboardCheck, Scissors } from 'lucide-react';

// Project content rendered by the Projects page (src/pages/Projects.jsx).
const projectsData = [
  {
    title: 'Keeyu – Proactive E-commerce Ops Platform',
    category: 'AI-Powered Ops',
    description: 'Keeyu is an AI-agent platform that helps e-commerce brands detect and resolve post-purchase issues — fulfillment, shipping, and returns — before customers ever have to ask "Where is my order?" I built frontend features with React.js and Next.js, integrated REST APIs to sync order data across multiple sales channels, and developed backend routes with Node.js and Fastify — including real-time order status updates over WebSocket so the ops dashboard stays in sync without manual refreshes.',
    icon: Bot,
    highlights: ['React.js', 'Next.js', 'Node.js & Fastify', 'WebSockets'],
  },
  {
    title: 'Boss Bodies – Fitness & Nutrition Platform',
    category: 'Health & Fitness',
    description: 'An all-in-one fitness platform with nutrition planning, supplement shopping, and recipe browsing. Built and integrated frontend screens with React.js consuming REST APIs for meal plans, user profiles, and product listings, plus React Native mobile screens adapting the web flows to mobile-friendly layouts and navigation.',
    icon: Dumbbell,
    highlights: ['React.js', 'React Native', 'REST API'],
  },
  {
    title: 'Criclay – Cricket Stats & Rankings Platform',
    category: 'Sports',
    description: 'A cricket matches, stats, and rankings platform built with Next.js. Integrated GraphQL queries via Apollo Client to fetch live match data, player statistics, and rankings, with real-time score updates through WebSocket subscriptions and Next.js SSR on match/player pages for fast, SEO-friendly first loads.',
    icon: Trophy,
    highlights: ['Next.js', 'GraphQL & Apollo', 'SSR'],
  },
  {
    title: 'KrispX – Real-Time Car Listings & Transactions',
    category: 'E-commerce',
    description: 'A car buying and selling marketplace built with React.js. Integrated REST APIs for listing creation, search filters, and vehicle detail pages with live updates on listing availability, plus search and filter controls wired to API query parameters for filtering by price, make, model, and location.',
    icon: Car,
    highlights: ['React.js', 'REST API', 'Search & Filters'],
  },
  {
    title: 'Workplace Checking – Employee Management Dashboard',
    category: 'SaaS',
    description: 'A React.js dashboard for employee check-ins, leave requests, and attendance tracking. Integrated REST APIs to display real-time workforce data and built form flows for leave management and check-in submissions, plus exportable attendance and leave report views formatted into structured, downloadable tables.',
    icon: ClipboardCheck,
    highlights: ['React.js', 'REST API', 'Data Export'],
  },
  {
    title: 'Catered Club',
    category: 'Food Delivery',
    description: 'Catered Club is a food delivery catering service that provides healthy office snacks, sandwich platters, and event catering from a curated selection of local kitchens and restaurants. Features real-time order tracking, customizable menus, and seamless delivery coordination.',
    icon: UtensilsCrossed,
    highlights: ['React', 'Real-time Tracking', 'Order Management'],
  },
  {
    title: 'Lasso Checkout',
    category: 'E-commerce',
    description: 'Lasso powers your entire checkout flow. From global payment methods to individual consumer insights, get the tools and analytics you need to make better decisions. Supports multiple currencies, fraud detection, and comprehensive analytics dashboard for tracking conversion rates.',
    icon: CreditCard,
    highlights: ['React', 'Fraud Detection', 'Multi-currency'],
  },
  {
    title: 'Tailor Manager – Shop Management System',
    category: 'Retail Management',
    description: 'A management system built with React and a Node.js/Fastify backend for tailoring businesses to track customer orders, measurements, and delivery timelines in one place. Supports offline-first order entry with local data sync, so shop staff can log orders and update statuses without an internet connection, plus reporting dashboards for revenue, order volume, and turnaround times.',
    icon: Scissors,
    highlights: ['React', 'Node.js & Fastify', 'Offline Support', 'Reports'],
  },
];

export default projectsData;
