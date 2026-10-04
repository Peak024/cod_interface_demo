export type Lang = 'th' | 'en';

/** The five screens reachable from the control bar. */
export type ViewKey = 'rider' | 'customer' | 'green' | 'yellow' | 'red';

/** Risk tiers — the three checkout screens. */
export type Tier = 'green' | 'yellow' | 'red';

export type PaymentMethod = 'cod' | 'wallet' | 'bank' | 'card' | 'qr';

/** The four outcomes a rider can record at the door. */
export type RiderOutcome = 'delivered' | 'saved' | 'refused' | 'silent';

export const TIERS: readonly Tier[] = ['green', 'yellow', 'red'];

export const isTier = (view: ViewKey): view is Tier => (TIERS as readonly string[]).includes(view);
