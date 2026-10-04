'use client';

import { useState } from 'react';

import { useLanguage } from '@/lib/i18n/use-language';

export function RefusalBody() {
  const { t } = useLanguage();
  // Kept by index so the choice survives a language switch.
  const [reason, setReason] = useState(0);

  return (
    <div className="space-y-2 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700">
      <label htmlFor="refusal-reason" className="block text-center font-bold">
        {t.outcomes.refused.prompt}
      </label>

      <select
        id="refusal-reason"
        value={reason}
        onChange={(event) => setReason(Number(event.target.value))}
        className="w-full rounded-lg border border-rose-200 bg-white p-2.5 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-rose-400 focus:outline-none sm:p-2 sm:text-xs"
      >
        {t.outcomes.refused.reasons.map((text, index) => (
          <option key={index} value={index}>
            {text}
          </option>
        ))}
      </select>

      <div className="rounded-lg bg-rose-100/70 p-2 text-center text-[11px] text-rose-800 sm:text-[10px]">
        {t.outcomes.refused.note}
      </div>
    </div>
  );
}
