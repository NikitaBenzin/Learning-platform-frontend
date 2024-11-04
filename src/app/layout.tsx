import { Josefin_Sans } from 'next/font/google';

import { SITE_NAME } from '@/constants/seo.constants';
import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './Providers';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--josefin-sans',
  style: ['normal'],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    // template: `%s | ${SITE_NAME}`
    template: SITE_NAME,
  },
  description: 'Learning platform for developers. Developed by NikitaBenzin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={josefinSans.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
