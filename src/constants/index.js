import {
  mobile,
  backend,
  creator,
  web,

  sanity,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  selenium,
  python,
  puppeteer,
  postgresql,
  next,
  firebase,

  aignitiveX,
  crosswing,
  myAskAI,
  pl,
  rehani,
  upwork,

  Pr1,
  Pr2,
  Pr3,
  Pr4,
  Pr5,
  Pr6,
  Pr7,
  Pr8,
  Pr9,
  Pr10,

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
    name: "Python",
    icon: python,
  },
  {
    name: "Selenium",
    icon: selenium,
  },
  {
    name: "Puppeteer",
    icon: puppeteer,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Sanity CMS",
    icon: sanity,
  },
  {
    name: "PostgreSql",
    icon: postgresql,
  },
  {
    name: "Redux",
    icon: redux,
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
    name: "Dalle 2.0 Image generator",
    url: "https://open-ai-dalle-mern.vercel.app/",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: Pr9,
    source_code_link: "https://github.com/huzaifa620/openAI_dalle_MERN",
  },
  {
    name: "Airbnb Clone",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: Pr1,
    source_code_link: "https://github.com/huzaifa620/airbnb_REACT",
  },
  {
    name: "Amazon Clone",
    url: "https://amazon-clone-with-nextjs-reactjs-webhooks-stripe-checkout-fi.mhuzaifa4.repl.co/",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Pr2,
    source_code_link: "https://github.com/huzaifa620/Amazon-Clone-with-NEXTJS-ReactJS-Webhooks-Stripe-Checkout-Firestore-NextAuth",
  },
  {
    name: "Hulu Clone",
    url: "https://hulu-with-react-js-next-js-tailwind-css.vercel.app/",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Pr3,
    source_code_link: "https://github.com/huzaifa620/-Hulu-2.0-with-REACT.JS-Next.js-Tailwind-CSS-",
  },
  {
    name: "MyBricks 2.0",
    url: "https://mybricks-three.vercel.app/",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Pr10,
    source_code_link: "https://github.com/huzaifa620/mybricks",
  },
  {
    name: "WhatsApp MERN",
    url: "https://whatsapp-mern-ede10.web.app/",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: Pr4,
    source_code_link: "https://github.com/huzaifa620/Whatsapp-Clone-with-MERN-Stack",
  },
  {
    name: "WhatsApp Firestore",
    url: "https://whatsapp-react-e4240.web.app/",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: Pr5,
    source_code_link: "https://github.com/huzaifa620/-WhatsApp-Clone-REACT-Firebase",
  },
  {
    name: "Instagram Reels Clone",
    url: "https://instagram-reels-clone-react-js.vercel.app/",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: Pr6,
    source_code_link: "https://github.com/huzaifa620/instagram_reels_clone_react_JS",
  },
  {
    name: "Tesla Clone",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: Pr7,
    source_code_link: "https://github.com/huzaifa620/Tesla-Clone-with-ReactJS-Redux-Styled-Components",
  },
  {
    name: "Google Clone",
    url: "https://google-clone-react-three.vercel.app/",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "google API",
        color: "pink-text-gradient",
      },
    ],
    image: Pr8,
    source_code_link: "https://github.com/huzaifa620/GOOGLE-Clone-REACT",
  },
];

export { services, technologies, experiences, testimonials, projects };
