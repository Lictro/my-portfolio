'use client';

import { ArrowUpRightIcon } from '@phosphor-icons/react';
import BentoCard from './BentoCard';

export function MyStatsCard({ className }: { className?: string }) {
  return (
    <BentoCard className={`${className} relative overflow-hidden`}>
      <div className="relative z-10 flex items-center justify-between h-full px-4">
        <h1 className="text-xl font-semibold">My Stats</h1>
        <ArrowUpRightIcon size={24} />
      </div>
    </BentoCard>
  );
}