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
              src="/assets/pages/editions-photo-soft-v2.png"
              alt="Livre cousu à la main, pages translucides et carré rouge"
            />
          </figure>
          <div>
            <h1 className="eyebrow section-heading">
              <span>ÉDITIONS</span>
            </h1>
            <div className="lead">
              <p>
                À l&apos;issue de la phase de <strong>RECHERCHE</strong>, nous proposons à nos clients
                de prolonger ce travail par un <strong>projet éditorial conçu sur mesure</strong>,
                consacré à tout ou partie de leur collection. De la conception éditoriale et
                artistique à la réalisation, nous imaginons avec eux la forme la plus juste pour
                valoriser et transmettre son histoire.
              </p>
              <p>
                Indépendamment de la recherche, nous accompagnons également les artistes,
                auteurs, photographes et musiciens dans la conception, l&apos;édition et la
                publication de livres, objets imprimés et éditions sonores qui documentent et
                prolongent leur travail.
              </p>
            </div>
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
