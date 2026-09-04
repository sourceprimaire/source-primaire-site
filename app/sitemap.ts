import type { MetadataRoute } from 'next';
import { editions } from '@/lib/editions';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.source-primaire.fr';
  return [
    '',
    '/recherche',
    '/editions',
    '/a-propos',
    '/contact',
    ...editions.map((edition) => `/editions/${edition.slug}`),
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date('2026-09-04') }));
}
