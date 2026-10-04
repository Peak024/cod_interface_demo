'use client';

import { PackageCheck, Truck, Zap } from 'lucide-react';

import { PRICE } from '@/lib/checkout/pricing';
import { baht } from '@/lib/format';
import { useLanguage } from '@/lib/i18n/use-language';

/** Green customers get the Priority queue; the others get the standard one. */
export function ShippingOption({ priority }: { priority: boolean }) {
  const { t } = useLanguage();

  return (
    <div className="mx-4 mb-3 rounded border border-emerald-200 bg-emerald-50/50 p-3 text-[13px]">
      <div className="flex items-center justify-between gap-2">
        <span className="text-emerald-700">{t.checkout.shippingTitle}</span>
        {priority && (
          <span className="flex items-center gap-1 rounded bg-emerald-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
            <Zap className="h-3 w-3" />
            Priority
          </span>
        )}
      </div>

      <div className="mt-1 flex justify-between gap-2">
        <span className="font-medium text-gray-800">{t.checkout.shippingName}</span>
        <span className="shrink-0 text-gray-800">{baht(PRICE.shipping)}</span>
      </div>

      <p className="mt-0.5 flex items-center gap-1 text-[11px] text-gray-500">
        <Truck className="h-3.5 w-3.5" />
        {priority ? t.checkout.shippingEtaPriority : t.checkout.shippingEta}
      </p>

      {priority && (
        <p className="mt-0.5 flex items-center gap-1 text-[11px] font-medium text-emerald-700">
          <PackageCheck className="h-3.5 w-3.5" />
          {t.checkout.priorityNote}
        </p>
      )}
    </div>
  );
}
