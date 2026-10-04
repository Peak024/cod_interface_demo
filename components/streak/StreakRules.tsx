'use client';

import { TriangleAlert } from 'lucide-react';

import { useLanguage } from '@/lib/i18n/use-language';

/** What a refusal at the door costs the buyer. */
export function StreakRules() {
  const { t } = useLanguage();

  return (
    <div className="space-y-1 rounded-xl border border-red-200 bg-red-50 p-3 text-red-700">
      <div className="flex items-center gap-1.5 text-xs font-bold text-red-800">
        <TriangleAlert className="h-4 w-4 shrink-0 text-red-600" />
        {t.streak.warningTitle}
      </div>
      <p className="text-[11px] leading-relaxed text-red-600 sm:text-[10px]">
        {t.streak.warning.lead}
        <strong>{t.streak.warning.emphasis}</strong>
        {t.streak.warning.tail}
      </p>
    </div>
  );
}
