import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaCss3Alt,
  FaJs,
  FaCuttlefish
} from "react-icons/fa";
import {
  SiTailwindcss
} from "react-icons/si";
import calculator from "../assets/calculator.png";
import guessit from "../assets/guessit.png";
import student from "../assets/student.png";
import clock from "../assets/clock.png";
import webdev from "../assets/webdev.png";
import comingsoon from "../assets/coming-soon.png";

const projects = [
  {
    title: "Calculator",
    image: calculator,
    description: "A fully functional calculator application built in C...",
    link: "https://github.com/SamratVsn/C-codes/blob/main/Calculator.c",
    tech: ["C"],
    date: "2023",
  },
  {
    title: "Guessing Game",
    image: guessit,
    description: "An interactive number guessing game...",
    link: "https://github.com/SamratVsn/C-codes/blob/main/GUESS_It.c",
    tech: ["C"],
    date: "2023",
  },
  {
    title: "Student Management System",
    image: student,
    description: "A comprehensive console application...",
    link: "https://github.com/SamratVsn/C-codes/blob/main/Student_Management.c",
    tech: ["C"],
    date: "2024",
  },
  {
    title: "Digital Clock",
    image: clock,
    description: "A real-time digital clock...",
    link: "https://github.com/SamratVsn/C-codes/blob/main/digiClock.c",
    tech: ["C"],
    date: "2023",
  },
  {
    title: "Web Development Exercises",
    image: webdev,
    description: "A collection of front-end development projects...",
    link: "https://github.com/SamratVsn/Sigma-Web-Dev-Excercises",
    tech: ["HTML", "CSS", "JavaScript"],
    date: "2024",
  },
  {
    title: "ToDo - A Task Manager",
    IconComponent: FaReact,
    description: "A to-do list project I made with the help of React & Tailwind.",
    link: "https://task-manager-cyan-gamma.vercel.app/",
    tech: ["React", "Tailwind"],
    date: "2025",
  },
  {
    title: "Kreatra - A Demo",
    IconComponent: FaReact,
    description: "A learning App I hope to build...",
    link: "https://kreatra.vercel.app/",
    tech: ["React", "Tailwind"],
    date: "2025",
  },
  {
    title: "New Project Coming Soon",
    image: comingsoon,
    description: "I'm currently working on an exciting new project...",
    link: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

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
      return <FaCuttlefish className="text-gray-400 w-5 h-5" />;
    default:
      return null;
  }
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="w-full min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={fadeUp}
        custom={0}
      >
        <div className="text-center mb-14">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-orbitron"
            variants={fadeUp}
            custom={0.2}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="text-slate-400 text-base mt-4 max-w-xl mx-auto"
            variants={fadeUp}
            custom={0.4}
          >
            A collection of my technical implementations and problem-solving solutions.
          </motion.p>
        </div>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={0.1 * index}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`flex flex-col items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:shadow-[0_0_30px_rgba(0,255,255,0.05)] transition-all duration-300 ${
                !project.link ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
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

              <h3 className="text-xl font-semibold text-white text-center mb-1">
                {project.title}
              </h3>

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

              {project.date && (
                <p className="text-xs text-slate-500 mb-4">{`Completed in ${project.date}`}</p>
              )}

              <p className="text-slate-400 text-sm text-center mb-6 leading-relaxed">
                {project.description}
              </p>

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
                  title="Coming Soon"
                >
                  Coming Soon
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
