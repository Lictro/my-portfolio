import { NextRequest, NextResponse } from 'next/server';
import { onValue, push, ref, serverTimestamp } from 'firebase/database';
import { db } from '@/lib/firebase';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, country, message, avatarConfig } = data;

    // Validaciones mínimas
    if (
      !name ||
      typeof name !== 'string' ||
      name.trim().length === 0 ||
      !country ||
      typeof country !== 'string' ||
      !message ||
      typeof message !== 'string' ||
      message.trim().length === 0 ||
      !avatarConfig ||
      typeof avatarConfig !== 'object'
    ) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    // Limitar mensaje a 100 chars
    const trimmedMessage = message.slice(0, 100);

    const guestRef = ref(db, 'guests');
    await push(guestRef, {
      name: name.trim(),
      country,
      message: trimmedMessage,
      config: avatarConfig,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  return new Promise((resolve) => {
    const guestsRef = ref(db, 'guests');
    onValue(
      guestsRef,
      (snapshot) => {
        const data = snapshot.val();
        const guests = data
          ? Object.entries(data).map(([id, value]: any) => ({ id, ...value }))
          : [];
        resolve(NextResponse.json({ guests }));
      },
      { onlyOnce: true }
    );
  });
}
