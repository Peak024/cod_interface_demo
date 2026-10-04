'use client';

import { Flame } from 'lucide-react';

import { fill } from '@/lib/format';
import { useLanguage } from '@/lib/i18n/use-language';
import { CURRENT_STREAK } from '@/lib/streak';

export function StreakBanner() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-orange-500 via-red-500 to-rose-600 p-4 text-white shadow-md">
      <div className="absolute -right-3 -bottom-3 opacity-20">
        <Flame className="h-28 w-28" />
      </div>

      <p className="text-[11px] font-bold tracking-wider text-orange-200 uppercase sm:text-[10px]">
        {t.streak.bannerEyebrow}
      </p>
      <h2 className="relative mt-0.5 text-lg leading-tight font-extrabold">
        {t.streak.bannerTitle}
      </h2>

      <div className="relative mt-3 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/30 px-3 py-1.5 text-xs">
        <Flame className="h-4 w-4 animate-bounce fill-yellow-300 text-yellow-300" />
        <span>
          {t.streak.streakLabel}{' '}
          <strong className="text-sm font-extrabold text-yellow-300">
            {fill(t.streak.streakValue, { n: CURRENT_STREAK })}
          </strong>
        </span>
      </div>
    </div>
  );
}
