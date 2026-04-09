'use client';

import { CaretDownIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import clsx from 'clsx';
import COUNTRIES from '../data/countries.json';

type Props = {
  value: string;
  onChange: (code: string) => void;
};

export default function CountrySelect({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  const selected = COUNTRIES.find((c) => c.code === value);

  return (
    <div className="relative">
      {/* BUTTON */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={clsx(
          ` w-full
          p-3
          rounded
          bg-black/30
          flex
          items-center
          justify-between
          focus:ring-2
          focus:ring-[#64ffda]`
        )}
      >
        {selected ? (
          <div className="flex items-center gap-3">
            <ReactCountryFlag
              countryCode={selected.code}
              svg
              style={{ width: '1.5em', height: '1.5em' }}
            />
            <span>{selected.name}</span>
          </div>
        ) : (
          <span className="opacity-60">Select country</span>
        )}

        <span
          className={clsx('text-xs opacity-60 transition-transform', {
            'rotate-180': open,
          })}
        >
          <CaretDownIcon size={16} />
        </span>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute
            z-50
            mt-2
            w-full
            bg-[#111827]
            border
            border-white/10
            max-h-45
            overflow-y-auto
            shadow-xl
          "
        >
          {COUNTRIES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => {
                onChange(c.code);
                setOpen(false);
              }}
              className="
                w-full
                px-3
                py-2
                flex
                items-center
                gap-3
                hover:bg-white/10
                text-left
              "
            >
              <ReactCountryFlag
                countryCode={c.code}
                svg
                style={{ width: '1.5em', height: '1.5em' }}
              />
              {c.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
