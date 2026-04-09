'use client';

import { useMemo, useState } from 'react';
import AddGuestModal from './components/AddGuestModal';
import { createAvatar } from '@dicebear/core';
import { notionists } from '@dicebear/collection';
import { useGuests } from '@/hooks/useGuests';
import { addGuest } from '@/lib/guests';
import { EmptyState } from './components/EmptyState';
import { Loader } from './components/Loader';
import { ArrowLeftIcon, PlusIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import GuestPolaroid from './components/GuestPolaroid';

export default function GuestsPage() {
  const [open, setOpen] = useState(false);
  const { guests, loading } = useGuests();

  const guestsWithAvatars = useMemo(
    () =>
      guests.map((msg) => ({
        ...msg,
        avatarSvg: createAvatar(notionists, {
          lips: [msg.config.mouth],
          eyes: [msg.config.eyes],
          hair: [msg.config.hair],
          backgroundColor: [msg.config.background],
          gesture: [msg.config.gesture],
          gestureProbability: !msg.config.gesture ? 0 : 100,
          seed: msg.config.seed,
          size: 200,
        }).toString(),
      })),
    [guests]
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-12 flex items-center justify-between gap-4">
          {/* Left: back link + title */}
          <div className="flex flex-col sm:flex-col">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-ring group transition-colors mb-3"
            >
              <ArrowLeftIcon
                size={20}
                className="transition-transform duration-300 ease-in-out group-hover:-translate-x-1"
              />
              <h3 className="text-xl">Luis Alvarez</h3>
            </Link>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-200">
              Guestbook
            </h1>
          </div>

          {/* Right: Responsive button */}
          <div>
            {/* Desktop: Leave a Message */}
            <button
              onClick={() => setOpen(true)}
              className="hidden sm:inline-flex px-4 py-2.5 bg-[#64ffda] text-[#0a192f] rounded-lg font-medium transition hover:brightness-95 active:scale-[0.98]"
            >
              Leave a Message
            </button>

            {/* Mobile: Circle Plus Icon */}
            <button
              onClick={() => setOpen(true)}
              className="inline-flex sm:hidden w-14 h-14 items-center justify-center rounded-full bg-[#64ffda] text-[#0a192f] shadow-lg transition hover:brightness-95 active:scale-95"
              aria-label="Leave a Message"
            >
              <PlusIcon size={28} weight="bold" />
            </button>
          </div>
        </div>
        <div className="min-h-screen text-white">
          {/* STATES */}
          {loading ? (
            <Loader />
          ) : guestsWithAvatars.length === 0 ? (
            <EmptyState openModal={() => setOpen(true)} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {guestsWithAvatars.map((guest, idx) => (
                <GuestPolaroid key={guest.id} guest={guest} index={idx} />
              ))}
            </div>
          )}

          <AddGuestModal
            open={open}
            onClose={() => setOpen(false)}
            onAdd={addGuest}
          />
        </div>
      </div>
    </div>
  );
}
