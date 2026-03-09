'use client';

import { useEffect, useState } from 'react';
import BentoCard from './BentoCard';
import clsx from 'clsx';
import { supabase } from '@/lib/supabase';

type Status = 'available' | 'fulltime' | 'parttime' | 'vacation' | 'sick';

const STATUS_CONFIG: Record<
  Status,
  { label: string; color: string; glow: string }
> = {
  available: {
    label: 'Available for work',
    color: 'bg-emerald-400',
    glow: 'shadow-emerald-400/40',
  },
  fulltime: {
    label: 'Working full time',
    color: 'bg-blue-400',
    glow: 'shadow-blue-400/40',
  },
  parttime: {
    label: 'Working part time',
    color: 'bg-yellow-400',
    glow: 'shadow-yellow-400/40',
  },
  vacation: {
    label: 'On vacation',
    color: 'bg-purple-400',
    glow: 'shadow-purple-400/40',
  },
  sick: {
    label: 'Sick',
    color: 'bg-red-400',
    glow: 'shadow-red-400/40',
  },
};

function StatusCardLoading({ className }: { className?: string }) {
  return (
    <BentoCard className={className}>
      <div className="relative flex items-center gap-3 min-h-[48px] animate-pulse">
        <div className="h-2.5 w-2.5 rounded-full bg-slate-500" />

        <div className="flex flex-col gap-2">
          <div className="h-4 w-36 rounded bg-slate-600" />
          <div className="h-3 w-52 rounded bg-slate-700" />
        </div>
      </div>
    </BentoCard>
  );
}

export default function StatusCard({ className }: { className?: string }) {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<Status>('available');
  const [reason, setReason] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      const { data } = await supabase
        .from('status')
        .select('status, reason')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      console.log('Fetched status:', data);

      if (data) {
        setStatus(data.status);
        setReason(data.reason);
      }

      setLoading(false);
    };

    fetchStatus();
  }, []);

  if (loading) return <StatusCardLoading className={className} />;

  const config = STATUS_CONFIG[status];

  return (
    <BentoCard className={className}>
      <div className="flex items-center h-full">
        <div className="flex items-center gap-2 text-sm">
          {/* blinking dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={clsx(
                'absolute inline-flex h-full w-full rounded-full animate-ping opacity-75',
                config.color
              )}
            />
            <span
              className={clsx(
                'relative inline-flex rounded-full h-2.5 w-2.5',
                config.color,
                config.glow
              )}
            />
          </span>

          <div className="ml-1">
            <h1 className="text-lg font-bold text-slate-200">{config.label}</h1>

            <p className="text-sm text-muted-foreground">{reason}</p>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
