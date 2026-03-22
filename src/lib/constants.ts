export interface Product {
    id: string;
    name: string;
    tagline: string;
    description: string;
    monthlyRent: number;
    mrp: number;
    baseDeposit: number;
    image: string;
    images?: string[];
    category: 'phone' | 'laptop' | 'watch' | 'audio';
    specs: string[];
    colors: string[];
    inStock: boolean;
    isNew?: boolean;
    isTrending?: boolean;
}

export const PRODUCTS: Product[] = [
    {
        id: 'iphone-17-pro-max',
        name: 'iPhone 17 Pro Max',
        tagline: 'Titanium. So strong. So light. So Pro.',
        description: 'The ultimate iPhone. Featuring the A19 Pro chip, a game-changing 48MP Pro Fusion camera system, and the all-new Action button. Forged in titanium.',
        monthlyRent: 6999,
        mrp: 189900,
        baseDeposit: 15000,
        image: '/images/iphone-17-pro-max.png',
        images: ['/images/iphone-17-pro-max.png'],
        category: 'phone',
        specs: ['A19 Pro Chip', '48MP Pro Fusion', 'Titanium Design', '2TB Storage'],
        colors: ['Cosmic Orange', 'Deep Blue', 'Titanium Silver'],
        inStock: true,
        isNew: true,
        isTrending: true
    },
    {
        id: 'iphone-17-pro',
        name: 'iPhone 17 Pro',
        tagline: 'A19 Pro. The most powerful chip ever in a smartphone.',
        description: 'Experience the power of the A19 Pro chip in a compact design. Stunning 6.3-inch Super Retina XDR display with ProMotion.',
        monthlyRent: 5499,
        mrp: 149900,
        baseDeposit: 12000,
        image: '/images/iphone-17-pro.png',
        images: ['/images/iphone-17-pro.png'],
        category: 'phone',
        specs: ['A19 Pro Chip', '48MP Pro Fusion', '6.3" Display', 'Center Stage'],
        colors: ['Cosmic Orange', 'Deep Blue', 'Silver'],
        inStock: true,
        isNew: true,
        isTrending: true
    },
    {
        id: 'macbook-pro-m5',
        name: 'MacBook Pro 14"',
        tagline: 'Mind-blowing. Head-turning.',
        description: 'Supercharged by M5. The most advanced chips ever built for a personal computer. Up to 22 hours of battery life.',
        monthlyRent: 8499,
        mrp: 249900,
        baseDeposit: 20000,
        image: '/images/macbook-pro.png',
        images: ['/images/macbook-pro.png'],
        category: 'laptop',
        specs: ['M5 Pro/Max', 'Liquid Retina XDR', 'Space Black', '22hr Battery'],
        colors: ['Space Black', 'Silver'],
        inStock: true,
        isTrending: true
    },
    {
        id: 'apple-watch-ultra-3',
        name: 'Apple Watch Ultra 3',
        tagline: 'Adventure awaits.',
        description: 'The most rugged and capable Apple Watch. Now in Black Titanium.',
        monthlyRent: 3499,
        mrp: 89900,
        baseDeposit: 8000,
        image: '/images/watch-ultra.png',
        images: ['/images/watch-ultra.png'],
        category: 'watch',
        specs: ['49mm Black Titanium', 'Orange Action Btn', '100m Water Resist', 'Siren'],
        colors: ['Black Titanium', 'Natural Titanium'],
        inStock: true
    },
    {
        id: 'airpods-4',
        name: 'AirPods 4',
        tagline: 'Magic like you’ve never heard.',
        description: 'Rebuilt from the sound up. Adaptive Audio, personalized spatial audio, and active noise cancellation.',
        monthlyRent: 1299,
        mrp: 29900,
        baseDeposit: 3000,
        image: '/images/airpods.png',
        images: ['/images/airpods.png'],
        category: 'audio',
        specs: ['H2 Chip', 'Adaptive Audio', 'USB-C Case', 'Shorter Stem'],
        colors: ['White'],
        inStock: true
    }
];
