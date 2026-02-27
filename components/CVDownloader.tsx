'use client';

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react"; // icône spinner

type Props = {
  langue: string;
};

const CVDownloader = ({ langue }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // On laisse un petit délai pour l'expérience utilisateur
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <a href="/api" onClick={handleClick}>
      <Button className="w-full" variant="outline" disabled={loading}>
        {loading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="animate-spin" size={16} />
            {langue === "Anglais" ? "Downloading..." : "Téléchargement..."}
          </span>
        ) : (
          <span>
            {langue === "Anglais" ? "Download my CV" : "Télécharger mon CV"}
          </span>
        )}
      </Button>
    </a>
  );
};

export default CVDownloader;
