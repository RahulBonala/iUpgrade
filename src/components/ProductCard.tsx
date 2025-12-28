'use client';

import { Product } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/catalog/${product.id}`} className={styles.card}>
            <div className={styles.imageContainer}>
                <div className={styles.badge}>Trending</div>
                <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={500}
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

                    {/* Visual crossing out MRP could go here if we tracked MRP explicitly */}
                </div>
            </div>
        </Link>
    );
}
