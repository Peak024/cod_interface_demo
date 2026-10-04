'use client';

import { CircleCheck, CircleX, MousePointerClick, Sparkles, UserX } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { OutcomeButton, type OutcomeTone } from '@/components/rider/OutcomeButton';
import { useLanguage } from '@/lib/i18n/use-language';
import type { RiderOutcome } from '@/lib/types';

const TONES: Record<RiderOutcome, OutcomeTone> = {
  delivered: {
    button: 'bg-emerald-500 text-white shadow-sm hover:bg-emerald-600',
    iconBox: 'bg-white/20',
    icon: 'text-white',
    sub: 'text-emerald-100',
    chevron: 'text-emerald-200',
  },
  saved: {
    button:
      'border-2 border-yellow-300 bg-linear-to-r from-amber-500 via-orange-500 to-red-500 text-white shadow-md hover:brightness-105',
    iconBox: 'bg-white/20',
    icon: 'text-yellow-200',
    sub: 'text-yellow-100',
    chevron: 'text-yellow-100',
  },
  refused: {
    button: 'border border-rose-200 bg-rose-50 text-rose-800 shadow-sm hover:bg-rose-100',
    iconBox: 'bg-rose-200/60',
    icon: 'text-rose-600',
    sub: 'text-rose-500',
    chevron: 'text-rose-400',
  },
  silent: {
    button: 'border border-slate-300 bg-slate-100 text-slate-800 shadow-sm hover:bg-slate-200',
    iconBox: 'bg-slate-300/60',
    icon: 'text-slate-700',
    sub: 'text-slate-500',
    chevron: 'text-slate-400',
  },
};

const ICONS: Record<RiderOutcome, LucideIcon> = {
  delivered: CircleCheck,
  saved: Sparkles,
  refused: CircleX,
  silent: UserX,
};

const ORDER: readonly RiderOutcome[] = ['delivered', 'saved', 'refused', 'silent'];

export function OutcomeList({ onSelect }: { onSelect: (outcome: RiderOutcome) => void }) {
  const { t } = useLanguage();

  return (
    <>
      <div className="flex items-center justify-between gap-2 px-1 pt-1">
        <span className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
          <MousePointerClick className="h-4 w-4 shrink-0 text-orange-500" />
          {t.rider.chooseStatus}
        </span>
        <span className="shrink-0 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
          {t.rider.gpsVerified}
        </span>
      </div>

      <div className="space-y-2">
        {ORDER.map((outcome) => (
          <OutcomeButton
            key={outcome}
            tone={TONES[outcome]}
            icon={ICONS[outcome]}
            title={t.rider.outcomes[outcome].title}
            sub={t.rider.outcomes[outcome].sub}
            onSelect={() => onSelect(outcome)}
            ribbon={
              outcome === 'saved' ? (
                <span className="absolute top-0 right-0 rounded-bl-xl bg-yellow-400 px-2.5 py-0.5 text-[10px] font-extrabold whitespace-nowrap text-gray-900 shadow-sm sm:text-[9px]">
                  {t.rider.bonusBadge}
                </span>
              ) : undefined
            }
          />
        ))}
      </div>
    </>
  );
}
