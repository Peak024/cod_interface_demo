'use client';

import { ChevronRight, MapPin } from 'lucide-react';

import { CUSTOMERS } from '@/lib/checkout/customers';
import { useLanguage } from '@/lib/i18n/use-language';
import type { Tier } from '@/lib/types';

export function AddressCard({ tier }: { tier: Tier }) {
  const { lang, t } = useLanguage();
  const customer = CUSTOMERS[tier];
  const { name, address } = customer[lang];

  return (
    <div className="bg-white">
      <div className="flex items-start gap-3 px-4 py-3">
        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
        <div className="min-w-0 flex-1 text-[13px]">
          <p className="mb-0.5 text-xs text-brand">{t.checkout.addressTitle}</p>
          <p className="font-medium text-gray-800">
            {name} <span className="font-normal text-gray-400">| {customer.phone}</span>
          </p>
          <p className="leading-snug text-gray-600">{address}</p>
        </div>
        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-gray-400" />
      </div>
      <div className="airmail h-[3px]" />
    </div>
  );
}
