'use client';

import { useState } from 'react';
import { Camera, CircleCheckBig } from 'lucide-react';

import { GPS, PROOF_PHOTO } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n/use-language';

export function SilentRejectionBody() {
  const { t } = useLanguage();
  const [photoTaken, setPhotoTaken] = useState(false);

  return (
    <div className="space-y-2">
      {photoTaken ? (
        <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-3.5 text-center text-emerald-800">
          <div className="mb-1 flex items-center justify-center gap-2">
            <CircleCheckBig className="h-5 w-5 text-emerald-600" />
            <span className="text-xs font-bold">{t.outcomes.silent.photoSaved}</span>
          </div>
          <p className="text-[10px] break-all text-emerald-600">{PROOF_PHOTO}</p>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setPhotoTaken(true)}
          className="w-full rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-3.5 text-center transition-all hover:bg-slate-100 active:scale-95"
        >
          <Camera className="mx-auto mb-1 h-7 w-7 animate-bounce text-slate-500" />
          <p className="text-xs font-bold text-slate-700">{t.outcomes.silent.photoPrompt}</p>
          <p className="text-[11px] text-slate-400 sm:text-[10px]">{t.outcomes.silent.photoHint}</p>
        </button>
      )}

      <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-100 p-2 text-[11px] text-slate-600 sm:text-[10px]">
        <span>
          {t.outcomes.silent.gpsLabel} <strong className="text-slate-800">{GPS}</strong>
        </span>
        <span className="shrink-0 rounded border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 font-semibold text-emerald-600">
          {t.outcomes.silent.verified}
        </span>
      </div>
    </div>
  );
}
