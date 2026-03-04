"use client";

import { useEffect, useState } from "react";
import BentoCard from "./BentoCard";

export function TimeCard({ className }: { className?: string }) {
  const [localTime, setLocalTime] = useState("");
  const [gmt6Time, setGmt6Time] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // User local time
      setLocalTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      // GMT-6 (Central America)
      const gmt6 = new Date(
        now.toLocaleString("en-US", { timeZone: "America/Tegucigalpa" })
      );

      setGmt6Time(
        gmt6.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const visitorTimeZoneLabel = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const myTimeZoneLabel = "GMT-6";

  return (
    <BentoCard className={className}>
       {/* Your Time */}
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">Your Time</p>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-medium tracking-tight text-slate-200">{localTime}</p>
          <span className="text-xs text-muted-foreground">
            {visitorTimeZoneLabel}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* My Time */}
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">My Time</p>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-medium tracking-tight text-slate-200">{gmt6Time}</p>
          <span className="text-xs text-muted-foreground">
            {myTimeZoneLabel}
          </span>
        </div>
      </div>
    </BentoCard>
  );
}