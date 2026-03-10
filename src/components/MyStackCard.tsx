'use client';

import TechBadge from '@/app/projects/components/TechBadge';
import BentoCard from './BentoCard';

export function MyStackCard({ className }: { className?: string }) {
  return (
    <BentoCard className={`${className} relative overflow-hidden`}>
      <div className="relative z-10 flex flex-col h-full p-4 space-y-5">
        <h1 className="text-slate-200 text-xl font-semibold">Tech Stack </h1>

        <div className="flex flex-wrap gap-2">
          <TechBadge tech="TypeScript" />
          <TechBadge tech="React.js" />
          <TechBadge tech="Next.js" />
          <TechBadge tech="React Native" />
          <TechBadge tech="TailwindCSS" />
          <TechBadge tech="Node.js" />
          <TechBadge tech="C#" />
          <TechBadge tech="PostgreSQL" />
          <TechBadge tech="Firebase" />
        </div>
      </div>
    </BentoCard>
  );
}
