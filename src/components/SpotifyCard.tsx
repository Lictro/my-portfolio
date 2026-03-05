"use client";

import BentoCard from "./BentoCard";
import { SpotifyLogoIcon } from "@phosphor-icons/react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export function SpotifyCard({ className }: { className?: string }) {
  const { data } = useSWR("/api/spotify", fetcher);

  const songName = data?.songName ?? "Nothing playing";
  const artistName = data?.artistName ?? "Spotify";
  const albumCover = data?.albumCover;
  const songUrl = data?.songUrl;

  return (
    <BentoCard
      variant="spotify"
      className={`relative overflow-hidden flex justify-between ${className}`}
    >
      {/* background blur */}
      {albumCover && (
        <div
          className="absolute inset-0 bg-cover bg-center blur-2xl scale-125"
          style={{ backgroundImage: `url(${albumCover})` }}
        />
      )}

      {/* overlay */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-md" />

      <div className="relative flex items-center justify-between gap-4 flex-1">
        <div className="flex items-center gap-4">
          {albumCover ? (
            <img
              src={albumCover}
              alt={songName}
              className="w-12 h-12 rounded-md object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center text-xs text-muted-foreground">
              —
            </div>
          )}

          <div className="flex flex-col">
            <p className="text-sm font-medium text-slate-200 leading-tight">
              {songName}
            </p>

            <p className="text-xs text-muted-foreground">
              {artistName}
            </p>
          </div>
        </div>

        {songUrl && (
          <a
            href={songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-green-500 hover:scale-110 transition-transform"
          >
            <SpotifyLogoIcon size={36} weight="fill" />
          </a>
        )}
      </div>
    </BentoCard>
  );
}