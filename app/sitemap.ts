import type { MetadataRoute } from 'next';
import { editions } from '@/lib/editions';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://source-primaire.fr';
  const frenchPaths = [
    '',
    '/recherche',
    '/editions',
    '/a-propos',
    '/contact',
    ...editions.map((edition) => `/editions/${edition.slug}`),
  ];
  const englishPaths = [
    '/en',
    '/en/inventories',
    '/en/editions',
    '/en/about',
    '/en/contact',
    ...editions.map((edition) => `/en/editions/${edition.slug}`),
  ];

  return [...frenchPaths, ...englishPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date('2026-09-14'),
  }));
}
