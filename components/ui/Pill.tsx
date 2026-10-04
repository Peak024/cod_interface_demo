import type { ReactNode } from 'react';

/** The small badge that sits next to a payment method name. */
export function Pill({ className, children }: { className: string; children: ReactNode }) {
  return (
    <span className={`ml-1.5 rounded px-1.5 py-0.5 text-[10px] font-bold ${className}`}>
      {children}
    </span>
  );
}
