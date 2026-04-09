'use client';
import { Guest } from '@/app/guests/types';
import { useEffect, useState } from 'react';

export function useGuests() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGuests = async () => {
    setLoading(true);

    const res = await fetch('/api/guests');
    const data = await res.json();

    const sortedGuests = (data.guests || []).sort(
      (a: Guest, b: Guest) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    setGuests(sortedGuests);
    setLoading(false);
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  return { guests, loading, refetch: fetchGuests };
}
