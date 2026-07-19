import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://iupgrade.in';

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'iUpgrade | Own the Experience, Not the Device',
    template: '%s | iUpgrade',
  },
  description:
    "India's premium Apple device rental platform. Rent the latest iPhone, MacBook, Apple Watch & AirPods with AppleCare+ included. Upgrade every year.",
  keywords: [
    'Apple rental India',
    'iPhone rental',
    'MacBook rental',
    'device as a service',
    'iUpgrade',
    'rent iPhone India',
    'Apple ecosystem rental',
  ],
  authors: [{ name: 'iUpgrade' }],
  creator: 'iUpgrade',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'iUpgrade',
    title: 'iUpgrade | Own the Experience, Not the Device',
    description: 'Rent the latest Apple devices. Upgrade every year. AppleCare+ included.',
    images: [
      {
        url: '/images/iphone-17-pro-max.png',
        width: 600,
        height: 600,
        alt: 'iUpgrade - Premium Apple Device Rentals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iUpgrade | Own the Experience, Not the Device',
    description: 'Rent the latest Apple devices. Upgrade every year. AppleCare+ included.',
    images: ['/images/iphone-17-pro-max.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable}`}>
      <body className={inter.className} style={{ position: 'relative' }}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#1c1c1e',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
            },
          }}
        />
      </body>
    </html>
  );
}
