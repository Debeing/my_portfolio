'use client';

import { SetStateAction, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { SelectDemo } from "../Language";
import CVDownloader from "../CVDownloader";


type Props = {
    langue: string,
    setLangue: React.Dispatch<SetStateAction<string>>
}

export default function Navbar({ langue, setLangue }: Props) {
    const { theme, setTheme } = useTheme();
    const [active, setActive] = useState('domicile');
    const [menuOpen, setMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Résoudre l'erreur d'hydratation
    useEffect(() => {
        setMounted(true);
    }, []);

    const menuItems = [
        { id: 'domicile', label: 'Domicile', anglais: 'Home' },
        { id: 'A propos', label: 'A propos', anglais: 'About' },
        { id: 'Competence', label: 'Compétences', anglais: 'Skills' },
        { id: 'projets', label: 'Projets', anglais: 'Projects' },
        { id: 'contact', label: 'Contact', anglais: 'Contact' },
    ];


    const handleScroll = (id: string) => {
        setActive(id);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    }

    // Classes CSS fixes (pas dépendantes du thème avant le montage)
    const textMain = 'text-gray-800 dark:text-gray-200';
    const textActive = 'text-purple-600 dark:text-purple-400';
    const hoverText = 'hover:text-purple-600 dark:hover:text-purple-400';
    const logoDot = 'text-gray-700 dark:text-gray-300';
    const menuBg = 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm';

    // Afficher un skeleton pendant l'hydratation pour éviter le flash
    if (!mounted) {
        return (
            <header className="fixed w-full bg-transparent backdrop-blur-md shadow-md z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-8">
                    <div className="font-bold text-teal-700 dark:text-teal-400 text-sm md:text-base lg:text-lg">
                        Debeing Dev <span className="text-gray-700 dark:text-gray-300">•</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                </div>
            </header>
        );
    }

    return (
        <header className="fixed w-full mx-auto max-w-7xl bg-transparent backdrop-blur-md shadow-md z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-8">
                {/* Logo */}
                <div className={`font-bold text-teal-700 dark:text-teal-400 
                text-sm       /* par défaut petit */
                md:text-base  /* moyen sur écrans ≥ md */
                lg:text-lg`}>
                    Debeing Dev <span className={logoDot}>•</span>
                </div>


                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-6">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className={`group relative font-medium ${textMain} ${hoverText} transition-colors ${active === item.id ? textActive : ''}`}
                        >
                            {langue === "Anglais" ? item.anglais : item.label}
                            {active === item.id && (
                                <span className={`absolute bottom-0 left-0 w-full h-1 rounded-full ${textActive} bg-current`}></span>
                            )}
                        </button>
                    ))}


                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        {theme === 'light' ? <Moon /> : <Sun />}
                    </Button>

                    <CVDownloader langue={langue}/>
                    <SelectDemo langue={langue} setLangue={setLangue} />
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        {theme === 'light' ? <Moon /> : <Sun />}
                    </Button>
                    <SelectDemo langue={langue} setLangue={setLangue} />
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className={`${menuBg} px-6 pb-4 space-y-2 md:hidden`}>
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className={`block w-full text-left font-medium ${textMain} py-2 transition-colors ${active === item.id ? textActive : hoverText}`}
                        >
                            {langue === "Anglais" ? item.anglais : item.label}
                        </button>
                    ))}
                    <CVDownloader langue={langue}/>
                </div>
            )}
        </header>
    );
}