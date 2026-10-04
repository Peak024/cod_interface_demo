'use client';

import { useLanguage } from '@/lib/i18n/use-language';
import { LANGS } from '@/lib/i18n';

const BASE = 'rounded-lg px-2 py-2 text-[11px] font-bold transition-all sm:px-2.5 sm:text-xs';
const ACTIVE = 'bg-linear-to-r from-orange-500 to-red-500 text-white shadow';
const IDLE = 'text-slate-400 hover:text-white';

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.meta.language}
      className="flex shrink-0 rounded-xl border border-slate-700 bg-slate-900/70 p-0.5"
    >
      {LANGS.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`${BASE} ${lang === option ? ACTIVE : IDLE}`}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
