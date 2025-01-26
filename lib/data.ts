import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import beblossomImg from "@/public/beblossom.png";
import bizmarvelImg from "@/public/bizmarvel.png";
import mokliveImg from "@/public/moklive.png";
import flexboxImg from "@/public/flexbox.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Relief.today (Frontend Developer Intern)",
    location: "Remote (Hyderabad, India)",
    description:
      "Collaborated closely with UI/UX designers to translate design concepts into interactive and responsive web interfaces using ReactJS. Contributed to the development of a visually appealing and intuitive website by implementing UI designs created in Figma.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2021 - Apr 2021",
  },
  {
    title: "Wielabs (MERN Stack Developer)",
    location: "Hyderabad, India",
    description:
      "Contributed to the creation of multiple e-commerce platforms, leveraging ReactJS for frontend development and Node.js with MongoDB or Firebase for backend infrastructure. Played a key role in building social media platforms from the ground up, utilizing React Native for cross-platform mobile development and Firebase for real-time database capabilities. Designed and implemented RESTful APIs using Node.js to facilitate communication between frontend and backend systems.",
    icon: React.createElement(FaReact),
    date: "Apr 2021 - Apr 2022",
  },
  {
    title: "Mokshar Creative Studios (Full-Stack Engineer)",
    location: "Hyderabad, India",
    description:
      "Implemented webpack as the module bundler to optimize the performance and build process of React applications, resulting in faster load times and improved efficiency. Spearheaded the integration of Cypress for automated E2E testing, ensuring comprehensive test coverage. Enhanced API response time using MongoDB aggregation and indexing, ensuring rapid data retrieval and processing. Designed and implemented CI/CD pipelines on AWS, automating the build, test, and deployment processes for multiple environments.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - Jun 2024",
  },
  {
    title: "Onfocussoft Pvt Ltd (Senior Software Engineer)",
    location: "Hyderabad, India",
    description:
      "Developed a social media app with event creation and management features using React Native, Express.js, and MongoDB, providing a seamless user experience across iOS and Android. Optimized backend APIs for scalability and performance, handling real-time updates and efficient data management for event-based functionalities.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024 - Nov 2024",
  },
  {
    title: "Altrova Inc (Senior Software Developer)",
    location: "Hyderabad, India",
    description:
      "Built a dynamic configuration dashboard using React Hook Form, reducing development and testing time by 40%. Implemented configurable email templates for notifications, enhancing user engagement and simplifying content updates. Leveraged Node.js, MySQL, and AWS to deliver scalable and reliable solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2024 - Present",
  },
] as const;



export const projectsData = [
  {
    title: "CSS Flexbox visualizer",
    description:
      "A CSS flexbox visualizer is a web tool enabling designers to create and edit flexible layouts visually, simplifying responsive design.",
    tags: ["React", "Material UI"],
    imageUrl: flexboxImg,
    link: "https://flexbox.durga.dev",
  },
  {
    title: "BeBlossom",
    description:
      "I worked as a full-stack developer on this startup project for one year. connecting investors and companies.",
    tags: ["React", "Express", "Socketio", "MongoDB", "Material UI"],
    imageUrl: beblossomImg,
    link: "https://beblossom.co",
  },
  {
    title: "BIzmarvel",
    description:
      "Worked as a full-stack developer, having worked on projects featuring e-commerce, podcasts, and articles.",
    tags: ["Express", "MongoDB", "Reactjs", "Material UI"],
    imageUrl: bizmarvelImg,
    link: "https://bizmarvel.com",
  },
  {
    title: "Moklive",
    description:
      " I spearheaded the development and launch of a comprehensive Digital Out-of-Home (DOOH) advertising platform from the ground up.",
    tags: ["React Native", "React", "Express", "MongoDB", "AWS"],
    imageUrl: mokliveImg,
    link: "https://moksharlive.netlify.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Webpack",
  "React",
  "Next.js",
  "Node.js",
  "React Native",
  "Git",
  "Tailwind",
  "AWS",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Firebase",
  "Socket.Io",
] as const;
