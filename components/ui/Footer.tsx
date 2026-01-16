'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { useTheme } from 'next-themes'

type Props = {
    langue: string
}

export default function Footer({ langue }: Props) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const currentYear = new Date().getFullYear()

  // Résoudre l'erreur d'hydratation
  useEffect(() => {
    setMounted(true)
  }, [])

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/Debeing/' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/mbaitel-am-mbainaissem-eric-62a1b929a/' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:mbaitelameric@gmail.com' },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // Skeleton pendant l'hydratation
  if (!mounted) {
    return (
      <footer className="py-14 mt-24 z-50 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="w-full h-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </footer>
    )
  }

  return (
    <motion.footer
      className="py-14 mt-24 z-50 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 z-50">

        {/* Bloc contact / À propos */}
        <div className="space-y-4 z-50">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {langue === "Anglais" ? "About" : "À propos"}
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {langue === "Anglais"
              ? "Developer passionate about modern interfaces and user experience. Available for your custom web projects."
              : "Développeur passionné par les interfaces modernes et l'expérience utilisateur. Disponible pour vos projets web sur mesure."}
          </p>
          <div className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> mbaitelameric@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +237 688-743-355
            </p>
          </div>
        </div>

        {/* Bloc navigation rapide */}
        <div className="space-y-4 z-50">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {langue === "Anglais" ? "Quick Navigation" : "Navigation"}
          </h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#A propos" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                {langue === "Anglais" ? "About" : "À propos"}
              </a>
            </li>
            <li>
              <a href="#Competence" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                {langue === "Anglais" ? "Projects" : "Projets"}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                {langue === "Anglais" ? "Contact" : "Contact"}
              </a>
            </li>
          </ul>
        </div>

        {/* Bloc réseaux sociaux */}
        <div className="space-y-4 z-50">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {langue === "Anglais" ? "Social Networks" : "Réseaux sociaux"}
          </h2>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.2, backgroundColor: '#14b8a6', color: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-xs z-50 text-gray-600 dark:text-gray-400">
        © {currentYear} <span className="font-medium text-gray-700 dark:text-gray-300">Debeing Dev</span>.{" "}
        {langue === "Anglais" ? "All rights reserved." : "Tous droits réservés"} 💙.
      </div>
    </motion.footer>
  )
}