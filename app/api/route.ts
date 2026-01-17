import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, lastname, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL, // ton adresse
        pass: process.env.APP_PASS,   // mot de passe d'application
      },
    })

    // 📩 Mail que toi tu reçois
    await transporter.sendMail({
      from: process.env.USER_EMAIL, // ton email obligatoire
      to: process.env.USER_EMAIL,   // tu reçois
      replyTo: email,               // si tu réponds → ça va vers le visiteur
      subject: `DEMANDE DE SERVICE PAR ${name} ${lastname}`,
      text: `
        Nom: ${name} ${lastname}
        Email: ${email}
        
        Message:
        ${message}
      `,
    })

    // 📩 Mail de confirmation pour le visiteur
    await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: email,
      subject: "Confirmation de réception",
      text: `Bonjour ${name},\n\nMerci pour votre message ! Nous vous contacterons bientôt.\n\nCordialement,\nL'équipe.`,
    })

    return NextResponse.json({ message: "Votre message a été envoyé avec succès ✅" })
  } catch (error) {
    console.error("Erreur d'envoi email:", error)
    return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 })
  }
}

import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "Cv(1).pdf");
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Cv(1).pdf"',
    },
  });
}
