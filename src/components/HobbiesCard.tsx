"use client";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import BentoCard from "./BentoCard";

export function HobbiesCard({ className }: { className?: string }) {
  return (
    <BentoCard variant="hobbies" className={`${className} relative overflow-hidden`}>
      {/* Background que llena todo */}
      <div
        className="absolute inset-0 bg-no-repeat bg-left bg-cover"
        style={{ backgroundImage: "url('https://media.giphy.com/media/0fz5uNPHnoVHLEhAW2/giphy.gif')" }}
      ></div>

      {/* Contenido: texto a la izquierda, flecha a la derecha */}
      <div className="relative z-10 flex items-center justify-between h-full px-4">
        <h1 className="text-white text-xl font-semibold">Hobbies</h1>
        <ArrowUpRightIcon size={24} color="white" />
      </div>
    </BentoCard>
  );
}