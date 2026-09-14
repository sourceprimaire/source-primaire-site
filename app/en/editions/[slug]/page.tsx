import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/site-shell';
import { englishEditions, getEnglishEdition } from '@/lib/editions';

export function generateStaticParams() {
  return englishEditions.map((edition) => ({ slug: edition.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const edition = getEnglishEdition(slug);
  return { title: edition?.title ?? 'Edition' };
}

export default async function EnglishEditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const edition = getEnglishEdition(slug);

  if (!edition) notFound();

  const editionIndex = englishEditions.findIndex((item) => item.slug === edition.slug);
  const previous = editionIndex > 0 ? englishEditions[editionIndex - 1] : undefined;
  const next =
    editionIndex < englishEditions.length - 1
      ? englishEditions[editionIndex + 1]
      : undefined;

  return (
    <SiteShell
      locale="en"
      active="/en/editions/"
      alternateHref={`/editions/${edition.slug}/`}
    >
      <main className="page-content edition-detail">
        <header className="edition-header">
          <figure className="edition-feature">
            <img src={edition.images[0]} alt={edition.title} />
          </figure>
          <div className="edition-content">
            <div className="edition-title">
              <p className="eyebrow">EDITION {edition.index}</p>
              <h1>
                {edition.detailTitle.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
            </div>
            <div className="edition-copy">
              <div className="edition-meta">
                {edition.metadata.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              {edition.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </header>

        <section className={`edition-gallery gallery-${edition.slug}`}>
          {edition.images.slice(1).map((image, index) => (
            <figure key={image}>
              <img src={image} alt={`${edition.title}, view ${index + 2}`} />
            </figure>
          ))}
        </section>

        <nav className="edition-pagination" aria-label="Adjacent publications">
          {previous ? (
            <a href={`/en/editions/${previous.slug}/`}>
              <span>PREVIOUS</span>
              <strong>{previous.title}</strong>
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a href={`/en/editions/${next.slug}/`}>
              <span>NEXT</span>
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
