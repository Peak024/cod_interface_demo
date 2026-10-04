'use client';

import { ChevronRight, Info, TicketPercent } from 'lucide-react';

import { baht } from '@/lib/format';
import { useLanguage } from '@/lib/i18n/use-language';

type Props = {
  discount: number;
  dropped: boolean;
  onOpen: () => void;
};

export function VoucherRow({ discount, dropped, onOpen }: Props) {
  const { t } = useLanguage();

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="mt-2 flex w-full items-center gap-3 bg-white px-4 py-3 text-left hover:bg-orange-50/40"
      >
        <TicketPercent className="h-5 w-5 shrink-0 text-brand" />
        <span className="min-w-0 flex-1 text-[13px] text-gray-800">{t.checkout.voucherRow}</span>
        {discount > 0 ? (
          <span className="rounded-sm border border-brand px-1.5 py-0.5 text-[11px] font-semibold text-brand">
            -{baht(discount)}
          </span>
        ) : (
          <span className="text-[12px] text-gray-400">{t.checkout.voucherPick}</span>
        )}
        <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />
      </button>

      {dropped && (
        <p className="flex items-start gap-1.5 bg-amber-50 px-4 py-2 text-[11px] text-amber-800">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {t.checkout.voucherRemoved}
        </p>
      )}
    </>
  );
}
