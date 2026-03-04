"use client";

import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon, ReadCvLogoIcon } from "@phosphor-icons/react";
import BentoCard from "./BentoCard";
import IconButton from "./IconButton";

export default function MeCard() {
  return (
    <BentoCard className="col-span-8 row-span-4 justify-between">
      {/* TOP CONTENT */}
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold text-slate-200">
          Luis Alvarez
        </h1>

        <p className="text-lg text-slate-200">
          Full Stack Software Engineer
        </p>

        <p className="max-w-xl text-sm text-foreground">
            I <span className="text-slate-200 font-medium">design</span> and <span className="text-slate-200 font-medium">build</span> clean digital experiences
            focused on <span className="text-slate-200 font-medium">simplicity</span>, <span className="text-slate-200 font-medium">performance</span>, 
            and <span className="text-slate-200 font-medium">thoughtful interaction</span>.
        </p>
      </div>

      {/* LINKS */}
      <div className="flex items-center gap-3">
        <IconButton href="https://github.com/">
          <GithubLogoIcon size={22} />
        </IconButton>

        <IconButton href="https://linkedin.com/">
          <LinkedinLogoIcon size={22} />
        </IconButton>

        <IconButton href="mailto:you@email.com">
          <EnvelopeSimpleIcon size={22} />
        </IconButton>

        <IconButton href="/cv.pdf">
          <ReadCvLogoIcon size={22} />
        </IconButton>
      </div>
    </BentoCard>
  );
}