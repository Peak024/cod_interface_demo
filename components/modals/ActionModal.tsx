'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

import { useLanguage } from '@/lib/i18n/use-language';

const EXIT_MS = 150;

type Props = {
  /** The glyph inside the rounded header badge. */
  icon: ReactNode;
  iconClassName: string;
  title: string;
  description: string;
  onClose: () => void;
  children?: ReactNode;
};

/**
 * The sheet that slides up from the bottom of a phone and scales in on a
 * desktop. It owns its own enter/exit animation and the Escape shortcut.
 */
export function ActionModal({
  icon,
  iconClassName,
  title,
  description,
  onClose,
  children,
}: Props) {
  const { t } = useLanguage();
  const [shown, setShown] = useState(false);
  const closing = useRef(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const requestClose = useCallback(() => {
    if (closing.current) return;
    closing.current = true;
    setShown(false);
    window.setTimeout(onClose, EXIT_MS);
  }, [onClose]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') requestClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [requestClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/70 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`safe-bottom max-h-[90dvh] w-full transform overflow-y-auto rounded-t-3xl border border-gray-100 bg-white p-5 shadow-2xl transition-all duration-200 sm:max-w-sm sm:rounded-3xl ${
          shown ? 'translate-y-0 opacity-100 sm:scale-100' : 'translate-y-4 opacity-0 sm:scale-95'
        }`}
      >
        <div
          className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl ${iconClassName}`}
        >
          {icon}
        </div>

        <h3 className="mb-1 text-center text-base font-extrabold text-gray-800">{title}</h3>
        <p className="mb-4 text-center text-[13px] leading-relaxed text-gray-600 sm:text-xs">
          {description}
        </p>

        {children && <div className="mb-4">{children}</div>}

        <button
          type="button"
          onClick={requestClose}
          className="w-full rounded-xl bg-brand py-3 text-sm font-bold text-white shadow-lg hover:brightness-105 active:scale-[0.98] sm:py-2.5 sm:text-xs"
        >
          {t.meta.gotIt}
        </button>
      </div>
    </div>
  );
}
