'use client';

import dynamic from 'next/dynamic';

/**
 * The demo picks its language from localStorage and formats the suspension date
 * in the visitor's locale, so there is nothing useful to render on the server.
 * Loading it in the browser only keeps the two renders from disagreeing.
 */
const DemoApp = dynamic(() => import('@/components/DemoApp').then((mod) => mod.DemoApp), {
  ssr: false,
  loading: () => <div className="h-[100dvh] w-full sm:h-[812px]" />,
});

export default function Page() {
  return <DemoApp />;
}
