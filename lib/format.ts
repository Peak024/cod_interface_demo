import type { Lang } from '@/lib/types';

export const baht = (n: number) => `฿${n.toLocaleString('en-US')}`;

/** Fills `{placeholders}` in a translated string. */
export const fill = (template: string, vars: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ''));

/** The date a red customer gets cash on delivery back: 30 days out. */
export function suspendedUntil(lang: Lang) {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  return date.toLocaleDateString(lang === 'th' ? 'th-TH' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
