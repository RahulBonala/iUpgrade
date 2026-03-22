'use client';

import { motion } from 'framer-motion';
import { PRODUCTS } from '@/lib/constants';
import ProductCard from './ProductCard';
import styles from './TrendingList.module.css';

export default function TrendingList() {
    const trendingProducts = PRODUCTS.filter(p => p.isTrending).slice(0, 3);

    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className={`text-gradient ${styles.sectionTitle}`}>Trending Upgrades</h2>
                    <p className={styles.sectionSubtitle}>The most popular devices people are renting right now.</p>
                </motion.div>
                <div className={styles.grid}>
                    {trendingProducts.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
