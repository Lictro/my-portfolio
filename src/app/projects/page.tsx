'use client';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import FeaturedProjectCard from './components/FeaturedProjectCard';
import ProjectsTable from './components/ProjectsTable';

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
    name: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce platform with admin dashboard, payment integration, and real-time inventory management.',
    image:
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=500&fit=crop',
    year: '2024',
    madeAt: 'Freelance',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    name: 'Task Management App',
    description:
      'Real-time collaborative task management application with drag-and-drop functionality and team analytics.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop',
    year: '2024',
    madeAt: 'Personal',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'Motion'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    name: 'AI Content Generator',
    description:
      'AI-powered content generation tool using GPT-4 API with custom templates and content optimization.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    year: '2024',
    madeAt: 'Startup XYZ',
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 4,
    name: 'Portfolio Website',
    description: 'Modern portfolio website with animations and dark mode',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop',
    year: '2023',
    madeAt: 'Personal',
    technologies: ['React', 'Tailwind CSS', 'Motion'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 5,
    name: 'Weather Dashboard',
    description: 'Real-time weather dashboard with maps and forecasts',
    image:
      'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
    year: '2023',
    madeAt: 'Personal',
    technologies: ['Vue.js', 'TypeScript', 'OpenWeather API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 6,
    name: 'Fitness Tracker',
    description: 'Mobile-first fitness tracking application',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop',
    year: '2023',
    madeAt: 'Freelance',
    technologies: ['React Native', 'Firebase', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 7,
    name: 'Recipe Finder',
    description: 'Recipe search and meal planning application',
    image:
      'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=500&fit=crop',
    year: '2022',
    madeAt: 'Personal',
    technologies: ['React', 'Spoonacular API', 'Material UI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 8,
    name: 'Blog CMS',
    description: 'Headless CMS for blog management',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop',
    year: '2022',
    madeAt: 'Company ABC',
    technologies: ['Next.js', 'Sanity.io', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

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
            <ArrowLeftIcon size={20} className="group-hover:-translate-x-1" />
            <h3 className="font-xl">Luis Alvarez</h3>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-200">
            All Projects
          </h1>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-200 mb-6">
              Featured
            </h2>
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
            <h2 className="text-2xl font-semibold text-slate-200 mb-6">
              All Projects
            </h2>
            <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/40 overflow-hidden">
              <ProjectsTable projects={allProjects} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
