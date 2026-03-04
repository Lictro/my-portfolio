"use client";

import BentoCard from "./BentoCard";
import clsx from "clsx";

type Status =
  | "available"
  | "fulltime"
  | "parttime"
  | "vacation"
  | "sick";

const STATUS_CONFIG: Record<
  Status,
  { label: string; color: string; glow: string }
> = {
  available: {
    label: "Available for work",
    color: "bg-emerald-400",
    glow: "shadow-emerald-400/40",
  },
  fulltime: {
    label: "Working full time",
    color: "bg-blue-400",
    glow: "shadow-blue-400/40",
  },
  parttime: {
    label: "Working part time",
    color: "bg-yellow-400",
    glow: "shadow-yellow-400/40",
  },
  vacation: {
    label: "On vacation",
    color: "bg-purple-400",
    glow: "shadow-purple-400/40",
  },
  sick: {
    label: "Sick",
    color: "bg-red-400",
    glow: "shadow-red-400/40",
  },
};

export default function StatusCard({
  status = "available",
  className
}: {
  status?: Status;
  className?: string;
}) {
  const config = STATUS_CONFIG[status];
  const details = "Returning on September 1st";
  return (
    <BentoCard className={`${className}`}>
      <div className="flex items-center h-full">
        <div className="flex items-center gap-2 text-sm">
          {/* blinking dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={clsx(
                "absolute inline-flex h-full w-full rounded-full animate-ping opacity-75",
                config.color
              )}
            />
            <span
              className={clsx(
                "relative inline-flex rounded-full h-2.5 w-2.5",
                config.color,
                config.glow
              )}
            />
          </span>

          <div className="ml-1">
            <h1 className="text-lg font-bold text-slate-200">{config.label}</h1>
            <p className="text-sm text-muted-foreground">{details}</p>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}