'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            background: 'var(--color-titanium-grey)',
            padding: '40px 0',
            marginTop: 'auto'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ color: '#666', fontSize: '12px' }}>
                    &copy; 2025 iUpgrade. All rights reserved.
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Link href="/terms" style={{ color: '#888', fontSize: '12px' }}>Terms & Conditions</Link>
                    <Link href="#" style={{ color: '#888', fontSize: '12px' }}>Privacy Policy</Link>
                    <Link href="#" style={{ color: '#888', fontSize: '12px' }}>Support</Link>
                </div>
            </div>
        </footer>
    );
}
