'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import { LANG_STORAGE_KEY } from '@/lib/constants';
import { dictionaries, isLang, type Dictionary } from '@/lib/i18n';
import type { Lang } from '@/lib/types';

type LanguageValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  /** The active dictionary. Named `t` so components read `t.rider.subtitle`. */
  t: Dictionary;
};

const LanguageContext = createContext<LanguageValue | null>(null);

/** Last choice wins, then the browser, then Thai. */
function initialLang(): Lang {
  try {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // Private mode or blocked storage — fall through to the browser language.
  }
  return navigator.language?.toLowerCase().startsWith('th') ? 'th' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // Remembering the choice is a nicety, not a requirement.
    }
  }, []);

  const value = useMemo<LanguageValue>(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside a LanguageProvider');
  return value;
}
