import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

const FOOTER_LINKS = {
  'Devices': [
    { label: 'iPhone', href: '/catalog?category=phone' },
    { label: 'MacBook', href: '/catalog?category=laptop' },
    { label: 'Apple Watch', href: '/catalog?category=watch' },
    { label: 'AirPods', href: '/catalog?category=audio' },
  ],
  'Company': [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/catalog' },
    { label: 'Compare Devices', href: '/compare' },
    { label: 'Corporate Plans', href: '/plans' },
  ],
  'Support': [
    { label: 'Help Center', href: '/support' },
    { label: 'Contact Us', href: '/support#contact' },
    { label: 'Refer & Earn', href: '/refer' },
    { label: 'Track Order', href: '/orders' },
  ],
  'Legal': [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Refund Policy', href: '/terms#refund' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '80px', paddingBottom: '40px', background: 'var(--color-surface-1)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '80px' }}>
          
          {/* Brand Column */}
          <div style={{ gridColumn: '1 / -1', maxWidth: '300px' }}>
            <Link href="/" style={{ fontSize: '24px', fontWeight: '700', letterSpacing: '-0.5px', display: 'block', marginBottom: '16px', color: 'var(--color-text-primary)' }}>
              <span style={{ color: 'var(--color-cosmic-orange)' }}>i</span>Upgrade
            </Link>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
              Own the experience, not the device. India's premium Apple device rental platform. Let's make tech accessible.
            </p>
            <NewsletterForm />
          </div>

          {/* Links Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ color: 'white', fontWeight: '600', fontSize: '16px', marginBottom: '20px' }}>{title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} style={{ color: 'var(--color-text-secondary)', fontSize: '14px', transition: 'color 0.2s ease', textDecoration: 'none' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--glass-border)', paddingTop: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
            © {new Date().getFullYear()} iUpgrade · Made in India 🇮🇳
          </div>
          <div style={{ display: 'flex', gap: '16px', color: 'var(--color-text-secondary)', fontSize: '14px' }}>
            <span>🔒 SSL Secured</span>
            <span>⚡️ Razorpay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
