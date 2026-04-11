import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Luis Alvarez - Software Developer',
  description:
    'Portfolio of Luis Alvarez – Full Stack Software Developer showcasing projects, skills, and experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased magicpattern`}>
        {children}
        <SpeedInsights />
        <ToastContainer />
      </body>
    </html>
  );
}
