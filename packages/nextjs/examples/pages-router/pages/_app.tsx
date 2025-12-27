/**
 * Next.js 12 Pages Router Example
 * File: pages/_app.tsx
 */

import type { AppProps } from 'next/app';
import PalestineFooter from 'palestine-footer-nextjs';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <PalestineFooter />
    </>
  );
}
