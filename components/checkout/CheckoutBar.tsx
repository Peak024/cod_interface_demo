'use client';

import type { Amounts } from '@/lib/checkout/pricing';
import { baht, fill } from '@/lib/format';
import { useLanguage } from '@/lib/i18n/use-language';

type Props = {
  amounts: Amounts;
  /** False while no payment method is chosen. */
  canPlace: boolean;
  onPlace: () => void;
};

export function CheckoutBar({ amounts, canPlace, onPlace }: Props) {
  const { t } = useLanguage();

  return (
    <div className="safe-bottom flex shrink-0 items-stretch justify-end border-t border-gray-200 bg-white">
      <div className="flex min-w-0 flex-col items-end justify-center px-3 py-2">
        <span className="text-[12px] text-gray-700">
          {t.checkout.barTotal}{' '}
          <span className="text-base font-semibold text-brand">{baht(amounts.total)}</span>
        </span>
        {amounts.discount > 0 && (
          <span className="text-[11px] text-brand">
            {fill(t.checkout.barSaved, { x: baht(amounts.discount) })}
          </span>
        )}
        {!canPlace && (
          <span className="text-[11px] font-semibold text-gray-600">{t.checkout.pickPayment}</span>
        )}
      </div>

      <button
        type="button"
        onClick={onPlace}
        disabled={!canPlace}
        className="bg-brand px-7 text-sm font-medium text-white hover:brightness-105 active:brightness-95 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {t.checkout.placeOrder}
      </button>
    </div>
  );
}
