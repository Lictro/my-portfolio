'use client';

import { CaretDownIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import clsx from 'clsx';
import COUNTRIES from '../data/countries.json';

type Props = {
  value: string;
  onChange: (code: string) => void;
};

export default function CountrySelect({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = COUNTRIES.find((c) => c.code === value);

  const filteredCountries = COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setSearch('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* BUTTON */}
      <button
        type="button"
        onClick={() => {
          setOpen((o) => !o);
          setSearch('');
        }}
        className={clsx(
          `w-full
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
            mt-1.5
            w-full
            bg-[#111827]
            border
            border-white/10
            shadow-xl
            rounded
          "
        >
          {/* SEARCH */}
          <div className="p-2 border-b border-white/10">
            <div className="relative">
              <MagnifyingGlassIcon
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
              />

              <input
                autoFocus
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
        w-full
        pl-9
        pr-3
        py-2
        rounded
        bg-black/30
        outline-none
        text-sm
      "
              />
            </div>
          </div>

          {/* LIST */}
          <div className="max-h-60 overflow-y-auto">
            {filteredCountries.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => {
                  onChange(c.code);
                  setOpen(false);
                  setSearch('');
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

            {filteredCountries.length === 0 && (
              <div className="px-3 py-2 text-sm opacity-60">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
