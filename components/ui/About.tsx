"use client";

import React from "react";
import { Code, Server, Database, BookOpen, Rocket } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
    langue: string;
};

export default function AboutPage({ langue }: Props) {

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: custom * 0.2 },
        }),
    };

    return (
        <section
  id="A-propos"
  className="flex flex-col items-center justify-center px-6 md:px-12 py-12 gap-6 text-center"
>
  <h1 className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400">
    {langue === "Francais" ? "À propos de moi" : "About Me"}
  </h1>

  <h2 className="text-xl md:text-2xl font-semibold">
    {langue === "Francais"
      ? "Étudiant en informatique & passionné de développement"
      : "Computer Science Student & Development Enthusiast"}
  </h2>

  <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
    {langue === "Francais"
      ? "Passionné par le développement web et les technologies, je conçois et développe des applications modernes en utilisant les outils du frontend et du backend. Je continue à élargir mes compétences chaque jour à travers des projets concrets et des expérimentations personnelles."
      : "Passionate about web development and technology, I design and build modern applications using both frontend and backend tools. I constantly expand my skills through real projects and personal experiments."}
  </p>

  <div className="flex flex-wrap justify-center gap-4 mt-4">
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm">
      <Code className="w-5 h-5 text-purple-600" />
      {langue === "Francais" ? "Développement Web" : "Web Development"}
    </div>

    <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm">
      <Server className="w-5 h-5 text-purple-600" />
      {langue === "Francais" ? "Backend & API" : "Backend & API"}
    </div>

    <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm">
      <Database className="w-5 h-5 text-purple-600" />
      {langue === "Francais" ? "Bases de données" : "Databases"}
    </div>

    <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm">
      <BookOpen className="w-5 h-5 text-purple-600" />
      {langue === "Francais" ? "Apprentissage continu" : "Continuous Learning"}
    </div>

    <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm">
      <Rocket className="w-5 h-5 text-purple-600" />
      {langue === "Francais" ? "Projets personnels" : "Personal Projects"}
    </div>
  </div>
</section>

    );
}
