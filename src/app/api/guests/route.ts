import { NextRequest, NextResponse } from 'next/server';
import { get, onValue, push, ref, serverTimestamp } from 'firebase/database';
import { db } from '@/lib/firebase';
import { ratelimit } from '@/lib/rate-limit';

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';

    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests. Try again in a few seconds.' },
        { status: 429 }
      );
    }

    const body = await req.json();

    const token = body.token;

    if (!token) {
      return NextResponse.json({ error: 'Missing captcha' }, { status: 400 });
    }

    const verifyRes = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: token,
        }),
      }
    );

    const data = await verifyRes.json();

    if (!data.success) {
      return NextResponse.json(
        { error: 'Captcha failed. Please try again.' },
        { status: 403 }
      );
    }

    const { name, country, message, config } = body.guest;

    if (
      !name ||
      typeof name !== 'string' ||
      name.trim().length === 0 ||
      !country ||
      typeof country !== 'string' ||
      country.trim().length === 0 ||
      !message ||
      typeof message !== 'string' ||
      message.trim().length === 0 ||
      !config ||
      typeof config !== 'object'
    ) {
      return NextResponse.json(
        { error: 'Invalid input data' },
        { status: 400 }
      );
    }

    const trimmedMessage = message.slice(0, 100);

    const guestRef = ref(db, 'guests');

    await push(guestRef, {
      name: name.trim(),
      country,
      message: trimmedMessage,
      config,
      createdAt: Date.now(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: 'Server error. Please try later.' },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const guestsRef = ref(db, 'guests');
    const snapshot = await get(guestsRef);

    const data = snapshot.val();

    const guests = data
      ? Object.entries(data).map(([id, value]: any) => ({
          id,
          ...value,
        }))
      : [];

    return NextResponse.json({ guests });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
