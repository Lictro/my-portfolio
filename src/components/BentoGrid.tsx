import BentoCard from "./BentoCard";
import MeCard from "./MeCard";
import StatusCard from "./StatusCard";

export default function BentoGrid() {
  return (
    <div className="w-full px-8 xl:px-20">
      <div className="grid grid-cols-12 auto-rows-[80px] gap-4">
        <MeCard />

        <BentoCard className="col-span-4 row-span-6">
          <h2>About Me</h2>
        </BentoCard>

        <BentoCard className="col-span-4 row-span-2">
          <h2>Time</h2>
        </BentoCard>

        <BentoCard className="col-span-4 row-span-1">
          <h2>Projects</h2>
        </BentoCard>

        <StatusCard status="vacation" />

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

        <BentoCard className="col-span-4 row-span-1">
          <h2>Built With</h2>
        </BentoCard>
      </div>
    </div>
  );
}


