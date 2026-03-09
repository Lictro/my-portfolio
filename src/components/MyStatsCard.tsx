'use client';

import { ArrowUpRightIcon } from '@phosphor-icons/react';
import BentoCard from './BentoCard';

export function MyStatsCard({ className }: { className?: string }) {
  return (
    <BentoCard className={`${className} relative group overflow-hidden`}>
      <div className="relative z-10 flex items-center justify-between h-full px-4">
        <h1 className="text-xl font-semibold text-slate-200">My Stats</h1>
        <ArrowUpRightIcon
          size={24}
          className="transition-transform duration-300 ease-in-out text-slate-200 group-hover:text-[#64ffda] group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </BentoCard>
  );
}
