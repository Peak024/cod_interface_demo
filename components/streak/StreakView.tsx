'use client';

import { ShoppingBag } from 'lucide-react';

import { MilestoneList } from '@/components/streak/MilestoneList';
import { StreakBanner } from '@/components/streak/StreakBanner';
import { StreakRules } from '@/components/streak/StreakRules';
import { ScreenHeader } from '@/components/ui/ScreenHeader';
import { APP_NAME } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n/use-language';

export function StreakView() {
  const { t } = useLanguage();

  return (
    <div className="flex h-full min-h-0 flex-col bg-orange-50/40">
      <ScreenHeader
        icon={ShoppingBag}
        title={`${APP_NAME} · ${t.streak.headerTitle}`}
        subtitle={t.streak.subtitle}
        badge={
          <span className="shrink-0 rounded-full bg-yellow-400 px-2.5 py-0.5 text-[11px] font-extrabold text-gray-900 shadow-sm sm:text-[10px]">
            {t.streak.levelBadge}
          </span>
        }
      />

      <div className="custom-scrollbar safe-bottom min-h-0 flex-1 overflow-y-auto p-3">
        <div className="mx-auto max-w-xl space-y-3">
          <StreakBanner />
          <MilestoneList />
          <StreakRules />
        </div>
      </div>
    </div>
  );
}
