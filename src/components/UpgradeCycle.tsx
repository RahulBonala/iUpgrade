'use client';

import { RefreshCcw, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function UpgradeCycle() {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '24px',
                marginTop: '32px'
            }}
        >
            <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
                <RefreshCcw size={20} color="var(--color-cosmic-orange)" />
                The iUpgrade Cycle
            </motion.h3>

            <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                    animate: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
                }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}
            >
                <Step year="Year 1" device="iPhone 17" active />
                <motion.div variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}>
                    <ArrowRight size={16} color="#444" />
                </motion.div>
                <Step year="Year 2" device="iPhone 18" />
                <motion.div variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}>
                    <ArrowRight size={16} color="#444" />
                </motion.div>
                <Step year="Year 3" device="iPhone 19" />
            </motion.div>
        </motion.div>
    );
}

const itemVariant = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 }
};

function Step({ year, device, active = false }: { year: string, device: string, active?: boolean }) {
    return (
        <motion.div 
            variants={itemVariant}
            style={{
                textAlign: 'center',
                opacity: active ? 1 : 0.4
            }}
        >
            <div style={{
                fontSize: '12px',
                color: 'var(--color-text-secondary)',
                marginBottom: '4px'
            }}>{year}</div>
            <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: active ? 'var(--color-cosmic-orange)' : 'white'
            }}>{device}</div>
        </motion.div>
    );
}

