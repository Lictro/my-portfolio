'use client';
import { ArrowLeftIcon, ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  year: string;
  madeAt: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with admin dashboard, payment integration, and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=500&fit=crop",
    year: "2024",
    madeAt: "Freelance",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    name: "Task Management App",
    description: "Real-time collaborative task management application with drag-and-drop functionality and team analytics.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    year: "2024",
    madeAt: "Personal",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    name: "AI Content Generator",
    description: "AI-powered content generation tool using GPT-4 API with custom templates and content optimization.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    year: "2024",
    madeAt: "Startup XYZ",
    technologies: ["React", "Python", "FastAPI", "OpenAI", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 4,
    name: "Portfolio Website",
    description: "Modern portfolio website with animations and dark mode",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    year: "2023",
    madeAt: "Personal",
    technologies: ["React", "Tailwind CSS", "Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    name: "Weather Dashboard",
    description: "Real-time weather dashboard with maps and forecasts",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
    year: "2023",
    madeAt: "Personal",
    technologies: ["Vue.js", "TypeScript", "OpenWeather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    name: "Fitness Tracker",
    description: "Mobile-first fitness tracking application",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    year: "2023",
    madeAt: "Freelance",
    technologies: ["React Native", "Firebase", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 7,
    name: "Recipe Finder",
    description: "Recipe search and meal planning application",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=500&fit=crop",
    year: "2022",
    madeAt: "Personal",
    technologies: ["React", "Spoonacular API", "Material UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 8,
    name: "Blog CMS",
    description: "Headless CMS for blog management",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
    year: "2022",
    madeAt: "Company ABC",
    technologies: ["Next.js", "Sanity.io", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

function TechBadge({ tech }: { tech: string }) {
  return (
    <span
      className={`flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300`}
    >
      {tech}
    </span>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
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
          <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
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

function ProjectsTable({ projects }: { projects: Project[] }) {
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

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const allProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-ring group transition-colors mb-3"
          >
            <ArrowLeftIcon size={20} className="group-hover:-translate-x-1"/>
            <h3 className="font-xl">Luis Alvarez</h3>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-200">All Projects</h1>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-200 mb-6">Featured</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <FeaturedProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* All Projects Table */}
        {allProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-slate-200 mb-6">All Projects</h2>
            <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/40 overflow-hidden">
              <ProjectsTable projects={allProjects} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
