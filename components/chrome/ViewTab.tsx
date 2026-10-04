'use client';

import { useEffect, useRef } from 'react';
import type { LucideIcon } from 'lucide-react';

const BASE =
  'shrink-0 md:shrink md:flex-1 md:min-w-0 flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs transition-all sm:gap-2 sm:text-sm';

const ACTIVE = 'bg-linear-to-r from-orange-500 to-red-500 font-bold text-white shadow-lg';
const IDLE = 'font-semibold text-slate-300 hover:bg-slate-700/50 hover:text-white';

type Props = {
  label: string;
  active: boolean;
  onSelect: () => void;
  icon?: LucideIcon;
  /** Colour classes for the tier dot, when this tab has no icon. */
  dot?: string;
};

export function ViewTab({ label, active, onSelect, icon: Icon, dot }: Props) {
  const button = useRef<HTMLButtonElement>(null);

  // Keep the chosen tab in view when the strip scrolls sideways on a phone.
  useEffect(() => {
    if (active) button.current?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }, [active]);

  return (
    <button
      ref={button}
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onSelect}
      className={`${BASE} ${active ? ACTIVE : IDLE}`}
    >
      {Icon ? (
        <Icon className="h-4 w-4 shrink-0" />
      ) : (
        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ring-2 ${dot}`} />
      )}
      <span className="truncate">{label}</span>
    </button>
  );
}
