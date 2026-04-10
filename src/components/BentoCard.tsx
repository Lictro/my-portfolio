import { ReactNode } from 'react';
import clsx from 'clsx';

type BentoCardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  direction?: 'row' | 'col';
};

export default function BentoCard({
  children,
  className,
  variant = 'default',
  onClick,
  direction = 'col',
}: BentoCardProps) {
  const focusColors: Record<string, string> = {
    default: 'hover:border-ring',
    accent: 'hover:border-[#00ff9c]',
    spotify: 'hover:border-green-500',
    hobbies: 'hover:border-yellow-400',
    fun: 'hover:border-[#9d4edd]',
  };

  return (
    <div
      tabIndex={0}
      className={clsx(
        'rounded-2xl flex transition-all outline-none focus:outline-none focus:ring-0',
        direction === 'col' ? 'flex-col gap-4' : 'flex-row gap-6 items-start',
        {
          'bg-card border border-border': variant === 'default',
          'bg-[#112240] border border-[#233554]': variant === 'accent',
          'border border-transparent': variant === 'spotify',
          'border border-black bg-black': variant === 'hobbies',
          'border border-[#efefd0] bg-[#ff6b35]': variant === 'fun',
        },
        focusColors[variant],
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
