import { PRODUCTS } from '@/lib/constants';
import ProductDetail from './ProductDetail';

export async function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        id: product.id,
    }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = PRODUCTS.find(p => p.id === id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return <ProductDetail product={product} />;
}
