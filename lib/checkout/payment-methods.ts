import { Banknote, CreditCard, Landmark, QrCode, Wallet } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import type { PaymentMethod } from '@/lib/types';

/** Rendered top to bottom, in this order. */
export const PAYMENT_METHODS: readonly PaymentMethod[] = ['cod', 'wallet', 'bank', 'card', 'qr'];

export const PAYMENT_ICONS: Record<PaymentMethod, LucideIcon> = {
  cod: Banknote,
  wallet: Wallet,
  bank: Landmark,
  card: CreditCard,
  qr: QrCode,
};
