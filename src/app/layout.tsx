import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

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
        <html lang="en" suppressHydrationWarning>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
