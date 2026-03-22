'use client';

import { useCompareStore, useCartStore } from '@/lib/store';
import { PRODUCTS } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';
import { Check, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ComparePage() {
  const { ids, toggle, clear } = useCompareStore();
  const addItem = useCartStore(s => s.addItem);
  const router = useRouter();
  
  const compareProducts = ids.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean) as typeof PRODUCTS;

  if (compareProducts.length === 0) {
    return (
      <main className="container" style={{ paddingTop: '120px', paddingBottom: '80px', textAlign: 'center' }}>
        <h1 className="text-gradient" style={{ fontSize: '40px', fontWeight: '700', marginBottom: '24px' }}>Compare Devices</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>No devices selected for comparison.</p>
        <Link href="/catalog" className="btn-primary">Browse Catalog</Link>
      </main>
    );
  }

  const handleReserve = (product: typeof PRODUCTS[0]) => {
    addItem({
      product,
      storage: '256GB', // default
      color: product.colors[0],
      monthlyPrice: product.monthlyRent,
    });
    router.push('/checkout');
  };

  return (
    <main className="container" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
        <div>
          <h1 className="text-gradient" style={{ fontSize: '40px', fontWeight: '700', marginBottom: '8px' }}>Compare Specs</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>Comparing {compareProducts.length} devices</p>
        </div>
        <button onClick={clear} style={{ background: 'none', border: 'none', color: 'var(--color-error)', cursor: 'pointer', fontWeight: '500' }}>Clear All</button>
      </div>

      <div style={{ overflowX: 'auto', paddingBottom: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: `${compareProducts.length * 300}px` }}>
          <thead>
            <tr>
              <th style={{ width: '200px', padding: '16px', borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}></th>
              {compareProducts.map(product => (
                <th key={'header-'+product.id} style={{ padding: '24px 16px', borderBottom: '1px solid var(--glass-border)', textAlign: 'center', width: '300px' }}>
                  <div style={{ position: 'relative', display: 'inline-block', marginBottom: '16px' }}>
                    <button 
                      onClick={() => toggle(product.id)}
                      style={{ position: 'absolute', top: '-10px', right: '-10px', width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-surface-3)', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <X size={14} />
                    </button>
                    <Image src={product.image} alt={product.name} width={120} height={150} style={{ objectFit: 'contain' }} />
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>{product.name}</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-cosmic-orange)', marginBottom: '16px' }}>
                    ₹{product.monthlyRent.toLocaleString('en-IN')}<span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>/mo</span>
                  </div>
                  <button onClick={() => handleReserve(product)} className="btn-primary" style={{ padding: '10px 24px', fontSize: '14px' }}>Reserve Now</button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: 'var(--color-surface-1)' }}>
              <td style={{ padding: '16px', borderBottom: '1px solid var(--color-border-subtle)', fontWeight: '600', color: 'var(--color-text-secondary)' }}>Device Type</td>
              {compareProducts.map(product => (
                <td key={'cat-'+product.id} style={{ padding: '16px', borderBottom: '1px solid var(--color-border-subtle)', textAlign: 'center', textTransform: 'capitalize' }}>{product.category}</td>
              ))}
            </tr>
            <tr>
              <td style={{ padding: '16px', borderBottom: '1px solid var(--color-border-subtle)', fontWeight: '600', color: 'var(--color-text-secondary)' }}>Deposit</td>
              {compareProducts.map(product => (
                <td key={'dep-'+product.id} style={{ padding: '16px', borderBottom: '1px solid var(--color-border-subtle)', textAlign: 'center' }}>₹{product.baseDeposit.toLocaleString('en-IN')}</td>
              ))}
            </tr>
            <tr style={{ background: 'var(--color-surface-1)' }}>
              <td style={{ padding: '16px', borderBottom: '1px solid var(--color-border-subtle)', fontWeight: '600', color: 'var(--color-text-secondary)' }}>AppleCare+</td>
              {compareProducts.map(product => (
                <td key={'ac-'+product.id} style={{ padding: '16px', borderBottom: '1px solid var(--color-border-subtle)', textAlign: 'center', color: 'var(--color-success)' }}><Check size={20} style={{ margin: '0 auto' }} /></td>
              ))}
            </tr>
            <tr>
              <td style={{ padding: '16px', borderBottom: '1px solid var(--color-border-subtle)', fontWeight: '600', color: 'var(--color-text-secondary)' }}>M.R.P</td>
              {compareProducts.map(product => (
                <td key={'mrp-'+product.id} style={{ padding: '16px', borderBottom: '1px solid var(--color-border-subtle)', textAlign: 'center', color: 'var(--color-text-secondary)' }}>₹{product.mrp?.toLocaleString('en-IN') || 'N/A'}</td>
              ))}
            </tr>
            <tr style={{ background: 'var(--color-surface-1)' }}>
              <td style={{ padding: '16px', borderBottom: '1px solid var(--color-border-subtle)', fontWeight: '600', color: 'var(--color-text-secondary)' }}>Key Specs</td>
              {compareProducts.map(product => (
                <td key={'specs-'+product.id} style={{ padding: '24px 16px', borderBottom: '1px solid var(--color-border-subtle)', textAlign: 'center' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {product.specs.map(s => (
                      <li key={s} style={{ fontSize: '14px' }}>{s}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ padding: '16px', borderBottom: '1px solid var(--color-border-subtle)', fontWeight: '600', color: 'var(--color-text-secondary)' }}>Colors</td>
              {compareProducts.map(product => (
                <td key={'colors-'+product.id} style={{ padding: '24px 16px', borderBottom: '1px solid var(--color-border-subtle)', textAlign: 'center' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                    {product.colors.map(c => (
                      <span key={c} style={{ fontSize: '12px', background: 'var(--color-surface-2)', padding: '4px 8px', borderRadius: '4px' }}>{c}</span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
