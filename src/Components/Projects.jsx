import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaJs, FaCuttlefish } from "react-icons/fa";
import { SiTailwindcss, SiVercel } from "react-icons/si";
import calculator from '../assets/calculator.png';
import guessit from '../assets/guessit.png';
import student from '../assets/student.png';
import clock from '../assets/clock.png';
import webdev from '../assets/webdev.png';
import comingsoon from '../assets/coming-soon.png';

const projects = [
  {
    title: "Calculator",
    image: calculator,
    description:
      "A fully functional calculator application built in C with support for basic arithmetic operations and error handling.",
    link: "https://github.com/SamratVsn/C-codes/blob/main/Calculator.c",
    tech: ["C"],
    date: "2023",
  },
  {
    title: "Guessing Game",
    image: guessit,
    description:
      "An interactive number guessing game with multiple difficulty levels and score tracking implemented in C.",
    link: "https://github.com/SamratVsn/C-codes/blob/main/GUESS_It.c",
    tech: ["C"],
    date: "2023",
  },
  {
    title: "Student Management System",
    image: student,
    description:
      "A comprehensive console application for managing student records with CRUD operations and data persistence.",
    link: "https://github.com/SamratVsn/C-codes/blob/main/Student_Management.c",
    tech: ["C"],
    date: "2024",
  },
  {
    title: "Digital Clock",
    image: clock,
    description:
      "A real-time digital clock with customizable display formats and alarm functionality built in C.",
    link: "https://github.com/SamratVsn/C-codes/blob/main/digiClock.c",
    tech: ["C"],
    date: "2023",
  },
  {
    title: "Web Development Exercises",
    image: webdev,
    description:
      "A collection of front-end development projects showcasing HTML, CSS, and JavaScript fundamentals.",
    link: "https://github.com/SamratVsn/Sigma-Web-Dev-Excercises",
    tech: ["HTML", "CSS", "JavaScript"],
    date: "2024",
  },
  {
    title: "ToDo - A Task Manager",
    // No image, will use React icon
    IconComponent: FaReact,
    description: 
      "A to-do list project I made with the help of React & Tailwind.",
    link: "https://task-manager-cyan-gamma.vercel.app/",
    tech: ["React", "Tailwind"],
    date: "2025",
  },
  {
    title: "Kreatra - A Demo",
    IconComponent: FaReact,
    description:
      "A learning App I hope to build when I have better skills in the future.",
    link: "https://kreatra.vercel.app/",
    tech: ["React", "Tailwind"],
    date: "2025",
  },
  {
    title: "New Project Coming Soon",
    image: comingsoon,
    description:
      "I'm currently working on an exciting new project. Check back later to see what I've built!",
    link: null,
  },
];

const TechIcon = ({ tech }) => {
  switch (tech.toLowerCase()) {
    case "react":
      return <FaReact className="text-cyan-400 w-5 h-5" />;
    case "tailwind":
      return <SiTailwindcss className="text-sky-400 w-5 h-5" />;
    case "javascript":
      return <FaJs className="text-yellow-400 w-5 h-5" />;
    case "css":
      return <FaCss3Alt className="text-blue-500 w-5 h-5" />;
    case "c":
      return (
        // Since no official C icon in react-icons, fallback to FaCuttlefish (for C language)
        <FaCuttlefish className="text-gray-400 w-5 h-5" />
      );
    default:
      return null;
  }
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-orbitron">
            My Projects
          </h1>
          <p className="text-slate-400 text-base mt-4 max-w-xl mx-auto">
            A collection of my technical implementations and problem-solving solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              tabIndex={0}
              className={`flex flex-col items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                !project.link ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
              }`}
              aria-label={project.link ? `Open project ${project.title}` : `${project.title} is coming soon`}
              title={!project.link ? "Coming Soon" : ""}
            >
              {/* Icon or Image */}
              <div className="w-20 h-20 flex items-center justify-center mb-6 bg-cyan-400/10 border border-dashed border-cyan-400/30 rounded-full text-cyan-400 text-4xl">
                {project.IconComponent ? (
                  <project.IconComponent className="w-12 h-12" />
                ) : (
                  <img
                    src={project.image}
                    alt={`${project.title} Icon`}
                    className="w-10 h-10 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)] object-contain"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white text-center mb-1">
                {project.title}
              </h3>

              {/* Tech Tags with icons */}
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                {project.tech?.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 text-xs font-semibold text-cyan-400 bg-cyan-900/20 rounded-full px-3 py-1"
                  >
                    <TechIcon tech={tech} />
                    {tech}
                  </span>
                ))}
              </div>

              {/* Date */}
              {project.date && (
                <p className="text-xs text-slate-500 mb-4">{`Completed in ${project.date}`}</p>
              )}

              {/* Description */}
              <p className="text-slate-400 text-sm text-center mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Button */}
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-transform hover:scale-105 hover:shadow-lg"
                >
                  <span>
                    {project.title === "Web Development Exercises"
                      ? "View Repository"
                      : "View Code"}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-1"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ) : (
                <div
                  className="bg-slate-700 text-white py-2 px-4 rounded-lg font-medium opacity-60"
                  aria-disabled="true"
                  title="Coming Soon"
                >
                  Coming Soon
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
