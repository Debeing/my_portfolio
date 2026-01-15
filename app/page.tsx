'use client'

import Navbar from "@/components/ui/Navbar";
import Featured from "@/components/ui/Hero";
import AboutPro from "@/components/ui/About";
import SkillsSection from "@/components/ui/SkillSection";
import ProjectsSection from "@/components/ui/Projects";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import { useState } from "react";
import { ToastContainer } from "react-toastify";



export default function Home() {
  const [langue, setLangue] = useState<string>("Anglais")

  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar langue={langue} setLangue={setLangue} />

      {/* Hero avec particules en lignes */}
      <section className="relative min-h-screen">
       
        <Featured langue={langue} />
      </section>

      {/* About avec particules en points */}
      <section className="relative min-h-screen">
       
        <AboutPro langue={langue} />
      </section>

      {/* Skills */}
      <section className="relative min-h-screen">
        <SkillsSection langue={langue} />
      </section>

      {/* Projects */}
      <section className="relative min-h-screen">
        <ProjectsSection langue={langue} />
      </section>

      <section className="relative min-h-screen">
        <Contact langue={langue} />
        <Footer langue={langue} />

      </section>
      <ToastContainer />
    </div>

  );
}