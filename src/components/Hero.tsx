'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Own the Experience.<br />
                    <span className="text-gradient">Not the Device.</span>
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Upgrade to the latest iPhone every year.
                    Pay only for what you use.
                </motion.p>

                <motion.div
                    className={styles.ctaWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link href="/catalog">
                        <button className="btn-primary">View Plans</button>
                    </Link>
                    <Link href="/how-it-works" className={styles.secondaryLink}>
                        How it works &rarr;
                    </Link>
                </motion.div>
            </div>

            <motion.div
                className={styles.visual}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <div className={styles.placeholderImage}>
                    {/* Placeholder for iPhone 17 Pro Max Render */}
                    <div className={styles.glow} />
                    <Image
                        src="/images/iphone-17-pro-max.png"
                        alt="iPhone 17 Pro Max"
                        width={300}
                        height={600}
                        className={styles.phoneImg}
                        priority
                    />
                </div>
            </motion.div>
        </section>
    );
}
