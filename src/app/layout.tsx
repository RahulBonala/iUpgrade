import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'iUpgrade | Own the Experience',
    description: 'Premium Apple Ecosystem Rental Platform. Upgrade every year.',
};

import Footer from '@/components/Footer';

// ... (existing imports)

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                {children}
                <Footer />
            </body>
        </html>
    );
}
