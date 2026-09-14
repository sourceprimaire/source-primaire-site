import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  description:
    'Inventory, documentation, publishing and interpretation of artworks, objects and collections.',
};

export default function EnglishHome() {
  return (
    <SiteShell locale="en" alternateHref="/">
      <main className="page-content home-content">
        <h1 className="visually-hidden">Source Primaire</h1>
        <figure className="home-figure">
          <img
            src="/assets/pages/home-paper-red-v1.webp"
            alt="Translucent archival papers and a red fragment on an ivory background"
            width="1254"
            height="1254"
          />
        </figure>
      </main>
    </SiteShell>
  );
}
