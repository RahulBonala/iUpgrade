'use client';

import { Product } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Scale } from 'lucide-react';
import { useCompareStore } from '@/lib/store';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { ids: compareIds, toggle: toggleCompare } = useCompareStore();
    const isComparing = compareIds.includes(product.id);

    return (
        <div className={styles.cardWrapper}>
            <Link href={`/catalog/${product.id}`} className={styles.card}>
                <div className={styles.imageContainer}>
                    <div className={styles.badges}>
                        {product.isNew && <span className={styles.badgeNew}>New</span>}
                        {product.isTrending && <span className={styles.badgeTrending}>Trending</span>}
                    </div>
                    
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={500}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={styles.image}
                    />
                </div>
                <div className={styles.info}>
                    <h3 className={styles.name}>{product.name}</h3>
                    <p className={styles.tagline}>{product.tagline}</p>

                    <div className={styles.pricing}>
                        <div className={styles.rentRow}>
                            <span className={styles.currency}>₹</span>
                            <span className={styles.amount}>{product.monthlyRent.toLocaleString('en-IN')}</span>
                            <span className={styles.period}>/mo</span>
                        </div>

                        <div className={styles.depositRow}>
                            <span>Deposit: ₹{product.baseDeposit.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                </div>
            </Link>

            <div className={styles.actions}>
                <button 
                    className={`${styles.actionBtn} ${styles.wishlistBtn}`}
                    aria-label="Add to Wishlist"
                    onClick={(e) => { e.preventDefault(); }}
                >
                    <Heart size={18} />
                </button>
                <button 
                    className={`${styles.actionBtn} ${styles.compareBtn} ${isComparing ? styles.active : ''}`}
                    aria-label="Compare"
                    onClick={(e) => { e.preventDefault(); toggleCompare(product.id); }}
                >
                    <Scale size={18} />
                </button>
            </div>
        </div>
    );
}
