'use client';

import { MessageCircle } from 'lucide-react';

import { OrderItemRow } from '@/components/checkout/OrderItemRow';
import { ShippingOption } from '@/components/checkout/ShippingOption';
import { SELLER_NAME } from '@/lib/constants';
import { baht, fill } from '@/lib/format';
import { useLanguage } from '@/lib/i18n/use-language';

type Props = {
  qty: number;
  gross: number;
  priority: boolean;
  onChangeQty: (delta: number) => void;
};

/** The seller block: shop, the one item in the cart, a note and the shipping. */
export function SellerCard({ qty, gross, priority, onChangeQty }: Props) {
  const { t } = useLanguage();

  return (
    <div className="mt-2 bg-white">
      <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-2.5 text-[13px]">
        <span className="rounded-sm bg-brand px-1 text-[10px] font-bold text-white">
          {t.checkout.sellerBadge}
        </span>
        <span className="truncate font-medium text-gray-800">{SELLER_NAME}</span>
        <span className="ml-auto flex shrink-0 items-center gap-1 text-[11px] text-brand">
          <MessageCircle className="h-3.5 w-3.5" />
          {t.checkout.chat}
        </span>
      </div>

      <OrderItemRow qty={qty} onChangeQty={onChangeQty} />

      <div className="flex items-center gap-3 border-t border-gray-100 px-4 py-2.5 text-[13px]">
        <span className="shrink-0 text-gray-800">{t.checkout.messageLabel}</span>
        <input
          type="text"
          placeholder={t.checkout.messagePlaceholder}
          className="min-w-0 flex-1 bg-transparent text-right text-[13px] placeholder-gray-400 focus:outline-none"
        />
      </div>

      <ShippingOption priority={priority} />

      <div className="flex justify-end gap-2 border-t border-gray-100 px-4 py-2.5 text-[13px]">
        <span className="text-gray-600">
          {fill(t.checkout.orderTotal, {
            n: qty,
            unit: qty === 1 ? t.checkout.unitOne : t.checkout.unitMany,
          })}
        </span>
        <span className="font-medium text-brand">{baht(gross)}</span>
      </div>
    </div>
  );
}
