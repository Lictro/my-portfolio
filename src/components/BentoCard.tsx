import { ReactNode } from 'react';
import clsx from 'clsx';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'accent' | 'spotify' | 'hobbies' | 'fun';
  onClick?: () => void;
}

export default function BentoCard({
  children,
  className,
  variant = 'default',
  onClick,
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
        'rounded-2xl flex flex-col gap-4 transition-all outline-none focus:outline-none focus:ring-0',
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
