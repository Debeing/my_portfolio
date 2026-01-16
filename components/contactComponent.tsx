"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Share2 } from "lucide-react"

export function ContactSection() {
  const cards = [
    {
      title: "Téléphone",
      content: "+237 688 743 355",
      icon: <Phone className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Messagerie Électronique",
      content: "mbaitelameric@gmail.com",
      icon: <Mail className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Adresse",
      content: "Ngaoundéré, Cameroun",
      icon: <MapPin className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Suivez-Moi",
      content: (
        <div className="flex gap-4 mt-2 text-lg">
          <a href="#" className="hover:text-yellow-500">🐙</a>
          <a href="#" className="hover:text-yellow-500">🐦</a>
          <a href="#" className="hover:text-yellow-500">⚽</a>
          <a href="#" className="hover:text-yellow-500">in</a>
        </div>
      ),
      icon: <Share2 className="w-6 h-6 text-yellow-500" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ scale: 1, y: 0, boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Card className="rounded-xl p-6 bg-neutral-900 text-white border border-neutral-800">
            <CardHeader className="flex flex-col items-center gap-2 text-center">
              <div className="p-3 rounded-lg bg-neutral-800">{card.icon}</div>
              <CardTitle className="text-lg font-semibold">{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center font-medium">
              {typeof card.content === "string" ? (
                <span className="text-yellow-400">{card.content}</span>
              ) : (
                card.content
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
