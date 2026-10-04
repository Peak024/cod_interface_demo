'use client';

import { Minus, Plus } from 'lucide-react';

import { MAX_QTY } from '@/lib/checkout/pricing';
import { useLanguage } from '@/lib/i18n/use-language';

const STEP =
  'flex h-7 w-7 items-center justify-center text-gray-600 disabled:cursor-not-allowed disabled:text-gray-300';

type Props = {
  qty: number;
  onChange: (delta: number) => void;
};

export function QuantityStepper({ qty, onChange }: Props) {
  const { t } = useLanguage();

  return (
    <span className="flex items-center rounded-sm border border-gray-300 bg-white">
      <button
        type="button"
        onClick={() => onChange(-1)}
        disabled={qty <= 1}
        aria-label={t.checkout.qtyLess}
        className={`${STEP} border-r border-gray-300`}
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <span className="w-8 text-center text-[13px] text-gray-800" aria-live="polite">
        {qty}
      </span>
      <button
        type="button"
        onClick={() => onChange(1)}
        disabled={qty >= MAX_QTY}
        aria-label={t.checkout.qtyMore}
        className={`${STEP} border-l border-gray-300`}
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </span>
  );
}
