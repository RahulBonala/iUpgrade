import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="container" style={{
            paddingTop: '120px',
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            <h1 className="text-gradient" style={{ fontSize: '72px', marginBottom: '8px', lineHeight: 1 }}>
                404
            </h1>
            <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Page not found</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', maxWidth: '400px' }}>
                The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link href="/" className="btn-primary" style={{ display: 'inline-block' }}>
                Back to home
            </Link>
        </div>
    );
}
