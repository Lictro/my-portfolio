'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import AddGuestModal from './components/AddGuestModal';
import { createAvatar } from '@dicebear/core';
import { notionists } from '@dicebear/collection';
import { useGuests } from '@/hooks/useGuests';
import { addGuest } from '@/lib/guests';
import { EmptyState } from './components/EmptyState';
import { Loader } from './components/Loader';
import {
  ArrowLeftIcon,
  CaretLeftIcon,
  CaretRightIcon,
  PlusIcon,
} from '@phosphor-icons/react';
import Link from 'next/link';
import GuestPolaroid from './components/GuestPolaroid';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Pagination from './components/Pagination';
import Header from '@/components/Header';

const ITEMS_PER_PAGE = 8;

const GUESTS = [
  {
    id: 'guest_01',
    name: 'Luis 1',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698660268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_01',
    },
  },
  {
    id: 'guest_02',
    name: 'Luis 2',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698661268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_02',
    },
  },
  {
    id: 'guest_03',
    name: 'Luis 3',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698662268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_03',
    },
  },
  {
    id: 'guest_04',
    name: 'Luis 4',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698663268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_04',
    },
  },
  {
    id: 'guest_05',
    name: 'Luis 5',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698664268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_05',
    },
  },
  {
    id: 'guest_06',
    name: 'Luis 6',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698665268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_06',
    },
  },
  {
    id: 'guest_07',
    name: 'Luis 7',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698666268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_07',
    },
  },
  {
    id: 'guest_08',
    name: 'Luis 8',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698667268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_08',
    },
  },
  {
    id: 'guest_09',
    name: 'Luis 9',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698668268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_09',
    },
  },
  {
    id: 'guest_10',
    name: 'Luis 10',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698669268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_10',
    },
  },
  {
    id: 'guest_11',
    name: 'Luis 11',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698670268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_11',
    },
  },
  {
    id: 'guest_12',
    name: 'Luis 12',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698671268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_12',
    },
  },
  {
    id: 'guest_13',
    name: 'Luis 13',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698672268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_13',
    },
  },
  {
    id: 'guest_14',
    name: 'Luis 14',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698673268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_14',
    },
  },
  {
    id: 'guest_15',
    name: 'Luis 15',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698674268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_15',
    },
  },
  {
    id: 'guest_16',
    name: 'Luis 16',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698675268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_16',
    },
  },
  {
    id: 'guest_17',
    name: 'Luis 17',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698676268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_17',
    },
  },
  {
    id: 'guest_18',
    name: 'Luis 18',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698677268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_18',
    },
  },
  {
    id: 'guest_19',
    name: 'Luis 19',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698678268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_19',
    },
  },
  {
    id: 'guest_20',
    name: 'Luis 20',
    message: 'Nice Website',
    country: 'MX',
    flag: 'MX',
    createdAt: 1775698679268,
    config: {
      background: 'b6e3f4',
      eyes: 'variant01',
      gesture: 'hand',
      hair: 'variant01',
      mouth: 'variant01',
      seed: 'guest_20',
    },
  },
];

export default function GuestsPage() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { guests, loading } = useGuests();

  const scrollRef = useRef<HTMLDivElement>(null);

  // Pagination
  const totalPages = Math.ceil(guests.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedGuests = guests.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Scroll to top when page changes
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const guestsWithAvatars = useMemo(
    () =>
      paginatedGuests.map((msg) => ({
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
    [paginatedGuests]
  );

  return (
    <div className="h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 h-full">
        <div ref={scrollRef} className="h-full overflow-y-auto pr-2">
          {/* Header */}
          <Header pageName="Guestbook" onOpen={() => setOpen(true)} />

          {/* Content */}
          {loading ? (
            <Loader />
          ) : guestsWithAvatars.length === 0 ? (
            <EmptyState openModal={() => setOpen(true)} />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {guestsWithAvatars.map((guest, idx) => (
                  <motion.div
                    key={guest.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                  >
                    <GuestPolaroid guest={guest} index={idx} />
                  </motion.div>
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onNext={goToNextPage}
                onPrev={goToPrevPage}
                onPageChange={setCurrentPage}
              />
            </>
          )}

          {/* Modal */}
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
