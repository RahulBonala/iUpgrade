'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import styles from './Checkout.module.css';
import { Camera, Lock, CheckCircle } from 'lucide-react';
import { PRODUCTS } from '@/lib/constants';

function CheckoutContent() {
    const [step, setStep] = useState(1);
    const [kycCompleted, setKycCompleted] = useState(false);
    const searchParams = useSearchParams();
    const productId = searchParams.get('productId');
    const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

    const totalDue = product.baseDeposit + product.monthlyRent;

    const handleKycStart = () => {
        // Simulate Video KYC process
        const win = window.open('', '_blank', 'width=800,height=600');
        if (win) {
            win.document.write('<h1>Connecting to Verification Agent...</h1><p>Please allow camera access.</p>');
            setTimeout(() => {
                win.document.body.innerHTML += '<h2 style="color:green">Verification Successful!</h2><button onclick="window.close()">Close</button>';
                setKycCompleted(true);
                setStep(3); // Move to payment
            }, 3000);
        }
    };

    return (
        <div className="container" style={{ paddingTop: '100px' }}>
            <h1 className={styles.title}>Secure Checkout</h1>

            <div className={styles.steps}>
                <Step indicator="1" label="Account" active={step >= 1} />
                <div className={styles.line} data-active={step >= 2} />
                <Step indicator="2" label="Video KYC" active={step >= 2} />
                <div className={styles.line} data-active={step >= 3} />
                <Step indicator="3" label="Payment" active={step >= 3} />
            </div>

            <div className={styles.content}>
                {step === 1 && (
                    <div className={styles.card}>
                        <h2>Create Account / Login</h2>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Email Address" className={styles.input} />
                            <button className={styles.btnPrimary} onClick={() => setStep(2)}>Continue</button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Camera size={48} color="var(--color-cosmic-orange)" />
                        </div>
                        <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Identity Verification Required</h2>
                        <p style={{ textAlign: 'center', color: '#888', marginBottom: '32px' }}>
                            To prevent fraud and ensure rental eligibility, we require a quick video call verification.
                            Please have your Government ID ready.
                        </p>

                        <button className={styles.btnPrimary} onClick={handleKycStart}>
                            Start Video KYC
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <div className={styles.card}>
                        {kycCompleted && (
                            <div className={styles.successBanner}>
                                <CheckCircle size={20} /> KYC Verified Successfully
                            </div>
                        )}

                        <h2>Payment Details</h2>
                        <div className={styles.productSummary} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <h3 style={{ marginBottom: '4px' }}>{product.name}</h3>
                            <p style={{ color: '#888', fontSize: '14px' }}>{product.tagline}</p>
                            <div style={{ marginTop: '8px', fontSize: '14px' }}>
                                {product.colors[0]} • {product.specs[0]}
                            </div>
                        </div>

                        <div className={styles.summary}>
                            <div className={styles.row}><span>Deposit (Refundable)</span><span>₹{product.baseDeposit.toLocaleString('en-IN')}</span></div>
                            <div className={styles.row}><span>1st Month Rent</span><span>₹{product.monthlyRent.toLocaleString('en-IN')}</span></div>
                            <div className={styles.totalRow}><span>Total Payable</span><span>₹{totalDue.toLocaleString('en-IN')}</span></div>
                        </div>

                        <div className={styles.paymentMethods}>
                            <button className={styles.payBtn}>Pay via UPI (Razorpay)</button>
                            <button className={styles.payBtn}>Credit Card</button>
                        </div>

                        <p className={styles.secureText}><Lock size={12} /> 128-bit Secure SSL Payment</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Checkout() {
    return (
        <main className={styles.page}>
            <Navbar />
            <Suspense fallback={<div className="container" style={{ paddingTop: '100px', textAlign: 'center' }}>Loading checkout...</div>}>
                <CheckoutContent />
            </Suspense>
        </main>
    );
}

function Step({ indicator, label, active }: { indicator: string, label: string, active: boolean }) {
    return (
        <div className={styles.step} data-active={active}>
            <div className={styles.indicator}>{indicator}</div>
            <span className={styles.label}>{label}</span>
        </div>
    );
}
