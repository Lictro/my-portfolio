import { ref, push, serverTimestamp } from 'firebase/database';
import { db } from './firebase';
import { Guest } from '@/app/guests/types';

export async function addGuest(guest: Omit<Guest, 'id'>) {
  const guestsRef = ref(db, 'guests');

  await push(guestsRef, {
    ...guest,
    createdAt: serverTimestamp(),
  });
}
