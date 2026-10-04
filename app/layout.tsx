import type { Metadata, Viewport } from 'next';
import { Prompt } from 'next/font/google';

import { APP_NAME } from '@/lib/constants';
import './globals.css';

const prompt = Prompt({
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-prompt',
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Clickable concept demo of the cash-on-delivery doorstep flow.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0f172a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={prompt.variable}>
      <body className="flex h-[100dvh] flex-col items-center overflow-hidden text-gray-800 sm:h-auto sm:min-h-screen sm:justify-center sm:overflow-auto sm:p-6">
        {children}
      </body>
    </html>
  );
}
