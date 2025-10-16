import type { Project, Experience, SkillCategory } from './types';
import ecom from './assets/ecom.jpg';
import dms from './assets/dms.jpg';
import face from './assets/face.jpg';
import data from './assets/data.jpg';
import pic from './assets/pic.jpg';
import mock from './assets/mock.jpg';

export const PROFILE_DATA = {
  name: "Amit Ranjan Das",
  title: "Software Engineer",
  summary: "I’m a developer passionate about building secure, efficient, and user-friendly applications. My work spans across Java, Python, JavaScript, and blockchain technology, with projects focused on smart systems and digital document management.",
  contactEmail: "mailto: amitranjandas18@gmail.com",
  socials: {
    github: "https://github.com/ExplorerSoul",
    linkedin: "https://www.linkedin.com/in/amit-ranjan-das/",
    twitter: "https://x.com/iamExplorerSoul",
  }
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website with product listings, a shopping cart, and a secure checkout process. Built with Next.js and Tailwind CSS.",
    imageUrl: ecom,
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 2,
    title: "Data Visualization Dashboard",
    description: "A web-based dashboard for visualizing and analyzing crime data across spatial and temporal dimensions & Features interactive charts and maps.",
    imageUrl: data,
    tags: ["Python", "Streamlit", "Pandas", "Plotly", "Geopandas"],
    liveUrl: "https://amit-crime-analysis.streamlit.app/",
    sourceUrl: "https://github.com/ExplorerSoul/crime_analysis_dashboard",
  },
  {
    id: 3,
    title: "Facial Recognition System",
    description: "A facial recognition system for attendance management using OpenCV and Dlib, integrated with a Flask backend and MySQL database for storing attendance records.",
    imageUrl: face,
    tags: ["Python", "OpenCV", "Dlib", "Flask", "MySQL"],
    liveUrl: "#",
    sourceUrl: "https://github.com/ExplorerSoul/Attendance_Management_System",
  },
    {
    id: 4,
    title: "AI Mock Interviewer Web App",
    description: "A web app that leverages the LLMs to generate mock interviews that ask adaptive questions specific to resume & job description and suggests personalized feedback.",
    imageUrl: mock,
    tags: ["MERN", "LLM API", "JWT", "Firebase", "Whisper API"],
    liveUrl: "#",
    sourceUrl: "https://github.com/ExplorerSoul/aqia-mate/tree/main/aqia",
  },
  {
    id: 5,
    title: "Document Management System",
    description: "A blockchain-based DMS web app enabling secure storage and < 2s verification of academic records, ensured tamper-proof auditability.",
    imageUrl: dms,
    tags: ["MERN", "REST API", "Solidity", "Ethereum", "AWS"],
    liveUrl: "https://docmate-frontend-rho.vercel.app/",
    sourceUrl: "#",
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    description: "A personal portfolio website to showcase my projects, skills, and experiences, built with React and modern web technologies for a sleek and responsive design.",
    imageUrl: pic,
    tags: ["React", "TypeScript", "CSS", "Framer Motion"],
    liveUrl: "#",
    sourceUrl: "#",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "SN Bose Summer Internship (NIT Silchar)",
    role: "Fullstack Project Intern",
    duration: "June - July 2025",
    description: [
      "Designed and developed DocMate, a blockchain-based DMS using MERN, Solidity and AWS, enabling secure storage and < 2s verification of academic records.",
      "Implemented Merkle Tree-based bulk upload contracts and integrated off-chain and on-chain integrity proofs for scalable and secure document handling.",
      "Achieved 60% reduction in gas costs, ensured tamper-proof Auditability, and delivered a system capable of Real-Time & trustworthy verification of credentials.",
    ],
    logoColor: 'google-blue',
  },
  // {
  //   id: 2,
  //   company: "Microsoft",
  //   role: "Frontend Developer",
  //   duration: "2017 - 2020",
  //   description: [
  //     "Developed and maintained key features for the Office 365 web suite, focusing on performance and cross-browser compatibility.",
  //     "Refactored legacy AngularJS codebases to modern React, resulting in a 40% improvement in load times.",
  //     "Participated in agile development cycles, contributing to sprint planning and feature estimation.",
  //   ],
  //   logoColor: 'google-green',
  // },
  // {
  //   id: 3,
  //   company: "Innovate Inc.",
  //   role: "Junior Web Developer",
  //   duration: "2015 - 2017",
  //   description: [
  //       "Built responsive websites for various clients using HTML, CSS, and JavaScript.",
  //       "Assisted in the development of a custom content management system (CMS) using PHP and jQuery.",
  //       "Gained foundational experience in version control with Git and collaborating within a development team.",
  //   ],
  //   logoColor: 'google-yellow',
  // }
];


export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Frontend",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Redux", "Tailwind CSS", "Framer Motion"]
    },
    {
        title: "Languages",
        skills: ["Java", "Python", "SQL", "C++", "C#"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "Firebase", "REST APIs"]
    },
    {
        title: "Tools & Others",
        skills: ["Git", "GitHub", "Webpack", "Vite", "MySQL", "MongoDB", "React Testing Library", "Figma", "Jira", "Machine Learning Basics", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"]
    }
];
