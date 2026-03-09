'use client';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import BentoCard from './BentoCard';
import { useRouter } from 'next/navigation';

export function ProjectsCard({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <BentoCard
      onClick={() => router.push('/projects')}
      className={`${className} relative group overflow-hidden`}
    >
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
        <ArrowUpRightIcon
          size={24}
          className="transition-transform duration-300 ease-in-out text-slate-200 group-hover:text-ring group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </BentoCard>
  );
}
