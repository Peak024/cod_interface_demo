'use client';

import { ArrowLeft } from 'lucide-react';

import { JobCard } from '@/components/rider/JobCard';
import { OutcomeList } from '@/components/rider/OutcomeList';
import { RiderStatusBar } from '@/components/rider/RiderStatusBar';
import { ScreenHeader } from '@/components/ui/ScreenHeader';
import { APP_NAME } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n/use-language';
import type { RiderOutcome } from '@/lib/types';

export function RiderView({ onOutcome }: { onOutcome: (outcome: RiderOutcome) => void }) {
  const { t } = useLanguage();

  return (
    <div className="flex h-full min-h-0 flex-col">
      <ScreenHeader
        icon={ArrowLeft}
        title={APP_NAME}
        subtitle={t.rider.subtitle}
        badge={
          <span className="shrink-0 rounded-lg bg-white/20 px-2 py-1 text-[11px] font-bold sm:text-[10px]">
            {t.rider.jobCounter}
          </span>
        }
      />

      <div className="custom-scrollbar min-h-0 flex-1 space-y-3 overflow-y-auto p-3">
        <div className="mx-auto max-w-xl space-y-3">
          <JobCard />
          <OutcomeList onSelect={onOutcome} />
        </div>
      </div>

      <RiderStatusBar />
    </div>
  );
}
