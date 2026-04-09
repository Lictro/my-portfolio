'use client';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import BentoCard from './BentoCard';
import { useRouter } from 'next/navigation';

export function GuestbookCard({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <BentoCard
      onClick={() => router.push('/guests')}
      className={`${className} relative group overflow-hidden`}
    >
      <div className="relative z-10 flex items-center justify-between h-full px-4">
        <h1 className="text-slate-200 text-xl font-semibold">Guestbook</h1>
        <ArrowUpRightIcon
          size={24}
          className="transition-transform duration-300 ease-in-out text-slate-200 group-hover:text-ring group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </BentoCard>
  );
}
