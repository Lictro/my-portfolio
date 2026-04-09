'use client';

import {
  EnvelopeSimpleIcon,
  FlagIcon,
  GithubLogoIcon,
  GlobeIcon,
  LightbulbFilamentIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  ReadCvLogoIcon,
  UsersThreeIcon,
  WrenchIcon,
} from '@phosphor-icons/react';
import Image from 'next/image';
import BentoCard from '../BentoCard';
import IconButton from './IconButton';
import TechBadge from '@/app/projects/components/TechBadge';

export default function MeCard({ className }: { className?: string }) {
  return (
    <BentoCard className={`p-6 items-stretch ${className}`} direction="row">
      <div className="flex flex-col justify-between space-y-6 max-w-lg h-full">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-slate-200">Luis Alvarez</h1>

          <p className="text-lg font-semibold text-slate-200">
            Full Stack Software Developer
          </p>

          <p className="max-w-xl text-sm text-foreground">
            I <span className="text-slate-200 font-medium">design</span> and{' '}
            <span className="text-slate-200 font-medium">build</span> clean
            digital experiences focused on{' '}
            <span className="text-slate-200 font-medium">simplicity</span>,{' '}
            <span className="text-slate-200 font-medium">performance</span>, and{' '}
            <span className="text-slate-200 font-medium">
              thoughtful interaction
            </span>
            .
          </p>

          <div className="flex flex-wrap gap-2">
            <TechBadge tech="Honduras" icon={<MapPinIcon size={12} />} />
            <TechBadge
              tech="English & Spanish"
              icon={<GlobeIcon size={12} />}
            />
            <TechBadge
              tech="Software Development"
              icon={<FlagIcon size={12} />}
            />
            <TechBadge
              tech="Problem Solver"
              icon={<LightbulbFilamentIcon size={12} />}
            />
            <TechBadge tech="Team Player" icon={<UsersThreeIcon size={12} />} />
            <TechBadge tech="Flexible" icon={<WrenchIcon size={12} />} />
          </div>
        </div>

        {/* LINKS */}
        <div className="flex items-center gap-3">
          <IconButton href="https://github.com/Lictro">
            <GithubLogoIcon size={28} />
          </IconButton>

          <IconButton href="https://www.linkedin.com/in/luis-alvarez-5209b5163">
            <LinkedinLogoIcon size={28} />
          </IconButton>

          <IconButton href="mailto:laar0716@outlook.com">
            <EnvelopeSimpleIcon size={28} />
          </IconButton>

          <IconButton href="/resume.pdf">
            <ReadCvLogoIcon size={28} />
          </IconButton>
        </div>
      </div>

      <div className="flex items-center h-full">
        <div className="bg-teal-400/10 rounded-lg overflow-hidden">
          <Image
            src="/images/profile.png"
            alt="Luis Alvarez"
            width={460}
            height={460}
            className="object-cover object-bottom w-full h-full"
            loading="eager"
          />
        </div>
      </div>
    </BentoCard>
  );
}
