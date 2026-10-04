import type { ReactNode } from 'react';

/**
 * On a phone the screen simply fills the viewport. From 640px up the same
 * screen is dropped into a phone mock-up, notch and all.
 */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-0 w-full flex-1 flex-col sm:max-w-[390px] sm:flex-none sm:rounded-[48px] sm:border-4 sm:border-slate-700 sm:bg-slate-900 sm:p-3.5 sm:shadow-2xl">
      <div className="absolute top-3 left-1/2 z-40 hidden h-5 w-36 -translate-x-1/2 items-center justify-center gap-2 rounded-b-2xl border-x border-b border-slate-800 bg-slate-900 sm:flex">
        <div className="h-3 w-3 rounded-full border border-slate-700 bg-slate-800" />
        <div className="h-1 w-10 rounded-full bg-slate-800" />
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-gray-100 sm:h-[730px] sm:flex-none sm:rounded-[38px] sm:pt-6">
        {children}
      </div>
    </div>
  );
}
