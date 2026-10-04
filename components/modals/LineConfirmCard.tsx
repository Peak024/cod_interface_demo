'use client';

import { Check, ShoppingBag } from 'lucide-react';

import { ORDER_NO } from '@/lib/constants';
import { baht, fill } from '@/lib/format';
import { useLanguage } from '@/lib/i18n/use-language';

type Props = {
  qty: number;
  codTotal: number;
  confirmed: boolean;
  onConfirm: () => void;
};

/**
 * The SMS/LINE message a yellow customer has to acknowledge before the shop
 * starts packing a cash-on-delivery order.
 */
export function LineConfirmCard({ qty, codTotal, confirmed, onConfirm }: Props) {
  const { t } = useLanguage();

  const lines = t.order.line.message.map((line) =>
    fill(line, { no: ORDER_NO, item: t.checkout.product, n: qty, cod: baht(codTotal) }),
  );

  return (
    <div className="rounded-2xl bg-[#8CABD9]/30 p-3">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
          <ShoppingBag className="h-4 w-4" />
        </span>
        <span className="text-[12px] font-semibold text-gray-800">{t.order.line.from}</span>
        <span className="ml-auto rounded bg-[#06C755] px-1.5 py-0.5 text-[10px] font-bold text-white">
          {t.order.line.via}
        </span>
      </div>

      <div className="rounded-2xl rounded-tl-sm bg-white p-3 text-[12px] leading-relaxed text-gray-700 shadow-sm">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}

        {confirmed ? (
          <p className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg bg-emerald-50 py-2 text-center font-semibold text-emerald-700">
            <Check className="h-4 w-4" />
            {t.order.line.done}
          </p>
        ) : (
          <button
            type="button"
            onClick={onConfirm}
            className="mt-2.5 w-full rounded-lg bg-[#06C755] py-2 font-semibold text-white hover:brightness-105 active:scale-[0.98]"
          >
            {t.order.line.button}
          </button>
        )}
      </div>
    </div>
  );
}
