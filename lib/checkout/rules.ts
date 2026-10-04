import { grossOf, YELLOW_COD_CAP } from '@/lib/checkout/pricing';
import type { PaymentMethod, Tier } from '@/lib/types';

/**
 * Why cash on delivery is unavailable for this cart, or null when it is fine.
 *
 *   green  — never blocked.
 *   yellow — blocked once the cart goes over the cash-on-delivery cap.
 *   red    — suspended outright for 30 days.
 */
export type CodBlocker = 'suspended' | 'overCap';

export function codBlocker(tier: Tier, qty: number): CodBlocker | null {
  if (tier === 'red') return 'suspended';
  if (tier === 'yellow' && grossOf(qty) > YELLOW_COD_CAP) return 'overCap';
  return null;
}

/** A yellow customer may not combine a voucher with cash on delivery. */
export const voucherBlocked = (tier: Tier, method: PaymentMethod | null) =>
  tier === 'yellow' && method === 'cod';

/** Only green customers jump the packing queue. */
export const hasPriorityShipping = (tier: Tier) => tier === 'green';
