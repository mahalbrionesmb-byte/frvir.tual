import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IdeaBridge',
  description: 'Building Trust. Empowering Innovation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
