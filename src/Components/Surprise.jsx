import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowLeft",
  "ArrowRight",
  "ArrowRight",
  "b",
  "a",
];

const vsnCode = ["v", "s", "n"];

const funFacts = [
  "I'm Samrat Parajuli, a high school dev from Nepal 🚀",
  "I write C programs for fun. Yes, really. 🧠",
  "React and Tailwind are my favorite duo ⚛️",
  "Krishna Bhakti keeps me focused ✨",
  "I actually used AI to create this menu",
  "I deployed my first site with Vercel 💻",
  "Always learning. Always building. 💪",
  "Fun fact: You just unlocked a secret terminal!",
];

export default function DevEasterEgg() {
  const [active, setActive] = useState(false);
  const [buffer, setBuffer] = useState([]);
  const [currentFact, setCurrentFact] = useState(0);

  // ✅ Tap state (mobile support)
  const [tapCount, setTapCount] = useState(0);
  const [tapTimer, setTapTimer] = useState(null);

  // ✅ Mobile secret tap logic
  const handleSecretTap = () => {
    setTapCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 10) {
        setActive(true);
        return 0;
      }
      if (newCount === 5) {
        alert("👀 Something is happening...");
      }

      if (tapTimer) clearTimeout(tapTimer);
      const timer = setTimeout(() => setTapCount(0), 2000); // Reset after 2s idle
      setTapTimer(timer);
      return newCount;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      setBuffer((prev) => {
        const maxLen = Math.max(konamiCode.length, vsnCode.length);
        const updated = [...prev, e.key].slice(-maxLen);

        if (
          updated.slice(-konamiCode.length).join("").toLowerCase() ===
          konamiCode.join("").toLowerCase()
        ) {
          setActive(true);
        }

        if (
          updated
            .slice(-vsnCode.length)
            .map((k) => k.toLowerCase())
            .join("") === vsnCode.join("")
        ) {
          setActive(true);
        }

        return updated;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setCurrentFact((prev) => (prev + 1) % funFacts.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [active]);

  return (
    <>
      {/* ✅ Invisible tap zone (works before Easter Egg activates) */}
      {!active && (
        <button
          onClick={handleSecretTap}
          className="fixed bottom-2 right-2 w-10 h-10 opacity-20 bg-blue-400 z-40"
          aria-label="Secret Trigger"
        />
      )}

      {/* 🧠 Secret Terminal */}
      {active && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 text-green-400 font-mono p-8 overflow-auto z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-3xl w-full mx-auto border border-green-400 rounded-lg p-6 shadow-lg bg-black/80"
          >
            <h2 className="text-xl mb-4 text-lime-300">
              [ Samrat's Dev Terminal - SECRET MODE ]
            </h2>
            <div className="text-lg leading-relaxed min-h-[4.5rem]">
              <Typewriter
                words={[funFacts[currentFact]]}
                loop={false}
                cursor
                typeSpeed={40}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>
            <div className="mt-6 text-sm text-green-500 opacity-80">
              <p>&gt; Loading story logs...</p>
              <p>&gt; Access granted. Welcome to the matrix, friend.</p>
              <p>&gt; Continue exploring...</p>
            </div>
            <Link
              to="/"
              onClick={() => setActive(false)}
              className="mt-4 text-sm underline text-green-400 hover:text-green-300"
            >
              Exit Terminal
            </Link>
          </motion.div>
        </div>
      )}
    </>
  );
}
