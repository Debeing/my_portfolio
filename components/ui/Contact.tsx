'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Share2, Phone, Mail, Github, Linkedin, Loader2Icon } from 'lucide-react'
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

type Props = {
  langue: string
}

export default function Contact({ langue }: Props) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState<string>("")
  const [lastName, setLastname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  // Résoudre l'erreur d'hydratation
  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Skeleton pendant l'hydratation
  if (!mounted) {
    return (
      <section
        id="contact "
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-20 gap-12 z-40"
      >
        <div className="w-64 h-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse"></div>
            ))}
          </div>
          <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse"></div>
        </div>
      </section>
    );
  }

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
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-teal-600 dark:text-teal-400">
          {langue === "Anglais" ? "Contact Me" : "Contactez-moi"}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
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
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-3 transition-all bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-500 text-white absolute -top-6">
              <Phone />
            </div>
            <h2 className="text-lg font-semibold mt-6 text-gray-800 dark:text-gray-100">
              {langue === "Anglais" ? "Phone" : "Téléphone"}
            </h2>
            <p className="text-sm text-gray-400">+237 688-743-355</p>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-3 transition-all bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-500 text-white absolute -top-6">
              <Mail />
            </div>
            <h2 className="text-lg font-semibold mt-6 text-gray-800 dark:text-gray-100">Email</h2>
            <p className="text-sm text-gray-400">mbaitelameric@gmail.com</p>
          </motion.div>

          {/* Adresse */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-3 transition-all bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-500 text-white absolute -top-6">
              <MapPin />
            </div>
            <h2 className="text-lg font-semibold mt-6 text-gray-800 dark:text-gray-100">
              {langue === "Anglais" ? "Address" : "Adresse"}
            </h2>
            <p className="text-sm text-gray-400">Ngaoundéré, Cameroun</p>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-4 transition-all bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-500 text-white absolute -top-6">
              <Share2 />
            </div>
            <h2 className="text-lg font-semibold mt-6 text-gray-800 dark:text-gray-100">
              {langue === "Anglais" ? "Follow me" : "Suivez-moi"}
            </h2>
            <div className="flex gap-4 text-xl text-gray-700 dark:text-gray-300">
              <Link href="https://github.com/Debeing/" target="_blank" className="hover:text-teal-500"><Github /></Link>
              <Link href="https://www.linkedin.com/in/mbaitel-am-mbainaissem-eric-62a1b929a/" target="_blank" className="hover:text-teal-500"><Linkedin /></Link>
              <Link href='mailto:mbaitelameric@gmail.com' className="hover:text-teal-500"><Mail /></Link  >
            </div>
          </motion.div>
        </div>

        {/* --- Formulaire --- */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow-xl p-8 flex flex-col gap-6 z-40 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
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
            className="font-semibold transition-all cursor-pointer bg-teal-600 hover:bg-teal-700 text-white"
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