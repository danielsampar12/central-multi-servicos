import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const local = localFont({
  src: [
    {
      path: '../assets/fonts/EuropaGroteskSH-XLig.otf',
      weight: '300',
    },
    {
      path: '../assets/fonts/EuropaGroteskSH-Reg.otf',
      weight: '400',
    },
    {
      path: '../assets/fonts/EuropaGroteskSH-Med.otf',
      weight: '500',
    },
    {
      path: '../assets/fonts/EuropaGroteskSH-MedEx.otf',
      weight: '600',
    },
    {
      path: '../assets/fonts/EuropaGroteskSH-Bol.otf',
      weight: '700',
    },
  ],
  variable: '--font-europa-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Central Multi Serviços',
  description: 'Site institucional da Central Multi Serviços',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${local.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
