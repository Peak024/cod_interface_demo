'use client';

import { Bike, Gift } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { LanguageToggle } from '@/components/chrome/LanguageToggle';
import { ViewTab } from '@/components/chrome/ViewTab';
import { useLanguage } from '@/lib/i18n/use-language';
import type { ViewKey } from '@/lib/types';

const TABS: { key: ViewKey; icon?: LucideIcon; dot?: string }[] = [
  { key: 'rider', icon: Bike },
  { key: 'customer', icon: Gift },
  { key: 'green', dot: 'bg-emerald-400 ring-emerald-400/30' },
  { key: 'yellow', dot: 'bg-amber-400 ring-amber-400/30' },
  { key: 'red', dot: 'bg-rose-500 ring-rose-500/30' },
];

type Props = {
  view: ViewKey;
  onChange: (view: ViewKey) => void;
};

export function ControlBar({ view, onChange }: Props) {
  const { t } = useLanguage();

  return (
    <div className="safe-top flex w-full shrink-0 items-center gap-2 bg-slate-800 px-2 pb-2 shadow-xl sm:mb-4 sm:max-w-3xl sm:rounded-2xl sm:border sm:border-slate-700 sm:p-1.5">
      <div role="tablist" className="no-scrollbar flex min-w-0 flex-1 gap-1.5 overflow-x-auto sm:gap-2">
        {TABS.map((tab) => (
          <ViewTab
            key={tab.key}
            label={t.tabs[tab.key]}
            icon={tab.icon}
            dot={tab.dot}
            active={view === tab.key}
            onSelect={() => onChange(tab.key)}
          />
        ))}
      </div>
      <LanguageToggle />
    </div>
  );
}
