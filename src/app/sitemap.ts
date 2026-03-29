import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://iupgrade.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/catalog',
    '/how-it-works',
    '/compare',
    '/support',
    '/refer',
    '/privacy',
    '/terms',
    '/login',
  ];

  const productPages = [
    '/catalog/iphone-17-pro-max',
    '/catalog/iphone-17-pro',
    '/catalog/macbook-pro-m5',
    '/catalog/apple-watch-ultra-3',
    '/catalog/airpods-4',
  ];

  return [...staticPages, ...productPages].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/catalog/') ? 0.8 : 0.6,
  }));
}
