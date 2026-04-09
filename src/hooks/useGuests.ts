'use client';

import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '@/lib/firebase';
import { Guest } from '@/app/guests/types';

export function useGuests() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const guestsRef = ref(db, 'guests');

    const unsub = onValue(guestsRef, (snapshot) => {
      const data = snapshot.val();

      if (!data) {
        setGuests([]);
        setLoading(false);
        return;
      }

      const parsed = Object.entries(data).map(([id, value]: any) => ({
        id,
        ...value,
      }));
      parsed.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setGuests(parsed);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return { guests, loading };
}
