'use client';

import Navbar from '@/components/Navbar';

export default function Terms() {
    return (
        <main style={{ background: 'var(--color-cosmic-black)', minHeight: '100vh', paddingBottom: '80px' }}>
            <Navbar />
            <div className="container" style={{ paddingTop: '100px', maxWidth: '800px', color: '#ccc' }}>
                <h1 className="text-gradient" style={{ marginBottom: '40px' }}>Terms & Conditions</h1>

                <section style={{ marginBottom: '32px' }}>
                    <h2 style={{ color: 'white', marginBottom: '16px' }}>1. INTRODUCTION AND SCOPE</h2>
                    <p>This Rental Agreement (&quot;Agreement&quot;) is made between iUpgrade (&quot;Lessor&quot;, &quot;We&quot;, &quot;Us&quot;) and the individual or entity renting the equipment (&quot;Lessee&quot;, &quot;You&quot;). By placing an order and completing the KYC process, you agree to be bound by these terms.</p>
                </section>

                <section style={{ marginBottom: '32px' }}>
                    <h2 style={{ color: 'white', marginBottom: '16px' }}>2. NATURE OF THE AGREEMENT</h2>
                    <p style={{ marginBottom: '8px' }}><strong>2.1 No Ownership Transfer:</strong> This is a strictly rental agreement. iUpgrade retains full legal ownership of all devices (iPhones, MacBooks, Accessories) at all times. You are paying for the right to use the device, not to own it.</p>
                    <p><strong>2.2 MDM Software:</strong> All devices are pre-installed with Mobile Device Management (MDM) software. This allows iUpgrade to remotely manage, track, and lock the device in the event of non-payment or theft. You agree not to remove or tamper with this software.</p>
                </section>

                <section style={{ marginBottom: '32px' }}>
                    <h2 style={{ color: 'white', marginBottom: '16px' }}>3. ELIGIBILITY AND KYC</h2>
                    <p style={{ marginBottom: '8px' }}><strong>3.1 Video Verification:</strong> All rentals are subject to a mandatory Video KYC verification process. You must display valid government-issued ID (Aadhaar/PAN/Passport) during a live video call.</p>
                    <p><strong>3.2 Approval:</strong> iUpgrade reserves the right to reject any application based on credit assessment or failed KYC verification.</p>
                </section>

                <section style={{ marginBottom: '32px' }}>
                    <h2 style={{ color: 'white', marginBottom: '16px' }}>4. PAYMENTS, DEPOSITS, AND GST</h2>
                    <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <li><strong>4.1 Security Deposit:</strong> A fully refundable security deposit is required before dispatch. This deposit does not accrue interest.</li>
                        <li><strong>4.2 Monthly Rental:</strong> Rental fees are billed monthly in advance. Prices are inclusive of GST.</li>
                        <li><strong>4.3 Late Payment:</strong> Grace period of 3 days. After 3 days, a late fee of ₹500 per day applies.</li>
                        <li><strong>4.4 Remote Locking:</strong> If payment remains outstanding for 7 days, the device will be remotely locked.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '32px' }}>
                    <h2 style={{ color: 'white', marginBottom: '16px' }}>5. THE UPDATE CYCLE (SMART SWAP)</h2>
                    <p><strong>5.1 Eligibility:</strong> Upgrade to the next generation device after 12 consecutive monthly payments.</p>
                    <p><strong>5.2 Exchange Process:</strong> Request new model via Dashboard &rarr; Receive New Device &rarr; Transfer Data &rarr; Hand over old device.</p>
                </section>

                <section style={{ marginBottom: '32px' }}>
                    <h2 style={{ color: 'white', marginBottom: '16px' }}>6. DAMAGE, THEFT, AND INSURANCE</h2>
                    <p><strong>6.1 Coverage:</strong> Includes AppleCare+ and Theft Protection.</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                        <li>Accidental Damage: Covered (Subject to nominal fee).</li>
                        <li>Manufacturing Defects: Fully covered.</li>
                        <li><strong>Theft/Loss:</strong> File FIR within 24hrs. Pay deductible.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '32px' }}>
                    <h2 style={{ color: 'white', marginBottom: '16px' }}>7. RETURN AND REFUND POLICY</h2>
                    <p>Device must be returned in &quot;Grade A&quot; condition. <strong>iCloud must be unlocked.</strong></p>
                    <p>Security Deposit refunded within 5-7 business days after QC.</p>
                </section>

                <section style={{ marginBottom: '32px' }}>
                    <h2 style={{ color: 'white', marginBottom: '16px' }}>8. PROHIBITED USES</h2>
                    <p>Do NOT: Jailbreak, repair at unauthorized centers, or sub-rent/sell the device.</p>
                </section>

                <section>
                    <h2 style={{ color: 'white', marginBottom: '16px' }}>9. TERMINATION</h2>
                    <p>We may terminate if you fail to pay for &gt;15 days, breach terms, or provide false KYC info.</p>
                </section>
            </div>
        </main>
    );
}
