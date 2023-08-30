import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  aignitiveX,
  crosswing,
  myAskAI,
  pl,
  rehani,
  upwork,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    id: "projects",
    title: "Projects"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Data Engineer",
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
    title: "Junior Software Engineer",
    company_name: "Profecia Links",
    companyUrl: "https://www.profecialinks.com/",
    icon: pl,
    iconBg: "#383E56",
    date: "May 2022 - Aug 2022",
    points: [
      "Contributed to a dynamic software development project at a reputable software house in Dubai.",
      "Engaged in a project focused on harnessing the capabilities of Import.io, a cutting-edge data extraction organization.",
      "Collaborated with Import.io, a pioneering entity in web data extraction, to address the challenges posed by evolving and intricate websites.",
      "Actively participated in the project, which aimed to enhance the accuracy and comprehensiveness of web data collected from eCommerce platforms.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "CrossWing Inc.",
    companyUrl: "https://crosswing.com/",
    icon: crosswing,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Engineer",
    company_name: "Rehani Soko",
    companyUrl: "https://www.rehanisoko.com/",
    icon: rehani,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Present",
    points: [
      "Created a complete data pipeline of Real Estate data from various websites using Python with database on MongoDB.",
      "After data collection, worked on data filtration part and make the data ready for model training to use it for prediction",
      "Implemented responsive web design of the chatbot for their website.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "My AskAI",
    companyUrl: "https://myaskai.com/",
    icon: myAskAI,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Created a custom no code openAI model trainer API validator using Node.js",
      "Worked on another project to allow users to login to Twitter with their app using Twitter API on Node.js",
    ],
  },
  {
    title: "Data Miner | Web Developer",
    company_name: "Upwork",
    companyUrl: "https://www.upwork.com/freelancers/~0128c84ead6dcef57a",
    icon: upwork,
    iconBg: "#383E56",
    date: "Oct 2021 - Present",
    points: [
      "A freelancer who tries his best to satisfy and meet the client's requirements.",
    ],
  },
  {
    title: "Co-Founder",
    company_name: "AIgnitiveX",
    companyUrl: "https://aignitivex.com/",
    icon: aignitiveX,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Empowering startups & organizations with technical solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Professional, strong skills, great solutions for data scraping and problem solving.",
    name: "Duong",
    designation: "Client",
    company: "Upwork",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Muhammad is an excellent developer. This is my second time hiring him and he is great.",
    name: "Burak Dedoglu",
    designation: "Client",
    company: "Upwork",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "It was a pleasure to work with you! Very good developer! Highly recommended!",
    name: "Lisa Wang",
    designation: "Client",
    company: "Upwork",
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

export { services, technologies, experiences, testimonials, projects };
