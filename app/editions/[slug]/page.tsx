import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/site-shell';
import { editions, getEdition } from '@/lib/editions';

export function generateStaticParams() {
  return editions.map((edition) => ({ slug: edition.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const edition = getEdition(slug);
  return { title: edition?.title ?? 'Édition' };
}

export default async function EditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const edition = getEdition(slug);

  if (!edition) notFound();

  const editionIndex = editions.findIndex((item) => item.slug === edition.slug);
  const previous = editionIndex > 0 ? editions[editionIndex - 1] : undefined;
  const next = editionIndex < editions.length - 1 ? editions[editionIndex + 1] : undefined;

  return (
    <SiteShell active="/editions/">
      <main className="page-content edition-detail">
        <header className="edition-header">
          <figure className="edition-feature">
            <img src={edition.images[0]} alt={edition.title} />
          </figure>
          <div className="edition-content">
            <div className="edition-title">
              <p className="eyebrow">ÉDITION {edition.index}</p>
              <h1>{edition.title}</h1>
            </div>
            <div className="edition-copy">
              {edition.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="edition-meta">
                <p>{edition.type}</p>
                {edition.metadata.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className={`edition-gallery gallery-${edition.slug}`}>
          {edition.images.slice(1).map((image, index) => (
            <figure key={image}>
              <img src={image} alt={`${edition.title}, vue ${index + 2}`} />
            </figure>
          ))}
        </section>

        <nav className="edition-pagination" aria-label="Publications adjacentes">
          {previous ? (
            <a href={`/editions/${previous.slug}/`}>
              <span>PRÉCÉDENT</span>
              <strong>{previous.title}</strong>
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a href={`/editions/${next.slug}/`}>
              <span>SUIVANT</span>
              <strong>{next.title}</strong>
            </a>
          ) : (
            <span />
          )}
        </nav>
      </main>
    </SiteShell>
  );
}
