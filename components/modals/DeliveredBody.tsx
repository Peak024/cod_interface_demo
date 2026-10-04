'use client';

import { useLanguage } from '@/lib/i18n/use-language';

export function DeliveredBody() {
  const { t } = useLanguage();

  return (
    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-center text-xs font-semibold text-emerald-800">
      {t.outcomes.delivered.streak}
    </div>
  );
}
