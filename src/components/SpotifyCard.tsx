"use client";

import BentoCard from "./BentoCard";
import { SpotifyLogoIcon } from "@phosphor-icons/react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export function SpotifyCard({ className }: { className?: string }) {
  const { data, isLoading } = useSWR("/api/spotify", fetcher);

  const songName = data?.songName ?? "Nothing playing";
  const artistName = data?.artistName ?? "Spotify";
  const albumCover = data?.albumCover;
  const songUrl = data?.songUrl;

  return (
    <BentoCard
      variant={isLoading ? "default" : "spotify"}
      className={`relative overflow-hidden flex justify-between ${className}`}
    >
      {albumCover && !isLoading && (
        <div
          className="absolute inset-0 bg-cover bg-center blur-2xl scale-125"
          style={{ backgroundImage: `url(${albumCover})` }}
        />
      )}

      <div className="absolute inset-0 bg-background/20 backdrop-blur-md" />

      <div className="relative flex items-center justify-between gap-4 flex-1">
        <div className="flex items-center gap-4">
          {/* Album cover / skeleton */}
          {isLoading ? (
            <div className="w-12 h-12 rounded-md bg-slate-700 animate-pulse" />
          ) : albumCover ? (
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

          {/* Song info / skeleton */}
          <div className="flex flex-col">
            {isLoading ? (
              <>
                <div className="h-4 w-32 bg-slate-600 rounded animate-pulse mb-1" />
                <div className="h-3 w-24 bg-slate-500 rounded animate-pulse" />
              </>
            ) : (
              <>
                <p className="text-sm font-medium text-slate-200 leading-tight">
                  {songName}
                </p>
                <p className="text-xs text-muted-foreground">{artistName}</p>
              </>
            )}
          </div>
        </div>

        {isLoading ? (
          <div className="w-9 h-9 bg-slate-600 rounded-full animate-pulse" />
        ) : (
          songUrl && (
            <a
              href={songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-green-500 hover:scale-110 transition-transform"
            >
              <SpotifyLogoIcon size={36} weight="fill" />
            </a>
          )
        )}
      </div>
    </BentoCard>
  );
}