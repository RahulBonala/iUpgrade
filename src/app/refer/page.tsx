'use client';

import { Copy, Share2, Wallet } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function ReferPage() {
    const referralCode = 'UPGRADE1000';

    const handleCopy = () => {
        navigator.clipboard.writeText(referralCode);
        toast.success('Referral code copied to clipboard!');
    };

    return (
        <main className="container" style={{ paddingTop: '120px', paddingBottom: '120px', maxWidth: '800px', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255, 107, 26, 0.1)', color: 'var(--color-cosmic-orange)', marginBottom: '24px' }}>
                <Wallet size={40} />
            </div>
            
            <h1 className="text-gradient" style={{ fontSize: '48px', fontWeight: '800', marginBottom: '16px' }}>Refer & Earn ₹1000</h1>
            <p style={{ fontSize: '20px', color: 'var(--color-text-secondary)', marginBottom: '48px', lineHeight: '1.6' }}>
                Give your friends flat ₹1000 off their first month's rent. <br/>
                When they rent their first device, you get ₹1000 slashed off your next month's bill. Win-win.
            </p>

            <div className="glass" style={{ padding: '48px', borderRadius: 'var(--radius-lg)', display: 'inline-block', minWidth: '400px', marginBottom: '64px' }}>
                <div style={{ fontSize: '16px', color: 'var(--color-text-secondary)', marginBottom: '16px' }}>Your Unique Referral Code</div>
                
                <div style={{ display: 'flex', alignItems: 'stretch', gap: '12px', justifyContent: 'center' }}>
                    <div style={{ background: 'var(--color-surface-1)', border: '2px dashed var(--color-cosmic-orange)', padding: '16px 32px', borderRadius: 'var(--radius-md)', fontSize: '28px', fontWeight: '800', letterSpacing: '2px', color: 'white' }}>
                        {referralCode}
                    </div>
                    <button onClick={handleCopy} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 24px' }}>
                        <Copy size={18} /> Copy
                    </button>
                    <button onClick={handleCopy} className="btn-primary" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 24px' }}>
                        <Share2 size={18} /> Share
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', textAlign: 'left' }}>
                <div>
                    <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--color-surface-3)', marginBottom: '16px' }}>01</div>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Share Code</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>Send your code to friends, family, or followers who want to upgrade to Apple.</p>
                </div>
                <div>
                    <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--color-surface-3)', marginBottom: '16px' }}>02</div>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>They Rent</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>Your friend applies the code at checkout and instantly gets ₹1000 off.</p>
                </div>
                <div>
                    <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--color-surface-3)', marginBottom: '16px' }}>03</div>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>You Profit</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>Once their device is delivered, ₹1000 is automatically deducted from your next bill.</p>
                </div>
            </div>
        </main>
    );
}
