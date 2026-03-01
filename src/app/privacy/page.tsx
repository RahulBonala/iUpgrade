export const metadata = {
    title: 'Privacy Policy | iUpgrade',
    description: 'Privacy policy for iUpgrade rental platform.',
};

export default function PrivacyPage() {
    return (
        <main style={{ background: 'var(--color-cosmic-black)', minHeight: '100vh', paddingBottom: '80px' }}>
            <div className="container" style={{ paddingTop: '100px', maxWidth: '800px', color: '#ccc' }}>
                <h1 className="text-gradient" style={{ marginBottom: '40px' }}>Privacy Policy</h1>
                <p style={{ marginBottom: '24px' }}>
                    We collect and use your information to provide rental services, process payments, and comply with KYC requirements.
                    We do not sell your data to third parties. Full policy coming soon.
                </p>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                    Last updated: 2025. For questions, contact support.
                </p>
            </div>
        </main>
    );
}
