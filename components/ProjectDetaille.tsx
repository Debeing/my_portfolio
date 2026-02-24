'use client';

// import { Button } from "./ui/button";
import { Eye } from "lucide-react";
// import { useState } from "react";
import { X } from "lucide-react";
// import Image from "next/image";
type Project = {
    id: number;
    titre: string;
    description: string;
    technologies: string[];
    images: string[];
    lienCode: string;
    lienDemo: string;
};

type Props = {
    projet: Project;
};

export function ProjectDetaille({ projet }: Props) {
    // const [currentSlide, setCurrentSlide] = useState(0);

    // const nextSlide = () => {
    //     setCurrentSlide((prev) => (prev + 1) % projet.images.length);
    // };

    // const prevSlide = () => {
    //     setCurrentSlide((prev) => (prev - 1 + projet.images.length) % projet.images.length);
    // };

    // on crée un id unique pour le modal
    const modalId = `modal_project_${projet.id}`;

    return (
        <div className="hidden sm:block">
            {/* Bouton pour ouvrir le modal */}
            <label htmlFor={modalId} className="btn flex items-center gap-1 cursor-pointer">
                Voir plus <Eye className="w-4 h-4" />
            </label>

            {/* Input modal DaisyUI */}
            <input type="checkbox" id={modalId} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl h-[800px] relative bg-black/20 backdrop-blur-sm">
                    <h2 className="text-xl font-bold mb-4">{projet.titre}</h2>

                    {/* Carousel */}
                    {/* <div className="relative w-full h-10/12 rounded-lg overflow-hidden mb-4">
                        <Image
                            src={projet.images[currentSlide]}
                            alt={`${projet.titre} image ${currentSlide + 1}`}
                            className="w-full h-full object-cover border-2"
                        />
                        {projet.images.length > 1 && (
                            <>
                                <Button
                                    onClick={prevSlide}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle bg-white/80 hover:bg-white"
                                >
                                    ❮
                                </Button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle bg-white/80 hover:bg-white"
                                >
                                    ❯
                                </button>
                            </>
                        )}
                    </div> */}

                    {/* Bouton fermer */}
                    <div className="modal-action absolute bottom-4 right-4">
                        <label htmlFor={modalId} className="btn cursor-pointer">
                            <X />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
