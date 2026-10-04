'use client';

import { MapPin, Package } from 'lucide-react';

import { TRACKING_NO } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n/use-language';

/** Who the parcel is for, where it goes, and how much to collect. */
export function JobCard() {
  const { t } = useLanguage();

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-3.5 shadow-sm">
      <div className="mb-2.5 flex items-start justify-between gap-2 border-b border-gray-100 pb-2.5">
        <div className="min-w-0">
          <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
            {t.rider.trackingLabel}
          </span>
          <p className="text-xs font-bold text-gray-800">{TRACKING_NO}</p>
        </div>
        <span className="shrink-0 rounded-lg border border-red-100 bg-red-50 px-2.5 py-1 text-xs font-extrabold text-red-600">
          {t.rider.codAmount}
        </span>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2 font-bold text-gray-800">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-extrabold text-orange-600">
            {t.rider.customerInitials}
          </div>
          <div>
            <p className="text-[13px] leading-tight sm:text-xs">{t.rider.customerName}</p>
            <span className="text-[11px] font-normal text-emerald-600 sm:text-[10px]">
              {t.rider.customerHistory}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2 rounded-xl bg-gray-50 p-2 text-[12px] text-gray-600 sm:text-[11px]">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
          <span>{t.rider.address}</span>
        </div>

        <div className="flex min-w-0 items-center gap-2 px-1 text-[12px] text-gray-600 sm:text-[11px]">
          <Package className="h-3.5 w-3.5 shrink-0 text-gray-400" />
          <span className="truncate">{t.rider.product}</span>
        </div>
      </div>
    </div>
  );
}
