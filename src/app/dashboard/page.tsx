'use client';

import { useUserStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import UpgradeCountdownRing from '@/components/UpgradeCountdownRing';
import { CreditCard } from 'lucide-react';

// Mock rental data (to be replaced with API in production)
const MOCK_RENTAL = {
  device: 'iPhone 17 Pro Max',
  storage: '256GB',
  color: 'Cosmic Orange',
  startDate: new Date(),
  monthlyRent: 6999,
  totalMonths: 12,
  paidMonths: 2,
  nextPaymentDate: new Date(new Date().getTime() + 30*24*3600*1000), // Next month
};

export default function DashboardPage() {
    const { phone } = useUserStore();
    const router = useRouter();

    useEffect(() => {
        if (!phone) {
            router.push('/login');
        }
    }, [phone, router]);

    if (!phone) return null;

    const progressPercent = (MOCK_RENTAL.paidMonths / MOCK_RENTAL.totalMonths) * 100;
    const monthsUntilUpgrade = MOCK_RENTAL.totalMonths - MOCK_RENTAL.paidMonths;

    return (
        <main className="container" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
            <div style={{ marginBottom: '40px' }}>
                <h1 className="text-gradient" style={{ fontSize: '36px', fontWeight: '700', marginBottom: '8px' }}>Account Dashboard</h1>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px' }}>Managing account for {phone}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                
                {/* Active Rental Card */}
                <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', gridColumn: '1 / -1', display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(48,209,88,0.1)', color: 'var(--color-success)', padding: '4px 10px', borderRadius: 'var(--radius-pill)', fontSize: '12px', fontWeight: '600', marginBottom: '16px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor' }}></div>
                            Active Rental
                        </div>
                        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>{MOCK_RENTAL.device}</h2>
                        <div style={{ color: 'var(--color-text-secondary)', fontSize: '15px', marginBottom: '24px' }}>
                            {MOCK_RENTAL.storage} • {MOCK_RENTAL.color} • Started {MOCK_RENTAL.startDate.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                        </div>
                        <div style={{ display: 'flex', gap: '24px' }}>
                            <div>
                                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>Monthly Rent</div>
                                <div style={{ fontSize: '20px', fontWeight: '600', color: 'white' }}>₹{MOCK_RENTAL.monthlyRent.toLocaleString('en-IN')}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>Deposit Held</div>
                                <div style={{ fontSize: '20px', fontWeight: '600', color: 'white' }}>₹15,000</div>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', background: 'var(--color-surface-1)', padding: '24px', borderRadius: 'var(--radius-md)' }}>
                        <UpgradeCountdownRing 
                            progressPercent={progressPercent} 
                            monthsLeft={monthsUntilUpgrade} 
                            totalMonths={MOCK_RENTAL.totalMonths} 
                        />
                        <div style={{ textAlign: 'center', maxWidth: '200px' }}>
                            {monthsUntilUpgrade <= 3 ? (
                                <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px', width: '100%' }}>Claim Upgrade</button>
                            ) : (
                                <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Eligible for free upgrade after {monthsUntilUpgrade} payments.</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Next Payment Card */}
                <div className="glass" style={{ padding: '24px', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                            <CreditCard size={18} />
                            <span style={{ fontSize: '14px', fontWeight: '500' }}>Next Payment</span>
                        </div>
                        <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--color-cosmic-orange)', marginBottom: '4px' }}>
                            ₹{MOCK_RENTAL.monthlyRent.toLocaleString('en-IN')}
                        </div>
                        <div style={{ fontSize: '14px', color: 'white' }}>
                            Due on {MOCK_RENTAL.nextPaymentDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'long' })}
                        </div>
                    </div>
                    <button className="btn-primary" style={{ width: '100%', marginTop: '32px', background: 'var(--color-surface-3)', color: 'white' }}>Pay Now</button>
                </div>

                {/* Refer & Earn Card */}
                <div className="glass" style={{ padding: '24px', borderRadius: 'var(--radius-lg)' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Refer & Earn</h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '24px', lineHeight: '1.5' }}>
                        Give friends ₹1000 off their first month, and get ₹1000 off your next rent when they join.
                    </p>
                    <div style={{ background: 'var(--color-surface-1)', border: '1px dashed var(--color-border-strong)', padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'center', marginBottom: '16px' }}>
                        <span style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '2px', color: 'var(--color-cosmic-orange)' }}>UPGRADE1000</span>
                    </div>
                    <button className="btn-primary" style={{ width: '100%', fontSize: '14px' }}>Copy Link</button>
                </div>
            </div>

            {/* Payment History */}
            <div className="glass" style={{ padding: '24px', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>Payment History</h3>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--color-text-secondary)', fontSize: '13px', textAlign: 'left' }}>
                                <th style={{ padding: '12px' }}>Date</th>
                                <th style={{ padding: '12px' }}>Description</th>
                                <th style={{ padding: '12px' }}>Amount</th>
                                <th style={{ padding: '12px' }}>Status</th>
                                <th style={{ padding: '12px', textAlign: 'right' }}>Invoice</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--color-border-subtle)', fontSize: '14px' }}>
                                <td style={{ padding: '16px 12px' }}>05 Feb 2025</td>
                                <td style={{ padding: '16px 12px' }}>Monthly Rent</td>
                                <td style={{ padding: '16px 12px' }}>₹6,999</td>
                                <td style={{ padding: '16px 12px' }}><span style={{ color: 'var(--color-success)', background: 'rgba(48,209,88,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>Paid</span></td>
                                <td style={{ padding: '16px 12px', textAlign: 'right' }}><a href="#" style={{ color: 'var(--color-info)' }}>Download</a></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--color-border-subtle)', fontSize: '14px' }}>
                                <td style={{ padding: '16px 12px' }}>05 Jan 2025</td>
                                <td style={{ padding: '16px 12px' }}>Security Deposit + Rent</td>
                                <td style={{ padding: '16px 12px' }}>₹21,999</td>
                                <td style={{ padding: '16px 12px' }}><span style={{ color: 'var(--color-success)', background: 'rgba(48,209,88,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>Paid</span></td>
                                <td style={{ padding: '16px 12px', textAlign: 'right' }}><a href="#" style={{ color: 'var(--color-info)' }}>Download</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </main>
    );
}
