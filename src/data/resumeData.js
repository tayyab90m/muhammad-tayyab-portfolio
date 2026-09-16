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
    'Software Engineer with 4+ years of experience specializing in frontend development with React.js, Next.js, and React Native. Experienced integrating REST APIs and GraphQL on the frontend and building backend services using Node.js with the Fastify framework. Increasingly leverages AI-assisted development tools and models — Claude Code, Cursor, Antigravity, and Grok — to ship features faster without compromising on code quality. Comfortable working across the full stack with a strong focus on clean, maintainable UI and reliable delivery in collaborative Agile teams.',
  skills: [
    { label: 'Languages', value: 'JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS, Tailwind CSS' },
    { label: 'Frontend', value: 'React.js, Next.js, React Native' },
    { label: 'Backend', value: 'Node.js, Fastify, Express.js, REST API Development' },
    { label: 'State Management', value: 'Redux, Redux Toolkit, React Context API, Zustand' },
    { label: 'API Integration', value: "REST API (Axios, Fetch), GraphQL (Apollo Client), WebSockets" },
    { label: 'AI Tools & Models', value: 'Claude Code, Cursor, Antigravity, Windsurf, DeepSeek, Grok' },
    { label: 'Tools & Platforms', value: 'Git, GitHub, Postman, Vercel, Netlify, VS Code' },
    { label: 'Competencies', value: 'Agile/Scrum, Cross-functional Collaboration, Code Review' },
  ],
  experience: [
    {
      role: 'Software Engineer',
      company: 'Keeyu',
      period: '2023 - Present',
      points: [
        'Built and maintained frontend features for Keeyu, an AI-agent platform that helps e-commerce brands proactively detect and resolve post-purchase issues, using React.js and Next.js and integrating REST APIs to handle complex UI state for responsive, user-friendly interfaces.',
        'Consumed and managed GraphQL queries and mutations on the frontend.',
        'Developed backend API endpoints using Node.js with the Fastify framework, writing route handlers and business logic to support frontend feature requirements.',
        'Worked with Next.js SSR and SSG to improve page load performance and SEO, configuring data fetching strategies based on content requirements.',
        'Built and maintained a shared React component library used across multiple features, improving development consistency and speed.',
        'Collaborated with designers and backend engineers through sprint planning and daily standups, participating in code reviews and contributing to a cleaner codebase.',
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
  education: [
    { degree: 'BS Computer Science', institution: 'University Of Central Punjab' },
    { degree: 'FSC Pre-Engineering', institution: 'Punjab College, Gojra' },
  ],
  interests:
    'Passionate about modern web development, performance optimization, and exploring emerging technologies. Continuously improving skills through self-learning, open-source contributions, and staying updated with industry trends.',
};

export default resumeData;
