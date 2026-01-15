'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Share2, Phone, Mail, Github, Linkedin, Loader2Icon } from 'lucide-react'
import { useTheme } from "next-themes";
import { useState } from "react";
import { toast } from "react-toastify";

type Props = {
  langue: string
}

export default function Contact({ langue }: Props) {
  const { theme } = useTheme();
  const [name, setName] = useState<string>("")
  const [lastName, setLastname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, lastName, email, message })
      });
      const data = await res.json();
      toast(data.message);
    } catch (error) {
      toast(langue === "Anglais" ? "An error occurred!" : "Une erreur est survenue !");
    } finally {
      setLoading(false);
      setLastname("");
      setEmail("");
      setMessage("");
      setName("");
    }
  }
  

  // Couleurs dynamiques
  const cardColor = theme === "light" ? "#ffffff" : "#1f2937";
  const textColor = theme === "light" ? "#1f2937" : "#f9fafb";
  const subTextColor = theme === "light" ? "#4b5563" : "#d1d5db";
  const hoverCardColor = theme === "light" ? "#f3f4f6" : "#374151";

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-20 gap-12 z-40"
      
    >
      {/* Titre */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#14b8a6" }}>
          {langue === "Anglais" ? "Contact Me" : "Contactez-moi"}
        </h1>
        <p className="text-lg" style={{ color: subTextColor }}>
          {langue === "Anglais"
            ? "Got an idea? Let's turn it into reality together!"
            : "Une idée ? Transformons-la en réalité ensemble !"}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">

        {/* --- Section Cartes Contact --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Téléphone */}
          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: hoverCardColor }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-3 transition-all"
            style={{ backgroundColor: cardColor }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-500 text-white absolute -top-6">
              <Phone />
            </div>
            <h2 className="text-lg font-semibold mt-6">
              {langue === "Anglais" ? "Phone" : "Téléphone"}
            </h2>
            <p className="text-sm text-gray-400">+237 688-743-355</p>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: hoverCardColor }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-3 transition-all"
            style={{ backgroundColor: cardColor }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-500 text-white absolute -top-6">
              <Mail />
            </div>
            <h2 className="text-lg font-semibold mt-6">Email</h2>
            <p className="text-sm text-gray-400">mbaitelameric@gmail.com</p>
          </motion.div>

          {/* Adresse */}
          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: hoverCardColor }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-3 transition-all"
            style={{ backgroundColor: cardColor }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-500 text-white absolute -top-6">
              <MapPin />
            </div>
            <h2 className="text-lg font-semibold mt-6">
              {langue === "Anglais" ? "Address" : "Adresse"}
            </h2>
            <p className="text-sm text-gray-400">Ngaoundéré, Cameroun</p>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: hoverCardColor }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-4 transition-all"
            style={{ backgroundColor: cardColor }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-500 text-white absolute -top-6">
              <Share2 />
            </div>
            <h2 className="text-lg font-semibold mt-6">
              {langue === "Anglais" ? "Follow me" : "Suivez-moi"}
            </h2>
            <div className="flex gap-4 text-xl">
              <a href="https://github.com/Debeing/" target="_blank" className="hover:text-teal-500"><Github /></a>
              <a href="https://www.linkedin.com/in/mbaitel-am-mbainaissem-eric-62a1b929a/" target="_blank" className="hover:text-teal-500"><Linkedin /></a>
              <a href='mailto:mbaitelameric@gmail.com' className="hover:text-teal-500"><Mail /></a>
            </div>
          </motion.div>
        </div>

        {/* --- Formulaire --- */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow-xl p-8 flex flex-col gap-6 z-40"
          style={{ backgroundColor: cardColor, color: textColor }}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder={langue === "Anglais" ? "First Name" : "Prénom"}
              required
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <Input
              placeholder={langue === "Anglais" ? "Last Name" : "Nom"}
              required
              value={lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastname(e.target.value) }
            />
          </div>
          <Input
            placeholder={langue === "Anglais" ? "Email Address" : "Adresse e-mail"}
            type="email"
            required
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <Textarea
            placeholder={langue === "Anglais" ? "Message" : "Message"}
            rows={5}
            required
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          />
          <Button
            type="submit"
            className="font-semibold transition-all cursor-pointer"
            style={{
              backgroundColor: "#14b8a6",
              color: "#ffffff"
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2Icon className="animate-spin w-5 h-5" />
                {langue === "Anglais" ? "Sending..." : "Envoi..."}
              </>
            ) : (
              langue === "Anglais" ? "Send" : "Envoyer"
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
