'use client';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import FeaturedProjectCard from './components/FeaturedProjectCard';
import ProjectsTable from './components/ProjectsTable';
import ProjectCardMobile from './components/ProjectCardMobile';
import { Project } from './types/project';

const projects: Project[] = [
  {
    id: 1,
    name: 'Bookmark Manager',
    description:
      'Personal bookmark management application to organize, categorize, and quickly access saved resources with a clean and responsive interface.',
    image: '/images/bookmark-manager.png',
    year: '2025',
    madeAt: 'Personal',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
    ],
    liveUrl: 'https://bookmark-manager-amt1we6dk-lictros-projects.vercel.app/',
    githubUrl: 'https://github.com/Lictro/bookmark-manager',
    featured: true,
  },
  {
    id: 2,
    name: 'Mobile Data Collection App',
    description:
      'Cross-platform mobile application enabling field users to capture photos and submit structured form data with secure authentication and cloud storage integration.',
    image: '',
    year: '2025',
    madeAt: 'Acklen Avenue',
    technologies: [
      'React Native',
      'Expo',
      'NestJS',
      'PostgreSQL',
      'Firebase',
      'Google Cloud',
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 3,
    name: 'Staff Training Evaluation App',
    description:
      'Full-stack web application for evaluating healthcare staff training programs with dynamic forms and secure backend processing.',
    image: '',
    year: '2024',
    madeAt: 'Acklen Avenue',
    technologies: ['React', 'TypeScript', '.NET', 'PostgreSQL'],
    liveUrl: null,
    githubUrl: null,
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
            <ArrowLeftIcon
              size={20}
              className="transition-transform duration-300 ease-in-out group-hover:-translate-x-1"
            />
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
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((p) => (
                <FeaturedProjectCard key={p.id} project={p} />
              ))}
            </div>

            <div className="md:hidden space-y-4">
              {featuredProjects.map((p) => (
                <ProjectCardMobile key={p.id} project={p} />
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
            <div className="overflow-hidden">
              <ProjectsTable projects={allProjects} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
