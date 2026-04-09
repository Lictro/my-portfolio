'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { initialConfig, Guest } from '../types';
import { nanoid } from 'nanoid';
import AvatarEditorFullscreen from './AvatarEditorFullscreen';
import { notionists } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import { PencilIcon } from '@phosphor-icons/react';
import CountrySelect from './CountrySelect';
import clsx from 'clsx';
import { motion } from 'framer-motion';

type Props = {
  open: boolean;
  onClose: () => void;
  onAdd: (card: Guest) => void;
};

export default function AddGuestModal({ open, onClose, onAdd }: Props) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [editingAvatar, setEditingAvatar] = useState(false);
  const [avatarConfig, setAvatarConfig] = useState(initialConfig);

  const buildAvatar = (cfg: any) =>
    createAvatar(notionists, {
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

  const [avatarSvg, setAvatarSvg] = useState(buildAvatar(initialConfig));

  const submit = async () => {
    const card: Guest = {
      id: nanoid(),
      name,
      country,
      message,
      createdAt: new Date().toISOString(),
      config: avatarConfig,
    };
    onAdd(card);
    onClose();
    setName('');
    setCountry('');
    setMessage('');
  };

  const isValid = name.trim() && country.trim() && message.trim();

  if (editingAvatar) {
    return (
      <AvatarEditorFullscreen
        initialConfig={avatarConfig}
        onSave={(cfg) => {
          setAvatarConfig(cfg);
          setAvatarSvg(buildAvatar(cfg));
          setEditingAvatar(false);
        }}
        onClose={() => setEditingAvatar(false)}
      />
    );
  }

  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </Dialog.Overlay>

        <Dialog.Content asChild>
          <motion.div
            className="fixed top-1/2 left-1/2 w-full sm:max-w-lg bg-[#111827] sm:rounded-2xl p-6 space-y-5 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Dialog.Title className="text-xl font-bold">
              Create Postcard
            </Dialog.Title>

            <div className="grid grid-cols-[96px_1fr] gap-4 items-start">
              <div
                onClick={() => setEditingAvatar(true)}
                className="relative cursor-pointer active:scale-[0.98] transition w-fit"
              >
                {avatarSvg && (
                  <div className="w-27 h-27 overflow-hidden bg-black/30 [&>svg]:w-full [&>svg]:h-full">
                    <div dangerouslySetInnerHTML={{ __html: avatarSvg }} />
                  </div>
                )}

                <div className="absolute -bottom-2 -right-2 bg-[#64ffda] text-black rounded-full p-2 shadow-lg border-2 border-[#111827] flex items-center justify-center">
                  <PencilIcon size={16} />
                </div>
              </div>

              <div className="flex flex-col gap-3 pl-4">
                <input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded bg-black/30 outline-none focus:ring-2 focus:ring-[#64ffda]"
                />

                <CountrySelect
                  value={country}
                  onChange={(v) => setCountry(v)}
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                placeholder="Leave your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, 100))}
                className="w-full p-3 rounded bg-black/30 h-28 outline-none resize-none pr-16 focus:ring-2 focus:ring-[#64ffda]"
              />
              <p className="absolute bottom-2 right-3 text-sm text-gray-400">
                {message.length}/100
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Dialog.Close className="opacity-70 hover:opacity-100 transition">
                Cancel
              </Dialog.Close>

              <button
                onClick={submit}
                disabled={!isValid}
                className={clsx(
                  'bg-[#64ffda] text-black px-4 py-2 rounded font-medium transition hover:brightness-95 active:scale-[0.98]',
                  {
                    'disabled:opacity-40 disabled:cursor-not-allowed': !isValid,
                  }
                )}
              >
                Post
              </button>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
