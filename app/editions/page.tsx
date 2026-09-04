import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';
import { editions } from '@/lib/editions';

export const metadata: Metadata = { title: 'Éditions' };

export default function EditionsPage() {
  return (
    <SiteShell active="/editions/">
      <main className="page-content standard-page">
        <header className="page-intro editions-intro">
          <figure className="editions-image">
            <img
              src="/assets/editions/summer-24/cover.jpg"
              alt="Summer 24, publication photographique"
            />
          </figure>
          <div>
            <h1 className="eyebrow">ÉDITIONS</h1>
            <p className="lead">
              Nous accompagnons les artistes, auteurs, photographes et musiciens dans la
              conception, l&apos;édition et la publication de livres, objets imprimés et éditions
              sonores qui documentent et prolongent leur travail.
            </p>
          </div>
        </header>

        <section className="edition-grid" aria-label="Publications">
          {editions.map((edition) => (
            <Link className="edition-card" href={`/editions/${edition.slug}/`} key={edition.slug}>
              <figure>
                <img src={edition.cover} alt={edition.title} />
              </figure>
              <div className="edition-caption">
                <span>{edition.index}</span>
                <span>{edition.title}</span>
                <span>{edition.type}</span>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
