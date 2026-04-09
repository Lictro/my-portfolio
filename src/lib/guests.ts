import { Guest } from '@/app/guests/types';

export async function addGuest(guest: Guest) {
  const res = await fetch('/api/guests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(guest),
  });

  if (!res.ok) {
    throw new Error('Failed to add guest');
  }

  return res.json();
}
