import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  href: string;
  children: ReactNode;
}

export default function IconButton({ href, children }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className={clsx(
        'flex items-center justify-center',
        'h-12 w-12 rounded-xl',
        'border border-border',
        'text-muted-foreground',
        'transition-all duration-200',
        'hover:text-ring',
        'hover:border-ring',
        'hover:-translate-y-0.5'
      )}
    >
      {children}
    </Link>
  );
}
