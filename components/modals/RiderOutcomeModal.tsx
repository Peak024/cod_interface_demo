'use client';

import { Camera, CircleCheck, CircleX, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ComponentType } from 'react';

import { ActionModal } from '@/components/modals/ActionModal';
import { DeliveredBody } from '@/components/modals/DeliveredBody';
import { OrderSavedBody } from '@/components/modals/OrderSavedBody';
import { RefusalBody } from '@/components/modals/RefusalBody';
import { SilentRejectionBody } from '@/components/modals/SilentRejectionBody';
import { useLanguage } from '@/lib/i18n/use-language';
import type { RiderOutcome } from '@/lib/types';

const ICONS: Record<RiderOutcome, LucideIcon> = {
  delivered: CircleCheck,
  saved: Sparkles,
  refused: CircleX,
  silent: Camera,
};

const ICON_TONES: Record<RiderOutcome, string> = {
  delivered: 'bg-emerald-100 text-emerald-600 shadow-sm',
  saved: 'animate-pulse bg-linear-to-br from-amber-400 to-orange-500 text-white shadow-md',
  refused: 'bg-rose-100 text-rose-600 shadow-sm',
  silent: 'bg-slate-100 text-slate-700 shadow-sm',
};

const BODIES: Record<RiderOutcome, ComponentType> = {
  delivered: DeliveredBody,
  saved: OrderSavedBody,
  refused: RefusalBody,
  silent: SilentRejectionBody,
};

type Props = {
  outcome: RiderOutcome;
  onClose: () => void;
};

/** What the rider sees after recording one of the four doorstep outcomes. */
export function RiderOutcomeModal({ outcome, onClose }: Props) {
  const { t } = useLanguage();
  const Icon = ICONS[outcome];
  const Body = BODIES[outcome];
  const copy = t.outcomes[outcome];

  return (
    <ActionModal
      icon={<Icon className="h-8 w-8" />}
      iconClassName={ICON_TONES[outcome]}
      title={copy.title}
      description={copy.desc}
      onClose={onClose}
    >
      <Body />
    </ActionModal>
  );
}
