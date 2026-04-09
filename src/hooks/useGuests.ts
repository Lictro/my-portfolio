'use client';
import { Guest } from '@/app/guests/types';
import { useEffect, useState } from 'react';

export function useGuests() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/guests')
      .then((res) => res.json())
      .then((data) => {
        const sortedGuests = (data.guests || []).sort(
          (a: Guest, b: Guest) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setGuests(sortedGuests);
        setLoading(false);
      });
  }, []);

  return { guests, loading };
}
