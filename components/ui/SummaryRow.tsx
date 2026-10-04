import type { ReactNode } from 'react';

type Props = {
  label: string;
  value: ReactNode;
  className?: string;
  valueClassName?: string;
};

/** One label-on-the-left, amount-on-the-right line. */
export function SummaryRow({ label, value, className = '', valueClassName = '' }: Props) {
  return (
    <div className={`flex justify-between gap-3 ${className}`}>
      <span>{label}</span>
      <span className={`shrink-0 ${valueClassName}`}>{value}</span>
    </div>
  );
}
