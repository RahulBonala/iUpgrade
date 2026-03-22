'use client';

import { useState } from 'react';
import { useUserStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPage() {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    
    const router = useRouter();
    const { setUser } = useUserStore();

    const sendOtp = () => {
        if (phone.length !== 10) {
            toast.error('Please enter a valid 10-digit phone number');
            return;
        }
        setOtpSent(true);
        toast.success('OTP sent to +91 ' + phone);
    };

    const verifyOtp = () => {
        if (otp === '123456') {
            setUser('+91' + phone);
            toast.success('Logged in successfully');
            router.push('/dashboard');
        } else {
            toast.error('Invalid OTP. Try 123456 for testing.');
        }
    };

    return (
        <main className="container" style={{ paddingTop: '150px', paddingBottom: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="glass" style={{ padding: '48px', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '440px', textAlign: 'center' }}>
                <h1 className="text-gradient" style={{ fontSize: '32px', fontWeight: '700', marginBottom: '12px' }}>Welcome Back</h1>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>Sign in to manage your rentals and upgrades.</p>

                <AnimatePresence mode="wait">
                    {!otpSent ? (
                        <motion.div key="phone" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ position: 'relative' }}>
                                    <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }}>+91</div>
                                    <input 
                                        type="tel" 
                                        placeholder="Phone Number" 
                                        value={phone} 
                                        onChange={e => setPhone(e.target.value.replace(/\D/g, '').substring(0, 10))}
                                        style={{ width: '100%', padding: '14px 16px 14px 56px', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'var(--color-surface-1)', color: 'white', fontSize: '16px' }}
                                    />
                                </div>
                                <button onClick={sendOtp} className="btn-primary" style={{ width: '100%', padding: '14px' }}>Continue</button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div key="otp" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <input 
                                    type="text" 
                                    placeholder="Enter 6-digit OTP" 
                                    value={otp} 
                                    onChange={e => setOtp(e.target.value.replace(/\D/g, '').substring(0, 6))}
                                    style={{ width: '100%', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'var(--color-surface-1)', color: 'white', fontSize: '18px', letterSpacing: '4px', textAlign: 'center' }}
                                />
                                <button onClick={verifyOtp} className="btn-primary" style={{ width: '100%', padding: '14px' }}>Verify & Sign In</button>
                                <button onClick={() => setOtpSent(false)} style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', fontSize: '14px', marginTop: '8px' }}>
                                    Not your number? Go back
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}
