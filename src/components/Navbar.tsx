'use client';

import Link from 'next/link';
import { ShoppingBag, Menu, User } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    iUpgrade
                </Link>

                <div className={styles.links}>
                    <Link href="/catalog" className={styles.link}>iPhone</Link>
                    <Link href="/catalog" className={styles.link}>Mac</Link>
                    <Link href="/catalog" className={styles.link}>Watch</Link>
                    <Link href="/how-it-works" className={styles.link}>Why Rent?</Link>
                </div>

                <div className={styles.actions}>
                    <Link href="/dashboard" className={styles.iconBtn} aria-label="Account">
                        <User size={20} />
                    </Link>
                    <button className={styles.iconBtn} aria-label="Cart">
                        <ShoppingBag size={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
