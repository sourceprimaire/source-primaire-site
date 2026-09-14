import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { EditionCard } from '@/components/edition-card';
import { englishEditions } from '@/lib/editions';

export const metadata: Metadata = { title: 'Editions' };

export default function EnglishEditionsPage() {
  return (
    <SiteShell locale="en" active="/en/editions/" alternateHref="/editions/">
      <main className="page-content standard-page">
        <header className="page-intro editions-intro">
          <EditionCard edition={englishEditions[0]} locale="en" />
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
          {englishEditions.slice(1).map((edition) => (
            <EditionCard edition={edition} locale="en" key={edition.slug} />
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
