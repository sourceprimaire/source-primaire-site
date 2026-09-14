import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { englishEditions } from '@/lib/editions';

export const metadata: Metadata = { title: 'Editions' };

export default function EnglishEditionsPage() {
  return (
    <SiteShell locale="en" active="/en/editions/" alternateHref="/editions/">
      <main className="page-content standard-page">
        <header className="page-intro editions-intro">
          <figure className="editions-image">
            <img
              src="/assets/pages/editions-photo-soft-v2.png"
              alt="Hand-sewn book, translucent pages and a red square"
            />
          </figure>
          <div>
            <h1 className="eyebrow section-heading">
              <span>EDITIONS</span>
            </h1>
            <div className="lead">
              <p>
                We offer our clients the opportunity to extend their inventory and documentation
                work into a <strong>bespoke editorial project</strong> devoted to all or part of
                their collection. From editorial and artistic direction through to production,
                we work with them to devise the form best suited to presenting and passing on its
                history.
              </p>
              <p>
                Separately from this work, we also support artists, writers, photographers and
                musicians in the conception, editing and publication of{' '}
                <strong>standalone projects</strong>: books, printed matter and sound editions
                that document and extend their practice.
              </p>
            </div>
          </div>
        </header>

        <section className="edition-grid" aria-label="Publications">
          {englishEditions.map((edition) => (
            <a
              className="edition-card"
              href={`/en/editions/${edition.slug}/`}
              key={edition.slug}
            >
              <figure>
                <img src={edition.cover} alt={edition.title} />
              </figure>
              <div className="edition-caption">
                <span>{edition.index}</span>
                <span>{edition.title}</span>
                <span>{edition.type}</span>
              </div>
            </a>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
