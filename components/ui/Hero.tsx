'use client';

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Award, } from "lucide-react";
import { motion, } from "framer-motion";
import Image from 'next/image';

type Props = {
    langue: string
};

// Types pour les certificats
interface Certificate {
    id: string;
    title: string;
    titleEn: string;
    issuer: string;
    date: string;
    imageUrl: string;
    expiresAt: Date; // Date d'expiration d'affichage
}

// Hook machine à écrire avec répétition
function useTypewriter(words: string[], speed = 100, pause = 1500) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [forward, setForward] = useState(true);
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        if (index >= words.length) {
            setIndex(0);
            return;
        }

        if (forward) {
            if (subIndex < words[index].length) {
                setTimeout(() => {
                    setSubIndex(subIndex + 1);
                    setDisplayed(words[index].slice(0, subIndex + 1));
                }, speed);
            } else {
                setTimeout(() => setForward(false), pause);
            }
        } else {
            if (subIndex > 0) {
                setTimeout(() => {
                    setSubIndex(subIndex - 1);
                    setDisplayed(words[index].slice(0, subIndex - 1));
                }, speed / 2);
            } else {
                setForward(true);
                setIndex(index + 1);
            }
        }
    }, [subIndex, index, forward, words, speed, pause]);

    return displayed;
}

// Composant pour gérer les certificats
function CertificateManager({ langue }: { langue: string }) {
    const [certificates, setCertificates] = useState<Certificate[]>([]);

    // Charger les certificats depuis le state (vous pouvez aussi utiliser window.storage)
    useEffect(() => {
        // Exemple de certificats avec dates d'expiration
        const sampleCertificates: Certificate[] = [
            {
                id: "1",
                title: "Certification React Avancé",
                titleEn: "Advanced React Certification",
                issuer: "Meta",
                date: "2026-01-10",
                imageUrl: "https://via.placeholder.com/600x400/6366f1/ffffff?text=React+Certificate",
                expiresAt: new Date("2026-02-15") // Afficher jusqu'au 15 février
            },
            {
                id: "2",
                title: "Formation Full Stack",
                titleEn: "Full Stack Training",
                issuer: "Udemy",
                date: "2026-01-05",
                imageUrl: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Full+Stack+Certificate",
                expiresAt: new Date("2026-02-01") // Afficher jusqu'au 1er février
            }
        ];

        // Filtrer les certificats non expirés
        const validCerts = sampleCertificates.filter(
            cert => cert.expiresAt > new Date()
        );
        setCertificates(validCerts);

        // Vérifier périodiquement si des certificats ont expiré
        const interval = setInterval(() => {
            setCertificates(prev => 
                prev.filter(cert => cert.expiresAt > new Date())
            );
        }, 60000); // Vérifier chaque minute

        return () => clearInterval(interval);
    }, []);

    if (certificates.length === 0) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {certificates.map((cert, idx) => (
                <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                    className="relative group"
                >
                    {/* Badge d'information */}
                    <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {langue === "Francais" ? "Nouveau" : "New"}
                    </div>

                    {/* Image du certificat */}
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]">
                       
                        
                        {/* Overlay avec les détails */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <h3 className="text-white font-bold text-lg mb-1">
                                {langue === "Francais" ? cert.title : cert.titleEn}
                            </h3>
                            <p className="text-gray-200 text-sm">
                                {cert.issuer} • {cert.date}
                            </p>
                        </div>
                    </div>

                    {/* Informations sous l'image */}
                    <div className="mt-3 space-y-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                            {langue === "Francais" ? cert.title : cert.titleEn}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {cert.issuer} • {cert.date}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default function Featured({ langue }: Props) {
    const slideLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const slideUp = (delay = 0) => ({
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
    });

    const fadeIn = (delay = 0) => ({
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, delay } },
    });

    const scaleIn = (delay = 0) => ({
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay } },
    });

    const words = langue === "Francais"
        ? ["Développeur Web", "Étudiant en Informatique", "Passionné de Tech"]
        : ["Web Developer", "Computer Science Student", "Tech Enthusiast"];

    const typewriterText = useTypewriter(words, 100, 1200);

    return (
        <section
            id="domicile"
            className="relative flex flex-col-reverse md:flex-row items-center pt-32 md:pt-0 justify-center min-h-screen max-w-7xl mx-auto px-6 md:px-8 gap-12"
        >
            <motion.div
                className="flex-1 space-y-8 md:space-y-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
            >
                <motion.div variants={slideLeft} className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400">
                    MBAITEL-AM MBAINAISSEM Eric
                </motion.div>

                <motion.div
                    variants={slideUp(0.2)}
                    className="text-2xl md:text-3xl font-semibold"
                >
                    {langue === "Francais" ? "Je suis " : "I'm "}
                    <span className="text-purple-600">{typewriterText}</span>
                    <span className="animate-pulse">|</span>
                </motion.div>

                <motion.p variants={slideUp(0.4)} className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
                    {langue === "Francais" ? "Étudiant en informatique | Développeur Web Full Stack | Passionné par la création de solutions web innovantes, l'optimisation des performances et la résolution de défis techniques | Toujours motivé par l'apprentissage des nouvelles technologies."
                        : "Computer Science Student | Full Stack Web Developer | Passionate about building innovative web solutions, optimizing performance, and solving technical challenges | Always motivated by learning new technologies."
                    }
                </motion.p>

                {/* Section modifiée avec les certificats */}
                <motion.div variants={fadeIn(0.6)} className="space-y-4">
                    <CertificateManager langue={langue} />
                    {/* Vous pouvez garder CVDownloader ici aussi si vous voulez */}
                    {/* <CVDownloader langue={langue} /> */}
                </motion.div>

                <motion.div variants={fadeIn(0.8)} className="flex gap-6 mt-6">
                    <a href="https://www.linkedin.com/in/sabyoud-zohair-a5635920a/" target="_blank" className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                        <Linkedin className="w-8 h-8 text-gray-800 dark:text-gray-200" />
                    </a>
                    <a href="https://github.com/tohaDEKENI/" target="_blank" className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                        <Github className="w-8 h-8 text-gray-800 dark:text-gray-200" />
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                className="flex-1 flex justify-center md:justify-end"
                variants={scaleIn(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
            >
                <div className="w-80 h-80 md:w-[30rem] md:h-[30rem] rounded-xl overflow-hidden p-5">
                    <Image
                        src="https://i.postimg.cc/2yxzv97D/507988285-122179633592309785-3607537026543587611-n.jpg"
                        alt="avatar"
                        width={480}
                        height={480}
                        className="w-full h-full object-cover image"
                    />
                </div>
            </motion.div>

            <div className="hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 md:flex flex-col items-center text-gray-600 dark:text-gray-300 animate-bounce">
                <a href="#A propos" className="flex flex-col items-center gap-2">
                    <div className="text-3xl">🖱️</div>
                    <p className="text-base md:text-lg">Scroll Down</p>
                </a>
            </div>
        </section>
    );
}