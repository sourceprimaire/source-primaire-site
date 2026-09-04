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
              Primary Source is an independent publishing house dedicated to the intersection
              of narrative and sound. We curate works that serve as sonic documents, where
              every release begins with a story and ends with a listening experience. Our
              editorial vision values curiosity, thoughtful ideas, and the meticulous
              craftsmanship required for long-term archival value.
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
