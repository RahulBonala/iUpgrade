import FAQ from '@/components/FAQ';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function SupportPage() {
    return (
        <main style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h1 className="text-gradient" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px' }}>We're here to help.</h1>
                    <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)' }}>Find answers to common questions, or get in touch with our team.</p>
                </div>

                {/* Contact Options */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '80px' }}>
                    <div className="glass" style={{ padding: '32px 24px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                        <div style={{ width: '48px', height: '48px', background: 'rgba(255, 107, 26, 0.1)', color: 'var(--color-cosmic-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                            <MessageSquare size={24} />
                        </div>
                        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Live Chat</h3>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: '16px' }}>Average response: 2 mins</p>
                        <button className="btn-primary" style={{ width: '100%', fontSize: '14px', padding: '10px' }}>Start Chat</button>
                    </div>
                    
                    <div className="glass" style={{ padding: '32px 24px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                        <div style={{ width: '48px', height: '48px', background: 'rgba(255, 107, 26, 0.1)', color: 'var(--color-cosmic-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                            <Mail size={24} />
                        </div>
                        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Email Support</h3>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: '16px' }}>Average response: 2 hours</p>
                        <a href="mailto:support@iupgrade.in" className="btn-primary" style={{ display: 'block', width: '100%', fontSize: '14px', padding: '10px', background: 'var(--color-surface-2)', border: '1px solid var(--glass-border)' }}>Email Us</a>
                    </div>
                    
                    <div className="glass" style={{ padding: '32px 24px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                        <div style={{ width: '48px', height: '48px', background: 'rgba(255, 107, 26, 0.1)', color: 'var(--color-cosmic-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                            <Phone size={24} />
                        </div>
                        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Call Us</h3>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: '16px' }}>Mon-Fri, 9am - 6pm</p>
                        <a href="tel:18001234567" className="btn-primary" style={{ display: 'block', width: '100%', fontSize: '14px', padding: '10px', background: 'var(--color-surface-2)', border: '1px solid var(--glass-border)' }}>Call Now</a>
                    </div>
                </div>

                <FAQ />

            </div>
        </main>
    );
}
