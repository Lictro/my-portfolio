import { ReactNode } from "react";
import clsx from "clsx";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "spotify";
}

export default function BentoCard({
  children,
  className,
  variant = "default",
}: BentoCardProps) {
  return (
    <div
      className={clsx(
        // base styles
        "rounded-2xl flex flex-col gap-4 transition-all",
        // variants
        {
          "bg-card border border-border":
            variant === "default",

          "bg-[#112240] border border-[#233554]":
            variant === "accent",
          "border border-transparent ":
            variant === "spotify",
        },
        className
      )}
    >
      {children}
    </div>
  );
}