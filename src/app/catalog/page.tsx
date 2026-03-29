'use client';
import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { PRODUCTS } from '@/lib/constants';
import ProductCard from '@/components/ProductCard';
import { Search } from 'lucide-react';
import CompareDrawer from '@/components/CompareDrawer';

const CATEGORIES = [
  { label: 'All', value: '' },
  { label: 'iPhone', value: 'phone' },
  { label: 'Mac', value: 'laptop' },
  { label: 'Watch', value: 'watch' },
  { label: 'AirPods', value: 'audio' },
];

export default function Catalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get('category') || '';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('price-asc');

  const filtered = useMemo(() => {
    return PRODUCTS
      .filter(p => !activeCategory || p.category === activeCategory)
      .filter(p => !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.monthlyRent - b.monthlyRent;
        if (sortBy === 'price-desc') return b.monthlyRent - a.monthlyRent;
        return a.name.localeCompare(b.name);
      });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <main>
      <div className="container" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <h1 className="text-gradient" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '8px', textAlign: 'center' }}>
          Select Your Upgrade
        </h1>
        <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: '48px', fontSize: '18px' }}>
          All plans include AppleCare+, Theft Protection, and annual upgrades.
        </p>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid',
                borderColor: activeCategory === cat.value ? 'var(--color-cosmic-orange)' : 'rgba(255,255,255,0.15)',
                background: activeCategory === cat.value ? 'var(--color-cosmic-orange)' : 'transparent',
                color: activeCategory === cat.value ? 'white' : 'var(--color-text-secondary)',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search + Sort bar */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} />
            <input
              type="text"
              placeholder="Search devices..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%', padding: '10px 14px 10px 40px',
                background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-md)', color: 'var(--color-text-primary)',
                fontSize: '14px',
              }}
            />
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as 'price-asc' | 'price-desc' | 'name')}
            style={{
              padding: '10px 16px', background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)',
              color: 'var(--color-text-primary)', fontSize: '14px', cursor: 'pointer',
            }}
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name A–Z</option>
          </select>
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--color-text-secondary)' }}>
            No devices match your search.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
      <CompareDrawer />
    </main>
  );
}
