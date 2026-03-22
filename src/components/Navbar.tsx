'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'iPhone', href: '/catalog?category=phone' },
  { label: 'Mac', href: '/catalog?category=laptop' },
  { label: 'Watch', href: '/catalog?category=watch' },
  { label: 'AirPods', href: '/catalog?category=audio' },
  { label: 'Why Rent?', href: '/how-it-works' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cartItems = useCartStore((s) => s.items);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Prevent scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span style={{ color: 'var(--color-cosmic-orange)' }}>i</span>Upgrade
        </Link>

        <div className={styles.links}>
          {NAV_LINKS.map(link => {
            const isActive = pathname === link.href.split('?')[0] && pathname !== '/';
            return (
              <Link key={link.href} href={link.href} className={`${styles.link} ${isActive ? styles.active : ''}`}>
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className={styles.actions}>
          <Link href="/dashboard" className={styles.iconBtn} aria-label="User Dashboard"><User size={20} /></Link>
          <Link href="/checkout" className={styles.iconBtn} style={{ position: 'relative' }} aria-label="Cart">
            <ShoppingBag size={20} />
            {cartItems.length > 0 && (
              <span className={styles.cartBadge}>{cartItems.length}</span>
            )}
          </Link>
          <button className={`${styles.iconBtn} ${styles.mobileMenuBtn}`} onClick={() => setMobileOpen(true)} aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className={styles.drawer}>
          <div className={styles.drawerHeader}>
            <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
              <span style={{ color: 'var(--color-cosmic-orange)' }}>i</span>Upgrade
            </Link>
            <button className={styles.iconBtn} onClick={() => setMobileOpen(false)} aria-label="Close Menu">
              <X size={24} />
            </button>
          </div>
          <div className={styles.drawerLinks}>
            {NAV_LINKS.map(link => (
              <Link key={link.href} href={link.href} className={styles.drawerLink} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
