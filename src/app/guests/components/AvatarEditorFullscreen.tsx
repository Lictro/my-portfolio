'use client';

import { useMemo, useState, useEffect } from 'react';
import { createAvatar } from '@dicebear/core';
import { notionists } from '@dicebear/collection';

type Props = {
  initialConfig: any;
  onSave: (config: any) => void;
  onClose: () => void;
};

const TABS = [
  'background',
  'eyes',
  'mouth',
  'hair',
  'gesture',
  'nose',
  'beard',
  'body',
  'brows',
  'glasses',
] as const;

const OPTIONS = {
  background: ['b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc', 'ffdfbf'],
  eyes: ['variant01', 'variant02', 'variant03', 'variant04', 'variant05'],
  gesture: [
    'none',
    'hand',
    'handPhone',
    'ok',
    'okLongArm',
    'point',
    'pointLongArm',
    'waveLongArm',
    'waveOkLongArms',
    'wavePointLongArms',
  ],
  mouth: new Array(30)
    .fill(0)
    .map((_, i) => `variant${i + 1 < 10 ? '0' : ''}${i + 1}`),
  nose: new Array(20)
    .fill(0)
    .map((_, i) => `variant${i + 1 < 10 ? '0' : ''}${i + 1}`),
  hair: new Array(63)
    .fill(0)
    .map((_, i) => `variant${i + 1 < 10 ? '0' : ''}${i + 1}`),
  beard: [
    'none',
    ...new Array(12)
      .fill(0)
      .map((_, i) => `variant${i + 1 < 10 ? '0' : ''}${i + 1}`),
  ],
  body: new Array(25)
    .fill(0)
    .map((_, i) => `variant${i + 1 < 10 ? '0' : ''}${i + 1}`),
  brows: new Array(13)
    .fill(0)
    .map((_, i) => `variant${i + 1 < 10 ? '0' : ''}${i + 1}`),
  glasses: [
    'none',
    ...new Array(11)
      .fill(0)
      .map((_, i) => `variant${i + 1 < 10 ? '0' : ''}${i + 1}`),
  ],
};

export default function AvatarEditorFullscreen({
  initialConfig,
  onSave,
  onClose,
}: Props) {
  const [tab, setTab] = useState<(typeof TABS)[number]>('background');
  const [config, setConfig] = useState(initialConfig);
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const update = () => {
      setColumns(window.innerWidth < 640 ? 3 : 4);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const options = OPTIONS[tab];

  const avatar = useMemo(() => {
    return createAvatar(notionists, {
      seed: config.seed,
      backgroundColor: [config.background],
      eyes: [config.eyes],
      lips: [config.mouth],
      hair: [config.hair],
      gesture: [config.gesture],
      nose: [config.nose],
      beard: [config.beard],
      body: [config.body],
      brows: [config.brows],
      glasses: [config.glasses],
      gestureProbability: !config.gesture ? 0 : 100,
      beardProbability: !config.beard ? 0 : 100,
      glassesProbability: !config.glasses ? 0 : 100,
    }).toString();
  }, [config]);

  const preview = (value: string) => {
    const cfg = { ...config, [tab]: value };
    return createAvatar(notionists, {
      seed: cfg.seed,
      backgroundColor: [cfg.background],
      eyes: [cfg.eyes],
      lips: [cfg.mouth],
      hair: [cfg.hair],
      gesture: [cfg.gesture],
      gestureProbability: !cfg.gesture ? 0 : 100,
      nose: [cfg.nose],
      beard: [cfg.beard],
      beardProbability: !cfg.beard ? 0 : 100,
      body: [cfg.body],
      brows: [cfg.brows],
      glasses: [cfg.glasses],
      glassesProbability: !cfg.glasses ? 0 : 100,
    }).toString();
  };

  return (
    <div
      className="fixed inset-0 z-999 flex flex-col"
      style={{ background: `#${darkenHex(config.background, 40)}` }}
    >
      {/* HEADER bg-[#${darkenHex(config.background, 40)}] */}
      <div className="flex justify-between items-center p-4">
        <button onClick={onClose}>Back</button>
        <button
          onClick={() => onSave(config)}
          className="bg-[#64ffda] text-black px-5 py-2 rounded-xl"
        >
          Save
        </button>
      </div>

      {/* PREVIEW */}
      <div className={`flex justify-center py-6 border-b border-white/10`}>
        <div
          className="w-40 h-40"
          dangerouslySetInnerHTML={{ __html: avatar }}
        />
      </div>

      {/* TABS */}
      <div className="flex gap-6 px-4 overflow-x-auto border-b border-white/10 bg-[#0b0f19]">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`py-3 whitespace-nowrap transition ${
              tab === t
                ? 'border-b-2 border-[#64ffda]'
                : 'opacity-50 hover:opacity-80'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* GRID OPTIONS */}
      <div className="flex-1 overflow-auto p-4 bg-[#0b0f19]">
        <div className="grid gap-3 grid-cols-8">
          {options.map((value) => {
            const svg = preview(value);
            const selected = config[tab] === value;

            return (
              <button
                key={value}
                onClick={() => setConfig((p: any) => ({ ...p, [tab]: value }))}
                className={`
                  transition
                  ${
                    selected
                      ? 'ring-2 ring-[#64ffda] bg-[#1f2937]'
                      : 'bg-[#111827] hover:bg-[#1f2937]'
                  }
                `}
              >
                <div
                  className="w-full aspect-square flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: svg }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function darkenHex(hex: string, amount = 30) {
  const cleanHex = hex.replace('#', '');

  const num = parseInt(cleanHex, 16);

  let r = (num >> 16) - amount;
  let g = ((num >> 8) & 0x00ff) - amount;
  let b = (num & 0x0000ff) - amount;

  r = Math.max(0, r);
  g = Math.max(0, g);
  b = Math.max(0, b);

  return ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}
