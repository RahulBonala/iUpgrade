import Link from 'next/link';

export const metadata = {
    title: 'Support | iUpgrade',
    description: 'Get help with your iUpgrade rental.',
};

export default function SupportPage() {
    return (
        <main style={{ background: 'var(--color-cosmic-black)', minHeight: '100vh', paddingBottom: '80px' }}>
            <div className="container" style={{ paddingTop: '100px', maxWidth: '600px', textAlign: 'center' }}>
                <h1 className="text-gradient" style={{ marginBottom: '24px' }}>Support</h1>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
                    Need help with your rental, payment, or upgrade? We’re here for you.
                </p>
                <p style={{ color: '#888', fontSize: '14px', marginBottom: '24px' }}>
                    Email: support@iupgrade.in
                </p>
                <Link href="/dashboard" className="btn-primary" style={{ display: 'inline-block' }}>
                    Go to Dashboard
                </Link>
            </div>
        </main>
    );
}
