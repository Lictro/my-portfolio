'use client';
import { ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { Project } from '../types/project';
import TechBadge from './TechBadge';

export default function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-card backdrop-blur-sm rounded-xl border border-border overflow-hidden hover:border-ring transition-all flex flex-col">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-muted/30">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div>
          <h3 className="text-xl font-semibold text-slate-200 mb-2">{project.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 my-4">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-4 border-t border-slate-700 mt-auto">
          <a
            href={project.liveUrl}
            className="flex-1 flex items-center justify-center gap-1.5 text-slate-200 hover:text-ring transition-colors text-sm font-medium"
          >
            <ArrowSquareOutIcon size={20} />
            <span>Visit</span>
          </a>

          <div className="w-px h-5 bg-slate-700" />

          <a
            href={project.githubUrl}
            className="flex-1 flex items-center justify-center gap-1.5 text-slate-200 hover:text-ring transition-colors text-sm font-medium"
          >
            <GithubLogoIcon size={20} />
            <span>Source</span>
          </a>
        </div>
      </div>
    </div>
  );
}
