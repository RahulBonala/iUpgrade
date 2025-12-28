import { PRODUCTS } from '@/lib/constants';
import ProductDetail from './ProductDetail';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        id: product.id,
    }));
}

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const resolvedParams = await params;
    const product = PRODUCTS.find((p) => p.id === resolvedParams.id);

    if (!product) {
        return {
            title: 'Product Not Found',
        }
    }

    return {
        title: `${product.name} | iUpgrade`,
        description: `Rent ${product.name} for ₹${product.monthlyRent.toLocaleString('en-IN')}/month. ${product.tagline}`,
    }
}

export default async function Page({ params }: Props) {
    const resolvedParams = await params;
    const product = PRODUCTS.find(p => p.id === resolvedParams.id);

    if (!product) {
        notFound();
    }

    return <ProductDetail product={product} />;
}
