'use client';

import Link from 'next/link';
import { CheckCircle, Package, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CheckoutSuccess() {
    return (
        <main style={{ minHeight: '100vh', background: 'var(--color-cosmic-black)' }}>
            <div className="container" style={{ paddingTop: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                >
                    <CheckCircle size={80} color="#4CAF50" style={{ marginBottom: '24px' }} />
                </motion.div>

                <h1 className="text-gradient" style={{ marginBottom: '16px', fontSize: '40px' }}>Order Confirmed!</h1>
                <p style={{ color: 'var(--color-text-secondary)', maxWidth: '500px', marginBottom: '40px', fontSize: '18px' }}>
                    Your upgrade is secured. We've sent a confirmation email with your order details and tracking information.
                </p>

                <div style={{ background: 'var(--color-titanium-grey)', padding: '32px', borderRadius: '24px', width: '100%', maxWidth: '500px', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '24px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '12px' }}>
                            <Package size={24} color="white" />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Order #UPG-88X29</h3>
                            <p style={{ color: '#888', fontSize: '14px' }}>Processing for Dispatch</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '12px' }}>
                            <Calendar size={24} color="white" />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Estimated Delivery</h3>
                            <p style={{ color: '#888', fontSize: '14px' }}>Tomorrow by 7:00 PM</p>
                        </div>
                    </div>
                </div>

                <Link href="/dashboard">
                    <button className="btn-primary" style={{ minWidth: '200px' }}>Go to Dashboard</button>
                </Link>
                <Link href="/" style={{ marginTop: '20px', color: '#888', fontSize: '14px' }}>
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
