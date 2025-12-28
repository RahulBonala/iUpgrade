'use client';

import { PRODUCTS } from '@/lib/constants';
import ProductCard from './ProductCard';
import styles from './TrendingList.module.css';

export default function TrendingList() {
    // Use first 3 products as trailing
    const trendingProducts = PRODUCTS.slice(0, 3);

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Trending Rentals</h2>
                <div className={styles.grid}>
                    {trendingProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
