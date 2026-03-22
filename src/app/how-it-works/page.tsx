'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const STEPS = [
  {
    number: '01',
    title: 'Choose Your Device',
    desc: 'Browse iPhone, MacBook, Watch & AirPods. Pick your storage and color. See exactly what you pay monthly — no surprises.',
    icon: '📱',
    color: '#ff5f1f',
  },
  {
    number: '02',
    title: 'Complete Video KYC',
    desc: 'A 2-minute government ID verification. Done entirely online via your camera. Your data is encrypted and never stored.',
    icon: '🎥',
    color: '#0a84ff',
  },
  {
    number: '03',
    title: 'Pay & Get Delivered',
    desc: 'Pay the refundable deposit + first month via UPI or card. Device is delivered to your door within 48 hours.',
    icon: '🚀',
    color: '#30d158',
  },
  {
    number: '04',
    title: 'Upgrade Every Year',
    desc: 'When the next iPhone drops, swap yours for the new one. Send back your old device, we handle everything else.',
    icon: '🔄',
    color: '#ff9f0a',
  },
];

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } }
};
const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HowItWorksPage() {
  return (
    <main style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container">
        
        {/* Hero */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '80px', paddingTop: '40px' }}
        >
          <h1 className="text-gradient" style={{ fontSize: '56px', fontWeight: '800', marginBottom: '24px', letterSpacing: '-1px' }}>
            Simple. Transparent. Upgrade-first.
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Experience the latest Apple devices without the burden of ownership. Here is how our premium rental platform works.
          </p>
        </motion.div>

        {/* 4 Steps */}
        <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', marginBottom: '100px' }}
        >
          {STEPS.map((step) => (
            <motion.div key={step.number} variants={staggerItem} className="glass" style={{ padding: '40px 32px', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '120px', fontWeight: '900', color: 'var(--color-surface-2)', opacity: 0.5, zIndex: 0, userSelect: 'none' }}>
                {step.number}
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '48px', marginBottom: '24px' }}>{step.icon}</div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: 'white' }}>{step.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* What's Included */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{ padding: '64px', borderRadius: 'var(--radius-lg)', marginBottom: '64px', background: 'var(--color-surface-1)' }}
        >
          <h2 style={{ fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '48px' }}>What's Included in Your Rental</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            <div>
              <div style={{ color: 'var(--color-success)', fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>✓ AppleCare+</div>
              <p style={{ color: 'var(--color-text-secondary)' }}>Free repairs for hardware failures, plus discounted accidental damage coverage.</p>
            </div>
            <div>
              <div style={{ color: 'var(--color-success)', fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>✓ Theft Protection</div>
              <p style={{ color: 'var(--color-text-secondary)' }}>If your device is stolen, we cover the bulk of the replacement cost after you file an FIR.</p>
            </div>
            <div>
              <div style={{ color: 'var(--color-success)', fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>✓ Free Swap</div>
              <p style={{ color: 'var(--color-text-secondary)' }}>When it's time to upgrade, shipping the old device back and getting the new one is 100% free.</p>
            </div>
            <div>
              <div style={{ color: 'var(--color-success)', fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>✓ Doorstep Delivery</div>
              <p style={{ color: 'var(--color-text-secondary)' }}>Secure delivery via Bluedart straight to your home or office in top tier cities.</p>
            </div>
          </div>
        </motion.div>

        {/* Pricing Explained */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px' }}
        >
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '24px' }}>Pricing Explained</h2>
          <div className="glass" style={{ display: 'flex', alignItems: 'stretch', borderRadius: 'var(--radius-lg)', overflow: 'hidden', textAlign: 'left' }}>
            <div style={{ flex: 1, padding: '32px', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ color: 'var(--color-cosmic-orange)', fontWeight: '600', marginBottom: '8px' }}>Security Deposit</div>
              <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Fully refundable when you return the device. Varies from ₹3k to ₹20k based on device value.</div>
            </div>
            <div style={{ width: '1px', background: 'var(--glass-border)' }} />
            <div style={{ flex: 1, padding: '32px', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ color: 'var(--color-info)', fontWeight: '600', marginBottom: '8px' }}>Monthly Rent</div>
              <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>A fixed monthly fee that covers the device and all included protections. No hidden fees.</div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '32px' }}>Ready to experience the best?</h2>
          <Link href="/catalog" className="btn-primary" style={{ padding: '16px 40px', fontSize: '18px' }}>
            Browse Devices →
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
