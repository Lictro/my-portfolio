'use client';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import BentoCard from './BentoCard';

export function MyStackCard({ className }: { className?: string }) {
  return (
    <BentoCard className={`${className} relative group overflow-hidden`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.05),
              rgba(255,255,255,0.05) 1px,
              transparent 1px,
              transparent 10px
            )
          `,
        }}
      ></div>
      <div className="relative z-10 flex items-center justify-between h-full px-4">
        <h1 className="text-slate-200 text-xl font-semibold">My Stack</h1>
        <ArrowUpRightIcon
          size={24}
          className="transition-transform duration-300 ease-in-out text-slate-200 group-hover:text-[#64ffda] group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </BentoCard>
  );
}
