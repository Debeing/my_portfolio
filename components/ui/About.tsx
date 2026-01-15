"use client";

import React from "react";
import { Code, Server, Database, BookOpen, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import CVDownloader from "../CVDownloader";

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
            id="A propos"
            className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 py-20 gap-12 text-center"
        >
            <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={0}
                className="text-5xl md:text-6xl font-bold text-teal-600 dark:text-teal-400"
            >
                {langue === "Francais" ? "À propos de moi" : "About Me"}
            </motion.h1>

            <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={1}
                className="text-2xl md:text-3xl font-semibold"
            >
                {langue === "Francais"
                    ? "Étudiant en informatique & passionné de développement"
                    : "Computer Science Student & Development Enthusiast"}
            </motion.h2>

            <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={2}
                className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
                {langue === "Francais"
                    ? "Passionné par le développement web et les technologies, je conçois et développe des applications modernes en utilisant les outils du frontend et du backend. Je continue à élargir mes compétences chaque jour à travers des projets concrets et des expérimentations personnelles. Curieux et motivé, je recherche des opportunités pour mettre en pratique mes connaissances, apprendre encore plus et contribuer à des projets réels."
                    : "Passionate about web development and technology, I design and build modern applications using both frontend and backend tools. I constantly expand my skills through real projects and personal experiments. Curious and motivated, I am looking for opportunities to apply my knowledge, learn even more, and contribute to real projects."}
            </motion.p>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={3}
                className="flex flex-wrap justify-center gap-6 mt-6"
            >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">
                    <Code className="w-5 h-5 text-purple-600" />
                    {langue === "Francais" ? "Développement Web" : "Web Development"}
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">
                    <Server className="w-5 h-5 text-purple-600" />
                    {langue === "Francais" ? "Backend & API" : "Backend & API"}
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">
                    <Database className="w-5 h-5 text-purple-600" />
                    {langue === "Francais" ? "Bases de données" : "Databases"}
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    {langue === "Francais" ? "Apprentissage continu" : "Continuous Learning"}
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">
                    <Rocket className="w-5 h-5 text-purple-600" />
                    {langue === "Francais" ? "Projets personnels" : "Personal Projects"}
                </div>
            </motion.div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={4}
            >
                <CVDownloader langue={langue}/>
            </motion.div>
        </section>
    );
}
