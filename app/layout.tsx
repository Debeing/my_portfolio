import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";


export const metadata: Metadata = {
  title: "Mbaitel-am Mbainaissem Eric – Portfolio Développeur Web",
  description: "Portfolio en ligne de Mbaitel-am Mbainaissem Eric. Découvrez mes projets web, mes compétences en développement frontend et backend, et contactez-moi pour vos projets.",
  keywords: ["Portfolio", "Développeur Web", "React", "Next.js", "Node.js", "Projets", "Mbaitel-am Mbainaissem Eric"],
  authors: [{ name: "Mbaitel-am Mbainaissem Eric", url: "https://github.com/Debeing" }],
  openGraph: {
    title: "Mbaitel-am Mbainaissem Eric – Portfolio Développeur Web",
    description: "Découvrez mes projets web et compétences en développement frontend et backend.",
    url: "https://ton-domaine.com",
    siteName: "Mbaitel-am Mbainaissem Eric Portfolio",
    images: [
      {
        url: "https://i.postimg.cc/3x3QzSGV/Portfolio-Mbaitel-am-Mbainaissem-Eric.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Mbaitel-am Mbainaissem Eric",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableColorScheme
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

