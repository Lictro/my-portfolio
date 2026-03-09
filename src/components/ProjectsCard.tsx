'use client';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import BentoCard from './BentoCard';

export function ProjectsCard({ className }: { className?: string }) {
  return (
    <BentoCard className={`${className} relative overflow-hidden`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      ></div>
      <div className="relative z-10 flex items-center justify-between h-full px-4">
        <h1 className="text-slate-200 text-xl font-semibold">Projects</h1>
        <ArrowUpRightIcon size={24} className="text-slate-200" />
      </div>
    </BentoCard>
  );
}
