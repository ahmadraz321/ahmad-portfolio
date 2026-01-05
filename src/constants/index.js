import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  tripguide,
  typescript,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "Hashlogics",
    icon: web,
    iconBg: "#383E56",
    date: "Mar 2025 - Present",
    points: [
      "Engineered an AI-driven tax strategy engine that pulls real-time client data via HubSpot API, generating automated savings suggestions and financial forecasts.",
      "Developed a multi-channel content automation suite using Perplexity AI for data scraping and Reddit API for trend analysis, leveraging OpenAI to synthesize high-performing Blog and LinkedIn posts.",
      "Implemented a RAG (Retrieval-Augmented Generation) based knowledge base to provide precise, context-aware project documentation and internal support.",
      "Architected a YouTube Management module utilizing YouTube Data API and AI analysis to provide automated video optimization suggestions, increasing potential channel reach.",
      "Built interactive tools for tax optimization on QA TAX platform, allowing users to input financial details and receive AI-generated strategies with real-time savings forecasts (up to 30% estimated tax reduction).",
      "Developed gamified course system where modules unlock only after completing videos and glossary terms, increasing user course completion rate by 45%.",
      "Created admin panel with Bedrock AI integration to parse uploaded course documents into structured modules, cutting manual data entry time by 70%.",
      "Integrated Sonnet AI chatbot to provide real-time guidance, reducing user support requests by 35%.",
      "Built admin dashboard for Lumaya platform for verifying businesses, managing listings, and controlling user access, streamlining operational workflows.",
      "Integrated Verif API for identity verification and Skribble e-signature for secure NDA agreements, ensuring compliance and trust.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Tiksom Limited",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Feb 2025",
    points: [
      "Streamlined data synchronization by automating Google Sheets integration for Taqtik platform, reducing manual effort by 90%.",
      "Enhanced reporting by generating dynamic PDF reports and integrating interactive graphs using D3.js, improving visualization quality by 50%.",
      "Improved user engagement by integrating Terra API for real-time health data tracking (steps and weight) and adding Twilio-powered SMS notifications for timely alerts.",
      "Boosted file management efficiency by utilizing AWS S3 for secure storage of user-generated PDFs.",
      "Enhanced backend functionalities using EJS for StagingPro Admin Dashboard and integrated IoT devices with real-time communication channels.",
      "Designed and implemented real-time updates and IoT device integrations with Socket.IO for StagingPro Mobile App, increasing system responsiveness by 35%.",
      "Reduced bug occurrence by 20% through rigorous backend testing and adherence to KISS and DRY principles.",
      "Enhanced user onboarding for Akme App by implementing deep linking, increasing app engagement by 25%.",
      "Boosted transaction reliability by integrating Stripe payment gateway, handling over 1,000 successful transactions monthly.",
      "Improved notification efficiency by leveraging Firebase webhooks, achieving a 99% delivery rate for critical updates.",
      "Enabled secure and scalable email notifications using SendGrid, resulting in a 30% increase in email open rates.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "RethinkerLab",
    icon: reactjs,
    iconBg: "#383E56",
    date: "May 2022 - Jan 2024",
    points: [
      "Built Envision Estates, a property management system used by 50+ hotels, improving booking management efficiency by 40%.",
      "Optimized data fetching and synchronization with React Query, reducing load times by 30%.",
      "Adhered to KISS, DRY, SOC, and YAGNI principles, cutting bug occurrence by 25% and increasing development speed by 20%.",
      "Implemented features like property listing, tenant management, rent tracking, and maintenance requests, boosting operational efficiency by 30%.",
      "Conducted thorough testing with Vitest, achieving 95% test coverage and reducing post-deployment issues by 15%.",
      "Enhanced website performance with lazy loading, improving user engagement by 25% and reducing bounce rate by 20%.",
      "Deployed applications using Docker, reducing deployment time by 40% and supporting a 200% increase in user load.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };
