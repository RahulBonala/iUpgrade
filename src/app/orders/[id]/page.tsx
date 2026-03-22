'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Package, Truck, CheckCircle2, Copy } from 'lucide-react';

export default function OrderTrackingPage() {
    const params = useParams();
    const orderId = params?.id as string;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(orderId);
    };

    return (
        <main className="container" style={{ paddingTop: '120px', paddingBottom: '120px', maxWidth: '800px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <div>
                    <h1 className="text-gradient" style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>Track Order</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)', fontSize: '15px' }}>
                        Order #{orderId} 
                        <button onClick={copyToClipboard} style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <Copy size={14} />
                        </button>
                    </div>
                </div>
                <Link href="/support" className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px', background: 'var(--color-surface-2)', border: '1px solid var(--glass-border)' }}>
                    Need Help?
                </Link>
            </div>

            <div className="glass" style={{ padding: '40px', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', marginBottom: '60px' }}>
                    {/* Connecting Line */}
                    <div style={{ position: 'absolute', top: '24px', left: '40px', right: '40px', height: '4px', background: 'var(--color-surface-3)', zIndex: 0 }}>
                        <div style={{ width: '25%', height: '100%', background: 'var(--color-success)', transition: 'width 1s ease' }}></div>
                    </div>

                    <Step icon={<CheckCircle2 size={24} />} title="Confirmed" date="Today, 10:00 AM" active={true} />
                    <Step icon={<Package size={24} />} title="Packed" date="Estimated: Tomorrow" active={false} />
                    <Step icon={<Truck size={24} />} title="Shipped" date="Estimated: +2 Days" active={false} />
                    <Step icon={<CheckCircle2 size={24} />} title="Delivered" date="Estimated: +3 Days" active={false} />
                </div>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Delivery Address</h3>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                        Rahul Bonala<br/>
                        123 Startup Tower, Koramangala Stage 4<br/>
                        Bengaluru, Karnataka 560034<br/>
                        +91 98765 43210
                    </p>
                </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link href="/dashboard" style={{ color: 'var(--color-cosmic-orange)', textDecoration: 'none', fontWeight: '500' }}>
                    ← Back to Dashboard
                </Link>
            </div>
        </main>
    );
}

function Step({ icon, title, date, active }: { icon: React.ReactNode, title: string, date: string, active: boolean }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1, width: '120px' }}>
            <div style={{ 
                width: '52px', height: '52px', borderRadius: '50%', 
                background: active ? 'var(--color-success)' : 'var(--color-surface-1)', 
                border: active ? 'none' : '4px solid var(--color-surface-3)',
                color: active ? 'white' : 'var(--color-text-secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
                transition: 'all 0.3s ease',
                boxShadow: active ? '0 0 20px rgba(48,209,88,0.3)' : 'none'
            }}>
                {icon}
            </div>
            <div style={{ fontWeight: '600', color: active ? 'white' : 'var(--color-text-secondary)', marginBottom: '4px', textAlign: 'center' }}>{title}</div>
            <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', textAlign: 'center' }}>{date}</div>
        </div>
    );
}
