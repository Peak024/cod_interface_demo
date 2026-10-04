'use client';

import { Info } from 'lucide-react';

import { PaymentMethodRow } from '@/components/checkout/PaymentMethodRow';
import { PAYMENT_ICONS, PAYMENT_METHODS } from '@/lib/checkout/payment-methods';
import { grossOf, YELLOW_COD_CAP } from '@/lib/checkout/pricing';
import { codBlocker } from '@/lib/checkout/rules';
import type { TierState } from '@/lib/checkout/use-checkout';
import { Pill } from '@/components/ui/Pill';
import { baht, fill, suspendedUntil } from '@/lib/format';
import { useLanguage } from '@/lib/i18n/use-language';
import type { PaymentMethod, Tier } from '@/lib/types';

type Props = {
  tier: Tier;
  state: TierState;
  /** Bumped by the hook to replay the shake on a blocked row. */
  nudge: number;
  onSelect: (method: PaymentMethod) => void;
};

export function PaymentMethods({ tier, state, nudge, onSelect }: Props) {
  const { lang, t } = useLanguage();

  const blocker = codBlocker(tier, state.qty);
  const vars = {
    cap: baht(YELLOW_COD_CAP),
    total: baht(grossOf(state.qty)),
    date: suspendedUntil(lang),
  };

  return (
    <div className="mt-2 bg-white">
      <p className="px-4 pt-3 pb-1 text-[13px] font-medium text-gray-800">{t.checkout.payTitle}</p>

      {state.codDropped && !state.payment && (
        <p className="mx-4 mb-1 flex items-start gap-1.5 rounded bg-gray-100 p-2 text-[11px] text-gray-700">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {t.checkout.codDropped}
        </p>
      )}

      <div>
        {PAYMENT_METHODS.map((method) => {
          const isCod = method === 'cod';
          const locked = isCod && blocker !== null;

          let sub = isCod ? fill(t.checkout.codSubs[tier], vars) : t.checkout.methodSubs[method];
          let badge: React.ReactNode;

          if (isCod && tier === 'red') {
            badge = (
              <Pill className="border border-rose-200 bg-rose-100 text-rose-700">
                {t.checkout.badgeLocked}
              </Pill>
            );
          }

          if (isCod && tier === 'yellow') {
            // Only the confirmation step is advertised up front. The cap only
            // shows itself once the cart actually trips it.
            if (locked) {
              badge = <Pill className="bg-gray-200 text-gray-600">{t.checkout.badgeOver}</Pill>;
              sub = fill(t.checkout.overCap, vars);
            } else {
              badge = (
                <Pill className="border border-amber-300 bg-amber-100 text-amber-800">
                  {t.checkout.badgeLimited}
                </Pill>
              );
            }
          }

          const subClassName = locked
            ? tier === 'red'
              ? 'text-rose-500'
              : 'text-gray-500'
            : isCod && tier === 'yellow'
              ? 'text-amber-700'
              : 'text-gray-500';

          return (
            <PaymentMethodRow
              // A fresh key remounts the row, which is what restarts the shake.
              key={isCod ? `cod-${nudge}` : method}
              className={isCod && nudge > 0 ? 'nudge' : ''}
              icon={PAYMENT_ICONS[method]}
              label={t.checkout.methods[method]}
              sub={sub}
              subClassName={subClassName}
              selected={state.payment === method}
              locked={locked}
              badge={badge}
              onSelect={() => onSelect(method)}
            />
          );
        })}
      </div>
    </div>
  );
}
