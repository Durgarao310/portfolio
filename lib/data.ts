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
  // {
  //   title: "Relief.today (Front-End Developer Intern)",
  //   location: "Remote (Hyderabad, India)",
  //   description:
  //     "Working as a frontend intern closely with a UI/UX team sounds like an exciting and valuable experience! It must have given you a great opportunity to learn about the intricacies of user interface and user experience.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "Feb 2021 - Apr 2021",
  // },
  {
    title: "Wielabs (MERN Stack Developer)",
    location: "Hyderabad, India",
    description:
      "Upskilled to full-stack proficiency, proficient in React.js, Next.js, MongoDB, Express.js, and Node.js, adept at building scalable web applications with a focus on performance and user experience.",
    icon: React.createElement(FaReact),
    date: "Apr 2021 - Apr 2022",
  },
  {
    title: "Mokshar creative studios (Full-Stack Developer)",
    location: "Hyderabad, India",
    description:
      "Full-stack developer. Tech stack includes React, Next.js, TypeScript, Tailwind, AWS, and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - June 2024",
  },
  {
    title: "Onfocussoft pvt ltd (Senoir software engineer)",
    location: "Hyderabad, India",
    description:
      "Senior Software Developer specializing in solution design, feature implementation, and team mentorship. Passionate about guiding junior developers, crafting scalable solutions, and driving technical excellence in every project.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - present",
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
