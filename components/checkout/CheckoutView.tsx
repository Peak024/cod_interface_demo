'use client';

import { AddressCard } from '@/components/checkout/AddressCard';
import { CheckoutBar } from '@/components/checkout/CheckoutBar';
import { CheckoutHeader } from '@/components/checkout/CheckoutHeader';
import { PaymentMethods } from '@/components/checkout/PaymentMethods';
import { PaymentSummary } from '@/components/checkout/PaymentSummary';
import { SellerCard } from '@/components/checkout/SellerCard';
import { VoucherRow } from '@/components/checkout/VoucherRow';
import { VoucherSheet } from '@/components/checkout/VoucherSheet';
import { amountsOf } from '@/lib/checkout/pricing';
import { hasPriorityShipping, voucherBlocked } from '@/lib/checkout/rules';
import type { Checkout } from '@/lib/checkout/use-checkout';
import type { Tier } from '@/lib/types';

type Props = {
  tier: Tier;
  checkout: Checkout;
  onPlaceOrder: () => void;
};

export function CheckoutView({ tier, checkout, onPlaceOrder }: Props) {
  const state = checkout.tiers[tier];
  const amounts = amountsOf(state.qty, state.voucherId);

  return (
    <div className="relative flex h-full min-h-0 flex-col bg-gray-100">
      <CheckoutHeader />

      <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto pb-2">
        <AddressCard tier={tier} />

        <SellerCard
          qty={state.qty}
          gross={amounts.gross}
          priority={hasPriorityShipping(tier)}
          onChangeQty={(delta) => checkout.changeQty(tier, delta)}
        />

        <VoucherRow
          discount={amounts.discount}
          dropped={state.voucherDropped}
          onOpen={() => checkout.openSheet(tier)}
        />

        <PaymentMethods
          tier={tier}
          state={state}
          nudge={checkout.nudge}
          onSelect={(method) => checkout.selectPayment(tier, method)}
        />

        <PaymentSummary amounts={amounts} />
      </div>

      <CheckoutBar amounts={amounts} canPlace={state.payment !== null} onPlace={onPlaceOrder} />

      {checkout.sheet && (
        <VoucherSheet
          qty={state.qty}
          pending={checkout.sheet.pending}
          blocked={voucherBlocked(tier, state.payment)}
          onPick={checkout.pickInSheet}
          onApply={() => checkout.applySheet(tier)}
          onClose={checkout.closeSheet}
          onSwitchPayment={() => checkout.selectPayment(tier, 'wallet')}
        />
      )}
    </div>
  );
}
