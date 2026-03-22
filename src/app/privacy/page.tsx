export default function PrivacyPage() {
    return (
        <main className="container" style={{ paddingTop: '100px', paddingBottom: '100px', maxWidth: '800px' }}>
            <h1 className="text-gradient" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px' }}>Privacy Policy</h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '48px' }}>Last updated: January 1, 2025</p>

            <div className="glass" style={{ padding: '48px', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ color: 'var(--color-text-primary)', lineHeight: '1.8', fontSize: '16px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '0' }}>1. Information We Collect</h2>
                    <p style={{ marginBottom: '24px', color: 'var(--color-text-secondary)' }}>
                        We collect information you provide directly to us when you create an account, complete KYC, or initiate a rental. This includes:
                        <ul style={{ marginTop: '8px', paddingLeft: '24px' }}>
                            <li>Contact info (Name, Phone, Email)</li>
                            <li>Identity verifications (Aadhaar, PAN via secure 3rd party APIs)</li>
                            <li>Payment information (processed securely via Razorpay)</li>
                        </ul>
                    </p>

                    <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '40px' }}>2. How We Use Your Data</h2>
                    <p style={{ marginBottom: '24px', color: 'var(--color-text-secondary)' }}>
                        Your data is solely used to verify your identity to prevent fraud, process payments, and deliver your rental device. We do not sell your personal data to third parties. Period.
                    </p>

                    <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '40px' }}>3. Data Security</h2>
                    <p style={{ marginBottom: '24px', color: 'var(--color-text-secondary)' }}>
                        We implement state-of-the-art security measures to maintain the safety of your personal information. Video KYC streams are end-to-end encrypted and not stored persistently on our servers.
                    </p>

                    <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '40px' }}>4. Device Tracking</h2>
                    <p style={{ marginBottom: '24px', color: 'var(--color-text-secondary)' }}>
                        The devices provided are registered under Apple Deployment Programs (MDM). This is strictly to prevent theft and cannot be used to monitor your personal usage, read messages, view photos, or track your location without your consent.
                    </p>
                </div>
            </div>
        </main>
    );
}
