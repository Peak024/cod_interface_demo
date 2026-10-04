'use client';

import { Lock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type Props = {
  icon: LucideIcon;
  label: string;
  sub: string;
  subClassName: string;
  selected: boolean;
  locked: boolean;
  badge?: ReactNode;
  onSelect: () => void;
  className?: string;
};

export function PaymentMethodRow({
  icon: Icon,
  label,
  sub,
  subClassName,
  selected,
  locked,
  badge,
  onSelect,
  className = '',
}: Props) {
  const Glyph = locked ? Lock : Icon;

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      aria-disabled={locked || undefined}
      className={`flex w-full items-center gap-3 border-t border-gray-100 px-4 py-3 text-left first:border-t-0 ${
        locked ? 'bg-gray-50' : 'hover:bg-orange-50/40'
      } ${className}`}
    >
      <Glyph className={`h-5 w-5 shrink-0 ${locked ? 'text-gray-400' : 'text-brand'}`} />

      <span className="min-w-0 flex-1">
        <span
          className={`flex flex-wrap items-center text-[13px] ${
            locked ? 'text-gray-400' : 'text-gray-800'
          }`}
        >
          {label}
          {badge}
        </span>
        <span className={`block text-[11px] ${subClassName}`}>{sub}</span>
      </span>

      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
          selected ? 'border-brand' : 'border-gray-300'
        }`}
      >
        {selected && <span className="h-2.5 w-2.5 rounded-full bg-brand" />}
      </span>
    </button>
  );
}
