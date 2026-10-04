'use client';

import { useState } from 'react';

import { CheckoutView } from '@/components/checkout/CheckoutView';
import { ControlBar } from '@/components/chrome/ControlBar';
import { PhoneFrame } from '@/components/chrome/PhoneFrame';
import { OrderPlacedModal } from '@/components/modals/OrderPlacedModal';
import { RiderOutcomeModal } from '@/components/modals/RiderOutcomeModal';
import { RiderView } from '@/components/rider/RiderView';
import { StreakView } from '@/components/streak/StreakView';
import { useCheckout } from '@/lib/checkout/use-checkout';
import { LanguageProvider, useLanguage } from '@/lib/i18n/use-language';
import { isTier, type RiderOutcome, type Tier, type ViewKey } from '@/lib/types';

type OpenModal =
  | { kind: 'outcome'; outcome: RiderOutcome }
  | { kind: 'order'; tier: Tier }
  | null;

export function DemoApp() {
  return (
    <LanguageProvider>
      <Demo />
    </LanguageProvider>
  );
}

function Demo() {
  const { t } = useLanguage();
  const [view, setView] = useState<ViewKey>('rider');
  const [modal, setModal] = useState<OpenModal>(null);
  const checkout = useCheckout();

  const changeView = (next: ViewKey) => {
    setView(next);
    checkout.closeSheet();
  };

  return (
    <>
      <ControlBar view={view} onChange={changeView} />

      <PhoneFrame>
        {view === 'rider' && (
          <RiderView onOutcome={(outcome) => setModal({ kind: 'outcome', outcome })} />
        )}

        {view === 'customer' && <StreakView />}

        {isTier(view) && (
          // Keyed by tier so switching tabs starts each checkout back at the top.
          <CheckoutView
            key={view}
            tier={view}
            checkout={checkout}
            onPlaceOrder={() => setModal({ kind: 'order', tier: view })}
          />
        )}
      </PhoneFrame>

      <p className="mt-4 hidden text-[11px] text-slate-500 sm:block">{t.meta.demoNote}</p>

      {modal?.kind === 'outcome' && (
        <RiderOutcomeModal outcome={modal.outcome} onClose={() => setModal(null)} />
      )}

      {modal?.kind === 'order' && (
        <OrderPlacedModal
          tier={modal.tier}
          state={checkout.tiers[modal.tier]}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}
