'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const DEVICES = [
  { name: 'iPhone 17 Pro Max', mrp: 189900, monthlyRent: 6999 },
  { name: 'iPhone 17 Pro', mrp: 149900, monthlyRent: 5499 },
  { name: 'MacBook Pro 14"', mrp: 249900, monthlyRent: 8499 },
];

export default function SavingsCalculator() {
  const [selectedDevice, setSelectedDevice] = useState(DEVICES[0]);
  const years = 3;

  const buyingCost = selectedDevice.mrp * years / 3; // Avg over lifecycle
  const rentingCost = selectedDevice.monthlyRent * 12;
  const annualSavings = buyingCost - rentingCost;

  return (
    <section style={{ padding: '100px 0', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-gradient" style={{ fontSize: '40px', fontWeight: '700', textAlign: 'center', marginBottom: '8px' }}
        >
          The Math Doesn't Lie
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: '48px' }}
        >
          See how much you save renting vs buying
        </motion.p>

        {/* Device selector */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          {DEVICES.map(d => (
            <button
              key={d.name}
              onClick={() => setSelectedDevice(d)}
              style={{
                padding: '10px 20px', borderRadius: 'var(--radius-pill)',
                border: `1px solid ${selectedDevice.name === d.name ? 'var(--color-cosmic-orange)' : 'rgba(255,255,255,0.15)'}`,
                background: selectedDevice.name === d.name ? 'rgba(255,95,31,0.15)' : 'transparent',
                color: selectedDevice.name === d.name ? 'var(--color-cosmic-orange)' : 'var(--color-text-secondary)',
                cursor: 'pointer', fontSize: '14px', fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
            >{d.name}</button>
          ))}
        </div>

        {/* Comparison display */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '24px', alignItems: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <div className="glass" style={{ borderRadius: 'var(--radius-lg)', padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Buying (every 2–3 yrs)</div>
            <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--color-text-primary)' }}>
              ₹{Math.round(selectedDevice.mrp / 1000)}K
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>upfront, no upgrades</div>
          </div>

          <div style={{ fontSize: '24px', color: 'var(--color-text-secondary)' }}>vs</div>

          <div style={{ borderRadius: 'var(--radius-lg)', padding: '32px', textAlign: 'center', background: 'rgba(255,95,31,0.1)', border: '1px solid rgba(255,95,31,0.3)' }}>
            <div style={{ fontSize: '13px', color: 'var(--color-cosmic-orange)', marginBottom: '8px' }}>Renting (always latest)</div>
            <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--color-cosmic-orange)' }}>
              ₹{Math.round(selectedDevice.monthlyRent * 12 / 1000)}K/yr
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>upgrades every year</div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '32px' }}
        >
          <span style={{ fontSize: '18px', color: 'var(--color-text-secondary)' }}>You save approximately </span>
          <span style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-success)' }}>
            ₹{Math.abs(Math.round(annualSavings / 1000))}K/year
          </span>
          <span style={{ fontSize: '18px', color: 'var(--color-text-secondary)' }}> while always having the latest device.</span>
        </motion.div>
      </div>
    </section>
  );
}
