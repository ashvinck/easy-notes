import './globals.css';
import type { Metadata } from 'next';
import { Providers } from '@/redux/provider';

// Google Fonts
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

// import bootstrap css file
import 'bootstrap/dist/css/bootstrap.css';

// Font Awesome Icons
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
config.autoAddCss = false;

// SEO
export const metadata: Metadata = {
  title: 'Easy Notes',
  description:
    'A simple note taking application where users can add,update and delete their notes ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
