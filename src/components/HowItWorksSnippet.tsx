'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Smartphone, Camera, Zap, RefreshCw } from 'lucide-react';

const STEPS = [
  { icon: Smartphone, title: 'Choose Device', desc: 'Pick your upgrade and select storage.' },
  { icon: Camera, title: 'Fast KYC', desc: '2-min online verification with Aadhaar.' },
  { icon: Zap, title: 'Get Delivered', desc: 'Secure doorstep delivery in 48 hours.' },
  { icon: RefreshCw, title: 'Annual Swap', desc: 'Trade it for the new model next year.' },
];

export default function HowItWorksSnippet() {
  return (
    <section style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 className="text-gradient" style={{ fontSize: '40px', fontWeight: '700', marginBottom: '16px' }}>
            It’s this simple.
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Renting with iUpgrade is designed to be frictionless, transparent, and built entirely around giving you the best experience.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', marginBottom: '64px' }}>
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ 
                  width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,95,31,0.1)', 
                  border: '1px solid rgba(255,95,31,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  margin: '0 auto 20px', color: 'var(--color-cosmic-orange)'
                }}>
                  <Icon size={32} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>
                  {index + 1}. {step.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: '1.5' }}>
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          <Link href="/how-it-works" className="btn-primary" style={{ display: 'inline-block' }}>
            See Detailed Breakdown →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
