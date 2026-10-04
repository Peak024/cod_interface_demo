'use client';

import { ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export type OutcomeTone = {
  button: string;
  iconBox: string;
  icon: string;
  sub: string;
  chevron: string;
};

type Props = {
  tone: OutcomeTone;
  icon: LucideIcon;
  title: string;
  sub: string;
  onSelect: () => void;
  /** The ribbon across the top corner, used by the order-saved outcome. */
  ribbon?: ReactNode;
};

export function OutcomeButton({ tone, icon: Icon, title, sub, onSelect, ribbon }: Props) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative flex w-full items-center justify-between gap-2 overflow-hidden rounded-2xl p-3 text-left transition-all active:scale-[0.98] ${
        ribbon ? 'pt-5' : ''
      } ${tone.button}`}
    >
      {ribbon}
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-9 sm:w-9 ${tone.iconBox}`}
        >
          <Icon className={`h-5 w-5 ${tone.icon}`} />
        </div>
        <div className="min-w-0">
          <p className="text-[13px] font-bold sm:text-xs">{title}</p>
          <p className={`text-[11px] sm:text-[10px] ${tone.sub}`}>{sub}</p>
        </div>
      </div>
      <ChevronRight className={`h-4 w-4 shrink-0 ${tone.chevron}`} />
    </button>
  );
}
