'use client';

import { baht } from '@/lib/format';
import { useLanguage } from '@/lib/i18n/use-language';
import { SAVED_ORDER, SAVED_ORDER_PAID } from '@/lib/rider';

export function OrderSavedBody() {
  const { t } = useLanguage();

  return (
    <div className="space-y-2 rounded-xl border border-amber-300 bg-linear-to-r from-amber-50 to-orange-50 p-3">
      <div className="flex items-center justify-between gap-2 text-xs">
        <span className="font-medium text-gray-600">{t.outcomes.saved.discountLabel}</span>
        <span className="font-bold text-orange-600">-{baht(SAVED_ORDER.discount)}</span>
      </div>

      <div className="flex items-center justify-between gap-2 text-xs">
        <span className="font-medium text-gray-600">{t.outcomes.saved.paidLabel}</span>
        <span className="font-bold text-gray-800">{baht(SAVED_ORDER_PAID)}</span>
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-amber-200 pt-1.5 text-xs">
        <span className="font-bold text-gray-700">{t.outcomes.saved.bonusLabel}</span>
        <span className="shrink-0 rounded bg-emerald-100 px-2 py-0.5 font-extrabold text-emerald-600">
          +{baht(SAVED_ORDER.riderBonus)}
        </span>
      </div>
    </div>
  );
}
