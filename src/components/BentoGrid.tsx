import { AboutCard } from './AboutCard';
import BentoCard from './BentoCard';
import { BuiltWithCard } from './BuiltWithCard';
import { FunCard } from './FunCard';
import { HobbiesCard } from './HobbiesCard';
import MeCard from './MeCard';
import { MyStackCard } from './MyStackCard';
import { MyStatsCard } from './MyStats';
import { ProjectsCard } from './ProjectsCard';
import { SpotifyCard } from './SpotifyCard';
import StatusCard from './StatusCard';
import { TimeCard } from './TimeCard';

export default function BentoGrid() {
  return (
    <div className="w-full px-8 xl:px-20">
      <div className="grid grid-cols-12 auto-rows-[80px] gap-4">
        <MeCard className="col-span-8 row-span-4 p-8" />

        <AboutCard className="col-span-4 row-span-6 p-8" />

        <TimeCard className="col-span-4 row-span-2 p-4" />

        <ProjectsCard className="col-span-4 row-span-1" />

        <StatusCard className="col-span-4 row-span-1 p-4" />

        <SpotifyCard className="col-span-4 row-span-1 p-4" />

        <MyStackCard className="col-span-4 row-span-1" />

        <MyStatsCard className="col-span-4 row-span-1" />

        <HobbiesCard className="col-span-4 row-span-1" />

        <FunCard className="col-span-4 row-span-1" />
        
        <BuiltWithCard className="col-span-4 row-span-1 " />
      </div>
    </div>
  );
}
