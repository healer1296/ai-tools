import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Head from 'next/head';
import Script from 'next/script';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'AI Tools Finder',
  description: 'AI Tools for everyone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="monetag" content="5ecb3c2f1c3e6bf05237890d83ab91e9" />
      </head>
      <script src="https://alwingulla.com/88/tag.min.js" data-zone="118749" async data-cfasync="false"></script>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2183077736845661"
        crossOrigin="anonymous"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
