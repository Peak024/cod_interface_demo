import { voucherById, type VoucherId } from '@/lib/checkout/vouchers';

export const PRICE = { item: 510, shipping: 40 };

export const MAX_QTY = 5;

/** A yellow customer can only pay cash on delivery up to this much. */
export const YELLOW_COD_CAP = 1500;

export const subtotalOf = (qty: number) => PRICE.item * qty;

/** What the cart costs before any voucher. */
export const grossOf = (qty: number) => subtotalOf(qty) + PRICE.shipping;

export const discountOf = (qty: number, voucherId: VoucherId | null) =>
  voucherId ? voucherById(voucherId).discount(subtotalOf(qty)) : 0;

export type Amounts = {
  subtotal: number;
  shipping: number;
  gross: number;
  discount: number;
  total: number;
};

export function amountsOf(qty: number, voucherId: VoucherId | null): Amounts {
  const subtotal = subtotalOf(qty);
  const gross = grossOf(qty);
  const discount = discountOf(qty, voucherId);
  return { subtotal, shipping: PRICE.shipping, gross, discount, total: gross - discount };
}
