'use client';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './FAQ.module.css';

const FAQ_ITEMS = [
  {
    q: 'What happens if I damage the device?',
    a: 'All plans include AppleCare+ which covers accidental damage for a small service fee (₹3,500 for screen, ₹8,900 for other damage). Beyond that, our theft & loss protection covers you.',
  },
  {
    q: 'When exactly can I upgrade to the new model?',
    a: 'After completing 12 monthly payments, you can request a swap to the newest model within 30 days. We ship the new device, and you send back the old one using our pre-paid box.',
  },
  {
    q: 'Is the security deposit fully refundable?',
    a: 'Yes. Your deposit is 100% refundable when you return the device in good condition at the end of your rental period.',
  },
  {
    q: 'What documents do I need for KYC?',
    a: 'Any government-issued photo ID: Aadhaar, PAN card, or Passport. The video KYC takes about 2 minutes and is done entirely online.',
  },
  {
    q: 'Can I cancel my rental early?',
    a: 'Yes, with 30 days notice. You return the device, and we refund your security deposit. No penalty for early return.',
  },
  {
    q: 'Which cities do you deliver to?',
    a: 'We currently deliver to Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata, and Ahmedabad. More cities are coming soon.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

export default function FAQ() {
  return (
    <section className={styles.section}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.h2 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          className={`text-gradient ${styles.title}`}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <Accordion.Root type="single" collapsible className={styles.accordionRoot}>
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Accordion.Item value={`item-${i}`} className={styles.accordionItem}>
                <Accordion.Header className={styles.accordionHeader}>
                  <Accordion.Trigger className={styles.accordionTrigger}>
                    {item.q}
                    <ChevronDown className={styles.accordionIcon} aria-hidden />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={styles.accordionContent}>
                  <div className={styles.accordionContentText}>{item.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
