import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/constants';

export const metadata = {
    title: 'Catalog | iUpgrade',
    description: 'Choose your device. Upgrade annually.',
};

export default function Catalog() {
    return (
        <main>
            <Navbar />
            <div className="container" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
                <h1 className="text-gradient" style={{
                    fontSize: '48px',
                    fontWeight: '700',
                    marginBottom: '16px',
                    textAlign: 'center'
                }}>
                    Select Your Upgrade
                </h1>
                <p style={{
                    textAlign: 'center',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '60px',
                    fontSize: '18px'
                }}>
                    All plans include AppleCare+, Theft Protection, and annual upgrades.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '32px'
                }}>
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </main>
    );
}
