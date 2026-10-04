'use client';

import { ArrowLeft } from 'lucide-react';

import { useLanguage } from '@/lib/i18n/use-language';

export function CheckoutHeader() {
  const { t } = useLanguage();

  return (
    <div className="flex shrink-0 items-center gap-3 border-b border-gray-200 bg-white px-3 py-3">
      <ArrowLeft className="h-5 w-5 shrink-0 text-brand" />
      <h1 className="text-base font-medium text-gray-800">{t.checkout.title}</h1>
    </div>
  );
}
