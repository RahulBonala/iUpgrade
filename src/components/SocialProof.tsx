'use client';
import { motion } from 'framer-motion';
import { Star, Truck, ShieldCheck, Users } from 'lucide-react';

const STATS = [
  { icon: Users, value: '10,000+', label: 'Active Rentals' },
  { icon: Star, value: '4.8/5', label: 'App Store Rating', color: '#ffd60a' },
  { icon: Truck, value: '48hr', label: 'Doorstep Delivery' },
  { icon: ShieldCheck, value: '100%', label: 'Covered by AppleCare+' },
];

const TESTIMONIALS = [
  {
    quote: "I always wanted the Pro Max but couldn't justify dropping ₹1.5L at once. iUpgrade let me get it for a simple monthly fee, and the KYC took literally 2 minutes.",
    author: "Rahul M.",
    role: "Product Designer, Bangalore",
  },
  {
    quote: "The ability to just swap to the new iPhone every September without the hassle of selling my old one on OLX is a game changer.",
    author: "Sneha K.",
    role: "Content Creator, Mumbai",
  },
  {
    quote: "Got my MacBook Pro M5 through them. AppleCare+ being included gave me huge peace of mind. Delivery was right on time.",
    author: "Amit P.",
    role: "Software Engineer, Hyderabad",
  }
];

export default function SocialProof() {
  return (
    <section style={{ padding: '80px 0', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        
        {/* Trust Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '80px' }}>
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass"
                style={{ padding: '24px', borderRadius: 'var(--radius-lg)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
              >
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
                  <Icon size={28} color={stat.color || 'var(--color-cosmic-orange)'} />
                </div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--color-text-primary)' }}>{stat.value}</div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Testimonials */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gradient" 
          style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '48px' }}
        >
          Don't just take our word for it
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="glass"
              style={{ padding: '32px', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} color="#ffd60a" fill="#ffd60a" />
                ))}
              </div>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--color-text-primary)', marginBottom: '24px' }}>
                "{t.quote}"
              </p>
              <div>
                <div style={{ fontWeight: '600', color: 'white' }}>{t.author}</div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
