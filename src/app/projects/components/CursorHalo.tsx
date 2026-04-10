'use client';

import { useEffect, useState } from 'react';

export default function CursorHalo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(
          600px at ${position.x}px ${position.y}px,
          rgba(255,255,255,0.08),
          transparent 80%
        )`,
      }}
    />
  );
}
