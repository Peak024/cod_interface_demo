import { en } from '@/lib/i18n/en';
import { th } from '@/lib/i18n/th';
import type { Lang } from '@/lib/types';

export type { Dictionary } from '@/lib/i18n/en';

export const dictionaries: Record<Lang, typeof en> = { th, en };

export const LANGS: readonly Lang[] = ['th', 'en'];

export const isLang = (value: unknown): value is Lang =>
  value === 'th' || value === 'en';
