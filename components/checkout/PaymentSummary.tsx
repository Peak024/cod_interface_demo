'use client';

import { SummaryRow } from '@/components/ui/SummaryRow';
import type { Amounts } from '@/lib/checkout/pricing';
import { baht } from '@/lib/format';
import { useLanguage } from '@/lib/i18n/use-language';

export function PaymentSummary({ amounts }: { amounts: Amounts }) {
  const { t } = useLanguage();

  return (
    <div className="mt-2 space-y-1.5 bg-white px-4 py-3 text-[12px] text-gray-600">
      <p className="mb-1 text-[13px] font-medium text-gray-800">{t.checkout.detailsTitle}</p>

      <SummaryRow label={t.checkout.subtotal} value={baht(amounts.subtotal)} />
      <SummaryRow label={t.checkout.shipping} value={baht(amounts.shipping)} />
      {amounts.discount > 0 && (
        <SummaryRow
          label={t.checkout.discount}
          value={`-${baht(amounts.discount)}`}
          className="text-brand"
        />
      )}
      <SummaryRow
        label={t.checkout.grandTotal}
        value={baht(amounts.total)}
        className="border-t border-gray-100 pt-1.5 text-[14px] text-gray-800"
        valueClassName="font-semibold text-brand"
      />
    </div>
  );
}
