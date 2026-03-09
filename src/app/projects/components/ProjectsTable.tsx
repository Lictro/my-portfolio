import { ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { Project } from '../types/project';
import TechBadge from './TechBadge';

export default function ProjectsTable({ projects }: { projects: Project[] }) {
  return (
    <div className="w-full overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                Year
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                Project
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                Made at
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                Built with
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-b border-border/30 hover:bg-muted/20 transition-colors"
              >
                <td className="py-4 px-4 text-sm text-muted-foreground">
                  {project.year}
                </td>
                <td className="py-4 px-4">
                  <div className="font-medium">{project.name}</div>
                </td>
                <td className="py-4 px-4 text-sm">{project.madeAt}</td>
                <td className="py-4 px-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium text-muted-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 hover:bg-muted/40 rounded transition-colors"
                      title="Visit site"
                    >
                      <ArrowSquareOutIcon size={32} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 hover:bg-muted/40 rounded transition-colors"
                      title="View code"
                    >
                      <GithubLogoIcon size={32} />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-card/60 backdrop-blur-sm rounded-lg border border-border/40 p-4 space-y-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-medium">{project.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {project.description}
                </p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {project.year}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">{project.madeAt}</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>

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
        ))}
      </div>
    </div>
  );
}
