'use client';

import { motion } from 'framer-motion';
import { RefreshCcw, ArrowRight } from 'lucide-react';

export default function UpgradeCycle() {
    return (
        <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '24px',
            marginTop: '32px'
        }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <RefreshCcw size={20} color="var(--color-cosmic-orange)" />
                The iUpgrade Cycle
            </h3>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                <Step year="Year 1" device="iPhone 17" active />
                <ArrowRight size={16} color="#444" />
                <Step year="Year 2" device="iPhone 18" />
                <ArrowRight size={16} color="#444" />
                <Step year="Year 3" device="iPhone 19" />
            </div>
        </div>
    );
}

function Step({ year, device, active = false }: { year: string, device: string, active?: boolean }) {
    return (
        <div style={{
            textAlign: 'center',
            opacity: active ? 1 : 0.4
        }}>
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
        </div>
    );
}
