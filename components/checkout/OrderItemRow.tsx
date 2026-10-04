'use client';

import { Shirt } from 'lucide-react';

import { QuantityStepper } from '@/components/checkout/QuantityStepper';
import { PRICE } from '@/lib/checkout/pricing';
import { baht } from '@/lib/format';
import { useLanguage } from '@/lib/i18n/use-language';

type Props = {
  qty: number;
  onChangeQty: (delta: number) => void;
};

export function OrderItemRow({ qty, onChangeQty }: Props) {
  const { t } = useLanguage();

  return (
    <div className="flex gap-3 bg-gray-50/60 px-4 py-3">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded bg-slate-800">
        <Shirt className="h-8 w-8 text-slate-300" />
      </div>

      <div className="min-w-0 flex-1 text-[13px]">
        <p className="line-clamp-2 leading-snug text-gray-800">{t.checkout.product}</p>
        <p className="mt-0.5 text-[11px] text-gray-500">{t.checkout.variation}</p>
        <div className="mt-1.5 flex items-center justify-between gap-2">
          <span className="text-gray-800">{baht(PRICE.item)}</span>
          <QuantityStepper qty={qty} onChange={onChangeQty} />
        </div>
      </div>
    </div>
  );
}
