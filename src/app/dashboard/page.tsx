'use client';

import Navbar from '@/components/Navbar';
import { Clock, RefreshCw } from 'lucide-react';
import styles from './Dashboard.module.css';

export default function Dashboard() {
    return (
        <main className={styles.page}>
            <Navbar />
            <div className="container" style={{ paddingTop: '100px' }}>
                <h1 className={styles.heading}>Welcome back, Arjun</h1>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3>Active Rental</h3>
                            <span className={styles.status}>Active</span>
                        </div>
                        <div className={styles.productRow}>
                            <div className={styles.productIcon}>📱</div>
                            <div>
                                <div className={styles.productName}>iPhone 17 Pro Max</div>
                                <div className={styles.productMeta}>256GB • Cosmic Black</div>
                            </div>
                        </div>

                        <div className={styles.progressSection}>
                            <div className={styles.progressHeader}>
                                <span>Upgrade Eligibility</span>
                                <span>305 days left</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill} style={{ width: '16%' }} />
                            </div>
                            <p className={styles.progressNote}>You have completed 2 of 12 payments.</p>
                        </div>
                    </div>

                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <Clock size={24} className={styles.icon} />
                            <div className={styles.statValue}>Next Payment</div>
                            <div className={styles.statLabel}>Due on 5th Feb</div>
                        </div>
                        <div className={styles.statCard}>
                            <RefreshCw size={24} className={styles.icon} />
                            <div className={styles.statValue}>Smart Swap</div>
                            <div className={styles.statLabel}>Eligible Oct 2026</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
