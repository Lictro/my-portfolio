'use client';
import { motion } from 'framer-motion';
import { AboutCard } from './cards/AboutCard';
import { BuiltWithCard } from './cards/BuiltWithCard';
import { FunCard } from './cards/FunCard';
import { HobbiesCard } from './cards/HobbiesCard';
import MeCard from './cards/MeCard';
import { MyStackCard } from './cards/MyStackCard';
import { MyStatsCard } from './cards/MyStatsCard';
import { ProjectsCard } from './cards/ProjectsCard';
import { SpotifyCard } from './cards/SpotifyCard';
import StatusCard from './cards/StatusCard';
import { TimeCard } from './cards/TimeCard';
import { GuestbookCard } from './cards/GuestbookCard';

const cards = [
  {
    Component: MeCard,
    className:
      'lg:col-span-8 lg:row-span-4 md:col-span-12 md:row-span-4 sm:col-span-12 sm:row-span-4 col-span-12 row-span-4',
    componentClassName: 'p-8',
  },
  {
    Component: AboutCard,
    className:
      'lg:col-span-4 lg:row-span-6 md:col-span-12 md:row-span-4 sm:col-span-12 sm:row-span-4 col-span-12 row-span-5',
    componentClassName: 'p-8',
  },
  {
    Component: TimeCard,
    className:
      'lg:col-span-4 lg:row-span-2 md:col-span-6 md:row-span-2 sm:col-span-6 sm:row-span-2 col-span-12 row-span-2',
    componentClassName: 'p-4',
  },
  {
    Component: ProjectsCard,
    className:
      'lg:col-span-4 lg:row-span-1 md:col-span-6 md:row-span-1 sm:col-span-6 sm:row-span-1 col-span-12 row-span-1',
  },
  {
    Component: MyStackCard,
    className:
      'lg:col-span-4 lg:row-span-2 md:col-span-6 md:row-span-2 sm:col-span-6 sm:row-span-2 col-span-12 row-span-2',
  },
  {
    Component: SpotifyCard,
    className:
      'lg:col-span-4 lg:row-span-1 md:col-span-6 md:row-span-1 sm:col-span-6 sm:row-span-1 col-span-12 row-span-1',
    componentClassName: 'p-4',
  },
  // { Component: MyStackCard, className: 'col-span-4 row-span-1' },
  {
    Component: StatusCard,
    className:
      'lg:col-span-4 lg:row-span-1 md:col-span-6 md:row-span-1 sm:col-span-6 sm:row-span-1 col-span-12 row-span-1',
    componentClassName: 'p-4',
  },
  {
    Component: GuestbookCard,
    className:
      'lg:col-span-4 lg:row-span-1 md:col-span-6 md:row-span-1 sm:col-span-6 sm:row-span-1 col-span-12 row-span-1',
  },
  {
    Component: FunCard,
    className:
      'lg:col-span-4 lg:row-span-1 md:col-span-6 md:row-span-1 sm:col-span-6 sm:row-span-1 col-span-12 row-span-1',
  },
  {
    Component: BuiltWithCard,
    className:
      'lg:col-span-4 lg:row-span-1 md:col-span-6 md:row-span-1 sm:col-span-6 sm:row-span-1 col-span-12 row-span-1',
  },
];

export default function BentoGrid() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 auto-rows-[80px] gap-4 place-content-start">
        {cards.map(({ Component, className, componentClassName }, index) => (
          <motion.div
            key={index}
            className={className}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.07,
              ease: 'easeOut',
            }}
          >
            <Component className={`h-full ${componentClassName ?? ''}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
