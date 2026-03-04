import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

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
        "flex items-center justify-center",
        "h-10 w-10 rounded-xl",
        "border border-border",
        "text-muted-foreground",
        "transition-all duration-200",
        "hover:text-[#64ffda]",
        "hover:border-[#64ffda]",
        "hover:-translate-y-0.5"
      )}
    >
      {children}
    </Link>
  );
}