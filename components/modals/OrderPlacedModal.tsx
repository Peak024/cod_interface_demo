'use client';

import { useState } from 'react';
import { CircleCheck, MessageSquareMore } from 'lucide-react';

import { ActionModal } from '@/components/modals/ActionModal';
import { LineConfirmCard } from '@/components/modals/LineConfirmCard';
import { amountsOf } from '@/lib/checkout/pricing';
import type { TierState } from '@/lib/checkout/use-checkout';
import { baht, fill, suspendedUntil } from '@/lib/format';
import { useLanguage } from '@/lib/i18n/use-language';
import type { Tier } from '@/lib/types';

type Props = {
  tier: Tier;
  state: TierState;
  onClose: () => void;
};

const NOTE_KEYS = { green: 'green', yellow: 'yellowPaid', red: 'red' } as const;

export function OrderPlacedModal({ tier, state, onClose }: Props) {
  const { lang, t } = useLanguage();
  const [confirmed, setConfirmed] = useState(false);

  if (!state.payment) return null;

  const amounts = amountsOf(state.qty, state.voucherId);
  const payingCash = state.payment === 'cod';
  const vars = {
    total: baht(amounts.total),
    method: t.checkout.methods[state.payment],
    date: suspendedUntil(lang),
  };
  const payLine = fill(payingCash ? t.order.payCod : t.order.paidWith, vars);

  // Yellow paying cash waits on a one-tap confirmation before anything is packed.
  if (tier === 'yellow' && payingCash) {
    return (
      <ActionModal
        icon={
          confirmed ? <CircleCheck className="h-8 w-8" /> : <MessageSquareMore className="h-8 w-8" />
        }
        iconClassName={
          confirmed
            ? 'bg-emerald-100 text-emerald-600 shadow-sm'
            : 'bg-amber-100 text-amber-600 shadow-sm'
        }
        title={confirmed ? t.order.confirmedTitle : t.order.waitingTitle}
        description={confirmed ? payLine : t.order.waitingDesc}
        onClose={onClose}
      >
        <LineConfirmCard
          qty={state.qty}
          codTotal={amounts.total}
          confirmed={confirmed}
          onConfirm={() => setConfirmed(true)}
        />
      </ActionModal>
    );
  }

  const note = fill(t.order.notes[NOTE_KEYS[tier]], vars);
  const noteTone =
    tier === 'red'
      ? 'border-rose-200 bg-rose-50 text-rose-800'
      : 'border-emerald-200 bg-emerald-50 text-emerald-800';

  return (
    <ActionModal
      icon={<CircleCheck className="h-8 w-8" />}
      iconClassName="bg-emerald-100 text-emerald-600 shadow-sm"
      title={t.order.placed}
      description={payLine}
      onClose={onClose}
    >
      {amounts.discount > 0 && (
        <div className="mb-2 rounded-xl border border-orange-200 bg-orange-50 p-2.5 text-center text-xs font-semibold text-brand">
          {fill(t.order.voucherSaved, { x: baht(amounts.discount) })}
        </div>
      )}
      <div className={`rounded-xl border p-3 text-center text-xs font-semibold ${noteTone}`}>
        {note}
      </div>
    </ActionModal>
  );
}
