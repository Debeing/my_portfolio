'use client';

import React, { useState, useEffect } from "react";
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
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", nom: "TypeScript" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", nom: "Next.js" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", nom: "Tailwind" },
  ],
  Backend: [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", nom: "Node.js" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg", nom: "Express" },
  ],
  Database: [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", nom: "MySQL" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg", nom: "PostgreSQL" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg", nom: "MongoDB" },
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
  const [mounted, setMounted] = useState(false);

  // Résoudre l'erreur d'hydratation
  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Skeleton pendant l'hydratation
  if (!mounted) {
    return (
      <section
        id="Competence"
        className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 py-20 gap-16 z-40"
      >
        <div className="w-64 h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        <div className="flex flex-col gap-12 w-full max-w-5xl">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-32 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="flex flex-wrap gap-6">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="w-32 h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="Competence"
      className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 py-20 gap-16 z-40"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-teal-600 dark:text-teal-300">
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
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">
              {category}
            </h3>

            <div className="flex flex-wrap gap-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.nom}
                  variants={items}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform cursor-pointer bg-white dark:bg-gray-800"
                >
                  <Image src={skill.image} alt={skill.nom} width={32} height={32} className="w-8 h-8 object-contain" />
                  <span className="font-medium text-sm md:text-base text-gray-800 dark:text-gray-100">
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