import { ReactNode } from 'react';

export default function TechBadge({
  tech,
  icon,
}: {
  tech: string;
  icon?: ReactNode;
}) {
  return (
    <span
      className={`flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {tech}
    </span>
  );
}
