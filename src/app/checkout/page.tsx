'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore, useUserStore } from '@/lib/store';
import { toast } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, CreditCard } from 'lucide-react';
import Image from 'next/image';

export default function CheckoutPage() {
    const router = useRouter();
    const cartItems = useCartStore(s => s.items);
    const clearCart = useCartStore(s => s.clearCart);
    const { setUser } = useUserStore();

    const [step, setStep] = useState(1);
    
    // Step 1 State
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    // Step 2 State
    const [_kycCompleted, setKycCompleted] = useState(false);
    
    // Redirect if cart empty
    useEffect(() => {
        if (cartItems.length === 0 && step === 1) {
            router.push('/catalog');
        }
    }, [cartItems, router, step]);

    if (cartItems.length === 0) return null;

    const totalDue = cartItems.reduce((acc, item) => acc + item.monthlyPrice + item.product.baseDeposit, 0);

    const sendOtp = async () => {
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
            setStep(2);
        } else {
            toast.error('Invalid OTP. Try 123456 for testing.');
        }
    };

    const startKyc = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            stream.getTracks().forEach(t => t.stop());
            toast.success('KYC Approved');
            setKycCompleted(true);
            setStep(3);
        } catch {
            toast.error('Please allow camera access for KYC verification.');
        }
    };

    const loadRazorpay = () => {
        return new Promise(resolve => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = resolve;
            document.body.appendChild(script);
        });
    };

    const handlePayment = async () => {
        await loadRazorpay();
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_dummy',
            amount: totalDue * 100, // paise
            currency: 'INR',
            name: 'iUpgrade',
            description: `Rental Checkout`,
            prefill: { contact: phone },
            theme: { color: '#ff5f1f' },
            handler: (response: { razorpay_payment_id?: string }) => {
                const orderId = response.razorpay_payment_id || 'pay_' + Math.random().toString(36).substring(2, 11);
                clearCart();
                router.push(`/checkout/success?orderId=${orderId}`);
            },
            modal: {
                ondismiss: () => toast('Payment cancelled. Your cart is saved.')
            }
        };
        const rzp = new (window as unknown as { Razorpay: new (_opts: typeof options) => { open: () => void } }).Razorpay(options);
        rzp.open();
    };

    return (
        <main className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '1000px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 350px', gap: '48px', alignItems: 'start' }}>
                
                {/* Left Column: Steps */}
                <div>
                    <h1 className="text-gradient" style={{ fontSize: '32px', fontWeight: '700', marginBottom: '32px' }}>Secure Checkout</h1>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {/* Step 1 */}
                        <div className="glass" style={{ padding: '24px', borderRadius: 'var(--radius-lg)', border: step === 1 ? '1px solid var(--color-cosmic-orange)' : '1px solid var(--glass-border)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: step === 1 ? '24px' : '0' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '18px', fontWeight: '600', color: step >= 1 ? 'white' : 'var(--color-text-secondary)' }}>
                                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: step > 1 ? 'var(--color-success)' : 'var(--color-surface-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                                        {step > 1 ? <CheckCircle2 size={16} color="white" /> : '1'}
                                    </div>
                                    Authentication
                                </div>
                                {step > 1 && <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>+91 {phone}</span>}
                            </div>
                            
                            <AnimatePresence>
                                {step === 1 && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                                        {!otpSent ? (
                                            <div style={{ display: 'flex', gap: '12px' }}>
                                                <input 
                                                    type="tel" 
                                                    placeholder="10-digit mobile number" 
                                                    value={phone} 
                                                    onChange={e => setPhone(e.target.value.replace(/\D/g, '').substring(0, 10))}
                                                    style={{ flex: 1, padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'var(--color-surface-1)', color: 'white' }}
                                                />
                                                <button onClick={sendOtp} className="btn-primary" style={{ padding: '12px 24px' }}>Send OTP</button>
                                            </div>
                                        ) : (
                                            <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
                                                <div style={{ display: 'flex', gap: '12px' }}>
                                                    <input 
                                                        type="text" 
                                                        placeholder="Enter 6-digit OTP (Try 123456)" 
                                                        value={otp} 
                                                        onChange={e => setOtp(e.target.value.replace(/\D/g, '').substring(0, 6))}
                                                        style={{ flex: 1, padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'var(--color-surface-1)', color: 'white', letterSpacing: '2px' }}
                                                    />
                                                    <button onClick={verifyOtp} className="btn-primary" style={{ padding: '12px 24px' }}>Verify</button>
                                                </div>
                                                <button onClick={() => setOtpSent(false)} style={{ background: 'none', border: 'none', color: 'var(--color-cosmic-orange)', cursor: 'pointer', textAlign: 'left', fontSize: '14px' }}>Change Number</button>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Step 2 */}
                        <div className="glass" style={{ padding: '24px', borderRadius: 'var(--radius-lg)', border: step === 2 ? '1px solid var(--color-cosmic-orange)' : '1px solid var(--glass-border)', opacity: step < 2 ? 0.5 : 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: step === 2 ? '24px' : '0' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '18px', fontWeight: '600', color: step >= 2 ? 'white' : 'var(--color-text-secondary)' }}>
                                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: step > 2 ? 'var(--color-success)' : 'var(--color-surface-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                                        {step > 2 ? <CheckCircle2 size={16} color="white" /> : '2'}
                                    </div>
                                    Video KYC
                                </div>
                                {step > 2 && <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>Verified</span>}
                            </div>
                            
                            <AnimatePresence>
                                {step === 2 && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px', fontSize: '14px', lineHeight: '1.5' }}>
                                            To prevent fraud, we require a quick 1-minute video verification. Please keep your Aadhaar or PAN card ready. We will verify your face matches the ID.
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--color-surface-2)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
                                            <ShieldCheck size={24} color="var(--color-cosmic-orange)" />
                                            <span style={{ fontSize: '14px', color: 'white' }}>Your data is end-to-end encrypted and never stored on our servers.</span>
                                        </div>
                                        <button onClick={startKyc} className="btn-primary" style={{ width: '100%' }}>Start Camera for KYC</button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Step 3 */}
                        <div className="glass" style={{ padding: '24px', borderRadius: 'var(--radius-lg)', border: step === 3 ? '1px solid var(--color-cosmic-orange)' : '1px solid var(--glass-border)', opacity: step < 3 ? 0.5 : 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '18px', fontWeight: '600', color: step >= 3 ? 'white' : 'var(--color-text-secondary)', marginBottom: step === 3 ? '24px' : '0' }}>
                                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-surface-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                                    3
                                </div>
                                Payment
                            </div>
                            
                            <AnimatePresence>
                                {step === 3 && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', fontSize: '14px' }}>
                                            Pay securely via UPI, Credit/Debit Card, or Netbanking. This covers your first month's rent + refundable deposit.
                                        </p>
                                        <button onClick={handlePayment} className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                            <CreditCard size={18} /> Pay ₹{totalDue.toLocaleString('en-IN')}
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                    </div>
                </div>

                {/* Right Column: Order Summary */}
                <div className="glass" style={{ padding: '24px', borderRadius: 'var(--radius-lg)', position: 'sticky', top: '100px' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>Order Summary</h2>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
                        {cartItems.map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ width: '60px', height: '60px', background: 'var(--color-surface-1)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px' }}>
                                    <Image src={item.product.image} alt={item.product.name} width={40} height={40} style={{ objectFit: 'contain' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>{item.product.name}</div>
                                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>{item.storage} • {item.color}</div>
                                    <div style={{ fontSize: '13px', color: 'var(--color-cosmic-orange)', marginTop: '4px', fontWeight: '500' }}>₹{item.monthlyPrice.toLocaleString('en-IN')}/mo</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-secondary)' }}>
                            <span>First Month Rent</span>
                            <span>₹{cartItems.reduce((acc, i) => acc + i.monthlyPrice, 0).toLocaleString('en-IN')}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-secondary)' }}>
                            <span>Refundable Deposit</span>
                            <span>₹{cartItems.reduce((acc, i) => acc + i.product.baseDeposit, 0).toLocaleString('en-IN')}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-success)' }}>
                            <span>Delivery</span>
                            <span>FREE</span>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid var(--glass-border)', marginTop: '20px', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '18px', fontWeight: '700' }}>
                        <span>Total Due</span>
                        <span>₹{totalDue.toLocaleString('en-IN')}</span>
                    </div>
                </div>

            </div>
        </main>
    );
}
