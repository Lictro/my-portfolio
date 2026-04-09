'use client';
import FeaturedProjectCard from './components/FeaturedProjectCard';
import ProjectsTable from './components/ProjectsTable';
import ProjectCardMobile from './components/ProjectCardMobile';
import { Project } from './types/project';
import Header from '@/components/Header';

const projects: Project[] = [
  {
    id: 1,
    name: 'Bookmark Manager',
    description:
      'Personal bookmark management application to organize, categorize, and quickly access saved resources with a clean and responsive interface.',
    image: '/images/bookmark-manager.png',
    year: '2026',
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
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop',
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
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    year: '2024',
    madeAt: 'Acklen Avenue',
    technologies: ['React', 'TypeScript', '.NET', 'PostgreSQL'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 4,
    name: 'VetVerifi',
    description:
      'Web platform focused on verification workflows, built with modern React architecture and reusable UI components to improve operational efficiency.',
    image:
      'https://images.unsplash.com/photo-1581093458791-9d42e6b2e3b9?w=800&h=500&fit=crop',
    year: '2023',
    madeAt: 'Acklen Avenue',
    technologies: ['ReactJS', 'TypeScript', 'CSS'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 5,
    name: 'Minno Roku App',
    description:
      'Smart TV application developed for the Roku platform, contributing to streaming experiences and analytics integrations using BrightScript and Segment.',
    image:
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=500&fit=crop',
    year: '2021',
    madeAt: 'Acklen Avenue',
    technologies: ['BrightScript', 'Roku', 'NodeJS', 'Segment'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 6,
    name: 'Minno',
    description:
      'Full-stack platform contributing to scalable frontend features and backend integrations supporting analytics and user engagement.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    year: '2020',
    madeAt: 'Acklen Avenue',
    technologies: [
      'ReactJS',
      'TypeScript',
      'CSS',
      'NodeJS',
      'Ruby',
      'PostgreSQL',
      'Segment',
    ],
    liveUrl: 'https://gominno.com/',
    githubUrl: null,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const allProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <Header pageName="Projects" />

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
