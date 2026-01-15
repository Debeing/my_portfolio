'use client';

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Variants } from "framer-motion";
import Image from "next/image";

const skillsData = {
  Frontend: [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", nom: "HTML" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", nom: "CSS" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", nom: "Javascript" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", nom: "React" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", nom: "Tailwind" },

  ],
  Backend: [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", nom: "Node.js" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg", nom: "Express" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", nom: "Flask" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", nom: "Next.js" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", nom: "Python" }
  ],
  Database: [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", nom: "MySQL" },
  ],
  Tools: [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", nom: "Git" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", nom: "VSCode" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg", nom: "Insomnia" },
  ],
};

type Props = {
  langue: string
}

export default function SkillsSection({ langue }: Props) {
  const { theme } = useTheme();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const items: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="Competence"
      className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 py-20 gap-16 z-40"
      style={{ backgroundColor: theme === "light" ? "#f9fafb" : "#020b1dff" }}
    >
      <h2
        className="text-4xl md:text-5xl font-bold mb-12"
        style={{ color: theme === "light" ? "#14b8a6" : "#5eead4" }}
      >
        {langue === "Anglais" ? "My Skills" : "Mes Compétences"}
      </h2>

      <div className="flex flex-col gap-12 w-full max-w-5xl">
        {Object.entries(skillsData).map(([category, skills]) => (
          <motion.div
            key={category}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-4"
          >
            <h3
              className="text-2xl md:text-3xl font-semibold"
              style={{ color: theme === "light" ? "#1f2937" : "#f9fafb" }}
            >
              {category}
            </h3>

            <div className="flex flex-wrap gap-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.nom}
                  variants={items}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform cursor-pointer"
                  style={{ backgroundColor: theme === "light" ? "#ffffff" : "#1f2937" }}
                >
                  <Image src={skill.image} alt={skill.nom} width={32} height={32} className="w-8 h-8 object-contain" />
                  <span
                    className="font-medium text-sm md:text-base"
                    style={{ color: theme === "light" ? "#1f2937" : "#f9fafb" }}
                  >
                    {skill.nom}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
