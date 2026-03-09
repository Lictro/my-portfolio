'use client';

import {
  ArrowSquareOutIcon,
  GithubLogoIcon,
} from '@phosphor-icons/react';
import { Project } from '../types/project';
import TechBadge from './TechBadge';

export default function ProjectCardMobile({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden transition-all hover:border-ring">
      <div className="">
        {/* Content */}
        <div className=" p-4 flex flex-col justify-between">
          <div>
            {/* Title */}
            <h3 className="text-base font-semibold text-slate-200">
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {project.description}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.technologies.slice(0, 3).map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}

              {project.technologies.length > 3 && (
                <TechBadge tech={`+${project.technologies.length - 3}`} />
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-3 mt-3 border-t border-border">
            <a
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-ring transition-colors"
            >
              <ArrowSquareOutIcon size={18} />
              Visit
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-ring transition-colors"
            >
              <GithubLogoIcon size={18} />
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}