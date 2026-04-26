'use client';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import CursorHalo from './components/CursorHalo';
import Header from '@/components/ui/header';
import FeaturedProjectCard from './components/FeaturedProjectCard';
import ProjectCardMobile from './components/ProjectCardMobile';
import PROJECT_DATA from './data/projects.json';

const ProjectsTable = dynamic(() => import('./components/ProjectsTable'), {
  ssr: false,
});

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  const featuredProjects = useMemo(
    () => PROJECT_DATA.filter((p) => p.featured),
    [PROJECT_DATA]
  );

  const allProjects = useMemo(
    () => PROJECT_DATA.filter((p) => !p.featured),
    [PROJECT_DATA]
  );

  const isTouchDevice =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(pointer: coarse)').matches;

  return (
    <>
      {!isTouchDevice && <CursorHalo />}

      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Header pageName="Projects" />
          </motion.div>

          {featuredProjects.length > 0 && (
            <motion.div
              className="mb-16"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                className="text-2xl font-semibold text-slate-200 mb-6"
                variants={item}
              >
                Featured
              </motion.h2>

              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((p) => (
                  <motion.div key={p.id} variants={item}>
                    <FeaturedProjectCard project={p} />
                  </motion.div>
                ))}
              </div>

              <div className="md:hidden space-y-4">
                {featuredProjects.map((p) => (
                  <motion.div key={p.id} variants={item}>
                    <ProjectCardMobile project={p} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {allProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-slate-200 mb-6">
                All Projects
              </h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <ProjectsTable projects={allProjects} />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
