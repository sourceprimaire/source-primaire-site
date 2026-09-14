import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'Clients', robots: { index: false } };

const clientGroups = [
  {
    title: 'Art market professionals',
    names: ['Galerie de France, Paris', 'Collectio', 'Daban’s limited', 'Georges Gautier Fine Art'],
  },
  {
    title: 'Artists and estates',
    names: ['Fonds Gilles Aillaud', 'Martine Martine', 'Martial Raysse', 'Fonds de dotation Judit Reigl'],
  },
  {
    title: 'Private collections',
    names: ['Collection Catherine Thieck, Paris', 'Other private collections'],
  },
];

export default function EnglishClientsPage() {
  return (
    <SiteShell locale="en" alternateHref="/clients/">
      <main className="page-content standard-page clients-page">
        <header>
          <p className="eyebrow">CLIENTS</p>
          <h1>They have placed their trust in us</h1>
        </header>
        <section className="client-grid">
          {clientGroups.map((group) => (
            <article key={group.title}>
              <h2>{group.title}</h2>
              {group.names.map((name) => (
                <p key={name}>{name}</p>
              ))}
            </article>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
