'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="container" style={{
            paddingTop: '120px',
            minHeight: '50vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            <h1 className="text-gradient" style={{ fontSize: '32px', marginBottom: '16px' }}>
                Something went wrong
            </h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', maxWidth: '400px' }}>
                We couldn’t load this page. Please try again.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button className="btn-primary" onClick={reset}>
                    Try again
                </button>
                <Link href="/" className="btn-primary" style={{ background: 'var(--color-titanium-grey)', display: 'inline-block' }}>
                    Back to home
                </Link>
            </div>
        </div>
    );
}
