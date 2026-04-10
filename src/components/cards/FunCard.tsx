'use client';

import { ArrowUpRightIcon } from '@phosphor-icons/react';
import BentoCard from '../BentoCard';

export function FunCard({ className }: { className?: string }) {
  return (
    <BentoCard
      variant="fun"
      className={`${className} relative group overflow-hidden`}
      onClick={(e) => {
        e.currentTarget.classList.toggle('is-active');
      }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <svg preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80">
          <path
            fill="#efefd0"
            className="out-top"
            d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
          />
          <path
            fill="#004e89"
            className="in-top"
            d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
          />
        </svg>
      </div>

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0 z-20 flex items-center justify-center
          bg-black/40 backdrop-blur-md
          opacity-0 -translate-y-full
          transition-all duration-500 ease-out

          group-hover:opacity-100 group-hover:translate-y-0
          group-focus-within:opacity-100 group-focus-within:translate-y-0
          active:opacity-100 active:translate-y-0
        "
      >
        <span className="text-[#efefd0] text-lg font-semibold tracking-widest">
          COMING SOON
        </span>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-between h-full px-4">
        <h1 className="text-xl font-semibold text-[#efefd0]">Fun</h1>

        <ArrowUpRightIcon
          size={24}
          className="transition-transform duration-300 ease-in-out text-[#efefd0]
          group-hover:text-[#9d4edd]
          group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </BentoCard>
  );
}
