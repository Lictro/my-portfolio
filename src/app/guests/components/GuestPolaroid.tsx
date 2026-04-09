'use client';

import ReactCountryFlag from 'react-country-flag';
import { Guest } from '../types';
import clsx from 'clsx';

type Props = {
  guest: Guest & { avatarSvg: string };
  index: number;
};

export default function GuestPolaroid({ guest, index }: Props) {

  const date = new Date(guest.createdAt);
  const formatted = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div
      className={clsx(
        'bg-card border border-border p-4 shadow-xl h-80 flex flex-col',
        'transition-transform duration-300 hover:scale-[1.02]'
      )}
      style={{
        transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (Math.random() * 3)}deg)`,
      }}
    >
      {/* Avatar */}
      <div
        className="flex items-center justify-center flex-1 mb-4 overflow-hidden max-h-43.75"
        dangerouslySetInnerHTML={{ __html: guest.avatarSvg }}
        style={{ background: `#${guest.config.background}` }}
      />

      {/* Name + Country */}
      <div className="flex items-center gap-2 mb-2">
        <ReactCountryFlag countryCode={guest.country} svg />

        <h3 className="font-semibold text-sm truncate flex-1 text-foreground">
          {guest.name}
        </h3>
      </div>

      {/* Message */}
      <div className="mb-2">
        <p className="text-xs text-muted-foreground line-clamp-3 wrap-break-word">
          {guest.message.slice(0, 100)}
        </p>
      </div>

      <p className="text-xs text-muted-foreground text-center mt-auto">{formatted}</p>
    </div>
  );
}