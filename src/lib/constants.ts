export interface Product {
    id: string;
    name: string;
    tagline: string;
    image: string;
    baseDeposit: number;
    monthlyRent: number;
    specs: string[];
    colors: string[];
}

export const PRODUCTS: Product[] = [
    {
        id: 'iphone-17-pro-max',
        name: 'iPhone 17 Pro Max',
        tagline: 'The Ultimate. Titanium.',
        image: '/images/iphone-17-pro-max.png',
        baseDeposit: 15000,
        monthlyRent: 6999,
        specs: ['A19 Pro Chip', '48MP Camera', 'Titanium Design'],
        colors: ['Cosmic Black', 'Titanium Natural', 'Cosmic Orange'],
    },
    {
        id: 'iphone-17-pro',
        name: 'iPhone 17 Pro',
        tagline: 'Pro Power. Perfect Size.',
        image: '/images/iphone-17-pro-max.png', // Reusing Pro Max image for consistency if specific Pro one isn't distinct enough or just as fallback
        baseDeposit: 15000,
        monthlyRent: 5999,
        specs: ['A19 Pro Chip', 'Triple Lens', 'ProMotion'],
        colors: ['Cosmic Black', 'Titanium Blue'],
    },
    {
        id: 'iphone-17-air',
        name: 'iPhone 17 Air',
        tagline: 'Impossibly Thin.',
        image: '/images/iphone-17-air.png',
        baseDeposit: 10000,
        monthlyRent: 4999,
        specs: ['A19 Chip', 'Ultra Thin', 'All-Day Battery'],
        colors: ['Starlight', 'Midnight', 'Purple'],
    },
    {
        id: 'macbook-pro-m4',
        name: 'MacBook Pro M4',
        tagline: 'Mind-Blowing. Head-Turning.',
        image: '/images/macbook-pro.png',
        baseDeposit: 20000,
        monthlyRent: 7999,
        specs: ['M4 Max Chip', 'Liquid Retina XDR', '22hr Battery'],
        colors: ['Space Black', 'Silver'],
    },
    {
        id: 'airpods-pro',
        name: 'AirPods Pro 3',
        tagline: 'Magic like you’ve never heard.',
        image: '/images/airpods.png',
        baseDeposit: 2000,
        monthlyRent: 999,
        specs: ['H3 Chip', 'Lossless Audio', 'Adaptive ANC'],
        colors: ['White'],
    },
];
