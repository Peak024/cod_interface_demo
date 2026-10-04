'use client';

import { Trophy } from 'lucide-react';

import { MilestoneRow } from '@/components/streak/MilestoneRow';
import { useLanguage } from '@/lib/i18n/use-language';
import { CURRENT_STREAK, MILESTONES } from '@/lib/streak';

export function MilestoneList() {
  const { t } = useLanguage();

  return (
    <div className="space-y-2.5 rounded-2xl border border-orange-100 bg-white p-3.5 shadow-sm">
      <h3 className="flex items-center justify-between gap-2 text-xs font-bold text-gray-800">
        <span className="flex items-center gap-1.5">
          <Trophy className="h-4 w-4 text-orange-500" />
          {t.streak.milestonesTitle}
        </span>
        <span className="text-right text-[10px] font-normal text-gray-400">
          {t.streak.milestonesNote}
        </span>
      </h3>

      {MILESTONES.map((milestone) => (
        <MilestoneRow key={milestone.goal} milestone={milestone} current={CURRENT_STREAK} />
      ))}
    </div>
  );
}
