'use client';
import { useCompareStore } from '@/lib/store';
import { PRODUCTS } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';
import { X, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CompareDrawer.module.css';

export default function CompareDrawer() {
  const { ids, toggle, clear } = useCompareStore();
  
  if (ids.length === 0) return null;
  
  const compareProducts = ids.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

  return (
    <AnimatePresence>
      {ids.length > 0 && (
        <motion.div 
          className={styles.drawerWrapper}
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
        >
          <div className={`container ${styles.drawerContainer}`}>
            <div className={styles.header}>
              <div className={styles.titleInfo}>
                <Scale size={20} className={styles.icon} />
                <span className={styles.titleCount}>Comparing {ids.length}/3 Devices</span>
              </div>
              <div className={styles.headerActions}>
                <button onClick={clear} className={styles.clearBtn}>Clear</button>
                <Link href="/compare" className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>
                  Compare
                </Link>
                <button onClick={clear} className={styles.closeBtn} aria-label="Close drawer"><X size={24} /></button>
              </div>
            </div>
            
            <div className={styles.productList}>
              {compareProducts.map(product => product && (
                <div key={product.id} className={styles.productItem}>
                  <Image src={product.image} alt={product.name} width={40} height={40} className={styles.productImage} />
                  <div className={styles.productInfo}>
                    <div className={styles.productName}>{product.name}</div>
                    <div className={styles.productRent}>₹{product.monthlyRent.toLocaleString('en-IN')}/mo</div>
                  </div>
                  <button onClick={() => toggle(product.id)} className={styles.removeBtn} aria-label="Remove">
                    <X size={16} />
                  </button>
                </div>
              ))}
              
              {/* Empty slots */}
              {Array.from({ length: 3 - ids.length }).map((_, i) => (
                <div key={`empty-${i}`} className={styles.productItemEmpty}>
                  Add another device
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
