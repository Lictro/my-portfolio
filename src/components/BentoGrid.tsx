import { AboutCard } from './AboutCard';
import { BuiltWithCard } from './BuiltWithCard';
import { FunCard } from './FunCard';
import { HobbiesCard } from './HobbiesCard';
import MeCard from './MeCard';
import { MyStackCard } from './MyStackCard';
import { MyStatsCard } from './MyStatsCard';
import { ProjectsCard } from './ProjectsCard';
import { SpotifyCard } from './SpotifyCard';
import StatusCard from './StatusCard';
import { TimeCard } from './TimeCard';

const cards = [
  { Component: MeCard, className: 'col-span-8 row-span-4 p-8' },
  { Component: AboutCard, className: 'col-span-4 row-span-6 p-8' },
  { Component: TimeCard, className: 'col-span-4 row-span-2 p-4' },
  { Component: ProjectsCard, className: 'col-span-4 row-span-1' },
  { Component: MyStackCard, className: 'col-span-4 row-span-2' },
  { Component: SpotifyCard, className: 'col-span-4 row-span-1 p-4' },
  // { Component: MyStackCard, className: 'col-span-4 row-span-1' },
  { Component: StatusCard, className: 'col-span-4 row-span-1 p-4' },
  { Component: HobbiesCard, className: 'col-span-4 row-span-1' },
  { Component: FunCard, className: 'col-span-4 row-span-1' },
  { Component: BuiltWithCard, className: 'col-span-4 row-span-1' },
];

export default function BentoGrid() {
  return (
    <div className="w-full px-8 xl:px-20">
      <div className="grid grid-cols-12 auto-rows-[80px] gap-4">
        {cards.map(({ Component, className }, index) => (
          <Component key={index} className={className} />
        ))}
      </div>
    </div>
  );
}
