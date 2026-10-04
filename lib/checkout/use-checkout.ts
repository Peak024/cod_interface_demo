'use client';

import { useCallback, useState } from 'react';

import { MAX_QTY } from '@/lib/checkout/pricing';
import { codBlocker, voucherBlocked } from '@/lib/checkout/rules';
import type { VoucherId } from '@/lib/checkout/vouchers';
import type { PaymentMethod, Tier } from '@/lib/types';

export type TierState = {
  qty: number;
  payment: PaymentMethod | null;
  voucherId: VoucherId | null;
  /** The voucher was dropped because cash on delivery was picked. */
  voucherDropped: boolean;
  /** Cash on delivery was dropped because the cart went over the cap. */
  codDropped: boolean;
};

/** The voucher sheet, with whatever the shopper has tapped but not confirmed. */
type SheetState = { pending: VoucherId | null } | null;

const freshTier = (payment: PaymentMethod): TierState => ({
  qty: 1,
  payment,
  voucherId: null,
  voucherDropped: false,
  codDropped: false,
});

const INITIAL: Record<Tier, TierState> = {
  green: freshTier('cod'),
  yellow: freshTier('cod'),
  // Red cannot use cash on delivery at all, so it starts on a prepaid method.
  red: freshTier('wallet'),
};

const clampQty = (qty: number) => Math.min(MAX_QTY, Math.max(1, qty));

/**
 * One cart per tier, kept alive while the visitor switches between the three
 * checkout tabs.
 */
export function useCheckout() {
  const [tiers, setTiers] = useState<Record<Tier, TierState>>(INITIAL);
  const [sheet, setSheet] = useState<SheetState>(null);
  // Bumped to replay the shake on a cash-on-delivery row that cannot be picked.
  const [nudge, setNudge] = useState(0);

  const patch = useCallback((tier: Tier, next: (state: TierState) => TierState) => {
    setTiers((prev) => ({ ...prev, [tier]: next(prev[tier]) }));
  }, []);

  const changeQty = useCallback(
    (tier: Tier, delta: number) => {
      patch(tier, (state) => {
        const qty = clampQty(state.qty + delta);
        // A bigger cart can push a yellow cash-on-delivery order over its limit.
        if (state.payment === 'cod' && codBlocker(tier, qty)) {
          return { ...state, qty, payment: null, codDropped: true };
        }
        return { ...state, qty };
      });
    },
    [patch],
  );

  const selectPayment = useCallback(
    (tier: Tier, method: PaymentMethod) => {
      if (method === 'cod' && codBlocker(tier, tiers[tier].qty)) {
        setNudge((count) => count + 1);
        return;
      }
      patch(tier, (state) => {
        const next: TierState = { ...state, payment: method, codDropped: false };
        if (voucherBlocked(tier, method) && state.voucherId) {
          next.voucherId = null;
          next.voucherDropped = true;
        } else if (method !== 'cod') {
          next.voucherDropped = false;
        }
        return next;
      });
    },
    [patch, tiers],
  );

  const openSheet = useCallback((tier: Tier) => {
    setSheet({ pending: tiers[tier].voucherId });
  }, [tiers]);

  const closeSheet = useCallback(() => setSheet(null), []);

  const pickInSheet = useCallback((id: VoucherId) => {
    // Tapping the chosen voucher again clears it.
    setSheet((prev) => (prev ? { pending: prev.pending === id ? null : id } : prev));
  }, []);

  const applySheet = useCallback(
    (tier: Tier) => {
      const pending = sheet?.pending ?? null;
      patch(tier, (state) => {
        if (voucherBlocked(tier, state.payment)) return state;
        return {
          ...state,
          voucherId: pending,
          voucherDropped: pending ? false : state.voucherDropped,
        };
      });
      closeSheet();
    },
    [closeSheet, patch, sheet],
  );

  return {
    tiers,
    sheet,
    nudge,
    changeQty,
    selectPayment,
    openSheet,
    closeSheet,
    pickInSheet,
    applySheet,
  };
}

export type Checkout = ReturnType<typeof useCheckout>;
