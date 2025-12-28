'use client';

import { useState } from 'react';
import { Product, PRODUCTS } from '@/lib/constants'; // Added PRODUCTS import
import Navbar from '@/components/Navbar';
import UpgradeCycle from '@/components/UpgradeCycle';
import styles from './ProductDetail.module.css';
import { ShieldCheck, Database, Palette } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // Re-added Link import
// Removed 'next' metadata import because this is a client component ('use client')
// Metadata must be in a separate server component or layout, OR we use basic implementation without dynamic metadata for MVP in client component.
// Wait, Next.js 13+ App Router allows generateMetadata in page.tsx (Server Component), but this file is 'use client'.
// The 'page.tsx' that imports this should handle metadata, or I split this.
// For now, to unblock build, I will REMOVE generateMetadata from this Client Component.
// I will move generateMetadata to the parent 'page.tsx'.

export default function ProductDetail({ product }: { product: Product }) {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);

    return (
        <div className={styles.page}>
            <Navbar />

            <div className={`container ${styles.grid}`}>
                {/* Visual Section */}
                <div className={styles.visualColumn}>
                    <div className={styles.stickyContainer}>
                        <div className={styles.imagePlaceholder}>
                            <div className={styles.glow} style={{ background: selectedColor === 'Cosmic Orange' ? 'var(--color-orange-glow)' : 'rgba(255,255,255,0.1)' }} />
                            <Image
                                src={`https://placehold.co/600x800/1a1a1a/FFF?text=${product.name}+${selectedColor}`}
                                alt={product.name}
                                width={600}
                                height={800}
                                className={styles.productImage}
                                priority
                            />
                            <div className={styles.threesixtyBadge}>360° View</div>
                        </div>
                    </div>
                </div>

                {/* Configuraion Section */}
                <div className={styles.configColumn}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>{product.name}</h1>
                        <p className={styles.tagline}>{product.tagline}</p>
                    </div>

                    <div className={styles.specs}>
                        {product.specs.map((spec, i) => (
                            <span key={i} className={styles.specBadge}>{spec}</span>
                        ))}
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>
                            <Palette size={18} /> Color
                        </h3>
                        <div className={styles.colorGrid}>
                            {product.colors.map(color => (
                                <button
                                    key={color}
                                    className={`${styles.colorBtn} ${selectedColor === color ? styles.selected : ''}`}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>
                            <Database size={18} /> Storage
                        </h3>
                        <div className={styles.storageGrid}>
                            <button className={`${styles.storageBtn} ${styles.selected}`}>256GB</button>
                            <button className={styles.storageBtn}>512GB <span className={styles.priceBump}>+₹500/mo</span></button>
                            <button className={styles.storageBtn}>1TB <span className={styles.priceBump}>+₹1000/mo</span></button>
                        </div>
                    </div>

                    <div className={styles.priceBox}>
                        <div className={styles.priceRow}>
                            <span className={styles.label}>Monthly Rental</span>
                            <div className={styles.priceValue}>
                                <span className={styles.currency}>₹</span>
                                {product.monthlyRent.toLocaleString('en-IN')}
                                <span className={styles.period}>/mo</span>
                            </div>
                        </div>

                        <div className={styles.includesList}>
                            <div className={styles.includeItem}>
                                <ShieldCheck size={16} className={styles.checkIcon} />
                                <span>AppleCare+ Included</span>
                            </div>
                            <div className={styles.includeItem}>
                                <ShieldCheck size={16} className={styles.checkIcon} />
                                <span>Theft & Loss Protection</span>
                            </div>
                        </div>

                        <div className={styles.divider} />

                        <div className={styles.depositRow}>
                            <span>Refundable Security Deposit</span>
                            <span>₹{product.baseDeposit.toLocaleString('en-IN')}</span>
                        </div>

                        <div className={styles.totalRow}>
                            <span>Due Today (Deposit + 1st Month)</span>
                            <span className={styles.totalValue}>₹{(product.baseDeposit + product.monthlyRent).toLocaleString('en-IN')}</span>
                        </div>

                        <Link href={`/checkout?productId=${product.id}`} className={styles.checkoutBtn}>
                            Reserve Now
                        </Link>
                        <p className={styles.disclaimer}>*KYC verification required before delivery.</p>
                    </div>

                    <UpgradeCycle />
                </div>
            </div>
        </div>
    );
}
