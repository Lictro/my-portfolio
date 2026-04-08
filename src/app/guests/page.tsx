'use client';

import { useMemo, useState } from 'react';
import { Guest } from './types';
import AddGuestModal from './components/AddGuestModal';
import { createAvatar } from '@dicebear/core';
import { notionists } from '@dicebear/collection';
import ReactCountryFlag from 'react-country-flag';

export default function GuestsPage() {
  const [open, setOpen] = useState(false);

  const [guests, setGuests] = useState<Guest[]>([]);

  const guestsWithAvatars = useMemo(
    () =>
      guests.map((msg) => ({
        ...msg,
        avatarSvg: createAvatar(notionists, {
          lips: [msg.config.mouth],
          eyes: [msg.config.eyes],
          hair: [msg.config.hair],
          backgroundColor: [msg.config.background],
          seed: msg.config.seed,
          size: 200,
        }).toString(),
      })),
    [guests]
  );

  const addGuest = (card: Guest) => {
    setGuests((prev) => [card, ...prev]);
  };

  console.log({ guests });

  return (
    <div className="min-h-screen text-white p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">🌍 Guests</h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-[#64ffda] text-black px-4 py-2 rounded-lg font-semibold"
        >
          Leave a postcard
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {guestsWithAvatars.map((msg, idx) => {
          return (
            <div
              key={msg.id}
              className="bg-card border border-border p-4 shadow-xl h-80 flex flex-col"
              style={{
                transform: `rotate(${(idx % 2 === 0 ? 1 : -1) * (Math.random() * 3)}deg)`,
              }}
            >
              <div
                className="bg-muted flex items-center justify-center flex-1 mb-4 relative overflow-hidden bg-[]"
                dangerouslySetInnerHTML={{ __html: msg.avatarSvg }}
                style={{ background: `#${msg.config.background}` }}
              />
              <div className="flex items-center gap-2 mb-2">
                <ReactCountryFlag countryCode="US" svg />
                <h3 className="font-semibold text-sm truncate flex-1 text-foreground">
                  {msg.name}
                </h3>
              </div>
              <div className="h-16 overflow-y-auto mb-2">
                <p className="text-xs text-muted-foreground">{msg.message}</p>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                {msg.createdAt}
              </p>
            </div>
          );
        })}
      </div>

      <AddGuestModal
        open={open}
        onClose={() => setOpen(false)}
        onAdd={addGuest}
      />
    </div>
  );
}
