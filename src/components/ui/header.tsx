'use client';

import Link from 'next/link';
import { ArrowLeftIcon, PlusIcon } from '@phosphor-icons/react';

type Props = {
  pageName: string;
  onOpen?: () => void;
};

export default function Header({ pageName, onOpen }: Props) {
  return (
    <div className="mb-12 flex items-center justify-between gap-4">
      {/* Left */}
      <div className="flex flex-col">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-ring group transition-colors ml-1 mb-3"
        >
          <ArrowLeftIcon
            size={20}
            className="transition-transform duration-300 ease-in-out group-hover:-translate-x-1"
          />
          <h3 className="text-xl">Luis Alvarez</h3>
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold text-slate-200">
          {pageName}
        </h1>
      </div>

      {/* Right */}
      {onOpen && (
        <div>
          {/* Desktop */}
          <button
            onClick={onOpen}
            className="hidden sm:inline-flex px-4 py-2.5 bg-[#64ffda] text-[#0a192f] rounded-lg font-medium transition hover:brightness-95 active:scale-[0.98]"
          >
            Leave a Message
          </button>

          {/* Mobile */}
          <button
            onClick={onOpen}
            className="inline-flex sm:hidden w-14 h-14 items-center justify-center rounded-full bg-[#64ffda] text-[#0a192f] shadow-lg transition hover:brightness-95 active:scale-95"
            aria-label="Leave a Message"
          >
            <PlusIcon size={28} weight="bold" />
          </button>
        </div>
      )}
    </div>
  );
}
