// import {SUSE}  from 'next/font/google';
import { SITE_NAME } from '@/constants/seo.constants';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from './Providers';

// const sono = SUSE({
// subsets: ['latin'],
// weight: ['300', '400', '500', '600', '700'],
// display: 'swap',
// variable: '--sono',
// style: ['normal'],
// });

const suseFont = localFont({ src: './fonts/SUSE-VariableFont_wght.ttf' });

export const metadata: Metadata = {
  // metadataBase: new URL('https://acme.com'),
  title: {
    default: SITE_NAME,
    // template: `%s | ${SITE_NAME}`
    template: SITE_NAME,
  },
  description: 'Learning platform for developers. Developed by NikitaBenzin',
  // openGraph: {
  //   images: [
  //     {
  //       url: './assets/favicon.ico',
  //       alt: 'Dev.Learn platform logo image',
  //     },
  //   ],
  // },
  // icons: 'http://localhost:3000/src/app/assets/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={suseFont.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
