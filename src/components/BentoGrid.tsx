import { AboutCard } from "./AboutCard";
import BentoCard from "./BentoCard";
import { BuiltWithCard } from "./BuiltWithCard";
import MeCard from "./MeCard";
import StatusCard from "./StatusCard";
import { TimeCard } from "./TimeCard";

export default function BentoGrid() {
  return (
    <div className="w-full px-8 xl:px-20">
      <div className="grid grid-cols-12 auto-rows-[80px] gap-4">
        <MeCard className="col-span-8 row-span-4 p-8"/>

        <AboutCard className="col-span-4 row-span-6 p-8" />

        <TimeCard className="col-span-4 row-span-2 px-8 py-2.5" />

        <BentoCard className="col-span-4 row-span-1">
          <h2>Projects</h2>
        </BentoCard>

        <StatusCard className="col-span-4 row-span-1 p-8" status="vacation" />

        <BentoCard className="col-span-4 row-span-1">
          <h2>Spotify</h2>
        </BentoCard>

        <BentoCard className="col-span-4 row-span-1">
          <h2>Stack</h2>
        </BentoCard>

        <BentoCard className="col-span-4 row-span-1">
          <h2>My Stats</h2>
        </BentoCard>

        <BentoCard className="col-span-4 row-span-1">
          <h2>Hobbies</h2>
        </BentoCard>

        <BentoCard className="col-span-4 row-span-1">
          <h2>Fun</h2>
        </BentoCard>

        <BuiltWithCard className="col-span-4 row-span-1 " />
      </div>
    </div>
  );
}


