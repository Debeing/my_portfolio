'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Github, ExternalLink, } from "lucide-react";
import { useTheme } from "next-themes";

import { ProjectDetaille } from "../ProjectDetaille";

const projetsWebInitial = [
  {
    id: 1,
    titre: "Site web",
    titreEN: ".NET Community Conference 2025 | 8th edition",
    description: "Développement frontend du site web de la communauté .NET Cameroun. Retranscription en code de maquettes fournies par les graphistes permettant d'obtenir des interfaces interactives et ludiques.",
    descriptionEN: "Frontend development for the .NET Community Cameroon website. Translating designer mockups into code to create interactive and engaging user interfaces.",
    technologies: ["Next.js", "Tailwind CSS", "Lucide-react", "TypeScript",],
    images: [
      "https://i.postimg.cc/3w0dPk6R/Screenshot-2026-01-17-001840.png",
      "https://i.postimg.cc/j23TxXwH/Screenshot-2026-01-17-002035.png",
      "https://i.postimg.cc/RFPyK0Mj/Screenshot-2026-01-17-002730.png"
    ],
    lienCode: "https://github.com/Debeing/Dotnet",
    lienDemo: "https://dotnet-rust.vercel.app/"
  },
  {
    id: 2,
    titre: "Portfolio Personnel – Mon Portfolio Web",
    titreEN: "Personal Portfolio – My Web Portfolio",
    description: "Mon site portfolio personnel pour présenter mes projets et compétences en développement web. Construit avec Next.js et Tailwind CSS, entièrement responsive et interactif.",
    descriptionEN: "My personal portfolio website showcasing my projects and web development skills. Built with Next.js and Tailwind CSS, fully responsive and interactive.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn/UI"],
    images: [
      "https://i.postimg.cc/BnKjz8Rv/Screenshot-2026-01-17-004901.png",
      "https://i.postimg.cc/dtd7Hkzx/Screenshot-2026-01-17-005451.png"
    ],
    lienCode: "https://github.com/Debeing/my_portfolio",
    lienDemo: "https://my-portfolio-omega-six-85.vercel.app/",
  },
  {
    id:3,
    titre:"e-commerce",
    titreEN:"e-commerce",
    description:"Site e‑commerce développé avec un système d'authentification sécurisé et un espace administrateur complet permettant la gestion des produits, des commandes et des utilisateurs. Le site offre une expérience utilisateur fluide et intuitive, permettant aux clients de parcourir les produits et de passer leurs commandes facilement, tout en donnant aux administrateurs un contrôle total sur la plateforme. Ce projet illustre mes compétences en développement web, gestion de bases de données et sécurité des applications.",
    descriptionEN:"E‑commerce website developed with a secure authentication system and a full-featured admin panel for managing products, orders, and users. The site provides a smooth and intuitive user experience, allowing customers to browse products and place orders easily, while giving administrators complete control over the platform. This project demonstrates my skills in web development, database management, and application security.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "daysiUI"],
    images:[
      "https://i.postimg.cc/ryGW2Qhz/Capture-d-ecran-2025-12-01-000700.png",
      "https://i.postimg.cc/xCBSsvzF/Capture-d-ecran-2025-12-01-001334.png",
      "https://i.postimg.cc/yYzMkYyH/Capture-d-ecran-2025-12-01-001433.png"
    ],
    lienCode:"https://github.com/tohaDEKENI/zoski-ecommerce",
    lienDemo:"https://faboutique.vercel.app/"
  }
];


type Props = {
  langue: string
}

export default function ProjectsSection({ langue }: Props) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [projetsWeb, setProjetsWeb] = useState(
    projetsWebInitial.map(p => ({ ...p, currentSlide: 0 }))
  );

  // Résoudre l'erreur d'hydratation
  useEffect(() => {
    setMounted(true);
  }, []);

  // Skeleton pendant l'hydratation
  if (!mounted) {
    return (
      <section
        id="projets"
        className="flex flex-col items-center w-full justify-center min-h-screen px-6 md:px-12 py-20 gap-12 z-50"
      >
        <div className="w-64 h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="projets"
      className="flex flex-col items-center w-full justify-center min-h-screen px-6 md:px-12 py-20 gap-12 z-50"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-teal-600 dark:text-teal-400">
        {langue === "Anglais" ? "My Projects" : "Mes Projets"}
      </h2>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-40">
        {projetsWeb.map((projet) => (
          <div
            key={projet.id}
            className="flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer z-50 bg-white dark:bg-gray-800"
          >
            {/* Carousel */}
            <div className="relative w-full">
              <Image
                src={projet.images[projet.currentSlide]}
                alt={langue === "Anglais" ? projet.titreEN : projet.titre}
                width={600}
                height={192}
                className="w-full h-48 object-cover rounded-t-xl"
                  unoptimized
              />

              {projet.images.length > 1 && (
                <div className="absolute left-2 right-2 top-1/2 flex justify-between -translate-y-1/2 z-50">
                  <button
                    className="btn btn-circle"
                    onClick={() =>
                      setProjetsWeb(prev =>
                        prev.map(p =>
                          p.id === projet.id
                            ? { ...p, currentSlide: (p.currentSlide - 1 + p.images.length) % p.images.length }
                            : p
                        )
                      )
                    }
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle"
                    onClick={() =>
                      setProjetsWeb(prev =>
                        prev.map(p =>
                          p.id === projet.id
                            ? { ...p, currentSlide: (p.currentSlide + 1) % p.images.length }
                            : p
                        )
                      )
                    }
                  >
                    ❯
                  </button>
                </div>
              )}
            </div>

            {/* Contenu projet */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {langue === "Anglais" ? projet.titreEN : projet.titre}
              </h3>
              <p className="text-sm text-gray-800 dark:text-gray-100">
                {langue === "Anglais" ? projet.descriptionEN : projet.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {projet.technologies.map(tech => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                {projet.lienDemo && (
                  <a
                    href={projet.lienDemo}
                    target="_blank"
                    className="flex items-center gap-1 font-medium hover:underline text-purple-700 dark:text-purple-300"
                  >
                    Demo <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {projet.lienCode && (
                  <a
                    href={projet.lienCode}
                    target="_blank"
                    className="flex items-center gap-1 font-medium hover:underline text-purple-700 dark:text-purple-300"
                  >
                    Code <Github className="w-4 h-4" />
                  </a>
                )}

                {/* Nouveau bouton "Voir plus" avec icône */}
                <ProjectDetaille projet={projet} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}