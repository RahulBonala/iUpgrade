import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'iUpgrade | Own the Experience',
    description: 'Premium Apple Ecosystem Rental Platform. Upgrade every year.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className={inter.variable}>
            <body className={inter.className} style={{ position: 'relative' }}>
                <Navbar />
                {children}
                <Footer />
                <Toaster position="bottom-center" toastOptions={{ style: { background: '#1c1c1e', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' } }} />
            </body>
        </html>
    );
}
