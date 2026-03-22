'use client';

import { useState } from 'react';
import { Product } from '@/lib/constants';
import UpgradeCycle from '@/components/UpgradeCycle';
import styles from './ProductDetail.module.css';
import { ShieldCheck, Database, Palette } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/lib/store';

const STORAGE_OPTIONS = [
  { label: '256GB', priceBump: 0 },
  { label: '512GB', priceBump: 500 },
  { label: '1TB', priceBump: 1000 },
];

export default function ProductDetail({ product }: { product: Product }) {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedStorage, setSelectedStorage] = useState(STORAGE_OPTIONS[0]);

    const router = useRouter();
    const addItem = useCartStore(s => s.addItem);

    const currentMonthlyPrice = product.monthlyRent + selectedStorage.priceBump;
    const totalDueToday = product.baseDeposit + currentMonthlyPrice;

    const handleReserve = () => {
        addItem({
            product,
            storage: selectedStorage.label as any,
            color: selectedColor,
            monthlyPrice: currentMonthlyPrice,
        });
        router.push('/checkout');
    };

    return (
        <div className={styles.page}>
            <div className={`container ${styles.grid}`}>
                {/* Visual Section */}
                <div className={styles.visualColumn}>
                    <div className={styles.stickyContainer}>
                        <div className={styles.imagePlaceholder}>
                            <div className={styles.glow} style={{ background: selectedColor === 'Cosmic Orange' ? 'var(--color-orange-glow)' : 'rgba(255,255,255,0.1)' }} />
                            <Image
                                src={product.image}
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

                {/* Configuration Section */}
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
                            {STORAGE_OPTIONS.map(opt => (
                                <button
                                    key={opt.label}
                                    className={`${styles.storageBtn} ${selectedStorage.label === opt.label ? styles.selected : ''}`}
                                    onClick={() => setSelectedStorage(opt)}
                                >
                                    {opt.label}
                                    {opt.priceBump > 0 && <span className={styles.priceBump}>+₹{opt.priceBump}/mo</span>}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.priceBox}>
                        <div className={styles.priceRow}>
                            <span className={styles.label}>Monthly Rental</span>
                            <div className={styles.priceValue}>
                                <span className={styles.currency}>₹</span>
                                {currentMonthlyPrice.toLocaleString('en-IN')}
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
                            <span className={styles.totalValue}>₹{totalDueToday.toLocaleString('en-IN')}</span>
                        </div>

                        <button onClick={handleReserve} className={`btn-primary ${styles.checkoutBtn}`} style={{ width: '100%', display: 'block', textAlign: 'center', marginTop: '24px' }}>
                            Reserve Now
                        </button>
                        <p className={styles.disclaimer}>*KYC verification required before delivery.</p>
                    </div>

                    <UpgradeCycle />
                </div>
            </div>
        </div>
    );
}
