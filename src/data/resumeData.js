const resumeData = {
  name: 'Muhammad Tayyab',
  title: 'Software Engineer',
  location: 'Lahore, Pakistan',
  phone: '+92 307 6160255',
  email: 'tayyab90m@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/muhammad-tayyab-31b955222',
    github: 'https://github.com/tayyab90m',
    portfolio: 'https://muhammad-tayyab-dev.vercel.app',
  },
  summary:
    'Software Engineer with 4+ years of experience specializing in frontend development with React.js, Next.js, and React Native. Experienced integrating REST APIs and GraphQL on the frontend and building backend services using Node.js with the Fastify framework. Comfortable working across the full stack with a strong focus on building clean, maintainable UI, smooth API integration, and delivering reliable features in collaborative Agile teams.',
  skills: [
    { label: 'Languages', value: 'JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS, Tailwind CSS' },
    { label: 'Frontend', value: 'React.js, Next.js, React Native' },
    { label: 'Backend', value: 'Node.js, Fastify, Express.js, REST API Development' },
    { label: 'State Management', value: 'Redux, Redux Toolkit, React Context API, Zustand' },
    { label: 'API Integration', value: "REST API (Axios, Fetch), GraphQL (Apollo Client), WebSockets" },
    { label: 'Tools & Platforms', value: 'Git, GitHub, Postman, Vercel, Netlify, VS Code, Cursor, Windsurf' },
    { label: 'Competencies', value: 'Agile/Scrum, Cross-functional Collaboration, Code Review' },
  ],
  experience: [
    {
      role: 'Software Engineer',
      company: 'Keeyu',
      period: '2023 - Present',
      points: [
        'Built and maintained frontend features using React.js and Next.js, integrating REST APIs and handling complex UI state to deliver responsive, user-friendly interfaces.',
        'Consumed and managed GraphQL queries and mutations on the frontend.',
        'Developed backend API endpoints using Node.js with the Fastify framework, writing route handlers and business logic to support frontend feature requirements.',
        'Worked with Next.js SSR and SSG to improve page load performance and SEO, configuring data fetching strategies based on content requirements.',
        'Built reusable React components and maintained a shared component library used across multiple features, improving development consistency and speed.',
        'Collaborated with designers and backend team members during sprint planning and daily standups, participating in code reviews and contributing to a cleaner codebase.',
      ],
    },
    {
      role: 'Associate Software Engineer',
      company: 'Eritheia Labs',
      period: '2022 - 2023',
      points: [
        'Developed frontend screens and components using React.js and Next.js, integrating REST APIs to connect UI with backend data and keeping state in sync across the application.',
        'Implemented GraphQL queries on the frontend using Apollo Client, fetching and displaying dynamic content from the server with proper loading and error handling.',
        'Contributed to Node.js backend services, writing API routes and handlers to support new frontend features and fixing issues raised during QA testing.',
        'Worked on React Native screens for mobile features, reusing existing logic, and adapting UI components to suit mobile layouts and interactions.',
      ],
    },
  ],
  projects: [
    {
      title: 'Keeyu – Proactive E-commerce Ops Platform',
      points: [
        'Worked on an AI-agent platform that helps e-commerce brands detect and resolve post-purchase issues — fulfillment, shipping, and returns — across multiple sales channels in one place.',
        'Implemented real-time order status updates on the frontend by consuming WebSocket events, keeping the ops dashboard in sync without manual page refreshes.',
      ],
    },
    {
      title: 'Boss Bodies – Fitness & Nutrition Management Platform',
      points: [
        'Contributed to an all-in-one fitness platform with features for nutrition planning, supplement shopping, and recipe browsing.',
        'Worked on the React Native mobile screens for the platform, adapting existing web flows to mobile-friendly layouts and navigation patterns.',
      ],
    },
    {
      title: 'Criclay – Cricket Matches, Stats & Rankings Platform',
      points: [
        'Built frontend screens for a cricket stats and live scores platform using Next.js, integrating GraphQL queries via Apollo Client with real-time score updates via WebSocket subscriptions.',
        'Used Next.js SSR for match and player detail pages to improve SEO and ensure fast first-load performance.',
      ],
    },
    {
      title: 'KrispX – Real-Time Car Listings & Transaction Platform',
      points: [
        'Developed frontend screens for a car buying and selling marketplace using React.js, integrating REST APIs for listing creation, search filters, and vehicle detail pages.',
      ],
    },
    {
      title: 'Workplace Checking – Employee Management Dashboard',
      points: [
        'Built a React.js dashboard for employee check-ins, leave requests, and attendance tracking, with exportable attendance and leave report views.',
      ],
    },
  ],
  education: [
    { degree: 'BS Computer Science', institution: 'University Of Central Punjab' },
    { degree: 'FSC Pre-Engineering', institution: 'Punjab College, Gojra' },
  ],
  interests:
    'Passionate about modern web development, performance optimization, and exploring emerging technologies. Continuously improving skills through self-learning, open-source contributions, and staying updated with industry trends.',
};

export default resumeData;
