'use client';

import { TicketX, X } from 'lucide-react';

import { VoucherCard } from '@/components/checkout/VoucherCard';
import { discountOf } from '@/lib/checkout/pricing';
import { VOUCHERS, type VoucherId } from '@/lib/checkout/vouchers';
import { baht, fill } from '@/lib/format';
import { useLanguage } from '@/lib/i18n/use-language';

type Props = {
  qty: number;
  pending: VoucherId | null;
  /** Cash on delivery is selected, so nothing here can be used. */
  blocked: boolean;
  onPick: (id: VoucherId) => void;
  onApply: () => void;
  onClose: () => void;
  onSwitchPayment: () => void;
};

/**
 * The bottom sheet inside the phone screen. A yellow customer paying cash on
 * delivery can open it and read the vouchers, but not apply one.
 */
export function VoucherSheet({
  qty,
  pending,
  blocked,
  onPick,
  onApply,
  onClose,
  onSwitchPayment,
}: Props) {
  const { t } = useLanguage();
  const saving = pending && !blocked ? discountOf(qty, pending) : 0;

  return (
    <div
      className="absolute inset-0 z-40 flex items-end bg-black/40"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.voucher.sheetTitle}
        className="flex max-h-[85%] w-full flex-col rounded-t-2xl bg-gray-100"
      >
        <div className="flex items-center rounded-t-2xl border-b border-gray-200 bg-white px-4 py-3">
          <h2 className="flex-1 text-[15px] font-medium text-gray-800">{t.voucher.sheetTitle}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.voucher.close}
            className="-m-1 p-1 text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {blocked && (
          <div className="mx-3 mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-[12px] leading-relaxed text-amber-900">
            <p className="flex items-start gap-1.5">
              <TicketX className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{t.voucher.blocked}</span>
            </p>
            <button
              type="button"
              onClick={onSwitchPayment}
              className="mt-2 rounded-md bg-brand px-3 py-1.5 text-[12px] font-semibold text-white"
            >
              {t.voucher.switchToWallet}
            </button>
          </div>
        )}

        <div className="custom-scrollbar space-y-2 overflow-y-auto p-3">
          {VOUCHERS.map((voucher) => (
            <VoucherCard
              key={voucher.id}
              voucher={voucher}
              picked={pending === voucher.id}
              blocked={blocked}
              onPick={() => onPick(voucher.id)}
            />
          ))}
        </div>

        <div className="safe-bottom flex items-center gap-3 border-t border-gray-200 bg-white px-4 pt-3">
          <span
            className={`flex-1 text-[12px] ${saving ? 'font-medium text-brand' : 'text-gray-500'}`}
          >
            {saving ? fill(t.voucher.saves, { x: baht(saving) }) : t.voucher.noneSelected}
          </span>
          <button
            type="button"
            onClick={onApply}
            className="rounded-sm bg-brand px-8 py-2 text-sm font-medium text-white"
          >
            {t.voucher.ok}
          </button>
        </div>
      </div>
    </div>
  );
}
