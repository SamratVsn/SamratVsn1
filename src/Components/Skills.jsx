import React, { useState } from "react";
import { FaReact, FaJs, FaCuttlefish } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

import problemSolving from "../assets/problem-solving.png";
import communication from "../assets/communication.svg";
import publicSpeaking from "../assets/speaker.png";
import vscode from "../assets/vs-code.svg";
import selfLearning from "../assets/self-learning.png";
import creativity from "../assets/creativity.svg";
import timeManagement from "../assets/time-management.svg";
import attention from "../assets/attention.png";
import curiosity from "../assets/curiosity.png";

const skillsData = [
  { name: "React", icon: <FaReact className="text-cyan-400 text-lg sm:text-xl" />, progress: 60 },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-lg sm:text-xl" />, progress: 70 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-lg sm:text-xl" />, progress: 49 },
  { name: "C", icon: <FaCuttlefish className="text-gray-200 text-lg sm:text-xl" />, progress: 70 },
];

const toolsData = [
  { name: "Problem Solving", icon: problemSolving },
  { name: "Communication", icon: communication },
  { name: "Public Speaking", icon: publicSpeaking },
  { name: "VS Code", icon: vscode },
  { name: "Self-Learning", icon: selfLearning },
  { name: "Creativity", icon: creativity },
  { name: "Time Management", icon: timeManagement },
  { name: "Attention to Detail", icon: attention },
  { name: "Curiosity", icon: curiosity },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function getSkillLevel(progress) {
  if (progress >= 75) return "Advanced";
  if (progress >= 50) return "Intermediate";
  return "Beginner";
}

const Skills = () => {
  // State to track which skill tooltip is visible
  const [tooltipIndex, setTooltipIndex] = useState(null);

  return (
    <div id="skills" className="py-20 bg-[#0f1419] text-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-green-400 mt-2 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Coding Skills */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-cyan-400 text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-cyan-400 inline-block rounded" /> Coding Skills
            </h3>
            <div className="space-y-5 relative">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setTooltipIndex(index)}
                  onMouseLeave={() => setTooltipIndex(null)}
                >
                  {/* Icon + Name */}
                  <div className="flex items-center gap-3 min-w-[120px] cursor-default">
                    {skill.icon}
                    <span className="font-medium text-base">{skill.name}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="flex-1 h-2 bg-[#1a1f27] rounded overflow-hidden relative">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-green-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1.2 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Progress % */}
                  <span className="text-sm font-mono text-cyan-400 w-10 text-right">
                    {skill.progress}%
                  </span>

                  {/* Skill Level Label */}
                  <span className="text-xs text-cyan-300 font-semibold w-20 text-left">
                    {getSkillLevel(skill.progress)}
                  </span>

                  {/* Tooltip */}
                  {tooltipIndex === index && (
                    <div
                      className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded bg-gray-900 text-white text-xs whitespace-nowrap z-50
                    shadow-lg pointer-events-none select-none"
                    >
                      {`My proficiency in ${skill.name} is ${skill.progress}%, which is considered ${getSkillLevel(
                        skill.progress
                      )}.`}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools / Soft Skills */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:shadow-[0_0_20px_rgba(255,0,255,0.1)] transition-all"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-purple-400 text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-purple-400 inline-block rounded" /> Soft Skills & Tools
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {toolsData.map((tool, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 bg-[#10151c] border border-[#33394a] rounded-xl text-center hover:border-purple-500 hover:shadow-md transition-all"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain filter invert hover:drop-shadow-[0_0_10px_#8a2be2] transition"
                  />
                  <span className="text-xs sm:text-sm font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="inline-block bg-white/5 backdrop-blur-xl border border-white/10 px-12 py-10 rounded-3xl shadow-2xl max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold text-cyan-300 mb-6">
            Do you want to play a game?
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            There’s a riddle written in code, hidden in plain sight.<br />
            Only those with the right pattern may find it.<br /><br />
            <em>"Trust in the Supreme, He is the way."</em>
          </p>
          <a
            href="/"
            className="w-full sm:w-auto block text-center text-xl bg-gradient-to-r from-cyan-400 to-green-400 text-gray-900 font-extrabold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Accept the Challenge
          </a>
          <div className="mt-8 text-sm sm:text-base text-gray-400 space-y-2 font-mono italic">
            <p>🧠 Hint 1: "What defines you is right in front of you."</p>
            <p>🌐 Hint 2: "Sometimes, the URL knows more than it shows."</p>
            <p>🕹️ Bonus: "The right pattern unlocks the gate. Start with Up... end with A."</p>
            <p>🔁 "If not once, try it twice. Maybe it works."</p>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Skills;
