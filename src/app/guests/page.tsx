'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AddGuestModal from './components/AddGuestModal';
import { createAvatar } from '@dicebear/core';
import { notionists } from '@dicebear/collection';
import { useGuests } from '@/hooks/useGuests';
import { addGuest } from '@/lib/guests';
import { EmptyState } from './components/EmptyState';
import { Loader } from './components/Loader';
import Pagination from './components/Pagination';
import Header from '@/components/ui/header';
import GuestPolaroid from './components/GuestPolaroid';

const ITEMS_PER_PAGE = 8;

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function GuestsPage() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { guests, loading, refetch } = useGuests();
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(guests.length / ITEMS_PER_PAGE)),
    [guests.length]
  );

  const safePage = Math.min(currentPage, totalPages);

  const paginatedGuests = useMemo(() => {
    const start = (safePage - 1) * ITEMS_PER_PAGE;
    return guests.slice(start, start + ITEMS_PER_PAGE);
  }, [guests, safePage]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [safePage]);

  const guestsWithAvatars = useMemo(() => {
    return paginatedGuests.map((msg) => {
      const avatar = createAvatar(notionists, {
        lips: [msg.config.mouth],
        eyes: [msg.config.eyes],
        hair: [msg.config.hair],
        backgroundColor: [msg.config.background],
        gesture: [msg.config.gesture],
        nose: [msg.config.nose],
        beard: [msg.config.beard],
        body: [msg.config.body],
        brows: [msg.config.brows],
        glasses: [msg.config.glasses],
        seed: msg.config.seed,
        size: 180,
      }).toString();

      return {
        ...msg,
        avatarSvg: avatar,
      };
    });
  }, [paginatedGuests]);

  const goToNextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return (
    <div className="h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 h-full">
        <div ref={scrollRef} className="h-full overflow-y-auto pr-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Header pageName="Guestbook" onOpen={() => setOpen(true)} />
          </motion.div>

          {loading ? (
            <Loader />
          ) : guestsWithAvatars.length === 0 ? (
            <EmptyState openModal={() => setOpen(true)} />
          ) : (
            <>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {guestsWithAvatars.map((guest, idx) => (
                  <motion.div key={guest.id} variants={item}>
                    <GuestPolaroid index={idx} guest={guest} />
                  </motion.div>
                ))}
              </motion.div>

              <Pagination
                currentPage={safePage}
                totalPages={totalPages}
                onNext={goToNextPage}
                onPrev={goToPrevPage}
                onPageChange={setCurrentPage}
              />
            </>
          )}

          <AddGuestModal
            open={open}
            onClose={() => setOpen(false)}
            onAdd={async (guest, token) => {
              await addGuest(guest, token);
              await refetch();
            }}
          />
        </div>
      </div>
    </div>
  );
}
