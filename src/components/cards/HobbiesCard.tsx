'use client';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import BentoCard from '../BentoCard';

export function HobbiesCard({ className }: { className?: string }) {
  return (
    <BentoCard
      variant="hobbies"
      className={`${className} relative group overflow-hidden`}
    >
      <div
        className="absolute inset-0 bg-no-repeat bg-left bg-cover"
        style={{
          backgroundImage:
            "url('https://media.giphy.com/media/0fz5uNPHnoVHLEhAW2/giphy.gif')",
        }}
      ></div>
      <div className="relative z-10 flex items-center justify-between h-full px-4">
        <h1 className="text-white text-xl font-semibold">Hobbies</h1>
        <ArrowUpRightIcon
          size={24}
          className="transition-transform duration-300 ease-in-out text-white group-hover:text-yellow-400 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </BentoCard>
  );
}
