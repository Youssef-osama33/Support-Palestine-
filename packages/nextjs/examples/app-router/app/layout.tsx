/**
 * Next.js 13+ App Router Example
 * File: app/layout.tsx
 */

import { Metadata } from 'next';
import PalestineFooter from 'palestine-footer-nextjs';
import './globals.css';

export const metadata: Metadata = {
  title: 'Palestine Footer - Next.js App Router Example',
  description: 'مثال على استخدام Palestine Footer مع Next.js 13+ App Router',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Palestine Footer Component */}
        <PalestineFooter />
      </body>
    </html>
  );
}
