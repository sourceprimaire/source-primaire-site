import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'Clients', robots: { index: false } };

const clientGroups = [
  {
    title: 'Acteurs du marché de l’art',
    names: ['Galerie de France, Paris', 'Collectio', 'Daban’s limited', 'Georges Gautier Fine Art'],
  },
  {
    title: 'Artistes & estates',
    names: ['Fonds Gilles Aillaud', 'Martine Martine', 'Martial Raysse', 'Fonds de dotation Judit Reigl'],
  },
  {
    title: 'Collections privées',
    names: ['Collection Catherine Thieck, Paris', 'Autres collections particulières'],
  },
];

export default function ClientsPage() {
  return (
    <SiteShell>
      <main className="page-content standard-page clients-page">
        <header>
          <p className="eyebrow">CLIENTS</p>
          <h1>Ils nous ont fait confiance</h1>
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
