'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    toast.success("You're on the list! Watch your inbox for launch updates.");
    setEmail('');
  };

  return (
    <form
      onSubmit={handleSubscribe}
      style={{ display: 'flex', gap: '8px', maxWidth: '100%', alignItems: 'center', background: 'var(--color-surface-2)', padding: '4px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--glass-border)' }}
    >
      <input
        type="email"
        placeholder="Join Newsletter"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ background: 'transparent', border: 'none', color: 'white', padding: '10px 16px', outline: 'none', width: '100%', fontSize: '14px' }}
      />
      <button type="submit" aria-label="Subscribe" style={{ background: 'var(--color-cosmic-orange)', border: 'none', color: '#000000', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
        <Mail size={16} />
      </button>
    </form>
  );
}
