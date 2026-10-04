'use client';

import { Lock } from 'lucide-react';

import { baht, fill } from '@/lib/format';
import { useLanguage } from '@/lib/i18n/use-language';
import type { Milestone, MilestoneState } from '@/lib/streak';

const ROW: Record<MilestoneState, string> = {
  done: 'border border-emerald-200 bg-emerald-50/70',
  active: 'border-2 border-amber-400 bg-amber-50 shadow-sm',
  locked: 'border border-gray-200 bg-gray-50 opacity-60',
};

const COUNTER: Record<MilestoneState, string> = {
  done: 'bg-emerald-500 text-xs font-bold text-white shadow-sm',
  active: 'bg-amber-400 text-[11px] font-extrabold text-gray-900',
  locked: 'bg-gray-200 text-[11px] font-bold text-gray-500',
};

const REWARD: Record<MilestoneState, string> = {
  done: 'font-semibold text-emerald-600',
  active: 'font-bold text-amber-800',
  locked: 'text-gray-500',
};

type Props = {
  milestone: Milestone;
  current: number;
};

export function MilestoneRow({ milestone, current }: Props) {
  const { t } = useLanguage();
  const { goal, reward, state } = milestone;

  return (
    <div className={`flex items-center justify-between gap-2 rounded-xl p-2.5 ${ROW[state]}`}>
      <div className="flex min-w-0 items-center gap-2.5">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${COUNTER[state]}`}
        >
          {state === 'done' ? '✓' : `${current}/${goal}`}
        </div>
        <div className="min-w-0">
          <p
            className={`text-xs font-bold ${state === 'locked' ? 'text-gray-700' : 'text-gray-800'}`}
          >
            {fill(t.streak.goal, { n: goal })}
          </p>
          <p className={`text-[11px] sm:text-[10px] ${REWARD[state]}`}>
            {fill(t.streak.reward, { x: baht(reward) })}
          </p>
        </div>
      </div>

      {state === 'done' && (
        <span className="shrink-0 rounded-md bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">
          {t.streak.unlocked}
        </span>
      )}
      {state === 'active' && (
        <span className="shrink-0 animate-pulse rounded-md bg-amber-200 px-2 py-1 text-[10px] font-bold text-amber-900">
          {fill(t.streak.remaining, { n: goal - current })}
        </span>
      )}
      {state === 'locked' && <Lock className="h-4 w-4 shrink-0 text-gray-400" />}
    </div>
  );
}
