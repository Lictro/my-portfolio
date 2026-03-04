import BentoCard from "./BentoCard";

export function BuiltWithCard({ className }: { className?: string }) {
  return (
    <BentoCard
      className={`flex items-center justify-center ${className}`}
    >
      <p className="text-sm text-muted-foreground">
        © 2026 · Crafted using Next.js & Tailwind by ME
      </p>
    </BentoCard>
  );
}