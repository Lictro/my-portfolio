import BentoGrid from "@/components/BentoGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="w-full max-w-7xl mx-auto px-6 py-10">
        <BentoGrid />
      </main>
    </div>
  );
}