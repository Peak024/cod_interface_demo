export type VoucherId = 'flat50' | 'tenPercent';

export type Voucher = {
  id: VoucherId;
  /** Shown on the card. The demo cart always clears it, so nothing enforces it. */
  minSpend: number;
  discount: (subtotal: number) => number;
};

export const VOUCHERS: readonly Voucher[] = [
  {
    id: 'flat50',
    minSpend: 300,
    discount: () => 50,
  },
  {
    id: 'tenPercent',
    minSpend: 500,
    discount: (subtotal) => Math.min(80, Math.round(subtotal * 0.1)),
  },
];

export function voucherById(id: VoucherId): Voucher {
  const voucher = VOUCHERS.find((candidate) => candidate.id === id);
  if (!voucher) throw new Error(`Unknown voucher: ${id}`);
  return voucher;
}
