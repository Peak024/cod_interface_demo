'use client';

import { useLanguage } from '@/lib/i18n/use-language';

export function RiderStatusBar() {
  const { t } = useLanguage();

  return (
    <div className="safe-bottom flex shrink-0 items-center justify-between gap-2 border-t border-gray-200 bg-white px-3 pt-3 text-xs shadow-lg">
      <div className="flex min-w-0 items-center gap-2">
        <div className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-500" />
        <span className="truncate text-[12px] text-gray-600 sm:text-[11px]">
          {t.rider.statusLabel} <strong className="text-gray-800">{t.rider.statusOnline}</strong>
        </span>
      </div>
      <span className="shrink-0 rounded-lg border border-emerald-100 bg-emerald-50 px-2 py-1 text-[12px] font-bold text-emerald-600 sm:text-[11px]">
        {t.rider.bonusToday}
      </span>
    </div>
  );
}
