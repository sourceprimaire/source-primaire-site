import type { Metadata } from 'next';
import Link from 'next/link';
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
          <div className="edition-title">
            <p className="eyebrow">ÉDITION {edition.index}</p>
            <h1>{edition.title}</h1>
            <p>{edition.type}</p>
          </div>
          <div className="edition-copy">
            {edition.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="edition-meta">
              {edition.metadata.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </header>

        <section className={`edition-gallery gallery-${edition.slug}`}>
          {edition.images.map((image, index) => (
            <figure key={image} className={index === 0 ? 'gallery-cover' : undefined}>
              <img src={image} alt={`${edition.title}, vue ${index + 1}`} />
            </figure>
          ))}
        </section>

        <nav className="edition-pagination" aria-label="Publications adjacentes">
          {previous ? (
            <Link href={`/editions/${previous.slug}/`}>
              <span>PRÉCÉDENT</span>
              <strong>{previous.title}</strong>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/editions/${next.slug}/`}>
              <span>SUIVANT</span>
              <strong>{next.title}</strong>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>
    </SiteShell>
  );
}
