'use client';

import { ShoppingBag } from 'lucide-react';

import type { Voucher } from '@/lib/checkout/vouchers';
import { useLanguage } from '@/lib/i18n/use-language';

type Props = {
  voucher: Voucher;
  picked: boolean;
  /** True while cash on delivery rules the voucher out. */
  blocked: boolean;
  onPick: () => void;
};

export function VoucherCard({ voucher, picked, blocked, onPick }: Props) {
  const { t } = useLanguage();
  const text = t.voucher.items[voucher.id];

  return (
    <button
      type="button"
      onClick={onPick}
      disabled={blocked}
      aria-pressed={picked}
      className={`flex w-full items-stretch overflow-hidden rounded-md border text-left ${
        picked ? 'border-brand' : 'border-gray-200'
      } ${blocked ? 'cursor-not-allowed opacity-50 grayscale' : 'hover:border-orange-300'}`}
    >
      <span className="flex w-20 shrink-0 flex-col items-center justify-center gap-1 border-r-2 border-dashed border-white/70 bg-brand py-3 text-white">
        <ShoppingBag className="h-6 w-6" />
        <span className="text-[10px] font-bold">{t.voucher.stubLabel}</span>
      </span>

      <span className="min-w-0 flex-1 bg-white px-3 py-2.5">
        <span className="block text-[13px] font-medium text-gray-800">{text.title}</span>
        <span className="block text-[11px] text-gray-500">{text.condition}</span>
        <span
          className={`block text-[11px] ${blocked ? 'font-medium text-rose-600' : 'text-gray-400'}`}
        >
          {blocked ? t.voucher.notWithCod : t.voucher.expiry}
        </span>
      </span>

      <span className="self-center bg-white pr-3">
        <span
          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
            picked ? 'border-brand' : 'border-gray-300'
          }`}
        >
          {picked && <span className="h-2.5 w-2.5 rounded-full bg-brand" />}
        </span>
      </span>
    </button>
  );
}
