'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, Package, Truck, Box } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams?.get('orderId') || 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <main className="container" style={{ paddingTop: '120px', paddingBottom: '120px', maxWidth: '600px', textAlign: 'center' }}>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.5 }}
      >
        <div style={{ width: '80px', height: '80px', background: 'var(--color-success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', boxShadow: '0 0 40px rgba(48, 209, 88, 0.4)' }}>
          <CheckCircle2 size={40} color="white" />
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ fontSize: '36px', fontWeight: '700', color: 'white', marginBottom: '16px' }}
      >
        Payment Successful!
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ color: 'var(--color-text-secondary)', fontSize: '16px', marginBottom: '40px' }}
      >
        Your order <span style={{ color: 'white', fontWeight: '600' }}>#{orderId}</span> has been confirmed. We've sent a receipt to your email and SMS.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass" 
        style={{ padding: '32px', borderRadius: 'var(--radius-lg)', marginBottom: '40px', textAlign: 'left' }}
      >
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>Order Status</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '15px', top: '16px', bottom: '16px', width: '2px', background: 'var(--color-border-default)', zIndex: 0 }}></div>
          
          <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 1, opacity: 1 }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CheckCircle2 size={16} color="white" />
            </div>
            <div>
              <div style={{ fontWeight: '600', color: 'white', marginBottom: '4px' }}>Order Confirmed</div>
              <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Payment received and verified.</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 1, opacity: 0.5 }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-surface-3)', border: '2px solid var(--color-border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Box size={14} color="var(--color-text-secondary)" />
            </div>
            <div>
              <div style={{ fontWeight: '600', color: 'white', marginBottom: '4px' }}>Packing</div>
              <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Our team is preparing your device.</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 1, opacity: 0.5 }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-surface-3)', border: '2px solid var(--color-border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Truck size={14} color="var(--color-text-secondary)" />
            </div>
            <div>
              <div style={{ fontWeight: '600', color: 'white', marginBottom: '4px' }}>Out for Delivery</div>
              <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Device will be shipped via secure courier.</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}
      >
        <Link href={`/orders/${orderId}`} className="btn-primary" style={{ padding: '14px 24px', background: 'var(--color-surface-2)', border: '1px solid var(--glass-border)' }}>
          Track Order
        </Link>
        <Link href="/dashboard" className="btn-primary" style={{ padding: '14px 24px' }}>
          Go to Dashboard
        </Link>
      </motion.div>
    </main>
  );
}
