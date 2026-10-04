import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type Props = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  badge: ReactNode;
};

/** The orange app bar shared by the rider and streak screens. */
export function ScreenHeader({ icon: Icon, title, subtitle, badge }: Props) {
  return (
    <div className="flex shrink-0 items-center justify-between gap-2 bg-brand px-4 py-3 text-white shadow-md">
      <div className="flex min-w-0 items-center gap-2">
        <Icon className="h-5 w-5 shrink-0" />
        <div className="min-w-0">
          <h1 className="text-sm leading-tight font-bold">{title}</h1>
          <p className="truncate text-[11px] text-orange-100 sm:text-[10px]">{subtitle}</p>
        </div>
      </div>
      {badge}
    </div>
  );
}
